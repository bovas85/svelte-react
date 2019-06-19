!(function (n, t) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? t(exports)
    : typeof define === 'function' && define.amd
      ? define(['exports'], t)
      : t(((n = n || self).WebComponents = {}))
}(this, (n) => {

  function t() {}
  function e(n, t) {
    for (const e in t) n[e] = t[e]
    return n
  }
  function i(n) {
    return n()
  }
  function a() {
    return Object.create(null)
  }
  function o(n) {
    n.forEach(i)
  }
  function r(n) {
    return typeof n === 'function'
  }
  function l(n, t) {
    return n != n ? t == t : n !== t || (n && typeof n === 'object') || typeof n === 'function'
  }
  function c(n, t, e) {
    if (n) {
      const i = u(n, t, e)
      return n[0](i)
    }
  }
  function u(n, t, i) {
    return n[1] ? e({}, e(t.$$scope.ctx, n[1](i ? i(t) : {}))) : t.$$scope.ctx
  }
  function s(n, t, i, a) {
    return n[1] ? e({}, e(t.$$scope.changed || {}, n[1](a ? a(i) : {}))) : t.$$scope.changed || {}
  }
  function d(n, t) {
    n.appendChild(t)
  }
  function p(n, t, e) {
    n.insertBefore(t, e || null)
  }
  function f(n) {
    n.parentNode.removeChild(n)
  }
  function m(n) {
    return document.createElement(n)
  }
  function g(n) {
    return document.createTextNode(n)
  }
  function $() {
    return g(' ')
  }
  function h(n, t, e, i) {
    return n.addEventListener(t, e, i), () => { return n.removeEventListener(t, e, i) }
  }
  function x(n, t, e) {
    e == null ? n.removeAttribute(t) : n.setAttribute(t, e)
  }
  function v(n, t) {
    (t = `${t}`), n.data !== t && (n.data = t)
  }
  let y
  function b(n) {
    y = n
  }
  const k = []


  const C = Promise.resolve()
  let w = !1
  const N = []


  const _ = []


  const E = []
  function T(n) {
    _.push(n)
  }
  function S() {
    const n = new Set()
    do {
      while (k.length) {
        const n = k.shift()
        b(n), I(n.$$)
      }
      while (N.length) N.shift()()
      while (_.length) {
        const t = _.pop()
        n.has(t) || (t(), n.add(t))
      }
    } while (k.length)
    while (E.length) E.pop()()
    w = !1
  }
  function I(n) {
    n.fragment
      && (n.update(n.dirty), o(n.before_render), n.fragment.p(n.dirty, n.ctx), (n.dirty = null), n.after_render.forEach(T))
  }
  let B
  function L() {
    B = { remaining: 0, callbacks: [] }
  }
  function j() {
    B.remaining || o(B.callbacks)
  }
  function z(n) {
    B.callbacks.push(n)
  }
  function O(n, t) {
    n.$$.dirty || (k.push(n), w || ((w = !0), C.then(S)), (n.$$.dirty = a())), (n.$$.dirty[t] = !0)
  }
  function R(n, e, l, c, u, s) {
    const d = y
    b(n)
    const p = e.props || {}


    const f = (n.$$ = {
      fragment: null,
      ctx: null,
      props: s,
      update: t,
      not_equal: u,
      bound: a(),
      on_mount: [],
      on_destroy: [],
      before_render: [],
      after_render: [],
      context: new Map(d ? d.$$.context : []),
      callbacks: a(),
      dirty: null,
    })
    let m = !1;
    (f.ctx = l
      ? l(n, p, (t, e) => {
        f.ctx && u(f.ctx[t], (f.ctx[t] = e)) && (f.bound[t] && f.bound[t](e), m && O(n, t))
      })
      : p),
    f.update(),
    (m = !0),
    o(f.before_render),
    (f.fragment = c(f.ctx)),
    e.target
        && (e.hydrate
          ? f.fragment.l(
            (function (n) {
              return Array.from(n.childNodes)
            }(e.target)),
          )
          : f.fragment.c(),
        e.intro && n.$$.fragment.i && n.$$.fragment.i(),
        (function (n, t, e) {
          const { fragment: a, on_mount: l, on_destroy: c, after_render: u } = n.$$
          a.m(t, e),
          T(() => {
            const t = l.map(i).filter(r)
            c ? c.push(...t) : o(t), (n.$$.on_mount = [])
          }),
          u.forEach(T)
        }(n, e.target, e.anchor)),
        S()),
    b(d)
  }
  class A {
    $destroy() {
      let n; let
        e;
      (e = !0),
      (n = this).$$
          && (o(n.$$.on_destroy), n.$$.fragment.d(e), (n.$$.on_destroy = n.$$.fragment = null), (n.$$.ctx = {})),
      (this.$destroy = t)
    }

    $on(n, t) {
      const e = this.$$.callbacks[n] || (this.$$.callbacks[n] = [])
      return (
        e.push(t),
        () => {
          const n = e.indexOf(t)
          n !== -1 && e.splice(n, 1)
        }
      )
    }

    $set() {}
  }
  const P = (function (n, t) {
    return n((t = { exports: {} }), t.exports), t.exports
  }((n) => {
    !(function () {
      const t = {}.hasOwnProperty
      function e() {
        for (var n = [], i = 0; i < arguments.length; i++) {
          const a = arguments[i]
          if (a) {
            const o = typeof a
            if (o === 'string' || o === 'number') n.push(a)
            else if (Array.isArray(a) && a.length) {
              const r = e(...a)
              r && n.push(r)
            } else if (o === 'object') for (const l in a) t.call(a, l) && a[l] && n.push(l)
          }
        }
        return n.join(' ')
      }
      n.exports ? ((e.default = e), (n.exports = e)) : (window.classNames = e)
    }())
  }))
  function M(n) {
    let t


    let e


    let i


    let a


    let o


    let r


    let l


    let c


    let u = n.loading && D()


    let s = !n.loading && n.icon && W()


    const g = [G, F]


    const x = []
    function v(n) {
      return n.text ? 0 : 1
    }
    return (
      (o = v(n)),
      (r = x[o] = g[o](n)),
      {
        c() {
          (t = m('button')),
          (e = m('span')),
          u && u.c(),
          (i = $()),
          s && s.c(),
          (a = $()),
          r.c(),
          (e.className = `${n.className} svelte-nzcwkp`),
          (t.className = `${n.classNames} svelte-nzcwkp`),
          (t.disabled = n.disabled),
          (t.type = n.type),
          (t.title = n.title),
          (t.tabIndex = n.tabIndex),
          (c = h(t, 'click', n.onClick))
        },
        m(n, r) {
          p(n, t, r), d(t, e), u && u.m(e, null), d(e, i), s && s.m(e, null), d(e, a), x[o].m(e, null), (l = !0)
        },
        p(n, c) {
          c.loading ? u || ((u = D()).c(), u.m(e, i)) : u && (u.d(1), (u = null)),
          !c.loading && c.icon ? s || ((s = W()).c(), s.m(e, a)) : s && (s.d(1), (s = null))
          const d = o;
          (o = v(c)) === d
            ? x[o].p(n, c)
            : (L(),
            z(() => {
              x[d].d(1), (x[d] = null)
            }),
            r.o(1),
            j(),
            (r = x[o]) || (r = x[o] = g[o](c)).c(),
            r.i(1),
            r.m(e, null)),
          (l && !n.disabled) || (t.disabled = c.disabled),
          (l && !n.type) || (t.type = c.type),
          (l && !n.title) || (t.title = c.title),
          (l && !n.tabIndex) || (t.tabIndex = c.tabIndex)
        },
        i(n) {
          l || (r && r.i(), (l = !0))
        },
        o(n) {
          r && r.o(), (l = !1)
        },
        d(n) {
          n && f(t), u && u.d(), s && s.d(), x[o].d(), c()
        },
      }
    )
  }
  function q(n) {
    let t


    let e


    let i


    let a


    let o


    let r


    let l


    let c


    let u = n.loading && H()


    let s = !n.loading && n.icon && J()


    const g = [Q, K]


    const h = []
    function v(n) {
      return n.text ? 0 : 1
    }
    return (
      (o = v(n)),
      (r = h[o] = g[o](n)),
      {
        c() {
          (t = m('a')),
          (e = m('span')),
          u && u.c(),
          (i = $()),
          s && s.c(),
          (a = $()),
          r.c(),
          (e.className = `${n.className} svelte-nzcwkp`),
          (t.className = `${n.classNames} svelte-nzcwkp`),
          (t.title = n.title),
          (t.href = n.url),
          x(t, 'onclick', (l = n.isExternal ? null : n.func))
        },
        m(n, r) {
          p(n, t, r), d(t, e), u && u.m(e, null), d(e, i), s && s.m(e, null), d(e, a), h[o].m(e, null), (c = !0)
        },
        p(n, d) {
          d.loading ? u || ((u = H()).c(), u.m(e, i)) : u && (u.d(1), (u = null)),
          !d.loading && d.icon ? s || ((s = J()).c(), s.m(e, a)) : s && (s.d(1), (s = null))
          const p = o;
          (o = v(d)) === p
            ? h[o].p(n, d)
            : (L(),
            z(() => {
              h[p].d(1), (h[p] = null)
            }),
            r.o(1),
            j(),
            (r = h[o]) || (r = h[o] = g[o](d)).c(),
            r.i(1),
            r.m(e, null)),
          (c && !n.title) || (t.title = d.title),
          (c && !n.url) || (t.href = d.url),
          (c && !n.isExternal) || l === (l = d.isExternal ? null : d.func) || x(t, 'onclick', l)
        },
        i(n) {
          c || (r && r.i(), (c = !0))
        },
        o(n) {
          r && r.o(), (c = !1)
        },
        d(n) {
          n && f(t), u && u.d(), s && s.d(), h[o].d()
        },
      }
    )
  }
  function D(n) {
    let t
    return {
      c() {
        ((t = m('span')).textContent = 'O'), (t.className = 'loading')
      },
      m(n, e) {
        p(n, t, e)
      },
      d(n) {
        n && f(t)
      },
    }
  }
  function W(n) {
    let t
    return {
      c() {
        ((t = m('span')).textContent = '->'), (t.className = 'icon svelte-nzcwkp')
      },
      m(n, e) {
        p(n, t, e)
      },
      d(n) {
        n && f(t)
      },
    }
  }
  function F(n) {
    let t
    const e = n.$$slots.default


    const i = c(e, n, null)
    return {
      c() {
        i && i.c()
      },
      l(n) {
        i && i.l(n)
      },
      m(n, e) {
        i && i.m(n, e), (t = !0)
      },
      p(n, t) {
        i && i.p && n.$$scope && i.p(s(e, t, n, null), u(e, t, null))
      },
      i(n) {
        t || (i && i.i && i.i(n), (t = !0))
      },
      o(n) {
        i && i.o && i.o(n), (t = !1)
      },
      d(n) {
        i && i.d(n)
      },
    }
  }
  function G(n) {
    let e
    return {
      c() {
        e = g(n.text)
      },
      m(n, t) {
        p(n, e, t)
      },
      p(n, t) {
        n.text && v(e, t.text)
      },
      i: t,
      o: t,
      d(n) {
        n && f(e)
      },
    }
  }
  function H(n) {
    let t
    return {
      c() {
        ((t = m('span')).textContent = 'O'), (t.className = 'loading')
      },
      m(n, e) {
        p(n, t, e)
      },
      d(n) {
        n && f(t)
      },
    }
  }
  function J(n) {
    let t
    return {
      c() {
        ((t = m('span')).textContent = '->'), (t.className = 'icon svelte-nzcwkp')
      },
      m(n, e) {
        p(n, t, e)
      },
      d(n) {
        n && f(t)
      },
    }
  }
  function K(n) {
    let t
    const e = n.$$slots.default


    const i = c(e, n, null)
    return {
      c() {
        i && i.c()
      },
      l(n) {
        i && i.l(n)
      },
      m(n, e) {
        i && i.m(n, e), (t = !0)
      },
      p(n, t) {
        i && i.p && n.$$scope && i.p(s(e, t, n, null), u(e, t, null))
      },
      i(n) {
        t || (i && i.i && i.i(n), (t = !0))
      },
      o(n) {
        i && i.o && i.o(n), (t = !1)
      },
      d(n) {
        i && i.d(n)
      },
    }
  }
  function Q(n) {
    let e
    return {
      c() {
        e = g(n.text)
      },
      m(n, t) {
        p(n, e, t)
      },
      p(n, t) {
        n.text && v(e, t.text)
      },
      i: t,
      o: t,
      d(n) {
        n && f(e)
      },
    }
  }
  function U(n) {
    let t


    let e


    let i


    let a


    const o = [q, M]


    const r = []
    function l(n) {
      return n.url ? 0 : 1
    }
    return (
      (t = l(n)),
      (e = r[t] = o[t](n)),
      {
        c() {
          e.c(), (i = g(''))
        },
        m(n, e) {
          r[t].m(n, e), p(n, i, e), (a = !0)
        },
        p(n, a) {
          const c = t;
          (t = l(a)) === c
            ? r[t].p(n, a)
            : (L(),
            z(() => {
              r[c].d(1), (r[c] = null)
            }),
            e.o(1),
            j(),
            (e = r[t]) || (e = r[t] = o[t](a)).c(),
            e.i(1),
            e.m(i.parentNode, i))
        },
        i(n) {
          a || (e && e.i(), (a = !0))
        },
        o(n) {
          e && e.o(), (a = !1)
        },
        d(n) {
          r[t].d(n), n && f(i)
        },
      }
    )
  }
  function V(n, t, e) {
    let {
      type: i = 'button',
      appearance: a = 'primary',
      isExternal: o = !1,
      disabled: r = !1,
      state: l = 'default',
      contrast: c = 'default',
      loading: u = !1,
      marginTop: s = 1,
      marginBottom: d = 1,
      marginLeftSm: p = 0,
      marginRightSm: f = 0,
      tabIndex: m = 0,
      onClick: g = null,
      url: $ = '',
      width: h = 'auto',
      text: x = '',
      children: v = null,
      icon: y = null,
      clickTracking: b = null,
      title: k = '',
    } = t


    const C = P('button', {
      width: !!h,
      [`${a}`]: l === 'default',
      [`${a}-inverse`]: l === 'default' && c === 'inverse',
      [`${l}`]: l !== 'default',
      disabled: r,
      'disabled-inverse': r && l === 'default' && c === 'inverse',
      loading: u,
    })
    const w = P('content', { 'has-icon': u || y })


    const N = (n) => {
      n.preventDefault(), $ && ($.search(/^http[s]?:\/\//), window.location.assign($))
    }
    let { $$slots: _ = {}, $$scope: E } = t
    return (
      (n.$set = (n) => {
        'type' in n && e('type', (i = n.type)),
        'appearance' in n && e('appearance', (a = n.appearance)),
        'isExternal' in n && e('isExternal', (o = n.isExternal)),
        'disabled' in n && e('disabled', (r = n.disabled)),
        'state' in n && e('state', (l = n.state)),
        'contrast' in n && e('contrast', (c = n.contrast)),
        'loading' in n && e('loading', (u = n.loading)),
        'marginTop' in n && e('marginTop', (s = n.marginTop)),
        'marginBottom' in n && e('marginBottom', (d = n.marginBottom)),
        'marginLeftSm' in n && e('marginLeftSm', (p = n.marginLeftSm)),
        'marginRightSm' in n && e('marginRightSm', (f = n.marginRightSm)),
        'tabIndex' in n && e('tabIndex', (m = n.tabIndex)),
        'onClick' in n && e('onClick', (g = n.onClick)),
        'url' in n && e('url', ($ = n.url)),
        'width' in n && e('width', (h = n.width)),
        'text' in n && e('text', (x = n.text)),
        'children' in n && e('children', (v = n.children)),
        'icon' in n && e('icon', (y = n.icon)),
        'clickTracking' in n && e('clickTracking', (b = n.clickTracking)),
        'title' in n && e('title', (k = n.title)),
        '$$scope' in n && e('$$scope', (E = n.$$scope))
      }),
      {
        type: i,
        appearance: a,
        isExternal: o,
        disabled: r,
        state: l,
        contrast: c,
        loading: u,
        marginTop: s,
        marginBottom: d,
        marginLeftSm: p,
        marginRightSm: f,
        tabIndex: m,
        onClick: g,
        url: $,
        width: h,
        text: x,
        children: v,
        icon: y,
        clickTracking: b,
        title: k,
        classNames: C,
        className: w,
        handleClick: N,
        func(n) {
          return N(n)
        },
        $$slots: _,
        $$scope: E,
      }
    )
  }
  function X(n) {
    let e; let
      i
    return {
      c() {
        x((e = m('input')), 'type', n.type),
        (e.value = n.value),
        (e.className = 'svelte-1v964vf'),
        (i = [h(e, 'keyup', n.onChange), h(e, 'change', n.onChange)])
      },
      m(n, t) {
        p(n, e, t)
      },
      p(n, t) {
        n.type && x(e, 'type', t.type), n.value && (e.value = t.value)
      },
      i: t,
      o: t,
      d(n) {
        n && f(e), o(i)
      },
    }
  }
  function Y(n, t, e) {
    let { type: i = 'text', onChange: a = null, value: o = '' } = t
    return (
      (n.$set = (n) => {
        'type' in n && e('type', (i = n.type)),
        'onChange' in n && e('onChange', (a = n.onChange)),
        'value' in n && e('value', (o = n.value))
      }),
      { type: i, onChange: a, value: o }
    )
  }
  (n.TheButton = class extends A {
    constructor(n) {
      super(),
      R(this, n, V, U, l, [
        'type',
        'appearance',
        'isExternal',
        'disabled',
        'state',
        'contrast',
        'loading',
        'marginTop',
        'marginBottom',
        'marginLeftSm',
        'marginRightSm',
        'tabIndex',
        'onClick',
        'url',
        'width',
        'text',
        'children',
        'icon',
        'clickTracking',
        'title',
      ])
    }
  }),
  (n.TheInput = class extends A {
    constructor(n) {
      super(), R(this, n, Y, X, l, ['type', 'onChange', 'value'])
    }
  }),
  Object.defineProperty(n, '__esModule', { value: !0 })
}))
