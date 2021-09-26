// Once again, max credit to the emotion team
// https://github.com/emotion-js/emotion/blob/master/packages/stylis/build.js
const stylisPath = require.resolve("stylis");
const fs = require("fs");
const { promisify } = require("util");
const j = require("jscodeshift");
const prettier = require("prettier");
// eslint-disable-next-line import/no-extraneous-dependencies
const recast = require("recast");
const request = require("request-promise-native");

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const simplifySet = (src) =>
  j(src)
    .find(j.FunctionDeclaration, { id: { name: "set" } })
    .forEach((path) => {
      j(path).replaceWith(
        recast.parse(`function set(options) {
        var prefixOpt = options.prefix
        if (prefixOpt!==undefined) {
          should = null
					if (!prefixOpt) {
						prefix = 0
					} else if (typeof prefixOpt !== 'function') {
						prefix = 1
					} else {
						prefix = 2
						should = prefixOpt
					}
        }
        return set
      }`).program.body[0]
      );
    })
    .toSource();

const removeOptions = (src) =>
  j(src)
    .find(j.SwitchStatement)
    .forEach((thing) => {
      thing.value.cases = thing.value.cases.filter((node) => {
        if (!node.test) return true;
        switch (node.test.value) {
          case "keyframe":
          case "cascade":
          case "preserve":
          case "semicolon":
          case "compress":
          case "global": {
            return false;
          }
          default: {
            return true;
          }
        }
      });
    })
    .toSource();

const setOptions = (src) =>
  j(src)
    .find(j.VariableDeclarator)
    .forEach((path) => {
      switch (path.value.id.name) {
        case "escape":
        case "keyed": {
          path.value.init.value = 0;
          return;
        }
        case "semicolon": {
          path.value.init.value = 1;
        }
      }
    })
    .toSource();

const removeUMDWrapper = (src) => {
  let code;
  j(src)
    .find(j.FunctionExpression, { id: { name: "factory" } })
    .forEach((path) => {
      code = j(path).toSource();
    })
    .toSource();
  return "'use strict';\nwindow['stylis'] = " + code;
};

async function doThing() {
  const stylisSrc = (await readFile(stylisPath))
    .toString()
    .replace(
      "cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON",
      "true === false"
    )
    .replace(
      "comment + quote + parentheses + bracket + semicolon === 0",
      "true === false"
    )
    .replace("switch (selector.charCodeAt(1))", "switch (100)")
    .replace("(insert === 1)", "(true === false)")
    .replace("input.charCodeAt(9)*keyed", "0")
    .replace("switch (cascade + level) {", "switch (2) {")
    .replace("compress*code === 0", "true")
    .replace(`typeof(output = result) !== 'string'`, "(output = result)")
    // .replace("stylis['set'] = set", '')
    // .replace('set(options)', '')
    .replace("this !== void 0 && this.constructor === stylis", "false")
    .replace("return factory(selector)", "");
  const result = removeUMDWrapper(
    simplifySet(setOptions(removeOptions(stylisSrc)))
  );
  // await writeFile('./src/stylis.js', result)
  console.log("start request");
  const data = (
    await request("https://closure-compiler.appspot.com/compile", {
      method: "POST",
      form: {
        js_code: result,
        compilation_level: "ADVANCED_OPTIMIZATIONS",
        output_format: "text",
        output_info: "compiled_code",
      },
    })
  ).toString();

  let finalSrc = data
    .replace(/([\w]+)\.charCodeAt\((.+?)\)/g, "charCodeAt($1, $2)")
    .replace(
      /([\w]+)\.replace\(([\w\s'"+-]+),([\w\s'"$:\-+-]+)\)/g,
      "replace($1, $2, $3)"
    )
    .replace(/([\w]+)\.replace\(([\w\s'"+-]+), ''\)/g, "replace($1, $2, $3)")
    .replace(/([\w]+)\.indexOf\(([^)]+?)\)/g, "indexOf($1, $2)")
    .replace(/([\w]+)\.substring\(([^)]+?)\)/g, "substring($1, $2)");

  await writeFile(
    "./src/index.js",
    top +
      prettier
        .format(finalSrc, {
          semi: false,
          singleQuote: true,
        })
        .replace("window.stylis =", "export default ")
        .replace(/'-webkit-'/g, "WEBKIT")
        .replace(/'-ms-'/g, "MS")
        .replace(/'-moz-'/g, "MOZ")
        .replace(/'flex-'/g, "FLEX")
        .replace(/'([^']*?)-webkit-([^']*?)'/g, `'$1' + WEBKIT + '$2'`)
        .replace(/'([^']*?)-moz-([^']*?)'/g, `'$1' + MOZ + '$2'`)
        .replace(/'([^']*?)-ms-([^']*?)'/g, `'$1' + MS + '$2'`)
        .replace(/'([^']*?)flex-([^']*?)'/g, `'$1' + FLEX + '$2'`)
        .replace(/'\$1'/g, "$$1")
        .replace(/'\$2'/g, "$$2")
        .replace(/'\$1 \$2'/g, `$$1 + ' ' + $$2`)
        .replace(/^([\s]+)'' \+/gm, "$1")
        .replace(/return '' \+/gm, "return")
        .replace(/\+ '' \+/g, " + ")
        .replace(/'' \+/g, "")
        .replace(/\+ ''/g, "")
  );

  console.log("done");
}

const top = `
const WEBKIT = '-webkit-'
const MOZ = '-moz-'
const MS = '-ms-'
const FLEX = 'flex-'
const $1 = '$1'
const $2 = '$2'
function charCodeAt (s, code) { return s.charCodeAt(code) }
function replace (s, i, o) { return s.replace(i, o) }
function indexOf (s, a, b) { return s.indexOf(a, b) }
function substring (s, a, b) { return s.substring(a, b) }
`;
doThing();
