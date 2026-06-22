const Nd = function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const o of r.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerpolicy && (r.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossorigin === "anonymous"
          ? (r.credentials = "omit")
          : (r.credentials = "same-origin"),
      r
    );
  }
  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = n(i);
    fetch(i.href, r);
  }
};
Nd();
/**
 * @vue/shared v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function to(t) {
  const e = Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const me = {},
  $n = [],
  mt = () => {},
  Dd = () => !1,
  yi = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
  no = (t) => t.startsWith("onUpdate:"),
  xe = Object.assign,
  so = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  },
  $d = Object.prototype.hasOwnProperty,
  ue = (t, e) => $d.call(t, e),
  ee = Array.isArray,
  Rn = (t) => Si(t) === "[object Map]",
  Vl = (t) => Si(t) === "[object Set]",
  te = (t) => typeof t == "function",
  Se = (t) => typeof t == "string",
  Qt = (t) => typeof t == "symbol",
  Ee = (t) => t !== null && typeof t == "object",
  Bl = (t) => (Ee(t) || te(t)) && te(t.then) && te(t.catch),
  jl = Object.prototype.toString,
  Si = (t) => jl.call(t),
  Rd = (t) => Si(t).slice(8, -1),
  Hl = (t) => Si(t) === "[object Object]",
  io = (t) =>
    Se(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  hs = to(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  Ti = (t) => {
    const e = Object.create(null);
    return (n) => e[n] || (e[n] = t(n));
  },
  kd = /-(\w)/g,
  lt = Ti((t) => t.replace(kd, (e, n) => (n ? n.toUpperCase() : ""))),
  Vd = /\B([A-Z])/g,
  _n = Ti((t) => t.replace(Vd, "-$1").toLowerCase()),
  Ai = Ti((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  Fi = Ti((t) => (t ? `on${Ai(t)}` : "")),
  Kt = (t, e) => !Object.is(t, e),
  ei = (t, ...e) => {
    for (let n = 0; n < t.length; n++) t[n](...e);
  },
  Fl = (t, e, n, s = !1) => {
    Object.defineProperty(t, e, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  xr = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  };
let Jo;
const Ms = () =>
  Jo ||
  (Jo =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
        ? self
        : typeof window != "undefined"
          ? window
          : typeof global != "undefined"
            ? global
            : {});
function En(t) {
  if (ee(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const s = t[n],
        i = Se(s) ? Fd(s) : En(s);
      if (i) for (const r in i) e[r] = i[r];
    }
    return e;
  } else if (Se(t) || Ee(t)) return t;
}
const Bd = /;(?![^(]*\))/g,
  jd = /:([^]+)/,
  Hd = /\/\*[^]*?\*\//g;
function Fd(t) {
  const e = {};
  return (
    t
      .replace(Hd, "")
      .split(Bd)
      .forEach((n) => {
        if (n) {
          const s = n.split(jd);
          s.length > 1 && (e[s[0].trim()] = s[1].trim());
        }
      }),
    e
  );
}
function Ns(t) {
  let e = "";
  if (Se(t)) e = t;
  else if (ee(t))
    for (let n = 0; n < t.length; n++) {
      const s = Ns(t[n]);
      s && (e += s + " ");
    }
  else if (Ee(t)) for (const n in t) t[n] && (e += n + " ");
  return e.trim();
}
const zd =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Gd = to(zd);
function zl(t) {
  return !!t || t === "";
}
const Gl = (t) => !!(t && t.__v_isRef === !0),
  Ce = (t) =>
    Se(t)
      ? t
      : t == null
        ? ""
        : ee(t) || (Ee(t) && (t.toString === jl || !te(t.toString)))
          ? Gl(t)
            ? Ce(t.value)
            : JSON.stringify(t, Wl, 2)
          : String(t),
  Wl = (t, e) =>
    Gl(e)
      ? Wl(t, e.value)
      : Rn(e)
        ? {
            [`Map(${e.size})`]: [...e.entries()].reduce(
              (n, [s, i], r) => ((n[zi(s, r) + " =>"] = i), n),
              {},
            ),
          }
        : Vl(e)
          ? { [`Set(${e.size})`]: [...e.values()].map((n) => zi(n)) }
          : Qt(e)
            ? zi(e)
            : Ee(e) && !ee(e) && !Hl(e)
              ? String(e)
              : e,
  zi = (t, e = "") => {
    var n;
    return Qt(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
  };
/**
 * @vue/reactivity v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Xe;
class Wd {
  constructor(e = !1) {
    ((this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Xe),
      !e &&
        Xe &&
        (this.index = (Xe.scopes || (Xe.scopes = [])).push(this) - 1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, n;
      if (this.scopes)
        for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].pause();
      for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, n;
      if (this.scopes)
        for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].resume();
      for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const n = Xe;
      try {
        return ((Xe = this), e());
      } finally {
        Xe = n;
      }
    }
  }
  on() {
    Xe = this;
  }
  off() {
    Xe = this.parent;
  }
  stop(e) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const i = this.parent.scopes.pop();
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      ((this.parent = void 0), (this._active = !1));
    }
  }
}
function Ud() {
  return Xe;
}
let ve;
const Gi = new WeakSet();
class Ul {
  constructor(e) {
    ((this.fn = e),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Xe && Xe.active && Xe.effects.push(this));
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Gi.has(this) && (Gi.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Yl(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    ((this.flags |= 2), Zo(this), ql(this));
    const e = ve,
      n = gt;
    ((ve = this), (gt = !0));
    try {
      return this.fn();
    } finally {
      (Xl(this), (ve = e), (gt = n), (this.flags &= -3));
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep) ao(e);
      ((this.deps = this.depsTail = void 0),
        Zo(this),
        this.onStop && this.onStop(),
        (this.flags &= -2));
    }
  }
  trigger() {
    this.flags & 64
      ? Gi.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty();
  }
  runIfDirty() {
    Cr(this) && this.run();
  }
  get dirty() {
    return Cr(this);
  }
}
let Kl = 0,
  ms,
  gs;
function Yl(t, e = !1) {
  if (((t.flags |= 8), e)) {
    ((t.next = gs), (gs = t));
    return;
  }
  ((t.next = ms), (ms = t));
}
function ro() {
  Kl++;
}
function oo() {
  if (--Kl > 0) return;
  if (gs) {
    let e = gs;
    for (gs = void 0; e; ) {
      const n = e.next;
      ((e.next = void 0), (e.flags &= -9), (e = n));
    }
  }
  let t;
  for (; ms; ) {
    let e = ms;
    for (ms = void 0; e; ) {
      const n = e.next;
      if (((e.next = void 0), (e.flags &= -9), e.flags & 1))
        try {
          e.trigger();
        } catch (s) {
          t || (t = s);
        }
      e = n;
    }
  }
  if (t) throw t;
}
function ql(t) {
  for (let e = t.deps; e; e = e.nextDep)
    ((e.version = -1),
      (e.prevActiveLink = e.dep.activeLink),
      (e.dep.activeLink = e));
}
function Xl(t) {
  let e,
    n = t.depsTail,
    s = n;
  for (; s; ) {
    const i = s.prevDep;
    (s.version === -1 ? (s === n && (n = i), ao(s), Kd(s)) : (e = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = i));
  }
  ((t.deps = e), (t.depsTail = n));
}
function Cr(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (
      e.dep.version !== e.version ||
      (e.dep.computed && (Ql(e.dep.computed) || e.dep.version !== e.version))
    )
      return !0;
  return !!t._dirty;
}
function Ql(t) {
  if (
    (t.flags & 4 && !(t.flags & 16)) ||
    ((t.flags &= -17), t.globalVersion === Ts)
  )
    return;
  t.globalVersion = Ts;
  const e = t.dep;
  if (((t.flags |= 2), e.version > 0 && !t.isSSR && t.deps && !Cr(t))) {
    t.flags &= -3;
    return;
  }
  const n = ve,
    s = gt;
  ((ve = t), (gt = !0));
  try {
    ql(t);
    const i = t.fn(t._value);
    (e.version === 0 || Kt(i, t._value)) && ((t._value = i), e.version++);
  } catch (i) {
    throw (e.version++, i);
  } finally {
    ((ve = n), (gt = s), Xl(t), (t.flags &= -3));
  }
}
function ao(t, e = !1) {
  const { dep: n, prevSub: s, nextSub: i } = t;
  if (
    (s && ((s.nextSub = i), (t.prevSub = void 0)),
    i && ((i.prevSub = s), (t.nextSub = void 0)),
    n.subs === t && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep) ao(r, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function Kd(t) {
  const { prevDep: e, nextDep: n } = t;
  (e && ((e.nextDep = n), (t.prevDep = void 0)),
    n && ((n.prevDep = e), (t.nextDep = void 0)));
}
let gt = !0;
const Jl = [];
function Jt() {
  (Jl.push(gt), (gt = !1));
}
function Zt() {
  const t = Jl.pop();
  gt = t === void 0 ? !0 : t;
}
function Zo(t) {
  const { cleanup: e } = t;
  if (((t.cleanup = void 0), e)) {
    const n = ve;
    ve = void 0;
    try {
      e();
    } finally {
      ve = n;
    }
  }
}
let Ts = 0;
class Yd {
  constructor(e, n) {
    ((this.sub = e),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0));
  }
}
class lo {
  constructor(e) {
    ((this.computed = e),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0));
  }
  track(e) {
    if (!ve || !gt || ve === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ve)
      ((n = this.activeLink = new Yd(ve, this)),
        ve.deps
          ? ((n.prevDep = ve.depsTail),
            (ve.depsTail.nextDep = n),
            (ve.depsTail = n))
          : (ve.deps = ve.depsTail = n),
        Zl(n));
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      ((s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = ve.depsTail),
        (n.nextDep = void 0),
        (ve.depsTail.nextDep = n),
        (ve.depsTail = n),
        ve.deps === n && (ve.deps = s));
    }
    return n;
  }
  trigger(e) {
    (this.version++, Ts++, this.notify(e));
  }
  notify(e) {
    ro();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      oo();
    }
  }
}
function Zl(t) {
  if ((t.dep.sc++, t.sub.flags & 4)) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let s = e.deps; s; s = s.nextDep) Zl(s);
    }
    const n = t.dep.subs;
    (n !== t && ((t.prevSub = n), n && (n.nextSub = t)), (t.dep.subs = t));
  }
}
const Or = new WeakMap(),
  un = Symbol(""),
  Pr = Symbol(""),
  As = Symbol("");
function Le(t, e, n) {
  if (gt && ve) {
    let s = Or.get(t);
    s || Or.set(t, (s = new Map()));
    let i = s.get(n);
    (i || (s.set(n, (i = new lo())), (i.map = s), (i.key = n)), i.track());
  }
}
function Nt(t, e, n, s, i, r) {
  const o = Or.get(t);
  if (!o) {
    Ts++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if ((ro(), e === "clear")) o.forEach(a);
  else {
    const l = ee(t),
      u = l && io(n);
    if (l && n === "length") {
      const c = Number(s);
      o.forEach((d, p) => {
        (p === "length" || p === As || (!Qt(p) && p >= c)) && a(d);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && a(o.get(n)), u && a(o.get(As)), e)
      ) {
        case "add":
          l ? u && a(o.get("length")) : (a(o.get(un)), Rn(t) && a(o.get(Pr)));
          break;
        case "delete":
          l || (a(o.get(un)), Rn(t) && a(o.get(Pr)));
          break;
        case "set":
          Rn(t) && a(o.get(un));
          break;
      }
  }
  oo();
}
function Sn(t) {
  const e = ce(t);
  return e === t ? e : (Le(e, "iterate", As), ot(t) ? e : e.map(Me));
}
function xi(t) {
  return (Le((t = ce(t)), "iterate", As), t);
}
const qd = {
  __proto__: null,
  [Symbol.iterator]() {
    return Wi(this, Symbol.iterator, Me);
  },
  concat(...t) {
    return Sn(this).concat(...t.map((e) => (ee(e) ? Sn(e) : e)));
  },
  entries() {
    return Wi(this, "entries", (t) => ((t[1] = Me(t[1])), t));
  },
  every(t, e) {
    return It(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return It(this, "filter", t, e, (n) => n.map(Me), arguments);
  },
  find(t, e) {
    return It(this, "find", t, e, Me, arguments);
  },
  findIndex(t, e) {
    return It(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return It(this, "findLast", t, e, Me, arguments);
  },
  findLastIndex(t, e) {
    return It(this, "findLastIndex", t, e, void 0, arguments);
  },
  forEach(t, e) {
    return It(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return Ui(this, "includes", t);
  },
  indexOf(...t) {
    return Ui(this, "indexOf", t);
  },
  join(t) {
    return Sn(this).join(t);
  },
  lastIndexOf(...t) {
    return Ui(this, "lastIndexOf", t);
  },
  map(t, e) {
    return It(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return as(this, "pop");
  },
  push(...t) {
    return as(this, "push", t);
  },
  reduce(t, ...e) {
    return ea(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return ea(this, "reduceRight", t, e);
  },
  shift() {
    return as(this, "shift");
  },
  some(t, e) {
    return It(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return as(this, "splice", t);
  },
  toReversed() {
    return Sn(this).toReversed();
  },
  toSorted(t) {
    return Sn(this).toSorted(t);
  },
  toSpliced(...t) {
    return Sn(this).toSpliced(...t);
  },
  unshift(...t) {
    return as(this, "unshift", t);
  },
  values() {
    return Wi(this, "values", Me);
  },
};
function Wi(t, e, n) {
  const s = xi(t),
    i = s[e]();
  return (
    s !== t &&
      !ot(t) &&
      ((i._next = i.next),
      (i.next = () => {
        const r = i._next();
        return (r.value && (r.value = n(r.value)), r);
      })),
    i
  );
}
const Xd = Array.prototype;
function It(t, e, n, s, i, r) {
  const o = xi(t),
    a = o !== t && !ot(t),
    l = o[e];
  if (l !== Xd[e]) {
    const d = l.apply(t, r);
    return a ? Me(d) : d;
  }
  let u = n;
  o !== t &&
    (a
      ? (u = function (d, p) {
          return n.call(this, Me(d), p, t);
        })
      : n.length > 2 &&
        (u = function (d, p) {
          return n.call(this, d, p, t);
        }));
  const c = l.call(o, u, s);
  return a && i ? i(c) : c;
}
function ea(t, e, n, s) {
  const i = xi(t);
  let r = n;
  return (
    i !== t &&
      (ot(t)
        ? n.length > 3 &&
          (r = function (o, a, l) {
            return n.call(this, o, a, l, t);
          })
        : (r = function (o, a, l) {
            return n.call(this, o, Me(a), l, t);
          })),
    i[e](r, ...s)
  );
}
function Ui(t, e, n) {
  const s = ce(t);
  Le(s, "iterate", As);
  const i = s[e](...n);
  return (i === -1 || i === !1) && fo(n[0])
    ? ((n[0] = ce(n[0])), s[e](...n))
    : i;
}
function as(t, e, n = []) {
  (Jt(), ro());
  const s = ce(t)[e].apply(t, n);
  return (oo(), Zt(), s);
}
const Qd = to("__proto__,__v_isRef,__isVue"),
  ec = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== "arguments" && t !== "caller")
      .map((t) => Symbol[t])
      .filter(Qt),
  );
function Jd(t) {
  Qt(t) || (t = String(t));
  const e = ce(this);
  return (Le(e, "has", t), e.hasOwnProperty(t));
}
class tc {
  constructor(e = !1, n = !1) {
    ((this._isReadonly = e), (this._isShallow = n));
  }
  get(e, n, s) {
    const i = this._isReadonly,
      r = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw")
      return s === (i ? (r ? cf : rc) : r ? ic : sc).get(e) ||
        Object.getPrototypeOf(e) === Object.getPrototypeOf(s)
        ? e
        : void 0;
    const o = ee(e);
    if (!i) {
      let l;
      if (o && (l = qd[n])) return l;
      if (n === "hasOwnProperty") return Jd;
    }
    const a = Reflect.get(e, n, De(e) ? e : s);
    return (Qt(n) ? ec.has(n) : Qd(n)) || (i || Le(e, "get", n), r)
      ? a
      : De(a)
        ? o && io(n)
          ? a
          : a.value
        : Ee(a)
          ? i
            ? ac(a)
            : Ds(a)
          : a;
  }
}
class nc extends tc {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, s, i) {
    let r = e[n];
    if (!this._isShallow) {
      const l = pn(r);
      if (
        (!ot(s) && !pn(s) && ((r = ce(r)), (s = ce(s))),
        !ee(e) && De(r) && !De(s))
      )
        return l ? !1 : ((r.value = s), !0);
    }
    const o = ee(e) && io(n) ? Number(n) < e.length : ue(e, n),
      a = Reflect.set(e, n, s, De(e) ? e : i);
    return (
      e === ce(i) && (o ? Kt(s, r) && Nt(e, "set", n, s) : Nt(e, "add", n, s)),
      a
    );
  }
  deleteProperty(e, n) {
    const s = ue(e, n);
    e[n];
    const i = Reflect.deleteProperty(e, n);
    return (i && s && Nt(e, "delete", n, void 0), i);
  }
  has(e, n) {
    const s = Reflect.has(e, n);
    return ((!Qt(n) || !ec.has(n)) && Le(e, "has", n), s);
  }
  ownKeys(e) {
    return (Le(e, "iterate", ee(e) ? "length" : un), Reflect.ownKeys(e));
  }
}
class Zd extends tc {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return !0;
  }
  deleteProperty(e, n) {
    return !0;
  }
}
const ef = new nc(),
  tf = new Zd(),
  nf = new nc(!0);
const Ir = (t) => t,
  Fs = (t) => Reflect.getPrototypeOf(t);
function sf(t, e, n) {
  return function (...s) {
    const i = this.__v_raw,
      r = ce(i),
      o = Rn(r),
      a = t === "entries" || (t === Symbol.iterator && o),
      l = t === "keys" && o,
      u = i[t](...s),
      c = n ? Ir : e ? Lr : Me;
    return (
      !e && Le(r, "iterate", l ? Pr : un),
      {
        next() {
          const { value: d, done: p } = u.next();
          return p
            ? { value: d, done: p }
            : { value: a ? [c(d[0]), c(d[1])] : c(d), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function zs(t) {
  return function (...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function rf(t, e) {
  const n = {
    get(i) {
      const r = this.__v_raw,
        o = ce(r),
        a = ce(i);
      t || (Kt(i, a) && Le(o, "get", i), Le(o, "get", a));
      const { has: l } = Fs(o),
        u = e ? Ir : t ? Lr : Me;
      if (l.call(o, i)) return u(r.get(i));
      if (l.call(o, a)) return u(r.get(a));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return (!t && Le(ce(i), "iterate", un), Reflect.get(i, "size", i));
    },
    has(i) {
      const r = this.__v_raw,
        o = ce(r),
        a = ce(i);
      return (
        t || (Kt(i, a) && Le(o, "has", i), Le(o, "has", a)),
        i === a ? r.has(i) : r.has(i) || r.has(a)
      );
    },
    forEach(i, r) {
      const o = this,
        a = o.__v_raw,
        l = ce(a),
        u = e ? Ir : t ? Lr : Me;
      return (
        !t && Le(l, "iterate", un),
        a.forEach((c, d) => i.call(r, u(c), u(d), o))
      );
    },
  };
  return (
    xe(
      n,
      t
        ? {
            add: zs("add"),
            set: zs("set"),
            delete: zs("delete"),
            clear: zs("clear"),
          }
        : {
            add(i) {
              !e && !ot(i) && !pn(i) && (i = ce(i));
              const r = ce(this);
              return (
                Fs(r).has.call(r, i) || (r.add(i), Nt(r, "add", i, i)),
                this
              );
            },
            set(i, r) {
              !e && !ot(r) && !pn(r) && (r = ce(r));
              const o = ce(this),
                { has: a, get: l } = Fs(o);
              let u = a.call(o, i);
              u || ((i = ce(i)), (u = a.call(o, i)));
              const c = l.call(o, i);
              return (
                o.set(i, r),
                u ? Kt(r, c) && Nt(o, "set", i, r) : Nt(o, "add", i, r),
                this
              );
            },
            delete(i) {
              const r = ce(this),
                { has: o, get: a } = Fs(r);
              let l = o.call(r, i);
              (l || ((i = ce(i)), (l = o.call(r, i))), a && a.call(r, i));
              const u = r.delete(i);
              return (l && Nt(r, "delete", i, void 0), u);
            },
            clear() {
              const i = ce(this),
                r = i.size !== 0,
                o = i.clear();
              return (r && Nt(i, "clear", void 0, void 0), o);
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      n[i] = sf(i, t, e);
    }),
    n
  );
}
function co(t, e) {
  const n = rf(t, e);
  return (s, i, r) =>
    i === "__v_isReactive"
      ? !t
      : i === "__v_isReadonly"
        ? t
        : i === "__v_raw"
          ? s
          : Reflect.get(ue(n, i) && i in s ? n : s, i, r);
}
const of = { get: co(!1, !1) },
  af = { get: co(!1, !0) },
  lf = { get: co(!0, !1) };
const sc = new WeakMap(),
  ic = new WeakMap(),
  rc = new WeakMap(),
  cf = new WeakMap();
function uf(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function df(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : uf(Rd(t));
}
function Ds(t) {
  return pn(t) ? t : uo(t, !1, ef, of, sc);
}
function oc(t) {
  return uo(t, !1, nf, af, ic);
}
function ac(t) {
  return uo(t, !0, tf, lf, rc);
}
function uo(t, e, n, s, i) {
  if (!Ee(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
  const r = i.get(t);
  if (r) return r;
  const o = df(t);
  if (o === 0) return t;
  const a = new Proxy(t, o === 2 ? s : n);
  return (i.set(t, a), a);
}
function kn(t) {
  return pn(t) ? kn(t.__v_raw) : !!(t && t.__v_isReactive);
}
function pn(t) {
  return !!(t && t.__v_isReadonly);
}
function ot(t) {
  return !!(t && t.__v_isShallow);
}
function fo(t) {
  return t ? !!t.__v_raw : !1;
}
function ce(t) {
  const e = t && t.__v_raw;
  return e ? ce(e) : t;
}
function ff(t) {
  return (
    !ue(t, "__v_skip") && Object.isExtensible(t) && Fl(t, "__v_skip", !0),
    t
  );
}
const Me = (t) => (Ee(t) ? Ds(t) : t),
  Lr = (t) => (Ee(t) ? ac(t) : t);
function De(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function Re(t) {
  return lc(t, !1);
}
function pf(t) {
  return lc(t, !0);
}
function lc(t, e) {
  return De(t) ? t : new hf(t, e);
}
class hf {
  constructor(e, n) {
    ((this.dep = new lo()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? e : ce(e)),
      (this._value = n ? e : Me(e)),
      (this.__v_isShallow = n));
  }
  get value() {
    return (this.dep.track(), this._value);
  }
  set value(e) {
    const n = this._rawValue,
      s = this.__v_isShallow || ot(e) || pn(e);
    ((e = s ? e : ce(e)),
      Kt(e, n) &&
        ((this._rawValue = e),
        (this._value = s ? e : Me(e)),
        this.dep.trigger()));
  }
}
function Vn(t) {
  return De(t) ? t.value : t;
}
const mf = {
  get: (t, e, n) => (e === "__v_raw" ? t : Vn(Reflect.get(t, e, n))),
  set: (t, e, n, s) => {
    const i = t[e];
    return De(i) && !De(n) ? ((i.value = n), !0) : Reflect.set(t, e, n, s);
  },
};
function cc(t) {
  return kn(t) ? t : new Proxy(t, mf);
}
class gf {
  constructor(e, n, s) {
    ((this.fn = e),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new lo(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Ts - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s));
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && ve !== this))
      return (Yl(this, !0), !0);
  }
  get value() {
    const e = this.dep.track();
    return (Ql(this), e && (e.version = this.dep.version), this._value);
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
function vf(t, e, n = !1) {
  let s, i;
  return (te(t) ? (s = t) : ((s = t.get), (i = t.set)), new gf(s, i, n));
}
const Gs = {},
  li = new WeakMap();
let on;
function _f(t, e = !1, n = on) {
  if (n) {
    let s = li.get(n);
    (s || li.set(n, (s = [])), s.push(t));
  }
}
function Ef(t, e, n = me) {
  const {
      immediate: s,
      deep: i,
      once: r,
      scheduler: o,
      augmentJob: a,
      call: l,
    } = n,
    u = (w) => (i ? w : ot(w) || i === !1 || i === 0 ? Dt(w, 1) : Dt(w));
  let c,
    d,
    p,
    f,
    g = !1,
    v = !1;
  if (
    (De(t)
      ? ((d = () => t.value), (g = ot(t)))
      : kn(t)
        ? ((d = () => u(t)), (g = !0))
        : ee(t)
          ? ((v = !0),
            (g = t.some((w) => kn(w) || ot(w))),
            (d = () =>
              t.map((w) => {
                if (De(w)) return w.value;
                if (kn(w)) return u(w);
                if (te(w)) return l ? l(w, 2) : w();
              })))
          : te(t)
            ? e
              ? (d = l ? () => l(t, 2) : t)
              : (d = () => {
                  if (p) {
                    Jt();
                    try {
                      p();
                    } finally {
                      Zt();
                    }
                  }
                  const w = on;
                  on = c;
                  try {
                    return l ? l(t, 3, [f]) : t(f);
                  } finally {
                    on = w;
                  }
                })
            : (d = mt),
    e && i)
  ) {
    const w = d,
      A = i === !0 ? 1 / 0 : i;
    d = () => Dt(w(), A);
  }
  const S = Ud(),
    E = () => {
      (c.stop(), S && so(S.effects, c));
    };
  if (r && e) {
    const w = e;
    e = (...A) => {
      (w(...A), E());
    };
  }
  let y = v ? new Array(t.length).fill(Gs) : Gs;
  const b = (w) => {
    if (!(!(c.flags & 1) || (!c.dirty && !w)))
      if (e) {
        const A = c.run();
        if (i || g || (v ? A.some((D, G) => Kt(D, y[G])) : Kt(A, y))) {
          p && p();
          const D = on;
          on = c;
          try {
            const G = [A, y === Gs ? void 0 : v && y[0] === Gs ? [] : y, f];
            (l ? l(e, 3, G) : e(...G), (y = A));
          } finally {
            on = D;
          }
        }
      } else c.run();
  };
  return (
    a && a(b),
    (c = new Ul(d)),
    (c.scheduler = o ? () => o(b, !1) : b),
    (f = (w) => _f(w, !1, c)),
    (p = c.onStop =
      () => {
        const w = li.get(c);
        if (w) {
          if (l) l(w, 4);
          else for (const A of w) A();
          li.delete(c);
        }
      }),
    e ? (s ? b(!0) : (y = c.run())) : o ? o(b.bind(null, !0), !0) : c.run(),
    (E.pause = c.pause.bind(c)),
    (E.resume = c.resume.bind(c)),
    (E.stop = E),
    E
  );
}
function Dt(t, e = 1 / 0, n) {
  if (e <= 0 || !Ee(t) || t.__v_skip || ((n = n || new Set()), n.has(t)))
    return t;
  if ((n.add(t), e--, De(t))) Dt(t.value, e, n);
  else if (ee(t)) for (let s = 0; s < t.length; s++) Dt(t[s], e, n);
  else if (Vl(t) || Rn(t))
    t.forEach((s) => {
      Dt(s, e, n);
    });
  else if (Hl(t)) {
    for (const s in t) Dt(t[s], e, n);
    for (const s of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, s) && Dt(t[s], e, n);
  }
  return t;
}
/**
 * @vue/runtime-core v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function $s(t, e, n, s) {
  try {
    return s ? t(...s) : t();
  } catch (i) {
    Ci(i, e, n);
  }
}
function Ct(t, e, n, s) {
  if (te(t)) {
    const i = $s(t, e, n, s);
    return (
      i &&
        Bl(i) &&
        i.catch((r) => {
          Ci(r, e, n);
        }),
      i
    );
  }
  if (ee(t)) {
    const i = [];
    for (let r = 0; r < t.length; r++) i.push(Ct(t[r], e, n, s));
    return i;
  }
}
function Ci(t, e, n, s = !0) {
  const i = e ? e.vnode : null,
    { errorHandler: r, throwUnhandledErrorInProduction: o } =
      (e && e.appContext.config) || me;
  if (e) {
    let a = e.parent;
    const l = e.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let d = 0; d < c.length; d++) if (c[d](t, l, u) === !1) return;
      }
      a = a.parent;
    }
    if (r) {
      (Jt(), $s(r, null, 10, [t, l, u]), Zt());
      return;
    }
  }
  bf(t, n, i, s, o);
}
function bf(t, e, n, s = !0, i = !1) {
  if (i) throw t;
  console.error(t);
}
const ke = [];
let yt = -1;
const Bn = [];
let zt = null,
  On = 0;
const uc = Promise.resolve();
let ci = null;
function po(t) {
  const e = ci || uc;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function wf(t) {
  let e = yt + 1,
    n = ke.length;
  for (; e < n; ) {
    const s = (e + n) >>> 1,
      i = ke[s],
      r = xs(i);
    r < t || (r === t && i.flags & 2) ? (e = s + 1) : (n = s);
  }
  return e;
}
function ho(t) {
  if (!(t.flags & 1)) {
    const e = xs(t),
      n = ke[ke.length - 1];
    (!n || (!(t.flags & 2) && e >= xs(n)) ? ke.push(t) : ke.splice(wf(e), 0, t),
      (t.flags |= 1),
      dc());
  }
}
function dc() {
  ci || (ci = uc.then(pc));
}
function yf(t) {
  (ee(t)
    ? Bn.push(...t)
    : zt && t.id === -1
      ? zt.splice(On + 1, 0, t)
      : t.flags & 1 || (Bn.push(t), (t.flags |= 1)),
    dc());
}
function ta(t, e, n = yt + 1) {
  for (; n < ke.length; n++) {
    const s = ke[n];
    if (s && s.flags & 2) {
      if (t && s.id !== t.uid) continue;
      (ke.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2));
    }
  }
}
function fc(t) {
  if (Bn.length) {
    const e = [...new Set(Bn)].sort((n, s) => xs(n) - xs(s));
    if (((Bn.length = 0), zt)) {
      zt.push(...e);
      return;
    }
    for (zt = e, On = 0; On < zt.length; On++) {
      const n = zt[On];
      (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2));
    }
    ((zt = null), (On = 0));
  }
}
const xs = (t) => (t.id == null ? (t.flags & 2 ? -1 : 1 / 0) : t.id);
function pc(t) {
  const e = mt;
  try {
    for (yt = 0; yt < ke.length; yt++) {
      const n = ke[yt];
      n &&
        !(n.flags & 8) &&
        (n.flags & 4 && (n.flags &= -2),
        $s(n, n.i, n.i ? 15 : 14),
        n.flags & 4 || (n.flags &= -2));
    }
  } finally {
    for (; yt < ke.length; yt++) {
      const n = ke[yt];
      n && (n.flags &= -2);
    }
    ((yt = -1),
      (ke.length = 0),
      fc(),
      (ci = null),
      (ke.length || Bn.length) && pc());
  }
}
let Je = null,
  hc = null;
function ui(t) {
  const e = Je;
  return ((Je = t), (hc = (t && t.type.__scopeId) || null), e);
}
function _e(t, e = Je, n) {
  if (!e || t._n) return t;
  const s = (...i) => {
    s._d && ua(-1);
    const r = ui(e);
    let o;
    try {
      o = t(...i);
    } finally {
      (ui(r), s._d && ua(1));
    }
    return o;
  };
  return ((s._n = !0), (s._c = !0), (s._d = !0), s);
}
function gT(t, e) {
  if (Je === null) return t;
  const n = Li(Je),
    s = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [r, o, a, l = me] = e[i];
    r &&
      (te(r) && (r = { mounted: r, updated: r }),
      r.deep && Dt(o),
      s.push({
        dir: r,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: a,
        modifiers: l,
      }));
  }
  return t;
}
function sn(t, e, n, s) {
  const i = t.dirs,
    r = e && e.dirs;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    r && (a.oldValue = r[o].value);
    let l = a.dir[s];
    l && (Jt(), Ct(l, n, 8, [t.el, a, t, e]), Zt());
  }
}
const Sf = Symbol("_vte"),
  Tf = (t) => t.__isTeleport;
function mo(t, e) {
  t.shapeFlag & 6 && t.component
    ? ((t.transition = e), mo(t.component.subTree, e))
    : t.shapeFlag & 128
      ? ((t.ssContent.transition = e.clone(t.ssContent)),
        (t.ssFallback.transition = e.clone(t.ssFallback)))
      : (t.transition = e);
}
/*! #__NO_SIDE_EFFECTS__ */ function mc(t, e) {
  return te(t) ? (() => xe({ name: t.name }, e, { setup: t }))() : t;
}
function gc(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Mr(t, e, n, s, i = !1) {
  if (ee(t)) {
    t.forEach((g, v) => Mr(g, e && (ee(e) ? e[v] : e), n, s, i));
    return;
  }
  if (vs(s) && !i) return;
  const r = s.shapeFlag & 4 ? Li(s.component) : s.el,
    o = i ? null : r,
    { i: a, r: l } = t,
    u = e && e.r,
    c = a.refs === me ? (a.refs = {}) : a.refs,
    d = a.setupState,
    p = ce(d),
    f = d === me ? () => !1 : (g) => ue(p, g);
  if (
    (u != null &&
      u !== l &&
      (Se(u)
        ? ((c[u] = null), f(u) && (d[u] = null))
        : De(u) && (u.value = null)),
    te(l))
  )
    $s(l, a, 12, [o, c]);
  else {
    const g = Se(l),
      v = De(l);
    if (g || v) {
      const S = () => {
        if (t.f) {
          const E = g ? (f(l) ? d[l] : c[l]) : l.value;
          i
            ? ee(E) && so(E, r)
            : ee(E)
              ? E.includes(r) || E.push(r)
              : g
                ? ((c[l] = [r]), f(l) && (d[l] = c[l]))
                : ((l.value = [r]), t.k && (c[t.k] = l.value));
        } else
          g
            ? ((c[l] = o), f(l) && (d[l] = o))
            : v && ((l.value = o), t.k && (c[t.k] = o));
      };
      o ? ((S.id = -1), qe(S, n)) : S();
    }
  }
}
Ms().requestIdleCallback;
Ms().cancelIdleCallback;
const vs = (t) => !!t.type.__asyncLoader,
  vc = (t) => t.type.__isKeepAlive;
function Af(t, e) {
  _c(t, "a", e);
}
function xf(t, e) {
  _c(t, "da", e);
}
function _c(t, e, n = Ne) {
  const s =
    t.__wdc ||
    (t.__wdc = () => {
      let i = n;
      for (; i; ) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return t();
    });
  if ((Oi(e, s, n), n)) {
    let i = n.parent;
    for (; i && i.parent; )
      (vc(i.parent.vnode) && Cf(s, e, n, i), (i = i.parent));
  }
}
function Cf(t, e, n, s) {
  const i = Oi(e, t, s, !0);
  bc(() => {
    so(s[e], i);
  }, n);
}
function Oi(t, e, n = Ne, s = !1) {
  if (n) {
    const i = n[t] || (n[t] = []),
      r =
        e.__weh ||
        (e.__weh = (...o) => {
          Jt();
          const a = Rs(n),
            l = Ct(e, n, t, o);
          return (a(), Zt(), l);
        });
    return (s ? i.unshift(r) : i.push(r), r);
  }
}
const Bt =
    (t) =>
    (e, n = Ne) => {
      (!Os || t === "sp") && Oi(t, (...s) => e(...s), n);
    },
  Of = Bt("bm"),
  go = Bt("m"),
  Ec = Bt("bu"),
  vo = Bt("u"),
  _o = Bt("bum"),
  bc = Bt("um"),
  Pf = Bt("sp"),
  If = Bt("rtg"),
  Lf = Bt("rtc");
function Mf(t, e = Ne) {
  Oi("ec", t, e);
}
const wc = "components";
function he(t, e) {
  return Df(wc, t, !0, e) || t;
}
const Nf = Symbol.for("v-ndc");
function Df(t, e, n = !0, s = !1) {
  const i = Je || Ne;
  if (i) {
    const r = i.type;
    if (t === wc) {
      const a = wp(r, !1);
      if (a && (a === e || a === lt(e) || a === Ai(lt(e)))) return r;
    }
    const o = na(i[t] || r[t], e) || na(i.appContext[t], e);
    return !o && s ? r : o;
  }
}
function na(t, e) {
  return t && (t[e] || t[lt(e)] || t[Ai(lt(e))]);
}
function Ot(t, e, n, s) {
  let i;
  const r = n && n[s],
    o = ee(t);
  if (o || Se(t)) {
    const a = o && kn(t);
    let l = !1;
    (a && ((l = !ot(t)), (t = xi(t))), (i = new Array(t.length)));
    for (let u = 0, c = t.length; u < c; u++)
      i[u] = e(l ? Me(t[u]) : t[u], u, void 0, r && r[u]);
  } else if (typeof t == "number") {
    i = new Array(t);
    for (let a = 0; a < t; a++) i[a] = e(a + 1, a, void 0, r && r[a]);
  } else if (Ee(t))
    if (t[Symbol.iterator])
      i = Array.from(t, (a, l) => e(a, l, void 0, r && r[l]));
    else {
      const a = Object.keys(t);
      i = new Array(a.length);
      for (let l = 0, u = a.length; l < u; l++) {
        const c = a[l];
        i[l] = e(t[c], c, l, r && r[l]);
      }
    }
  else i = [];
  return (n && (n[s] = i), i);
}
const Nr = (t) => (t ? (Hc(t) ? Li(t) : Nr(t.parent)) : null),
  _s = xe(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Nr(t.parent),
    $root: (t) => Nr(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Eo(t),
    $forceUpdate: (t) =>
      t.f ||
      (t.f = () => {
        ho(t.update);
      }),
    $nextTick: (t) => t.n || (t.n = po.bind(t.proxy)),
    $watch: (t) => np.bind(t),
  }),
  Ki = (t, e) => t !== me && !t.__isScriptSetup && ue(t, e),
  $f = {
    get({ _: t }, e) {
      if (e === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: s,
        data: i,
        props: r,
        accessCache: o,
        type: a,
        appContext: l,
      } = t;
      let u;
      if (e[0] !== "$") {
        const f = o[e];
        if (f !== void 0)
          switch (f) {
            case 1:
              return s[e];
            case 2:
              return i[e];
            case 4:
              return n[e];
            case 3:
              return r[e];
          }
        else {
          if (Ki(s, e)) return ((o[e] = 1), s[e]);
          if (i !== me && ue(i, e)) return ((o[e] = 2), i[e]);
          if ((u = t.propsOptions[0]) && ue(u, e)) return ((o[e] = 3), r[e]);
          if (n !== me && ue(n, e)) return ((o[e] = 4), n[e]);
          Dr && (o[e] = 0);
        }
      }
      const c = _s[e];
      let d, p;
      if (c) return (e === "$attrs" && Le(t.attrs, "get", ""), c(t));
      if ((d = a.__cssModules) && (d = d[e])) return d;
      if (n !== me && ue(n, e)) return ((o[e] = 4), n[e]);
      if (((p = l.config.globalProperties), ue(p, e))) return p[e];
    },
    set({ _: t }, e, n) {
      const { data: s, setupState: i, ctx: r } = t;
      return Ki(i, e)
        ? ((i[e] = n), !0)
        : s !== me && ue(s, e)
          ? ((s[e] = n), !0)
          : ue(t.props, e) || (e[0] === "$" && e.slice(1) in t)
            ? !1
            : ((r[e] = n), !0);
    },
    has(
      {
        _: {
          data: t,
          setupState: e,
          accessCache: n,
          ctx: s,
          appContext: i,
          propsOptions: r,
        },
      },
      o,
    ) {
      let a;
      return (
        !!n[o] ||
        (t !== me && ue(t, o)) ||
        Ki(e, o) ||
        ((a = r[0]) && ue(a, o)) ||
        ue(s, o) ||
        ue(_s, o) ||
        ue(i.config.globalProperties, o)
      );
    },
    defineProperty(t, e, n) {
      return (
        n.get != null
          ? (t._.accessCache[e] = 0)
          : ue(n, "value") && this.set(t, e, n.value, null),
        Reflect.defineProperty(t, e, n)
      );
    },
  };
function sa(t) {
  return ee(t) ? t.reduce((e, n) => ((e[n] = null), e), {}) : t;
}
let Dr = !0;
function Rf(t) {
  const e = Eo(t),
    n = t.proxy,
    s = t.ctx;
  ((Dr = !1), e.beforeCreate && ia(e.beforeCreate, t, "bc"));
  const {
    data: i,
    computed: r,
    methods: o,
    watch: a,
    provide: l,
    inject: u,
    created: c,
    beforeMount: d,
    mounted: p,
    beforeUpdate: f,
    updated: g,
    activated: v,
    deactivated: S,
    beforeDestroy: E,
    beforeUnmount: y,
    destroyed: b,
    unmounted: w,
    render: A,
    renderTracked: D,
    renderTriggered: G,
    errorCaptured: j,
    serverPrefetch: N,
    expose: P,
    inheritAttrs: F,
    components: K,
    directives: z,
    filters: oe,
  } = e;
  if ((u && kf(u, s, null), o))
    for (const ne in o) {
      const ie = o[ne];
      te(ie) && (s[ne] = ie.bind(n));
    }
  if (i) {
    const ne = i.call(n, n);
    Ee(ne) && (t.data = Ds(ne));
  }
  if (((Dr = !0), r))
    for (const ne in r) {
      const ie = r[ne],
        ye = te(ie) ? ie.bind(n, n) : te(ie.get) ? ie.get.bind(n, n) : mt,
        Oe = !te(ie) && te(ie.set) ? ie.set.bind(n) : mt,
        Pe = rt({ get: ye, set: Oe });
      Object.defineProperty(s, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => Pe.value,
        set: (we) => (Pe.value = we),
      });
    }
  if (a) for (const ne in a) yc(a[ne], s, n, ne);
  if (l) {
    const ne = te(l) ? l.call(n) : l;
    Reflect.ownKeys(ne).forEach((ie) => {
      Hn(ie, ne[ie]);
    });
  }
  c && ia(c, t, "c");
  function se(ne, ie) {
    ee(ie) ? ie.forEach((ye) => ne(ye.bind(n))) : ie && ne(ie.bind(n));
  }
  if (
    (se(Of, d),
    se(go, p),
    se(Ec, f),
    se(vo, g),
    se(Af, v),
    se(xf, S),
    se(Mf, j),
    se(Lf, D),
    se(If, G),
    se(_o, y),
    se(bc, w),
    se(Pf, N),
    ee(P))
  )
    if (P.length) {
      const ne = t.exposed || (t.exposed = {});
      P.forEach((ie) => {
        Object.defineProperty(ne, ie, {
          get: () => n[ie],
          set: (ye) => (n[ie] = ye),
        });
      });
    } else t.exposed || (t.exposed = {});
  (A && t.render === mt && (t.render = A),
    F != null && (t.inheritAttrs = F),
    K && (t.components = K),
    z && (t.directives = z),
    N && gc(t));
}
function kf(t, e, n = mt) {
  ee(t) && (t = $r(t));
  for (const s in t) {
    const i = t[s];
    let r;
    (Ee(i)
      ? "default" in i
        ? (r = Tt(i.from || s, i.default, !0))
        : (r = Tt(i.from || s))
      : (r = Tt(i)),
      De(r)
        ? Object.defineProperty(e, s, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (o) => (r.value = o),
          })
        : (e[s] = r));
  }
}
function ia(t, e, n) {
  Ct(ee(t) ? t.map((s) => s.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function yc(t, e, n, s) {
  let i = s.includes(".") ? Rc(n, s) : () => n[s];
  if (Se(t)) {
    const r = e[t];
    te(r) && dn(i, r);
  } else if (te(t)) dn(i, t.bind(n));
  else if (Ee(t))
    if (ee(t)) t.forEach((r) => yc(r, e, n, s));
    else {
      const r = te(t.handler) ? t.handler.bind(n) : e[t.handler];
      te(r) && dn(i, r, t);
    }
}
function Eo(t) {
  const e = t.type,
    { mixins: n, extends: s } = e,
    {
      mixins: i,
      optionsCache: r,
      config: { optionMergeStrategies: o },
    } = t.appContext,
    a = r.get(e);
  let l;
  return (
    a
      ? (l = a)
      : !i.length && !n && !s
        ? (l = e)
        : ((l = {}),
          i.length && i.forEach((u) => di(l, u, o, !0)),
          di(l, e, o)),
    Ee(e) && r.set(e, l),
    l
  );
}
function di(t, e, n, s = !1) {
  const { mixins: i, extends: r } = e;
  (r && di(t, r, n, !0), i && i.forEach((o) => di(t, o, n, !0)));
  for (const o in e)
    if (!(s && o === "expose")) {
      const a = Vf[o] || (n && n[o]);
      t[o] = a ? a(t[o], e[o]) : e[o];
    }
  return t;
}
const Vf = {
  data: ra,
  props: oa,
  emits: oa,
  methods: ps,
  computed: ps,
  beforeCreate: $e,
  created: $e,
  beforeMount: $e,
  mounted: $e,
  beforeUpdate: $e,
  updated: $e,
  beforeDestroy: $e,
  beforeUnmount: $e,
  destroyed: $e,
  unmounted: $e,
  activated: $e,
  deactivated: $e,
  errorCaptured: $e,
  serverPrefetch: $e,
  components: ps,
  directives: ps,
  watch: jf,
  provide: ra,
  inject: Bf,
};
function ra(t, e) {
  return e
    ? t
      ? function () {
          return xe(
            te(t) ? t.call(this, this) : t,
            te(e) ? e.call(this, this) : e,
          );
        }
      : e
    : t;
}
function Bf(t, e) {
  return ps($r(t), $r(e));
}
function $r(t) {
  if (ee(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e;
  }
  return t;
}
function $e(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function ps(t, e) {
  return t ? xe(Object.create(null), t, e) : e;
}
function oa(t, e) {
  return t
    ? ee(t) && ee(e)
      ? [...new Set([...t, ...e])]
      : xe(Object.create(null), sa(t), sa(e != null ? e : {}))
    : e;
}
function jf(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = xe(Object.create(null), t);
  for (const s in e) n[s] = $e(t[s], e[s]);
  return n;
}
function Sc() {
  return {
    app: null,
    config: {
      isNativeTag: Dd,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Hf = 0;
function Ff(t, e) {
  return function (s, i = null) {
    (te(s) || (s = xe({}, s)), i != null && !Ee(i) && (i = null));
    const r = Sc(),
      o = new WeakSet(),
      a = [];
    let l = !1;
    const u = (r.app = {
      _uid: Hf++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Sp,
      get config() {
        return r.config;
      },
      set config(c) {},
      use(c, ...d) {
        return (
          o.has(c) ||
            (c && te(c.install)
              ? (o.add(c), c.install(u, ...d))
              : te(c) && (o.add(c), c(u, ...d))),
          u
        );
      },
      mixin(c) {
        return (r.mixins.includes(c) || r.mixins.push(c), u);
      },
      component(c, d) {
        return d ? ((r.components[c] = d), u) : r.components[c];
      },
      directive(c, d) {
        return d ? ((r.directives[c] = d), u) : r.directives[c];
      },
      mount(c, d, p) {
        if (!l) {
          const f = u._ceVNode || Q(s, i);
          return (
            (f.appContext = r),
            p === !0 ? (p = "svg") : p === !1 && (p = void 0),
            d && e ? e(f, c) : t(f, c, p),
            (l = !0),
            (u._container = c),
            (c.__vue_app__ = u),
            Li(f.component)
          );
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        l &&
          (Ct(a, u._instance, 16),
          t(null, u._container),
          delete u._container.__vue_app__);
      },
      provide(c, d) {
        return ((r.provides[c] = d), u);
      },
      runWithContext(c) {
        const d = jn;
        jn = u;
        try {
          return c();
        } finally {
          jn = d;
        }
      },
    });
    return u;
  };
}
let jn = null;
function Hn(t, e) {
  if (Ne) {
    let n = Ne.provides;
    const s = Ne.parent && Ne.parent.provides;
    (s === n && (n = Ne.provides = Object.create(s)), (n[t] = e));
  }
}
function Tt(t, e, n = !1) {
  const s = Ne || Je;
  if (s || jn) {
    const i = jn
      ? jn._context.provides
      : s
        ? s.parent == null
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0;
    if (i && t in i) return i[t];
    if (arguments.length > 1) return n && te(e) ? e.call(s && s.proxy) : e;
  }
}
const Tc = {},
  Ac = () => Object.create(Tc),
  xc = (t) => Object.getPrototypeOf(t) === Tc;
function zf(t, e, n, s = !1) {
  const i = {},
    r = Ac();
  ((t.propsDefaults = Object.create(null)), Cc(t, e, i, r));
  for (const o in t.propsOptions[0]) o in i || (i[o] = void 0);
  (n ? (t.props = s ? i : oc(i)) : t.type.props ? (t.props = i) : (t.props = r),
    (t.attrs = r));
}
function Gf(t, e, n, s) {
  const {
      props: i,
      attrs: r,
      vnode: { patchFlag: o },
    } = t,
    a = ce(i),
    [l] = t.propsOptions;
  let u = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = t.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let p = c[d];
        if (Pi(t.emitsOptions, p)) continue;
        const f = e[p];
        if (l)
          if (ue(r, p)) f !== r[p] && ((r[p] = f), (u = !0));
          else {
            const g = lt(p);
            i[g] = Rr(l, a, g, f, t, !1);
          }
        else f !== r[p] && ((r[p] = f), (u = !0));
      }
    }
  } else {
    Cc(t, e, i, r) && (u = !0);
    let c;
    for (const d in a)
      (!e || (!ue(e, d) && ((c = _n(d)) === d || !ue(e, c)))) &&
        (l
          ? n &&
            (n[d] !== void 0 || n[c] !== void 0) &&
            (i[d] = Rr(l, a, d, void 0, t, !0))
          : delete i[d]);
    if (r !== a)
      for (const d in r) (!e || (!ue(e, d) && !0)) && (delete r[d], (u = !0));
  }
  u && Nt(t.attrs, "set", "");
}
function Cc(t, e, n, s) {
  const [i, r] = t.propsOptions;
  let o = !1,
    a;
  if (e)
    for (let l in e) {
      if (hs(l)) continue;
      const u = e[l];
      let c;
      i && ue(i, (c = lt(l)))
        ? !r || !r.includes(c)
          ? (n[c] = u)
          : ((a || (a = {}))[c] = u)
        : Pi(t.emitsOptions, l) ||
          ((!(l in s) || u !== s[l]) && ((s[l] = u), (o = !0)));
    }
  if (r) {
    const l = ce(n),
      u = a || me;
    for (let c = 0; c < r.length; c++) {
      const d = r[c];
      n[d] = Rr(i, l, d, u[d], t, !ue(u, d));
    }
  }
  return o;
}
function Rr(t, e, n, s, i, r) {
  const o = t[n];
  if (o != null) {
    const a = ue(o, "default");
    if (a && s === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && te(l)) {
        const { propsDefaults: u } = i;
        if (n in u) s = u[n];
        else {
          const c = Rs(i);
          ((s = u[n] = l.call(null, e)), c());
        }
      } else s = l;
      i.ce && i.ce._setProp(n, s);
    }
    o[0] &&
      (r && !a ? (s = !1) : o[1] && (s === "" || s === _n(n)) && (s = !0));
  }
  return s;
}
const Wf = new WeakMap();
function Oc(t, e, n = !1) {
  const s = n ? Wf : e.propsCache,
    i = s.get(t);
  if (i) return i;
  const r = t.props,
    o = {},
    a = [];
  let l = !1;
  if (!te(t)) {
    const c = (d) => {
      l = !0;
      const [p, f] = Oc(d, e, !0);
      (xe(o, p), f && a.push(...f));
    };
    (!n && e.mixins.length && e.mixins.forEach(c),
      t.extends && c(t.extends),
      t.mixins && t.mixins.forEach(c));
  }
  if (!r && !l) return (Ee(t) && s.set(t, $n), $n);
  if (ee(r))
    for (let c = 0; c < r.length; c++) {
      const d = lt(r[c]);
      aa(d) && (o[d] = me);
    }
  else if (r)
    for (const c in r) {
      const d = lt(c);
      if (aa(d)) {
        const p = r[c],
          f = (o[d] = ee(p) || te(p) ? { type: p } : xe({}, p)),
          g = f.type;
        let v = !1,
          S = !0;
        if (ee(g))
          for (let E = 0; E < g.length; ++E) {
            const y = g[E],
              b = te(y) && y.name;
            if (b === "Boolean") {
              v = !0;
              break;
            } else b === "String" && (S = !1);
          }
        else v = te(g) && g.name === "Boolean";
        ((f[0] = v), (f[1] = S), (v || ue(f, "default")) && a.push(d));
      }
    }
  const u = [o, a];
  return (Ee(t) && s.set(t, u), u);
}
function aa(t) {
  return t[0] !== "$" && !hs(t);
}
const Pc = (t) => t[0] === "_" || t === "$stable",
  bo = (t) => (ee(t) ? t.map(St) : [St(t)]),
  Uf = (t, e, n) => {
    if (e._n) return e;
    const s = _e((...i) => bo(e(...i)), n);
    return ((s._c = !1), s);
  },
  Ic = (t, e, n) => {
    const s = t._ctx;
    for (const i in t) {
      if (Pc(i)) continue;
      const r = t[i];
      if (te(r)) e[i] = Uf(i, r, s);
      else if (r != null) {
        const o = bo(r);
        e[i] = () => o;
      }
    }
  },
  Lc = (t, e) => {
    const n = bo(e);
    t.slots.default = () => n;
  },
  Mc = (t, e, n) => {
    for (const s in e) (n || s !== "_") && (t[s] = e[s]);
  },
  Kf = (t, e, n) => {
    const s = (t.slots = Ac());
    if (t.vnode.shapeFlag & 32) {
      const i = e._;
      i ? (Mc(s, e, n), n && Fl(s, "_", i, !0)) : Ic(e, s);
    } else e && Lc(t, e);
  },
  Yf = (t, e, n) => {
    const { vnode: s, slots: i } = t;
    let r = !0,
      o = me;
    if (s.shapeFlag & 32) {
      const a = e._;
      (a
        ? n && a === 1
          ? (r = !1)
          : Mc(i, e, n)
        : ((r = !e.$stable), Ic(e, i)),
        (o = e));
    } else e && (Lc(t, e), (o = { default: 1 }));
    if (r) for (const a in i) !Pc(a) && o[a] == null && delete i[a];
  };
function qf() {
  typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" &&
    (Ms().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1);
}
const qe = cp;
function Xf(t) {
  return Qf(t);
}
function Qf(t, e) {
  qf();
  const n = Ms();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: i,
      patchProp: r,
      createElement: o,
      createText: a,
      createComment: l,
      setText: u,
      setElementText: c,
      parentNode: d,
      nextSibling: p,
      setScopeId: f = mt,
      insertStaticContent: g,
    } = t,
    v = (
      h,
      m,
      _,
      O = null,
      T = null,
      L = null,
      V = void 0,
      $ = null,
      R = !!m.dynamicChildren,
    ) => {
      if (h === m) return;
      (h && !ls(h, m) && ((O = x(h)), we(h, T, L, !0), (h = null)),
        m.patchFlag === -2 && ((R = !1), (m.dynamicChildren = null)));
      const { type: M, ref: q, shapeFlag: H } = m;
      switch (M) {
        case Ii:
          S(h, m, _, O);
          break;
        case hn:
          E(h, m, _, O);
          break;
        case ti:
          h == null && y(m, _, O, V);
          break;
        case Te:
          K(h, m, _, O, T, L, V, $, R);
          break;
        default:
          H & 1
            ? A(h, m, _, O, T, L, V, $, R)
            : H & 6
              ? z(h, m, _, O, T, L, V, $, R)
              : (H & 64 || H & 128) && M.process(h, m, _, O, T, L, V, $, R, W);
      }
      q != null && T && Mr(q, h && h.ref, L, m || h, !m);
    },
    S = (h, m, _, O) => {
      if (h == null) s((m.el = a(m.children)), _, O);
      else {
        const T = (m.el = h.el);
        m.children !== h.children && u(T, m.children);
      }
    },
    E = (h, m, _, O) => {
      h == null ? s((m.el = l(m.children || "")), _, O) : (m.el = h.el);
    },
    y = (h, m, _, O) => {
      [h.el, h.anchor] = g(h.children, m, _, O, h.el, h.anchor);
    },
    b = ({ el: h, anchor: m }, _, O) => {
      let T;
      for (; h && h !== m; ) ((T = p(h)), s(h, _, O), (h = T));
      s(m, _, O);
    },
    w = ({ el: h, anchor: m }) => {
      let _;
      for (; h && h !== m; ) ((_ = p(h)), i(h), (h = _));
      i(m);
    },
    A = (h, m, _, O, T, L, V, $, R) => {
      (m.type === "svg" ? (V = "svg") : m.type === "math" && (V = "mathml"),
        h == null ? D(m, _, O, T, L, V, $, R) : N(h, m, T, L, V, $, R));
    },
    D = (h, m, _, O, T, L, V, $) => {
      let R, M;
      const { props: q, shapeFlag: H, transition: U, dirs: J } = h;
      if (
        ((R = h.el = o(h.type, L, q && q.is, q)),
        H & 8
          ? c(R, h.children)
          : H & 16 && j(h.children, R, null, O, T, Yi(h, L), V, $),
        J && sn(h, null, O, "created"),
        G(R, h, h.scopeId, V, O),
        q)
      ) {
        for (const fe in q)
          fe !== "value" && !hs(fe) && r(R, fe, null, q[fe], L, O);
        ("value" in q && r(R, "value", null, q.value, L),
          (M = q.onVnodeBeforeMount) && wt(M, O, h));
      }
      J && sn(h, null, O, "beforeMount");
      const re = Jf(T, U);
      (re && U.beforeEnter(R),
        s(R, m, _),
        ((M = q && q.onVnodeMounted) || re || J) &&
          qe(() => {
            (M && wt(M, O, h),
              re && U.enter(R),
              J && sn(h, null, O, "mounted"));
          }, T));
    },
    G = (h, m, _, O, T) => {
      if ((_ && f(h, _), O)) for (let L = 0; L < O.length; L++) f(h, O[L]);
      if (T) {
        let L = T.subTree;
        if (
          m === L ||
          (Vc(L.type) && (L.ssContent === m || L.ssFallback === m))
        ) {
          const V = T.vnode;
          G(h, V, V.scopeId, V.slotScopeIds, T.parent);
        }
      }
    },
    j = (h, m, _, O, T, L, V, $, R = 0) => {
      for (let M = R; M < h.length; M++) {
        const q = (h[M] = $ ? Gt(h[M]) : St(h[M]));
        v(null, q, m, _, O, T, L, V, $);
      }
    },
    N = (h, m, _, O, T, L, V) => {
      const $ = (m.el = h.el);
      let { patchFlag: R, dynamicChildren: M, dirs: q } = m;
      R |= h.patchFlag & 16;
      const H = h.props || me,
        U = m.props || me;
      let J;
      if (
        (_ && rn(_, !1),
        (J = U.onVnodeBeforeUpdate) && wt(J, _, m, h),
        q && sn(m, h, _, "beforeUpdate"),
        _ && rn(_, !0),
        ((H.innerHTML && U.innerHTML == null) ||
          (H.textContent && U.textContent == null)) &&
          c($, ""),
        M
          ? P(h.dynamicChildren, M, $, _, O, Yi(m, T), L)
          : V || ie(h, m, $, null, _, O, Yi(m, T), L, !1),
        R > 0)
      ) {
        if (R & 16) F($, H, U, _, T);
        else if (
          (R & 2 && H.class !== U.class && r($, "class", null, U.class, T),
          R & 4 && r($, "style", H.style, U.style, T),
          R & 8)
        ) {
          const re = m.dynamicProps;
          for (let fe = 0; fe < re.length; fe++) {
            const pe = re[fe],
              Ue = H[pe],
              Ie = U[pe];
            (Ie !== Ue || pe === "value") && r($, pe, Ue, Ie, T, _);
          }
        }
        R & 1 && h.children !== m.children && c($, m.children);
      } else !V && M == null && F($, H, U, _, T);
      ((J = U.onVnodeUpdated) || q) &&
        qe(() => {
          (J && wt(J, _, m, h), q && sn(m, h, _, "updated"));
        }, O);
    },
    P = (h, m, _, O, T, L, V) => {
      for (let $ = 0; $ < m.length; $++) {
        const R = h[$],
          M = m[$],
          q =
            R.el && (R.type === Te || !ls(R, M) || R.shapeFlag & 70)
              ? d(R.el)
              : _;
        v(R, M, q, null, O, T, L, V, !0);
      }
    },
    F = (h, m, _, O, T) => {
      if (m !== _) {
        if (m !== me)
          for (const L in m) !hs(L) && !(L in _) && r(h, L, m[L], null, T, O);
        for (const L in _) {
          if (hs(L)) continue;
          const V = _[L],
            $ = m[L];
          V !== $ && L !== "value" && r(h, L, $, V, T, O);
        }
        "value" in _ && r(h, "value", m.value, _.value, T);
      }
    },
    K = (h, m, _, O, T, L, V, $, R) => {
      const M = (m.el = h ? h.el : a("")),
        q = (m.anchor = h ? h.anchor : a(""));
      let { patchFlag: H, dynamicChildren: U, slotScopeIds: J } = m;
      (J && ($ = $ ? $.concat(J) : J),
        h == null
          ? (s(M, _, O), s(q, _, O), j(m.children || [], _, q, T, L, V, $, R))
          : H > 0 && H & 64 && U && h.dynamicChildren
            ? (P(h.dynamicChildren, U, _, T, L, V, $),
              (m.key != null || (T && m === T.subTree)) && Nc(h, m, !0))
            : ie(h, m, _, q, T, L, V, $, R));
    },
    z = (h, m, _, O, T, L, V, $, R) => {
      ((m.slotScopeIds = $),
        h == null
          ? m.shapeFlag & 512
            ? T.ctx.activate(m, _, O, V, R)
            : oe(m, _, O, T, L, V, R)
          : de(h, m, R));
    },
    oe = (h, m, _, O, T, L, V) => {
      const $ = (h.component = gp(h, O, T));
      if ((vc(h) && ($.ctx.renderer = W), vp($, !1, V), $.asyncDep)) {
        if ((T && T.registerDep($, se, V), !h.el)) {
          const R = ($.subTree = Q(hn));
          E(null, R, m, _);
        }
      } else se($, h, m, _, T, L, V);
    },
    de = (h, m, _) => {
      const O = (m.component = h.component);
      if (ap(h, m, _))
        if (O.asyncDep && !O.asyncResolved) {
          ne(O, m, _);
          return;
        } else ((O.next = m), O.update());
      else ((m.el = h.el), (O.vnode = m));
    },
    se = (h, m, _, O, T, L, V) => {
      const $ = () => {
        if (h.isMounted) {
          let { next: H, bu: U, u: J, parent: re, vnode: fe } = h;
          {
            const Ke = Dc(h);
            if (Ke) {
              (H && ((H.el = fe.el), ne(h, H, V)),
                Ke.asyncDep.then(() => {
                  h.isUnmounted || $();
                }));
              return;
            }
          }
          let pe = H,
            Ue;
          (rn(h, !1),
            H ? ((H.el = fe.el), ne(h, H, V)) : (H = fe),
            U && ei(U),
            (Ue = H.props && H.props.onVnodeBeforeUpdate) && wt(Ue, re, H, fe),
            rn(h, !0));
          const Ie = qi(h),
            pt = h.subTree;
          ((h.subTree = Ie),
            v(pt, Ie, d(pt.el), x(pt), h, T, L),
            (H.el = Ie.el),
            pe === null && lp(h, Ie.el),
            J && qe(J, T),
            (Ue = H.props && H.props.onVnodeUpdated) &&
              qe(() => wt(Ue, re, H, fe), T));
        } else {
          let H;
          const { el: U, props: J } = m,
            { bm: re, m: fe, parent: pe, root: Ue, type: Ie } = h,
            pt = vs(m);
          if (
            (rn(h, !1),
            re && ei(re),
            !pt && (H = J && J.onVnodeBeforeMount) && wt(H, pe, m),
            rn(h, !0),
            U && ge)
          ) {
            const Ke = () => {
              ((h.subTree = qi(h)), ge(U, h.subTree, h, T, null));
            };
            pt && Ie.__asyncHydrate ? Ie.__asyncHydrate(U, h, Ke) : Ke();
          } else {
            Ue.ce && Ue.ce._injectChildStyle(Ie);
            const Ke = (h.subTree = qi(h));
            (v(null, Ke, _, O, h, T, L), (m.el = Ke.el));
          }
          if ((fe && qe(fe, T), !pt && (H = J && J.onVnodeMounted))) {
            const Ke = m;
            qe(() => wt(H, pe, Ke), T);
          }
          ((m.shapeFlag & 256 ||
            (pe && vs(pe.vnode) && pe.vnode.shapeFlag & 256)) &&
            h.a &&
            qe(h.a, T),
            (h.isMounted = !0),
            (m = _ = O = null));
        }
      };
      h.scope.on();
      const R = (h.effect = new Ul($));
      h.scope.off();
      const M = (h.update = R.run.bind(R)),
        q = (h.job = R.runIfDirty.bind(R));
      ((q.i = h), (q.id = h.uid), (R.scheduler = () => ho(q)), rn(h, !0), M());
    },
    ne = (h, m, _) => {
      m.component = h;
      const O = h.vnode.props;
      ((h.vnode = m),
        (h.next = null),
        Gf(h, m.props, O, _),
        Yf(h, m.children, _),
        Jt(),
        ta(h),
        Zt());
    },
    ie = (h, m, _, O, T, L, V, $, R = !1) => {
      const M = h && h.children,
        q = h ? h.shapeFlag : 0,
        H = m.children,
        { patchFlag: U, shapeFlag: J } = m;
      if (U > 0) {
        if (U & 128) {
          Oe(M, H, _, O, T, L, V, $, R);
          return;
        } else if (U & 256) {
          ye(M, H, _, O, T, L, V, $, R);
          return;
        }
      }
      J & 8
        ? (q & 16 && Ae(M, T, L), H !== M && c(_, H))
        : q & 16
          ? J & 16
            ? Oe(M, H, _, O, T, L, V, $, R)
            : Ae(M, T, L, !0)
          : (q & 8 && c(_, ""), J & 16 && j(H, _, O, T, L, V, $, R));
    },
    ye = (h, m, _, O, T, L, V, $, R) => {
      ((h = h || $n), (m = m || $n));
      const M = h.length,
        q = m.length,
        H = Math.min(M, q);
      let U;
      for (U = 0; U < H; U++) {
        const J = (m[U] = R ? Gt(m[U]) : St(m[U]));
        v(h[U], J, _, null, T, L, V, $, R);
      }
      M > q ? Ae(h, T, L, !0, !1, H) : j(m, _, O, T, L, V, $, R, H);
    },
    Oe = (h, m, _, O, T, L, V, $, R) => {
      let M = 0;
      const q = m.length;
      let H = h.length - 1,
        U = q - 1;
      for (; M <= H && M <= U; ) {
        const J = h[M],
          re = (m[M] = R ? Gt(m[M]) : St(m[M]));
        if (ls(J, re)) v(J, re, _, null, T, L, V, $, R);
        else break;
        M++;
      }
      for (; M <= H && M <= U; ) {
        const J = h[H],
          re = (m[U] = R ? Gt(m[U]) : St(m[U]));
        if (ls(J, re)) v(J, re, _, null, T, L, V, $, R);
        else break;
        (H--, U--);
      }
      if (M > H) {
        if (M <= U) {
          const J = U + 1,
            re = J < q ? m[J].el : O;
          for (; M <= U; )
            (v(null, (m[M] = R ? Gt(m[M]) : St(m[M])), _, re, T, L, V, $, R),
              M++);
        }
      } else if (M > U) for (; M <= H; ) (we(h[M], T, L, !0), M++);
      else {
        const J = M,
          re = M,
          fe = new Map();
        for (M = re; M <= U; M++) {
          const Ye = (m[M] = R ? Gt(m[M]) : St(m[M]));
          Ye.key != null && fe.set(Ye.key, M);
        }
        let pe,
          Ue = 0;
        const Ie = U - re + 1;
        let pt = !1,
          Ke = 0;
        const os = new Array(Ie);
        for (M = 0; M < Ie; M++) os[M] = 0;
        for (M = J; M <= H; M++) {
          const Ye = h[M];
          if (Ue >= Ie) {
            we(Ye, T, L, !0);
            continue;
          }
          let bt;
          if (Ye.key != null) bt = fe.get(Ye.key);
          else
            for (pe = re; pe <= U; pe++)
              if (os[pe - re] === 0 && ls(Ye, m[pe])) {
                bt = pe;
                break;
              }
          bt === void 0
            ? we(Ye, T, L, !0)
            : ((os[bt - re] = M + 1),
              bt >= Ke ? (Ke = bt) : (pt = !0),
              v(Ye, m[bt], _, null, T, L, V, $, R),
              Ue++);
        }
        const Xo = pt ? Zf(os) : $n;
        for (pe = Xo.length - 1, M = Ie - 1; M >= 0; M--) {
          const Ye = re + M,
            bt = m[Ye],
            Qo = Ye + 1 < q ? m[Ye + 1].el : O;
          os[M] === 0
            ? v(null, bt, _, Qo, T, L, V, $, R)
            : pt && (pe < 0 || M !== Xo[pe] ? Pe(bt, _, Qo, 2) : pe--);
        }
      }
    },
    Pe = (h, m, _, O, T = null) => {
      const { el: L, type: V, transition: $, children: R, shapeFlag: M } = h;
      if (M & 6) {
        Pe(h.component.subTree, m, _, O);
        return;
      }
      if (M & 128) {
        h.suspense.move(m, _, O);
        return;
      }
      if (M & 64) {
        V.move(h, m, _, W);
        return;
      }
      if (V === Te) {
        s(L, m, _);
        for (let H = 0; H < R.length; H++) Pe(R[H], m, _, O);
        s(h.anchor, m, _);
        return;
      }
      if (V === ti) {
        b(h, m, _);
        return;
      }
      if (O !== 2 && M & 1 && $)
        if (O === 0) ($.beforeEnter(L), s(L, m, _), qe(() => $.enter(L), T));
        else {
          const { leave: H, delayLeave: U, afterLeave: J } = $,
            re = () => s(L, m, _),
            fe = () => {
              H(L, () => {
                (re(), J && J());
              });
            };
          U ? U(L, re, fe) : fe();
        }
      else s(L, m, _);
    },
    we = (h, m, _, O = !1, T = !1) => {
      const {
        type: L,
        props: V,
        ref: $,
        children: R,
        dynamicChildren: M,
        shapeFlag: q,
        patchFlag: H,
        dirs: U,
        cacheIndex: J,
      } = h;
      if (
        (H === -2 && (T = !1),
        $ != null && Mr($, null, _, h, !0),
        J != null && (m.renderCache[J] = void 0),
        q & 256)
      ) {
        m.ctx.deactivate(h);
        return;
      }
      const re = q & 1 && U,
        fe = !vs(h);
      let pe;
      if ((fe && (pe = V && V.onVnodeBeforeUnmount) && wt(pe, m, h), q & 6))
        We(h.component, _, O);
      else {
        if (q & 128) {
          h.suspense.unmount(_, O);
          return;
        }
        (re && sn(h, null, m, "beforeUnmount"),
          q & 64
            ? h.type.remove(h, m, _, W, O)
            : M && !M.hasOnce && (L !== Te || (H > 0 && H & 64))
              ? Ae(M, m, _, !1, !0)
              : ((L === Te && H & 384) || (!T && q & 16)) && Ae(R, m, _),
          O && ft(h));
      }
      ((fe && (pe = V && V.onVnodeUnmounted)) || re) &&
        qe(() => {
          (pe && wt(pe, m, h), re && sn(h, null, m, "unmounted"));
        }, _);
    },
    ft = (h) => {
      const { type: m, el: _, anchor: O, transition: T } = h;
      if (m === Te) {
        Ge(_, O);
        return;
      }
      if (m === ti) {
        w(h);
        return;
      }
      const L = () => {
        (i(_), T && !T.persisted && T.afterLeave && T.afterLeave());
      };
      if (h.shapeFlag & 1 && T && !T.persisted) {
        const { leave: V, delayLeave: $ } = T,
          R = () => V(_, L);
        $ ? $(h.el, L, R) : R();
      } else L();
    },
    Ge = (h, m) => {
      let _;
      for (; h !== m; ) ((_ = p(h)), i(h), (h = _));
      i(m);
    },
    We = (h, m, _) => {
      const { bum: O, scope: T, job: L, subTree: V, um: $, m: R, a: M } = h;
      (la(R),
        la(M),
        O && ei(O),
        T.stop(),
        L && ((L.flags |= 8), we(V, h, m, _)),
        $ && qe($, m),
        qe(() => {
          h.isUnmounted = !0;
        }, m),
        m &&
          m.pendingBranch &&
          !m.isUnmounted &&
          h.asyncDep &&
          !h.asyncResolved &&
          h.suspenseId === m.pendingId &&
          (m.deps--, m.deps === 0 && m.resolve()));
    },
    Ae = (h, m, _, O = !1, T = !1, L = 0) => {
      for (let V = L; V < h.length; V++) we(h[V], m, _, O, T);
    },
    x = (h) => {
      if (h.shapeFlag & 6) return x(h.component.subTree);
      if (h.shapeFlag & 128) return h.suspense.next();
      const m = p(h.anchor || h.el),
        _ = m && m[Sf];
      return _ ? p(_) : m;
    };
  let B = !1;
  const k = (h, m, _) => {
      (h == null
        ? m._vnode && we(m._vnode, null, null, !0)
        : v(m._vnode || null, h, m, null, null, null, _),
        (m._vnode = h),
        B || ((B = !0), ta(), fc(), (B = !1)));
    },
    W = {
      p: v,
      um: we,
      m: Pe,
      r: ft,
      mt: oe,
      mc: j,
      pc: ie,
      pbc: P,
      n: x,
      o: t,
    };
  let ae, ge;
  return (
    e && ([ae, ge] = e(W)),
    { render: k, hydrate: ae, createApp: Ff(k, ae) }
  );
}
function Yi({ type: t, props: e }, n) {
  return (n === "svg" && t === "foreignObject") ||
    (n === "mathml" &&
      t === "annotation-xml" &&
      e &&
      e.encoding &&
      e.encoding.includes("html"))
    ? void 0
    : n;
}
function rn({ effect: t, job: e }, n) {
  n ? ((t.flags |= 32), (e.flags |= 4)) : ((t.flags &= -33), (e.flags &= -5));
}
function Jf(t, e) {
  return (!t || (t && !t.pendingBranch)) && e && !e.persisted;
}
function Nc(t, e, n = !1) {
  const s = t.children,
    i = e.children;
  if (ee(s) && ee(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let a = i[r];
      (a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = i[r] = Gt(i[r])), (a.el = o.el)),
        !n && a.patchFlag !== -2 && Nc(o, a)),
        a.type === Ii && (a.el = o.el));
    }
}
function Zf(t) {
  const e = t.slice(),
    n = [0];
  let s, i, r, o, a;
  const l = t.length;
  for (s = 0; s < l; s++) {
    const u = t[s];
    if (u !== 0) {
      if (((i = n[n.length - 1]), t[i] < u)) {
        ((e[s] = i), n.push(s));
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        ((a = (r + o) >> 1), t[n[a]] < u ? (r = a + 1) : (o = a));
      u < t[n[r]] && (r > 0 && (e[s] = n[r - 1]), (n[r] = s));
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; ) ((n[r] = o), (o = e[o]));
  return n;
}
function Dc(t) {
  const e = t.subTree.component;
  if (e) return e.asyncDep && !e.asyncResolved ? e : Dc(e);
}
function la(t) {
  if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8;
}
const ep = Symbol.for("v-scx"),
  tp = () => Tt(ep);
function dn(t, e, n) {
  return $c(t, e, n);
}
function $c(t, e, n = me) {
  const { immediate: s, deep: i, flush: r, once: o } = n,
    a = xe({}, n),
    l = (e && s) || (!e && r !== "post");
  let u;
  if (Os) {
    if (r === "sync") {
      const f = tp();
      u = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!l) {
      const f = () => {};
      return ((f.stop = mt), (f.resume = mt), (f.pause = mt), f);
    }
  }
  const c = Ne;
  a.call = (f, g, v) => Ct(f, c, g, v);
  let d = !1;
  (r === "post"
    ? (a.scheduler = (f) => {
        qe(f, c && c.suspense);
      })
    : r !== "sync" &&
      ((d = !0),
      (a.scheduler = (f, g) => {
        g ? f() : ho(f);
      })),
    (a.augmentJob = (f) => {
      (e && (f.flags |= 4),
        d && ((f.flags |= 2), c && ((f.id = c.uid), (f.i = c))));
    }));
  const p = Ef(t, e, a);
  return (Os && (u ? u.push(p) : l && p()), p);
}
function np(t, e, n) {
  const s = this.proxy,
    i = Se(t) ? (t.includes(".") ? Rc(s, t) : () => s[t]) : t.bind(s, s);
  let r;
  te(e) ? (r = e) : ((r = e.handler), (n = e));
  const o = Rs(this),
    a = $c(i, r.bind(s), n);
  return (o(), a);
}
function Rc(t, e) {
  const n = e.split(".");
  return () => {
    let s = t;
    for (let i = 0; i < n.length && s; i++) s = s[n[i]];
    return s;
  };
}
const sp = (t, e) =>
  e === "modelValue" || e === "model-value"
    ? t.modelModifiers
    : t[`${e}Modifiers`] || t[`${lt(e)}Modifiers`] || t[`${_n(e)}Modifiers`];
function ip(t, e, ...n) {
  if (t.isUnmounted) return;
  const s = t.vnode.props || me;
  let i = n;
  const r = e.startsWith("update:"),
    o = r && sp(s, e.slice(7));
  o &&
    (o.trim && (i = n.map((c) => (Se(c) ? c.trim() : c))),
    o.number && (i = n.map(xr)));
  let a,
    l = s[(a = Fi(e))] || s[(a = Fi(lt(e)))];
  (!l && r && (l = s[(a = Fi(_n(e)))]), l && Ct(l, t, 6, i));
  const u = s[a + "Once"];
  if (u) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[a]) return;
    ((t.emitted[a] = !0), Ct(u, t, 6, i));
  }
}
function kc(t, e, n = !1) {
  const s = e.emitsCache,
    i = s.get(t);
  if (i !== void 0) return i;
  const r = t.emits;
  let o = {},
    a = !1;
  if (!te(t)) {
    const l = (u) => {
      const c = kc(u, e, !0);
      c && ((a = !0), xe(o, c));
    };
    (!n && e.mixins.length && e.mixins.forEach(l),
      t.extends && l(t.extends),
      t.mixins && t.mixins.forEach(l));
  }
  return !r && !a
    ? (Ee(t) && s.set(t, null), null)
    : (ee(r) ? r.forEach((l) => (o[l] = null)) : xe(o, r),
      Ee(t) && s.set(t, o),
      o);
}
function Pi(t, e) {
  return !t || !yi(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, "")),
      ue(t, e[0].toLowerCase() + e.slice(1)) || ue(t, _n(e)) || ue(t, e));
}
function qi(t) {
  const {
      type: e,
      vnode: n,
      proxy: s,
      withProxy: i,
      propsOptions: [r],
      slots: o,
      attrs: a,
      emit: l,
      render: u,
      renderCache: c,
      props: d,
      data: p,
      setupState: f,
      ctx: g,
      inheritAttrs: v,
    } = t,
    S = ui(t);
  let E, y;
  try {
    if (n.shapeFlag & 4) {
      const w = i || s,
        A = w;
      ((E = St(u.call(A, w, c, d, f, p, g))), (y = a));
    } else {
      const w = e;
      ((E = St(
        w.length > 1 ? w(d, { attrs: a, slots: o, emit: l }) : w(d, null),
      )),
        (y = e.props ? a : rp(a)));
    }
  } catch (w) {
    ((Es.length = 0), Ci(w, t, 1), (E = Q(hn)));
  }
  let b = E;
  if (y && v !== !1) {
    const w = Object.keys(y),
      { shapeFlag: A } = b;
    w.length &&
      A & 7 &&
      (r && w.some(no) && (y = op(y, r)), (b = zn(b, y, !1, !0)));
  }
  return (
    n.dirs &&
      ((b = zn(b, null, !1, !0)),
      (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs)),
    n.transition && mo(b, n.transition),
    (E = b),
    ui(S),
    E
  );
}
const rp = (t) => {
    let e;
    for (const n in t)
      (n === "class" || n === "style" || yi(n)) && ((e || (e = {}))[n] = t[n]);
    return e;
  },
  op = (t, e) => {
    const n = {};
    for (const s in t) (!no(s) || !(s.slice(9) in e)) && (n[s] = t[s]);
    return n;
  };
function ap(t, e, n) {
  const { props: s, children: i, component: r } = t,
    { props: o, children: a, patchFlag: l } = e,
    u = r.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return s ? ca(s, o, u) : !!o;
    if (l & 8) {
      const c = e.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const p = c[d];
        if (o[p] !== s[p] && !Pi(u, p)) return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable)
      ? !0
      : s === o
        ? !1
        : s
          ? o
            ? ca(s, o, u)
            : !0
          : !!o;
  return !1;
}
function ca(t, e, n) {
  const s = Object.keys(e);
  if (s.length !== Object.keys(t).length) return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (e[r] !== t[r] && !Pi(n, r)) return !0;
  }
  return !1;
}
function lp({ vnode: t, parent: e }, n) {
  for (; e; ) {
    const s = e.subTree;
    if ((s.suspense && s.suspense.activeBranch === t && (s.el = t.el), s === t))
      (((t = e.vnode).el = n), (e = e.parent));
    else break;
  }
}
const Vc = (t) => t.__isSuspense;
function cp(t, e) {
  e && e.pendingBranch
    ? ee(t)
      ? e.effects.push(...t)
      : e.effects.push(t)
    : yf(t);
}
const Te = Symbol.for("v-fgt"),
  Ii = Symbol.for("v-txt"),
  hn = Symbol.for("v-cmt"),
  ti = Symbol.for("v-stc"),
  Es = [];
let Ze = null;
function X(t = !1) {
  Es.push((Ze = t ? null : []));
}
function up() {
  (Es.pop(), (Ze = Es[Es.length - 1] || null));
}
let Cs = 1;
function ua(t) {
  ((Cs += t), t < 0 && Ze && (Ze.hasOnce = !0));
}
function Bc(t) {
  return (
    (t.dynamicChildren = Cs > 0 ? Ze || $n : null),
    up(),
    Cs > 0 && Ze && Ze.push(t),
    t
  );
}
function Z(t, e, n, s, i, r) {
  return Bc(C(t, e, n, s, i, r, !0));
}
function an(t, e, n, s, i) {
  return Bc(Q(t, e, n, s, i, !0));
}
function fi(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function ls(t, e) {
  return t.type === e.type && t.key === e.key;
}
const jc = ({ key: t }) => (t != null ? t : null),
  ni = ({ ref: t, ref_key: e, ref_for: n }) => (
    typeof t == "number" && (t = "" + t),
    t != null
      ? Se(t) || De(t) || te(t)
        ? { i: Je, r: t, k: e, f: !!n }
        : t
      : null
  );
function C(
  t,
  e = null,
  n = null,
  s = 0,
  i = null,
  r = t === Te ? 0 : 1,
  o = !1,
  a = !1,
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && jc(e),
    ref: e && ni(e),
    scopeId: hc,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Je,
  };
  return (
    a
      ? (wo(l, n), r & 128 && t.normalize(l))
      : n && (l.shapeFlag |= Se(n) ? 8 : 16),
    Cs > 0 &&
      !o &&
      Ze &&
      (l.patchFlag > 0 || r & 6) &&
      l.patchFlag !== 32 &&
      Ze.push(l),
    l
  );
}
const Q = dp;
function dp(t, e = null, n = null, s = 0, i = null, r = !1) {
  if (((!t || t === Nf) && (t = hn), fi(t))) {
    const a = zn(t, e, !0);
    return (
      n && wo(a, n),
      Cs > 0 &&
        !r &&
        Ze &&
        (a.shapeFlag & 6 ? (Ze[Ze.indexOf(t)] = a) : Ze.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((yp(t) && (t = t.__vccOpts), e)) {
    e = fp(e);
    let { class: a, style: l } = e;
    (a && !Se(a) && (e.class = Ns(a)),
      Ee(l) && (fo(l) && !ee(l) && (l = xe({}, l)), (e.style = En(l))));
  }
  const o = Se(t) ? 1 : Vc(t) ? 128 : Tf(t) ? 64 : Ee(t) ? 4 : te(t) ? 2 : 0;
  return C(t, e, n, s, i, o, r, !0);
}
function fp(t) {
  return t ? (fo(t) || xc(t) ? xe({}, t) : t) : null;
}
function zn(t, e, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: a, transition: l } = t,
    u = e ? pp(i || {}, e) : i,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: t.type,
      props: u,
      key: u && jc(u),
      ref:
        e && e.ref
          ? n && r
            ? ee(r)
              ? r.concat(ni(e))
              : [r, ni(e)]
            : ni(e)
          : r,
      scopeId: t.scopeId,
      slotScopeIds: t.slotScopeIds,
      children: a,
      target: t.target,
      targetStart: t.targetStart,
      targetAnchor: t.targetAnchor,
      staticCount: t.staticCount,
      shapeFlag: t.shapeFlag,
      patchFlag: e && t.type !== Te ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: t.dynamicProps,
      dynamicChildren: t.dynamicChildren,
      appContext: t.appContext,
      dirs: t.dirs,
      transition: l,
      component: t.component,
      suspense: t.suspense,
      ssContent: t.ssContent && zn(t.ssContent),
      ssFallback: t.ssFallback && zn(t.ssFallback),
      el: t.el,
      anchor: t.anchor,
      ctx: t.ctx,
      ce: t.ce,
    };
  return (l && s && mo(c, l.clone(c)), c);
}
function be(t = " ", e = 0) {
  return Q(Ii, null, t, e);
}
function pi(t, e) {
  const n = Q(ti, null, t);
  return ((n.staticCount = e), n);
}
function ht(t = "", e = !1) {
  return e ? (X(), an(hn, null, t)) : Q(hn, null, t);
}
function St(t) {
  return t == null || typeof t == "boolean"
    ? Q(hn)
    : ee(t)
      ? Q(Te, null, t.slice())
      : fi(t)
        ? Gt(t)
        : Q(Ii, null, String(t));
}
function Gt(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : zn(t);
}
function wo(t, e) {
  let n = 0;
  const { shapeFlag: s } = t;
  if (e == null) e = null;
  else if (ee(e)) n = 16;
  else if (typeof e == "object")
    if (s & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), wo(t, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = e._;
      !i && !xc(e)
        ? (e._ctx = Je)
        : i === 3 &&
          Je &&
          (Je.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
    }
  else
    te(e)
      ? ((e = { default: e, _ctx: Je }), (n = 32))
      : ((e = String(e)), s & 64 ? ((n = 16), (e = [be(e)])) : (n = 8));
  ((t.children = e), (t.shapeFlag |= n));
}
function pp(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    for (const i in s)
      if (i === "class")
        e.class !== s.class && (e.class = Ns([e.class, s.class]));
      else if (i === "style") e.style = En([e.style, s.style]);
      else if (yi(i)) {
        const r = e[i],
          o = s[i];
        o &&
          r !== o &&
          !(ee(r) && r.includes(o)) &&
          (e[i] = r ? [].concat(r, o) : o);
      } else i !== "" && (e[i] = s[i]);
  }
  return e;
}
function wt(t, e, n, s = null) {
  Ct(t, e, 7, [n, s]);
}
const hp = Sc();
let mp = 0;
function gp(t, e, n) {
  const s = t.type,
    i = (e ? e.appContext : t.appContext) || hp,
    r = {
      uid: mp++,
      vnode: t,
      type: s,
      parent: e,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Wd(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(i.provides),
      ids: e ? e.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Oc(s, i),
      emitsOptions: kc(s, i),
      emit: null,
      emitted: null,
      propsDefaults: me,
      inheritAttrs: s.inheritAttrs,
      ctx: me,
      data: me,
      props: me,
      attrs: me,
      slots: me,
      refs: me,
      setupState: me,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (r.ctx = { _: r }),
    (r.root = e ? e.root : r),
    (r.emit = ip.bind(null, r)),
    t.ce && t.ce(r),
    r
  );
}
let Ne = null,
  hi,
  kr;
{
  const t = Ms(),
    e = (n, s) => {
      let i;
      return (
        (i = t[n]) || (i = t[n] = []),
        i.push(s),
        (r) => {
          i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
        }
      );
    };
  ((hi = e("__VUE_INSTANCE_SETTERS__", (n) => (Ne = n))),
    (kr = e("__VUE_SSR_SETTERS__", (n) => (Os = n))));
}
const Rs = (t) => {
    const e = Ne;
    return (
      hi(t),
      t.scope.on(),
      () => {
        (t.scope.off(), hi(e));
      }
    );
  },
  da = () => {
    (Ne && Ne.scope.off(), hi(null));
  };
function Hc(t) {
  return t.vnode.shapeFlag & 4;
}
let Os = !1;
function vp(t, e = !1, n = !1) {
  e && kr(e);
  const { props: s, children: i } = t.vnode,
    r = Hc(t);
  (zf(t, s, r, e), Kf(t, i, n));
  const o = r ? _p(t, e) : void 0;
  return (e && kr(!1), o);
}
function _p(t, e) {
  const n = t.type;
  ((t.accessCache = Object.create(null)), (t.proxy = new Proxy(t.ctx, $f)));
  const { setup: s } = n;
  if (s) {
    Jt();
    const i = (t.setupContext = s.length > 1 ? bp(t) : null),
      r = Rs(t),
      o = $s(s, t, 0, [t.props, i]),
      a = Bl(o);
    if ((Zt(), r(), (a || t.sp) && !vs(t) && gc(t), a)) {
      if ((o.then(da, da), e))
        return o
          .then((l) => {
            fa(t, l, e);
          })
          .catch((l) => {
            Ci(l, t, 0);
          });
      t.asyncDep = o;
    } else fa(t, o, e);
  } else Fc(t, e);
}
function fa(t, e, n) {
  (te(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : Ee(e) && (t.setupState = cc(e)),
    Fc(t, n));
}
let pa;
function Fc(t, e, n) {
  const s = t.type;
  if (!t.render) {
    if (!e && pa && !s.render) {
      const i = s.template || Eo(t).template;
      if (i) {
        const { isCustomElement: r, compilerOptions: o } = t.appContext.config,
          { delimiters: a, compilerOptions: l } = s,
          u = xe(xe({ isCustomElement: r, delimiters: a }, o), l);
        s.render = pa(i, u);
      }
    }
    t.render = s.render || mt;
  }
  {
    const i = Rs(t);
    Jt();
    try {
      Rf(t);
    } finally {
      (Zt(), i());
    }
  }
}
const Ep = {
  get(t, e) {
    return (Le(t, "get", ""), t[e]);
  },
};
function bp(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, Ep),
    slots: t.slots,
    emit: t.emit,
    expose: e,
  };
}
function Li(t) {
  return t.exposed
    ? t.exposeProxy ||
        (t.exposeProxy = new Proxy(cc(ff(t.exposed)), {
          get(e, n) {
            if (n in e) return e[n];
            if (n in _s) return _s[n](t);
          },
          has(e, n) {
            return n in e || n in _s;
          },
        }))
    : t.proxy;
}
function wp(t, e = !0) {
  return te(t) ? t.displayName || t.name : t.name || (e && t.__name);
}
function yp(t) {
  return te(t) && "__vccOpts" in t;
}
const rt = (t, e) => vf(t, e, Os);
function je(t, e, n) {
  const s = arguments.length;
  return s === 2
    ? Ee(e) && !ee(e)
      ? fi(e)
        ? Q(t, null, [e])
        : Q(t, e)
      : Q(t, null, e)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && fi(n) && (n = [n]),
      Q(t, e, n));
}
const Sp = "3.5.12";
/**
 * @vue/runtime-dom v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Vr;
const ha = typeof window != "undefined" && window.trustedTypes;
if (ha)
  try {
    Vr = ha.createPolicy("vue", { createHTML: (t) => t });
  } catch {}
const zc = Vr ? (t) => Vr.createHTML(t) : (t) => t,
  Tp = "http://www.w3.org/2000/svg",
  Ap = "http://www.w3.org/1998/Math/MathML",
  Mt = typeof document != "undefined" ? document : null,
  ma = Mt && Mt.createElement("template"),
  xp = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, n, s) => {
      const i =
        e === "svg"
          ? Mt.createElementNS(Tp, t)
          : e === "mathml"
            ? Mt.createElementNS(Ap, t)
            : n
              ? Mt.createElement(t, { is: n })
              : Mt.createElement(t);
      return (
        t === "select" &&
          s &&
          s.multiple != null &&
          i.setAttribute("multiple", s.multiple),
        i
      );
    },
    createText: (t) => Mt.createTextNode(t),
    createComment: (t) => Mt.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => Mt.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "");
    },
    insertStaticContent(t, e, n, s, i, r) {
      const o = n ? n.previousSibling : e.lastChild;
      if (i && (i === r || i.nextSibling))
        for (
          ;
          e.insertBefore(i.cloneNode(!0), n),
            !(i === r || !(i = i.nextSibling));
        );
      else {
        ma.innerHTML = zc(
          s === "svg"
            ? `<svg>${t}</svg>`
            : s === "mathml"
              ? `<math>${t}</math>`
              : t,
        );
        const a = ma.content;
        if (s === "svg" || s === "mathml") {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        e.insertBefore(a, n);
      }
      return [
        o ? o.nextSibling : e.firstChild,
        n ? n.previousSibling : e.lastChild,
      ];
    },
  },
  Cp = Symbol("_vtc");
function Op(t, e, n) {
  const s = t[Cp];
  (s && (e = (e ? [e, ...s] : [...s]).join(" ")),
    e == null
      ? t.removeAttribute("class")
      : n
        ? t.setAttribute("class", e)
        : (t.className = e));
}
const ga = Symbol("_vod"),
  Pp = Symbol("_vsh"),
  Ip = Symbol(""),
  Lp = /(^|;)\s*display\s*:/;
function Mp(t, e, n) {
  const s = t.style,
    i = Se(n);
  let r = !1;
  if (n && !i) {
    if (e)
      if (Se(e))
        for (const o of e.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          n[a] == null && si(s, a, "");
        }
      else for (const o in e) n[o] == null && si(s, o, "");
    for (const o in n) (o === "display" && (r = !0), si(s, o, n[o]));
  } else if (i) {
    if (e !== n) {
      const o = s[Ip];
      (o && (n += ";" + o), (s.cssText = n), (r = Lp.test(n)));
    }
  } else e && t.removeAttribute("style");
  ga in t && ((t[ga] = r ? s.display : ""), t[Pp] && (s.display = "none"));
}
const va = /\s*!important$/;
function si(t, e, n) {
  if (ee(n)) n.forEach((s) => si(t, e, s));
  else if ((n == null && (n = ""), e.startsWith("--"))) t.setProperty(e, n);
  else {
    const s = Np(t, e);
    va.test(n)
      ? t.setProperty(_n(s), n.replace(va, ""), "important")
      : (t[s] = n);
  }
}
const _a = ["Webkit", "Moz", "ms"],
  Xi = {};
function Np(t, e) {
  const n = Xi[e];
  if (n) return n;
  let s = lt(e);
  if (s !== "filter" && s in t) return (Xi[e] = s);
  s = Ai(s);
  for (let i = 0; i < _a.length; i++) {
    const r = _a[i] + s;
    if (r in t) return (Xi[e] = r);
  }
  return e;
}
const Ea = "http://www.w3.org/1999/xlink";
function ba(t, e, n, s, i, r = Gd(e)) {
  s && e.startsWith("xlink:")
    ? n == null
      ? t.removeAttributeNS(Ea, e.slice(6, e.length))
      : t.setAttributeNS(Ea, e, n)
    : n == null || (r && !zl(n))
      ? t.removeAttribute(e)
      : t.setAttribute(e, r ? "" : Qt(n) ? String(n) : n);
}
function wa(t, e, n, s, i) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? zc(n) : n);
    return;
  }
  const r = t.tagName;
  if (e === "value" && r !== "PROGRESS" && !r.includes("-")) {
    const a = r === "OPTION" ? t.getAttribute("value") || "" : t.value,
      l = n == null ? (t.type === "checkbox" ? "on" : "") : String(n);
    ((a !== l || !("_value" in t)) && (t.value = l),
      n == null && t.removeAttribute(e),
      (t._value = n));
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const a = typeof t[e];
    a === "boolean"
      ? (n = zl(n))
      : n == null && a === "string"
        ? ((n = ""), (o = !0))
        : a === "number" && ((n = 0), (o = !0));
  }
  try {
    t[e] = n;
  } catch {}
  o && t.removeAttribute(i || e);
}
function Pn(t, e, n, s) {
  t.addEventListener(e, n, s);
}
function Dp(t, e, n, s) {
  t.removeEventListener(e, n, s);
}
const ya = Symbol("_vei");
function $p(t, e, n, s, i = null) {
  const r = t[ya] || (t[ya] = {}),
    o = r[e];
  if (s && o) o.value = s;
  else {
    const [a, l] = Rp(e);
    if (s) {
      const u = (r[e] = Bp(s, i));
      Pn(t, a, u, l);
    } else o && (Dp(t, a, o, l), (r[e] = void 0));
  }
}
const Sa = /(?:Once|Passive|Capture)$/;
function Rp(t) {
  let e;
  if (Sa.test(t)) {
    e = {};
    let s;
    for (; (s = t.match(Sa)); )
      ((t = t.slice(0, t.length - s[0].length)), (e[s[0].toLowerCase()] = !0));
  }
  return [t[2] === ":" ? t.slice(3) : _n(t.slice(2)), e];
}
let Qi = 0;
const kp = Promise.resolve(),
  Vp = () => Qi || (kp.then(() => (Qi = 0)), (Qi = Date.now()));
function Bp(t, e) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Ct(jp(s, n.value), e, 5, [s]);
  };
  return ((n.value = t), (n.attached = Vp()), n);
}
function jp(t, e) {
  if (ee(e)) {
    const n = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        (n.call(t), (t._stopped = !0));
      }),
      e.map((s) => (i) => !i._stopped && s && s(i))
    );
  } else return e;
}
const Ta = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    t.charCodeAt(2) > 96 &&
    t.charCodeAt(2) < 123,
  Hp = (t, e, n, s, i, r) => {
    const o = i === "svg";
    e === "class"
      ? Op(t, s, o)
      : e === "style"
        ? Mp(t, n, s)
        : yi(e)
          ? no(e) || $p(t, e, n, s, r)
          : (
                e[0] === "."
                  ? ((e = e.slice(1)), !0)
                  : e[0] === "^"
                    ? ((e = e.slice(1)), !1)
                    : Fp(t, e, s, o)
              )
            ? (wa(t, e, s),
              !t.tagName.includes("-") &&
                (e === "value" || e === "checked" || e === "selected") &&
                ba(t, e, s, o, r, e !== "value"))
            : t._isVueCE && (/[A-Z]/.test(e) || !Se(s))
              ? wa(t, lt(e), s, r, e)
              : (e === "true-value"
                  ? (t._trueValue = s)
                  : e === "false-value" && (t._falseValue = s),
                ba(t, e, s, o));
  };
function Fp(t, e, n, s) {
  if (s)
    return !!(
      e === "innerHTML" ||
      e === "textContent" ||
      (e in t && Ta(e) && te(n))
    );
  if (
    e === "spellcheck" ||
    e === "draggable" ||
    e === "translate" ||
    e === "form" ||
    (e === "list" && t.tagName === "INPUT") ||
    (e === "type" && t.tagName === "TEXTAREA")
  )
    return !1;
  if (e === "width" || e === "height") {
    const i = t.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Ta(e) && Se(n) ? !1 : e in t;
}
const Aa = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return ee(e) ? (n) => ei(e, n) : e;
};
function zp(t) {
  t.target.composing = !0;
}
function xa(t) {
  const e = t.target;
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event("input")));
}
const Ji = Symbol("_assign"),
  vT = {
    created(t, { modifiers: { lazy: e, trim: n, number: s } }, i) {
      t[Ji] = Aa(i);
      const r = s || (i.props && i.props.type === "number");
      (Pn(t, e ? "change" : "input", (o) => {
        if (o.target.composing) return;
        let a = t.value;
        (n && (a = a.trim()), r && (a = xr(a)), t[Ji](a));
      }),
        n &&
          Pn(t, "change", () => {
            t.value = t.value.trim();
          }),
        e ||
          (Pn(t, "compositionstart", zp),
          Pn(t, "compositionend", xa),
          Pn(t, "change", xa)));
    },
    mounted(t, { value: e }) {
      t.value = e == null ? "" : e;
    },
    beforeUpdate(
      t,
      { value: e, oldValue: n, modifiers: { lazy: s, trim: i, number: r } },
      o,
    ) {
      if (((t[Ji] = Aa(o)), t.composing)) return;
      const a =
          (r || t.type === "number") && !/^0\d/.test(t.value)
            ? xr(t.value)
            : t.value,
        l = e == null ? "" : e;
      a !== l &&
        ((document.activeElement === t &&
          t.type !== "range" &&
          ((s && e === n) || (i && t.value.trim() === l))) ||
          (t.value = l));
    },
  },
  Gp = ["ctrl", "shift", "alt", "meta"],
  Wp = {
    stop: (t) => t.stopPropagation(),
    prevent: (t) => t.preventDefault(),
    self: (t) => t.target !== t.currentTarget,
    ctrl: (t) => !t.ctrlKey,
    shift: (t) => !t.shiftKey,
    alt: (t) => !t.altKey,
    meta: (t) => !t.metaKey,
    left: (t) => "button" in t && t.button !== 0,
    middle: (t) => "button" in t && t.button !== 1,
    right: (t) => "button" in t && t.button !== 2,
    exact: (t, e) => Gp.some((n) => t[`${n}Key`] && !e.includes(n)),
  },
  Gc = (t, e) => {
    const n = t._withMods || (t._withMods = {}),
      s = e.join(".");
    return (
      n[s] ||
      (n[s] = (i, ...r) => {
        for (let o = 0; o < e.length; o++) {
          const a = Wp[e[o]];
          if (a && a(i, e)) return;
        }
        return t(i, ...r);
      })
    );
  },
  Up = xe({ patchProp: Hp }, xp);
let Ca;
function Kp() {
  return Ca || (Ca = Xf(Up));
}
const Yp = (...t) => {
  const e = Kp().createApp(...t),
    { mount: n } = e;
  return (
    (e.mount = (s) => {
      const i = Xp(s);
      if (!i) return;
      const r = e._component;
      (!te(r) && !r.render && !r.template && (r.template = i.innerHTML),
        i.nodeType === 1 && (i.textContent = ""));
      const o = n(i, !1, qp(i));
      return (
        i instanceof Element &&
          (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
        o
      );
    }),
    e
  );
};
function qp(t) {
  if (t instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function Xp(t) {
  return Se(t) ? document.querySelector(t) : t;
}
function Qp() {
  return Wc().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Wc() {
  return typeof navigator != "undefined" && typeof window != "undefined"
    ? window
    : typeof globalThis != "undefined"
      ? globalThis
      : {};
}
const Jp = typeof Proxy == "function",
  Zp = "devtools-plugin:setup",
  eh = "plugin:settings:set";
let Tn, Br;
function th() {
  var t;
  return (
    Tn !== void 0 ||
      (typeof window != "undefined" && window.performance
        ? ((Tn = !0), (Br = window.performance))
        : typeof globalThis != "undefined" &&
            ((t = globalThis.perf_hooks) === null || t === void 0
              ? void 0
              : t.performance)
          ? ((Tn = !0), (Br = globalThis.perf_hooks.performance))
          : (Tn = !1)),
    Tn
  );
}
function nh() {
  return th() ? Br.now() : Date.now();
}
class sh {
  constructor(e, n) {
    ((this.target = null),
      (this.targetQueue = []),
      (this.onQueue = []),
      (this.plugin = e),
      (this.hook = n));
    const s = {};
    if (e.settings)
      for (const o in e.settings) {
        const a = e.settings[o];
        s[o] = a.defaultValue;
      }
    const i = `__vue-devtools-plugin-settings__${e.id}`;
    let r = Object.assign({}, s);
    try {
      const o = localStorage.getItem(i),
        a = JSON.parse(o);
      Object.assign(r, a);
    } catch {}
    ((this.fallbacks = {
      getSettings() {
        return r;
      },
      setSettings(o) {
        try {
          localStorage.setItem(i, JSON.stringify(o));
        } catch {}
        r = o;
      },
      now() {
        return nh();
      },
    }),
      n &&
        n.on(eh, (o, a) => {
          o === this.plugin.id && this.fallbacks.setSettings(a);
        }),
      (this.proxiedOn = new Proxy(
        {},
        {
          get: (o, a) =>
            this.target
              ? this.target.on[a]
              : (...l) => {
                  this.onQueue.push({ method: a, args: l });
                },
        },
      )),
      (this.proxiedTarget = new Proxy(
        {},
        {
          get: (o, a) =>
            this.target
              ? this.target[a]
              : a === "on"
                ? this.proxiedOn
                : Object.keys(this.fallbacks).includes(a)
                  ? (...l) => (
                      this.targetQueue.push({
                        method: a,
                        args: l,
                        resolve: () => {},
                      }),
                      this.fallbacks[a](...l)
                    )
                  : (...l) =>
                      new Promise((u) => {
                        this.targetQueue.push({
                          method: a,
                          args: l,
                          resolve: u,
                        });
                      }),
        },
      )));
  }
  async setRealTarget(e) {
    this.target = e;
    for (const n of this.onQueue) this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function ih(t, e) {
  const n = t,
    s = Wc(),
    i = Qp(),
    r = Jp && n.enableEarlyProxy;
  if (i && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !r)) i.emit(Zp, t, e);
  else {
    const o = r ? new sh(n, i) : null;
    ((s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: e,
      proxy: o,
    }),
      o && e(o.proxiedTarget));
  }
}
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const In = typeof document != "undefined";
function Uc(t) {
  return (
    typeof t == "object" ||
    "displayName" in t ||
    "props" in t ||
    "__vccOpts" in t
  );
}
function rh(t) {
  return (
    t.__esModule ||
    t[Symbol.toStringTag] === "Module" ||
    (t.default && Uc(t.default))
  );
}
const le = Object.assign;
function Zi(t, e) {
  const n = {};
  for (const s in e) {
    const i = e[s];
    n[s] = vt(i) ? i.map(t) : t(i);
  }
  return n;
}
const bs = () => {},
  vt = Array.isArray,
  Kc = /#/g,
  oh = /&/g,
  ah = /\//g,
  lh = /=/g,
  ch = /\?/g,
  Yc = /\+/g,
  uh = /%5B/g,
  dh = /%5D/g,
  qc = /%5E/g,
  fh = /%60/g,
  Xc = /%7B/g,
  ph = /%7C/g,
  Qc = /%7D/g,
  hh = /%20/g;
function yo(t) {
  return encodeURI("" + t)
    .replace(ph, "|")
    .replace(uh, "[")
    .replace(dh, "]");
}
function mh(t) {
  return yo(t).replace(Xc, "{").replace(Qc, "}").replace(qc, "^");
}
function jr(t) {
  return yo(t)
    .replace(Yc, "%2B")
    .replace(hh, "+")
    .replace(Kc, "%23")
    .replace(oh, "%26")
    .replace(fh, "`")
    .replace(Xc, "{")
    .replace(Qc, "}")
    .replace(qc, "^");
}
function gh(t) {
  return jr(t).replace(lh, "%3D");
}
function vh(t) {
  return yo(t).replace(Kc, "%23").replace(ch, "%3F");
}
function _h(t) {
  return t == null ? "" : vh(t).replace(ah, "%2F");
}
function Ps(t) {
  try {
    return decodeURIComponent("" + t);
  } catch {}
  return "" + t;
}
const Eh = /\/$/,
  bh = (t) => t.replace(Eh, "");
function er(t, e, n = "/") {
  let s,
    i = {},
    r = "",
    o = "";
  const a = e.indexOf("#");
  let l = e.indexOf("?");
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((s = e.slice(0, l)),
      (r = e.slice(l + 1, a > -1 ? a : e.length)),
      (i = t(r))),
    a > -1 && ((s = s || e.slice(0, a)), (o = e.slice(a, e.length))),
    (s = Th(s != null ? s : e, n)),
    { fullPath: s + (r && "?") + r + o, path: s, query: i, hash: Ps(o) }
  );
}
function wh(t, e) {
  const n = e.query ? t(e.query) : "";
  return e.path + (n && "?") + n + (e.hash || "");
}
function Oa(t, e) {
  return !e || !t.toLowerCase().startsWith(e.toLowerCase())
    ? t
    : t.slice(e.length) || "/";
}
function yh(t, e, n) {
  const s = e.matched.length - 1,
    i = n.matched.length - 1;
  return (
    s > -1 &&
    s === i &&
    Gn(e.matched[s], n.matched[i]) &&
    Jc(e.params, n.params) &&
    t(e.query) === t(n.query) &&
    e.hash === n.hash
  );
}
function Gn(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e);
}
function Jc(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const n in t) if (!Sh(t[n], e[n])) return !1;
  return !0;
}
function Sh(t, e) {
  return vt(t) ? Pa(t, e) : vt(e) ? Pa(e, t) : t === e;
}
function Pa(t, e) {
  return vt(e)
    ? t.length === e.length && t.every((n, s) => n === e[s])
    : t.length === 1 && t[0] === e;
}
function Th(t, e) {
  if (t.startsWith("/")) return t;
  if (!t) return e;
  const n = e.split("/"),
    s = t.split("/"),
    i = s[s.length - 1];
  (i === ".." || i === ".") && s.push("");
  let r = n.length - 1,
    o,
    a;
  for (o = 0; o < s.length; o++)
    if (((a = s[o]), a !== "."))
      if (a === "..") r > 1 && r--;
      else break;
  return n.slice(0, r).join("/") + "/" + s.slice(o).join("/");
}
const Ht = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var Is;
(function (t) {
  ((t.pop = "pop"), (t.push = "push"));
})(Is || (Is = {}));
var ws;
(function (t) {
  ((t.back = "back"), (t.forward = "forward"), (t.unknown = ""));
})(ws || (ws = {}));
function Ah(t) {
  if (!t)
    if (In) {
      const e = document.querySelector("base");
      ((t = (e && e.getAttribute("href")) || "/"),
        (t = t.replace(/^\w+:\/\/[^\/]+/, "")));
    } else t = "/";
  return (t[0] !== "/" && t[0] !== "#" && (t = "/" + t), bh(t));
}
const xh = /^[^#]+#/;
function Ch(t, e) {
  return t.replace(xh, "#") + e;
}
function Oh(t, e) {
  const n = document.documentElement.getBoundingClientRect(),
    s = t.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: s.left - n.left - (e.left || 0),
    top: s.top - n.top - (e.top || 0),
  };
}
const Mi = () => ({ left: window.scrollX, top: window.scrollY });
function Ph(t) {
  let e;
  if ("el" in t) {
    const n = t.el,
      s = typeof n == "string" && n.startsWith("#"),
      i =
        typeof n == "string"
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!i) return;
    e = Oh(i, t);
  } else e = t;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(e)
    : window.scrollTo(
        e.left != null ? e.left : window.scrollX,
        e.top != null ? e.top : window.scrollY,
      );
}
function Ia(t, e) {
  return (history.state ? history.state.position - e : -1) + t;
}
const Hr = new Map();
function Ih(t, e) {
  Hr.set(t, e);
}
function Lh(t) {
  const e = Hr.get(t);
  return (Hr.delete(t), e);
}
let Mh = () => location.protocol + "//" + location.host;
function Zc(t, e) {
  const { pathname: n, search: s, hash: i } = e,
    r = t.indexOf("#");
  if (r > -1) {
    let a = i.includes(t.slice(r)) ? t.slice(r).length : 1,
      l = i.slice(a);
    return (l[0] !== "/" && (l = "/" + l), Oa(l, ""));
  }
  return Oa(n, t) + s + i;
}
function Nh(t, e, n, s) {
  let i = [],
    r = [],
    o = null;
  const a = ({ state: p }) => {
    const f = Zc(t, location),
      g = n.value,
      v = e.value;
    let S = 0;
    if (p) {
      if (((n.value = f), (e.value = p), o && o === g)) {
        o = null;
        return;
      }
      S = v ? p.position - v.position : 0;
    } else s(f);
    i.forEach((E) => {
      E(n.value, g, {
        delta: S,
        type: Is.pop,
        direction: S ? (S > 0 ? ws.forward : ws.back) : ws.unknown,
      });
    });
  };
  function l() {
    o = n.value;
  }
  function u(p) {
    i.push(p);
    const f = () => {
      const g = i.indexOf(p);
      g > -1 && i.splice(g, 1);
    };
    return (r.push(f), f);
  }
  function c() {
    const { history: p } = window;
    !p.state || p.replaceState(le({}, p.state, { scroll: Mi() }), "");
  }
  function d() {
    for (const p of r) p();
    ((r = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", c));
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", c, { passive: !0 }),
    { pauseListeners: l, listen: u, destroy: d }
  );
}
function La(t, e, n, s = !1, i = !1) {
  return {
    back: t,
    current: e,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: i ? Mi() : null,
  };
}
function Dh(t) {
  const { history: e, location: n } = window,
    s = { value: Zc(t, n) },
    i = { value: e.state };
  i.value ||
    r(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    );
  function r(l, u, c) {
    const d = t.indexOf("#"),
      p =
        d > -1
          ? (n.host && document.querySelector("base") ? t : t.slice(d)) + l
          : Mh() + t + l;
    try {
      (e[c ? "replaceState" : "pushState"](u, "", p), (i.value = u));
    } catch (f) {
      (console.error(f), n[c ? "replace" : "assign"](p));
    }
  }
  function o(l, u) {
    const c = le({}, e.state, La(i.value.back, l, i.value.forward, !0), u, {
      position: i.value.position,
    });
    (r(l, c, !0), (s.value = l));
  }
  function a(l, u) {
    const c = le({}, i.value, e.state, { forward: l, scroll: Mi() });
    r(c.current, c, !0);
    const d = le({}, La(s.value, l, null), { position: c.position + 1 }, u);
    (r(l, d, !1), (s.value = l));
  }
  return { location: s, state: i, push: a, replace: o };
}
function $h(t) {
  t = Ah(t);
  const e = Dh(t),
    n = Nh(t, e.state, e.location, e.replace);
  function s(r, o = !0) {
    (o || n.pauseListeners(), history.go(r));
  }
  const i = le(
    { location: "", base: t, go: s, createHref: Ch.bind(null, t) },
    e,
    n,
  );
  return (
    Object.defineProperty(i, "location", {
      enumerable: !0,
      get: () => e.location.value,
    }),
    Object.defineProperty(i, "state", {
      enumerable: !0,
      get: () => e.state.value,
    }),
    i
  );
}
function Rh(t) {
  return typeof t == "string" || (t && typeof t == "object");
}
function eu(t) {
  return typeof t == "string" || typeof t == "symbol";
}
const tu = Symbol("");
var Ma;
(function (t) {
  ((t[(t.aborted = 4)] = "aborted"),
    (t[(t.cancelled = 8)] = "cancelled"),
    (t[(t.duplicated = 16)] = "duplicated"));
})(Ma || (Ma = {}));
function Wn(t, e) {
  return le(new Error(), { type: t, [tu]: !0 }, e);
}
function Lt(t, e) {
  return t instanceof Error && tu in t && (e == null || !!(t.type & e));
}
const Na = "[^/]+?",
  kh = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Vh = /[.+*?^${}()[\]/\\]/g;
function Bh(t, e) {
  const n = le({}, kh, e),
    s = [];
  let i = n.start ? "^" : "";
  const r = [];
  for (const u of t) {
    const c = u.length ? [] : [90];
    n.strict && !u.length && (i += "/");
    for (let d = 0; d < u.length; d++) {
      const p = u[d];
      let f = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0)
        (d || (i += "/"), (i += p.value.replace(Vh, "\\$&")), (f += 40));
      else if (p.type === 1) {
        const { value: g, repeatable: v, optional: S, regexp: E } = p;
        r.push({ name: g, repeatable: v, optional: S });
        const y = E || Na;
        if (y !== Na) {
          f += 10;
          try {
            new RegExp(`(${y})`);
          } catch (w) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${y}): ` + w.message,
            );
          }
        }
        let b = v ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
        (d || (b = S && u.length < 2 ? `(?:/${b})` : "/" + b),
          S && (b += "?"),
          (i += b),
          (f += 20),
          S && (f += -8),
          v && (f += -20),
          y === ".*" && (f += -50));
      }
      c.push(f);
    }
    s.push(c);
  }
  if (n.strict && n.end) {
    const u = s.length - 1;
    s[u][s[u].length - 1] += 0.7000000000000001;
  }
  (n.strict || (i += "/?"),
    n.end ? (i += "$") : n.strict && !i.endsWith("/") && (i += "(?:/|$)"));
  const o = new RegExp(i, n.sensitive ? "" : "i");
  function a(u) {
    const c = u.match(o),
      d = {};
    if (!c) return null;
    for (let p = 1; p < c.length; p++) {
      const f = c[p] || "",
        g = r[p - 1];
      d[g.name] = f && g.repeatable ? f.split("/") : f;
    }
    return d;
  }
  function l(u) {
    let c = "",
      d = !1;
    for (const p of t) {
      ((!d || !c.endsWith("/")) && (c += "/"), (d = !1));
      for (const f of p)
        if (f.type === 0) c += f.value;
        else if (f.type === 1) {
          const { value: g, repeatable: v, optional: S } = f,
            E = g in u ? u[g] : "";
          if (vt(E) && !v)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const y = vt(E) ? E.join("/") : E;
          if (!y)
            if (S)
              p.length < 2 &&
                (c.endsWith("/") ? (c = c.slice(0, -1)) : (d = !0));
            else throw new Error(`Missing required param "${g}"`);
          c += y;
        }
    }
    return c || "/";
  }
  return { re: o, score: s, keys: r, parse: a, stringify: l };
}
function jh(t, e) {
  let n = 0;
  for (; n < t.length && n < e.length; ) {
    const s = e[n] - t[n];
    if (s) return s;
    n++;
  }
  return t.length < e.length
    ? t.length === 1 && t[0] === 40 + 40
      ? -1
      : 1
    : t.length > e.length
      ? e.length === 1 && e[0] === 40 + 40
        ? 1
        : -1
      : 0;
}
function nu(t, e) {
  let n = 0;
  const s = t.score,
    i = e.score;
  for (; n < s.length && n < i.length; ) {
    const r = jh(s[n], i[n]);
    if (r) return r;
    n++;
  }
  if (Math.abs(i.length - s.length) === 1) {
    if (Da(s)) return 1;
    if (Da(i)) return -1;
  }
  return i.length - s.length;
}
function Da(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0;
}
const Hh = { type: 0, value: "" },
  Fh = /[a-zA-Z0-9_]/;
function zh(t) {
  if (!t) return [[]];
  if (t === "/") return [[Hh]];
  if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
  function e(f) {
    throw new Error(`ERR (${n})/"${u}": ${f}`);
  }
  let n = 0,
    s = n;
  const i = [];
  let r;
  function o() {
    (r && i.push(r), (r = []));
  }
  let a = 0,
    l,
    u = "",
    c = "";
  function d() {
    !u ||
      (n === 0
        ? r.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
          ? (r.length > 1 &&
              (l === "*" || l === "+") &&
              e(
                `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`,
              ),
            r.push({
              type: 1,
              value: u,
              regexp: c,
              repeatable: l === "*" || l === "+",
              optional: l === "*" || l === "?",
            }))
          : e("Invalid state to consume buffer"),
      (u = ""));
  }
  function p() {
    u += l;
  }
  for (; a < t.length; ) {
    if (((l = t[a++]), l === "\\" && n !== 2)) {
      ((s = n), (n = 4));
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (u && d(), o()) : l === ":" ? (d(), (n = 1)) : p();
        break;
      case 4:
        (p(), (n = s));
        break;
      case 1:
        l === "("
          ? (n = 2)
          : Fh.test(l)
            ? p()
            : (d(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")"
          ? c[c.length - 1] == "\\"
            ? (c = c.slice(0, -1) + l)
            : (n = 3)
          : (c += l);
        break;
      case 3:
        (d(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--, (c = ""));
        break;
      default:
        e("Unknown state");
        break;
    }
  }
  return (
    n === 2 && e(`Unfinished custom RegExp for param "${u}"`),
    d(),
    o(),
    i
  );
}
function Gh(t, e, n) {
  const s = Bh(zh(t.path), n),
    i = le(s, { record: t, parent: e, children: [], alias: [] });
  return (e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i), i);
}
function Wh(t, e) {
  const n = [],
    s = new Map();
  e = Va({ strict: !1, end: !0, sensitive: !1 }, e);
  function i(d) {
    return s.get(d);
  }
  function r(d, p, f) {
    const g = !f,
      v = Ra(d);
    v.aliasOf = f && f.record;
    const S = Va(e, d),
      E = [v];
    if ("alias" in d) {
      const w = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const A of w)
        E.push(
          Ra(
            le({}, v, {
              components: f ? f.record.components : v.components,
              path: A,
              aliasOf: f ? f.record : v,
            }),
          ),
        );
    }
    let y, b;
    for (const w of E) {
      const { path: A } = w;
      if (p && A[0] !== "/") {
        const D = p.record.path,
          G = D[D.length - 1] === "/" ? "" : "/";
        w.path = p.record.path + (A && G + A);
      }
      if (
        ((y = Gh(w, p, S)),
        f
          ? f.alias.push(y)
          : ((b = b || y),
            b !== y && b.alias.push(y),
            g && d.name && !ka(y) && o(d.name)),
        su(y) && l(y),
        v.children)
      ) {
        const D = v.children;
        for (let G = 0; G < D.length; G++) r(D[G], y, f && f.children[G]);
      }
      f = f || y;
    }
    return b
      ? () => {
          o(b);
        }
      : bs;
  }
  function o(d) {
    if (eu(d)) {
      const p = s.get(d);
      p &&
        (s.delete(d),
        n.splice(n.indexOf(p), 1),
        p.children.forEach(o),
        p.alias.forEach(o));
    } else {
      const p = n.indexOf(d);
      p > -1 &&
        (n.splice(p, 1),
        d.record.name && s.delete(d.record.name),
        d.children.forEach(o),
        d.alias.forEach(o));
    }
  }
  function a() {
    return n;
  }
  function l(d) {
    const p = Yh(d, n);
    (n.splice(p, 0, d), d.record.name && !ka(d) && s.set(d.record.name, d));
  }
  function u(d, p) {
    let f,
      g = {},
      v,
      S;
    if ("name" in d && d.name) {
      if (((f = s.get(d.name)), !f)) throw Wn(1, { location: d });
      ((S = f.record.name),
        (g = le(
          $a(
            p.params,
            f.keys
              .filter((b) => !b.optional)
              .concat(f.parent ? f.parent.keys.filter((b) => b.optional) : [])
              .map((b) => b.name),
          ),
          d.params &&
            $a(
              d.params,
              f.keys.map((b) => b.name),
            ),
        )),
        (v = f.stringify(g)));
    } else if (d.path != null)
      ((v = d.path),
        (f = n.find((b) => b.re.test(v))),
        f && ((g = f.parse(v)), (S = f.record.name)));
    else {
      if (((f = p.name ? s.get(p.name) : n.find((b) => b.re.test(p.path))), !f))
        throw Wn(1, { location: d, currentLocation: p });
      ((S = f.record.name),
        (g = le({}, p.params, d.params)),
        (v = f.stringify(g)));
    }
    const E = [];
    let y = f;
    for (; y; ) (E.unshift(y.record), (y = y.parent));
    return { name: S, path: v, params: g, matched: E, meta: Kh(E) };
  }
  t.forEach((d) => r(d));
  function c() {
    ((n.length = 0), s.clear());
  }
  return {
    addRoute: r,
    resolve: u,
    removeRoute: o,
    clearRoutes: c,
    getRoutes: a,
    getRecordMatcher: i,
  };
}
function $a(t, e) {
  const n = {};
  for (const s of e) s in t && (n[s] = t[s]);
  return n;
}
function Ra(t) {
  const e = {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: t.aliasOf,
    beforeEnter: t.beforeEnter,
    props: Uh(t),
    children: t.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in t
        ? t.components || null
        : t.component && { default: t.component },
  };
  return (Object.defineProperty(e, "mods", { value: {} }), e);
}
function Uh(t) {
  const e = {},
    n = t.props || !1;
  if ("component" in t) e.default = n;
  else for (const s in t.components) e[s] = typeof n == "object" ? n[s] : n;
  return e;
}
function ka(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0;
    t = t.parent;
  }
  return !1;
}
function Kh(t) {
  return t.reduce((e, n) => le(e, n.meta), {});
}
function Va(t, e) {
  const n = {};
  for (const s in t) n[s] = s in e ? e[s] : t[s];
  return n;
}
function Yh(t, e) {
  let n = 0,
    s = e.length;
  for (; n !== s; ) {
    const r = (n + s) >> 1;
    nu(t, e[r]) < 0 ? (s = r) : (n = r + 1);
  }
  const i = qh(t);
  return (i && (s = e.lastIndexOf(i, s - 1)), s);
}
function qh(t) {
  let e = t;
  for (; (e = e.parent); ) if (su(e) && nu(t, e) === 0) return e;
}
function su({ record: t }) {
  return !!(
    t.name ||
    (t.components && Object.keys(t.components).length) ||
    t.redirect
  );
}
function Xh(t) {
  const e = {};
  if (t === "" || t === "?") return e;
  const s = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let i = 0; i < s.length; ++i) {
    const r = s[i].replace(Yc, " "),
      o = r.indexOf("="),
      a = Ps(o < 0 ? r : r.slice(0, o)),
      l = o < 0 ? null : Ps(r.slice(o + 1));
    if (a in e) {
      let u = e[a];
      (vt(u) || (u = e[a] = [u]), u.push(l));
    } else e[a] = l;
  }
  return e;
}
function Ba(t) {
  let e = "";
  for (let n in t) {
    const s = t[n];
    if (((n = gh(n)), s == null)) {
      s !== void 0 && (e += (e.length ? "&" : "") + n);
      continue;
    }
    (vt(s) ? s.map((r) => r && jr(r)) : [s && jr(s)]).forEach((r) => {
      r !== void 0 &&
        ((e += (e.length ? "&" : "") + n), r != null && (e += "=" + r));
    });
  }
  return e;
}
function Qh(t) {
  const e = {};
  for (const n in t) {
    const s = t[n];
    s !== void 0 &&
      (e[n] = vt(s)
        ? s.map((i) => (i == null ? null : "" + i))
        : s == null
          ? s
          : "" + s);
  }
  return e;
}
const Jh = Symbol(""),
  ja = Symbol(""),
  So = Symbol(""),
  To = Symbol(""),
  Fr = Symbol("");
function cs() {
  let t = [];
  function e(s) {
    return (
      t.push(s),
      () => {
        const i = t.indexOf(s);
        i > -1 && t.splice(i, 1);
      }
    );
  }
  function n() {
    t = [];
  }
  return { add: e, list: () => t.slice(), reset: n };
}
function Wt(t, e, n, s, i, r = (o) => o()) {
  const o = s && (s.enterCallbacks[i] = s.enterCallbacks[i] || []);
  return () =>
    new Promise((a, l) => {
      const u = (p) => {
          p === !1
            ? l(Wn(4, { from: n, to: e }))
            : p instanceof Error
              ? l(p)
              : Rh(p)
                ? l(Wn(2, { from: e, to: p }))
                : (o &&
                    s.enterCallbacks[i] === o &&
                    typeof p == "function" &&
                    o.push(p),
                  a());
        },
        c = r(() => t.call(s && s.instances[i], e, n, u));
      let d = Promise.resolve(c);
      (t.length < 3 && (d = d.then(u)), d.catch((p) => l(p)));
    });
}
function tr(t, e, n, s, i = (r) => r()) {
  const r = [];
  for (const o of t)
    for (const a in o.components) {
      let l = o.components[a];
      if (!(e !== "beforeRouteEnter" && !o.instances[a]))
        if (Uc(l)) {
          const c = (l.__vccOpts || l)[e];
          c && r.push(Wt(c, n, s, o, a, i));
        } else {
          let u = l();
          r.push(() =>
            u.then((c) => {
              if (!c)
                throw new Error(
                  `Couldn't resolve component "${a}" at "${o.path}"`,
                );
              const d = rh(c) ? c.default : c;
              ((o.mods[a] = c), (o.components[a] = d));
              const f = (d.__vccOpts || d)[e];
              return f && Wt(f, n, s, o, a, i)();
            }),
          );
        }
    }
  return r;
}
function Ha(t) {
  const e = Tt(So),
    n = Tt(To),
    s = rt(() => {
      const l = Vn(t.to);
      return e.resolve(l);
    }),
    i = rt(() => {
      const { matched: l } = s.value,
        { length: u } = l,
        c = l[u - 1],
        d = n.matched;
      if (!c || !d.length) return -1;
      const p = d.findIndex(Gn.bind(null, c));
      if (p > -1) return p;
      const f = Fa(l[u - 2]);
      return u > 1 && Fa(c) === f && d[d.length - 1].path !== f
        ? d.findIndex(Gn.bind(null, l[u - 2]))
        : p;
    }),
    r = rt(() => i.value > -1 && sm(n.params, s.value.params)),
    o = rt(
      () =>
        i.value > -1 &&
        i.value === n.matched.length - 1 &&
        Jc(n.params, s.value.params),
    );
  function a(l = {}) {
    if (nm(l)) {
      const u = e[Vn(t.replace) ? "replace" : "push"](Vn(t.to)).catch(bs);
      return (
        t.viewTransition &&
          typeof document != "undefined" &&
          "startViewTransition" in document &&
          document.startViewTransition(() => u),
        u
      );
    }
    return Promise.resolve();
  }
  return {
    route: s,
    href: rt(() => s.value.href),
    isActive: r,
    isExactActive: o,
    navigate: a,
  };
}
function Zh(t) {
  return t.length === 1 ? t[0] : t;
}
const em = mc({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Ha,
    setup(t, { slots: e }) {
      const n = Ds(Ha(t)),
        { options: s } = Tt(So),
        i = rt(() => ({
          [za(t.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [za(
            t.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active",
          )]: n.isExactActive,
        }));
      return () => {
        const r = e.default && Zh(e.default(n));
        return t.custom
          ? r
          : je(
              "a",
              {
                "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value,
              },
              r,
            );
      };
    },
  }),
  tm = em;
function nm(t) {
  if (
    !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
    !t.defaultPrevented &&
    !(t.button !== void 0 && t.button !== 0)
  ) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e)) return;
    }
    return (t.preventDefault && t.preventDefault(), !0);
  }
}
function sm(t, e) {
  for (const n in e) {
    const s = e[n],
      i = t[n];
    if (typeof s == "string") {
      if (s !== i) return !1;
    } else if (!vt(i) || i.length !== s.length || s.some((r, o) => r !== i[o]))
      return !1;
  }
  return !0;
}
function Fa(t) {
  return t ? (t.aliasOf ? t.aliasOf.path : t.path) : "";
}
const za = (t, e, n) => (t != null ? t : e != null ? e : n),
  im = mc({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(t, { attrs: e, slots: n }) {
      const s = Tt(Fr),
        i = rt(() => t.route || s.value),
        r = Tt(ja, 0),
        o = rt(() => {
          let u = Vn(r);
          const { matched: c } = i.value;
          let d;
          for (; (d = c[u]) && !d.components; ) u++;
          return u;
        }),
        a = rt(() => i.value.matched[o.value]);
      (Hn(
        ja,
        rt(() => o.value + 1),
      ),
        Hn(Jh, a),
        Hn(Fr, i));
      const l = Re();
      return (
        dn(
          () => [l.value, a.value, t.name],
          ([u, c, d], [p, f, g]) => {
            (c &&
              ((c.instances[d] = u),
              f &&
                f !== c &&
                u &&
                u === p &&
                (c.leaveGuards.size || (c.leaveGuards = f.leaveGuards),
                c.updateGuards.size || (c.updateGuards = f.updateGuards))),
              u &&
                c &&
                (!f || !Gn(c, f) || !p) &&
                (c.enterCallbacks[d] || []).forEach((v) => v(u)));
          },
          { flush: "post" },
        ),
        () => {
          const u = i.value,
            c = t.name,
            d = a.value,
            p = d && d.components[c];
          if (!p) return Ga(n.default, { Component: p, route: u });
          const f = d.props[c],
            g = f
              ? f === !0
                ? u.params
                : typeof f == "function"
                  ? f(u)
                  : f
              : null,
            S = je(
              p,
              le({}, g, e, {
                onVnodeUnmounted: (E) => {
                  E.component.isUnmounted && (d.instances[c] = null);
                },
                ref: l,
              }),
            );
          return Ga(n.default, { Component: S, route: u }) || S;
        }
      );
    },
  });
function Ga(t, e) {
  if (!t) return null;
  const n = t(e);
  return n.length === 1 ? n[0] : n;
}
const rm = im;
function om(t) {
  const e = Wh(t.routes, t),
    n = t.parseQuery || Xh,
    s = t.stringifyQuery || Ba,
    i = t.history,
    r = cs(),
    o = cs(),
    a = cs(),
    l = pf(Ht);
  let u = Ht;
  In &&
    t.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const c = Zi.bind(null, (x) => "" + x),
    d = Zi.bind(null, _h),
    p = Zi.bind(null, Ps);
  function f(x, B) {
    let k, W;
    return (
      eu(x) ? ((k = e.getRecordMatcher(x)), (W = B)) : (W = x),
      e.addRoute(W, k)
    );
  }
  function g(x) {
    const B = e.getRecordMatcher(x);
    B && e.removeRoute(B);
  }
  function v() {
    return e.getRoutes().map((x) => x.record);
  }
  function S(x) {
    return !!e.getRecordMatcher(x);
  }
  function E(x, B) {
    if (((B = le({}, B || l.value)), typeof x == "string")) {
      const m = er(n, x, B.path),
        _ = e.resolve({ path: m.path }, B),
        O = i.createHref(m.fullPath);
      return le(m, _, {
        params: p(_.params),
        hash: Ps(m.hash),
        redirectedFrom: void 0,
        href: O,
      });
    }
    let k;
    if (x.path != null) k = le({}, x, { path: er(n, x.path, B.path).path });
    else {
      const m = le({}, x.params);
      for (const _ in m) m[_] == null && delete m[_];
      ((k = le({}, x, { params: d(m) })), (B.params = d(B.params)));
    }
    const W = e.resolve(k, B),
      ae = x.hash || "";
    W.params = c(p(W.params));
    const ge = wh(s, le({}, x, { hash: mh(ae), path: W.path })),
      h = i.createHref(ge);
    return le(
      { fullPath: ge, hash: ae, query: s === Ba ? Qh(x.query) : x.query || {} },
      W,
      { redirectedFrom: void 0, href: h },
    );
  }
  function y(x) {
    return typeof x == "string" ? er(n, x, l.value.path) : le({}, x);
  }
  function b(x, B) {
    if (u !== x) return Wn(8, { from: B, to: x });
  }
  function w(x) {
    return G(x);
  }
  function A(x) {
    return w(le(y(x), { replace: !0 }));
  }
  function D(x) {
    const B = x.matched[x.matched.length - 1];
    if (B && B.redirect) {
      const { redirect: k } = B;
      let W = typeof k == "function" ? k(x) : k;
      return (
        typeof W == "string" &&
          ((W = W.includes("?") || W.includes("#") ? (W = y(W)) : { path: W }),
          (W.params = {})),
        le(
          {
            query: x.query,
            hash: x.hash,
            params: W.path != null ? {} : x.params,
          },
          W,
        )
      );
    }
  }
  function G(x, B) {
    const k = (u = E(x)),
      W = l.value,
      ae = x.state,
      ge = x.force,
      h = x.replace === !0,
      m = D(k);
    if (m)
      return G(
        le(y(m), {
          state: typeof m == "object" ? le({}, ae, m.state) : ae,
          force: ge,
          replace: h,
        }),
        B || k,
      );
    const _ = k;
    _.redirectedFrom = B;
    let O;
    return (
      !ge &&
        yh(s, W, k) &&
        ((O = Wn(16, { to: _, from: W })), Pe(W, W, !0, !1)),
      (O ? Promise.resolve(O) : P(_, W))
        .catch((T) => (Lt(T) ? (Lt(T, 2) ? T : Oe(T)) : ie(T, _, W)))
        .then((T) => {
          if (T) {
            if (Lt(T, 2))
              return G(
                le({ replace: h }, y(T.to), {
                  state: typeof T.to == "object" ? le({}, ae, T.to.state) : ae,
                  force: ge,
                }),
                B || _,
              );
          } else T = K(_, W, !0, h, ae);
          return (F(_, W, T), T);
        })
    );
  }
  function j(x, B) {
    const k = b(x, B);
    return k ? Promise.reject(k) : Promise.resolve();
  }
  function N(x) {
    const B = Ge.values().next().value;
    return B && typeof B.runWithContext == "function"
      ? B.runWithContext(x)
      : x();
  }
  function P(x, B) {
    let k;
    const [W, ae, ge] = am(x, B);
    k = tr(W.reverse(), "beforeRouteLeave", x, B);
    for (const m of W)
      m.leaveGuards.forEach((_) => {
        k.push(Wt(_, x, B));
      });
    const h = j.bind(null, x, B);
    return (
      k.push(h),
      Ae(k)
        .then(() => {
          k = [];
          for (const m of r.list()) k.push(Wt(m, x, B));
          return (k.push(h), Ae(k));
        })
        .then(() => {
          k = tr(ae, "beforeRouteUpdate", x, B);
          for (const m of ae)
            m.updateGuards.forEach((_) => {
              k.push(Wt(_, x, B));
            });
          return (k.push(h), Ae(k));
        })
        .then(() => {
          k = [];
          for (const m of ge)
            if (m.beforeEnter)
              if (vt(m.beforeEnter))
                for (const _ of m.beforeEnter) k.push(Wt(_, x, B));
              else k.push(Wt(m.beforeEnter, x, B));
          return (k.push(h), Ae(k));
        })
        .then(
          () => (
            x.matched.forEach((m) => (m.enterCallbacks = {})),
            (k = tr(ge, "beforeRouteEnter", x, B, N)),
            k.push(h),
            Ae(k)
          ),
        )
        .then(() => {
          k = [];
          for (const m of o.list()) k.push(Wt(m, x, B));
          return (k.push(h), Ae(k));
        })
        .catch((m) => (Lt(m, 8) ? m : Promise.reject(m)))
    );
  }
  function F(x, B, k) {
    a.list().forEach((W) => N(() => W(x, B, k)));
  }
  function K(x, B, k, W, ae) {
    const ge = b(x, B);
    if (ge) return ge;
    const h = B === Ht,
      m = In ? history.state : {};
    (k &&
      (W || h
        ? i.replace(x.fullPath, le({ scroll: h && m && m.scroll }, ae))
        : i.push(x.fullPath, ae)),
      (l.value = x),
      Pe(x, B, k, h),
      Oe());
  }
  let z;
  function oe() {
    z ||
      (z = i.listen((x, B, k) => {
        if (!We.listening) return;
        const W = E(x),
          ae = D(W);
        if (ae) {
          G(le(ae, { replace: !0, force: !0 }), W).catch(bs);
          return;
        }
        u = W;
        const ge = l.value;
        (In && Ih(Ia(ge.fullPath, k.delta), Mi()),
          P(W, ge)
            .catch((h) =>
              Lt(h, 12)
                ? h
                : Lt(h, 2)
                  ? (G(le(y(h.to), { force: !0 }), W)
                      .then((m) => {
                        Lt(m, 20) &&
                          !k.delta &&
                          k.type === Is.pop &&
                          i.go(-1, !1);
                      })
                      .catch(bs),
                    Promise.reject())
                  : (k.delta && i.go(-k.delta, !1), ie(h, W, ge)),
            )
            .then((h) => {
              ((h = h || K(W, ge, !1)),
                h &&
                  (k.delta && !Lt(h, 8)
                    ? i.go(-k.delta, !1)
                    : k.type === Is.pop && Lt(h, 20) && i.go(-1, !1)),
                F(W, ge, h));
            })
            .catch(bs));
      }));
  }
  let de = cs(),
    se = cs(),
    ne;
  function ie(x, B, k) {
    Oe(x);
    const W = se.list();
    return (
      W.length ? W.forEach((ae) => ae(x, B, k)) : console.error(x),
      Promise.reject(x)
    );
  }
  function ye() {
    return ne && l.value !== Ht
      ? Promise.resolve()
      : new Promise((x, B) => {
          de.add([x, B]);
        });
  }
  function Oe(x) {
    return (
      ne ||
        ((ne = !x),
        oe(),
        de.list().forEach(([B, k]) => (x ? k(x) : B())),
        de.reset()),
      x
    );
  }
  function Pe(x, B, k, W) {
    const { scrollBehavior: ae } = t;
    if (!In || !ae) return Promise.resolve();
    const ge =
      (!k && Lh(Ia(x.fullPath, 0))) ||
      ((W || !k) && history.state && history.state.scroll) ||
      null;
    return po()
      .then(() => ae(x, B, ge))
      .then((h) => h && Ph(h))
      .catch((h) => ie(h, x, B));
  }
  const we = (x) => i.go(x);
  let ft;
  const Ge = new Set(),
    We = {
      currentRoute: l,
      listening: !0,
      addRoute: f,
      removeRoute: g,
      clearRoutes: e.clearRoutes,
      hasRoute: S,
      getRoutes: v,
      resolve: E,
      options: t,
      push: w,
      replace: A,
      go: we,
      back: () => we(-1),
      forward: () => we(1),
      beforeEach: r.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: se.add,
      isReady: ye,
      install(x) {
        const B = this;
        (x.component("RouterLink", tm),
          x.component("RouterView", rm),
          (x.config.globalProperties.$router = B),
          Object.defineProperty(x.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Vn(l),
          }),
          In &&
            !ft &&
            l.value === Ht &&
            ((ft = !0), w(i.location).catch((ae) => {})));
        const k = {};
        for (const ae in Ht)
          Object.defineProperty(k, ae, {
            get: () => l.value[ae],
            enumerable: !0,
          });
        (x.provide(So, B), x.provide(To, oc(k)), x.provide(Fr, l));
        const W = x.unmount;
        (Ge.add(x),
          (x.unmount = function () {
            (Ge.delete(x),
              Ge.size < 1 &&
                ((u = Ht),
                z && z(),
                (z = null),
                (l.value = Ht),
                (ft = !1),
                (ne = !1)),
              W());
          }));
      },
    };
  function Ae(x) {
    return x.reduce((B, k) => B.then(() => N(k)), Promise.resolve());
  }
  return We;
}
function am(t, e) {
  const n = [],
    s = [],
    i = [],
    r = Math.max(e.matched.length, t.matched.length);
  for (let o = 0; o < r; o++) {
    const a = e.matched[o];
    a && (t.matched.find((u) => Gn(u, a)) ? s.push(a) : n.push(a));
    const l = t.matched[o];
    l && (e.matched.find((u) => Gn(u, l)) || i.push(l));
  }
  return [n, s, i];
}
function lm(t) {
  return Tt(To);
}
var Fe = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, i] of e) n[s] = i;
  return n;
};
const cm = {
  setup() {
    return { route: lm() };
  },
};
function um(t, e, n, s, i, r) {
  const o = he("router-view");
  return (X(), an(o, { key: s.route.fullPath }));
}
var dm = Fe(cm, [["render", um]]);
const fm = "modulepreload",
  Wa = {},
  pm = "/",
  us = function (e, n) {
    return !n || n.length === 0
      ? e()
      : Promise.all(
          n.map((s) => {
            if (((s = `${pm}${s}`), s in Wa)) return;
            Wa[s] = !0;
            const i = s.endsWith(".css"),
              r = i ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${s}"]${r}`)) return;
            const o = document.createElement("link");
            if (
              ((o.rel = i ? "stylesheet" : fm),
              i || ((o.as = "script"), (o.crossOrigin = "")),
              (o.href = s),
              document.head.appendChild(o),
              i)
            )
              return new Promise((a, l) => {
                (o.addEventListener("load", a),
                  o.addEventListener("error", () =>
                    l(new Error(`Unable to preload CSS for ${s}`)),
                  ));
              });
          }),
        ).then(() => e());
  };
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */ var hm = "store";
function Zn(t, e) {
  Object.keys(t).forEach(function (n) {
    return e(t[n], n);
  });
}
function iu(t) {
  return t !== null && typeof t == "object";
}
function mm(t) {
  return t && typeof t.then == "function";
}
function gm(t, e) {
  return function () {
    return t(e);
  };
}
function ru(t, e, n) {
  return (
    e.indexOf(t) < 0 && (n && n.prepend ? e.unshift(t) : e.push(t)),
    function () {
      var s = e.indexOf(t);
      s > -1 && e.splice(s, 1);
    }
  );
}
function ou(t, e) {
  ((t._actions = Object.create(null)),
    (t._mutations = Object.create(null)),
    (t._wrappedGetters = Object.create(null)),
    (t._modulesNamespaceMap = Object.create(null)));
  var n = t.state;
  (Ni(t, n, [], t._modules.root, !0), Ao(t, n, e));
}
function Ao(t, e, n) {
  var s = t._state;
  ((t.getters = {}), (t._makeLocalGettersCache = Object.create(null)));
  var i = t._wrappedGetters,
    r = {};
  (Zn(i, function (o, a) {
    ((r[a] = gm(o, t)),
      Object.defineProperty(t.getters, a, {
        get: function () {
          return r[a]();
        },
        enumerable: !0,
      }));
  }),
    (t._state = Ds({ data: e })),
    t.strict && wm(t),
    s &&
      n &&
      t._withCommit(function () {
        s.data = null;
      }));
}
function Ni(t, e, n, s, i) {
  var r = !n.length,
    o = t._modules.getNamespace(n);
  if (
    (s.namespaced &&
      (t._modulesNamespaceMap[o], (t._modulesNamespaceMap[o] = s)),
    !r && !i)
  ) {
    var a = xo(e, n.slice(0, -1)),
      l = n[n.length - 1];
    t._withCommit(function () {
      a[l] = s.state;
    });
  }
  var u = (s.context = vm(t, o, n));
  (s.forEachMutation(function (c, d) {
    var p = o + d;
    _m(t, p, c, u);
  }),
    s.forEachAction(function (c, d) {
      var p = c.root ? d : o + d,
        f = c.handler || c;
      Em(t, p, f, u);
    }),
    s.forEachGetter(function (c, d) {
      var p = o + d;
      bm(t, p, c, u);
    }),
    s.forEachChild(function (c, d) {
      Ni(t, e, n.concat(d), c, i);
    }));
}
function vm(t, e, n) {
  var s = e === "",
    i = {
      dispatch: s
        ? t.dispatch
        : function (r, o, a) {
            var l = mi(r, o, a),
              u = l.payload,
              c = l.options,
              d = l.type;
            return ((!c || !c.root) && (d = e + d), t.dispatch(d, u));
          },
      commit: s
        ? t.commit
        : function (r, o, a) {
            var l = mi(r, o, a),
              u = l.payload,
              c = l.options,
              d = l.type;
            ((!c || !c.root) && (d = e + d), t.commit(d, u, c));
          },
    };
  return (
    Object.defineProperties(i, {
      getters: {
        get: s
          ? function () {
              return t.getters;
            }
          : function () {
              return au(t, e);
            },
      },
      state: {
        get: function () {
          return xo(t.state, n);
        },
      },
    }),
    i
  );
}
function au(t, e) {
  if (!t._makeLocalGettersCache[e]) {
    var n = {},
      s = e.length;
    (Object.keys(t.getters).forEach(function (i) {
      if (i.slice(0, s) === e) {
        var r = i.slice(s);
        Object.defineProperty(n, r, {
          get: function () {
            return t.getters[i];
          },
          enumerable: !0,
        });
      }
    }),
      (t._makeLocalGettersCache[e] = n));
  }
  return t._makeLocalGettersCache[e];
}
function _m(t, e, n, s) {
  var i = t._mutations[e] || (t._mutations[e] = []);
  i.push(function (o) {
    n.call(t, s.state, o);
  });
}
function Em(t, e, n, s) {
  var i = t._actions[e] || (t._actions[e] = []);
  i.push(function (o) {
    var a = n.call(
      t,
      {
        dispatch: s.dispatch,
        commit: s.commit,
        getters: s.getters,
        state: s.state,
        rootGetters: t.getters,
        rootState: t.state,
      },
      o,
    );
    return (
      mm(a) || (a = Promise.resolve(a)),
      t._devtoolHook
        ? a.catch(function (l) {
            throw (t._devtoolHook.emit("vuex:error", l), l);
          })
        : a
    );
  });
}
function bm(t, e, n, s) {
  t._wrappedGetters[e] ||
    (t._wrappedGetters[e] = function (r) {
      return n(s.state, s.getters, r.state, r.getters);
    });
}
function wm(t) {
  dn(
    function () {
      return t._state.data;
    },
    function () {},
    { deep: !0, flush: "sync" },
  );
}
function xo(t, e) {
  return e.reduce(function (n, s) {
    return n[s];
  }, t);
}
function mi(t, e, n) {
  return (
    iu(t) && t.type && ((n = e), (e = t), (t = t.type)),
    { type: t, payload: e, options: n }
  );
}
var ym = "vuex bindings",
  Ua = "vuex:mutations",
  nr = "vuex:actions",
  An = "vuex",
  Sm = 0;
function Tm(t, e) {
  ih(
    {
      id: "org.vuejs.vuex",
      app: t,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [ym],
    },
    function (n) {
      (n.addTimelineLayer({ id: Ua, label: "Vuex Mutations", color: Ka }),
        n.addTimelineLayer({ id: nr, label: "Vuex Actions", color: Ka }),
        n.addInspector({
          id: An,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores...",
        }),
        n.on.getInspectorTree(function (s) {
          if (s.app === t && s.inspectorId === An)
            if (s.filter) {
              var i = [];
              (du(i, e._modules.root, s.filter, ""), (s.rootNodes = i));
            } else s.rootNodes = [uu(e._modules.root, "")];
        }),
        n.on.getInspectorState(function (s) {
          if (s.app === t && s.inspectorId === An) {
            var i = s.nodeId;
            (au(e, i),
              (s.state = Cm(
                Pm(e._modules, i),
                i === "root" ? e.getters : e._makeLocalGettersCache,
                i,
              )));
          }
        }),
        n.on.editInspectorState(function (s) {
          if (s.app === t && s.inspectorId === An) {
            var i = s.nodeId,
              r = s.path;
            (i !== "root" && (r = i.split("/").filter(Boolean).concat(r)),
              e._withCommit(function () {
                s.set(e._state.data, r, s.state.value);
              }));
          }
        }),
        e.subscribe(function (s, i) {
          var r = {};
          (s.payload && (r.payload = s.payload),
            (r.state = i),
            n.notifyComponentUpdate(),
            n.sendInspectorTree(An),
            n.sendInspectorState(An),
            n.addTimelineEvent({
              layerId: Ua,
              event: { time: Date.now(), title: s.type, data: r },
            }));
        }),
        e.subscribeAction({
          before: function (s, i) {
            var r = {};
            (s.payload && (r.payload = s.payload),
              (s._id = Sm++),
              (s._time = Date.now()),
              (r.state = i),
              n.addTimelineEvent({
                layerId: nr,
                event: {
                  time: s._time,
                  title: s.type,
                  groupId: s._id,
                  subtitle: "start",
                  data: r,
                },
              }));
          },
          after: function (s, i) {
            var r = {},
              o = Date.now() - s._time;
            ((r.duration = {
              _custom: {
                type: "duration",
                display: o + "ms",
                tooltip: "Action duration",
                value: o,
              },
            }),
              s.payload && (r.payload = s.payload),
              (r.state = i),
              n.addTimelineEvent({
                layerId: nr,
                event: {
                  time: Date.now(),
                  title: s.type,
                  groupId: s._id,
                  subtitle: "end",
                  data: r,
                },
              }));
          },
        }));
    },
  );
}
var Ka = 8702998,
  Am = 6710886,
  xm = 16777215,
  lu = { label: "namespaced", textColor: xm, backgroundColor: Am };
function cu(t) {
  return t && t !== "root" ? t.split("/").slice(-2, -1)[0] : "Root";
}
function uu(t, e) {
  return {
    id: e || "root",
    label: cu(e),
    tags: t.namespaced ? [lu] : [],
    children: Object.keys(t._children).map(function (n) {
      return uu(t._children[n], e + n + "/");
    }),
  };
}
function du(t, e, n, s) {
  (s.includes(n) &&
    t.push({
      id: s || "root",
      label: s.endsWith("/") ? s.slice(0, s.length - 1) : s || "Root",
      tags: e.namespaced ? [lu] : [],
    }),
    Object.keys(e._children).forEach(function (i) {
      du(t, e._children[i], n, s + i + "/");
    }));
}
function Cm(t, e, n) {
  e = n === "root" ? e : e[n];
  var s = Object.keys(e),
    i = {
      state: Object.keys(t.state).map(function (o) {
        return { key: o, editable: !0, value: t.state[o] };
      }),
    };
  if (s.length) {
    var r = Om(e);
    i.getters = Object.keys(r).map(function (o) {
      return {
        key: o.endsWith("/") ? cu(o) : o,
        editable: !1,
        value: zr(function () {
          return r[o];
        }),
      };
    });
  }
  return i;
}
function Om(t) {
  var e = {};
  return (
    Object.keys(t).forEach(function (n) {
      var s = n.split("/");
      if (s.length > 1) {
        var i = e,
          r = s.pop();
        (s.forEach(function (o) {
          (i[o] ||
            (i[o] = {
              _custom: {
                value: {},
                display: o,
                tooltip: "Module",
                abstract: !0,
              },
            }),
            (i = i[o]._custom.value));
        }),
          (i[r] = zr(function () {
            return t[n];
          })));
      } else
        e[n] = zr(function () {
          return t[n];
        });
    }),
    e
  );
}
function Pm(t, e) {
  var n = e.split("/").filter(function (s) {
    return s;
  });
  return n.reduce(
    function (s, i, r) {
      var o = s[i];
      if (!o)
        throw new Error('Missing module "' + i + '" for path "' + e + '".');
      return r === n.length - 1 ? o : o._children;
    },
    e === "root" ? t : t.root._children,
  );
}
function zr(t) {
  try {
    return t();
  } catch (e) {
    return e;
  }
}
var _t = function (e, n) {
    ((this.runtime = n),
      (this._children = Object.create(null)),
      (this._rawModule = e));
    var s = e.state;
    this.state = (typeof s == "function" ? s() : s) || {};
  },
  fu = { namespaced: { configurable: !0 } };
fu.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};
_t.prototype.addChild = function (e, n) {
  this._children[e] = n;
};
_t.prototype.removeChild = function (e) {
  delete this._children[e];
};
_t.prototype.getChild = function (e) {
  return this._children[e];
};
_t.prototype.hasChild = function (e) {
  return e in this._children;
};
_t.prototype.update = function (e) {
  ((this._rawModule.namespaced = e.namespaced),
    e.actions && (this._rawModule.actions = e.actions),
    e.mutations && (this._rawModule.mutations = e.mutations),
    e.getters && (this._rawModule.getters = e.getters));
};
_t.prototype.forEachChild = function (e) {
  Zn(this._children, e);
};
_t.prototype.forEachGetter = function (e) {
  this._rawModule.getters && Zn(this._rawModule.getters, e);
};
_t.prototype.forEachAction = function (e) {
  this._rawModule.actions && Zn(this._rawModule.actions, e);
};
_t.prototype.forEachMutation = function (e) {
  this._rawModule.mutations && Zn(this._rawModule.mutations, e);
};
Object.defineProperties(_t.prototype, fu);
var bn = function (e) {
  this.register([], e, !1);
};
bn.prototype.get = function (e) {
  return e.reduce(function (n, s) {
    return n.getChild(s);
  }, this.root);
};
bn.prototype.getNamespace = function (e) {
  var n = this.root;
  return e.reduce(function (s, i) {
    return ((n = n.getChild(i)), s + (n.namespaced ? i + "/" : ""));
  }, "");
};
bn.prototype.update = function (e) {
  pu([], this.root, e);
};
bn.prototype.register = function (e, n, s) {
  var i = this;
  s === void 0 && (s = !0);
  var r = new _t(n, s);
  if (e.length === 0) this.root = r;
  else {
    var o = this.get(e.slice(0, -1));
    o.addChild(e[e.length - 1], r);
  }
  n.modules &&
    Zn(n.modules, function (a, l) {
      i.register(e.concat(l), a, s);
    });
};
bn.prototype.unregister = function (e) {
  var n = this.get(e.slice(0, -1)),
    s = e[e.length - 1],
    i = n.getChild(s);
  !i || !i.runtime || n.removeChild(s);
};
bn.prototype.isRegistered = function (e) {
  var n = this.get(e.slice(0, -1)),
    s = e[e.length - 1];
  return n ? n.hasChild(s) : !1;
};
function pu(t, e, n) {
  if ((e.update(n), n.modules))
    for (var s in n.modules) {
      if (!e.getChild(s)) return;
      pu(t.concat(s), e.getChild(s), n.modules[s]);
    }
}
function Im(t) {
  return new ze(t);
}
var ze = function (e) {
    var n = this;
    e === void 0 && (e = {});
    var s = e.plugins;
    s === void 0 && (s = []);
    var i = e.strict;
    i === void 0 && (i = !1);
    var r = e.devtools;
    ((this._committing = !1),
      (this._actions = Object.create(null)),
      (this._actionSubscribers = []),
      (this._mutations = Object.create(null)),
      (this._wrappedGetters = Object.create(null)),
      (this._modules = new bn(e)),
      (this._modulesNamespaceMap = Object.create(null)),
      (this._subscribers = []),
      (this._makeLocalGettersCache = Object.create(null)),
      (this._devtools = r));
    var o = this,
      a = this,
      l = a.dispatch,
      u = a.commit;
    ((this.dispatch = function (p, f) {
      return l.call(o, p, f);
    }),
      (this.commit = function (p, f, g) {
        return u.call(o, p, f, g);
      }),
      (this.strict = i));
    var c = this._modules.root.state;
    (Ni(this, c, [], this._modules.root),
      Ao(this, c),
      s.forEach(function (d) {
        return d(n);
      }));
  },
  Co = { state: { configurable: !0 } };
ze.prototype.install = function (e, n) {
  (e.provide(n || hm, this), (e.config.globalProperties.$store = this));
  var s = this._devtools !== void 0 ? this._devtools : !1;
  s && Tm(e, this);
};
Co.state.get = function () {
  return this._state.data;
};
Co.state.set = function (t) {};
ze.prototype.commit = function (e, n, s) {
  var i = this,
    r = mi(e, n, s),
    o = r.type,
    a = r.payload,
    l = { type: o, payload: a },
    u = this._mutations[o];
  !u ||
    (this._withCommit(function () {
      u.forEach(function (d) {
        d(a);
      });
    }),
    this._subscribers.slice().forEach(function (c) {
      return c(l, i.state);
    }));
};
ze.prototype.dispatch = function (e, n) {
  var s = this,
    i = mi(e, n),
    r = i.type,
    o = i.payload,
    a = { type: r, payload: o },
    l = this._actions[r];
  if (!!l) {
    try {
      this._actionSubscribers
        .slice()
        .filter(function (c) {
          return c.before;
        })
        .forEach(function (c) {
          return c.before(a, s.state);
        });
    } catch {}
    var u =
      l.length > 1
        ? Promise.all(
            l.map(function (c) {
              return c(o);
            }),
          )
        : l[0](o);
    return new Promise(function (c, d) {
      u.then(
        function (p) {
          try {
            s._actionSubscribers
              .filter(function (f) {
                return f.after;
              })
              .forEach(function (f) {
                return f.after(a, s.state);
              });
          } catch {}
          c(p);
        },
        function (p) {
          try {
            s._actionSubscribers
              .filter(function (f) {
                return f.error;
              })
              .forEach(function (f) {
                return f.error(a, s.state, p);
              });
          } catch {}
          d(p);
        },
      );
    });
  }
};
ze.prototype.subscribe = function (e, n) {
  return ru(e, this._subscribers, n);
};
ze.prototype.subscribeAction = function (e, n) {
  var s = typeof e == "function" ? { before: e } : e;
  return ru(s, this._actionSubscribers, n);
};
ze.prototype.watch = function (e, n, s) {
  var i = this;
  return dn(
    function () {
      return e(i.state, i.getters);
    },
    n,
    Object.assign({}, s),
  );
};
ze.prototype.replaceState = function (e) {
  var n = this;
  this._withCommit(function () {
    n._state.data = e;
  });
};
ze.prototype.registerModule = function (e, n, s) {
  (s === void 0 && (s = {}),
    typeof e == "string" && (e = [e]),
    this._modules.register(e, n),
    Ni(this, this.state, e, this._modules.get(e), s.preserveState),
    Ao(this, this.state));
};
ze.prototype.unregisterModule = function (e) {
  var n = this;
  (typeof e == "string" && (e = [e]),
    this._modules.unregister(e),
    this._withCommit(function () {
      var s = xo(n.state, e.slice(0, -1));
      delete s[e[e.length - 1]];
    }),
    ou(this));
};
ze.prototype.hasModule = function (e) {
  return (typeof e == "string" && (e = [e]), this._modules.isRegistered(e));
};
ze.prototype.hotUpdate = function (e) {
  (this._modules.update(e), ou(this, !0));
};
ze.prototype._withCommit = function (e) {
  var n = this._committing;
  ((this._committing = !0), e(), (this._committing = n));
};
Object.defineProperties(ze.prototype, Co);
var es = gu(function (t, e) {
    var n = {};
    return (
      mu(e).forEach(function (s) {
        var i = s.key,
          r = s.val;
        ((n[i] = function () {
          var a = this.$store.state,
            l = this.$store.getters;
          if (t) {
            var u = vu(this.$store, "mapState", t);
            if (!u) return;
            ((a = u.context.state), (l = u.context.getters));
          }
          return typeof r == "function" ? r.call(this, a, l) : a[r];
        }),
          (n[i].vuex = !0));
      }),
      n
    );
  }),
  hu = gu(function (t, e) {
    var n = {};
    return (
      mu(e).forEach(function (s) {
        var i = s.key,
          r = s.val;
        n[i] = function () {
          for (var a = [], l = arguments.length; l--; ) a[l] = arguments[l];
          var u = this.$store.dispatch;
          if (t) {
            var c = vu(this.$store, "mapActions", t);
            if (!c) return;
            u = c.context.dispatch;
          }
          return typeof r == "function"
            ? r.apply(this, [u].concat(a))
            : u.apply(this.$store, [r].concat(a));
        };
      }),
      n
    );
  });
function mu(t) {
  return Lm(t)
    ? Array.isArray(t)
      ? t.map(function (e) {
          return { key: e, val: e };
        })
      : Object.keys(t).map(function (e) {
          return { key: e, val: t[e] };
        })
    : [];
}
function Lm(t) {
  return Array.isArray(t) || iu(t);
}
function gu(t) {
  return function (e, n) {
    return (
      typeof e != "string"
        ? ((n = e), (e = ""))
        : e.charAt(e.length - 1) !== "/" && (e += "/"),
      t(e, n)
    );
  };
}
function vu(t, e, n) {
  var s = t._modulesNamespaceMap[n];
  return s;
}
var Mm = "/assets/logo/logo_fatom.png",
  Nm = "/assets/icons/facebook-icon.png",
  Dm = "/assets/icons/linkedin-icon.png",
  $m = "/assets/icons/youtube-icon.png";
const Rm = {
    data() {
      return { isMenuOpen: !1, activeDropdown: null };
    },
    computed: { ...es({ categories: (t) => t.categories }) },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      showDropdown(t) {
        this.activeDropdown = t;
      },
      hideDropdown(t) {
        this.activeDropdown === t && (this.activeDropdown = null);
      },
      ...hu(["fetchCategories"]),
      goToCategoryPosts(t) {
        this.$router.push({
          name: "PostByCategoryView",
          params: { categoryId: t },
        });
      },
    },
    mounted() {
      this.fetchCategories();
    },
  },
  km = { class: "navbar-header" },
  Vm = { class: "navbar-container" },
  Bm = { class: "navbar-top" },
  jm = { class: "navbar-logo" },
  Hm = ["aria-expanded"],
  Fm = { class: "navbar-links" },
  zm = { class: "nav-item" },
  Gm = { class: "nav-item dropdown" },
  Wm = { class: "nav-item dropdown" },
  Um = { class: "dropdown-menu" },
  Km = { class: "nav-item dropdown" },
  Ym = { class: "nav-item dropdown" };
function qm(t, e, n, s, i, r) {
  const o = he("router-link");
  return (
    X(),
    Z("header", km, [
      C("div", Vm, [
        C("div", Bm, [
          C("div", jm, [
            Q(
              o,
              { to: "/" },
              {
                default: _e(
                  () =>
                    e[1] ||
                    (e[1] = [
                      C(
                        "img",
                        {
                          src: Mm,
                          alt: "Logo Fondation ATEF OMAIS",
                          class: "logo-img",
                        },
                        null,
                        -1,
                      ),
                    ]),
                ),
                _: 1,
              },
            ),
          ]),
          C(
            "button",
            {
              onClick:
                e[0] || (e[0] = (...a) => r.toggleMenu && r.toggleMenu(...a)),
              class: "burger-menu",
              "aria-label": "Menu",
              "aria-expanded": i.isMenuOpen,
              "aria-haspopup": "true",
            },
            e[2] ||
              (e[2] = [
                C("div", { class: "burger-icon" }, null, -1),
                C("div", { class: "burger-icon" }, null, -1),
                C("div", { class: "burger-icon" }, null, -1),
              ]),
            8,
            Hm,
          ),
        ]),
        C(
          "nav",
          { class: Ns([{ active: i.isMenuOpen, navbar: !0 }, "navbar"]) },
          [
            C("ul", Fm, [
              C("li", zm, [
                Q(
                  o,
                  {
                    to: "/",
                    class: "nav-link",
                    "exact-active-class": "active-link",
                  },
                  { default: _e(() => e[3] || (e[3] = [be("ACCUEIL")])), _: 1 },
                ),
              ]),
              C("li", Gm, [
                Q(
                  o,
                  {
                    to: "/about",
                    class: "nav-link",
                    "exact-active-class": "active-link",
                  },
                  {
                    default: _e(() => e[4] || (e[4] = [be("A PROPOS")])),
                    _: 1,
                  },
                ),
              ]),
              C("li", Wm, [
                e[5] ||
                  (e[5] = C("span", { class: "nav-link" }, "ACTIVIT\xC9S", -1)),
                C("ul", Um, [
                  (X(!0),
                  Z(
                    Te,
                    null,
                    Ot(
                      t.categories,
                      (a) => (
                        X(),
                        Z("li", { key: a.id, class: "dropdown-item" }, [
                          Q(
                            o,
                            { to: `/categories/${a.id}`, class: "nav-link" },
                            { default: _e(() => [be(Ce(a.name), 1)]), _: 2 },
                            1032,
                            ["to"],
                          ),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
              C("li", Km, [
                Q(
                  o,
                  {
                    to: "/partners",
                    class: "nav-link",
                    "exact-active-class": "active-link",
                  },
                  {
                    default: _e(() => e[6] || (e[6] = [be("PARTENAIRES")])),
                    _: 1,
                  },
                ),
              ]),
              C("li", Ym, [
                Q(
                  o,
                  {
                    to: "/contacts",
                    class: "nav-link",
                    "exact-active-class": "active-link",
                  },
                  {
                    default: _e(() => e[7] || (e[7] = [be("CONTACTS")])),
                    _: 1,
                  },
                ),
              ]),
            ]),
            e[8] ||
              (e[8] = pi(
                '<div class="navbar-socials" data-v-2362f218><a href="https://www.facebook.com/FATOMCI" class="social-icon" data-v-2362f218><img src="' +
                  Nm +
                  '" alt="Facebook" data-v-2362f218></a><a href="https://www.linkedin.com/in/fondation-atef-oma%C3%AFs-952168100" class="social-icon" data-v-2362f218><img src="' +
                  Dm +
                  '" alt="LinkedIn" data-v-2362f218></a><a href="#" class="social-icon" data-v-2362f218><img src="' +
                  $m +
                  '" alt="Youtube" data-v-2362f218></a></div>',
                1,
              )),
          ],
          2,
        ),
      ]),
    ])
  );
}
var Oo = Fe(Rm, [
  ["render", qm],
  ["__scopeId", "data-v-2362f218"],
]);
const Xm = {
    name: "HeroSection",
    props: { backgroundImage: { type: String, required: !0 } },
    computed: {
      heroBackground() {
        return {
          backgroundImage: `url(${this.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        };
      },
      heroTitle() {
        switch (this.$route.name) {
          case "home":
            return "POUR LE BIEN-\xCATRE DES POPULATIONS VULN\xC9RABLES";
          case "about":
            return "QUI SOMMES-NOUS ?";
          case "contacts":
            return "CONTACTEZ-NOUS";
          case "partners":
            return "NOS PARTENAIRES";
          case "rapports":
            return "RAPPORTS D'ACTIVITES";
          case "activities":
            return "NOS ACTIVIT\xC9S";
          default:
            return "BIENVENUE";
        }
      },
      heroDescription() {
        switch (this.$route.name) {
          case "home":
            return "Nous mettons tout en \u0153uvre pour am\xE9liorer la qualit\xE9 de vie des populations vuln\xE9rables \xE0 travers divers programmes de soutien.";
          case "about":
            return "D\xE9couvrez qui nous sommes, nos valeurs et notre engagement envers les populations vuln\xE9rables.";
          case "contacts":
            return "N'h\xE9sitez pas \xE0 nous contacter pour toute question ou demande d'information. Nous sommes l\xE0 pour vous aider.";
          case "partners":
            return "Nos partenaires jouent un r\xF4le essentiel dans la r\xE9alisation de nos projets. D\xE9couvrez-les.";
          case "activities":
            return "Nos activit\xE9s sont diverses et ax\xE9es sur le d\xE9veloppement durable, l'\xE9ducation et la sant\xE9.";
          case "rapports":
            return "Consultez et t\xE9l\xE9chargez nos rapports d\xE9taill\xE9s pour d\xE9couvrir l'impact de nos actions et initiatives sur le terrain.";
          default:
            return "Nous vous invitons \xE0 d\xE9couvrir notre mission et nos initiatives pour un avenir meilleur.";
        }
      },
    },
  },
  Qm = { class: "overlay" },
  Jm = { class: "hero-content" };
function Zm(t, e, n, s, i, r) {
  return (
    X(),
    Z(
      "section",
      { class: "hero", style: En(r.heroBackground) },
      [
        C("div", Qm, [
          C("div", Jm, [
            e[0] || (e[0] = C("hr", { class: "cta-btn" }, null, -1)),
            C("h1", null, Ce(r.heroTitle), 1),
            C("p", null, Ce(r.heroDescription), 1),
          ]),
        ]),
      ],
      4,
    )
  );
}
var _u = Fe(Xm, [
  ["render", Zm],
  ["__scopeId", "data-v-56a69cec"],
]);
const eg = {
    data() {
      return {
        countries: [
          // {
          //   id: 15,
          //   name: "France",
          //   flag: "/assets/flags/france.png",
          //   url: "https://example.com/france",
          // },
          {
            id: 17,
            name: "B\xE9nin",
            flag: "/assets/flags/benin.png",
            url: "https://example.com/benin",
          },
          {
            id: 18,
            name: "Niger",
            flag: "/assets/flags/niger.jpg",
            url: "https://example.com/niger",
          },
          {
            id: 16,
            name: "Burkina Faso",
            flag: "/assets/flags/burkina-faso.jpg",
            url: "https://example.com/burkina-faso",
          },
          {
            id: 19,
            name: "Mali",
            flag: "/assets/flags/mali.png",
            url: "https://example.com/mali",
          },
        ],
      };
    },
    methods: {
      goToCategoryPosts(t) {
        this.$router.push({
          name: "PostByCategoryView",
          params: { categoryId: t },
        });
      },
    },
  },
  tg = { class: "bureau-fatom" },
  ng = { class: "countries" },
  sg = ["onClick"],
  ig = ["src", "alt"],
  rg = { class: "country-name" };
function og(t, e, n, s, i, r) {
  return (
    X(),
    Z("section", tg, [
      e[0] || (e[0] = C("h3", null, "BUREAU FATOM", -1)),
      C("div", ng, [
        (X(!0),
        Z(
          Te,
          null,
          Ot(
            i.countries,
            (o) => (
              X(),
              Z(
                "div",
                {
                  key: o.id,
                  class: "country-card",
                  onClick: (a) => r.goToCategoryPosts(o.id),
                },
                [
                  C(
                    "img",
                    { src: o.flag, alt: `Drapeau de ${o.name}`, class: "flag" },
                    null,
                    8,
                    ig,
                  ),
                  C("div", rg, Ce(o.name), 1),
                ],
                8,
                sg,
              )
            ),
          ),
          128,
        )),
      ]),
    ])
  );
}
var ag = Fe(eg, [
  ["render", og],
  ["__scopeId", "data-v-3d614f7c"],
]);
const lg = {
    computed: { ...es({ recentActivities: (t) => t.recentActivities }) },
    methods: {
      decodeHtmlEntities(t) {
        return new DOMParser().parseFromString(t, "text/html").documentElement
          .textContent;
      },
      goToActivity(t) {
        this.$router.push(`/post/${t}`);
      },
    },
    created() {
      this.$store.dispatch("fetchRecentActivities");
    },
  },
  cg = { class: "recent-activities" },
  ug = { class: "activities-wrapper" },
  dg = ["src", "onClick"],
  fg = { class: "activity-info" },
  pg = { class: "no-link" },
  hg = { class: "activity-title" },
  mg = { class: "view-all" };
function gg(t, e, n, s, i, r) {
  const o = he("router-link");
  return (
    X(),
    Z("section", cg, [
      e[1] ||
        (e[1] = C("h3", null, "LES ACTIVIT\xC9S R\xC9CENTES DE LA FATOM", -1)),
      C("div", ug, [
        (X(!0),
        Z(
          Te,
          null,
          Ot(
            t.recentActivities,
            (a) => (
              X(),
              Z("div", { class: "activity-card", key: a.id }, [
                C(
                  "img",
                  {
                    src: a.featuredImage,
                    alt: "Image de l'activit\xE9",
                    class: "activity-image",
                    onClick: (l) => r.goToActivity(a.id),
                  },
                  null,
                  8,
                  dg,
                ),
                C("div", fg, [
                  C("h4", pg, [
                    Q(
                      o,
                      { to: `/post/${a.id}` },
                      {
                        default: _e(() => [
                          be(
                            Ce(r.decodeHtmlEntities(a.title).toUpperCase()),
                            1,
                          ),
                        ]),
                        _: 2,
                      },
                      1032,
                      ["to"],
                    ),
                  ]),
                  C("p", hg, Ce(r.decodeHtmlEntities(a.excerpt)), 1),
                ]),
              ])
            ),
          ),
          128,
        )),
      ]),
      C("div", mg, [
        Q(
          o,
          {
            to: "/activities",
            class: "nav-link",
            "exact-active-class": "active-link",
          },
          {
            default: _e(
              () =>
                e[0] ||
                (e[0] = [
                  be("TOUTES NOS ACTIVITES "),
                  C("i", { class: "fas fa-arrow-right" }, null, -1),
                ]),
            ),
            _: 1,
          },
        ),
      ]),
    ])
  );
}
var vg = Fe(lg, [
  ["render", gg],
  ["__scopeId", "data-v-87008750"],
]);
const _g = {},
  Eg = { class: "footer" },
  bg = { class: "footer-container" },
  wg = { class: "footer-column" },
  yg = { class: "footer-column" },
  Sg = { class: "footer-column" };
function Tg(t, e) {
  const n = he("router-link");
  return (
    X(),
    Z("footer", Eg, [
      C("div", bg, [
        C("div", wg, [
          e[1] || (e[1] = C("h4", null, "ACCUEIL", -1)),
          C("ul", null, [
            C("li", null, [
              Q(
                n,
                {
                  to: "/",
                  class: "nav-link",
                  "exact-active-class": "active-link",
                },
                { default: _e(() => e[0] || (e[0] = [be("ACCUEIL")])), _: 1 },
              ),
            ]),
          ]),
        ]),
        C("div", yg, [
          e[5] || (e[5] = C("h4", null, "A PROPOS", -1)),
          C("ul", null, [
            C("li", null, [
              Q(
                n,
                {
                  to: "/about",
                  class: "nav-link",
                  "exact-active-class": "active-link",
                },
                {
                  default: _e(() => e[2] || (e[2] = [be("Qui sommes-nous?")])),
                  _: 1,
                },
              ),
            ]),
            C("li", null, [
              Q(
                n,
                {
                  to: "/activities",
                  class: "nav-link",
                  "exact-active-class": "active-link",
                },
                {
                  default: _e(
                    () => e[3] || (e[3] = [be("Nos domaines d'activit\xE9s")]),
                  ),
                  _: 1,
                },
              ),
            ]),
            C("li", null, [
              Q(
                n,
                {
                  to: "/partners",
                  class: "nav-link",
                  "exact-active-class": "active-link",
                },
                {
                  default: _e(() => e[4] || (e[4] = [be("Nos partenaires")])),
                  _: 1,
                },
              ),
            ]),
          ]),
        ]),
        C("div", Sg, [
          e[10] || (e[10] = C("h4", null, "ACTIVIT\xC9S", -1)),
          C("ul", null, [
            C("li", null, [
              Q(
                n,
                {
                  to: "/categories/2",
                  class: "nav-link",
                  "exact-active-class": "active-link",
                },
                {
                  default: _e(() => e[6] || (e[6] = [be("Dans la sant\xE9")])),
                  _: 1,
                },
              ),
            ]),
            C("li", null, [
              Q(
                n,
                {
                  to: "/categories/3",
                  class: "nav-link",
                  "exact-active-class": "active-link",
                },
                {
                  default: _e(
                    () => e[7] || (e[7] = [be("Dans l'\xE9ducation")]),
                  ),
                  _: 1,
                },
              ),
            ]),
            C("li", null, [
              Q(
                n,
                {
                  to: "/categories/4",
                  class: "nav-link",
                  "exact-active-class": "active-link",
                },
                {
                  default: _e(() => e[8] || (e[8] = [be("Dans la culture")])),
                  _: 1,
                },
              ),
            ]),
            C("li", null, [
              Q(
                n,
                {
                  to: "/categories/5",
                  class: "nav-link",
                  "exact-active-class": "active-link",
                },
                {
                  default: _e(
                    () => e[9] || (e[9] = [be("Dans l'environnement")]),
                  ),
                  _: 1,
                },
              ),
            ]),
          ]),
        ]),
        e[11] ||
          (e[11] = pi(
            '<div class="footer-column" data-v-7824e8ba><h4 data-v-7824e8ba>CONTACTS</h4><ul data-v-7824e8ba><li data-v-7824e8ba><a href="tel:+2252720313954" class="nav-link" data-v-7824e8ba>+225 27 203 13954</a></li><li data-v-7824e8ba><a href="mailto:fondation@fatom.org" class="nav-link" data-v-7824e8ba>fondation@fatom.org</a></li><li data-v-7824e8ba>Abidjan - Plateau - H\xF4tel TIAMA</li></ul></div><div class="footer-column" data-v-7824e8ba><h4 data-v-7824e8ba>T\xE9l\xE9charger notre canevas</h4><ul data-v-7824e8ba><li data-v-7824e8ba><a href="/documents/Fondation-Canevas.docx" class="nav-link" download data-v-7824e8ba><i class="fas fa-file-pdf" data-v-7824e8ba></i> T\xE9l\xE9charger notre document </a></li></ul></div>',
            2,
          )),
      ]),
      e[12] ||
        (e[12] = pi(
          '<div class="footer-social" data-v-7824e8ba><a href="#" data-v-7824e8ba><i class="fab fa-facebook-f" data-v-7824e8ba></i></a><a href="#" data-v-7824e8ba><i class="fab fa-linkedin-in" data-v-7824e8ba></i></a><a href="#" data-v-7824e8ba><i class="fab fa-twitter" data-v-7824e8ba></i></a></div>',
          1,
        )),
    ])
  );
}
var Po = Fe(_g, [
  ["render", Tg],
  ["__scopeId", "data-v-7824e8ba"],
]);
const Ag = {
    computed: { ...es(["reports"]) },
    created() {
      this.$store.dispatch("fetchLastReports");
    },
  },
  xg = { class: "reports-section" },
  Cg = { class: "reports-grid" },
  Og = { key: 0 },
  Pg = { class: "report-image" },
  Ig = ["src"],
  Lg = ["href"],
  Mg = { class: "view-all" };
function Ng(t, e, n, s, i, r) {
  const o = he("router-link");
  return (
    X(),
    Z("section", xg, [
      e[1] || (e[1] = C("h2", null, "LES RAPPORTS DE LA FATOM", -1)),
      C("div", Cg, [
        t.reports.length === 0
          ? (X(), Z("div", Og, "Aucun rapport disponible"))
          : (X(!0),
            Z(
              Te,
              { key: 1 },
              Ot(
                t.reports.slice(0, 5),
                (a) => (
                  X(),
                  Z("div", { key: a.id, class: "report-card" }, [
                    C("div", Pg, [
                      a.featuredImage
                        ? (X(),
                          Z(
                            "img",
                            {
                              key: 0,
                              src: a.featuredImage,
                              alt: "Report Image",
                            },
                            null,
                            8,
                            Ig,
                          ))
                        : ht("", !0),
                    ]),
                    a.pdfUrl
                      ? (X(),
                        Z(
                          "a",
                          { key: 0, href: a.pdfUrl, target: "_blank" },
                          [C("p", null, Ce(a.name), 1)],
                          8,
                          Lg,
                        ))
                      : ht("", !0),
                  ])
                ),
              ),
              128,
            )),
      ]),
      C("div", Mg, [
        Q(
          o,
          {
            to: "/rapports",
            class: "nav-link",
            "exact-active-class": "active-link",
          },
          {
            default: _e(
              () =>
                e[0] ||
                (e[0] = [
                  be("TOUS LES RAPPORTS "),
                  C("i", { class: "fas fa-arrow-right" }, null, -1),
                ]),
            ),
            _: 1,
          },
        ),
      ]),
    ])
  );
}
var Dg = Fe(Ag, [
  ["render", Ng],
  ["__scopeId", "data-v-34822b16"],
]);
function Ya(t) {
  return (
    t !== null &&
    typeof t == "object" &&
    "constructor" in t &&
    t.constructor === Object
  );
}
function Io(t, e) {
  (t === void 0 && (t = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach((n) => {
      typeof t[n] == "undefined"
        ? (t[n] = e[n])
        : Ya(e[n]) &&
          Ya(t[n]) &&
          Object.keys(e[n]).length > 0 &&
          Io(t[n], e[n]);
    }));
}
const Eu = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function ts() {
  const t = typeof document != "undefined" ? document : {};
  return (Io(t, Eu), t);
}
const $g = {
  document: Eu,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(t) {
    return typeof setTimeout == "undefined" ? (t(), null) : setTimeout(t, 0);
  },
  cancelAnimationFrame(t) {
    typeof setTimeout != "undefined" && clearTimeout(t);
  },
};
function st() {
  const t = typeof window != "undefined" ? window : {};
  return (Io(t, $g), t);
}
function Rg(t) {
  return (
    t === void 0 && (t = ""),
    t
      .trim()
      .split(" ")
      .filter((e) => !!e.trim())
  );
}
function kg(t) {
  const e = t;
  Object.keys(e).forEach((n) => {
    try {
      e[n] = null;
    } catch {}
    try {
      delete e[n];
    } catch {}
  });
}
function Gr(t, e) {
  return (e === void 0 && (e = 0), setTimeout(t, e));
}
function gi() {
  return Date.now();
}
function Vg(t) {
  const e = st();
  let n;
  return (
    e.getComputedStyle && (n = e.getComputedStyle(t, null)),
    !n && t.currentStyle && (n = t.currentStyle),
    n || (n = t.style),
    n
  );
}
function Bg(t, e) {
  e === void 0 && (e = "x");
  const n = st();
  let s, i, r;
  const o = Vg(t);
  return (
    n.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (r = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((r =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (s = r.toString().split(","))),
    e === "x" &&
      (n.WebKitCSSMatrix
        ? (i = r.m41)
        : s.length === 16
          ? (i = parseFloat(s[12]))
          : (i = parseFloat(s[4]))),
    e === "y" &&
      (n.WebKitCSSMatrix
        ? (i = r.m42)
        : s.length === 16
          ? (i = parseFloat(s[13]))
          : (i = parseFloat(s[5]))),
    i || 0
  );
}
function Ws(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === "Object"
  );
}
function jg(t) {
  return typeof window != "undefined" &&
    typeof window.HTMLElement != "undefined"
    ? t instanceof HTMLElement
    : t && (t.nodeType === 1 || t.nodeType === 11);
}
function Qe() {
  const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const s = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (s != null && !jg(s)) {
      const i = Object.keys(Object(s)).filter((r) => e.indexOf(r) < 0);
      for (let r = 0, o = i.length; r < o; r += 1) {
        const a = i[r],
          l = Object.getOwnPropertyDescriptor(s, a);
        l !== void 0 &&
          l.enumerable &&
          (Ws(t[a]) && Ws(s[a])
            ? s[a].__swiper__
              ? (t[a] = s[a])
              : Qe(t[a], s[a])
            : !Ws(t[a]) && Ws(s[a])
              ? ((t[a] = {}), s[a].__swiper__ ? (t[a] = s[a]) : Qe(t[a], s[a]))
              : (t[a] = s[a]));
      }
    }
  }
  return t;
}
function Us(t, e, n) {
  t.style.setProperty(e, n);
}
function bu(t) {
  let { swiper: e, targetPosition: n, side: s } = t;
  const i = st(),
    r = -e.translate;
  let o = null,
    a;
  const l = e.params.speed;
  ((e.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(e.cssModeFrameID));
  const u = n > r ? "next" : "prev",
    c = (p, f) => (u === "next" && p >= f) || (u === "prev" && p <= f),
    d = () => {
      ((a = new Date().getTime()), o === null && (o = a));
      const p = Math.max(Math.min((a - o) / l, 1), 0),
        f = 0.5 - Math.cos(p * Math.PI) / 2;
      let g = r + f * (n - r);
      if ((c(g, n) && (g = n), e.wrapperEl.scrollTo({ [s]: g }), c(g, n))) {
        ((e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            ((e.wrapperEl.style.overflow = ""),
              e.wrapperEl.scrollTo({ [s]: g }));
          }),
          i.cancelAnimationFrame(e.cssModeFrameID));
        return;
      }
      e.cssModeFrameID = i.requestAnimationFrame(d);
    };
  d();
}
function $t(t, e) {
  e === void 0 && (e = "");
  const n = [...t.children];
  return (
    t instanceof HTMLSlotElement && n.push(...t.assignedElements()),
    e ? n.filter((s) => s.matches(e)) : n
  );
}
function Hg(t, e) {
  const n = e.contains(t);
  return !n && e instanceof HTMLSlotElement
    ? [...e.assignedElements()].includes(t)
    : n;
}
function vi(t) {
  try {
    console.warn(t);
    return;
  } catch {}
}
function Wr(t, e) {
  e === void 0 && (e = []);
  const n = document.createElement(t);
  return (n.classList.add(...(Array.isArray(e) ? e : Rg(e))), n);
}
function Fg(t, e) {
  const n = [];
  for (; t.previousElementSibling; ) {
    const s = t.previousElementSibling;
    (e ? s.matches(e) && n.push(s) : n.push(s), (t = s));
  }
  return n;
}
function zg(t, e) {
  const n = [];
  for (; t.nextElementSibling; ) {
    const s = t.nextElementSibling;
    (e ? s.matches(e) && n.push(s) : n.push(s), (t = s));
  }
  return n;
}
function Ut(t, e) {
  return st().getComputedStyle(t, null).getPropertyValue(e);
}
function qa(t) {
  let e = t,
    n;
  if (e) {
    for (n = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (n += 1);
    return n;
  }
}
function Gg(t, e) {
  const n = [];
  let s = t.parentElement;
  for (; s; )
    (e ? s.matches(e) && n.push(s) : n.push(s), (s = s.parentElement));
  return n;
}
function Xa(t, e, n) {
  const s = st();
  return n
    ? t[e === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          s
            .getComputedStyle(t, null)
            .getPropertyValue(e === "width" ? "margin-right" : "margin-top"),
        ) +
        parseFloat(
          s
            .getComputedStyle(t, null)
            .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"),
        )
    : t.offsetWidth;
}
let sr;
function Wg() {
  const t = st(),
    e = ts();
  return {
    smoothScroll:
      e.documentElement &&
      e.documentElement.style &&
      "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in t ||
      (t.DocumentTouch && e instanceof t.DocumentTouch)
    ),
  };
}
function wu() {
  return (sr || (sr = Wg()), sr);
}
let ir;
function Ug(t) {
  let { userAgent: e } = t === void 0 ? {} : t;
  const n = wu(),
    s = st(),
    i = s.navigator.platform,
    r = e || s.navigator.userAgent,
    o = { ios: !1, android: !1 },
    a = s.screen.width,
    l = s.screen.height,
    u = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = r.match(/(iPad).*OS\s([\d_]+)/);
  const d = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    p = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    f = i === "Win32";
  let g = i === "MacIntel";
  const v = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !c &&
      g &&
      n.touch &&
      v.indexOf(`${a}x${l}`) >= 0 &&
      ((c = r.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (g = !1)),
    u && !f && ((o.os = "android"), (o.android = !0)),
    (c || p || d) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function yu(t) {
  return (t === void 0 && (t = {}), ir || (ir = Ug(t)), ir);
}
let rr;
function Kg() {
  const t = st(),
    e = yu();
  let n = !1;
  function s() {
    const a = t.navigator.userAgent.toLowerCase();
    return (
      a.indexOf("safari") >= 0 &&
      a.indexOf("chrome") < 0 &&
      a.indexOf("android") < 0
    );
  }
  if (s()) {
    const a = String(t.navigator.userAgent);
    if (a.includes("Version/")) {
      const [l, u] = a
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((c) => Number(c));
      n = l < 16 || (l === 16 && u < 2);
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      t.navigator.userAgent,
    ),
    r = s(),
    o = r || (i && e.ios);
  return {
    isSafari: n || r,
    needPerspectiveFix: n,
    need3dFix: o,
    isWebView: i,
  };
}
function Yg() {
  return (rr || (rr = Kg()), rr);
}
function qg(t) {
  let { swiper: e, on: n, emit: s } = t;
  const i = st();
  let r = null,
    o = null;
  const a = () => {
      !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
    },
    l = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((r = new ResizeObserver((d) => {
          o = i.requestAnimationFrame(() => {
            const { width: p, height: f } = e;
            let g = p,
              v = f;
            (d.forEach((S) => {
              let { contentBoxSize: E, contentRect: y, target: b } = S;
              (b && b !== e.el) ||
                ((g = y ? y.width : (E[0] || E).inlineSize),
                (v = y ? y.height : (E[0] || E).blockSize));
            }),
              (g !== p || v !== f) && a());
          });
        })),
        r.observe(e.el));
    },
    u = () => {
      (o && i.cancelAnimationFrame(o),
        r && r.unobserve && e.el && (r.unobserve(e.el), (r = null)));
    },
    c = () => {
      !e || e.destroyed || !e.initialized || s("orientationchange");
    };
  (n("init", () => {
    if (e.params.resizeObserver && typeof i.ResizeObserver != "undefined") {
      l();
      return;
    }
    (i.addEventListener("resize", a),
      i.addEventListener("orientationchange", c));
  }),
    n("destroy", () => {
      (u(),
        i.removeEventListener("resize", a),
        i.removeEventListener("orientationchange", c));
    }));
}
function Xg(t) {
  let { swiper: e, extendParams: n, on: s, emit: i } = t;
  const r = [],
    o = st(),
    a = function (c, d) {
      d === void 0 && (d = {});
      const p = o.MutationObserver || o.WebkitMutationObserver,
        f = new p((g) => {
          if (e.__preventObserver__) return;
          if (g.length === 1) {
            i("observerUpdate", g[0]);
            return;
          }
          const v = function () {
            i("observerUpdate", g[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(v)
            : o.setTimeout(v, 0);
        });
      (f.observe(c, {
        attributes: typeof d.attributes == "undefined" ? !0 : d.attributes,
        childList:
          e.isElement || (typeof d.childList == "undefined" ? !0 : d).childList,
        characterData:
          typeof d.characterData == "undefined" ? !0 : d.characterData,
      }),
        r.push(f));
    },
    l = () => {
      if (!!e.params.observer) {
        if (e.params.observeParents) {
          const c = Gg(e.hostEl);
          for (let d = 0; d < c.length; d += 1) a(c[d]);
        }
        (a(e.hostEl, { childList: e.params.observeSlideChildren }),
          a(e.wrapperEl, { attributes: !1 }));
      }
    },
    u = () => {
      (r.forEach((c) => {
        c.disconnect();
      }),
        r.splice(0, r.length));
    };
  (n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s("init", l),
    s("destroy", u));
}
var Qg = {
  on(t, e, n) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    const i = n ? "unshift" : "push";
    return (
      t.split(" ").forEach((r) => {
        (s.eventsListeners[r] || (s.eventsListeners[r] = []),
          s.eventsListeners[r][i](e));
      }),
      s
    );
  },
  once(t, e, n) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    function i() {
      (s.off(t, i), i.__emitterProxy && delete i.__emitterProxy);
      for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      e.apply(s, o);
    }
    return ((i.__emitterProxy = e), s.on(t, i, n));
  },
  onAny(t, e) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof t != "function") return n;
    const s = e ? "unshift" : "push";
    return (
      n.eventsAnyListeners.indexOf(t) < 0 && n.eventsAnyListeners[s](t),
      n
    );
  },
  offAny(t) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const n = e.eventsAnyListeners.indexOf(t);
    return (n >= 0 && e.eventsAnyListeners.splice(n, 1), e);
  },
  off(t, e) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        t.split(" ").forEach((s) => {
          typeof e == "undefined"
            ? (n.eventsListeners[s] = [])
            : n.eventsListeners[s] &&
              n.eventsListeners[s].forEach((i, r) => {
                (i === e || (i.__emitterProxy && i.__emitterProxy === e)) &&
                  n.eventsListeners[s].splice(r, 1);
              });
        }),
      n
    );
  },
  emit() {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let e, n, s;
    for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
      r[o] = arguments[o];
    return (
      typeof r[0] == "string" || Array.isArray(r[0])
        ? ((e = r[0]), (n = r.slice(1, r.length)), (s = t))
        : ((e = r[0].events), (n = r[0].data), (s = r[0].context || t)),
      n.unshift(s),
      (Array.isArray(e) ? e : e.split(" ")).forEach((l) => {
        (t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((u) => {
            u.apply(s, [l, ...n]);
          }),
          t.eventsListeners &&
            t.eventsListeners[l] &&
            t.eventsListeners[l].forEach((u) => {
              u.apply(s, n);
            }));
      }),
      t
    );
  },
};
function Jg() {
  const t = this;
  let e, n;
  const s = t.el;
  (typeof t.params.width != "undefined" && t.params.width !== null
    ? (e = t.params.width)
    : (e = s.clientWidth),
    typeof t.params.height != "undefined" && t.params.height !== null
      ? (n = t.params.height)
      : (n = s.clientHeight),
    !((e === 0 && t.isHorizontal()) || (n === 0 && t.isVertical())) &&
      ((e =
        e -
        parseInt(Ut(s, "padding-left") || 0, 10) -
        parseInt(Ut(s, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(Ut(s, "padding-top") || 0, 10) -
        parseInt(Ut(s, "padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(t, {
        width: e,
        height: n,
        size: t.isHorizontal() ? e : n,
      })));
}
function Zg() {
  const t = this;
  function e(P, F) {
    return parseFloat(P.getPropertyValue(t.getDirectionLabel(F)) || 0);
  }
  const n = t.params,
    { wrapperEl: s, slidesEl: i, size: r, rtlTranslate: o, wrongRTL: a } = t,
    l = t.virtual && n.virtual.enabled,
    u = l ? t.virtual.slides.length : t.slides.length,
    c = $t(i, `.${t.params.slideClass}, swiper-slide`),
    d = l ? t.virtual.slides.length : c.length;
  let p = [];
  const f = [],
    g = [];
  let v = n.slidesOffsetBefore;
  typeof v == "function" && (v = n.slidesOffsetBefore.call(t));
  let S = n.slidesOffsetAfter;
  typeof S == "function" && (S = n.slidesOffsetAfter.call(t));
  const E = t.snapGrid.length,
    y = t.slidesGrid.length;
  let b = n.spaceBetween,
    w = -v,
    A = 0,
    D = 0;
  if (typeof r == "undefined") return;
  (typeof b == "string" && b.indexOf("%") >= 0
    ? (b = (parseFloat(b.replace("%", "")) / 100) * r)
    : typeof b == "string" && (b = parseFloat(b)),
    (t.virtualSize = -b),
    c.forEach((P) => {
      (o ? (P.style.marginLeft = "") : (P.style.marginRight = ""),
        (P.style.marginBottom = ""),
        (P.style.marginTop = ""));
    }),
    n.centeredSlides &&
      n.cssMode &&
      (Us(s, "--swiper-centered-offset-before", ""),
      Us(s, "--swiper-centered-offset-after", "")));
  const G = n.grid && n.grid.rows > 1 && t.grid;
  G ? t.grid.initSlides(c) : t.grid && t.grid.unsetSlides();
  let j;
  const N =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (P) => typeof n.breakpoints[P].slidesPerView != "undefined",
    ).length > 0;
  for (let P = 0; P < d; P += 1) {
    j = 0;
    let F;
    if (
      (c[P] && (F = c[P]),
      G && t.grid.updateSlide(P, F, c),
      !(c[P] && Ut(F, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        N && (c[P].style[t.getDirectionLabel("width")] = "");
        const K = getComputedStyle(F),
          z = F.style.transform,
          oe = F.style.webkitTransform;
        if (
          (z && (F.style.transform = "none"),
          oe && (F.style.webkitTransform = "none"),
          n.roundLengths)
        )
          j = t.isHorizontal() ? Xa(F, "width", !0) : Xa(F, "height", !0);
        else {
          const de = e(K, "width"),
            se = e(K, "padding-left"),
            ne = e(K, "padding-right"),
            ie = e(K, "margin-left"),
            ye = e(K, "margin-right"),
            Oe = K.getPropertyValue("box-sizing");
          if (Oe && Oe === "border-box") j = de + ie + ye;
          else {
            const { clientWidth: Pe, offsetWidth: we } = F;
            j = de + se + ne + ie + ye + (we - Pe);
          }
        }
        (z && (F.style.transform = z),
          oe && (F.style.webkitTransform = oe),
          n.roundLengths && (j = Math.floor(j)));
      } else
        ((j = (r - (n.slidesPerView - 1) * b) / n.slidesPerView),
          n.roundLengths && (j = Math.floor(j)),
          c[P] && (c[P].style[t.getDirectionLabel("width")] = `${j}px`));
      (c[P] && (c[P].swiperSlideSize = j),
        g.push(j),
        n.centeredSlides
          ? ((w = w + j / 2 + A / 2 + b),
            A === 0 && P !== 0 && (w = w - r / 2 - b),
            P === 0 && (w = w - r / 2 - b),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            n.roundLengths && (w = Math.floor(w)),
            D % n.slidesPerGroup === 0 && p.push(w),
            f.push(w))
          : (n.roundLengths && (w = Math.floor(w)),
            (D - Math.min(t.params.slidesPerGroupSkip, D)) %
              t.params.slidesPerGroup ===
              0 && p.push(w),
            f.push(w),
            (w = w + j + b)),
        (t.virtualSize += j + b),
        (A = j),
        (D += 1));
    }
  }
  if (
    ((t.virtualSize = Math.max(t.virtualSize, r) + S),
    o &&
      a &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (s.style.width = `${t.virtualSize + b}px`),
    n.setWrapperSize &&
      (s.style[t.getDirectionLabel("width")] = `${t.virtualSize + b}px`),
    G && t.grid.updateWrapperSize(j, p),
    !n.centeredSlides)
  ) {
    const P = [];
    for (let F = 0; F < p.length; F += 1) {
      let K = p[F];
      (n.roundLengths && (K = Math.floor(K)),
        p[F] <= t.virtualSize - r && P.push(K));
    }
    ((p = P),
      Math.floor(t.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
        p.push(t.virtualSize - r));
  }
  if (l && n.loop) {
    const P = g[0] + b;
    if (n.slidesPerGroup > 1) {
      const F = Math.ceil(
          (t.virtual.slidesBefore + t.virtual.slidesAfter) / n.slidesPerGroup,
        ),
        K = P * n.slidesPerGroup;
      for (let z = 0; z < F; z += 1) p.push(p[p.length - 1] + K);
    }
    for (let F = 0; F < t.virtual.slidesBefore + t.virtual.slidesAfter; F += 1)
      (n.slidesPerGroup === 1 && p.push(p[p.length - 1] + P),
        f.push(f[f.length - 1] + P),
        (t.virtualSize += P));
  }
  if ((p.length === 0 && (p = [0]), b !== 0)) {
    const P =
      t.isHorizontal() && o ? "marginLeft" : t.getDirectionLabel("marginRight");
    c.filter((F, K) =>
      !n.cssMode || n.loop ? !0 : K !== c.length - 1,
    ).forEach((F) => {
      F.style[P] = `${b}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let P = 0;
    (g.forEach((K) => {
      P += K + (b || 0);
    }),
      (P -= b));
    const F = P > r ? P - r : 0;
    p = p.map((K) => (K <= 0 ? -v : K > F ? F + S : K));
  }
  if (n.centerInsufficientSlides) {
    let P = 0;
    (g.forEach((K) => {
      P += K + (b || 0);
    }),
      (P -= b));
    const F = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
    if (P + F < r) {
      const K = (r - P - F) / 2;
      (p.forEach((z, oe) => {
        p[oe] = z - K;
      }),
        f.forEach((z, oe) => {
          f[oe] = z + K;
        }));
    }
  }
  if (
    (Object.assign(t, {
      slides: c,
      snapGrid: p,
      slidesGrid: f,
      slidesSizesGrid: g,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    (Us(s, "--swiper-centered-offset-before", `${-p[0]}px`),
      Us(
        s,
        "--swiper-centered-offset-after",
        `${t.size / 2 - g[g.length - 1] / 2}px`,
      ));
    const P = -t.snapGrid[0],
      F = -t.slidesGrid[0];
    ((t.snapGrid = t.snapGrid.map((K) => K + P)),
      (t.slidesGrid = t.slidesGrid.map((K) => K + F)));
  }
  if (
    (d !== u && t.emit("slidesLengthChange"),
    p.length !== E &&
      (t.params.watchOverflow && t.checkOverflow(),
      t.emit("snapGridLengthChange")),
    f.length !== y && t.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && t.updateSlidesOffset(),
    t.emit("slidesUpdated"),
    !l && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const P = `${n.containerModifierClass}backface-hidden`,
      F = t.el.classList.contains(P);
    d <= n.maxBackfaceHiddenSlides
      ? F || t.el.classList.add(P)
      : F && t.el.classList.remove(P);
  }
}
function ev(t) {
  const e = this,
    n = [],
    s = e.virtual && e.params.virtual.enabled;
  let i = 0,
    r;
  typeof t == "number"
    ? e.setTransition(t)
    : t === !0 && e.setTransition(e.params.speed);
  const o = (a) => (s ? e.slides[e.getSlideIndexByData(a)] : e.slides[a]);
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((a) => {
        n.push(a);
      });
    else
      for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
        const a = e.activeIndex + r;
        if (a > e.slides.length && !s) break;
        n.push(o(a));
      }
  else n.push(o(e.activeIndex));
  for (r = 0; r < n.length; r += 1)
    if (typeof n[r] != "undefined") {
      const a = n[r].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && (e.wrapperEl.style.height = `${i}px`);
}
function tv() {
  const t = this,
    e = t.slides,
    n = t.isElement
      ? t.isHorizontal()
        ? t.wrapperEl.offsetLeft
        : t.wrapperEl.offsetTop
      : 0;
  for (let s = 0; s < e.length; s += 1)
    e[s].swiperSlideOffset =
      (t.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) -
      n -
      t.cssOverflowAdjustment();
}
const Qa = (t, e, n) => {
  e && !t.classList.contains(n)
    ? t.classList.add(n)
    : !e && t.classList.contains(n) && t.classList.remove(n);
};
function nv(t) {
  t === void 0 && (t = (this && this.translate) || 0);
  const e = this,
    n = e.params,
    { slides: s, rtlTranslate: i, snapGrid: r } = e;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset == "undefined" && e.updateSlidesOffset();
  let o = -t;
  (i && (o = t), (e.visibleSlidesIndexes = []), (e.visibleSlides = []));
  let a = n.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0
    ? (a = (parseFloat(a.replace("%", "")) / 100) * e.size)
    : typeof a == "string" && (a = parseFloat(a));
  for (let l = 0; l < s.length; l += 1) {
    const u = s[l];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= s[0].swiperSlideOffset);
    const d =
        (o + (n.centeredSlides ? e.minTranslate() : 0) - c) /
        (u.swiperSlideSize + a),
      p =
        (o - r[0] + (n.centeredSlides ? e.minTranslate() : 0) - c) /
        (u.swiperSlideSize + a),
      f = -(o - c),
      g = f + e.slidesSizesGrid[l],
      v = f >= 0 && f <= e.size - e.slidesSizesGrid[l],
      S =
        (f >= 0 && f < e.size - 1) ||
        (g > 1 && g <= e.size) ||
        (f <= 0 && g >= e.size);
    (S && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(l)),
      Qa(u, S, n.slideVisibleClass),
      Qa(u, v, n.slideFullyVisibleClass),
      (u.progress = i ? -d : d),
      (u.originalProgress = i ? -p : p));
  }
}
function sv(t) {
  const e = this;
  if (typeof t == "undefined") {
    const c = e.rtlTranslate ? -1 : 1;
    t = (e && e.translate && e.translate * c) || 0;
  }
  const n = e.params,
    s = e.maxTranslate() - e.minTranslate();
  let { progress: i, isBeginning: r, isEnd: o, progressLoop: a } = e;
  const l = r,
    u = o;
  if (s === 0) ((i = 0), (r = !0), (o = !0));
  else {
    i = (t - e.minTranslate()) / s;
    const c = Math.abs(t - e.minTranslate()) < 1,
      d = Math.abs(t - e.maxTranslate()) < 1;
    ((r = c || i <= 0), (o = d || i >= 1), c && (i = 0), d && (i = 1));
  }
  if (n.loop) {
    const c = e.getSlideIndexByData(0),
      d = e.getSlideIndexByData(e.slides.length - 1),
      p = e.slidesGrid[c],
      f = e.slidesGrid[d],
      g = e.slidesGrid[e.slidesGrid.length - 1],
      v = Math.abs(t);
    (v >= p ? (a = (v - p) / g) : (a = (v + g - f) / g), a > 1 && (a -= 1));
  }
  (Object.assign(e, { progress: i, progressLoop: a, isBeginning: r, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      e.updateSlidesProgress(t),
    r && !l && e.emit("reachBeginning toEdge"),
    o && !u && e.emit("reachEnd toEdge"),
    ((l && !r) || (u && !o)) && e.emit("fromEdge"),
    e.emit("progress", i));
}
const or = (t, e, n) => {
  e && !t.classList.contains(n)
    ? t.classList.add(n)
    : !e && t.classList.contains(n) && t.classList.remove(n);
};
function iv() {
  const t = this,
    { slides: e, params: n, slidesEl: s, activeIndex: i } = t,
    r = t.virtual && n.virtual.enabled,
    o = t.grid && n.grid && n.grid.rows > 1,
    a = (d) => $t(s, `.${n.slideClass}${d}, swiper-slide${d}`)[0];
  let l, u, c;
  if (r)
    if (n.loop) {
      let d = i - t.virtual.slidesBefore;
      (d < 0 && (d = t.virtual.slides.length + d),
        d >= t.virtual.slides.length && (d -= t.virtual.slides.length),
        (l = a(`[data-swiper-slide-index="${d}"]`)));
    } else l = a(`[data-swiper-slide-index="${i}"]`);
  else
    o
      ? ((l = e.filter((d) => d.column === i)[0]),
        (c = e.filter((d) => d.column === i + 1)[0]),
        (u = e.filter((d) => d.column === i - 1)[0]))
      : (l = e[i]);
  (l &&
    (o ||
      ((c = zg(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c && (c = e[0]),
      (u = Fg(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u === 0 && (u = e[e.length - 1]))),
    e.forEach((d) => {
      (or(d, d === l, n.slideActiveClass),
        or(d, d === c, n.slideNextClass),
        or(d, d === u, n.slidePrevClass));
    }),
    t.emitSlidesClasses());
}
const ii = (t, e) => {
    if (!t || t.destroyed || !t.params) return;
    const n = () => (t.isElement ? "swiper-slide" : `.${t.params.slideClass}`),
      s = e.closest(n());
    if (s) {
      let i = s.querySelector(`.${t.params.lazyPreloaderClass}`);
      (!i &&
        t.isElement &&
        (s.shadowRoot
          ? (i = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot &&
                ((i = s.shadowRoot.querySelector(
                  `.${t.params.lazyPreloaderClass}`,
                )),
                i && i.remove());
            })),
        i && i.remove());
    }
  },
  ar = (t, e) => {
    if (!t.slides[e]) return;
    const n = t.slides[e].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  Ur = (t) => {
    if (!t || t.destroyed || !t.params) return;
    let e = t.params.lazyPreloadPrevNext;
    const n = t.slides.length;
    if (!n || !e || e < 0) return;
    e = Math.min(e, n);
    const s =
        t.params.slidesPerView === "auto"
          ? t.slidesPerViewDynamic()
          : Math.ceil(t.params.slidesPerView),
      i = t.activeIndex;
    if (t.params.grid && t.params.grid.rows > 1) {
      const o = i,
        a = [o - e];
      (a.push(...Array.from({ length: e }).map((l, u) => o + s + u)),
        t.slides.forEach((l, u) => {
          a.includes(l.column) && ar(t, u);
        }));
      return;
    }
    const r = i + s - 1;
    if (t.params.rewind || t.params.loop)
      for (let o = i - e; o <= r + e; o += 1) {
        const a = ((o % n) + n) % n;
        (a < i || a > r) && ar(t, a);
      }
    else
      for (let o = Math.max(i - e, 0); o <= Math.min(r + e, n - 1); o += 1)
        o !== i && (o > r || o < i) && ar(t, o);
  };
function rv(t) {
  const { slidesGrid: e, params: n } = t,
    s = t.rtlTranslate ? t.translate : -t.translate;
  let i;
  for (let r = 0; r < e.length; r += 1)
    typeof e[r + 1] != "undefined"
      ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2
        ? (i = r)
        : s >= e[r] && s < e[r + 1] && (i = r + 1)
      : s >= e[r] && (i = r);
  return (
    n.normalizeSlideIndex && (i < 0 || typeof i == "undefined") && (i = 0),
    i
  );
}
function ov(t) {
  const e = this,
    n = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: s, params: i, activeIndex: r, realIndex: o, snapIndex: a } = e;
  let l = t,
    u;
  const c = (f) => {
    let g = f - e.virtual.slidesBefore;
    return (
      g < 0 && (g = e.virtual.slides.length + g),
      g >= e.virtual.slides.length && (g -= e.virtual.slides.length),
      g
    );
  };
  if ((typeof l == "undefined" && (l = rv(e)), s.indexOf(n) >= 0))
    u = s.indexOf(n);
  else {
    const f = Math.min(i.slidesPerGroupSkip, l);
    u = f + Math.floor((l - f) / i.slidesPerGroup);
  }
  if ((u >= s.length && (u = s.length - 1), l === r && !e.params.loop)) {
    u !== a && ((e.snapIndex = u), e.emit("snapIndexChange"));
    return;
  }
  if (l === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = c(l);
    return;
  }
  const d = e.grid && i.grid && i.grid.rows > 1;
  let p;
  if (e.virtual && i.virtual.enabled && i.loop) p = c(l);
  else if (d) {
    const f = e.slides.filter((v) => v.column === l)[0];
    let g = parseInt(f.getAttribute("data-swiper-slide-index"), 10);
    (Number.isNaN(g) && (g = Math.max(e.slides.indexOf(f), 0)),
      (p = Math.floor(g / i.grid.rows)));
  } else if (e.slides[l]) {
    const f = e.slides[l].getAttribute("data-swiper-slide-index");
    f ? (p = parseInt(f, 10)) : (p = l);
  } else p = l;
  (Object.assign(e, {
    previousSnapIndex: a,
    snapIndex: u,
    previousRealIndex: o,
    realIndex: p,
    previousIndex: r,
    activeIndex: l,
  }),
    e.initialized && Ur(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) &&
      (o !== p && e.emit("realIndexChange"), e.emit("slideChange")));
}
function av(t, e) {
  const n = this,
    s = n.params;
  let i = t.closest(`.${s.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    e &&
    e.length > 1 &&
    e.includes(t) &&
    [...e.slice(e.indexOf(t) + 1, e.length)].forEach((a) => {
      !i && a.matches && a.matches(`.${s.slideClass}, swiper-slide`) && (i = a);
    });
  let r = !1,
    o;
  if (i) {
    for (let a = 0; a < n.slides.length; a += 1)
      if (n.slides[a] === i) {
        ((r = !0), (o = a));
        break;
      }
  }
  if (i && r)
    ((n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10,
          ))
        : (n.clickedIndex = o));
  else {
    ((n.clickedSlide = void 0), (n.clickedIndex = void 0));
    return;
  }
  s.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var lv = {
  updateSize: Jg,
  updateSlides: Zg,
  updateAutoHeight: ev,
  updateSlidesOffset: tv,
  updateSlidesProgress: nv,
  updateProgress: sv,
  updateSlidesClasses: iv,
  updateActiveIndex: ov,
  updateClickedSlide: av,
};
function cv(t) {
  t === void 0 && (t = this.isHorizontal() ? "x" : "y");
  const e = this,
    { params: n, rtlTranslate: s, translate: i, wrapperEl: r } = e;
  if (n.virtualTranslate) return s ? -i : i;
  if (n.cssMode) return i;
  let o = Bg(r, t);
  return ((o += e.cssOverflowAdjustment()), s && (o = -o), o || 0);
}
function uv(t, e) {
  const n = this,
    { rtlTranslate: s, params: i, wrapperEl: r, progress: o } = n;
  let a = 0,
    l = 0;
  const u = 0;
  (n.isHorizontal() ? (a = s ? -t : t) : (l = t),
    i.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : l),
    i.cssMode
      ? (r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -a
          : -l)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (a -= n.cssOverflowAdjustment())
          : (l -= n.cssOverflowAdjustment()),
        (r.style.transform = `translate3d(${a}px, ${l}px, ${u}px)`)));
  let c;
  const d = n.maxTranslate() - n.minTranslate();
  (d === 0 ? (c = 0) : (c = (t - n.minTranslate()) / d),
    c !== o && n.updateProgress(t),
    n.emit("setTranslate", n.translate, e));
}
function dv() {
  return -this.snapGrid[0];
}
function fv() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function pv(t, e, n, s, i) {
  (t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    n === void 0 && (n = !0),
    s === void 0 && (s = !0));
  const r = this,
    { params: o, wrapperEl: a } = r;
  if (r.animating && o.preventInteractionOnTransition) return !1;
  const l = r.minTranslate(),
    u = r.maxTranslate();
  let c;
  if (
    (s && t > l ? (c = l) : s && t < u ? (c = u) : (c = t),
    r.updateProgress(c),
    o.cssMode)
  ) {
    const d = r.isHorizontal();
    if (e === 0) a[d ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!r.support.smoothScroll)
        return (
          bu({ swiper: r, targetPosition: -c, side: d ? "left" : "top" }),
          !0
        );
      a.scrollTo({ [d ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (r.setTransition(0),
        r.setTranslate(c),
        n && (r.emit("beforeTransitionStart", e, i), r.emit("transitionEnd")))
      : (r.setTransition(e),
        r.setTranslate(c),
        n && (r.emit("beforeTransitionStart", e, i), r.emit("transitionStart")),
        r.animating ||
          ((r.animating = !0),
          r.onTranslateToWrapperTransitionEnd ||
            (r.onTranslateToWrapperTransitionEnd = function (p) {
              !r ||
                r.destroyed ||
                (p.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd,
                  ),
                  (r.onTranslateToWrapperTransitionEnd = null),
                  delete r.onTranslateToWrapperTransitionEnd,
                  (r.animating = !1),
                  n && r.emit("transitionEnd")));
            }),
          r.wrapperEl.addEventListener(
            "transitionend",
            r.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  );
}
var hv = {
  getTranslate: cv,
  setTranslate: uv,
  minTranslate: dv,
  maxTranslate: fv,
  translateTo: pv,
};
function mv(t, e) {
  const n = this;
  (n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${t}ms`),
    (n.wrapperEl.style.transitionDelay = t === 0 ? "0ms" : "")),
    n.emit("setTransition", t, e));
}
function Su(t) {
  let { swiper: e, runCallbacks: n, direction: s, step: i } = t;
  const { activeIndex: r, previousIndex: o } = e;
  let a = s;
  if (
    (a || (r > o ? (a = "next") : r < o ? (a = "prev") : (a = "reset")),
    e.emit(`transition${i}`),
    n && r !== o)
  ) {
    if (a === "reset") {
      e.emit(`slideResetTransition${i}`);
      return;
    }
    (e.emit(`slideChangeTransition${i}`),
      a === "next"
        ? e.emit(`slideNextTransition${i}`)
        : e.emit(`slidePrevTransition${i}`));
  }
}
function gv(t, e) {
  t === void 0 && (t = !0);
  const n = this,
    { params: s } = n;
  s.cssMode ||
    (s.autoHeight && n.updateAutoHeight(),
    Su({ swiper: n, runCallbacks: t, direction: e, step: "Start" }));
}
function vv(t, e) {
  t === void 0 && (t = !0);
  const n = this,
    { params: s } = n;
  ((n.animating = !1),
    !s.cssMode &&
      (n.setTransition(0),
      Su({ swiper: n, runCallbacks: t, direction: e, step: "End" })));
}
var _v = { setTransition: mv, transitionStart: gv, transitionEnd: vv };
function Ev(t, e, n, s, i) {
  (t === void 0 && (t = 0),
    n === void 0 && (n = !0),
    typeof t == "string" && (t = parseInt(t, 10)));
  const r = this;
  let o = t;
  o < 0 && (o = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: p,
    wrapperEl: f,
    enabled: g,
  } = r;
  if (
    (!g && !s && !i) ||
    r.destroyed ||
    (r.animating && a.preventInteractionOnTransition)
  )
    return !1;
  typeof e == "undefined" && (e = r.params.speed);
  const v = Math.min(r.params.slidesPerGroupSkip, o);
  let S = v + Math.floor((o - v) / r.params.slidesPerGroup);
  S >= l.length && (S = l.length - 1);
  const E = -l[S];
  if (a.normalizeSlideIndex)
    for (let A = 0; A < u.length; A += 1) {
      const D = -Math.floor(E * 100),
        G = Math.floor(u[A] * 100),
        j = Math.floor(u[A + 1] * 100);
      typeof u[A + 1] != "undefined"
        ? D >= G && D < j - (j - G) / 2
          ? (o = A)
          : D >= G && D < j && (o = A + 1)
        : D >= G && (o = A);
    }
  if (
    r.initialized &&
    o !== d &&
    ((!r.allowSlideNext &&
      (p
        ? E > r.translate && E > r.minTranslate()
        : E < r.translate && E < r.minTranslate())) ||
      (!r.allowSlidePrev &&
        E > r.translate &&
        E > r.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1;
  (o !== (c || 0) && n && r.emit("beforeSlideChangeStart"),
    r.updateProgress(E));
  let y;
  o > d ? (y = "next") : o < d ? (y = "prev") : (y = "reset");
  const b = r.virtual && r.params.virtual.enabled;
  if (!(b && i) && ((p && -E === r.translate) || (!p && E === r.translate)))
    return (
      r.updateActiveIndex(o),
      a.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      a.effect !== "slide" && r.setTranslate(E),
      y !== "reset" && (r.transitionStart(n, y), r.transitionEnd(n, y)),
      !1
    );
  if (a.cssMode) {
    const A = r.isHorizontal(),
      D = p ? E : -E;
    if (e === 0)
      (b &&
        ((r.wrapperEl.style.scrollSnapType = "none"),
        (r._immediateVirtual = !0)),
        b && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
          ? ((r._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              f[A ? "scrollLeft" : "scrollTop"] = D;
            }))
          : (f[A ? "scrollLeft" : "scrollTop"] = D),
        b &&
          requestAnimationFrame(() => {
            ((r.wrapperEl.style.scrollSnapType = ""),
              (r._immediateVirtual = !1));
          }));
    else {
      if (!r.support.smoothScroll)
        return (
          bu({ swiper: r, targetPosition: D, side: A ? "left" : "top" }),
          !0
        );
      f.scrollTo({ [A ? "left" : "top"]: D, behavior: "smooth" });
    }
    return !0;
  }
  return (
    r.setTransition(e),
    r.setTranslate(E),
    r.updateActiveIndex(o),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", e, s),
    r.transitionStart(n, y),
    e === 0
      ? r.transitionEnd(n, y)
      : r.animating ||
        ((r.animating = !0),
        r.onSlideToWrapperTransitionEnd ||
          (r.onSlideToWrapperTransitionEnd = function (D) {
            !r ||
              r.destroyed ||
              (D.target === this &&
                (r.wrapperEl.removeEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd,
                ),
                (r.onSlideToWrapperTransitionEnd = null),
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(n, y)));
          }),
        r.wrapperEl.addEventListener(
          "transitionend",
          r.onSlideToWrapperTransitionEnd,
        )),
    !0
  );
}
function bv(t, e, n, s) {
  (t === void 0 && (t = 0),
    n === void 0 && (n = !0),
    typeof t == "string" && (t = parseInt(t, 10)));
  const i = this;
  if (i.destroyed) return;
  typeof e == "undefined" && (e = i.params.speed);
  const r = i.grid && i.params.grid && i.params.grid.rows > 1;
  let o = t;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) o = o + i.virtual.slidesBefore;
    else {
      let a;
      if (r) {
        const p = o * i.params.grid.rows;
        a = i.slides.filter(
          (f) => f.getAttribute("data-swiper-slide-index") * 1 === p,
        )[0].column;
      } else a = i.getSlideIndexByData(o);
      const l = r
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: u } = i.params;
      let c = i.params.slidesPerView;
      c === "auto"
        ? (c = i.slidesPerViewDynamic())
        : ((c = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          u && c % 2 === 0 && (c = c + 1));
      let d = l - a < c;
      if (
        (u && (d = d || a < Math.ceil(c / 2)),
        s && u && i.params.slidesPerView !== "auto" && !r && (d = !1),
        d)
      ) {
        const p = u
          ? a < i.activeIndex
            ? "prev"
            : "next"
          : a - i.activeIndex - 1 < i.params.slidesPerView
            ? "next"
            : "prev";
        i.loopFix({
          direction: p,
          slideTo: !0,
          activeSlideIndex: p === "next" ? a + 1 : a - l + 1,
          slideRealIndex: p === "next" ? i.realIndex : void 0,
        });
      }
      if (r) {
        const p = o * i.params.grid.rows;
        o = i.slides.filter(
          (f) => f.getAttribute("data-swiper-slide-index") * 1 === p,
        )[0].column;
      } else o = i.getSlideIndexByData(o);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(o, e, n, s);
    }),
    i
  );
}
function wv(t, e, n) {
  e === void 0 && (e = !0);
  const s = this,
    { enabled: i, params: r, animating: o } = s;
  if (!i || s.destroyed) return s;
  typeof t == "undefined" && (t = s.params.speed);
  let a = r.slidesPerGroup;
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const l = s.activeIndex < r.slidesPerGroupSkip ? 1 : a,
    u = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (o && !u && r.loopPreventsSliding) return !1;
    if (
      (s.loopFix({ direction: "next" }),
      (s._clientLeft = s.wrapperEl.clientLeft),
      s.activeIndex === s.slides.length - 1 && r.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + l, t, e, n);
        }),
        !0
      );
  }
  return r.rewind && s.isEnd
    ? s.slideTo(0, t, e, n)
    : s.slideTo(s.activeIndex + l, t, e, n);
}
function yv(t, e, n) {
  e === void 0 && (e = !0);
  const s = this,
    {
      params: i,
      snapGrid: r,
      slidesGrid: o,
      rtlTranslate: a,
      enabled: l,
      animating: u,
    } = s;
  if (!l || s.destroyed) return s;
  typeof t == "undefined" && (t = s.params.speed);
  const c = s.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !c && i.loopPreventsSliding) return !1;
    (s.loopFix({ direction: "prev" }),
      (s._clientLeft = s.wrapperEl.clientLeft));
  }
  const d = a ? s.translate : -s.translate;
  function p(E) {
    return E < 0 ? -Math.floor(Math.abs(E)) : Math.floor(E);
  }
  const f = p(d),
    g = r.map((E) => p(E));
  let v = r[g.indexOf(f) - 1];
  if (typeof v == "undefined" && i.cssMode) {
    let E;
    (r.forEach((y, b) => {
      f >= y && (E = b);
    }),
      typeof E != "undefined" && (v = r[E > 0 ? E - 1 : E]));
  }
  let S = 0;
  if (
    (typeof v != "undefined" &&
      ((S = o.indexOf(v)),
      S < 0 && (S = s.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((S = S - s.slidesPerViewDynamic("previous", !0) + 1),
        (S = Math.max(S, 0)))),
    i.rewind && s.isBeginning)
  ) {
    const E =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1;
    return s.slideTo(E, t, e, n);
  } else if (i.loop && s.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(S, t, e, n);
      }),
      !0
    );
  return s.slideTo(S, t, e, n);
}
function Sv(t, e, n) {
  e === void 0 && (e = !0);
  const s = this;
  if (!s.destroyed)
    return (
      typeof t == "undefined" && (t = s.params.speed),
      s.slideTo(s.activeIndex, t, e, n)
    );
}
function Tv(t, e, n, s) {
  (e === void 0 && (e = !0), s === void 0 && (s = 0.5));
  const i = this;
  if (i.destroyed) return;
  typeof t == "undefined" && (t = i.params.speed);
  let r = i.activeIndex;
  const o = Math.min(i.params.slidesPerGroupSkip, r),
    a = o + Math.floor((r - o) / i.params.slidesPerGroup),
    l = i.rtlTranslate ? i.translate : -i.translate;
  if (l >= i.snapGrid[a]) {
    const u = i.snapGrid[a],
      c = i.snapGrid[a + 1];
    l - u > (c - u) * s && (r += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[a - 1],
      c = i.snapGrid[a];
    l - u <= (c - u) * s && (r -= i.params.slidesPerGroup);
  }
  return (
    (r = Math.max(r, 0)),
    (r = Math.min(r, i.slidesGrid.length - 1)),
    i.slideTo(r, t, e, n)
  );
}
function Av() {
  const t = this;
  if (t.destroyed) return;
  const { params: e, slidesEl: n } = t,
    s = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
  let i = t.clickedIndex,
    r;
  const o = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (t.animating) return;
    ((r = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? i < t.loopedSlides - s / 2 ||
          i > t.slides.length - t.loopedSlides + s / 2
          ? (t.loopFix(),
            (i = t.getSlideIndex(
              $t(n, `${o}[data-swiper-slide-index="${r}"]`)[0],
            )),
            Gr(() => {
              t.slideTo(i);
            }))
          : t.slideTo(i)
        : i > t.slides.length - s
          ? (t.loopFix(),
            (i = t.getSlideIndex(
              $t(n, `${o}[data-swiper-slide-index="${r}"]`)[0],
            )),
            Gr(() => {
              t.slideTo(i);
            }))
          : t.slideTo(i));
  } else t.slideTo(i);
}
var xv = {
  slideTo: Ev,
  slideToLoop: bv,
  slideNext: wv,
  slidePrev: yv,
  slideReset: Sv,
  slideToClosest: Tv,
  slideToClickedSlide: Av,
};
function Cv(t) {
  const e = this,
    { params: n, slidesEl: s } = e;
  if (!n.loop || (e.virtual && e.params.virtual.enabled)) return;
  const i = () => {
      $t(s, `.${n.slideClass}, swiper-slide`).forEach((d, p) => {
        d.setAttribute("data-swiper-slide-index", p);
      });
    },
    r = e.grid && n.grid && n.grid.rows > 1,
    o = n.slidesPerGroup * (r ? n.grid.rows : 1),
    a = e.slides.length % o !== 0,
    l = r && e.slides.length % n.grid.rows !== 0,
    u = (c) => {
      for (let d = 0; d < c; d += 1) {
        const p = e.isElement
          ? Wr("swiper-slide", [n.slideBlankClass])
          : Wr("div", [n.slideClass, n.slideBlankClass]);
        e.slidesEl.append(p);
      }
    };
  if (a) {
    if (n.loopAddBlankSlides) {
      const c = o - (e.slides.length % o);
      (u(c), e.recalcSlides(), e.updateSlides());
    } else
      vi(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      );
    i();
  } else if (l) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (e.slides.length % n.grid.rows);
      (u(c), e.recalcSlides(), e.updateSlides());
    } else
      vi(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      );
    i();
  } else i();
  e.loopFix({
    slideRealIndex: t,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function Ov(t) {
  let {
    slideRealIndex: e,
    slideTo: n = !0,
    direction: s,
    setTranslate: i,
    activeSlideIndex: r,
    byController: o,
    byMousewheel: a,
  } = t === void 0 ? {} : t;
  const l = this;
  if (!l.params.loop) return;
  l.emit("beforeLoopFix");
  const {
      slides: u,
      allowSlidePrev: c,
      allowSlideNext: d,
      slidesEl: p,
      params: f,
    } = l,
    { centeredSlides: g } = f;
  if (
    ((l.allowSlidePrev = !0),
    (l.allowSlideNext = !0),
    l.virtual && f.virtual.enabled)
  ) {
    (n &&
      (!f.centeredSlides && l.snapIndex === 0
        ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
        : f.centeredSlides && l.snapIndex < f.slidesPerView
          ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
          : l.snapIndex === l.snapGrid.length - 1 &&
            l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
      (l.allowSlidePrev = c),
      (l.allowSlideNext = d),
      l.emit("loopFix"));
    return;
  }
  let v = f.slidesPerView;
  v === "auto"
    ? (v = l.slidesPerViewDynamic())
    : ((v = Math.ceil(parseFloat(f.slidesPerView, 10))),
      g && v % 2 === 0 && (v = v + 1));
  const S = f.slidesPerGroupAuto ? v : f.slidesPerGroup;
  let E = S;
  (E % S !== 0 && (E += S - (E % S)),
    (E += f.loopAdditionalSlides),
    (l.loopedSlides = E));
  const y = l.grid && f.grid && f.grid.rows > 1;
  u.length < v + E
    ? vi(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
      )
    : y &&
      f.grid.fill === "row" &&
      vi(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
      );
  const b = [],
    w = [];
  let A = l.activeIndex;
  typeof r == "undefined"
    ? (r = l.getSlideIndex(
        u.filter((z) => z.classList.contains(f.slideActiveClass))[0],
      ))
    : (A = r);
  const D = s === "next" || !s,
    G = s === "prev" || !s;
  let j = 0,
    N = 0;
  const P = y ? Math.ceil(u.length / f.grid.rows) : u.length,
    K =
      (y ? u[r].column : r) + (g && typeof i == "undefined" ? -v / 2 + 0.5 : 0);
  if (K < E) {
    j = Math.max(E - K, S);
    for (let z = 0; z < E - K; z += 1) {
      const oe = z - Math.floor(z / P) * P;
      if (y) {
        const de = P - oe - 1;
        for (let se = u.length - 1; se >= 0; se -= 1)
          u[se].column === de && b.push(se);
      } else b.push(P - oe - 1);
    }
  } else if (K + v > P - E) {
    N = Math.max(K - (P - E * 2), S);
    for (let z = 0; z < N; z += 1) {
      const oe = z - Math.floor(z / P) * P;
      y
        ? u.forEach((de, se) => {
            de.column === oe && w.push(se);
          })
        : w.push(oe);
    }
  }
  if (
    ((l.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      l.__preventObserver__ = !1;
    }),
    G &&
      b.forEach((z) => {
        ((u[z].swiperLoopMoveDOM = !0),
          p.prepend(u[z]),
          (u[z].swiperLoopMoveDOM = !1));
      }),
    D &&
      w.forEach((z) => {
        ((u[z].swiperLoopMoveDOM = !0),
          p.append(u[z]),
          (u[z].swiperLoopMoveDOM = !1));
      }),
    l.recalcSlides(),
    f.slidesPerView === "auto"
      ? l.updateSlides()
      : y &&
        ((b.length > 0 && G) || (w.length > 0 && D)) &&
        l.slides.forEach((z, oe) => {
          l.grid.updateSlide(oe, z, l.slides);
        }),
    f.watchSlidesProgress && l.updateSlidesOffset(),
    n)
  ) {
    if (b.length > 0 && G) {
      if (typeof e == "undefined") {
        const z = l.slidesGrid[A],
          de = l.slidesGrid[A + j] - z;
        a
          ? l.setTranslate(l.translate - de)
          : (l.slideTo(A + Math.ceil(j), 0, !1, !0),
            i &&
              ((l.touchEventsData.startTranslate =
                l.touchEventsData.startTranslate - de),
              (l.touchEventsData.currentTranslate =
                l.touchEventsData.currentTranslate - de)));
      } else if (i) {
        const z = y ? b.length / f.grid.rows : b.length;
        (l.slideTo(l.activeIndex + z, 0, !1, !0),
          (l.touchEventsData.currentTranslate = l.translate));
      }
    } else if (w.length > 0 && D)
      if (typeof e == "undefined") {
        const z = l.slidesGrid[A],
          de = l.slidesGrid[A - N] - z;
        a
          ? l.setTranslate(l.translate - de)
          : (l.slideTo(A - N, 0, !1, !0),
            i &&
              ((l.touchEventsData.startTranslate =
                l.touchEventsData.startTranslate - de),
              (l.touchEventsData.currentTranslate =
                l.touchEventsData.currentTranslate - de)));
      } else {
        const z = y ? w.length / f.grid.rows : w.length;
        l.slideTo(l.activeIndex - z, 0, !1, !0);
      }
  }
  if (
    ((l.allowSlidePrev = c),
    (l.allowSlideNext = d),
    l.controller && l.controller.control && !o)
  ) {
    const z = {
      slideRealIndex: e,
      direction: s,
      setTranslate: i,
      activeSlideIndex: r,
      byController: !0,
    };
    Array.isArray(l.controller.control)
      ? l.controller.control.forEach((oe) => {
          !oe.destroyed &&
            oe.params.loop &&
            oe.loopFix({
              ...z,
              slideTo: oe.params.slidesPerView === f.slidesPerView ? n : !1,
            });
        })
      : l.controller.control instanceof l.constructor &&
        l.controller.control.params.loop &&
        l.controller.control.loopFix({
          ...z,
          slideTo:
            l.controller.control.params.slidesPerView === f.slidesPerView
              ? n
              : !1,
        });
  }
  l.emit("loopFix");
}
function Pv() {
  const t = this,
    { params: e, slidesEl: n } = t;
  if (!e.loop || (t.virtual && t.params.virtual.enabled)) return;
  t.recalcSlides();
  const s = [];
  (t.slides.forEach((i) => {
    const r =
      typeof i.swiperSlideIndex == "undefined"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    s[r] = i;
  }),
    t.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    s.forEach((i) => {
      n.append(i);
    }),
    t.recalcSlides(),
    t.slideTo(t.realIndex, 0));
}
var Iv = { loopCreate: Cv, loopFix: Ov, loopDestroy: Pv };
function Lv(t) {
  const e = this;
  if (
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const n = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  (e.isElement && (e.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = t ? "grabbing" : "grab"),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
function Mv() {
  const t = this;
  (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode ||
    (t.isElement && (t.__preventObserver__ = !0),
    (t[
      t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      }));
}
var Nv = { setGrabCursor: Lv, unsetGrabCursor: Mv };
function Dv(t, e) {
  e === void 0 && (e = this);
  function n(s) {
    if (!s || s === ts() || s === st()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const i = s.closest(t);
    return !i && !s.getRootNode ? null : i || n(s.getRootNode().host);
  }
  return n(e);
}
function Ja(t, e, n) {
  const s = st(),
    { params: i } = t,
    r = i.edgeSwipeDetection,
    o = i.edgeSwipeThreshold;
  return r && (n <= o || n >= s.innerWidth - o)
    ? r === "prevent"
      ? (e.preventDefault(), !0)
      : !1
    : !0;
}
function $v(t) {
  const e = this,
    n = ts();
  let s = t;
  s.originalEvent && (s = s.originalEvent);
  const i = e.touchEventsData;
  if (s.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== s.pointerId) return;
    i.pointerId = s.pointerId;
  } else
    s.type === "touchstart" &&
      s.targetTouches.length === 1 &&
      (i.touchId = s.targetTouches[0].identifier);
  if (s.type === "touchstart") {
    Ja(e, s, s.targetTouches[0].pageX);
    return;
  }
  const { params: r, touches: o, enabled: a } = e;
  if (
    !a ||
    (!r.simulateTouch && s.pointerType === "mouse") ||
    (e.animating && r.preventInteractionOnTransition)
  )
    return;
  !e.animating && r.cssMode && r.loop && e.loopFix();
  let l = s.target;
  if (
    (r.touchEventsTarget === "wrapper" && !Hg(l, e.wrapperEl)) ||
    ("which" in s && s.which === 3) ||
    ("button" in s && s.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const u = !!r.noSwipingClass && r.noSwipingClass !== "",
    c = s.composedPath ? s.composedPath() : s.path;
  u && s.target && s.target.shadowRoot && c && (l = c[0]);
  const d = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    p = !!(s.target && s.target.shadowRoot);
  if (r.noSwiping && (p ? Dv(d, l) : l.closest(d))) {
    e.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !l.closest(r.swipeHandler)) return;
  ((o.currentX = s.pageX), (o.currentY = s.pageY));
  const f = o.currentX,
    g = o.currentY;
  if (!Ja(e, s, f)) return;
  (Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = f),
    (o.startY = g),
    (i.touchStartTime = gi()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    r.threshold > 0 && (i.allowThresholdMove = !1));
  let v = !0;
  (l.matches(i.focusableElements) &&
    ((v = !1), l.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== l &&
      (s.pointerType === "mouse" ||
        (s.pointerType !== "mouse" && !l.matches(i.focusableElements))) &&
      n.activeElement.blur());
  const S = v && e.allowTouchMove && r.touchStartPreventDefault;
  ((r.touchStartForcePreventDefault || S) &&
    !l.isContentEditable &&
    s.preventDefault(),
    r.freeMode &&
      r.freeMode.enabled &&
      e.freeMode &&
      e.animating &&
      !r.cssMode &&
      e.freeMode.onTouchStart(),
    e.emit("touchStart", s));
}
function Rv(t) {
  const e = ts(),
    n = this,
    s = n.touchEventsData,
    { params: i, touches: r, rtlTranslate: o, enabled: a } = n;
  if (!a || (!i.simulateTouch && t.pointerType === "mouse")) return;
  let l = t;
  if (
    (l.originalEvent && (l = l.originalEvent),
    l.type === "pointermove" &&
      (s.touchId !== null || l.pointerId !== s.pointerId))
  )
    return;
  let u;
  if (l.type === "touchmove") {
    if (
      ((u = [...l.changedTouches].filter((D) => D.identifier === s.touchId)[0]),
      !u || u.identifier !== s.touchId)
    )
      return;
  } else u = l;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && n.emit("touchMoveOpposite", l);
    return;
  }
  const c = u.pageX,
    d = u.pageY;
  if (l.preventedByNestedSwiper) {
    ((r.startX = c), (r.startY = d));
    return;
  }
  if (!n.allowTouchMove) {
    (l.target.matches(s.focusableElements) || (n.allowClick = !1),
      s.isTouched &&
        (Object.assign(r, { startX: c, startY: d, currentX: c, currentY: d }),
        (s.touchStartTime = gi())));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (d < r.startY && n.translate <= n.maxTranslate()) ||
        (d > r.startY && n.translate >= n.minTranslate())
      ) {
        ((s.isTouched = !1), (s.isMoved = !1));
        return;
      }
    } else if (
      (c < r.startX && n.translate <= n.maxTranslate()) ||
      (c > r.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    (e.activeElement &&
      e.activeElement.matches(s.focusableElements) &&
      e.activeElement !== l.target &&
      l.pointerType !== "mouse" &&
      e.activeElement.blur(),
    e.activeElement &&
      l.target === e.activeElement &&
      l.target.matches(s.focusableElements))
  ) {
    ((s.isMoved = !0), (n.allowClick = !1));
    return;
  }
  (s.allowTouchCallbacks && n.emit("touchMove", l),
    (r.previousX = r.currentX),
    (r.previousY = r.currentY),
    (r.currentX = c),
    (r.currentY = d));
  const p = r.currentX - r.startX,
    f = r.currentY - r.startY;
  if (n.params.threshold && Math.sqrt(p ** 2 + f ** 2) < n.params.threshold)
    return;
  if (typeof s.isScrolling == "undefined") {
    let D;
    (n.isHorizontal() && r.currentY === r.startY) ||
    (n.isVertical() && r.currentX === r.startX)
      ? (s.isScrolling = !1)
      : p * p + f * f >= 25 &&
        ((D = (Math.atan2(Math.abs(f), Math.abs(p)) * 180) / Math.PI),
        (s.isScrolling = n.isHorizontal()
          ? D > i.touchAngle
          : 90 - D > i.touchAngle));
  }
  if (
    (s.isScrolling && n.emit("touchMoveOpposite", l),
    typeof s.startMoving == "undefined" &&
      (r.currentX !== r.startX || r.currentY !== r.startY) &&
      (s.startMoving = !0),
    s.isScrolling ||
      (l.type === "touchmove" && s.preventTouchMoveFromPointerMove))
  ) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving) return;
  ((n.allowClick = !1),
    !i.cssMode && l.cancelable && l.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && l.stopPropagation());
  let g = n.isHorizontal() ? p : f,
    v = n.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  (i.oneWayMovement &&
    ((g = Math.abs(g) * (o ? 1 : -1)), (v = Math.abs(v) * (o ? 1 : -1))),
    (r.diff = g),
    (g *= i.touchRatio),
    o && ((g = -g), (v = -v)));
  const S = n.touchesDirection;
  ((n.swipeDirection = g > 0 ? "prev" : "next"),
    (n.touchesDirection = v > 0 ? "prev" : "next"));
  const E = n.params.loop && !i.cssMode,
    y =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!s.isMoved) {
    if (
      (E && y && n.loopFix({ direction: n.swipeDirection }),
      (s.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const D = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      n.wrapperEl.dispatchEvent(D);
    }
    ((s.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", l));
  }
  let b;
  if (
    (new Date().getTime(),
    s.isMoved &&
      s.allowThresholdMove &&
      S !== n.touchesDirection &&
      E &&
      y &&
      Math.abs(g) >= 1)
  ) {
    (Object.assign(r, {
      startX: c,
      startY: d,
      currentX: c,
      currentY: d,
      startTranslate: s.currentTranslate,
    }),
      (s.loopSwapReset = !0),
      (s.startTranslate = s.currentTranslate));
    return;
  }
  (n.emit("sliderMove", l),
    (s.isMoved = !0),
    (s.currentTranslate = g + s.startTranslate));
  let w = !0,
    A = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (A = 0),
    g > 0
      ? (E &&
          y &&
          !b &&
          s.allowThresholdMove &&
          s.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() -
                n.slidesSizesGrid[n.activeIndex + 1] -
                (i.slidesPerView !== "auto" &&
                n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween
                  : 0) -
                n.params.spaceBetween
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        s.currentTranslate > n.minTranslate() &&
          ((w = !1),
          i.resistance &&
            (s.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + s.startTranslate + g) ** A)))
      : g < 0 &&
        (E &&
          y &&
          !b &&
          s.allowThresholdMove &&
          s.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                n.params.spaceBetween +
                (i.slidesPerView !== "auto" &&
                n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                    n.params.spaceBetween
                  : 0)
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        s.currentTranslate < n.maxTranslate() &&
          ((w = !1),
          i.resistance &&
            (s.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - s.startTranslate - g) ** A))),
    w && (l.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (s.currentTranslate = s.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(g) > i.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        ((s.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (s.currentTranslate = s.startTranslate),
          (r.diff = n.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY));
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(s.currentTranslate),
    n.setTranslate(s.currentTranslate));
}
function kv(t) {
  const e = this,
    n = e.touchEventsData;
  let s = t;
  s.originalEvent && (s = s.originalEvent);
  let i;
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (
      ((i = [...s.changedTouches].filter((A) => A.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || s.pointerId !== n.pointerId) return;
    i = s;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      s.type,
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(s.type) &&
      (e.browser.isSafari || e.browser.isWebView)
    )
  )
    return;
  ((n.pointerId = null), (n.touchId = null));
  const {
    params: o,
    touches: a,
    rtlTranslate: l,
    slidesGrid: u,
    enabled: c,
  } = e;
  if (!c || (!o.simulateTouch && s.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && e.emit("touchEnd", s),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    (n.isMoved && o.grabCursor && e.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1));
    return;
  }
  o.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const d = gi(),
    p = d - n.touchStartTime;
  if (e.allowClick) {
    const A = s.path || (s.composedPath && s.composedPath());
    (e.updateClickedSlide((A && A[0]) || s.target, A),
      e.emit("tap click", s),
      p < 300 &&
        d - n.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", s));
  }
  if (
    ((n.lastClickTime = gi()),
    Gr(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !e.swipeDirection ||
      (a.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    ((n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1));
    return;
  }
  ((n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1));
  let f;
  if (
    (o.followFinger
      ? (f = l ? e.translate : -e.translate)
      : (f = -n.currentTranslate),
    o.cssMode)
  )
    return;
  if (o.freeMode && o.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: f });
    return;
  }
  const g = f >= -e.maxTranslate() && !e.params.loop;
  let v = 0,
    S = e.slidesSizesGrid[0];
  for (
    let A = 0;
    A < u.length;
    A += A < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const D = A < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof u[A + D] != "undefined"
      ? (g || (f >= u[A] && f < u[A + D])) && ((v = A), (S = u[A + D] - u[A]))
      : (g || f >= u[A]) && ((v = A), (S = u[u.length - 1] - u[u.length - 2]));
  }
  let E = null,
    y = null;
  o.rewind &&
    (e.isBeginning
      ? (y =
          o.virtual && o.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (E = 0));
  const b = (f - u[v]) / S,
    w = v < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (p > o.longSwipesMs) {
    if (!o.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    (e.swipeDirection === "next" &&
      (b >= o.longSwipesRatio
        ? e.slideTo(o.rewind && e.isEnd ? E : v + w)
        : e.slideTo(v)),
      e.swipeDirection === "prev" &&
        (b > 1 - o.longSwipesRatio
          ? e.slideTo(v + w)
          : y !== null && b < 0 && Math.abs(b) > o.longSwipesRatio
            ? e.slideTo(y)
            : e.slideTo(v)));
  } else {
    if (!o.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl)
      ? s.target === e.navigation.nextEl
        ? e.slideTo(v + w)
        : e.slideTo(v)
      : (e.swipeDirection === "next" && e.slideTo(E !== null ? E : v + w),
        e.swipeDirection === "prev" && e.slideTo(y !== null ? y : v));
  }
}
function Za() {
  const t = this,
    { params: e, el: n } = t;
  if (n && n.offsetWidth === 0) return;
  e.breakpoints && t.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: i, snapGrid: r } = t,
    o = t.virtual && t.params.virtual.enabled;
  ((t.allowSlideNext = !0),
    (t.allowSlidePrev = !0),
    t.updateSize(),
    t.updateSlides(),
    t.updateSlidesClasses());
  const a = o && e.loop;
  ((e.slidesPerView === "auto" || e.slidesPerView > 1) &&
  t.isEnd &&
  !t.isBeginning &&
  !t.params.centeredSlides &&
  !a
    ? t.slideTo(t.slides.length - 1, 0, !1, !0)
    : t.params.loop && !o
      ? t.slideToLoop(t.realIndex, 0, !1, !0)
      : t.slideTo(t.activeIndex, 0, !1, !0),
    t.autoplay &&
      t.autoplay.running &&
      t.autoplay.paused &&
      (clearTimeout(t.autoplay.resizeTimeout),
      (t.autoplay.resizeTimeout = setTimeout(() => {
        t.autoplay &&
          t.autoplay.running &&
          t.autoplay.paused &&
          t.autoplay.resume();
      }, 500))),
    (t.allowSlidePrev = i),
    (t.allowSlideNext = s),
    t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow());
}
function Vv(t) {
  const e = this;
  !e.enabled ||
    e.allowClick ||
    (e.params.preventClicks && t.preventDefault(),
    e.params.preventClicksPropagation &&
      e.animating &&
      (t.stopPropagation(), t.stopImmediatePropagation()));
}
function Bv() {
  const t = this,
    { wrapperEl: e, rtlTranslate: n, enabled: s } = t;
  if (!s) return;
  ((t.previousTranslate = t.translate),
    t.isHorizontal()
      ? (t.translate = -e.scrollLeft)
      : (t.translate = -e.scrollTop),
    t.translate === 0 && (t.translate = 0),
    t.updateActiveIndex(),
    t.updateSlidesClasses());
  let i;
  const r = t.maxTranslate() - t.minTranslate();
  (r === 0 ? (i = 0) : (i = (t.translate - t.minTranslate()) / r),
    i !== t.progress && t.updateProgress(n ? -t.translate : t.translate),
    t.emit("setTranslate", t.translate, !1));
}
function jv(t) {
  const e = this;
  (ii(e, t.target),
    !(
      e.params.cssMode ||
      (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
    ) && e.update());
}
function Hv() {
  const t = this;
  t.documentTouchHandlerProceeded ||
    ((t.documentTouchHandlerProceeded = !0),
    t.params.touchReleaseOnEdges && (t.el.style.touchAction = "auto"));
}
const Tu = (t, e) => {
  const n = ts(),
    { params: s, el: i, wrapperEl: r, device: o } = t,
    a = !!s.nested,
    l = e === "on" ? "addEventListener" : "removeEventListener",
    u = e;
  !i ||
    typeof i == "string" ||
    (n[l]("touchstart", t.onDocumentTouchStart, { passive: !1, capture: a }),
    i[l]("touchstart", t.onTouchStart, { passive: !1 }),
    i[l]("pointerdown", t.onTouchStart, { passive: !1 }),
    n[l]("touchmove", t.onTouchMove, { passive: !1, capture: a }),
    n[l]("pointermove", t.onTouchMove, { passive: !1, capture: a }),
    n[l]("touchend", t.onTouchEnd, { passive: !0 }),
    n[l]("pointerup", t.onTouchEnd, { passive: !0 }),
    n[l]("pointercancel", t.onTouchEnd, { passive: !0 }),
    n[l]("touchcancel", t.onTouchEnd, { passive: !0 }),
    n[l]("pointerout", t.onTouchEnd, { passive: !0 }),
    n[l]("pointerleave", t.onTouchEnd, { passive: !0 }),
    n[l]("contextmenu", t.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      i[l]("click", t.onClick, !0),
    s.cssMode && r[l]("scroll", t.onScroll),
    s.updateOnWindowResize
      ? t[u](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Za,
          !0,
        )
      : t[u]("observerUpdate", Za, !0),
    i[l]("load", t.onLoad, { capture: !0 }));
};
function Fv() {
  const t = this,
    { params: e } = t;
  ((t.onTouchStart = $v.bind(t)),
    (t.onTouchMove = Rv.bind(t)),
    (t.onTouchEnd = kv.bind(t)),
    (t.onDocumentTouchStart = Hv.bind(t)),
    e.cssMode && (t.onScroll = Bv.bind(t)),
    (t.onClick = Vv.bind(t)),
    (t.onLoad = jv.bind(t)),
    Tu(t, "on"));
}
function zv() {
  Tu(this, "off");
}
var Gv = { attachEvents: Fv, detachEvents: zv };
const el = (t, e) => t.grid && e.grid && e.grid.rows > 1;
function Wv() {
  const t = this,
    { realIndex: e, initialized: n, params: s, el: i } = t,
    r = s.breakpoints;
  if (!r || (r && Object.keys(r).length === 0)) return;
  const o = t.getBreakpoint(r, t.params.breakpointsBase, t.el);
  if (!o || t.currentBreakpoint === o) return;
  const l = (o in r ? r[o] : void 0) || t.originalParams,
    u = el(t, s),
    c = el(t, l),
    d = t.params.grabCursor,
    p = l.grabCursor,
    f = s.enabled;
  (u && !c
    ? (i.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`,
      ),
      t.emitContainerClasses())
    : !u &&
      c &&
      (i.classList.add(`${s.containerModifierClass}grid`),
      ((l.grid.fill && l.grid.fill === "column") ||
        (!l.grid.fill && s.grid.fill === "column")) &&
        i.classList.add(`${s.containerModifierClass}grid-column`),
      t.emitContainerClasses()),
    d && !p ? t.unsetGrabCursor() : !d && p && t.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((b) => {
      if (typeof l[b] == "undefined") return;
      const w = s[b] && s[b].enabled,
        A = l[b] && l[b].enabled;
      (w && !A && t[b].disable(), !w && A && t[b].enable());
    }));
  const g = l.direction && l.direction !== s.direction,
    v = s.loop && (l.slidesPerView !== s.slidesPerView || g),
    S = s.loop;
  (g && n && t.changeDirection(), Qe(t.params, l));
  const E = t.params.enabled,
    y = t.params.loop;
  (Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev,
  }),
    f && !E ? t.disable() : !f && E && t.enable(),
    (t.currentBreakpoint = o),
    t.emit("_beforeBreakpoint", l),
    n &&
      (v
        ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides())
        : !S && y
          ? (t.loopCreate(e), t.updateSlides())
          : S && !y && t.loopDestroy()),
    t.emit("breakpoint", l));
}
function Uv(t, e, n) {
  if ((e === void 0 && (e = "window"), !t || (e === "container" && !n))) return;
  let s = !1;
  const i = st(),
    r = e === "window" ? i.innerHeight : n.clientHeight,
    o = Object.keys(t).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const l = parseFloat(a.substr(1));
        return { value: r * l, point: a };
      }
      return { value: a, point: a };
    });
  o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
  for (let a = 0; a < o.length; a += 1) {
    const { point: l, value: u } = o[a];
    e === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (s = l)
      : u <= n.clientWidth && (s = l);
  }
  return s || "max";
}
var Kv = { setBreakpoint: Wv, getBreakpoint: Uv };
function Yv(t, e) {
  const n = [];
  return (
    t.forEach((s) => {
      typeof s == "object"
        ? Object.keys(s).forEach((i) => {
            s[i] && n.push(e + i);
          })
        : typeof s == "string" && n.push(e + s);
    }),
    n
  );
}
function qv() {
  const t = this,
    { classNames: e, params: n, rtl: s, el: i, device: r } = t,
    o = Yv(
      [
        "initialized",
        n.direction,
        { "free-mode": t.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: s },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: r.android },
        { ios: r.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass,
    );
  (e.push(...o), i.classList.add(...e), t.emitContainerClasses());
}
function Xv() {
  const t = this,
    { el: e, classNames: n } = t;
  !e ||
    typeof e == "string" ||
    (e.classList.remove(...n), t.emitContainerClasses());
}
var Qv = { addClasses: qv, removeClasses: Xv };
function Jv() {
  const t = this,
    { isLocked: e, params: n } = t,
    { slidesOffsetBefore: s } = n;
  if (s) {
    const i = t.slides.length - 1,
      r = t.slidesGrid[i] + t.slidesSizesGrid[i] + s * 2;
    t.isLocked = t.size > r;
  } else t.isLocked = t.snapGrid.length === 1;
  (n.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
    n.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
    e && e !== t.isLocked && (t.isEnd = !1),
    e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock"));
}
var Zv = { checkOverflow: Jv },
  Kr = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function e_(t, e) {
  return function (s) {
    s === void 0 && (s = {});
    const i = Object.keys(s)[0],
      r = s[i];
    if (typeof r != "object" || r === null) {
      Qe(e, s);
      return;
    }
    if (
      (t[i] === !0 && (t[i] = { enabled: !0 }),
      i === "navigation" &&
        t[i] &&
        t[i].enabled &&
        !t[i].prevEl &&
        !t[i].nextEl &&
        (t[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        t[i] &&
        t[i].enabled &&
        !t[i].el &&
        (t[i].auto = !0),
      !(i in t && "enabled" in r))
    ) {
      Qe(e, s);
      return;
    }
    (typeof t[i] == "object" && !("enabled" in t[i]) && (t[i].enabled = !0),
      t[i] || (t[i] = { enabled: !1 }),
      Qe(e, s));
  };
}
const lr = {
    eventsEmitter: Qg,
    update: lv,
    translate: hv,
    transition: _v,
    slide: xv,
    loop: Iv,
    grabCursor: Nv,
    events: Gv,
    breakpoints: Kv,
    checkOverflow: Zv,
    classes: Qv,
  },
  cr = {};
class it {
  constructor() {
    let e, n;
    for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
      i[r] = arguments[r];
    (i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([e, n] = i),
      n || (n = {}),
      (n = Qe({}, n)),
      e && !n.el && (n.el = e));
    const o = ts();
    if (
      n.el &&
      typeof n.el == "string" &&
      o.querySelectorAll(n.el).length > 1
    ) {
      const c = [];
      return (
        o.querySelectorAll(n.el).forEach((d) => {
          const p = Qe({}, n, { el: d });
          c.push(new it(p));
        }),
        c
      );
    }
    const a = this;
    ((a.__swiper__ = !0),
      (a.support = wu()),
      (a.device = yu({ userAgent: n.userAgent })),
      (a.browser = Yg()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules));
    const l = {};
    a.modules.forEach((c) => {
      c({
        params: n,
        swiper: a,
        extendParams: e_(n, l),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const u = Qe({}, Kr, l);
    return (
      (a.params = Qe({}, u, cr, n)),
      (a.originalParams = Qe({}, a.params)),
      (a.passedParams = Qe({}, n)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((c) => {
          a.on(c, a.params.on[c]);
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === "horizontal";
        },
        isVertical() {
          return a.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit("_swiper"),
      a.params.init && a.init(),
      a
    );
  }
  getDirectionLabel(e) {
    return this.isHorizontal()
      ? e
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[e];
  }
  getSlideIndex(e) {
    const { slidesEl: n, params: s } = this,
      i = $t(n, `.${s.slideClass}, swiper-slide`),
      r = qa(i[0]);
    return qa(e) - r;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === e,
      )[0],
    );
  }
  recalcSlides() {
    const e = this,
      { slidesEl: n, params: s } = e;
    e.slides = $t(n, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit("enable"));
  }
  disable() {
    const e = this;
    !e.enabled ||
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit("disable"));
  }
  setProgress(e, n) {
    const s = this;
    e = Math.min(Math.max(e, 0), 1);
    const i = s.minTranslate(),
      o = (s.maxTranslate() - i) * e + i;
    (s.translateTo(o, typeof n == "undefined" ? 0 : n),
      s.updateActiveIndex(),
      s.updateSlidesClasses());
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const n = e.el.className
      .split(" ")
      .filter(
        (s) =>
          s.indexOf("swiper") === 0 ||
          s.indexOf(e.params.containerModifierClass) === 0,
      );
    e.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(e) {
    const n = this;
    return n.destroyed
      ? ""
      : e.className
          .split(" ")
          .filter(
            (s) =>
              s.indexOf("swiper-slide") === 0 ||
              s.indexOf(n.params.slideClass) === 0,
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const n = [];
    (e.slides.forEach((s) => {
      const i = e.getSlideClasses(s);
      (n.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i));
    }),
      e.emit("_slideClasses", n));
  }
  slidesPerViewDynamic(e, n) {
    (e === void 0 && (e = "current"), n === void 0 && (n = !1));
    const s = this,
      {
        params: i,
        slides: r,
        slidesGrid: o,
        slidesSizesGrid: a,
        size: l,
        activeIndex: u,
      } = s;
    let c = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let d = r[u] ? Math.ceil(r[u].swiperSlideSize) : 0,
        p;
      for (let f = u + 1; f < r.length; f += 1)
        r[f] &&
          !p &&
          ((d += Math.ceil(r[f].swiperSlideSize)), (c += 1), d > l && (p = !0));
      for (let f = u - 1; f >= 0; f -= 1)
        r[f] &&
          !p &&
          ((d += r[f].swiperSlideSize), (c += 1), d > l && (p = !0));
    } else if (e === "current")
      for (let d = u + 1; d < r.length; d += 1)
        (n ? o[d] + a[d] - o[u] < l : o[d] - o[u] < l) && (c += 1);
    else for (let d = u - 1; d >= 0; d -= 1) o[u] - o[d] < l && (c += 1);
    return c;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: n, params: s } = e;
    (s.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && ii(e, o);
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses());
    function i() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate,
        a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      (e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses());
    }
    let r;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      (i(), s.autoHeight && e.updateAutoHeight());
    else {
      if (
        (s.slidesPerView === "auto" || s.slidesPerView > 1) &&
        e.isEnd &&
        !s.centeredSlides
      ) {
        const o = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
        r = e.slideTo(o.length - 1, 0, !1, !0);
      } else r = e.slideTo(e.activeIndex, 0, !1, !0);
      r || i();
    }
    (s.watchOverflow && n !== e.snapGrid && e.checkOverflow(),
      e.emit("update"));
  }
  changeDirection(e, n) {
    n === void 0 && (n = !0);
    const s = this,
      i = s.params.direction;
    return (
      e || (e = i === "horizontal" ? "vertical" : "horizontal"),
      e === i ||
        (e !== "horizontal" && e !== "vertical") ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
        s.el.classList.add(`${s.params.containerModifierClass}${e}`),
        s.emitContainerClasses(),
        (s.params.direction = e),
        s.slides.forEach((r) => {
          e === "vertical" ? (r.style.width = "") : (r.style.height = "");
        }),
        s.emit("changeDirection"),
        n && s.update()),
      s
    );
  }
  changeLanguageDirection(e) {
    const n = this;
    (n.rtl && e === "rtl") ||
      (!n.rtl && e === "ltr") ||
      ((n.rtl = e === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(e) {
    const n = this;
    if (n.mounted) return !0;
    let s = e || n.params.el;
    if ((typeof s == "string" && (s = document.querySelector(s)), !s))
      return !1;
    ((s.swiper = n),
      s.parentNode &&
        s.parentNode.host &&
        s.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0));
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = (() =>
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(i())
        : $t(s, i())[0])();
    return (
      !o &&
        n.params.createElements &&
        ((o = Wr("div", n.params.wrapperClass)),
        s.append(o),
        $t(s, `.${n.params.slideClass}`).forEach((a) => {
          o.append(a);
        })),
      Object.assign(n, {
        el: s,
        wrapperEl: o,
        slidesEl:
          n.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
        hostEl: n.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === "rtl" || Ut(s, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (s.dir.toLowerCase() === "rtl" || Ut(s, "direction") === "rtl"),
        wrongRTL: Ut(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(e) {
    const n = this;
    if (n.initialized || n.mount(e) === !1) return n;
    (n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0,
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0,
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents());
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((r) => {
        r.complete
          ? ii(n, r)
          : r.addEventListener("load", (o) => {
              ii(n, o.target);
            });
      }),
      Ur(n),
      (n.initialized = !0),
      Ur(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(e, n) {
    (e === void 0 && (e = !0), n === void 0 && (n = !0));
    const s = this,
      { params: i, el: r, wrapperEl: o, slides: a } = s;
    return (
      typeof s.params == "undefined" ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
        (s.initialized = !1),
        s.detachEvents(),
        i.loop && s.loopDestroy(),
        n &&
          (s.removeClasses(),
          r && typeof r != "string" && r.removeAttribute("style"),
          o && o.removeAttribute("style"),
          a &&
            a.length &&
            a.forEach((l) => {
              (l.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass,
              ),
                l.removeAttribute("style"),
                l.removeAttribute("data-swiper-slide-index"));
            })),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((l) => {
          s.off(l);
        }),
        e !== !1 &&
          (s.el && typeof s.el != "string" && (s.el.swiper = null), kg(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    Qe(cr, e);
  }
  static get extendedDefaults() {
    return cr;
  }
  static get defaults() {
    return Kr;
  }
  static installModule(e) {
    it.prototype.__modules__ || (it.prototype.__modules__ = []);
    const n = it.prototype.__modules__;
    typeof e == "function" && n.indexOf(e) < 0 && n.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((n) => it.installModule(n)), it)
      : (it.installModule(e), it);
  }
}
Object.keys(lr).forEach((t) => {
  Object.keys(lr[t]).forEach((e) => {
    it.prototype[e] = lr[t][e];
  });
});
it.use([qg, Xg]);
const Au = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function mn(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === "Object" &&
    !t.__swiper__
  );
}
function Fn(t, e) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(e)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof t[s] == "undefined"
        ? (t[s] = e[s])
        : mn(e[s]) && mn(t[s]) && Object.keys(e[s]).length > 0
          ? e[s].__swiper__
            ? (t[s] = e[s])
            : Fn(t[s], e[s])
          : (t[s] = e[s]);
    });
}
function xu(t) {
  return (
    t === void 0 && (t = {}),
    t.navigation &&
      typeof t.navigation.nextEl == "undefined" &&
      typeof t.navigation.prevEl == "undefined"
  );
}
function Cu(t) {
  return (
    t === void 0 && (t = {}),
    t.pagination && typeof t.pagination.el == "undefined"
  );
}
function Ou(t) {
  return (
    t === void 0 && (t = {}),
    t.scrollbar && typeof t.scrollbar.el == "undefined"
  );
}
function Pu(t) {
  t === void 0 && (t = "");
  const e = t
      .split(" ")
      .map((s) => s.trim())
      .filter((s) => !!s),
    n = [];
  return (
    e.forEach((s) => {
      n.indexOf(s) < 0 && n.push(s);
    }),
    n.join(" ")
  );
}
function t_(t) {
  return (
    t === void 0 && (t = ""),
    t
      ? t.includes("swiper-wrapper")
        ? t
        : `swiper-wrapper ${t}`
      : "swiper-wrapper"
  );
}
function n_(t) {
  let {
    swiper: e,
    slides: n,
    passedParams: s,
    changedParams: i,
    nextEl: r,
    prevEl: o,
    scrollbarEl: a,
    paginationEl: l,
  } = t;
  const u = i.filter(
      (N) => N !== "children" && N !== "direction" && N !== "wrapperClass",
    ),
    {
      params: c,
      pagination: d,
      navigation: p,
      scrollbar: f,
      virtual: g,
      thumbs: v,
    } = e;
  let S, E, y, b, w, A, D, G;
  (i.includes("thumbs") &&
    s.thumbs &&
    s.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (S = !0),
    i.includes("controller") &&
      s.controller &&
      s.controller.control &&
      c.controller &&
      !c.controller.control &&
      (E = !0),
    i.includes("pagination") &&
      s.pagination &&
      (s.pagination.el || l) &&
      (c.pagination || c.pagination === !1) &&
      d &&
      !d.el &&
      (y = !0),
    i.includes("scrollbar") &&
      s.scrollbar &&
      (s.scrollbar.el || a) &&
      (c.scrollbar || c.scrollbar === !1) &&
      f &&
      !f.el &&
      (b = !0),
    i.includes("navigation") &&
      s.navigation &&
      (s.navigation.prevEl || o) &&
      (s.navigation.nextEl || r) &&
      (c.navigation || c.navigation === !1) &&
      p &&
      !p.prevEl &&
      !p.nextEl &&
      (w = !0));
  const j = (N) => {
    !e[N] ||
      (e[N].destroy(),
      N === "navigation"
        ? (e.isElement && (e[N].prevEl.remove(), e[N].nextEl.remove()),
          (c[N].prevEl = void 0),
          (c[N].nextEl = void 0),
          (e[N].prevEl = void 0),
          (e[N].nextEl = void 0))
        : (e.isElement && e[N].el.remove(),
          (c[N].el = void 0),
          (e[N].el = void 0)));
  };
  (i.includes("loop") &&
    e.isElement &&
    (c.loop && !s.loop ? (A = !0) : !c.loop && s.loop ? (D = !0) : (G = !0)),
    u.forEach((N) => {
      if (mn(c[N]) && mn(s[N]))
        (Object.assign(c[N], s[N]),
          (N === "navigation" || N === "pagination" || N === "scrollbar") &&
            "enabled" in s[N] &&
            !s[N].enabled &&
            j(N));
      else {
        const P = s[N];
        (P === !0 || P === !1) &&
        (N === "navigation" || N === "pagination" || N === "scrollbar")
          ? P === !1 && j(N)
          : (c[N] = s[N]);
      }
    }),
    u.includes("controller") &&
      !E &&
      e.controller &&
      e.controller.control &&
      c.controller &&
      c.controller.control &&
      (e.controller.control = c.controller.control),
    i.includes("children") && n && g && c.virtual.enabled
      ? ((g.slides = n), g.update(!0))
      : i.includes("virtual") &&
        g &&
        c.virtual.enabled &&
        (n && (g.slides = n), g.update(!0)),
    i.includes("children") && n && c.loop && (G = !0),
    S && v.init() && v.update(!0),
    E && (e.controller.control = c.controller.control),
    y &&
      (e.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-pagination"),
        l.part.add("pagination"),
        e.el.appendChild(l)),
      l && (c.pagination.el = l),
      d.init(),
      d.render(),
      d.update()),
    b &&
      (e.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-scrollbar"),
        a.part.add("scrollbar"),
        e.el.appendChild(a)),
      a && (c.scrollbar.el = a),
      f.init(),
      f.updateSize(),
      f.setTranslate()),
    w &&
      (e.isElement &&
        ((!r || typeof r == "string") &&
          ((r = document.createElement("div")),
          r.classList.add("swiper-button-next"),
          (r.innerHTML = e.hostEl.constructor.nextButtonSvg),
          r.part.add("button-next"),
          e.el.appendChild(r)),
        (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-prev"),
          (o.innerHTML = e.hostEl.constructor.prevButtonSvg),
          o.part.add("button-prev"),
          e.el.appendChild(o))),
      r && (c.navigation.nextEl = r),
      o && (c.navigation.prevEl = o),
      p.init(),
      p.update()),
    i.includes("allowSlideNext") && (e.allowSlideNext = s.allowSlideNext),
    i.includes("allowSlidePrev") && (e.allowSlidePrev = s.allowSlidePrev),
    i.includes("direction") && e.changeDirection(s.direction, !1),
    (A || G) && e.loopDestroy(),
    (D || G) && e.loopCreate(),
    e.update());
}
function tl(t, e) {
  (t === void 0 && (t = {}), e === void 0 && (e = !0));
  const n = { on: {} },
    s = {},
    i = {};
  (Fn(n, Kr), (n._emitClasses = !0), (n.init = !1));
  const r = {},
    o = Au.map((l) => l.replace(/_/, "")),
    a = Object.assign({}, t);
  return (
    Object.keys(a).forEach((l) => {
      typeof t[l] != "undefined" &&
        (o.indexOf(l) >= 0
          ? mn(t[l])
            ? ((n[l] = {}), (i[l] = {}), Fn(n[l], t[l]), Fn(i[l], t[l]))
            : ((n[l] = t[l]), (i[l] = t[l]))
          : l.search(/on[A-Z]/) === 0 && typeof t[l] == "function"
            ? e
              ? (s[`${l[2].toLowerCase()}${l.substr(3)}`] = t[l])
              : (n.on[`${l[2].toLowerCase()}${l.substr(3)}`] = t[l])
            : (r[l] = t[l]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((l) => {
      (n[l] === !0 && (n[l] = {}), n[l] === !1 && delete n[l]);
    }),
    { params: n, passedParams: i, rest: r, events: s }
  );
}
function s_(t, e) {
  let {
    el: n,
    nextEl: s,
    prevEl: i,
    paginationEl: r,
    scrollbarEl: o,
    swiper: a,
  } = t;
  (xu(e) &&
    s &&
    i &&
    ((a.params.navigation.nextEl = s),
    (a.originalParams.navigation.nextEl = s),
    (a.params.navigation.prevEl = i),
    (a.originalParams.navigation.prevEl = i)),
    Cu(e) &&
      r &&
      ((a.params.pagination.el = r), (a.originalParams.pagination.el = r)),
    Ou(e) &&
      o &&
      ((a.params.scrollbar.el = o), (a.originalParams.scrollbar.el = o)),
    a.init(n));
}
function i_(t, e, n, s, i) {
  const r = [];
  if (!e) return r;
  const o = (l) => {
    r.indexOf(l) < 0 && r.push(l);
  };
  if (n && s) {
    const l = s.map(i),
      u = n.map(i);
    (l.join("") !== u.join("") && o("children"),
      s.length !== n.length && o("children"));
  }
  return (
    Au.filter((l) => l[0] === "_")
      .map((l) => l.replace(/_/, ""))
      .forEach((l) => {
        if (l in t && l in e)
          if (mn(t[l]) && mn(e[l])) {
            const u = Object.keys(t[l]),
              c = Object.keys(e[l]);
            u.length !== c.length
              ? o(l)
              : (u.forEach((d) => {
                  t[l][d] !== e[l][d] && o(l);
                }),
                c.forEach((d) => {
                  t[l][d] !== e[l][d] && o(l);
                }));
          } else t[l] !== e[l] && o(l);
      }),
    r
  );
}
const r_ = (t) => {
  !t ||
    t.destroyed ||
    !t.params.virtual ||
    (t.params.virtual && !t.params.virtual.enabled) ||
    (t.updateSlides(),
    t.updateProgress(),
    t.updateSlidesClasses(),
    t.parallax &&
      t.params.parallax &&
      t.params.parallax.enabled &&
      t.parallax.setTranslate());
};
function ur(t, e, n) {
  t === void 0 && (t = {});
  const s = [],
    i = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    r = (o, a) => {
      !Array.isArray(o) ||
        o.forEach((l) => {
          const u = typeof l.type == "symbol";
          (a === "default" && (a = "container-end"),
            u && l.children
              ? r(l.children, a)
              : (l.type &&
                    (l.type.name === "SwiperSlide" ||
                      l.type.name === "AsyncComponentWrapper")) ||
                  (l.componentOptions &&
                    l.componentOptions.tag === "SwiperSlide")
                ? s.push(l)
                : i[a] && i[a].push(l));
        });
    };
  return (
    Object.keys(t).forEach((o) => {
      if (typeof t[o] != "function") return;
      const a = t[o]();
      r(a, o);
    }),
    (n.value = e.value),
    (e.value = s),
    { slides: s, slots: i }
  );
}
function o_(t, e, n) {
  if (!n) return null;
  const s = (c) => {
      let d = c;
      return (
        c < 0 ? (d = e.length + c) : d >= e.length && (d = d - e.length),
        d
      );
    },
    i = t.value.isHorizontal()
      ? { [t.value.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: r, to: o } = n,
    a = t.value.params.loop ? -e.length : 0,
    l = t.value.params.loop ? e.length * 2 : e.length,
    u = [];
  for (let c = a; c < l; c += 1)
    c >= r && c <= o && u.length < e.length && u.push(e[s(c)]);
  return u.map((c) => {
    if (
      (c.props || (c.props = {}),
      c.props.style || (c.props.style = {}),
      (c.props.swiperRef = t),
      (c.props.style = i),
      c.type)
    )
      return je(c.type, { ...c.props }, c.children);
    if (c.componentOptions)
      return je(
        c.componentOptions.Ctor,
        { ...c.props },
        c.componentOptions.children,
      );
  });
}
const Iu = {
    name: "Swiper",
    props: {
      tag: { type: String, default: "div" },
      wrapperTag: { type: String, default: "div" },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      oneWayMovement: { type: Boolean, default: void 0 },
      swiperElementNodeName: { type: String, default: "SWIPER-CONTAINER" },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      breakpointsBase: { type: String, default: void 0 },
      spaceBetween: { type: [Number, String], default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopPreventsSliding: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideFullyVisibleClass: { type: String, default: void 0 },
      slideBlankClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      lazyPreloaderClass: { type: String, default: void 0 },
      lazyPreloadPrevNext: { type: Number, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 },
    },
    emits: [
      "_beforeBreakpoint",
      "_containerClasses",
      "_slideClass",
      "_slideClasses",
      "_swiper",
      "_freeModeNoMomentumRelease",
      "activeIndexChange",
      "afterInit",
      "autoplay",
      "autoplayStart",
      "autoplayStop",
      "autoplayPause",
      "autoplayResume",
      "autoplayTimeLeft",
      "beforeDestroy",
      "beforeInit",
      "beforeLoopFix",
      "beforeResize",
      "beforeSlideChangeStart",
      "beforeTransitionStart",
      "breakpoint",
      "changeDirection",
      "click",
      "disable",
      "doubleTap",
      "doubleClick",
      "destroy",
      "enable",
      "fromEdge",
      "hashChange",
      "hashSet",
      "init",
      "keyPress",
      "lock",
      "loopFix",
      "momentumBounce",
      "navigationHide",
      "navigationShow",
      "navigationPrev",
      "navigationNext",
      "observerUpdate",
      "orientationchange",
      "paginationHide",
      "paginationRender",
      "paginationShow",
      "paginationUpdate",
      "progress",
      "reachBeginning",
      "reachEnd",
      "realIndexChange",
      "resize",
      "scroll",
      "scrollbarDragEnd",
      "scrollbarDragMove",
      "scrollbarDragStart",
      "setTransition",
      "setTranslate",
      "slidesUpdated",
      "slideChange",
      "slideChangeTransitionEnd",
      "slideChangeTransitionStart",
      "slideNextTransitionEnd",
      "slideNextTransitionStart",
      "slidePrevTransitionEnd",
      "slidePrevTransitionStart",
      "slideResetTransitionStart",
      "slideResetTransitionEnd",
      "sliderMove",
      "sliderFirstMove",
      "slidesLengthChange",
      "slidesGridLengthChange",
      "snapGridLengthChange",
      "snapIndexChange",
      "swiper",
      "tap",
      "toEdge",
      "touchEnd",
      "touchMove",
      "touchMoveOpposite",
      "touchStart",
      "transitionEnd",
      "transitionStart",
      "unlock",
      "update",
      "virtualUpdate",
      "zoomChange",
    ],
    setup(t, e) {
      let { slots: n, emit: s } = e;
      const { tag: i, wrapperTag: r } = t,
        o = Re("swiper"),
        a = Re(null),
        l = Re(!1),
        u = Re(!1),
        c = Re(null),
        d = Re(null),
        p = Re(null),
        f = { value: [] },
        g = { value: [] },
        v = Re(null),
        S = Re(null),
        E = Re(null),
        y = Re(null),
        { params: b, passedParams: w } = tl(t, !1);
      (ur(n, f, g), (p.value = w), (g.value = f.value));
      const A = () => {
        (ur(n, f, g), (l.value = !0));
      };
      ((b.onAny = function (j) {
        for (
          var N = arguments.length, P = new Array(N > 1 ? N - 1 : 0), F = 1;
          F < N;
          F++
        )
          P[F - 1] = arguments[F];
        s(j, ...P);
      }),
        Object.assign(b.on, {
          _beforeBreakpoint: A,
          _containerClasses(j, N) {
            o.value = N;
          },
        }));
      const D = { ...b };
      if (
        (delete D.wrapperClass,
        (d.value = new it(D)),
        d.value.virtual && d.value.params.virtual.enabled)
      ) {
        d.value.virtual.slides = f.value;
        const j = {
          cache: !1,
          slides: f.value,
          renderExternal: (N) => {
            a.value = N;
          },
          renderExternalUpdate: !1,
        };
        (Fn(d.value.params.virtual, j), Fn(d.value.originalParams.virtual, j));
      }
      (vo(() => {
        !u.value && d.value && (d.value.emitSlidesClasses(), (u.value = !0));
        const { passedParams: j } = tl(t, !1),
          N = i_(j, p.value, f.value, g.value, (P) => P.props && P.props.key);
        ((p.value = j),
          (N.length || l.value) &&
            d.value &&
            !d.value.destroyed &&
            n_({
              swiper: d.value,
              slides: f.value,
              passedParams: j,
              changedParams: N,
              nextEl: v.value,
              prevEl: S.value,
              scrollbarEl: y.value,
              paginationEl: E.value,
            }),
          (l.value = !1));
      }),
        Hn("swiper", d),
        dn(a, () => {
          po(() => {
            r_(d.value);
          });
        }),
        go(() => {
          !c.value ||
            (s_(
              {
                el: c.value,
                nextEl: v.value,
                prevEl: S.value,
                paginationEl: E.value,
                scrollbarEl: y.value,
                swiper: d.value,
              },
              b,
            ),
            s("swiper", d.value));
        }),
        _o(() => {
          d.value && !d.value.destroyed && d.value.destroy(!0, !1);
        }));
      function G(j) {
        return b.virtual
          ? o_(d, j, a.value)
          : (j.forEach((N, P) => {
              (N.props || (N.props = {}),
                (N.props.swiperRef = d),
                (N.props.swiperSlideIndex = P));
            }),
            j);
      }
      return () => {
        const { slides: j, slots: N } = ur(n, f, g);
        return je(i, { ref: c, class: Pu(o.value) }, [
          N["container-start"],
          je(r, { class: t_(b.wrapperClass) }, [
            N["wrapper-start"],
            G(j),
            N["wrapper-end"],
          ]),
          xu(t) && [
            je("div", { ref: S, class: "swiper-button-prev" }),
            je("div", { ref: v, class: "swiper-button-next" }),
          ],
          Ou(t) && je("div", { ref: y, class: "swiper-scrollbar" }),
          Cu(t) && je("div", { ref: E, class: "swiper-pagination" }),
          N["container-end"],
        ]);
      };
    },
  },
  Lu = {
    name: "SwiperSlide",
    props: {
      tag: { type: String, default: "div" },
      swiperRef: { type: Object, required: !1 },
      swiperSlideIndex: { type: Number, default: void 0, required: !1 },
      zoom: { type: Boolean, default: void 0, required: !1 },
      lazy: { type: Boolean, default: !1, required: !1 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(t, e) {
      let { slots: n } = e,
        s = !1;
      const { swiperRef: i } = t,
        r = Re(null),
        o = Re("swiper-slide"),
        a = Re(!1);
      function l(d, p, f) {
        p === r.value && (o.value = f);
      }
      (go(() => {
        !i || !i.value || (i.value.on("_slideClass", l), (s = !0));
      }),
        Ec(() => {
          s || !i || !i.value || (i.value.on("_slideClass", l), (s = !0));
        }),
        vo(() => {
          !r.value ||
            !i ||
            !i.value ||
            (typeof t.swiperSlideIndex != "undefined" &&
              (r.value.swiperSlideIndex = t.swiperSlideIndex),
            i.value.destroyed &&
              o.value !== "swiper-slide" &&
              (o.value = "swiper-slide"));
        }),
        _o(() => {
          !i || !i.value || i.value.off("_slideClass", l);
        }));
      const u = rt(() => ({
        isActive: o.value.indexOf("swiper-slide-active") >= 0,
        isVisible: o.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: o.value.indexOf("swiper-slide-prev") >= 0,
        isNext: o.value.indexOf("swiper-slide-next") >= 0,
      }));
      Hn("swiperSlide", u);
      const c = () => {
        a.value = !0;
      };
      return () =>
        je(
          t.tag,
          {
            class: Pu(`${o.value}`),
            ref: r,
            "data-swiper-slide-index":
              typeof t.virtualIndex == "undefined" &&
              i &&
              i.value &&
              i.value.params.loop
                ? t.swiperSlideIndex
                : t.virtualIndex,
            onLoadCapture: c,
          },
          t.zoom
            ? je(
                "div",
                {
                  class: "swiper-zoom-container",
                  "data-swiper-zoom":
                    typeof t.zoom == "number" ? t.zoom : void 0,
                },
                [
                  n.default && n.default(u.value),
                  t.lazy &&
                    !a.value &&
                    je("div", { class: "swiper-lazy-preloader" }),
                ],
              )
            : [
                n.default && n.default(u.value),
                t.lazy &&
                  !a.value &&
                  je("div", { class: "swiper-lazy-preloader" }),
              ],
        );
    },
  };
const a_ = {
    components: { Swiper: Iu, SwiperSlide: Lu },
    data() {
      return {
        showModal: !1,
        selectedAward: null,
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        },
      };
    },
    computed: { ...es(["rewards"]) },
    methods: {
      openModal(t) {
        ((this.selectedAward = t), (this.showModal = !0));
      },
      closeModal() {
        ((this.showModal = !1), (this.selectedAward = null));
      },
    },
    created() {
      this.$store.dispatch("fetchRewards");
    },
  },
  l_ = { class: "awards-section" },
  c_ = ["innerHTML"],
  u_ = ["src"];
function d_(t, e, n, s, i, r) {
  const o = he("swiper-slide"),
    a = he("swiper");
  return (
    X(),
    Z("section", l_, [
      e[3] || (e[3] = C("h2", null, "LES R\xC9COMPENSES DE LA FATOM", -1)),
      Q(
        a,
        {
          "slides-per-view": 4,
          "space-between": 20,
          breakpoints: i.breakpoints,
          class: "awards-grid",
          pagination: { clickable: !0 },
        },
        {
          default: _e(() => [
            (X(!0),
            Z(
              Te,
              null,
              Ot(
                t.rewards,
                (l, u) => (
                  X(),
                  an(
                    o,
                    {
                      key: u,
                      class: "award-card",
                      onClick: (c) => r.openModal(l),
                    },
                    {
                      default: _e(() => [
                        C(
                          "div",
                          {
                            class: "award-image",
                            style: En({ backgroundImage: `url(${l.image})` }),
                          },
                          null,
                          4,
                        ),
                        C(
                          "div",
                          { class: "award-name", innerHTML: l.title },
                          null,
                          8,
                          c_,
                        ),
                      ]),
                      _: 2,
                    },
                    1032,
                    ["onClick"],
                  )
                ),
              ),
              128,
            )),
          ]),
          _: 1,
        },
        8,
        ["breakpoints"],
      ),
      e[4] || (e[4] = C("div", { class: "view-all" }, null, -1)),
      i.showModal
        ? (X(),
          Z(
            "div",
            {
              key: 0,
              class: "modal-overlay",
              onClick:
                e[2] || (e[2] = (...l) => r.closeModal && r.closeModal(...l)),
            },
            [
              C(
                "div",
                {
                  class: "modal-content",
                  onClick: e[1] || (e[1] = Gc(() => {}, ["stop"])),
                },
                [
                  C(
                    "img",
                    { src: i.selectedAward.image, alt: "Award Image" },
                    null,
                    8,
                    u_,
                  ),
                  C(
                    "button",
                    {
                      class: "close-button",
                      onClick:
                        e[0] ||
                        (e[0] = (...l) => r.closeModal && r.closeModal(...l)),
                    },
                    "Fermer",
                  ),
                ],
              ),
            ],
          ))
        : ht("", !0),
    ])
  );
}
var f_ = Fe(a_, [
  ["render", d_],
  ["__scopeId", "data-v-25a4e31f"],
]);
const p_ = {
    components: { Swiper: Iu, SwiperSlide: Lu },
    data() {
      return {
        partners: [
          {
            image: "/assets/partners/sgci.png",
            url: "https://www.societegenerale.ci",
          },
          {
            image: "/assets/partners/boa.png",
            url: "https://www.boacotedivoire.com",
          },
          {
            image: "/assets/partners/carre_dor.png",
            url: "https://www.carredor.org",
          },
          {
            image: "/assets/partners/france24.png",
            url: "https://www.france24.com",
          },
          {
            image: "/assets/partners/gandour.png",
            url: "https://www.npgandour.com",
          },
          { image: "/assets/partners/pisam.png", url: "https://www.pisam.com" },
          { image: "/assets/partners/sca.png", url: "https://www.pisam.com" },
          {
            image: "/assets/partners/sitarail.jpg",
            url: "https://www.pisam.com",
          },
          { image: "/assets/partners/lf.jpg", url: "https://www.pisam.com" },
          {
            image: "/assets/partners/les_centaures_routiers_logo.jpg",
            url: "https://www.pisam.com",
          },
          {
            image: "/assets/partners/sodeci.png",
            url: "https://www.pisam.com",
          },
          { image: "/assets/partners/oms.jpeg", url: "https://www.pisam.com" },
        ],
        isMobile: !1,
      };
    },
    mounted() {
      (this.checkScreenSize(),
        window.addEventListener("resize", this.checkScreenSize));
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.checkScreenSize);
    },
    methods: {
      checkScreenSize() {
        this.isMobile = window.innerWidth <= 768;
      },
    },
  },
  h_ = { class: "partners-section" },
  m_ = { class: "partner-card" },
  g_ = ["href"],
  v_ = ["src"],
  __ = { class: "partner-card" },
  E_ = ["href"],
  b_ = ["src"],
  w_ = { class: "view-all" };
function y_(t, e, n, s, i, r) {
  const o = he("swiper-slide"),
    a = he("swiper"),
    l = he("router-link");
  return (
    X(),
    Z("section", h_, [
      e[1] || (e[1] = C("h2", null, "LES PARTENAIRES DE LA FATOM", -1)),
      i.isMobile
        ? (X(),
          an(
            a,
            {
              key: 1,
              "slides-per-view": 2,
              "space-between": "10",
              loop: !0,
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              class: "partners-swiper-mobile",
            },
            {
              default: _e(() => [
                (X(!0),
                Z(
                  Te,
                  null,
                  Ot(
                    i.partners,
                    (u, c) => (
                      X(),
                      an(
                        o,
                        { key: c, class: "partner-slide" },
                        {
                          default: _e(() => [
                            C("div", __, [
                              C(
                                "a",
                                {
                                  href: u.url,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                },
                                [
                                  C(
                                    "img",
                                    {
                                      src: u.image,
                                      alt: "Partenaire",
                                      class: "partner-image",
                                    },
                                    null,
                                    8,
                                    b_,
                                  ),
                                ],
                                8,
                                E_,
                              ),
                            ]),
                          ]),
                          _: 2,
                        },
                        1024,
                      )
                    ),
                  ),
                  128,
                )),
              ]),
              _: 1,
            },
          ))
        : (X(),
          an(
            a,
            {
              key: 0,
              "slides-per-view": 6,
              "space-between": "20",
              loop: !0,
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              class: "partners-swiper",
            },
            {
              default: _e(() => [
                (X(!0),
                Z(
                  Te,
                  null,
                  Ot(
                    i.partners,
                    (u, c) => (
                      X(),
                      an(
                        o,
                        { key: c, class: "partner-slide" },
                        {
                          default: _e(() => [
                            C("div", m_, [
                              C(
                                "a",
                                {
                                  href: u.url,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                },
                                [
                                  C(
                                    "img",
                                    {
                                      src: u.image,
                                      alt: "Partenaire",
                                      class: "partner-image",
                                    },
                                    null,
                                    8,
                                    v_,
                                  ),
                                ],
                                8,
                                g_,
                              ),
                            ]),
                          ]),
                          _: 2,
                        },
                        1024,
                      )
                    ),
                  ),
                  128,
                )),
              ]),
              _: 1,
            },
          )),
      C("div", w_, [
        Q(
          l,
          {
            to: "/partners",
            class: "nav-link",
            "exact-active-class": "active-link",
          },
          {
            default: _e(
              () =>
                e[0] ||
                (e[0] = [
                  be("TOUS LES PARTENAIRES "),
                  C("i", { class: "fas fa-arrow-right" }, null, -1),
                ]),
            ),
            _: 1,
          },
        ),
      ]),
    ])
  );
}
var S_ = Fe(p_, [
  ["render", y_],
  ["__scopeId", "data-v-424e3f28"],
]);
const T_ = {},
  A_ = { class: "description-text" };
function x_(t, e, n, s, i, r) {
  return (
    X(),
    Z(
      "section",
      A_,
      e[0] ||
        (e[0] = [
          C(
            "p",
            { class: "description" },
            [
              be(
                " La Fondation ATEF OMA\xCFS (FATOM) est une association apolitique, non confessionnelle et \xE0 but non lucratif qui soutient le d\xE9veloppement humain durable en reversant tous les produits et b\xE9n\xE9fices de la mobilisation des ressources financi\xE8res dans des actions au profit des populations vuln\xE9rables. Ces actions au d\xE9veloppement sont : ",
              ),
              C("br"),
              be(
                " 1- L\u2019appui aux renforcements des services sociaux de base (sant\xE9, \xE9ducation, environnement : hygi\xE8ne et assainissement) et de la gouvernance \xE9conomique par une participation plus accrue du secteur priv\xE9; ",
              ),
              C("br"),
              be(
                " 2- La promotion de la culture, de l\u2019art et du patrimoine ivoirien; ",
              ),
              C("br"),
              be(
                " 3- Le renforcement des capacit\xE9s des investisseurs, partenaires et de leur personnel pour une meilleure connaissance des cadres institutionnels et op\xE9rationnels d\u2019intervention dans les domaines du d\xE9veloppement social et de l\u2019urgence humanitaire. Les ONGs nationales et internationales qui interviennent en C\xF4te d'Ivoire dans les domaines d'intervention de la FATOM peuvent envoyer les appels \xE0 proposition selon le canevas \xE0 t\xE9l\xE9charger sur le site. ",
              ),
            ],
            -1,
          ),
        ]),
    )
  );
}
var C_ = Fe(T_, [
  ["render", x_],
  ["__scopeId", "data-v-0993b147"],
]);
const O_ = {
    components: {
      HeaderSection: Oo,
      HeroSection: _u,
      BureauSection: ag,
      ActivitiesSection: vg,
      AwardsSection: f_,
      ReportsSection: Dg,
      PartnersSection: S_,
      FooterSection: Po,
      DescriptionSection: C_,
    },
    computed: {
      ...es({
        reports: (t) => t.reports,
        recentActivities: (t) => t.recentActivities,
      }),
    },
    data() {
      return { isLoading: !0 };
    },
    watch: {
      reports() {
        this.checkLoading();
      },
      recentActivities() {
        this.checkLoading();
      },
    },
    created() {
      (this.$store.dispatch("fetchReports"),
        this.$store.dispatch("fetchRecentActivities"));
    },
    methods: {
      checkLoading() {
        this.reports.length > 0 &&
          this.recentActivities.length > 0 &&
          (this.isLoading = !1);
      },
    },
  },
  P_ = { key: 0, class: "loadingScreen" };
function I_(t, e, n, s, i, r) {
  const o = he("HeaderSection"),
    a = he("HeroSection"),
    l = he("DescriptionSection"),
    u = he("BureauSection"),
    c = he("ActivitiesSection"),
    d = he("PartnersSection"),
    p = he("AwardsSection"),
    f = he("ReportsSection"),
    g = he("FooterSection");
  return (
    X(),
    Z("div", null, [
      i.isLoading
        ? (X(),
          Z(
            "div",
            P_,
            e[0] ||
              (e[0] = [
                pi(
                  '<h3 class="loadingScreen__text" data-v-30fedc97><span class="loadingScreen__text__span" data-v-30fedc97>F</span><span class="loadingScreen__text__span" data-v-30fedc97>A</span><span class="loadingScreen__text__span" data-v-30fedc97>T</span><span class="loadingScreen__text__span" data-v-30fedc97>O</span><span class="loadingScreen__text__span" data-v-30fedc97>M</span></h3>',
                  1,
                ),
              ]),
          ))
        : ht("", !0),
      Q(o),
      Q(a, { backgroundImage: "https://zupimages.net/up/24/43/68dg.jpg" }),
      Q(l),
      Q(u),
      Q(c),
      Q(d),
      Q(p),
      Q(f),
      Q(g),
    ])
  );
}
var L_ = Fe(O_, [
  ["render", I_],
  ["__scopeId", "data-v-30fedc97"],
]);
const M_ = {
    props: {
      isLoading: { type: Boolean, required: !0 },
      text: { type: String, default: "FATOM" },
    },
  },
  N_ = { key: 0, class: "loadingScreen" },
  D_ = { class: "loadingScreen__text" };
function $_(t, e, n, s, i, r) {
  return n.isLoading
    ? (X(),
      Z("div", N_, [
        C("h3", D_, [
          (X(!0),
          Z(
            Te,
            null,
            Ot(
              n.text,
              (o, a) => (
                X(),
                Z(
                  "span",
                  {
                    class: "loadingScreen__text__span",
                    key: a,
                    style: En({ animationDelay: `${a * 100}ms` }),
                  },
                  Ce(o),
                  5,
                )
              ),
            ),
            128,
          )),
        ]),
      ]))
    : ht("", !0);
}
var Mu = Fe(M_, [
  ["render", $_],
  ["__scopeId", "data-v-47ec4fc4"],
]);
const R_ = {
    components: {
      LoaderComponent: Mu,
      HeaderSection: Oo,
      HeroSection: _u,
      FooterSection: Po,
    },
    data() {
      return {
        currentCategoryId: null,
        currentCategoryName: "",
        heroImageUrl: "",
        isLoading: !0,
        currentPage: 1,
        postsPerPage: 8,
        placeholderImage: "https://placehold.co/600x400?text=Aucune+image",
      };
    },
    computed: {
      ...es({ posts: (t) => t.posts }),
      titleBackgroundStyle() {
        let t = "none";
        return (
          this.currentCategoryName === "Sante"
            ? (t = "#0080FF")
            : this.currentCategoryName === "Culture"
              ? (t = "#895129")
              : this.currentCategoryName === "Environnement"
                ? (t = "green")
                : this.currentCategoryName === "Education" && (t = "orange"),
          {
            backgroundColor: t,
            padding: "5px",
            marginTop: "20px",
            marginBottom: "20px",
            textAlign: "center",
            color: "white",
          }
        );
      },
      paginatedPosts() {
        const t = (this.currentPage - 1) * this.postsPerPage,
          e = t + this.postsPerPage;
        return this.posts.slice(t, e);
      },
      totalPages() {
        return Math.ceil(this.posts.length / this.postsPerPage);
      },
    },
    methods: {
      ...hu(["fetchPostsByCategory"]),
      async fetchCategoryName(t) {
        try {
          return (
            await (
              await fetch(
                `https://reseau.fatom.org/wp-json/wp/v2/categories/${t}`,
              )
            ).json()
          ).name;
        } catch (e) {
          return (
            console.error(
              "Erreur lors de la r\xE9cup\xE9ration de la cat\xE9gorie:",
              e,
            ),
            "Inconnue"
          );
        }
      },
      async loadCategoryInfo() {
        this.isLoading = !0;
        try {
          ((this.currentCategoryId = this.$route.params.categoryId),
            (this.currentCategoryName = await this.fetchCategoryName(
              this.currentCategoryId,
            )),
            this.setHeroImage(),
            await this.fetchPostsByCategory(this.currentCategoryId));
        } catch (t) {
          console.error("Erreur:", t);
        } finally {
          this.isLoading = !1;
        }
      },
      setHeroImage() {
        this.currentCategoryName === "Education"
          ? (this.heroImageUrl = "https://zupimages.net/up/24/52/7lo5.jpeg")
          : this.currentCategoryName === "Sant\xE9"
            ? (this.heroImageUrl =
                "https://scontent.fabj4-2.fna.fbcdn.net/v/t39.30808-6/468525423_978292527673314_4668076112598296849_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH3vgtxtLNO5biUBDTcQvJN-yKJrivaKqv7IomuK9oqq5LPtFVmtjmYG4zn3AQAQIxW-tBqvV00F-YB6WD2qn30&_nc_ohc=25f7Ccx0MG8Q7kNvgEJJblg&_nc_zt=23&_nc_ht=scontent.fabj4-2.fna&_nc_gid=AOHx70pyde1b0p-GSg7hHNG&oh=00_AYCK2O2hO4SJ77zoM54Ik4RHBr8IUwHKTuuANl74LgwUYQ&oe=677120E2")
            : this.currentCategoryName === "Culture"
              ? (this.heroImageUrl =
                  "https://reseau.fatom.org/wp-content/uploads/2024/11/Massa-202413-scaled.jpg")
              : this.currentCategoryName === "Environnement"
                ? (this.heroImageUrl =
                    "https://zupimages.net/up/24/43/68dg.jpg")
                : (this.heroImageUrl =
                    "https://zupimages.net/up/24/43/68dg.jpg");
      },
      decodeHtmlEntities(t) {
        return new DOMParser().parseFromString(t, "text/html").documentElement
          .textContent;
      },
      truncateText(t, e) {
        const n = t.replace(/<[^>]*>/g, "");
        return n.length > e ? n.substring(0, e) + "[...]" : n;
      },
      changePage(t) {
        t >= 1 && t <= this.totalPages && (this.currentPage = t);
      },
    },
    async mounted() {
      this.loadCategoryInfo();
    },
  },
  k_ = { key: 0, class: "container" },
  V_ = { class: "row mt-5" },
  B_ = { key: 0, class: "post-list" },
  j_ = { class: "card h-100" },
  H_ = ["src"],
  F_ = { class: "card-body" },
  z_ = { class: "card-title" },
  G_ = { class: "card-text" },
  W_ = {
    class: "card-footer text-muted",
    style: { border: "none", "text-align": "center", background: "none" },
  },
  U_ = { key: 1, class: "col-12" },
  K_ = { key: 0, class: "pagination-container" },
  Y_ = ["disabled"],
  q_ = ["disabled"];
function X_(t, e, n, s, i, r) {
  const o = he("LoaderComponent"),
    a = he("HeaderSection"),
    l = he("HeroSection"),
    u = he("router-link"),
    c = he("FooterSection");
  return (
    X(),
    Z("div", null, [
      Q(o, { isLoading: i.isLoading, text: "FATOM" }, null, 8, ["isLoading"]),
      Q(a),
      Q(l, { backgroundImage: i.heroImageUrl }, null, 8, ["backgroundImage"]),
      C(
        "h4",
        { class: "title", style: En(r.titleBackgroundStyle) },
        Ce(i.currentCategoryName),
        5,
      ),
      i.isLoading
        ? ht("", !0)
        : (X(),
          Z("div", k_, [
            C("div", V_, [
              t.posts.length
                ? (X(),
                  Z("div", B_, [
                    (X(!0),
                    Z(
                      Te,
                      null,
                      Ot(
                        r.paginatedPosts,
                        (d) => (
                          X(),
                          Z("div", { class: "post-card", key: d.id }, [
                            C("div", j_, [
                              C(
                                "img",
                                {
                                  src: d.featuredImage || i.placeholderImage,
                                  alt: "Image mise en avant",
                                  class: "img-fluid",
                                },
                                null,
                                8,
                                H_,
                              ),
                              C("div", F_, [
                                C(
                                  "h5",
                                  z_,
                                  Ce(
                                    r.truncateText(
                                      r.decodeHtmlEntities(d.title),
                                    ),
                                  ),
                                  1,
                                ),
                                C(
                                  "p",
                                  G_,
                                  Ce(
                                    r.truncateText(
                                      r.decodeHtmlEntities(d.excerpt),
                                      200,
                                    ),
                                  ),
                                  1,
                                ),
                              ]),
                              C("div", W_, [
                                Q(
                                  u,
                                  {
                                    to: `/post/${d.id}`,
                                    class: "btn btn-primary",
                                  },
                                  {
                                    default: _e(
                                      () => e[2] || (e[2] = [be("Lire plus")]),
                                    ),
                                    _: 2,
                                  },
                                  1032,
                                  ["to"],
                                ),
                              ]),
                            ]),
                          ])
                        ),
                      ),
                      128,
                    )),
                  ]))
                : (X(),
                  Z(
                    "div",
                    U_,
                    e[3] ||
                      (e[3] = [
                        C(
                          "p",
                          null,
                          "Aucun article trouv\xE9 pour cette cat\xE9gorie.",
                          -1,
                        ),
                      ]),
                  )),
            ]),
            r.totalPages > 1
              ? (X(),
                Z("div", K_, [
                  C(
                    "button",
                    {
                      class: "btn btn-secondary",
                      disabled: i.currentPage === 1,
                      onClick:
                        e[0] || (e[0] = (d) => r.changePage(i.currentPage - 1)),
                    },
                    " Pr\xE9c\xE9dent ",
                    8,
                    Y_,
                  ),
                  C(
                    "span",
                    null,
                    "Page " + Ce(i.currentPage) + " sur " + Ce(r.totalPages),
                    1,
                  ),
                  C(
                    "button",
                    {
                      class: "btn btn-secondary",
                      disabled: i.currentPage === r.totalPages,
                      onClick:
                        e[1] || (e[1] = (d) => r.changePage(i.currentPage + 1)),
                    },
                    " Suivant ",
                    8,
                    q_,
                  ),
                ]))
              : ht("", !0),
          ])),
      Q(c),
    ])
  );
}
var Q_ = Fe(R_, [["render", X_]]);
const J_ = {
    components: { HeaderSection: Oo, FooterSection: Po, LoaderComponent: Mu },
    data() {
      return {
        id: "",
        post: null,
        isLoading: !0,
        images: [],
        cleanedContent: "",
        isModalOpen: !1,
        zoomedImage: "",
        currentPage: 1,
        imagesPerPage: 6,
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.images.length / this.imagesPerPage);
      },
      paginatedImages() {
        const t = (this.currentPage - 1) * this.imagesPerPage,
          e = t + this.imagesPerPage;
        return this.images.slice(t, e);
      },
    },
    methods: {
      decodeHtmlEntities(t) {
        return new DOMParser().parseFromString(t, "text/html").documentElement
          .textContent;
      },
      async fetchPostById(t) {
        this.isLoading = !0;
        try {
          const e = await fetch(
            `https://reseau.fatom.org/wp-json/wp/v2/posts/${t}`,
          );
          if (!e.ok) throw new Error("Failed to fetch the post");
          const n = await e.json();
          if (n.featured_media) {
            const a = await (
              await fetch(
                `https://reseau.fatom.org/wp-json/wp/v2/media/${n.featured_media}`,
              )
            ).json();
            n.featuredImage = a.source_url;
          }
          n.categories && (n.categories = n.categories);
          const i = new DOMParser().parseFromString(
              n.content.rendered,
              "text/html",
            ),
            r = i.querySelectorAll("img");
          ((this.images = Array.from(r).map((o) => o.src)),
            r.forEach((o) => o.remove()),
            (this.cleanedContent = i.body.innerHTML),
            (this.post = n));
        } catch (e) {
          (console.error("Erreur lors de la r\xE9cup\xE9ration du post:", e),
            (this.post = null));
        } finally {
          this.isLoading = !1;
        }
      },
      getPostId() {
        this.id = this.$route.params.id;
      },
      zoomImage(t) {
        ((this.zoomedImage = t), (this.isModalOpen = !0));
      },
      closeModal() {
        ((this.isModalOpen = !1), (this.zoomedImage = ""));
      },
      nextPage() {
        this.currentPage < this.totalPages && this.currentPage++;
      },
      prevPage() {
        this.currentPage > 1 && this.currentPage--;
      },
    },
    mounted() {
      (this.getPostId(), this.fetchPostById(this.id));
    },
  },
  Z_ = { key: 0, class: "main-content" },
  eE = { key: 0, class: "featured-image-container" },
  tE = ["src"],
  nE = { class: "description" },
  sE = ["innerHTML"],
  iE = { key: 1, class: "content-images" },
  rE = { class: "image-gallery" },
  oE = ["src", "onClick"],
  aE = { key: 0, class: "pagination" },
  lE = ["disabled"],
  cE = ["disabled"],
  uE = ["src"],
  dE = { key: 1 };
function fE(t, e, n, s, i, r) {
  const o = he("LoaderComponent"),
    a = he("HeaderSection"),
    l = he("FooterSection");
  return (
    X(),
    Z("div", null, [
      Q(o, { isLoading: i.isLoading, text: "FATOM" }, null, 8, ["isLoading"]),
      Q(a),
      e[7] ||
        (e[7] = C(
          "div",
          { class: "header-section" },
          [C("h2", null, "\xC9DUCATION")],
          -1,
        )),
      i.isLoading
        ? (X(),
          Z(
            "div",
            dE,
            e[6] ||
              (e[6] = [
                C("p", null, "Le post n'a pas \xE9t\xE9 trouv\xE9.", -1),
              ]),
          ))
        : (X(),
          Z("div", Z_, [
            C(
              "h1",
              {
                class: Ns([
                  "title",
                  {
                    "blue-background":
                      i.post.categories && i.post.categories.includes(2),
                    "orange-background":
                      i.post.categories && i.post.categories.includes(3),
                    "red-background":
                      i.post.categories && i.post.categories.includes(4),
                    "green-background":
                      i.post.categories && i.post.categories.includes(5),
                  },
                ]),
              },
              Ce(r.decodeHtmlEntities(i.post.title.rendered)),
              3,
            ),
            i.post.featuredImage
              ? (X(),
                Z("div", eE, [
                  C(
                    "img",
                    {
                      src: i.post.featuredImage,
                      alt: "Image mise en avant",
                      class: "image-font",
                    },
                    null,
                    8,
                    tE,
                  ),
                ]))
              : ht("", !0),
            C("div", nE, [
              C("div", { innerHTML: i.cleanedContent }, null, 8, sE),
            ]),
            r.paginatedImages.length
              ? (X(),
                Z("div", iE, [
                  e[5] || (e[5] = C("h3", null, "Images du contenu :", -1)),
                  C("div", rE, [
                    (X(!0),
                    Z(
                      Te,
                      null,
                      Ot(
                        r.paginatedImages,
                        (u, c) => (
                          X(),
                          Z(
                            "img",
                            {
                              key: c,
                              src: u,
                              alt: "Image int\xE9gr\xE9e",
                              class: "content-image",
                              onClick: (d) => r.zoomImage(u),
                            },
                            null,
                            8,
                            oE,
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                  i.images.length > i.imagesPerPage
                    ? (X(),
                      Z("div", aE, [
                        C(
                          "button",
                          {
                            disabled: i.currentPage === 1,
                            onClick:
                              e[0] ||
                              (e[0] = (...u) => r.prevPage && r.prevPage(...u)),
                          },
                          " Pr\xE9c\xE9dent ",
                          8,
                          lE,
                        ),
                        C(
                          "span",
                          null,
                          "Page " +
                            Ce(i.currentPage) +
                            " / " +
                            Ce(r.totalPages),
                          1,
                        ),
                        C(
                          "button",
                          {
                            disabled: i.currentPage === r.totalPages,
                            onClick:
                              e[1] ||
                              (e[1] = (...u) => r.nextPage && r.nextPage(...u)),
                          },
                          " Suivant ",
                          8,
                          cE,
                        ),
                      ]))
                    : ht("", !0),
                ]))
              : ht("", !0),
            i.isModalOpen
              ? (X(),
                Z(
                  "div",
                  {
                    key: 2,
                    class: "image-modal-overlay",
                    onClick:
                      e[4] ||
                      (e[4] = (...u) => r.closeModal && r.closeModal(...u)),
                  },
                  [
                    C(
                      "div",
                      {
                        class: "image-modal-content",
                        onClick: e[3] || (e[3] = Gc(() => {}, ["stop"])),
                      },
                      [
                        C(
                          "img",
                          {
                            src: i.zoomedImage,
                            alt: "Zoomed Image",
                            class: "zoomed-image",
                          },
                          null,
                          8,
                          uE,
                        ),
                        C(
                          "button",
                          {
                            class: "close-button",
                            onClick:
                              e[2] ||
                              (e[2] = (...u) =>
                                r.closeModal && r.closeModal(...u)),
                          },
                          "Fermer",
                        ),
                      ],
                    ),
                  ],
                ))
              : ht("", !0),
          ])),
      Q(l),
    ])
  );
}
var pE = Fe(J_, [
  ["render", fE],
  ["__scopeId", "data-v-5454b5b4"],
]);
const hE = om({
  history: $h("/"),
  routes: [
    { path: "/", name: "home", component: L_ },
    {
      path: "/about",
      name: "about",
      component: () =>
        us(
          () => import("./AboutView.c8a3e5dc.js"),
          ["assets/AboutView.c8a3e5dc.js", "assets/AboutView.95eafa46.css"],
        ),
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () =>
        us(
          () => import("./ContactsView.079e025d.js"),
          [
            "assets/ContactsView.079e025d.js",
            "assets/ContactsView.1f2a5c45.css",
          ],
        ),
    },
    {
      path: "/partners",
      name: "partners",
      component: () =>
        us(
          () => import("./PartnersViews.cbde6482.js"),
          [
            "assets/PartnersViews.cbde6482.js",
            "assets/PartnersViews.7fa72d9b.css",
          ],
        ),
    },
    {
      path: "/rapports",
      name: "rapports",
      component: () =>
        us(
          () => import("./ReportsView.b39c5268.js"),
          ["assets/ReportsView.b39c5268.js", "assets/ReportsView.bc6b9212.css"],
        ),
    },
    {
      path: "/activities",
      name: "activities",
      component: () =>
        us(
          () => import("./ActivityView.eea6069a.js"),
          [
            "assets/ActivityView.eea6069a.js",
            "assets/ActivityView.b1007235.css",
          ],
        ),
    },
    {
      path: "/categories/:categoryId",
      name: "PostByCategoryView",
      component: Q_,
      props: !0,
    },
    { path: "/post/:id", name: "PostDetailView", component: pE, props: !0 },
  ],
  scrollBehavior(t, e, n) {
    return n || { top: 0 };
  },
});
var mE = Im({
  state: {
    categories: [],
    posts: [],
    all_posts: [],
    reports: [],
    latest_reports: [],
    recentActivities: [],
    rewards: [],
  },
  getters: {},
  mutations: {
    SET_REWARDS(t, e) {
      t.rewards = e;
    },
    SET_POSTS(t, e) {
      t.posts = e;
    },
    SET_ALL_POSTS(t, e) {
      t.all_posts = e;
    },
    SET_CATEGORIES(t, e) {
      t.categories = e
        .filter((n) => [2, 3, 4, 5].includes(Number(n.id)))
        .sort((n, s) => n.id - s.id);
    },
    SET_REPORTS(t, e) {
      const n = e.filter((s) => s.name);
      t.reports = n.sort((s, i) => {
        const r = s.name.toLowerCase(),
          o = i.name.toLowerCase();
        return r < o ? -1 : r > o ? 1 : 0;
      });
    },
    SET_RECENT_ACTIVITIES(t, e) {
      t.recentActivities = e;
    },
    SET_LAST_REPORTS(t, e) {
      t.reports = e;
    },
    SET_POSTS_BY_CATEGORY(t, e) {
      t.posts = e;
    },
  },
  actions: {
    async fetchAllPosts({ commit: t }) {
      try {
        const e = [2, 3, 4, 5, 15, 16, 17, 18, 19, 23].join(","),
          n = await fetch(
            `https://reseau.fatom.org/wp-json/wp/v2/posts?per_page=100&categories=${e}`,
          );
        if (!n.ok)
          throw new Error("Erreur lors de la r\xE9cup\xE9ration des posts");
        const s = await n.json();
        s.sort(
          (r, o) => new Date(o.date).getTime() - new Date(r.date).getTime(),
        );
        const i = await Promise.all(
          s.map(async (r) => {
            let o = null;
            if (r.featured_media)
              try {
                o =
                  (
                    await (
                      await fetch(
                        `https://reseau.fatom.org/wp-json/wp/v2/media/${r.featured_media}`,
                      )
                    ).json()
                  ).source_url || null;
              } catch (a) {
                console.error(
                  `Erreur lors de la r\xE9cup\xE9ration de l'image pour le post ${r.id}:`,
                  a,
                );
              }
            return {
              id: r.id,
              title: r.title.rendered,
              date: new Date(r.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              excerpt: r.excerpt.rendered.replace(/<[^>]+>/g, ""),
              featuredImage: o,
            };
          }),
        );
        (console.log("Les activit\xE9s tri\xE9es par date :", i),
          t("SET_ALL_POSTS", i));
      } catch (e) {
        console.error("Erreur lors de la r\xE9cup\xE9ration des posts :", e);
      }
    },
    async fetchCategories({ commit: t }) {
      try {
        const e = await fetch(
          "https://reseau.fatom.org/wp-json/wp/v2/categories?per_page=50",
          { method: "GET", headers: { "Content-Type": "application/json" } },
        );
        if (!e.ok) throw new Error("Erreur de recup\xE9ration des catalogues");
        const n = await e.json();
        (console.log("test des categories", n), t("SET_CATEGORIES", n));
      } catch (e) {
        console.error("Erreur de recup\xE9ration des catalogues:", e);
      }
    },
    async fetchReports({ commit: t }) {
      try {
        const e = await fetch(
          "https://reseau.fatom.org/wp-json/wp/v2/posts?categories=7&per_page=50",
        );
        if (!e.ok)
          throw new Error("\xC9chec de la r\xE9cup\xE9ration des rapports");
        const n = await e.json();
        console.log("dateTest", n);
        const s = await Promise.all(
          n.map(async (i) => {
            var a;
            const r = i.content.rendered.match(/href="([^"]+\.pdf)"/),
              o = r ? r[1] : null;
            if (i.featured_media) {
              const u = await (
                await fetch(
                  `https://reseau.fatom.org/wp-json/wp/v2/media/${i.featured_media}`,
                )
              ).json();
              i.featured_media_url = u.source_url;
            }
            return {
              id: i.id,
              name:
                ((a = i.title) == null ? void 0 : a.rendered) || "Sans titre",
              pdfUrl: o,
              featuredImage: i.featured_media_url || null,
            };
          }),
        );
        t("SET_REPORTS", s);
      } catch (e) {
        console.error("Erreur lors de la r\xE9cup\xE9ration des rapports:", e);
      }
    },
    async fetchRecentActivities({ commit: t }) {
      try {
        const e = await fetch(
          "https://reseau.fatom.org/wp-json/wp/v2/posts?per_page=50",
        );
        if (!e.ok)
          throw new Error(
            "Erreur lors de la r\xE9cup\xE9ration des activit\xE9s",
          );
        const s = (await e.json()).filter(
          (o) => !o.categories.some((a) => a === 7 || (a >= 15 && a <= 23)),
        );
        s.sort(
          (o, a) =>
            new Date(a.post_date_gmt).getTime() -
            new Date(o.post_date_gmt).getTime(),
        );
        const i = s.slice(0, 3),
          r = await Promise.all(
            i.map(async (o) => {
              let a = null;
              if (o.featured_media)
                try {
                  const u = await fetch(
                    `https://reseau.fatom.org/wp-json/wp/v2/media/${o.featured_media}`,
                  );
                  u.ok && (a = (await u.json()).source_url || null);
                } catch (u) {
                  console.error(
                    `Erreur lors de la r\xE9cup\xE9ration de l'image pour le post ${o.id}:`,
                    u,
                  );
                }
              let l = "";
              if (o.categories.length > 0)
                try {
                  const u = await fetch(
                    `https://reseau.fatom.org/wp-json/wp/v2/categories/${o.categories[0]}`,
                  );
                  u.ok && (l = (await u.json()).name);
                } catch (u) {
                  console.error(
                    `Erreur lors de la r\xE9cup\xE9ration de la cat\xE9gorie pour le post ${o.id}:`,
                    u,
                  );
                }
              return {
                id: o.id,
                title: o.title.rendered,
                date: new Date(o.post_date_gmt).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }),
                excerpt: o.excerpt.rendered.replace(/<[^>]+>/g, ""),
                featuredImage: a,
                categoryName: l,
              };
            }),
          );
        t("SET_RECENT_ACTIVITIES", r);
      } catch (e) {
        console.error(
          "Erreur lors de la r\xE9cup\xE9ration des activit\xE9s:",
          e,
        );
      }
    },
    async fetchPostsByCategory({ commit: t }, e) {
      try {
        const n = await fetch(
          `https://reseau.fatom.org/wp-json/wp/v2/posts?categories=${e}`,
        );
        if (!n.ok)
          throw new Error(
            "\xC9chec de la r\xE9cup\xE9ration des posts par cat\xE9gorie",
          );
        const s = await n.json(),
          i = await Promise.all(
            s.map(async (r) => {
              if (r.featured_media) {
                const a = await (
                  await fetch(
                    `https://reseau.fatom.org/wp-json/wp/v2/media/${r.featured_media}`,
                  )
                ).json();
                r.featuredImage = a.source_url;
              }
              return {
                id: r.id,
                title: r.title.rendered,
                excerpt: r.excerpt.rendered.replace(/<[^>]+>/g, ""),
                featuredImage: r.featuredImage || null,
              };
            }),
          );
        t("SET_POSTS_BY_CATEGORY", i);
      } catch (n) {
        console.error(
          "Erreur lors de la r\xE9cup\xE9ration des posts par cat\xE9gorie:",
          n,
        );
      }
    },
    async fetchLastReports({ commit: t }) {
      try {
        const e = await fetch(
          "https://reseau.fatom.org/wp-json/wp/v2/posts?categories=7&per_page=50",
        );
        if (!e.ok)
          throw new Error(
            "\xC9chec de la r\xE9cup\xE9ration des derniers rapports",
          );
        const n = await e.json();
        console.log(n);
        const i = (
          await Promise.all(
            n.map(async (r) => {
              var l;
              const o = r.content.rendered.match(/href="([^"]+\.pdf)"/),
                a = o ? o[1] : null;
              if (r.featured_media) {
                const c = await (
                  await fetch(
                    `https://reseau.fatom.org/wp-json/wp/v2/media/${r.featured_media}`,
                  )
                ).json();
                r.featured_media_url = c.source_url;
              }
              return {
                id: r.id,
                name:
                  ((l = r.title) == null ? void 0 : l.rendered) || "Sans titre",
                pdfUrl: a,
                featuredImage: r.featured_media_url || null,
                date: new Date(r.date),
              };
            }),
          )
        ).sort((r, o) => {
          const a = r.name.toLowerCase(),
            l = o.name.toLowerCase();
          return a > l ? -1 : a < l ? 1 : 0;
        });
        t("SET_LAST_REPORTS", i);
      } catch (e) {
        console.error(
          "Erreur lors de la r\xE9cup\xE9ration des derniers rapports:",
          e,
        );
      }
    },
    async fetchRewards({ commit: t }) {
      try {
        const e = await fetch(
          "https://reseau.fatom.org/wp-json/wp/v2/posts?categories=22",
        );
        if (!e.ok)
          throw new Error(
            "\xC9chec de la r\xE9cup\xE9ration des r\xE9compenses",
          );
        const n = await e.json(),
          s = await Promise.all(
            n.map(async (i) => {
              var o;
              const r = {
                id: i.id,
                title:
                  ((o = i.title) == null ? void 0 : o.rendered) || "Sans titre",
                image: null,
              };
              if (i.featured_media) {
                const l = await (
                  await fetch(
                    `https://reseau.fatom.org/wp-json/wp/v2/media/${i.featured_media}`,
                  )
                ).json();
                r.image = l.source_url || null;
              }
              return r;
            }),
          );
        t("SET_REWARDS", s);
      } catch (e) {
        console.error(
          "Erreur lors de la r\xE9cup\xE9ration des r\xE9compenses :",
          e,
        );
      }
    },
  },
  modules: {},
});
var Ve = "top",
  et = "bottom",
  tt = "right",
  Be = "left",
  Di = "auto",
  ns = [Ve, et, tt, Be],
  gn = "start",
  Un = "end",
  Nu = "clippingParents",
  Lo = "viewport",
  Ln = "popper",
  Du = "reference",
  Yr = ns.reduce(function (t, e) {
    return t.concat([e + "-" + gn, e + "-" + Un]);
  }, []),
  Mo = [].concat(ns, [Di]).reduce(function (t, e) {
    return t.concat([e, e + "-" + gn, e + "-" + Un]);
  }, []),
  $u = "beforeRead",
  Ru = "read",
  ku = "afterRead",
  Vu = "beforeMain",
  Bu = "main",
  ju = "afterMain",
  Hu = "beforeWrite",
  Fu = "write",
  zu = "afterWrite",
  Gu = [$u, Ru, ku, Vu, Bu, ju, Hu, Fu, zu];
function Pt(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function nt(t) {
  if (t == null) return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return (e && e.defaultView) || window;
  }
  return t;
}
function vn(t) {
  var e = nt(t).Element;
  return t instanceof e || t instanceof Element;
}
function at(t) {
  var e = nt(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function No(t) {
  if (typeof ShadowRoot == "undefined") return !1;
  var e = nt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function gE(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function (n) {
    var s = e.styles[n] || {},
      i = e.attributes[n] || {},
      r = e.elements[n];
    !at(r) ||
      !Pt(r) ||
      (Object.assign(r.style, s),
      Object.keys(i).forEach(function (o) {
        var a = i[o];
        a === !1 ? r.removeAttribute(o) : r.setAttribute(o, a === !0 ? "" : a);
      }));
  });
}
function vE(t) {
  var e = t.state,
    n = {
      popper: {
        position: e.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(e.elements.popper.style, n.popper),
    (e.styles = n),
    e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
    function () {
      Object.keys(e.elements).forEach(function (s) {
        var i = e.elements[s],
          r = e.attributes[s] || {},
          o = Object.keys(e.styles.hasOwnProperty(s) ? e.styles[s] : n[s]),
          a = o.reduce(function (l, u) {
            return ((l[u] = ""), l);
          }, {});
        !at(i) ||
          !Pt(i) ||
          (Object.assign(i.style, a),
          Object.keys(r).forEach(function (l) {
            i.removeAttribute(l);
          }));
      });
    }
  );
}
var Do = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: gE,
  effect: vE,
  requires: ["computeStyles"],
};
function At(t) {
  return t.split("-")[0];
}
var fn = Math.max,
  _i = Math.min,
  Kn = Math.round;
function qr() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands)
    ? t.brands
        .map(function (e) {
          return e.brand + "/" + e.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Wu() {
  return !/^((?!chrome|android).)*safari/i.test(qr());
}
function Yn(t, e, n) {
  (e === void 0 && (e = !1), n === void 0 && (n = !1));
  var s = t.getBoundingClientRect(),
    i = 1,
    r = 1;
  e &&
    at(t) &&
    ((i = (t.offsetWidth > 0 && Kn(s.width) / t.offsetWidth) || 1),
    (r = (t.offsetHeight > 0 && Kn(s.height) / t.offsetHeight) || 1));
  var o = vn(t) ? nt(t) : window,
    a = o.visualViewport,
    l = !Wu() && n,
    u = (s.left + (l && a ? a.offsetLeft : 0)) / i,
    c = (s.top + (l && a ? a.offsetTop : 0)) / r,
    d = s.width / i,
    p = s.height / r;
  return {
    width: d,
    height: p,
    top: c,
    right: u + d,
    bottom: c + p,
    left: u,
    x: u,
    y: c,
  };
}
function $o(t) {
  var e = Yn(t),
    n = t.offsetWidth,
    s = t.offsetHeight;
  return (
    Math.abs(e.width - n) <= 1 && (n = e.width),
    Math.abs(e.height - s) <= 1 && (s = e.height),
    { x: t.offsetLeft, y: t.offsetTop, width: n, height: s }
  );
}
function Uu(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e)) return !0;
  if (n && No(n)) {
    var s = e;
    do {
      if (s && t.isSameNode(s)) return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function Vt(t) {
  return nt(t).getComputedStyle(t);
}
function _E(t) {
  return ["table", "td", "th"].indexOf(Pt(t)) >= 0;
}
function en(t) {
  return ((vn(t) ? t.ownerDocument : t.document) || window.document)
    .documentElement;
}
function $i(t) {
  return Pt(t) === "html"
    ? t
    : t.assignedSlot || t.parentNode || (No(t) ? t.host : null) || en(t);
}
function nl(t) {
  return !at(t) || Vt(t).position === "fixed" ? null : t.offsetParent;
}
function EE(t) {
  var e = /firefox/i.test(qr()),
    n = /Trident/i.test(qr());
  if (n && at(t)) {
    var s = Vt(t);
    if (s.position === "fixed") return null;
  }
  var i = $i(t);
  for (No(i) && (i = i.host); at(i) && ["html", "body"].indexOf(Pt(i)) < 0; ) {
    var r = Vt(i);
    if (
      r.transform !== "none" ||
      r.perspective !== "none" ||
      r.contain === "paint" ||
      ["transform", "perspective"].indexOf(r.willChange) !== -1 ||
      (e && r.willChange === "filter") ||
      (e && r.filter && r.filter !== "none")
    )
      return i;
    i = i.parentNode;
  }
  return null;
}
function ks(t) {
  for (var e = nt(t), n = nl(t); n && _E(n) && Vt(n).position === "static"; )
    n = nl(n);
  return n &&
    (Pt(n) === "html" || (Pt(n) === "body" && Vt(n).position === "static"))
    ? e
    : n || EE(t) || e;
}
function Ro(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function ys(t, e, n) {
  return fn(t, _i(e, n));
}
function bE(t, e, n) {
  var s = ys(t, e, n);
  return s > n ? n : s;
}
function Ku() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Yu(t) {
  return Object.assign({}, Ku(), t);
}
function qu(t, e) {
  return e.reduce(function (n, s) {
    return ((n[s] = t), n);
  }, {});
}
var wE = function (e, n) {
  return (
    (e =
      typeof e == "function"
        ? e(Object.assign({}, n.rects, { placement: n.placement }))
        : e),
    Yu(typeof e != "number" ? e : qu(e, ns))
  );
};
function yE(t) {
  var e,
    n = t.state,
    s = t.name,
    i = t.options,
    r = n.elements.arrow,
    o = n.modifiersData.popperOffsets,
    a = At(n.placement),
    l = Ro(a),
    u = [Be, tt].indexOf(a) >= 0,
    c = u ? "height" : "width";
  if (!(!r || !o)) {
    var d = wE(i.padding, n),
      p = $o(r),
      f = l === "y" ? Ve : Be,
      g = l === "y" ? et : tt,
      v =
        n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c],
      S = o[l] - n.rects.reference[l],
      E = ks(r),
      y = E ? (l === "y" ? E.clientHeight || 0 : E.clientWidth || 0) : 0,
      b = v / 2 - S / 2,
      w = d[f],
      A = y - p[c] - d[g],
      D = y / 2 - p[c] / 2 + b,
      G = ys(w, D, A),
      j = l;
    n.modifiersData[s] = ((e = {}), (e[j] = G), (e.centerOffset = G - D), e);
  }
}
function SE(t) {
  var e = t.state,
    n = t.options,
    s = n.element,
    i = s === void 0 ? "[data-popper-arrow]" : s;
  i != null &&
    ((typeof i == "string" && ((i = e.elements.popper.querySelector(i)), !i)) ||
      !Uu(e.elements.popper, i) ||
      (e.elements.arrow = i));
}
var Xu = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: yE,
  effect: SE,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function qn(t) {
  return t.split("-")[1];
}
var TE = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function AE(t, e) {
  var n = t.x,
    s = t.y,
    i = e.devicePixelRatio || 1;
  return { x: Kn(n * i) / i || 0, y: Kn(s * i) / i || 0 };
}
function sl(t) {
  var e,
    n = t.popper,
    s = t.popperRect,
    i = t.placement,
    r = t.variation,
    o = t.offsets,
    a = t.position,
    l = t.gpuAcceleration,
    u = t.adaptive,
    c = t.roundOffsets,
    d = t.isFixed,
    p = o.x,
    f = p === void 0 ? 0 : p,
    g = o.y,
    v = g === void 0 ? 0 : g,
    S = typeof c == "function" ? c({ x: f, y: v }) : { x: f, y: v };
  ((f = S.x), (v = S.y));
  var E = o.hasOwnProperty("x"),
    y = o.hasOwnProperty("y"),
    b = Be,
    w = Ve,
    A = window;
  if (u) {
    var D = ks(n),
      G = "clientHeight",
      j = "clientWidth";
    if (
      (D === nt(n) &&
        ((D = en(n)),
        Vt(D).position !== "static" &&
          a === "absolute" &&
          ((G = "scrollHeight"), (j = "scrollWidth"))),
      (D = D),
      i === Ve || ((i === Be || i === tt) && r === Un))
    ) {
      w = et;
      var N = d && D === A && A.visualViewport ? A.visualViewport.height : D[G];
      ((v -= N - s.height), (v *= l ? 1 : -1));
    }
    if (i === Be || ((i === Ve || i === et) && r === Un)) {
      b = tt;
      var P = d && D === A && A.visualViewport ? A.visualViewport.width : D[j];
      ((f -= P - s.width), (f *= l ? 1 : -1));
    }
  }
  var F = Object.assign({ position: a }, u && TE),
    K = c === !0 ? AE({ x: f, y: v }, nt(n)) : { x: f, y: v };
  if (((f = K.x), (v = K.y), l)) {
    var z;
    return Object.assign(
      {},
      F,
      ((z = {}),
      (z[w] = y ? "0" : ""),
      (z[b] = E ? "0" : ""),
      (z.transform =
        (A.devicePixelRatio || 1) <= 1
          ? "translate(" + f + "px, " + v + "px)"
          : "translate3d(" + f + "px, " + v + "px, 0)"),
      z),
    );
  }
  return Object.assign(
    {},
    F,
    ((e = {}),
    (e[w] = y ? v + "px" : ""),
    (e[b] = E ? f + "px" : ""),
    (e.transform = ""),
    e),
  );
}
function xE(t) {
  var e = t.state,
    n = t.options,
    s = n.gpuAcceleration,
    i = s === void 0 ? !0 : s,
    r = n.adaptive,
    o = r === void 0 ? !0 : r,
    a = n.roundOffsets,
    l = a === void 0 ? !0 : a,
    u = {
      placement: At(e.placement),
      variation: qn(e.placement),
      popper: e.elements.popper,
      popperRect: e.rects.popper,
      gpuAcceleration: i,
      isFixed: e.options.strategy === "fixed",
    };
  (e.modifiersData.popperOffsets != null &&
    (e.styles.popper = Object.assign(
      {},
      e.styles.popper,
      sl(
        Object.assign({}, u, {
          offsets: e.modifiersData.popperOffsets,
          position: e.options.strategy,
          adaptive: o,
          roundOffsets: l,
        }),
      ),
    )),
    e.modifiersData.arrow != null &&
      (e.styles.arrow = Object.assign(
        {},
        e.styles.arrow,
        sl(
          Object.assign({}, u, {
            offsets: e.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l,
          }),
        ),
      )),
    (e.attributes.popper = Object.assign({}, e.attributes.popper, {
      "data-popper-placement": e.placement,
    })));
}
var ko = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: xE,
    data: {},
  },
  Ks = { passive: !0 };
function CE(t) {
  var e = t.state,
    n = t.instance,
    s = t.options,
    i = s.scroll,
    r = i === void 0 ? !0 : i,
    o = s.resize,
    a = o === void 0 ? !0 : o,
    l = nt(e.elements.popper),
    u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return (
    r &&
      u.forEach(function (c) {
        c.addEventListener("scroll", n.update, Ks);
      }),
    a && l.addEventListener("resize", n.update, Ks),
    function () {
      (r &&
        u.forEach(function (c) {
          c.removeEventListener("scroll", n.update, Ks);
        }),
        a && l.removeEventListener("resize", n.update, Ks));
    }
  );
}
var Vo = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: CE,
    data: {},
  },
  OE = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ri(t) {
  return t.replace(/left|right|bottom|top/g, function (e) {
    return OE[e];
  });
}
var PE = { start: "end", end: "start" };
function il(t) {
  return t.replace(/start|end/g, function (e) {
    return PE[e];
  });
}
function Bo(t) {
  var e = nt(t),
    n = e.pageXOffset,
    s = e.pageYOffset;
  return { scrollLeft: n, scrollTop: s };
}
function jo(t) {
  return Yn(en(t)).left + Bo(t).scrollLeft;
}
function IE(t, e) {
  var n = nt(t),
    s = en(t),
    i = n.visualViewport,
    r = s.clientWidth,
    o = s.clientHeight,
    a = 0,
    l = 0;
  if (i) {
    ((r = i.width), (o = i.height));
    var u = Wu();
    (u || (!u && e === "fixed")) && ((a = i.offsetLeft), (l = i.offsetTop));
  }
  return { width: r, height: o, x: a + jo(t), y: l };
}
function LE(t) {
  var e,
    n = en(t),
    s = Bo(t),
    i = (e = t.ownerDocument) == null ? void 0 : e.body,
    r = fn(
      n.scrollWidth,
      n.clientWidth,
      i ? i.scrollWidth : 0,
      i ? i.clientWidth : 0,
    ),
    o = fn(
      n.scrollHeight,
      n.clientHeight,
      i ? i.scrollHeight : 0,
      i ? i.clientHeight : 0,
    ),
    a = -s.scrollLeft + jo(t),
    l = -s.scrollTop;
  return (
    Vt(i || n).direction === "rtl" &&
      (a += fn(n.clientWidth, i ? i.clientWidth : 0) - r),
    { width: r, height: o, x: a, y: l }
  );
}
function Ho(t) {
  var e = Vt(t),
    n = e.overflow,
    s = e.overflowX,
    i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + s);
}
function Qu(t) {
  return ["html", "body", "#document"].indexOf(Pt(t)) >= 0
    ? t.ownerDocument.body
    : at(t) && Ho(t)
      ? t
      : Qu($i(t));
}
function Ss(t, e) {
  var n;
  e === void 0 && (e = []);
  var s = Qu(t),
    i = s === ((n = t.ownerDocument) == null ? void 0 : n.body),
    r = nt(s),
    o = i ? [r].concat(r.visualViewport || [], Ho(s) ? s : []) : s,
    a = e.concat(o);
  return i ? a : a.concat(Ss($i(o)));
}
function Xr(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height,
  });
}
function ME(t, e) {
  var n = Yn(t, !1, e === "fixed");
  return (
    (n.top = n.top + t.clientTop),
    (n.left = n.left + t.clientLeft),
    (n.bottom = n.top + t.clientHeight),
    (n.right = n.left + t.clientWidth),
    (n.width = t.clientWidth),
    (n.height = t.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function rl(t, e, n) {
  return e === Lo ? Xr(IE(t, n)) : vn(e) ? ME(e, n) : Xr(LE(en(t)));
}
function NE(t) {
  var e = Ss($i(t)),
    n = ["absolute", "fixed"].indexOf(Vt(t).position) >= 0,
    s = n && at(t) ? ks(t) : t;
  return vn(s)
    ? e.filter(function (i) {
        return vn(i) && Uu(i, s) && Pt(i) !== "body";
      })
    : [];
}
function DE(t, e, n, s) {
  var i = e === "clippingParents" ? NE(t) : [].concat(e),
    r = [].concat(i, [n]),
    o = r[0],
    a = r.reduce(
      function (l, u) {
        var c = rl(t, u, s);
        return (
          (l.top = fn(c.top, l.top)),
          (l.right = _i(c.right, l.right)),
          (l.bottom = _i(c.bottom, l.bottom)),
          (l.left = fn(c.left, l.left)),
          l
        );
      },
      rl(t, o, s),
    );
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function Ju(t) {
  var e = t.reference,
    n = t.element,
    s = t.placement,
    i = s ? At(s) : null,
    r = s ? qn(s) : null,
    o = e.x + e.width / 2 - n.width / 2,
    a = e.y + e.height / 2 - n.height / 2,
    l;
  switch (i) {
    case Ve:
      l = { x: o, y: e.y - n.height };
      break;
    case et:
      l = { x: o, y: e.y + e.height };
      break;
    case tt:
      l = { x: e.x + e.width, y: a };
      break;
    case Be:
      l = { x: e.x - n.width, y: a };
      break;
    default:
      l = { x: e.x, y: e.y };
  }
  var u = i ? Ro(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (r) {
      case gn:
        l[u] = l[u] - (e[c] / 2 - n[c] / 2);
        break;
      case Un:
        l[u] = l[u] + (e[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Xn(t, e) {
  e === void 0 && (e = {});
  var n = e,
    s = n.placement,
    i = s === void 0 ? t.placement : s,
    r = n.strategy,
    o = r === void 0 ? t.strategy : r,
    a = n.boundary,
    l = a === void 0 ? Nu : a,
    u = n.rootBoundary,
    c = u === void 0 ? Lo : u,
    d = n.elementContext,
    p = d === void 0 ? Ln : d,
    f = n.altBoundary,
    g = f === void 0 ? !1 : f,
    v = n.padding,
    S = v === void 0 ? 0 : v,
    E = Yu(typeof S != "number" ? S : qu(S, ns)),
    y = p === Ln ? Du : Ln,
    b = t.rects.popper,
    w = t.elements[g ? y : p],
    A = DE(vn(w) ? w : w.contextElement || en(t.elements.popper), l, c, o),
    D = Yn(t.elements.reference),
    G = Ju({ reference: D, element: b, strategy: "absolute", placement: i }),
    j = Xr(Object.assign({}, b, G)),
    N = p === Ln ? j : D,
    P = {
      top: A.top - N.top + E.top,
      bottom: N.bottom - A.bottom + E.bottom,
      left: A.left - N.left + E.left,
      right: N.right - A.right + E.right,
    },
    F = t.modifiersData.offset;
  if (p === Ln && F) {
    var K = F[i];
    Object.keys(P).forEach(function (z) {
      var oe = [tt, et].indexOf(z) >= 0 ? 1 : -1,
        de = [Ve, et].indexOf(z) >= 0 ? "y" : "x";
      P[z] += K[de] * oe;
    });
  }
  return P;
}
function $E(t, e) {
  e === void 0 && (e = {});
  var n = e,
    s = n.placement,
    i = n.boundary,
    r = n.rootBoundary,
    o = n.padding,
    a = n.flipVariations,
    l = n.allowedAutoPlacements,
    u = l === void 0 ? Mo : l,
    c = qn(s),
    d = c
      ? a
        ? Yr
        : Yr.filter(function (g) {
            return qn(g) === c;
          })
      : ns,
    p = d.filter(function (g) {
      return u.indexOf(g) >= 0;
    });
  p.length === 0 && (p = d);
  var f = p.reduce(function (g, v) {
    return (
      (g[v] = Xn(t, { placement: v, boundary: i, rootBoundary: r, padding: o })[
        At(v)
      ]),
      g
    );
  }, {});
  return Object.keys(f).sort(function (g, v) {
    return f[g] - f[v];
  });
}
function RE(t) {
  if (At(t) === Di) return [];
  var e = ri(t);
  return [il(t), e, il(e)];
}
function kE(t) {
  var e = t.state,
    n = t.options,
    s = t.name;
  if (!e.modifiersData[s]._skip) {
    for (
      var i = n.mainAxis,
        r = i === void 0 ? !0 : i,
        o = n.altAxis,
        a = o === void 0 ? !0 : o,
        l = n.fallbackPlacements,
        u = n.padding,
        c = n.boundary,
        d = n.rootBoundary,
        p = n.altBoundary,
        f = n.flipVariations,
        g = f === void 0 ? !0 : f,
        v = n.allowedAutoPlacements,
        S = e.options.placement,
        E = At(S),
        y = E === S,
        b = l || (y || !g ? [ri(S)] : RE(S)),
        w = [S].concat(b).reduce(function (Ge, We) {
          return Ge.concat(
            At(We) === Di
              ? $E(e, {
                  placement: We,
                  boundary: c,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: g,
                  allowedAutoPlacements: v,
                })
              : We,
          );
        }, []),
        A = e.rects.reference,
        D = e.rects.popper,
        G = new Map(),
        j = !0,
        N = w[0],
        P = 0;
      P < w.length;
      P++
    ) {
      var F = w[P],
        K = At(F),
        z = qn(F) === gn,
        oe = [Ve, et].indexOf(K) >= 0,
        de = oe ? "width" : "height",
        se = Xn(e, {
          placement: F,
          boundary: c,
          rootBoundary: d,
          altBoundary: p,
          padding: u,
        }),
        ne = oe ? (z ? tt : Be) : z ? et : Ve;
      A[de] > D[de] && (ne = ri(ne));
      var ie = ri(ne),
        ye = [];
      if (
        (r && ye.push(se[K] <= 0),
        a && ye.push(se[ne] <= 0, se[ie] <= 0),
        ye.every(function (Ge) {
          return Ge;
        }))
      ) {
        ((N = F), (j = !1));
        break;
      }
      G.set(F, ye);
    }
    if (j)
      for (
        var Oe = g ? 3 : 1,
          Pe = function (We) {
            var Ae = w.find(function (x) {
              var B = G.get(x);
              if (B)
                return B.slice(0, We).every(function (k) {
                  return k;
                });
            });
            if (Ae) return ((N = Ae), "break");
          },
          we = Oe;
        we > 0;
        we--
      ) {
        var ft = Pe(we);
        if (ft === "break") break;
      }
    e.placement !== N &&
      ((e.modifiersData[s]._skip = !0), (e.placement = N), (e.reset = !0));
  }
}
var Zu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: kE,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function ol(t, e, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: t.top - e.height - n.y,
      right: t.right - e.width + n.x,
      bottom: t.bottom - e.height + n.y,
      left: t.left - e.width - n.x,
    }
  );
}
function al(t) {
  return [Ve, tt, et, Be].some(function (e) {
    return t[e] >= 0;
  });
}
function VE(t) {
  var e = t.state,
    n = t.name,
    s = e.rects.reference,
    i = e.rects.popper,
    r = e.modifiersData.preventOverflow,
    o = Xn(e, { elementContext: "reference" }),
    a = Xn(e, { altBoundary: !0 }),
    l = ol(o, s),
    u = ol(a, i, r),
    c = al(l),
    d = al(u);
  ((e.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d,
  }),
    (e.attributes.popper = Object.assign({}, e.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": d,
    })));
}
var ed = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: VE,
};
function BE(t, e, n) {
  var s = At(t),
    i = [Be, Ve].indexOf(s) >= 0 ? -1 : 1,
    r = typeof n == "function" ? n(Object.assign({}, e, { placement: t })) : n,
    o = r[0],
    a = r[1];
  return (
    (o = o || 0),
    (a = (a || 0) * i),
    [Be, tt].indexOf(s) >= 0 ? { x: a, y: o } : { x: o, y: a }
  );
}
function jE(t) {
  var e = t.state,
    n = t.options,
    s = t.name,
    i = n.offset,
    r = i === void 0 ? [0, 0] : i,
    o = Mo.reduce(function (c, d) {
      return ((c[d] = BE(d, e.rects, r)), c);
    }, {}),
    a = o[e.placement],
    l = a.x,
    u = a.y;
  (e.modifiersData.popperOffsets != null &&
    ((e.modifiersData.popperOffsets.x += l),
    (e.modifiersData.popperOffsets.y += u)),
    (e.modifiersData[s] = o));
}
var td = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: jE,
};
function HE(t) {
  var e = t.state,
    n = t.name;
  e.modifiersData[n] = Ju({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement,
  });
}
var Fo = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: HE,
  data: {},
};
function FE(t) {
  return t === "x" ? "y" : "x";
}
function zE(t) {
  var e = t.state,
    n = t.options,
    s = t.name,
    i = n.mainAxis,
    r = i === void 0 ? !0 : i,
    o = n.altAxis,
    a = o === void 0 ? !1 : o,
    l = n.boundary,
    u = n.rootBoundary,
    c = n.altBoundary,
    d = n.padding,
    p = n.tether,
    f = p === void 0 ? !0 : p,
    g = n.tetherOffset,
    v = g === void 0 ? 0 : g,
    S = Xn(e, { boundary: l, rootBoundary: u, padding: d, altBoundary: c }),
    E = At(e.placement),
    y = qn(e.placement),
    b = !y,
    w = Ro(E),
    A = FE(w),
    D = e.modifiersData.popperOffsets,
    G = e.rects.reference,
    j = e.rects.popper,
    N =
      typeof v == "function"
        ? v(Object.assign({}, e.rects, { placement: e.placement }))
        : v,
    P =
      typeof N == "number"
        ? { mainAxis: N, altAxis: N }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, N),
    F = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
    K = { x: 0, y: 0 };
  if (!!D) {
    if (r) {
      var z,
        oe = w === "y" ? Ve : Be,
        de = w === "y" ? et : tt,
        se = w === "y" ? "height" : "width",
        ne = D[w],
        ie = ne + S[oe],
        ye = ne - S[de],
        Oe = f ? -j[se] / 2 : 0,
        Pe = y === gn ? G[se] : j[se],
        we = y === gn ? -j[se] : -G[se],
        ft = e.elements.arrow,
        Ge = f && ft ? $o(ft) : { width: 0, height: 0 },
        We = e.modifiersData["arrow#persistent"]
          ? e.modifiersData["arrow#persistent"].padding
          : Ku(),
        Ae = We[oe],
        x = We[de],
        B = ys(0, G[se], Ge[se]),
        k = b ? G[se] / 2 - Oe - B - Ae - P.mainAxis : Pe - B - Ae - P.mainAxis,
        W = b ? -G[se] / 2 + Oe + B + x + P.mainAxis : we + B + x + P.mainAxis,
        ae = e.elements.arrow && ks(e.elements.arrow),
        ge = ae ? (w === "y" ? ae.clientTop || 0 : ae.clientLeft || 0) : 0,
        h = (z = F == null ? void 0 : F[w]) != null ? z : 0,
        m = ne + k - h - ge,
        _ = ne + W - h,
        O = ys(f ? _i(ie, m) : ie, ne, f ? fn(ye, _) : ye);
      ((D[w] = O), (K[w] = O - ne));
    }
    if (a) {
      var T,
        L = w === "x" ? Ve : Be,
        V = w === "x" ? et : tt,
        $ = D[A],
        R = A === "y" ? "height" : "width",
        M = $ + S[L],
        q = $ - S[V],
        H = [Ve, Be].indexOf(E) !== -1,
        U = (T = F == null ? void 0 : F[A]) != null ? T : 0,
        J = H ? M : $ - G[R] - j[R] - U + P.altAxis,
        re = H ? $ + G[R] + j[R] - U - P.altAxis : q,
        fe = f && H ? bE(J, $, re) : ys(f ? J : M, $, f ? re : q);
      ((D[A] = fe), (K[A] = fe - $));
    }
    e.modifiersData[s] = K;
  }
}
var nd = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: zE,
  requiresIfExists: ["offset"],
};
function GE(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function WE(t) {
  return t === nt(t) || !at(t) ? Bo(t) : GE(t);
}
function UE(t) {
  var e = t.getBoundingClientRect(),
    n = Kn(e.width) / t.offsetWidth || 1,
    s = Kn(e.height) / t.offsetHeight || 1;
  return n !== 1 || s !== 1;
}
function KE(t, e, n) {
  n === void 0 && (n = !1);
  var s = at(e),
    i = at(e) && UE(e),
    r = en(e),
    o = Yn(t, i, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (s || (!s && !n)) &&
      ((Pt(e) !== "body" || Ho(r)) && (a = WE(e)),
      at(e)
        ? ((l = Yn(e, !0)), (l.x += e.clientLeft), (l.y += e.clientTop))
        : r && (l.x = jo(r))),
    {
      x: o.left + a.scrollLeft - l.x,
      y: o.top + a.scrollTop - l.y,
      width: o.width,
      height: o.height,
    }
  );
}
function YE(t) {
  var e = new Map(),
    n = new Set(),
    s = [];
  t.forEach(function (r) {
    e.set(r.name, r);
  });
  function i(r) {
    n.add(r.name);
    var o = [].concat(r.requires || [], r.requiresIfExists || []);
    (o.forEach(function (a) {
      if (!n.has(a)) {
        var l = e.get(a);
        l && i(l);
      }
    }),
      s.push(r));
  }
  return (
    t.forEach(function (r) {
      n.has(r.name) || i(r);
    }),
    s
  );
}
function qE(t) {
  var e = YE(t);
  return Gu.reduce(function (n, s) {
    return n.concat(
      e.filter(function (i) {
        return i.phase === s;
      }),
    );
  }, []);
}
function XE(t) {
  var e;
  return function () {
    return (
      e ||
        (e = new Promise(function (n) {
          Promise.resolve().then(function () {
            ((e = void 0), n(t()));
          });
        })),
      e
    );
  };
}
function QE(t) {
  var e = t.reduce(function (n, s) {
    var i = n[s.name];
    return (
      (n[s.name] = i
        ? Object.assign({}, i, s, {
            options: Object.assign({}, i.options, s.options),
            data: Object.assign({}, i.data, s.data),
          })
        : s),
      n
    );
  }, {});
  return Object.keys(e).map(function (n) {
    return e[n];
  });
}
var ll = { placement: "bottom", modifiers: [], strategy: "absolute" };
function cl() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function (s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function Ri(t) {
  t === void 0 && (t = {});
  var e = t,
    n = e.defaultModifiers,
    s = n === void 0 ? [] : n,
    i = e.defaultOptions,
    r = i === void 0 ? ll : i;
  return function (a, l, u) {
    u === void 0 && (u = r);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, ll, r),
        modifiersData: {},
        elements: { reference: a, popper: l },
        attributes: {},
        styles: {},
      },
      d = [],
      p = !1,
      f = {
        state: c,
        setOptions: function (E) {
          var y = typeof E == "function" ? E(c.options) : E;
          (v(),
            (c.options = Object.assign({}, r, c.options, y)),
            (c.scrollParents = {
              reference: vn(a)
                ? Ss(a)
                : a.contextElement
                  ? Ss(a.contextElement)
                  : [],
              popper: Ss(l),
            }));
          var b = qE(QE([].concat(s, c.options.modifiers)));
          return (
            (c.orderedModifiers = b.filter(function (w) {
              return w.enabled;
            })),
            g(),
            f.update()
          );
        },
        forceUpdate: function () {
          if (!p) {
            var E = c.elements,
              y = E.reference,
              b = E.popper;
            if (!!cl(y, b)) {
              ((c.rects = {
                reference: KE(y, ks(b), c.options.strategy === "fixed"),
                popper: $o(b),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (P) {
                  return (c.modifiersData[P.name] = Object.assign({}, P.data));
                }));
              for (var w = 0; w < c.orderedModifiers.length; w++) {
                if (c.reset === !0) {
                  ((c.reset = !1), (w = -1));
                  continue;
                }
                var A = c.orderedModifiers[w],
                  D = A.fn,
                  G = A.options,
                  j = G === void 0 ? {} : G,
                  N = A.name;
                typeof D == "function" &&
                  (c = D({ state: c, options: j, name: N, instance: f }) || c);
              }
            }
          }
        },
        update: XE(function () {
          return new Promise(function (S) {
            (f.forceUpdate(), S(c));
          });
        }),
        destroy: function () {
          (v(), (p = !0));
        },
      };
    if (!cl(a, l)) return f;
    f.setOptions(u).then(function (S) {
      !p && u.onFirstUpdate && u.onFirstUpdate(S);
    });
    function g() {
      c.orderedModifiers.forEach(function (S) {
        var E = S.name,
          y = S.options,
          b = y === void 0 ? {} : y,
          w = S.effect;
        if (typeof w == "function") {
          var A = w({ state: c, name: E, instance: f, options: b }),
            D = function () {};
          d.push(A || D);
        }
      });
    }
    function v() {
      (d.forEach(function (S) {
        return S();
      }),
        (d = []));
    }
    return f;
  };
}
var JE = Ri(),
  ZE = [Vo, Fo, ko, Do],
  eb = Ri({ defaultModifiers: ZE }),
  tb = [Vo, Fo, ko, Do, td, Zu, nd, Xu, ed],
  zo = Ri({ defaultModifiers: tb }),
  sd = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        popperGenerator: Ri,
        detectOverflow: Xn,
        createPopperBase: JE,
        createPopper: zo,
        createPopperLite: eb,
        top: Ve,
        bottom: et,
        right: tt,
        left: Be,
        auto: Di,
        basePlacements: ns,
        start: gn,
        end: Un,
        clippingParents: Nu,
        viewport: Lo,
        popper: Ln,
        reference: Du,
        variationPlacements: Yr,
        placements: Mo,
        beforeRead: $u,
        read: Ru,
        afterRead: ku,
        beforeMain: Vu,
        main: Bu,
        afterMain: ju,
        beforeWrite: Hu,
        write: Fu,
        afterWrite: zu,
        modifierPhases: Gu,
        applyStyles: Do,
        arrow: Xu,
        computeStyles: ko,
        eventListeners: Vo,
        flip: Zu,
        hide: ed,
        offset: td,
        popperOffsets: Fo,
        preventOverflow: nd,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
/*!
 * Bootstrap v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ const Ft = new Map(),
  dr = {
    set(t, e, n) {
      Ft.has(t) || Ft.set(t, new Map());
      const s = Ft.get(t);
      if (!s.has(e) && s.size !== 0) {
        console.error(
          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`,
        );
        return;
      }
      s.set(e, n);
    },
    get(t, e) {
      return (Ft.has(t) && Ft.get(t).get(e)) || null;
    },
    remove(t, e) {
      if (!Ft.has(t)) return;
      const n = Ft.get(t);
      (n.delete(e), n.size === 0 && Ft.delete(t));
    },
  },
  nb = 1e6,
  sb = 1e3,
  Qr = "transitionend",
  id = (t) => (
    t &&
      window.CSS &&
      window.CSS.escape &&
      (t = t.replace(/#([^\s"#']+)/g, (e, n) => `#${CSS.escape(n)}`)),
    t
  ),
  ib = (t) =>
    t == null
      ? `${t}`
      : Object.prototype.toString
          .call(t)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase(),
  rb = (t) => {
    do t += Math.floor(Math.random() * nb);
    while (document.getElementById(t));
    return t;
  },
  ob = (t) => {
    if (!t) return 0;
    let { transitionDuration: e, transitionDelay: n } =
      window.getComputedStyle(t);
    const s = Number.parseFloat(e),
      i = Number.parseFloat(n);
    return !s && !i
      ? 0
      : ((e = e.split(",")[0]),
        (n = n.split(",")[0]),
        (Number.parseFloat(e) + Number.parseFloat(n)) * sb);
  },
  rd = (t) => {
    t.dispatchEvent(new Event(Qr));
  },
  Rt = (t) =>
    !t || typeof t != "object"
      ? !1
      : (typeof t.jquery != "undefined" && (t = t[0]),
        typeof t.nodeType != "undefined"),
  Yt = (t) =>
    Rt(t)
      ? t.jquery
        ? t[0]
        : t
      : typeof t == "string" && t.length > 0
        ? document.querySelector(id(t))
        : null,
  ss = (t) => {
    if (!Rt(t) || t.getClientRects().length === 0) return !1;
    const e = getComputedStyle(t).getPropertyValue("visibility") === "visible",
      n = t.closest("details:not([open])");
    if (!n) return e;
    if (n !== t) {
      const s = t.closest("summary");
      if ((s && s.parentNode !== n) || s === null) return !1;
    }
    return e;
  },
  qt = (t) =>
    !t || t.nodeType !== Node.ELEMENT_NODE || t.classList.contains("disabled")
      ? !0
      : typeof t.disabled != "undefined"
        ? t.disabled
        : t.hasAttribute("disabled") && t.getAttribute("disabled") !== "false",
  od = (t) => {
    if (!document.documentElement.attachShadow) return null;
    if (typeof t.getRootNode == "function") {
      const e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }
    return t instanceof ShadowRoot ? t : t.parentNode ? od(t.parentNode) : null;
  },
  Ei = () => {},
  Vs = (t) => {
    t.offsetHeight;
  },
  ad = () =>
    window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
      ? window.jQuery
      : null,
  fr = [],
  ab = (t) => {
    document.readyState === "loading"
      ? (fr.length ||
          document.addEventListener("DOMContentLoaded", () => {
            for (const e of fr) e();
          }),
        fr.push(t))
      : t();
  },
  ct = () => document.documentElement.dir === "rtl",
  dt = (t) => {
    ab(() => {
      const e = ad();
      if (e) {
        const n = t.NAME,
          s = e.fn[n];
        ((e.fn[n] = t.jQueryInterface),
          (e.fn[n].Constructor = t),
          (e.fn[n].noConflict = () => ((e.fn[n] = s), t.jQueryInterface)));
      }
    });
  },
  He = (t, e = [], n = t) => (typeof t == "function" ? t(...e) : n),
  ld = (t, e, n = !0) => {
    if (!n) {
      He(t);
      return;
    }
    const s = 5,
      i = ob(e) + s;
    let r = !1;
    const o = ({ target: a }) => {
      a === e && ((r = !0), e.removeEventListener(Qr, o), He(t));
    };
    (e.addEventListener(Qr, o),
      setTimeout(() => {
        r || rd(e);
      }, i));
  },
  Go = (t, e, n, s) => {
    const i = t.length;
    let r = t.indexOf(e);
    return r === -1
      ? !n && s
        ? t[i - 1]
        : t[0]
      : ((r += n ? 1 : -1),
        s && (r = (r + i) % i),
        t[Math.max(0, Math.min(r, i - 1))]);
  },
  lb = /[^.]*(?=\..*)\.|.*/,
  cb = /\..*/,
  ub = /::\d+$/,
  pr = {};
let ul = 1;
const cd = { mouseenter: "mouseover", mouseleave: "mouseout" },
  db = new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll",
  ]);
function ud(t, e) {
  return (e && `${e}::${ul++}`) || t.uidEvent || ul++;
}
function dd(t) {
  const e = ud(t);
  return ((t.uidEvent = e), (pr[e] = pr[e] || {}), pr[e]);
}
function fb(t, e) {
  return function n(s) {
    return (
      Wo(s, { delegateTarget: t }),
      n.oneOff && I.off(t, s.type, e),
      e.apply(t, [s])
    );
  };
}
function pb(t, e, n) {
  return function s(i) {
    const r = t.querySelectorAll(e);
    for (let { target: o } = i; o && o !== this; o = o.parentNode)
      for (const a of r)
        if (a === o)
          return (
            Wo(i, { delegateTarget: o }),
            s.oneOff && I.off(t, i.type, e, n),
            n.apply(o, [i])
          );
  };
}
function fd(t, e, n = null) {
  return Object.values(t).find(
    (s) => s.callable === e && s.delegationSelector === n,
  );
}
function pd(t, e, n) {
  const s = typeof e == "string",
    i = s ? n : e || n;
  let r = hd(t);
  return (db.has(r) || (r = t), [s, i, r]);
}
function dl(t, e, n, s, i) {
  if (typeof e != "string" || !t) return;
  let [r, o, a] = pd(e, n, s);
  e in cd &&
    (o = ((g) =>
      function (v) {
        if (
          !v.relatedTarget ||
          (v.relatedTarget !== v.delegateTarget &&
            !v.delegateTarget.contains(v.relatedTarget))
        )
          return g.call(this, v);
      })(o));
  const l = dd(t),
    u = l[a] || (l[a] = {}),
    c = fd(u, o, r ? n : null);
  if (c) {
    c.oneOff = c.oneOff && i;
    return;
  }
  const d = ud(o, e.replace(lb, "")),
    p = r ? pb(t, n, o) : fb(t, o);
  ((p.delegationSelector = r ? n : null),
    (p.callable = o),
    (p.oneOff = i),
    (p.uidEvent = d),
    (u[d] = p),
    t.addEventListener(a, p, r));
}
function Jr(t, e, n, s, i) {
  const r = fd(e[n], s, i);
  !r || (t.removeEventListener(n, r, Boolean(i)), delete e[n][r.uidEvent]);
}
function hb(t, e, n, s) {
  const i = e[n] || {};
  for (const [r, o] of Object.entries(i))
    r.includes(s) && Jr(t, e, n, o.callable, o.delegationSelector);
}
function hd(t) {
  return ((t = t.replace(cb, "")), cd[t] || t);
}
const I = {
  on(t, e, n, s) {
    dl(t, e, n, s, !1);
  },
  one(t, e, n, s) {
    dl(t, e, n, s, !0);
  },
  off(t, e, n, s) {
    if (typeof e != "string" || !t) return;
    const [i, r, o] = pd(e, n, s),
      a = o !== e,
      l = dd(t),
      u = l[o] || {},
      c = e.startsWith(".");
    if (typeof r != "undefined") {
      if (!Object.keys(u).length) return;
      Jr(t, l, o, r, i ? n : null);
      return;
    }
    if (c) for (const d of Object.keys(l)) hb(t, l, d, e.slice(1));
    for (const [d, p] of Object.entries(u)) {
      const f = d.replace(ub, "");
      (!a || e.includes(f)) && Jr(t, l, o, p.callable, p.delegationSelector);
    }
  },
  trigger(t, e, n) {
    if (typeof e != "string" || !t) return null;
    const s = ad(),
      i = hd(e),
      r = e !== i;
    let o = null,
      a = !0,
      l = !0,
      u = !1;
    r &&
      s &&
      ((o = s.Event(e, n)),
      s(t).trigger(o),
      (a = !o.isPropagationStopped()),
      (l = !o.isImmediatePropagationStopped()),
      (u = o.isDefaultPrevented()));
    const c = Wo(new Event(e, { bubbles: a, cancelable: !0 }), n);
    return (
      u && c.preventDefault(),
      l && t.dispatchEvent(c),
      c.defaultPrevented && o && o.preventDefault(),
      c
    );
  },
};
function Wo(t, e = {}) {
  for (const [n, s] of Object.entries(e))
    try {
      t[n] = s;
    } catch {
      Object.defineProperty(t, n, {
        configurable: !0,
        get() {
          return s;
        },
      });
    }
  return t;
}
function fl(t) {
  if (t === "true") return !0;
  if (t === "false") return !1;
  if (t === Number(t).toString()) return Number(t);
  if (t === "" || t === "null") return null;
  if (typeof t != "string") return t;
  try {
    return JSON.parse(decodeURIComponent(t));
  } catch {
    return t;
  }
}
function hr(t) {
  return t.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
const kt = {
  setDataAttribute(t, e, n) {
    t.setAttribute(`data-bs-${hr(e)}`, n);
  },
  removeDataAttribute(t, e) {
    t.removeAttribute(`data-bs-${hr(e)}`);
  },
  getDataAttributes(t) {
    if (!t) return {};
    const e = {},
      n = Object.keys(t.dataset).filter(
        (s) => s.startsWith("bs") && !s.startsWith("bsConfig"),
      );
    for (const s of n) {
      let i = s.replace(/^bs/, "");
      ((i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
        (e[i] = fl(t.dataset[s])));
    }
    return e;
  },
  getDataAttribute(t, e) {
    return fl(t.getAttribute(`data-bs-${hr(e)}`));
  },
};
class Bs {
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!',
    );
  }
  _getConfig(e) {
    return (
      (e = this._mergeConfigObj(e)),
      (e = this._configAfterMerge(e)),
      this._typeCheckConfig(e),
      e
    );
  }
  _configAfterMerge(e) {
    return e;
  }
  _mergeConfigObj(e, n) {
    const s = Rt(n) ? kt.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...(typeof s == "object" ? s : {}),
      ...(Rt(n) ? kt.getDataAttributes(n) : {}),
      ...(typeof e == "object" ? e : {}),
    };
  }
  _typeCheckConfig(e, n = this.constructor.DefaultType) {
    for (const [s, i] of Object.entries(n)) {
      const r = e[s],
        o = Rt(r) ? "element" : ib(r);
      if (!new RegExp(i).test(o))
        throw new TypeError(
          `${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`,
        );
    }
  }
}
const mb = "5.3.3";
class Et extends Bs {
  constructor(e, n) {
    (super(),
      (e = Yt(e)),
      e &&
        ((this._element = e),
        (this._config = this._getConfig(n)),
        dr.set(this._element, this.constructor.DATA_KEY, this)));
  }
  dispose() {
    (dr.remove(this._element, this.constructor.DATA_KEY),
      I.off(this._element, this.constructor.EVENT_KEY));
    for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
  }
  _queueCallback(e, n, s = !0) {
    ld(e, n, s);
  }
  _getConfig(e) {
    return (
      (e = this._mergeConfigObj(e, this._element)),
      (e = this._configAfterMerge(e)),
      this._typeCheckConfig(e),
      e
    );
  }
  static getInstance(e) {
    return dr.get(Yt(e), this.DATA_KEY);
  }
  static getOrCreateInstance(e, n = {}) {
    return this.getInstance(e) || new this(e, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return mb;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(e) {
    return `${e}${this.EVENT_KEY}`;
  }
}
const mr = (t) => {
    let e = t.getAttribute("data-bs-target");
    if (!e || e === "#") {
      let n = t.getAttribute("href");
      if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
      (n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
        (e = n && n !== "#" ? n.trim() : null));
    }
    return e
      ? e
          .split(",")
          .map((n) => id(n))
          .join(",")
      : null;
  },
  Y = {
    find(t, e = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(e, t));
    },
    findOne(t, e = document.documentElement) {
      return Element.prototype.querySelector.call(e, t);
    },
    children(t, e) {
      return [].concat(...t.children).filter((n) => n.matches(e));
    },
    parents(t, e) {
      const n = [];
      let s = t.parentNode.closest(e);
      for (; s; ) (n.push(s), (s = s.parentNode.closest(e)));
      return n;
    },
    prev(t, e) {
      let n = t.previousElementSibling;
      for (; n; ) {
        if (n.matches(e)) return [n];
        n = n.previousElementSibling;
      }
      return [];
    },
    next(t, e) {
      let n = t.nextElementSibling;
      for (; n; ) {
        if (n.matches(e)) return [n];
        n = n.nextElementSibling;
      }
      return [];
    },
    focusableChildren(t) {
      const e = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "details",
        "[tabindex]",
        '[contenteditable="true"]',
      ]
        .map((n) => `${n}:not([tabindex^="-"])`)
        .join(",");
      return this.find(e, t).filter((n) => !qt(n) && ss(n));
    },
    getSelectorFromElement(t) {
      const e = mr(t);
      return e && Y.findOne(e) ? e : null;
    },
    getElementFromSelector(t) {
      const e = mr(t);
      return e ? Y.findOne(e) : null;
    },
    getMultipleElementsFromSelector(t) {
      const e = mr(t);
      return e ? Y.find(e) : [];
    },
  },
  ki = (t, e = "hide") => {
    const n = `click.dismiss${t.EVENT_KEY}`,
      s = t.NAME;
    I.on(document, n, `[data-bs-dismiss="${s}"]`, function (i) {
      if (
        (["A", "AREA"].includes(this.tagName) && i.preventDefault(), qt(this))
      )
        return;
      const r = Y.getElementFromSelector(this) || this.closest(`.${s}`);
      t.getOrCreateInstance(r)[e]();
    });
  },
  gb = "alert",
  vb = "bs.alert",
  md = `.${vb}`,
  _b = `close${md}`,
  Eb = `closed${md}`,
  bb = "fade",
  wb = "show";
class Vi extends Et {
  static get NAME() {
    return gb;
  }
  close() {
    if (I.trigger(this._element, _b).defaultPrevented) return;
    this._element.classList.remove(wb);
    const n = this._element.classList.contains(bb);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  _destroyElement() {
    (this._element.remove(), I.trigger(this._element, Eb), this.dispose());
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Vi.getOrCreateInstance(this);
      if (typeof e == "string") {
        if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        n[e](this);
      }
    });
  }
}
ki(Vi, "close");
dt(Vi);
const yb = "button",
  Sb = "bs.button",
  Tb = `.${Sb}`,
  Ab = ".data-api",
  xb = "active",
  pl = '[data-bs-toggle="button"]',
  Cb = `click${Tb}${Ab}`;
class Bi extends Et {
  static get NAME() {
    return yb;
  }
  toggle() {
    this._element.setAttribute(
      "aria-pressed",
      this._element.classList.toggle(xb),
    );
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Bi.getOrCreateInstance(this);
      e === "toggle" && n[e]();
    });
  }
}
I.on(document, Cb, pl, (t) => {
  t.preventDefault();
  const e = t.target.closest(pl);
  Bi.getOrCreateInstance(e).toggle();
});
dt(Bi);
const Ob = "swipe",
  is = ".bs.swipe",
  Pb = `touchstart${is}`,
  Ib = `touchmove${is}`,
  Lb = `touchend${is}`,
  Mb = `pointerdown${is}`,
  Nb = `pointerup${is}`,
  Db = "touch",
  $b = "pen",
  Rb = "pointer-event",
  kb = 40,
  Vb = { endCallback: null, leftCallback: null, rightCallback: null },
  Bb = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)",
  };
class bi extends Bs {
  constructor(e, n) {
    (super(),
      (this._element = e),
      !(!e || !bi.isSupported()) &&
        ((this._config = this._getConfig(n)),
        (this._deltaX = 0),
        (this._supportPointerEvents = Boolean(window.PointerEvent)),
        this._initEvents()));
  }
  static get Default() {
    return Vb;
  }
  static get DefaultType() {
    return Bb;
  }
  static get NAME() {
    return Ob;
  }
  dispose() {
    I.off(this._element, is);
  }
  _start(e) {
    if (!this._supportPointerEvents) {
      this._deltaX = e.touches[0].clientX;
      return;
    }
    this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX);
  }
  _end(e) {
    (this._eventIsPointerPenTouch(e) &&
      (this._deltaX = e.clientX - this._deltaX),
      this._handleSwipe(),
      He(this._config.endCallback));
  }
  _move(e) {
    this._deltaX =
      e.touches && e.touches.length > 1
        ? 0
        : e.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const e = Math.abs(this._deltaX);
    if (e <= kb) return;
    const n = e / this._deltaX;
    ((this._deltaX = 0),
      n && He(n > 0 ? this._config.rightCallback : this._config.leftCallback));
  }
  _initEvents() {
    this._supportPointerEvents
      ? (I.on(this._element, Mb, (e) => this._start(e)),
        I.on(this._element, Nb, (e) => this._end(e)),
        this._element.classList.add(Rb))
      : (I.on(this._element, Pb, (e) => this._start(e)),
        I.on(this._element, Ib, (e) => this._move(e)),
        I.on(this._element, Lb, (e) => this._end(e)));
  }
  _eventIsPointerPenTouch(e) {
    return (
      this._supportPointerEvents &&
      (e.pointerType === $b || e.pointerType === Db)
    );
  }
  static isSupported() {
    return (
      "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
    );
  }
}
const jb = "carousel",
  Hb = "bs.carousel",
  tn = `.${Hb}`,
  gd = ".data-api",
  Fb = "ArrowLeft",
  zb = "ArrowRight",
  Gb = 500,
  ds = "next",
  xn = "prev",
  Mn = "left",
  oi = "right",
  Wb = `slide${tn}`,
  gr = `slid${tn}`,
  Ub = `keydown${tn}`,
  Kb = `mouseenter${tn}`,
  Yb = `mouseleave${tn}`,
  qb = `dragstart${tn}`,
  Xb = `load${tn}${gd}`,
  Qb = `click${tn}${gd}`,
  vd = "carousel",
  Ys = "active",
  Jb = "slide",
  Zb = "carousel-item-end",
  ew = "carousel-item-start",
  tw = "carousel-item-next",
  nw = "carousel-item-prev",
  _d = ".active",
  Ed = ".carousel-item",
  sw = _d + Ed,
  iw = ".carousel-item img",
  rw = ".carousel-indicators",
  ow = "[data-bs-slide], [data-bs-slide-to]",
  aw = '[data-bs-ride="carousel"]',
  lw = { [Fb]: oi, [zb]: Mn },
  cw = {
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    ride: !1,
    touch: !0,
    wrap: !0,
  },
  uw = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean",
  };
class js extends Et {
  constructor(e, n) {
    (super(e, n),
      (this._interval = null),
      (this._activeElement = null),
      (this._isSliding = !1),
      (this.touchTimeout = null),
      (this._swipeHelper = null),
      (this._indicatorsElement = Y.findOne(rw, this._element)),
      this._addEventListeners(),
      this._config.ride === vd && this.cycle());
  }
  static get Default() {
    return cw;
  }
  static get DefaultType() {
    return uw;
  }
  static get NAME() {
    return jb;
  }
  next() {
    this._slide(ds);
  }
  nextWhenVisible() {
    !document.hidden && ss(this._element) && this.next();
  }
  prev() {
    this._slide(xn);
  }
  pause() {
    (this._isSliding && rd(this._element), this._clearInterval());
  }
  cycle() {
    (this._clearInterval(),
      this._updateInterval(),
      (this._interval = setInterval(
        () => this.nextWhenVisible(),
        this._config.interval,
      )));
  }
  _maybeEnableCycle() {
    if (!!this._config.ride) {
      if (this._isSliding) {
        I.one(this._element, gr, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(e) {
    const n = this._getItems();
    if (e > n.length - 1 || e < 0) return;
    if (this._isSliding) {
      I.one(this._element, gr, () => this.to(e));
      return;
    }
    const s = this._getItemIndex(this._getActive());
    if (s === e) return;
    const i = e > s ? ds : xn;
    this._slide(i, n[e]);
  }
  dispose() {
    (this._swipeHelper && this._swipeHelper.dispose(), super.dispose());
  }
  _configAfterMerge(e) {
    return ((e.defaultInterval = e.interval), e);
  }
  _addEventListeners() {
    (this._config.keyboard && I.on(this._element, Ub, (e) => this._keydown(e)),
      this._config.pause === "hover" &&
        (I.on(this._element, Kb, () => this.pause()),
        I.on(this._element, Yb, () => this._maybeEnableCycle())),
      this._config.touch && bi.isSupported() && this._addTouchEventListeners());
  }
  _addTouchEventListeners() {
    for (const s of Y.find(iw, this._element))
      I.on(s, qb, (i) => i.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(Mn)),
      rightCallback: () => this._slide(this._directionToOrder(oi)),
      endCallback: () => {
        this._config.pause === "hover" &&
          (this.pause(),
          this.touchTimeout && clearTimeout(this.touchTimeout),
          (this.touchTimeout = setTimeout(
            () => this._maybeEnableCycle(),
            Gb + this._config.interval,
          )));
      },
    };
    this._swipeHelper = new bi(this._element, n);
  }
  _keydown(e) {
    if (/input|textarea/i.test(e.target.tagName)) return;
    const n = lw[e.key];
    n && (e.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(e) {
    return this._getItems().indexOf(e);
  }
  _setActiveIndicatorElement(e) {
    if (!this._indicatorsElement) return;
    const n = Y.findOne(_d, this._indicatorsElement);
    (n.classList.remove(Ys), n.removeAttribute("aria-current"));
    const s = Y.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
    s && (s.classList.add(Ys), s.setAttribute("aria-current", "true"));
  }
  _updateInterval() {
    const e = this._activeElement || this._getActive();
    if (!e) return;
    const n = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
    this._config.interval = n || this._config.defaultInterval;
  }
  _slide(e, n = null) {
    if (this._isSliding) return;
    const s = this._getActive(),
      i = e === ds,
      r = n || Go(this._getItems(), s, i, this._config.wrap);
    if (r === s) return;
    const o = this._getItemIndex(r),
      a = (f) =>
        I.trigger(this._element, f, {
          relatedTarget: r,
          direction: this._orderToDirection(e),
          from: this._getItemIndex(s),
          to: o,
        });
    if (a(Wb).defaultPrevented || !s || !r) return;
    const u = Boolean(this._interval);
    (this.pause(),
      (this._isSliding = !0),
      this._setActiveIndicatorElement(o),
      (this._activeElement = r));
    const c = i ? ew : Zb,
      d = i ? tw : nw;
    (r.classList.add(d), Vs(r), s.classList.add(c), r.classList.add(c));
    const p = () => {
      (r.classList.remove(c, d),
        r.classList.add(Ys),
        s.classList.remove(Ys, d, c),
        (this._isSliding = !1),
        a(gr));
    };
    (this._queueCallback(p, s, this._isAnimated()), u && this.cycle());
  }
  _isAnimated() {
    return this._element.classList.contains(Jb);
  }
  _getActive() {
    return Y.findOne(sw, this._element);
  }
  _getItems() {
    return Y.find(Ed, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), (this._interval = null));
  }
  _directionToOrder(e) {
    return ct() ? (e === Mn ? xn : ds) : e === Mn ? ds : xn;
  }
  _orderToDirection(e) {
    return ct() ? (e === xn ? Mn : oi) : e === xn ? oi : Mn;
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = js.getOrCreateInstance(this, e);
      if (typeof e == "number") {
        n.to(e);
        return;
      }
      if (typeof e == "string") {
        if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
I.on(document, Qb, ow, function (t) {
  const e = Y.getElementFromSelector(this);
  if (!e || !e.classList.contains(vd)) return;
  t.preventDefault();
  const n = js.getOrCreateInstance(e),
    s = this.getAttribute("data-bs-slide-to");
  if (s) {
    (n.to(s), n._maybeEnableCycle());
    return;
  }
  if (kt.getDataAttribute(this, "slide") === "next") {
    (n.next(), n._maybeEnableCycle());
    return;
  }
  (n.prev(), n._maybeEnableCycle());
});
I.on(window, Xb, () => {
  const t = Y.find(aw);
  for (const e of t) js.getOrCreateInstance(e);
});
dt(js);
const dw = "collapse",
  fw = "bs.collapse",
  Hs = `.${fw}`,
  pw = ".data-api",
  hw = `show${Hs}`,
  mw = `shown${Hs}`,
  gw = `hide${Hs}`,
  vw = `hidden${Hs}`,
  _w = `click${Hs}${pw}`,
  vr = "show",
  Dn = "collapse",
  qs = "collapsing",
  Ew = "collapsed",
  bw = `:scope .${Dn} .${Dn}`,
  ww = "collapse-horizontal",
  yw = "width",
  Sw = "height",
  Tw = ".collapse.show, .collapse.collapsing",
  Zr = '[data-bs-toggle="collapse"]',
  Aw = { parent: null, toggle: !0 },
  xw = { parent: "(null|element)", toggle: "boolean" };
class Ls extends Et {
  constructor(e, n) {
    (super(e, n), (this._isTransitioning = !1), (this._triggerArray = []));
    const s = Y.find(Zr);
    for (const i of s) {
      const r = Y.getSelectorFromElement(i),
        o = Y.find(r).filter((a) => a === this._element);
      r !== null && o.length && this._triggerArray.push(i);
    }
    (this._initializeChildren(),
      this._config.parent ||
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
      this._config.toggle && this.toggle());
  }
  static get Default() {
    return Aw;
  }
  static get DefaultType() {
    return xw;
  }
  static get NAME() {
    return dw;
  }
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown()) return;
    let e = [];
    if (
      (this._config.parent &&
        (e = this._getFirstLevelChildren(Tw)
          .filter((a) => a !== this._element)
          .map((a) => Ls.getOrCreateInstance(a, { toggle: !1 }))),
      (e.length && e[0]._isTransitioning) ||
        I.trigger(this._element, hw).defaultPrevented)
    )
      return;
    for (const a of e) a.hide();
    const s = this._getDimension();
    (this._element.classList.remove(Dn),
      this._element.classList.add(qs),
      (this._element.style[s] = 0),
      this._addAriaAndCollapsedClass(this._triggerArray, !0),
      (this._isTransitioning = !0));
    const i = () => {
        ((this._isTransitioning = !1),
          this._element.classList.remove(qs),
          this._element.classList.add(Dn, vr),
          (this._element.style[s] = ""),
          I.trigger(this._element, mw));
      },
      o = `scroll${s[0].toUpperCase() + s.slice(1)}`;
    (this._queueCallback(i, this._element, !0),
      (this._element.style[s] = `${this._element[o]}px`));
  }
  hide() {
    if (
      this._isTransitioning ||
      !this._isShown() ||
      I.trigger(this._element, gw).defaultPrevented
    )
      return;
    const n = this._getDimension();
    ((this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`),
      Vs(this._element),
      this._element.classList.add(qs),
      this._element.classList.remove(Dn, vr));
    for (const i of this._triggerArray) {
      const r = Y.getElementFromSelector(i);
      r && !this._isShown(r) && this._addAriaAndCollapsedClass([i], !1);
    }
    this._isTransitioning = !0;
    const s = () => {
      ((this._isTransitioning = !1),
        this._element.classList.remove(qs),
        this._element.classList.add(Dn),
        I.trigger(this._element, vw));
    };
    ((this._element.style[n] = ""), this._queueCallback(s, this._element, !0));
  }
  _isShown(e = this._element) {
    return e.classList.contains(vr);
  }
  _configAfterMerge(e) {
    return ((e.toggle = Boolean(e.toggle)), (e.parent = Yt(e.parent)), e);
  }
  _getDimension() {
    return this._element.classList.contains(ww) ? yw : Sw;
  }
  _initializeChildren() {
    if (!this._config.parent) return;
    const e = this._getFirstLevelChildren(Zr);
    for (const n of e) {
      const s = Y.getElementFromSelector(n);
      s && this._addAriaAndCollapsedClass([n], this._isShown(s));
    }
  }
  _getFirstLevelChildren(e) {
    const n = Y.find(bw, this._config.parent);
    return Y.find(e, this._config.parent).filter((s) => !n.includes(s));
  }
  _addAriaAndCollapsedClass(e, n) {
    if (!!e.length)
      for (const s of e)
        (s.classList.toggle(Ew, !n), s.setAttribute("aria-expanded", n));
  }
  static jQueryInterface(e) {
    const n = {};
    return (
      typeof e == "string" && /show|hide/.test(e) && (n.toggle = !1),
      this.each(function () {
        const s = Ls.getOrCreateInstance(this, n);
        if (typeof e == "string") {
          if (typeof s[e] == "undefined")
            throw new TypeError(`No method named "${e}"`);
          s[e]();
        }
      })
    );
  }
}
I.on(document, _w, Zr, function (t) {
  (t.target.tagName === "A" ||
    (t.delegateTarget && t.delegateTarget.tagName === "A")) &&
    t.preventDefault();
  for (const e of Y.getMultipleElementsFromSelector(this))
    Ls.getOrCreateInstance(e, { toggle: !1 }).toggle();
});
dt(Ls);
const hl = "dropdown",
  Cw = "bs.dropdown",
  wn = `.${Cw}`,
  Uo = ".data-api",
  Ow = "Escape",
  ml = "Tab",
  Pw = "ArrowUp",
  gl = "ArrowDown",
  Iw = 2,
  Lw = `hide${wn}`,
  Mw = `hidden${wn}`,
  Nw = `show${wn}`,
  Dw = `shown${wn}`,
  bd = `click${wn}${Uo}`,
  wd = `keydown${wn}${Uo}`,
  $w = `keyup${wn}${Uo}`,
  Nn = "show",
  Rw = "dropup",
  kw = "dropend",
  Vw = "dropstart",
  Bw = "dropup-center",
  jw = "dropdown-center",
  ln = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
  Hw = `${ln}.${Nn}`,
  ai = ".dropdown-menu",
  Fw = ".navbar",
  zw = ".navbar-nav",
  Gw = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
  Ww = ct() ? "top-end" : "top-start",
  Uw = ct() ? "top-start" : "top-end",
  Kw = ct() ? "bottom-end" : "bottom-start",
  Yw = ct() ? "bottom-start" : "bottom-end",
  qw = ct() ? "left-start" : "right-start",
  Xw = ct() ? "right-start" : "left-start",
  Qw = "top",
  Jw = "bottom",
  Zw = {
    autoClose: !0,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle",
  },
  ey = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)",
  };
class xt extends Et {
  constructor(e, n) {
    (super(e, n),
      (this._popper = null),
      (this._parent = this._element.parentNode),
      (this._menu =
        Y.next(this._element, ai)[0] ||
        Y.prev(this._element, ai)[0] ||
        Y.findOne(ai, this._parent)),
      (this._inNavbar = this._detectNavbar()));
  }
  static get Default() {
    return Zw;
  }
  static get DefaultType() {
    return ey;
  }
  static get NAME() {
    return hl;
  }
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (qt(this._element) || this._isShown()) return;
    const e = { relatedTarget: this._element };
    if (!I.trigger(this._element, Nw, e).defaultPrevented) {
      if (
        (this._createPopper(),
        "ontouchstart" in document.documentElement && !this._parent.closest(zw))
      )
        for (const s of [].concat(...document.body.children))
          I.on(s, "mouseover", Ei);
      (this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(Nn),
        this._element.classList.add(Nn),
        I.trigger(this._element, Dw, e));
    }
  }
  hide() {
    if (qt(this._element) || !this._isShown()) return;
    const e = { relatedTarget: this._element };
    this._completeHide(e);
  }
  dispose() {
    (this._popper && this._popper.destroy(), super.dispose());
  }
  update() {
    ((this._inNavbar = this._detectNavbar()),
      this._popper && this._popper.update());
  }
  _completeHide(e) {
    if (!I.trigger(this._element, Lw, e).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const s of [].concat(...document.body.children))
          I.off(s, "mouseover", Ei);
      (this._popper && this._popper.destroy(),
        this._menu.classList.remove(Nn),
        this._element.classList.remove(Nn),
        this._element.setAttribute("aria-expanded", "false"),
        kt.removeDataAttribute(this._menu, "popper"),
        I.trigger(this._element, Mw, e));
    }
  }
  _getConfig(e) {
    if (
      ((e = super._getConfig(e)),
      typeof e.reference == "object" &&
        !Rt(e.reference) &&
        typeof e.reference.getBoundingClientRect != "function")
    )
      throw new TypeError(
        `${hl.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`,
      );
    return e;
  }
  _createPopper() {
    if (typeof sd == "undefined")
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)",
      );
    let e = this._element;
    this._config.reference === "parent"
      ? (e = this._parent)
      : Rt(this._config.reference)
        ? (e = Yt(this._config.reference))
        : typeof this._config.reference == "object" &&
          (e = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = zo(e, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(Nn);
  }
  _getPlacement() {
    const e = this._parent;
    if (e.classList.contains(kw)) return qw;
    if (e.classList.contains(Vw)) return Xw;
    if (e.classList.contains(Bw)) return Qw;
    if (e.classList.contains(jw)) return Jw;
    const n =
      getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() ===
      "end";
    return e.classList.contains(Rw) ? (n ? Uw : Ww) : n ? Yw : Kw;
  }
  _detectNavbar() {
    return this._element.closest(Fw) !== null;
  }
  _getOffset() {
    const { offset: e } = this._config;
    return typeof e == "string"
      ? e.split(",").map((n) => Number.parseInt(n, 10))
      : typeof e == "function"
        ? (n) => e(n, this._element)
        : e;
  }
  _getPopperConfig() {
    const e = {
      placement: this._getPlacement(),
      modifiers: [
        {
          name: "preventOverflow",
          options: { boundary: this._config.boundary },
        },
        { name: "offset", options: { offset: this._getOffset() } },
      ],
    };
    return (
      (this._inNavbar || this._config.display === "static") &&
        (kt.setDataAttribute(this._menu, "popper", "static"),
        (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
      { ...e, ...He(this._config.popperConfig, [e]) }
    );
  }
  _selectMenuItem({ key: e, target: n }) {
    const s = Y.find(Gw, this._menu).filter((i) => ss(i));
    !s.length || Go(s, n, e === gl, !s.includes(n)).focus();
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = xt.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof n[e] == "undefined")
          throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
  static clearMenus(e) {
    if (e.button === Iw || (e.type === "keyup" && e.key !== ml)) return;
    const n = Y.find(Hw);
    for (const s of n) {
      const i = xt.getInstance(s);
      if (!i || i._config.autoClose === !1) continue;
      const r = e.composedPath(),
        o = r.includes(i._menu);
      if (
        r.includes(i._element) ||
        (i._config.autoClose === "inside" && !o) ||
        (i._config.autoClose === "outside" && o) ||
        (i._menu.contains(e.target) &&
          ((e.type === "keyup" && e.key === ml) ||
            /input|select|option|textarea|form/i.test(e.target.tagName)))
      )
        continue;
      const a = { relatedTarget: i._element };
      (e.type === "click" && (a.clickEvent = e), i._completeHide(a));
    }
  }
  static dataApiKeydownHandler(e) {
    const n = /input|textarea/i.test(e.target.tagName),
      s = e.key === Ow,
      i = [Pw, gl].includes(e.key);
    if ((!i && !s) || (n && !s)) return;
    e.preventDefault();
    const r = this.matches(ln)
        ? this
        : Y.prev(this, ln)[0] ||
          Y.next(this, ln)[0] ||
          Y.findOne(ln, e.delegateTarget.parentNode),
      o = xt.getOrCreateInstance(r);
    if (i) {
      (e.stopPropagation(), o.show(), o._selectMenuItem(e));
      return;
    }
    o._isShown() && (e.stopPropagation(), o.hide(), r.focus());
  }
}
I.on(document, wd, ln, xt.dataApiKeydownHandler);
I.on(document, wd, ai, xt.dataApiKeydownHandler);
I.on(document, bd, xt.clearMenus);
I.on(document, $w, xt.clearMenus);
I.on(document, bd, ln, function (t) {
  (t.preventDefault(), xt.getOrCreateInstance(this).toggle());
});
dt(xt);
const yd = "backdrop",
  ty = "fade",
  vl = "show",
  _l = `mousedown.bs.${yd}`,
  ny = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body",
  },
  sy = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)",
  };
class Sd extends Bs {
  constructor(e) {
    (super(),
      (this._config = this._getConfig(e)),
      (this._isAppended = !1),
      (this._element = null));
  }
  static get Default() {
    return ny;
  }
  static get DefaultType() {
    return sy;
  }
  static get NAME() {
    return yd;
  }
  show(e) {
    if (!this._config.isVisible) {
      He(e);
      return;
    }
    this._append();
    const n = this._getElement();
    (this._config.isAnimated && Vs(n),
      n.classList.add(vl),
      this._emulateAnimation(() => {
        He(e);
      }));
  }
  hide(e) {
    if (!this._config.isVisible) {
      He(e);
      return;
    }
    (this._getElement().classList.remove(vl),
      this._emulateAnimation(() => {
        (this.dispose(), He(e));
      }));
  }
  dispose() {
    !this._isAppended ||
      (I.off(this._element, _l),
      this._element.remove(),
      (this._isAppended = !1));
  }
  _getElement() {
    if (!this._element) {
      const e = document.createElement("div");
      ((e.className = this._config.className),
        this._config.isAnimated && e.classList.add(ty),
        (this._element = e));
    }
    return this._element;
  }
  _configAfterMerge(e) {
    return ((e.rootElement = Yt(e.rootElement)), e);
  }
  _append() {
    if (this._isAppended) return;
    const e = this._getElement();
    (this._config.rootElement.append(e),
      I.on(e, _l, () => {
        He(this._config.clickCallback);
      }),
      (this._isAppended = !0));
  }
  _emulateAnimation(e) {
    ld(e, this._getElement(), this._config.isAnimated);
  }
}
const iy = "focustrap",
  ry = "bs.focustrap",
  wi = `.${ry}`,
  oy = `focusin${wi}`,
  ay = `keydown.tab${wi}`,
  ly = "Tab",
  cy = "forward",
  El = "backward",
  uy = { autofocus: !0, trapElement: null },
  dy = { autofocus: "boolean", trapElement: "element" };
class Td extends Bs {
  constructor(e) {
    (super(),
      (this._config = this._getConfig(e)),
      (this._isActive = !1),
      (this._lastTabNavDirection = null));
  }
  static get Default() {
    return uy;
  }
  static get DefaultType() {
    return dy;
  }
  static get NAME() {
    return iy;
  }
  activate() {
    this._isActive ||
      (this._config.autofocus && this._config.trapElement.focus(),
      I.off(document, wi),
      I.on(document, oy, (e) => this._handleFocusin(e)),
      I.on(document, ay, (e) => this._handleKeydown(e)),
      (this._isActive = !0));
  }
  deactivate() {
    !this._isActive || ((this._isActive = !1), I.off(document, wi));
  }
  _handleFocusin(e) {
    const { trapElement: n } = this._config;
    if (e.target === document || e.target === n || n.contains(e.target)) return;
    const s = Y.focusableChildren(n);
    s.length === 0
      ? n.focus()
      : this._lastTabNavDirection === El
        ? s[s.length - 1].focus()
        : s[0].focus();
  }
  _handleKeydown(e) {
    e.key === ly && (this._lastTabNavDirection = e.shiftKey ? El : cy);
  }
}
const bl = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  wl = ".sticky-top",
  Xs = "padding-right",
  yl = "margin-right";
class eo {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const e = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - e);
  }
  hide() {
    const e = this.getWidth();
    (this._disableOverFlow(),
      this._setElementAttributes(this._element, Xs, (n) => n + e),
      this._setElementAttributes(bl, Xs, (n) => n + e),
      this._setElementAttributes(wl, yl, (n) => n - e));
  }
  reset() {
    (this._resetElementAttributes(this._element, "overflow"),
      this._resetElementAttributes(this._element, Xs),
      this._resetElementAttributes(bl, Xs),
      this._resetElementAttributes(wl, yl));
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  _disableOverFlow() {
    (this._saveInitialAttribute(this._element, "overflow"),
      (this._element.style.overflow = "hidden"));
  }
  _setElementAttributes(e, n, s) {
    const i = this.getWidth(),
      r = (o) => {
        if (o !== this._element && window.innerWidth > o.clientWidth + i)
          return;
        this._saveInitialAttribute(o, n);
        const a = window.getComputedStyle(o).getPropertyValue(n);
        o.style.setProperty(n, `${s(Number.parseFloat(a))}px`);
      };
    this._applyManipulationCallback(e, r);
  }
  _saveInitialAttribute(e, n) {
    const s = e.style.getPropertyValue(n);
    s && kt.setDataAttribute(e, n, s);
  }
  _resetElementAttributes(e, n) {
    const s = (i) => {
      const r = kt.getDataAttribute(i, n);
      if (r === null) {
        i.style.removeProperty(n);
        return;
      }
      (kt.removeDataAttribute(i, n), i.style.setProperty(n, r));
    };
    this._applyManipulationCallback(e, s);
  }
  _applyManipulationCallback(e, n) {
    if (Rt(e)) {
      n(e);
      return;
    }
    for (const s of Y.find(e, this._element)) n(s);
  }
}
const fy = "modal",
  py = "bs.modal",
  ut = `.${py}`,
  hy = ".data-api",
  my = "Escape",
  gy = `hide${ut}`,
  vy = `hidePrevented${ut}`,
  Ad = `hidden${ut}`,
  xd = `show${ut}`,
  _y = `shown${ut}`,
  Ey = `resize${ut}`,
  by = `click.dismiss${ut}`,
  wy = `mousedown.dismiss${ut}`,
  yy = `keydown.dismiss${ut}`,
  Sy = `click${ut}${hy}`,
  Sl = "modal-open",
  Ty = "fade",
  Tl = "show",
  _r = "modal-static",
  Ay = ".modal.show",
  xy = ".modal-dialog",
  Cy = ".modal-body",
  Oy = '[data-bs-toggle="modal"]',
  Py = { backdrop: !0, focus: !0, keyboard: !0 },
  Iy = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
class Qn extends Et {
  constructor(e, n) {
    (super(e, n),
      (this._dialog = Y.findOne(xy, this._element)),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      (this._isShown = !1),
      (this._isTransitioning = !1),
      (this._scrollBar = new eo()),
      this._addEventListeners());
  }
  static get Default() {
    return Py;
  }
  static get DefaultType() {
    return Iy;
  }
  static get NAME() {
    return fy;
  }
  toggle(e) {
    return this._isShown ? this.hide() : this.show(e);
  }
  show(e) {
    this._isShown ||
      this._isTransitioning ||
      I.trigger(this._element, xd, { relatedTarget: e }).defaultPrevented ||
      ((this._isShown = !0),
      (this._isTransitioning = !0),
      this._scrollBar.hide(),
      document.body.classList.add(Sl),
      this._adjustDialog(),
      this._backdrop.show(() => this._showElement(e)));
  }
  hide() {
    !this._isShown ||
      this._isTransitioning ||
      I.trigger(this._element, gy).defaultPrevented ||
      ((this._isShown = !1),
      (this._isTransitioning = !0),
      this._focustrap.deactivate(),
      this._element.classList.remove(Tl),
      this._queueCallback(
        () => this._hideModal(),
        this._element,
        this._isAnimated(),
      ));
  }
  dispose() {
    (I.off(window, ut),
      I.off(this._dialog, ut),
      this._backdrop.dispose(),
      this._focustrap.deactivate(),
      super.dispose());
  }
  handleUpdate() {
    this._adjustDialog();
  }
  _initializeBackDrop() {
    return new Sd({
      isVisible: Boolean(this._config.backdrop),
      isAnimated: this._isAnimated(),
    });
  }
  _initializeFocusTrap() {
    return new Td({ trapElement: this._element });
  }
  _showElement(e) {
    (document.body.contains(this._element) ||
      document.body.append(this._element),
      (this._element.style.display = "block"),
      this._element.removeAttribute("aria-hidden"),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      (this._element.scrollTop = 0));
    const n = Y.findOne(Cy, this._dialog);
    (n && (n.scrollTop = 0),
      Vs(this._element),
      this._element.classList.add(Tl));
    const s = () => {
      (this._config.focus && this._focustrap.activate(),
        (this._isTransitioning = !1),
        I.trigger(this._element, _y, { relatedTarget: e }));
    };
    this._queueCallback(s, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    (I.on(this._element, yy, (e) => {
      if (e.key === my) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }),
      I.on(window, Ey, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }),
      I.on(this._element, wy, (e) => {
        I.one(this._element, by, (n) => {
          if (!(this._element !== e.target || this._element !== n.target)) {
            if (this._config.backdrop === "static") {
              this._triggerBackdropTransition();
              return;
            }
            this._config.backdrop && this.hide();
          }
        });
      }));
  }
  _hideModal() {
    ((this._element.style.display = "none"),
      this._element.setAttribute("aria-hidden", !0),
      this._element.removeAttribute("aria-modal"),
      this._element.removeAttribute("role"),
      (this._isTransitioning = !1),
      this._backdrop.hide(() => {
        (document.body.classList.remove(Sl),
          this._resetAdjustments(),
          this._scrollBar.reset(),
          I.trigger(this._element, Ad));
      }));
  }
  _isAnimated() {
    return this._element.classList.contains(Ty);
  }
  _triggerBackdropTransition() {
    if (I.trigger(this._element, vy).defaultPrevented) return;
    const n =
        this._element.scrollHeight > document.documentElement.clientHeight,
      s = this._element.style.overflowY;
    s === "hidden" ||
      this._element.classList.contains(_r) ||
      (n || (this._element.style.overflowY = "hidden"),
      this._element.classList.add(_r),
      this._queueCallback(() => {
        (this._element.classList.remove(_r),
          this._queueCallback(() => {
            this._element.style.overflowY = s;
          }, this._dialog));
      }, this._dialog),
      this._element.focus());
  }
  _adjustDialog() {
    const e =
        this._element.scrollHeight > document.documentElement.clientHeight,
      n = this._scrollBar.getWidth(),
      s = n > 0;
    if (s && !e) {
      const i = ct() ? "paddingLeft" : "paddingRight";
      this._element.style[i] = `${n}px`;
    }
    if (!s && e) {
      const i = ct() ? "paddingRight" : "paddingLeft";
      this._element.style[i] = `${n}px`;
    }
  }
  _resetAdjustments() {
    ((this._element.style.paddingLeft = ""),
      (this._element.style.paddingRight = ""));
  }
  static jQueryInterface(e, n) {
    return this.each(function () {
      const s = Qn.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof s[e] == "undefined")
          throw new TypeError(`No method named "${e}"`);
        s[e](n);
      }
    });
  }
}
I.on(document, Sy, Oy, function (t) {
  const e = Y.getElementFromSelector(this);
  (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
    I.one(e, xd, (i) => {
      i.defaultPrevented ||
        I.one(e, Ad, () => {
          ss(this) && this.focus();
        });
    }));
  const n = Y.findOne(Ay);
  (n && Qn.getInstance(n).hide(), Qn.getOrCreateInstance(e).toggle(this));
});
ki(Qn);
dt(Qn);
const Ly = "offcanvas",
  My = "bs.offcanvas",
  jt = `.${My}`,
  Cd = ".data-api",
  Ny = `load${jt}${Cd}`,
  Dy = "Escape",
  Al = "show",
  xl = "showing",
  Cl = "hiding",
  $y = "offcanvas-backdrop",
  Od = ".offcanvas.show",
  Ry = `show${jt}`,
  ky = `shown${jt}`,
  Vy = `hide${jt}`,
  Ol = `hidePrevented${jt}`,
  Pd = `hidden${jt}`,
  By = `resize${jt}`,
  jy = `click${jt}${Cd}`,
  Hy = `keydown.dismiss${jt}`,
  Fy = '[data-bs-toggle="offcanvas"]',
  zy = { backdrop: !0, keyboard: !0, scroll: !1 },
  Gy = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
class Xt extends Et {
  constructor(e, n) {
    (super(e, n),
      (this._isShown = !1),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      this._addEventListeners());
  }
  static get Default() {
    return zy;
  }
  static get DefaultType() {
    return Gy;
  }
  static get NAME() {
    return Ly;
  }
  toggle(e) {
    return this._isShown ? this.hide() : this.show(e);
  }
  show(e) {
    if (
      this._isShown ||
      I.trigger(this._element, Ry, { relatedTarget: e }).defaultPrevented
    )
      return;
    ((this._isShown = !0),
      this._backdrop.show(),
      this._config.scroll || new eo().hide(),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      this._element.classList.add(xl));
    const s = () => {
      ((!this._config.scroll || this._config.backdrop) &&
        this._focustrap.activate(),
        this._element.classList.add(Al),
        this._element.classList.remove(xl),
        I.trigger(this._element, ky, { relatedTarget: e }));
    };
    this._queueCallback(s, this._element, !0);
  }
  hide() {
    if (!this._isShown || I.trigger(this._element, Vy).defaultPrevented) return;
    (this._focustrap.deactivate(),
      this._element.blur(),
      (this._isShown = !1),
      this._element.classList.add(Cl),
      this._backdrop.hide());
    const n = () => {
      (this._element.classList.remove(Al, Cl),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        this._config.scroll || new eo().reset(),
        I.trigger(this._element, Pd));
    };
    this._queueCallback(n, this._element, !0);
  }
  dispose() {
    (this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose());
  }
  _initializeBackDrop() {
    const e = () => {
        if (this._config.backdrop === "static") {
          I.trigger(this._element, Ol);
          return;
        }
        this.hide();
      },
      n = Boolean(this._config.backdrop);
    return new Sd({
      className: $y,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? e : null,
    });
  }
  _initializeFocusTrap() {
    return new Td({ trapElement: this._element });
  }
  _addEventListeners() {
    I.on(this._element, Hy, (e) => {
      if (e.key === Dy) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        I.trigger(this._element, Ol);
      }
    });
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Xt.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        n[e](this);
      }
    });
  }
}
I.on(document, jy, Fy, function (t) {
  const e = Y.getElementFromSelector(this);
  if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), qt(this)))
    return;
  I.one(e, Pd, () => {
    ss(this) && this.focus();
  });
  const n = Y.findOne(Od);
  (n && n !== e && Xt.getInstance(n).hide(),
    Xt.getOrCreateInstance(e).toggle(this));
});
I.on(window, Ny, () => {
  for (const t of Y.find(Od)) Xt.getOrCreateInstance(t).show();
});
I.on(window, By, () => {
  for (const t of Y.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(t).position !== "fixed" &&
      Xt.getOrCreateInstance(t).hide();
});
ki(Xt);
dt(Xt);
const Wy = /^aria-[\w-]*$/i,
  Id = {
    "*": ["class", "dir", "id", "lang", "role", Wy],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: [],
  },
  Uy = new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href",
  ]),
  Ky = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
  Yy = (t, e) => {
    const n = t.nodeName.toLowerCase();
    return e.includes(n)
      ? Uy.has(n)
        ? Boolean(Ky.test(t.nodeValue))
        : !0
      : e.filter((s) => s instanceof RegExp).some((s) => s.test(n));
  };
function qy(t, e, n) {
  if (!t.length) return t;
  if (n && typeof n == "function") return n(t);
  const i = new window.DOMParser().parseFromString(t, "text/html"),
    r = [].concat(...i.body.querySelectorAll("*"));
  for (const o of r) {
    const a = o.nodeName.toLowerCase();
    if (!Object.keys(e).includes(a)) {
      o.remove();
      continue;
    }
    const l = [].concat(...o.attributes),
      u = [].concat(e["*"] || [], e[a] || []);
    for (const c of l) Yy(c, u) || o.removeAttribute(c.nodeName);
  }
  return i.body.innerHTML;
}
const Xy = "TemplateFactory",
  Qy = {
    allowList: Id,
    content: {},
    extraClass: "",
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: "<div></div>",
  },
  Jy = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string",
  },
  Zy = {
    entry: "(string|element|function|null)",
    selector: "(string|element)",
  };
class eS extends Bs {
  constructor(e) {
    (super(), (this._config = this._getConfig(e)));
  }
  static get Default() {
    return Qy;
  }
  static get DefaultType() {
    return Jy;
  }
  static get NAME() {
    return Xy;
  }
  getContent() {
    return Object.values(this._config.content)
      .map((e) => this._resolvePossibleFunction(e))
      .filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(e) {
    return (
      this._checkContent(e),
      (this._config.content = { ...this._config.content, ...e }),
      this
    );
  }
  toHtml() {
    const e = document.createElement("div");
    e.innerHTML = this._maybeSanitize(this._config.template);
    for (const [i, r] of Object.entries(this._config.content))
      this._setContent(e, r, i);
    const n = e.children[0],
      s = this._resolvePossibleFunction(this._config.extraClass);
    return (s && n.classList.add(...s.split(" ")), n);
  }
  _typeCheckConfig(e) {
    (super._typeCheckConfig(e), this._checkContent(e.content));
  }
  _checkContent(e) {
    for (const [n, s] of Object.entries(e))
      super._typeCheckConfig({ selector: n, entry: s }, Zy);
  }
  _setContent(e, n, s) {
    const i = Y.findOne(s, e);
    if (!!i) {
      if (((n = this._resolvePossibleFunction(n)), !n)) {
        i.remove();
        return;
      }
      if (Rt(n)) {
        this._putElementInTemplate(Yt(n), i);
        return;
      }
      if (this._config.html) {
        i.innerHTML = this._maybeSanitize(n);
        return;
      }
      i.textContent = n;
    }
  }
  _maybeSanitize(e) {
    return this._config.sanitize
      ? qy(e, this._config.allowList, this._config.sanitizeFn)
      : e;
  }
  _resolvePossibleFunction(e) {
    return He(e, [this]);
  }
  _putElementInTemplate(e, n) {
    if (this._config.html) {
      ((n.innerHTML = ""), n.append(e));
      return;
    }
    n.textContent = e.textContent;
  }
}
const tS = "tooltip",
  nS = new Set(["sanitize", "allowList", "sanitizeFn"]),
  Er = "fade",
  sS = "modal",
  Qs = "show",
  iS = ".tooltip-inner",
  Pl = `.${sS}`,
  Il = "hide.bs.modal",
  fs = "hover",
  br = "focus",
  rS = "click",
  oS = "manual",
  aS = "hide",
  lS = "hidden",
  cS = "show",
  uS = "shown",
  dS = "inserted",
  fS = "click",
  pS = "focusin",
  hS = "focusout",
  mS = "mouseenter",
  gS = "mouseleave",
  vS = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: ct() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: ct() ? "right" : "left",
  },
  _S = {
    allowList: Id,
    animation: !0,
    boundary: "clippingParents",
    container: !1,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: !1,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: !0,
    sanitizeFn: null,
    selector: !1,
    template:
      '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus",
  },
  ES = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
  };
class rs extends Et {
  constructor(e, n) {
    if (typeof sd == "undefined")
      throw new TypeError(
        "Bootstrap's tooltips require Popper (https://popper.js.org)",
      );
    (super(e, n),
      (this._isEnabled = !0),
      (this._timeout = 0),
      (this._isHovered = null),
      (this._activeTrigger = {}),
      (this._popper = null),
      (this._templateFactory = null),
      (this._newContent = null),
      (this.tip = null),
      this._setListeners(),
      this._config.selector || this._fixTitle());
  }
  static get Default() {
    return _S;
  }
  static get DefaultType() {
    return ES;
  }
  static get NAME() {
    return tS;
  }
  enable() {
    this._isEnabled = !0;
  }
  disable() {
    this._isEnabled = !1;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (!!this._isEnabled) {
      if (
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown())
      ) {
        this._leave();
        return;
      }
      this._enter();
    }
  }
  dispose() {
    (clearTimeout(this._timeout),
      I.off(this._element.closest(Pl), Il, this._hideModalHandler),
      this._element.getAttribute("data-bs-original-title") &&
        this._element.setAttribute(
          "title",
          this._element.getAttribute("data-bs-original-title"),
        ),
      this._disposePopper(),
      super.dispose());
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled)) return;
    const e = I.trigger(this._element, this.constructor.eventName(cS)),
      s = (
        od(this._element) || this._element.ownerDocument.documentElement
      ).contains(this._element);
    if (e.defaultPrevented || !s) return;
    this._disposePopper();
    const i = this._getTipElement();
    this._element.setAttribute("aria-describedby", i.getAttribute("id"));
    const { container: r } = this._config;
    if (
      (this._element.ownerDocument.documentElement.contains(this.tip) ||
        (r.append(i), I.trigger(this._element, this.constructor.eventName(dS))),
      (this._popper = this._createPopper(i)),
      i.classList.add(Qs),
      "ontouchstart" in document.documentElement)
    )
      for (const a of [].concat(...document.body.children))
        I.on(a, "mouseover", Ei);
    const o = () => {
      (I.trigger(this._element, this.constructor.eventName(uS)),
        this._isHovered === !1 && this._leave(),
        (this._isHovered = !1));
    };
    this._queueCallback(o, this.tip, this._isAnimated());
  }
  hide() {
    if (
      !this._isShown() ||
      I.trigger(this._element, this.constructor.eventName(aS)).defaultPrevented
    )
      return;
    if (
      (this._getTipElement().classList.remove(Qs),
      "ontouchstart" in document.documentElement)
    )
      for (const i of [].concat(...document.body.children))
        I.off(i, "mouseover", Ei);
    ((this._activeTrigger[rS] = !1),
      (this._activeTrigger[br] = !1),
      (this._activeTrigger[fs] = !1),
      (this._isHovered = null));
    const s = () => {
      this._isWithActiveTrigger() ||
        (this._isHovered || this._disposePopper(),
        this._element.removeAttribute("aria-describedby"),
        I.trigger(this._element, this.constructor.eventName(lS)));
    };
    this._queueCallback(s, this.tip, this._isAnimated());
  }
  update() {
    this._popper && this._popper.update();
  }
  _isWithContent() {
    return Boolean(this._getTitle());
  }
  _getTipElement() {
    return (
      this.tip ||
        (this.tip = this._createTipElement(
          this._newContent || this._getContentForTemplate(),
        )),
      this.tip
    );
  }
  _createTipElement(e) {
    const n = this._getTemplateFactory(e).toHtml();
    if (!n) return null;
    (n.classList.remove(Er, Qs),
      n.classList.add(`bs-${this.constructor.NAME}-auto`));
    const s = rb(this.constructor.NAME).toString();
    return (
      n.setAttribute("id", s),
      this._isAnimated() && n.classList.add(Er),
      n
    );
  }
  setContent(e) {
    ((this._newContent = e),
      this._isShown() && (this._disposePopper(), this.show()));
  }
  _getTemplateFactory(e) {
    return (
      this._templateFactory
        ? this._templateFactory.changeContent(e)
        : (this._templateFactory = new eS({
            ...this._config,
            content: e,
            extraClass: this._resolvePossibleFunction(this._config.customClass),
          })),
      this._templateFactory
    );
  }
  _getContentForTemplate() {
    return { [iS]: this._getTitle() };
  }
  _getTitle() {
    return (
      this._resolvePossibleFunction(this._config.title) ||
      this._element.getAttribute("data-bs-original-title")
    );
  }
  _initializeOnDelegatedTarget(e) {
    return this.constructor.getOrCreateInstance(
      e.delegateTarget,
      this._getDelegateConfig(),
    );
  }
  _isAnimated() {
    return (
      this._config.animation || (this.tip && this.tip.classList.contains(Er))
    );
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(Qs);
  }
  _createPopper(e) {
    const n = He(this._config.placement, [this, e, this._element]),
      s = vS[n.toUpperCase()];
    return zo(this._element, e, this._getPopperConfig(s));
  }
  _getOffset() {
    const { offset: e } = this._config;
    return typeof e == "string"
      ? e.split(",").map((n) => Number.parseInt(n, 10))
      : typeof e == "function"
        ? (n) => e(n, this._element)
        : e;
  }
  _resolvePossibleFunction(e) {
    return He(e, [this._element]);
  }
  _getPopperConfig(e) {
    const n = {
      placement: e,
      modifiers: [
        {
          name: "flip",
          options: { fallbackPlacements: this._config.fallbackPlacements },
        },
        { name: "offset", options: { offset: this._getOffset() } },
        {
          name: "preventOverflow",
          options: { boundary: this._config.boundary },
        },
        {
          name: "arrow",
          options: { element: `.${this.constructor.NAME}-arrow` },
        },
        {
          name: "preSetPlacement",
          enabled: !0,
          phase: "beforeMain",
          fn: (s) => {
            this._getTipElement().setAttribute(
              "data-popper-placement",
              s.state.placement,
            );
          },
        },
      ],
    };
    return { ...n, ...He(this._config.popperConfig, [n]) };
  }
  _setListeners() {
    const e = this._config.trigger.split(" ");
    for (const n of e)
      if (n === "click")
        I.on(
          this._element,
          this.constructor.eventName(fS),
          this._config.selector,
          (s) => {
            this._initializeOnDelegatedTarget(s).toggle();
          },
        );
      else if (n !== oS) {
        const s =
            n === fs
              ? this.constructor.eventName(mS)
              : this.constructor.eventName(pS),
          i =
            n === fs
              ? this.constructor.eventName(gS)
              : this.constructor.eventName(hS);
        (I.on(this._element, s, this._config.selector, (r) => {
          const o = this._initializeOnDelegatedTarget(r);
          ((o._activeTrigger[r.type === "focusin" ? br : fs] = !0), o._enter());
        }),
          I.on(this._element, i, this._config.selector, (r) => {
            const o = this._initializeOnDelegatedTarget(r);
            ((o._activeTrigger[r.type === "focusout" ? br : fs] =
              o._element.contains(r.relatedTarget)),
              o._leave());
          }));
      }
    ((this._hideModalHandler = () => {
      this._element && this.hide();
    }),
      I.on(this._element.closest(Pl), Il, this._hideModalHandler));
  }
  _fixTitle() {
    const e = this._element.getAttribute("title");
    !e ||
      (!this._element.getAttribute("aria-label") &&
        !this._element.textContent.trim() &&
        this._element.setAttribute("aria-label", e),
      this._element.setAttribute("data-bs-original-title", e),
      this._element.removeAttribute("title"));
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = !0;
      return;
    }
    ((this._isHovered = !0),
      this._setTimeout(() => {
        this._isHovered && this.show();
      }, this._config.delay.show));
  }
  _leave() {
    this._isWithActiveTrigger() ||
      ((this._isHovered = !1),
      this._setTimeout(() => {
        this._isHovered || this.hide();
      }, this._config.delay.hide));
  }
  _setTimeout(e, n) {
    (clearTimeout(this._timeout), (this._timeout = setTimeout(e, n)));
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0);
  }
  _getConfig(e) {
    const n = kt.getDataAttributes(this._element);
    for (const s of Object.keys(n)) nS.has(s) && delete n[s];
    return (
      (e = { ...n, ...(typeof e == "object" && e ? e : {}) }),
      (e = this._mergeConfigObj(e)),
      (e = this._configAfterMerge(e)),
      this._typeCheckConfig(e),
      e
    );
  }
  _configAfterMerge(e) {
    return (
      (e.container = e.container === !1 ? document.body : Yt(e.container)),
      typeof e.delay == "number" &&
        (e.delay = { show: e.delay, hide: e.delay }),
      typeof e.title == "number" && (e.title = e.title.toString()),
      typeof e.content == "number" && (e.content = e.content.toString()),
      e
    );
  }
  _getDelegateConfig() {
    const e = {};
    for (const [n, s] of Object.entries(this._config))
      this.constructor.Default[n] !== s && (e[n] = s);
    return ((e.selector = !1), (e.trigger = "manual"), e);
  }
  _disposePopper() {
    (this._popper && (this._popper.destroy(), (this._popper = null)),
      this.tip && (this.tip.remove(), (this.tip = null)));
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = rs.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof n[e] == "undefined")
          throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
dt(rs);
const bS = "popover",
  wS = ".popover-header",
  yS = ".popover-body",
  SS = {
    ...rs.Default,
    content: "",
    offset: [0, 8],
    placement: "right",
    template:
      '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click",
  },
  TS = { ...rs.DefaultType, content: "(null|string|element|function)" };
class Ko extends rs {
  static get Default() {
    return SS;
  }
  static get DefaultType() {
    return TS;
  }
  static get NAME() {
    return bS;
  }
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  _getContentForTemplate() {
    return { [wS]: this._getTitle(), [yS]: this._getContent() };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Ko.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof n[e] == "undefined")
          throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
dt(Ko);
const AS = "scrollspy",
  xS = "bs.scrollspy",
  Yo = `.${xS}`,
  CS = ".data-api",
  OS = `activate${Yo}`,
  Ll = `click${Yo}`,
  PS = `load${Yo}${CS}`,
  IS = "dropdown-item",
  Cn = "active",
  LS = '[data-bs-spy="scroll"]',
  wr = "[href]",
  MS = ".nav, .list-group",
  Ml = ".nav-link",
  NS = ".nav-item",
  DS = ".list-group-item",
  $S = `${Ml}, ${NS} > ${Ml}, ${DS}`,
  RS = ".dropdown",
  kS = ".dropdown-toggle",
  VS = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: !1,
    target: null,
    threshold: [0.1, 0.5, 1],
  },
  BS = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array",
  };
class ji extends Et {
  constructor(e, n) {
    (super(e, n),
      (this._targetLinks = new Map()),
      (this._observableSections = new Map()),
      (this._rootElement =
        getComputedStyle(this._element).overflowY === "visible"
          ? null
          : this._element),
      (this._activeTarget = null),
      (this._observer = null),
      (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
      this.refresh());
  }
  static get Default() {
    return VS;
  }
  static get DefaultType() {
    return BS;
  }
  static get NAME() {
    return AS;
  }
  refresh() {
    (this._initializeTargetsAndObservables(),
      this._maybeEnableSmoothScroll(),
      this._observer
        ? this._observer.disconnect()
        : (this._observer = this._getNewObserver()));
    for (const e of this._observableSections.values())
      this._observer.observe(e);
  }
  dispose() {
    (this._observer.disconnect(), super.dispose());
  }
  _configAfterMerge(e) {
    return (
      (e.target = Yt(e.target) || document.body),
      (e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin),
      typeof e.threshold == "string" &&
        (e.threshold = e.threshold.split(",").map((n) => Number.parseFloat(n))),
      e
    );
  }
  _maybeEnableSmoothScroll() {
    !this._config.smoothScroll ||
      (I.off(this._config.target, Ll),
      I.on(this._config.target, Ll, wr, (e) => {
        const n = this._observableSections.get(e.target.hash);
        if (n) {
          e.preventDefault();
          const s = this._rootElement || window,
            i = n.offsetTop - this._element.offsetTop;
          if (s.scrollTo) {
            s.scrollTo({ top: i, behavior: "smooth" });
            return;
          }
          s.scrollTop = i;
        }
      }));
  }
  _getNewObserver() {
    const e = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin,
    };
    return new IntersectionObserver((n) => this._observerCallback(n), e);
  }
  _observerCallback(e) {
    const n = (o) => this._targetLinks.get(`#${o.target.id}`),
      s = (o) => {
        ((this._previousScrollData.visibleEntryTop = o.target.offsetTop),
          this._process(n(o)));
      },
      i = (this._rootElement || document.documentElement).scrollTop,
      r = i >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = i;
    for (const o of e) {
      if (!o.isIntersecting) {
        ((this._activeTarget = null), this._clearActiveClass(n(o)));
        continue;
      }
      const a = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (r && a) {
        if ((s(o), !i)) return;
        continue;
      }
      !r && !a && s(o);
    }
  }
  _initializeTargetsAndObservables() {
    ((this._targetLinks = new Map()), (this._observableSections = new Map()));
    const e = Y.find(wr, this._config.target);
    for (const n of e) {
      if (!n.hash || qt(n)) continue;
      const s = Y.findOne(decodeURI(n.hash), this._element);
      ss(s) &&
        (this._targetLinks.set(decodeURI(n.hash), n),
        this._observableSections.set(n.hash, s));
    }
  }
  _process(e) {
    this._activeTarget !== e &&
      (this._clearActiveClass(this._config.target),
      (this._activeTarget = e),
      e.classList.add(Cn),
      this._activateParents(e),
      I.trigger(this._element, OS, { relatedTarget: e }));
  }
  _activateParents(e) {
    if (e.classList.contains(IS)) {
      Y.findOne(kS, e.closest(RS)).classList.add(Cn);
      return;
    }
    for (const n of Y.parents(e, MS))
      for (const s of Y.prev(n, $S)) s.classList.add(Cn);
  }
  _clearActiveClass(e) {
    e.classList.remove(Cn);
    const n = Y.find(`${wr}.${Cn}`, e);
    for (const s of n) s.classList.remove(Cn);
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = ji.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
I.on(window, PS, () => {
  for (const t of Y.find(LS)) ji.getOrCreateInstance(t);
});
dt(ji);
const jS = "tab",
  HS = "bs.tab",
  yn = `.${HS}`,
  FS = `hide${yn}`,
  zS = `hidden${yn}`,
  GS = `show${yn}`,
  WS = `shown${yn}`,
  US = `click${yn}`,
  KS = `keydown${yn}`,
  YS = `load${yn}`,
  qS = "ArrowLeft",
  Nl = "ArrowRight",
  XS = "ArrowUp",
  Dl = "ArrowDown",
  yr = "Home",
  $l = "End",
  cn = "active",
  Rl = "fade",
  Sr = "show",
  QS = "dropdown",
  Ld = ".dropdown-toggle",
  JS = ".dropdown-menu",
  Tr = `:not(${Ld})`,
  ZS = '.list-group, .nav, [role="tablist"]',
  eT = ".nav-item, .list-group-item",
  tT = `.nav-link${Tr}, .list-group-item${Tr}, [role="tab"]${Tr}`,
  Md =
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
  Ar = `${tT}, ${Md}`,
  nT = `.${cn}[data-bs-toggle="tab"], .${cn}[data-bs-toggle="pill"], .${cn}[data-bs-toggle="list"]`;
class Jn extends Et {
  constructor(e) {
    (super(e),
      (this._parent = this._element.closest(ZS)),
      this._parent &&
        (this._setInitialAttributes(this._parent, this._getChildren()),
        I.on(this._element, KS, (n) => this._keydown(n))));
  }
  static get NAME() {
    return jS;
  }
  show() {
    const e = this._element;
    if (this._elemIsActive(e)) return;
    const n = this._getActiveElem(),
      s = n ? I.trigger(n, FS, { relatedTarget: e }) : null;
    I.trigger(e, GS, { relatedTarget: n }).defaultPrevented ||
      (s && s.defaultPrevented) ||
      (this._deactivate(n, e), this._activate(e, n));
  }
  _activate(e, n) {
    if (!e) return;
    (e.classList.add(cn), this._activate(Y.getElementFromSelector(e)));
    const s = () => {
      if (e.getAttribute("role") !== "tab") {
        e.classList.add(Sr);
        return;
      }
      (e.removeAttribute("tabindex"),
        e.setAttribute("aria-selected", !0),
        this._toggleDropDown(e, !0),
        I.trigger(e, WS, { relatedTarget: n }));
    };
    this._queueCallback(s, e, e.classList.contains(Rl));
  }
  _deactivate(e, n) {
    if (!e) return;
    (e.classList.remove(cn),
      e.blur(),
      this._deactivate(Y.getElementFromSelector(e)));
    const s = () => {
      if (e.getAttribute("role") !== "tab") {
        e.classList.remove(Sr);
        return;
      }
      (e.setAttribute("aria-selected", !1),
        e.setAttribute("tabindex", "-1"),
        this._toggleDropDown(e, !1),
        I.trigger(e, zS, { relatedTarget: n }));
    };
    this._queueCallback(s, e, e.classList.contains(Rl));
  }
  _keydown(e) {
    if (![qS, Nl, XS, Dl, yr, $l].includes(e.key)) return;
    (e.stopPropagation(), e.preventDefault());
    const n = this._getChildren().filter((i) => !qt(i));
    let s;
    if ([yr, $l].includes(e.key)) s = n[e.key === yr ? 0 : n.length - 1];
    else {
      const i = [Nl, Dl].includes(e.key);
      s = Go(n, e.target, i, !0);
    }
    s && (s.focus({ preventScroll: !0 }), Jn.getOrCreateInstance(s).show());
  }
  _getChildren() {
    return Y.find(Ar, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((e) => this._elemIsActive(e)) || null;
  }
  _setInitialAttributes(e, n) {
    this._setAttributeIfNotExists(e, "role", "tablist");
    for (const s of n) this._setInitialAttributesOnChild(s);
  }
  _setInitialAttributesOnChild(e) {
    e = this._getInnerElement(e);
    const n = this._elemIsActive(e),
      s = this._getOuterElement(e);
    (e.setAttribute("aria-selected", n),
      s !== e && this._setAttributeIfNotExists(s, "role", "presentation"),
      n || e.setAttribute("tabindex", "-1"),
      this._setAttributeIfNotExists(e, "role", "tab"),
      this._setInitialAttributesOnTargetPanel(e));
  }
  _setInitialAttributesOnTargetPanel(e) {
    const n = Y.getElementFromSelector(e);
    !n ||
      (this._setAttributeIfNotExists(n, "role", "tabpanel"),
      e.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${e.id}`));
  }
  _toggleDropDown(e, n) {
    const s = this._getOuterElement(e);
    if (!s.classList.contains(QS)) return;
    const i = (r, o) => {
      const a = Y.findOne(r, s);
      a && a.classList.toggle(o, n);
    };
    (i(Ld, cn), i(JS, Sr), s.setAttribute("aria-expanded", n));
  }
  _setAttributeIfNotExists(e, n, s) {
    e.hasAttribute(n) || e.setAttribute(n, s);
  }
  _elemIsActive(e) {
    return e.classList.contains(cn);
  }
  _getInnerElement(e) {
    return e.matches(Ar) ? e : Y.findOne(Ar, e);
  }
  _getOuterElement(e) {
    return e.closest(eT) || e;
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Jn.getOrCreateInstance(this);
      if (typeof e == "string") {
        if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
I.on(document, US, Md, function (t) {
  (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
    !qt(this) && Jn.getOrCreateInstance(this).show());
});
I.on(window, YS, () => {
  for (const t of Y.find(nT)) Jn.getOrCreateInstance(t);
});
dt(Jn);
const sT = "toast",
  iT = "bs.toast",
  nn = `.${iT}`,
  rT = `mouseover${nn}`,
  oT = `mouseout${nn}`,
  aT = `focusin${nn}`,
  lT = `focusout${nn}`,
  cT = `hide${nn}`,
  uT = `hidden${nn}`,
  dT = `show${nn}`,
  fT = `shown${nn}`,
  pT = "fade",
  kl = "hide",
  Js = "show",
  Zs = "showing",
  hT = { animation: "boolean", autohide: "boolean", delay: "number" },
  mT = { animation: !0, autohide: !0, delay: 5e3 };
class Hi extends Et {
  constructor(e, n) {
    (super(e, n),
      (this._timeout = null),
      (this._hasMouseInteraction = !1),
      (this._hasKeyboardInteraction = !1),
      this._setListeners());
  }
  static get Default() {
    return mT;
  }
  static get DefaultType() {
    return hT;
  }
  static get NAME() {
    return sT;
  }
  show() {
    if (I.trigger(this._element, dT).defaultPrevented) return;
    (this._clearTimeout(),
      this._config.animation && this._element.classList.add(pT));
    const n = () => {
      (this._element.classList.remove(Zs),
        I.trigger(this._element, fT),
        this._maybeScheduleHide());
    };
    (this._element.classList.remove(kl),
      Vs(this._element),
      this._element.classList.add(Js, Zs),
      this._queueCallback(n, this._element, this._config.animation));
  }
  hide() {
    if (!this.isShown() || I.trigger(this._element, cT).defaultPrevented)
      return;
    const n = () => {
      (this._element.classList.add(kl),
        this._element.classList.remove(Zs, Js),
        I.trigger(this._element, uT));
    };
    (this._element.classList.add(Zs),
      this._queueCallback(n, this._element, this._config.animation));
  }
  dispose() {
    (this._clearTimeout(),
      this.isShown() && this._element.classList.remove(Js),
      super.dispose());
  }
  isShown() {
    return this._element.classList.contains(Js);
  }
  _maybeScheduleHide() {
    !this._config.autohide ||
      this._hasMouseInteraction ||
      this._hasKeyboardInteraction ||
      (this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay));
  }
  _onInteraction(e, n) {
    switch (e.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = n;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = n;
        break;
      }
    }
    if (n) {
      this._clearTimeout();
      return;
    }
    const s = e.relatedTarget;
    this._element === s ||
      this._element.contains(s) ||
      this._maybeScheduleHide();
  }
  _setListeners() {
    (I.on(this._element, rT, (e) => this._onInteraction(e, !0)),
      I.on(this._element, oT, (e) => this._onInteraction(e, !1)),
      I.on(this._element, aT, (e) => this._onInteraction(e, !0)),
      I.on(this._element, lT, (e) => this._onInteraction(e, !1)));
  }
  _clearTimeout() {
    (clearTimeout(this._timeout), (this._timeout = null));
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Hi.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof n[e] == "undefined")
          throw new TypeError(`No method named "${e}"`);
        n[e](this);
      }
    });
  }
}
ki(Hi);
dt(Hi);
console.log(
  "%cCe site a \xE9t\xE9 d\xE9velopp\xE9 par Aristide Ghislain Adouko",
  "color: red; font-size: 12px; font-family: monospace; font-weight: bold;",
);
const qo = Yp(dm);
qo.use(hE);
qo.use(mE);
qo.mount("#app");
export {
  ag as B,
  Po as F,
  Oo as H,
  Fe as _,
  C as a,
  be as b,
  Z as c,
  Q as d,
  pi as e,
  _u as f,
  Te as g,
  Ot as h,
  gT as i,
  ht as j,
  hu as k,
  es as m,
  En as n,
  X as o,
  he as r,
  Ce as t,
  vT as v,
  Gc as w,
};
