<hr/>

<img src='https://github.com/dash-ui/styles/raw/main/assets/logo.png'/>

> A fork of @emotion/stylis that makes it even smaller, still

```sh
npm i @dash-ui/stylis
```

<p>
  <a href="https://bundlephobia.com/result?p=@dash-ui/stylis">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@dash-ui/stylis?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/@dash-ui/stylis">
    <img alt="Types" src="https://img.shields.io/npm/types/@dash-ui/stylis?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Code coverage report" href="https://codecov.io/gh/dash-ui/stylis">
    <img alt="Code coverage" src="https://img.shields.io/codecov/c/gh/dash-ui/stylis?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Build status" href="https://github.com/dash-ui/stylis/actions/workflows/release.yml">
    <img alt="Build status" src="https://img.shields.io/github/workflow/status/dash-ui/stylis/release/main?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@dash-ui/stylis">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@dash-ui/stylis?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@dash-ui/stylis?style=for-the-badge&labelColor=24292e">
  </a>
</p>

---

`@dash-ui/stylis` is a version of [Stylis](https://github.com/thysultan/stylis.js) that has been modified slightly to make it smaller. The only Stylis option that can be changed is `prefix`, the rest of the options are already set to the values shown below and cannot be changed. This package also only exports the constructer, so you have to do `new Stylis()` and use the result from that rather than directly calling `Stylis`. The result of that function also cannot be used to create a stylis instance unlike stylis.

```js
type Options = {
  global: false,
  preserve: false,
  keyframe: false,
  semicolon: true,
  cascade: true,
  compress: false,
  prefix: boolean | ((key: string, value: string, context: number) => boolean),
};
```

```jsx
import Stylis from "@dash-ui/stylis";

const stylis = new Stylis();

stylis(".css-hash", "display:flex;"); // .css-hash{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}
```

## Building this package

To build this package from a newer version of stylis, update the version of stylis that is installed as a devDependency and run `node build.js` in the directory of this package. This will read the source of stylis, transform it slightly, use the [Google Closure Compiler REST API](https://developers.google.com/closure/compiler/docs/gettingstarted_api) to minify it, format it with Prettier and then write it to `src/stylis.min.js`.

# Thanks

- The [emotion](https://github.com/emotion-js) team did most of the work on this one, I just did some extra minifying ❤️
- Stylis was written by [Sultan Tarimo](https://github.com/thysultan). ❤️

## LICENSE

MIT
