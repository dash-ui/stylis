
const WEBKIT = '-webkit-'
const MOZ = '-moz-'
const MS = '-ms-'
function charCodeAt (s, code) { return s.charCodeAt(code) }
function replace (s, i, o) { return s.replace(i, o) }
function indexOf (s, a, b) { return s.indexOf(a, b) }
function substring (s, a, b) { return s.substring(a, b) }
export default  function (Z) {
  function L(d, c, e, h, a) {
    for (
      var m = 0,
        b = 0,
        v = 0,
        n = 0,
        q,
        g,
        w = 0,
        E = 0,
        k,
        u = (k = q = 0),
        l = 0,
        r = 0,
        G = 0,
        t = 0,
        I = e.length,
        H = I - 1,
        x,
        f = '',
        p = '',
        M = '',
        N = '',
        B;
      l < I;

    ) {
      g = charCodeAt(e, l)
      l === H &&
        0 !== b + n + v + m &&
        (0 !== b && (g = 47 === b ? 10 : 47), (n = v = m = 0), I++, H++)
      if (0 === b + n + v + m) {
        if (
          l === H &&
          (0 < r && (f = replace(f, O, '')), 0 < f.trim().length)
        ) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break
            default:
              f += e.charAt(l)
          }
          g = 59
        }
        switch (g) {
          case 123:
            f = f.trim()
            q = charCodeAt(f, 0)
            k = 1
            for (t = ++l; l < I; ) {
              switch ((g = charCodeAt(e, l))) {
                case 123:
                  k++
                  break
                case 125:
                  k--
                  break
                case 47:
                  switch ((g = charCodeAt(e, l + 1))) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < H; ++u)
                          switch (charCodeAt(e, u)) {
                            case 47:
                              if (
                                42 === g &&
                                42 === charCodeAt(e, u - 1) &&
                                l + 2 !== u
                              ) {
                                l = u + 1
                                break a
                              }
                              break
                            case 10:
                              if (47 === g) {
                                l = u + 1
                                break a
                              }
                          }
                        l = u
                      }
                  }
                  break
                case 91:
                  g++
                case 40:
                  g++
                case 34:
                case 39:
                  for (; l++ < H && charCodeAt(e, l) !== g; );
              }
              if (0 === k) break
              l++
            }
            k = substring(e, t, l)
            0 === q && (q = (f = replace(f, fa, '').trim()).charCodeAt(0))
            switch (q) {
              case 64:
                0 < r && (f = replace(f, O, ''))
                g = charCodeAt(f, 1)
                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c
                    break
                  default:
                    r = P
                }
                k = L(c, r, k, g, a + 1)
                t = k.length
                0 < A &&
                  ((r = aa(P, f, G)),
                  (B = F(3, k, r, c, C, z, t, g, a, h)),
                  (f = r.join('')),
                  void 0 !== B &&
                    0 === (t = (k = B.trim()).length) &&
                    ((g = 0), (k = '')))
                if (0 < t)
                  switch (g) {
                    case 115:
                      f = replace(f, ha, ia)
                    case 100:
                    case 109:
                    case 45:
                      k = f + '{' + k + '}'
                      break
                    case 107:
                      f = replace(f, ja, '$1 $2')
                      k = f + '{' + k + '}'
                      k =
                        1 === y || (2 === y && J('@' + k, 3))
                          ? '@' + WEBKIT  +  k + '@' + k
                          : '@' + k
                      break
                    default:
                      ;(k = f + k), 112 === h && (k = ((p += k), ''))
                  }
                else k = ''
                break
              default:
                k = L(c, aa(c, f, G), k, h, a + 1)
            }
            M += k
            k = G = r = u = q = 0
            f = ''
            g = charCodeAt(e, ++l)
            break
          case 125:
          case 59:
            f = (0 < r ? replace(f, O, '') : f).trim()
            if (1 < (t = f.length))
              switch (
                (0 === u &&
                  ((q = charCodeAt(f, 0)), 45 === q || (96 < q && 123 > q)) &&
                  (t = (f = replace(f, ' ', ':')).length),
                0 < A &&
                  void 0 !== (B = F(1, f, c, d, C, z, p.length, h, a, h)) &&
                  0 === (t = (f = B.trim()).length) &&
                  (f = '\x00\x00'),
                (q = charCodeAt(f, 0)),
                (g = charCodeAt(f, 1)),
                q)
              ) {
                case 0:
                  break
                case 64:
                  if (105 === g || 99 === g) {
                    N += f + e.charAt(l)
                    break
                  }
                default:
                  58 !== charCodeAt(f, t - 1) &&
                    (p += Q(f, q, g, charCodeAt(f, 2)))
              }
            G = r = u = q = 0
            f = ''
            g = charCodeAt(e, ++l)
        }
      }
      switch (g) {
        case 13:
        case 10:
          47 === b
            ? (b = 0)
            : 0 === 1 + q &&
              107 !== h &&
              0 < f.length &&
              ((r = 1), (f += '\x00'))
          0 < A * ba && F(0, f, c, d, C, z, p.length, h, a, h)
          z = 1
          C++
          break
        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++
            break
          }
        default:
          z++
          x = e.charAt(l)
          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b)
                switch (w) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    x = ''
                    break
                  default:
                    32 !== g && (x = ' ')
                }
              break
            case 0:
              x = '\\0'
              break
            case 12:
              x = '\\f'
              break
            case 11:
              x = '\\v'
              break
            case 38:
              0 === n + b + m && ((r = G = 1), (x = '\f' + x))
              break
            case 108:
              if (0 === n + b + m + D && 0 < u)
                switch (l - u) {
                  case 2:
                    112 === w && 58 === charCodeAt(e, l - 3) && (D = w)
                  case 8:
                    111 === E && (D = E)
                }
              break
            case 58:
              0 === n + b + m && (u = l)
              break
            case 44:
              0 === b + v + n + m && ((r = 1), (x += '\r'))
              break
            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n)
              break
            case 91:
              0 === n + b + v && m++
              break
            case 93:
              0 === n + b + v && m--
              break
            case 41:
              0 === n + b + m && v--
              break
            case 40:
              if (0 === n + b + m) {
                if (0 === q)
                  switch (2 * w + 3 * E) {
                    case 533:
                      break
                    default:
                      q = 1
                  }
                v++
              }
              break
            case 64:
              0 === b + v + n + m + u + k && (k = 1)
              break
            case 42:
            case 47:
              if (!(0 < n + m + v))
                switch (b) {
                  case 0:
                    switch (2 * g + 3 * charCodeAt(e, l + 1)) {
                      case 235:
                        b = 47
                        break
                      case 220:
                        ;(t = l), (b = 42)
                    }
                    break
                  case 42:
                    47 === g &&
                      42 === w &&
                      t + 2 !== l &&
                      (33 === charCodeAt(e, t + 2) &&
                        (p += substring(e, t, l + 1)),
                      (x = ''),
                      (b = 0))
                }
          }
          0 === b && (f += x)
      }
      E = w
      w = g
      l++
    }
    t = p.length
    if (0 < t) {
      r = c
      if (
        0 < A &&
        ((B = F(2, p, r, d, C, z, t, h, a, h)),
        void 0 !== B && 0 === (p = B).length)
      )
        return N + p + M
      p = r.join(',') + '{' + p + '}'
      if (0 !== y * D) {
        2 !== y || J(p, 2) || (D = 0)
        switch (D) {
          case 111:
            p = replace(p, ka, ':' + MOZ + '$1') + p
            break
          case 112:
            p =
              replace(p, R, '::' + WEBKIT + 'input-$1') +
              replace(p, R, '::' + MOZ + '$1') +
              replace(p, R, ':' + MS + 'input-$1') +
              p
        }
        D = 0
      }
    }
    return N + p + M
  }
  function aa(d, c, e) {
    var h = c.trim().split(la)
    c = h
    var a = h.length,
      m = d.length
    switch (m) {
      case 0:
      case 1:
        var b = 0
        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b)
          c[b] = ca(d, c[b], e, m).trim()
        break
      default:
        var v = (b = 0)
        for (c = []; b < a; ++b)
          for (var n = 0; n < m; ++n) c[v++] = ca(d[n] + ' ', h[b], e, m).trim()
    }
    return c
  }
  function ca(d, c, e) {
    var h = charCodeAt(c, 0)
    33 > h && (h = (c = c.trim()).charCodeAt(0))
    switch (h) {
      case 38:
        return c.replace(S, '$1' + d.trim())
      case 58:
        return d.trim() + c.replace(S, '$1' + d.trim())
      default:
        if (0 < 1 * e && 0 < indexOf(c, '\f'))
          return c.replace(S, (58 === charCodeAt(d, 0) ? '' : '$1') + d.trim())
    }
    return d + c
  }
  function Q(d, c, e, h) {
    var a = d + ';',
      m = 2 * c + 3 * e + 4 * h
    if (944 === m) {
      d = indexOf(a, ':', 9) + 1
      var b = substring(a, d, a.length - 1).trim()
      b = substring(a, 0, d).trim() + b + ';'
      return 1 === y || (2 === y && J(b, 1)) ? WEBKIT + b + b : b
    }
    if (0 === y || (2 === y && !J(a, 1))) return a
    switch (m) {
      case 1015:
        return 97 === charCodeAt(a, 10) ? WEBKIT + a + a : a
      case 951:
        return 116 === charCodeAt(a, 3) ? WEBKIT + a + a : a
      case 963:
        return 110 === charCodeAt(a, 5) ? WEBKIT + a + a : a
      case 1009:
        if (100 !== charCodeAt(a, 4)) break
      case 969:
      case 942:
        return WEBKIT + a + a
      case 978:
        return WEBKIT + a + MOZ + a + a
      case 1019:
      case 983:
        return WEBKIT + a + MOZ + a + MS + a + a
      case 883:
        if (45 === charCodeAt(a, 8)) return WEBKIT + a + a
        if (0 < indexOf(a, 'image-set(', 11))
          return replace(a, ma, '$1' + WEBKIT + '$2') + a
        break
      case 932:
        if (45 === charCodeAt(a, 4))
          switch (charCodeAt(a, 5)) {
            case 103:
              return (
                 WEBKIT + 'box-' +
                a.replace('-grow', '') +
                WEBKIT +
                a +
                MS +
                replace(a, 'grow', 'positive') +
                a
              )
            case 115:
              return (
                WEBKIT + a + MS + replace(a, 'shrink', 'negative') + a
              )
            case 98:
              return (
                WEBKIT +
                a +
                MS +
                replace(a, 'basis', 'preferred-size') +
                a
              )
          }
        return WEBKIT + a + MS + a + a
      case 964:
        return WEBKIT + a  +  MS + 'flex-' + a + a
      case 1023:
        if (99 !== charCodeAt(a, 8)) break
        b = substring(a, indexOf(a, ':', 15))
          .replace('flex-', '')
          .replace('space-between', 'justify')
        return WEBKIT + 'box-pack' + b + WEBKIT + a  +  MS + 'flex-pack' + b + a
      case 1005:
        return na.test(a)
          ? replace(a, da, ':' + WEBKIT + '') + replace(a, da, ':' + MOZ + '') + a
          : a
      case 1e3:
        b = substring(a, 13).trim()
        c = indexOf(b, '-') + 1
        switch (charCodeAt(b, 0) + charCodeAt(b, c)) {
          case 226:
            b = replace(a, T, 'tb')
            break
          case 232:
            b = replace(a, T, 'tb-rl')
            break
          case 220:
            b = replace(a, T, 'lr')
            break
          default:
            return a
        }
        return WEBKIT + a + MS + b + a
      case 1017:
        if (-1 === indexOf(a, 'sticky', 9)) break
      case 975:
        c = (a = d).length - 10
        b = (33 === charCodeAt(a, c) ? substring(a, 0, c) : a)
          .substring(indexOf(d, ':', 7) + 1)
          .trim()
        switch ((m = charCodeAt(b, 0) + (charCodeAt(b, 7) | 0))) {
          case 203:
            if (111 > charCodeAt(b, 8)) break
          case 115:
            a = replace(a, b, WEBKIT + b) + ';' + a
            break
          case 207:
          case 102:
            a =
              a.replace(b, WEBKIT + (102 < m ? 'inline-' : '') + 'box') +
              ';' +
              replace(a, b, WEBKIT + b) +
              ';' +
              replace(a, b, MS + b + 'box') +
              ';' +
              a
        }
        return a + ';'
      case 938:
        if (45 === charCodeAt(a, 5))
          switch (charCodeAt(a, 6)) {
            case 105:
              return (
                (b = a.replace('-items', '')),
                WEBKIT + a  +  WEBKIT + 'box-' + b  +  MS + 'flex-' + b + a
              )
            case 115:
              return WEBKIT + a  +  MS + 'flex-item-' + replace(a, ea, '') + a
            default:
              return (
                WEBKIT +
                a +
                 MS + 'flex-line-pack' +
                a.replace('align-content', '').replace(ea, '') +
                a
              )
          }
        break
      case 973:
      case 989:
        if (45 !== charCodeAt(a, 3) || 122 === charCodeAt(a, 4)) break
      case 931:
      case 953:
        if (!0 === oa.test(d))
          return 115 === (b = substring(d, indexOf(d, ':') + 1)).charCodeAt(0)
            ? Q(replace(d, 'stretch', 'fill-available'), c, e, h).replace(
                ':fill-available',
                ':stretch'
              )
            : replace(a, b, WEBKIT + b) +
                a.replace(b, MOZ + b.replace('fill-', '')) +
                a
        break
      case 962:
        if (
          ((a =
            WEBKIT + a + (102 === charCodeAt(a, 5) ? MS + a : '') + a),
          211 === e + h &&
            105 === charCodeAt(a, 13) &&
            0 < indexOf(a, 'transform', 10))
        )
          return (
            substring(a, 0, indexOf(a, ';', 27) + 1).replace(
              pa,
              '$1' + WEBKIT + '$2'
            ) + a
          )
    }
    return a
  }
  function J(d, c) {
    var e = indexOf(d, 1 === c ? ':' : '{'),
      h = substring(d, 0, 3 !== c ? e : 10)
    e = substring(d, e + 1, d.length - 1)
    return U(2 !== c ? h : replace(h, qa, '$1'), e, c)
  }
  function ia(d, c) {
    var e = Q(c, charCodeAt(c, 0), charCodeAt(c, 1), charCodeAt(c, 2))
    return e !== c + ';'
      ? e.replace(ra, ' or ($1)').substring(4)
      : '(' + c + ')'
  }
  function F(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, w = c, E; g < A; ++g)
      switch ((E = V[g].call(K, d, w, e, h, a, m, b, v, n, q))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break
        default:
          w = E
      }
    if (w !== c) return w
  }
  function W(d) {
    switch (d) {
      case void 0:
      case null:
        A = V.length = 0
        break
      default:
        if ('function' === typeof d) V[A++] = d
        else if ('object' === typeof d)
          for (var c = 0, e = d.length; c < e; ++c) W(d[c])
        else ba = !!d | 0
    }
    return W
  }
  function X(d) {
    d = d.prefix
    void 0 !== d &&
      ((U = null),
      d ? ('function' !== typeof d ? (y = 1) : ((y = 2), (U = d))) : (y = 0))
    return X
  }
  function K(d, c) {
    var e = d
    33 > charCodeAt(e, 0) && (e = e.trim())
    Y = e
    e = [Y]
    if (0 < A) {
      var h = F(-1, c, e, e, C, z, 0, 0, 0, 0)
      void 0 !== h && 'string' === typeof h && (c = h)
    }
    var a = L(P, e, c, 0, 0)
    0 < A &&
      ((h = F(-2, a, e, e, C, z, a.length, 0, 0, 0)), void 0 !== h && (a = h))
    Y = ''
    D = 0
    z = C = 1
    return a
  }
  var fa = /^\0+/g,
    O = /[\0\r\f]/g,
    da = /: */g,
    na = /zoo|gra/,
    pa = /([,: ])(transform)/g,
    la = /,\r+?/g,
    S = /([\t\r\n ])*\f?&/g,
    ja = /@(k\w+)\s*(\S*)\s*/,
    R = /::(place)/g,
    ka = /:(read-only)/g,
    T = /[svh]\w+-[tblr]{2}/,
    ha = /\(\s*(.*)\s*\)/g,
    ra = /([\s\S]*?);/g,
    ea = /-self|flex-/g,
    qa = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    oa = /stretch|:\s*\w+\-(?:conte|avail)/,
    ma = /([^-])(image-set\()/,
    z = 1,
    C = 1,
    D = 0,
    y = 1,
    P = [],
    V = [],
    A = 0,
    U = null,
    ba = 0,
    Y = ''
  K.use = W
  K.set = X
  void 0 !== Z && X(Z)
  return K
}
