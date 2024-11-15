var y = "as",
  Z = "=",
  G = "break",
  D = "else",
  K = "enum",
  V = "export",
  z = "if",
  m = "import",
  k = "->",
  j = "is",
  J = "loop",
  W = "mut",
  Q = "native",
  v = "object",
  X = "fn",
  $ = "return",
  q = "self",
  tt = "template",
  et = Object.freeze({
    ALIAS: y,
    ASSIGN: Z,
    BREAK: G,
    ELSE: D,
    ENUMERATION: K,
    EXPORT: V,
    IF: z,
    IMPORT: m,
    INTO: k,
    IS: j,
    LOOP: J,
    MUTABLE: W,
    NATIVE: Q,
    OBJECT: v,
    PROCEDURE: X,
    RETURN: $,
    SELF: q,
    TEMPLATE: tt,
  }),
  L = et;
var ot = "assign",
  nt = "arity_match",
  rt = "arity_status",
  st = "array_assignment",
  ct = "branch-match",
  Tt = "branch-default",
  Et = "condition",
  _t = "loop",
  it = "data",
  pt = "generics",
  xt = "enumeration",
  St = "expression",
  at = "instance",
  ft = "Link",
  At = "local",
  Rt = "object",
  Ot = "procedure",
  It = "return",
  lt = "compare",
  ut = "select",
  Nt = "member",
  Pt = "store",
  Yt = "break",
  dt = "literal",
  Ct = "array_access",
  Lt = "valueLink",
  Mt = "linkValue",
  bt = "self",
  gt = "procedure-call",
  Ut = "Maybe",
  wt = "native",
  ht = "move",
  Bt = "String",
  Ft = "Array",
  Ht = "import",
  yt = "library",
  Zt = "constructor",
  Gt = "destructor",
  Dt = "free",
  Kt = "block-end",
  Vt = "default-block",
  zt = "continue",
  mt = "branch",
  kt = "statement",
  jt = "draw",
  Jt = "now",
  Wt = "size",
  Qt = "concatenation",
  vt = "foreach",
  Xt = "while",
  $t = "when",
  qt = "while-condition",
  te = "foreach-condition",
  ee = "foreach-end",
  oe = "for",
  ne = "up_to",
  re = "down_to",
  se = "almost_up_to",
  ce = "almost_down_to",
  Te = "I32",
  Ee = "U32",
  _e = "FP32",
  ie = "I16",
  pe = "U16",
  xe = "U8",
  Se = "I8",
  ae = "FP64",
  fe = "U64",
  Ae = "I64",
  Re = "Char",
  Oe = "block-start",
  Ie = "function-call",
  le = "Bool",
  ue = Object.freeze({
    TYPES_ASSIGN: ot,
    TYPES_ARRAY: Ft,
    TYPES_ARITY_MATCH: nt,
    TYPES_ARITY_STATUS: rt,
    TYPES_ARRAY_ASSIGNMENT: st,
    TYPES_BRANCH_MATCH: ct,
    TYPES_BRANCH_DEFAULT: Tt,
    TYPES_CONDITION: Et,
    TYPES_LOOP: _t,
    TYPES_FOREACH_END: ee,
    TYPES_WHILE_CONDITION: qt,
    TYPES_FOREACH_CONDITION: te,
    TYPES_DATA: it,
    TYPES_COMPARE: lt,
    TYPES_GENERICS: pt,
    TYPES_ENUMERATION: xt,
    TYPES_EXPRESSION: St,
    TYPES_INSTANCE: at,
    TYPES_LINK: ft,
    TYPES_IMPORT: Ht,
    TYPES_LOCAL: At,
    TYPES_OBJECT: Rt,
    TYPES_PROCEDURE: Ot,
    TYPES_RETURN: It,
    TYPES_SELECT: ut,
    TYPES_MEMBER: Nt,
    TYPES_STORE: Pt,
    TYPES_BREAK: Yt,
    TYPES_LITERAL: dt,
    TYPES_ARRAY_ACCESS: Ct,
    TYPES_LINK_TO: Lt,
    TYPES_VALUE_AT: Mt,
    TYPES_SELF: bt,
    TYPES_LIBRARY: yt,
    TYPES_DROP: gt,
    TYPES_MAYBE: Ut,
    TYPES_NATIVE: wt,
    TYPES_MOVE: ht,
    TYPES_STRING: Bt,
    TYPES_CONSTRUCTOR: Zt,
    TYPES_FREE: Dt,
    TYPES_DEFAULT_BLOCK: Vt,
    TYPES_BLOCK_END: Kt,
    TYPES_CONTINUE: zt,
    TYPES_BRANCH: mt,
    TYPES_STATEMENT: kt,
    TYPES_DESTRUCTOR: Gt,
    TYPES_DRAW: jt,
    TYPES_NOW: Jt,
    TYPES_SIZE: Wt,
    TYPES_CONCAT: Qt,
    TYPES_FOREACH: vt,
    TYPES_WHILE: Xt,
    TYPES_WHEN: $t,
    TYPES_FOR: oe,
    TYPES_UP_TO: ne,
    TYPES_DOWN_TO: re,
    TYPES_ALMOST_UP_TO: se,
    TYPES_ALMOST_DOWN_TO: ce,
    TYPES_I32: Te,
    TYPES_FP32: _e,
    TYPES_FP64: ae,
    TYPES_U32: Ee,
    TYPES_I64: Ae,
    TYPES_U64: fe,
    TYPES_I16: ie,
    TYPES_U16: pe,
    TYPES_I8: Se,
    TYPES_U8: xe,
    TYPES_CHAR: Re,
    TYPES_BOOL: le,
    TYPES_BLOCK_BEGIN: Oe,
    TYPES_FUNCTION_CALL: Ie,
  }),
  M = ue;
var Ne = Object.freeze({
    COLON: 58,
    COMMA: 44,
    DIGIT_ZERO: 48,
    DIGIT_NINE: 57,
    DOT: 46,
    HASHTAG: 35,
    HORIZONTAL_TAB: 9,
    HYPHEN_MINUS: 45,
    LEFT_CURLY_BRACKET: 123,
    LEFT_PARENTHESIS: 40,
    LEFT_SQUARE_BRACKET: 91,
    LINE_BREAK: 10,
    NULL: 0,
    PLUS_SIGN: 43,
    RIGHT_CURLY_BRACKET: 125,
    RIGHT_PARENTHESIS: 41,
    RIGHT_SQUARE_BRACKET: 93,
    SEMICOLON: 59,
    SPACE: 32,
    E_SIGN: 101,
  }),
  b = Ne;
var Pe = "assignment",
  Ye = "Flogram",
  de = Object.freeze({ K_ASSIGNMENT: Pe, K_FLOGRAM: Ye }),
  g = de;
var Ce = Object.freeze([
    [43],
    [45],
    [42],
    [47],
    [37],
    [110, 111, 116],
    [60],
    [62],
    [94],
    [111, 114],
    [33],
    [61, 61],
    [60, 61],
    [62, 61],
    [33, 61],
    [120, 111, 114],
    [97, 110, 100],
  ]),
  Le = Ce,
  U = Le;
var Me = Object.freeze({
    INT_ARRAY_START: 9999991,
    FLOAT_ARRAY_START: 9999981,
    STRING_START: 8888891,
    CHAR_START: 8888881,
    NAT_ON_HORIZON: 7777791,
    BIG_NAT_ON_HORIZON: 7777591,
    FLOAT_ON_HORIZON: 7777771,
    BIG_FLOAT_ON_HORIZON: 7777731,
    END_OF_LINE: 66666661,
  }),
  w = Me;
var be = Object.freeze({
    ENUM_MEMORY_SIZE: 12,
    ENUM_STACK_SIZE: 3,
    ARRAY_MEMORY_SIZE: 12,
    ARRAY_STACK_SIZE: 3,
    ARRAY_DEFAULT_CAPACITY: 4,
    STRING_MEMORY_SIZE: 8,
    STRING_STACK_SIZE: 2,
    OBJECT_MEMORY_SIZE: 8,
    OBJECT_STACK_SIZE: 2,
    NATIVE_MEMORY_SIZE: 4,
    NATIVE_STACK_SIZE: 1,
    NATIVE_SIZE: 4,
    STEP: 4,
    DOUBLE_STEP: 8,
    TRIPPLE_STEP: 12,
  }),
  h = be;
var ge = Object.freeze([]),
  Ue = Object.freeze({}),
  we = "",
  he = "	",
  Be = `
`,
  Fe = "UTF-8";
var He = Object.freeze({
    EMPTY_ARRAY: ge,
    EMPTY_OBJECT: Ue,
    EMPTY_STRING: we,
    HORIZONTAL_TAB: he,
    LINE_BREAK: Be,
    UNICODE_TEXT: Fe,
    Codes: b,
    Keys: L,
    Types: M,
    Keywords: g,
    Operators: U,
    DrawStates: w,
    Sizes: h,
  }),
  B = He;
var {
  INT_ARRAY_START: ye,
  FLOAT_ARRAY_START: F,
  STRING_START: H,
  CHAR_START: Ze,
  END_OF_LINE: Ge,
  NAT_ON_HORIZON: De,
  BIG_NAT_ON_HORIZON: Ke,
  FLOAT_ON_HORIZON: Ve,
  BIG_FLOAT_ON_HORIZON: ze,
} = B.DrawStates;
function To(r) {
  let c = [{ start: r.buffer.byteLength / 2, size: r.buffer.byteLength / 2 }],
    E = new Map(),
    x = [],
    S = [];
  function _() {
    return c;
  }
  function A() {
    return E;
  }
  function R(e) {
    let o = 0;
    for (; o < c.length && c[o].start < e.start; ) o++;
    c.splice(o, 0, e);
  }
  let O;
  function Y(e) {
    O === void 0 ? (O = e) : (S.push({ first: O, second: e }), (O = void 0));
  }
  function d() {
    if (!S.length) return [0, 0];
    let e = S.pop();
    return [e.first, e.second];
  }
  function I() {
    if (S.length < 2) return [0, 0];
    let [e] = S.splice(S.length - 2, 1);
    return [e.first, e.second];
  }
  function s(e) {
    let o = E.get(e);
    if (!o) throw new Error("Invalid pointer: " + e);
    let t = i(o.size),
      p = new Uint8Array(r.buffer, e, o.size);
    return new Uint8Array(r.buffer, t, o.size).set(p), t;
  }
  function T() {
    let e = Array.from(E.entries());
    if (e.length < 2) return;
    let [o, t] = e[e.length - 2],
      [p, n] = e[e.length - 1];
  }
  function i(e) {
    for (let t = 0; t < c.length; t++)
      if (c[t].size >= e) {
        let p = c.splice(t, 1);
        if (p.length > 0) {
          let n = p[0];
          if (n.size > e) {
            let C = { start: n.start + e, size: n.size - e };
            R(C);
          }
          return (n.size = e), E.set(n.start, n), n.start;
        }
      }
    if (
      r.buffer.byteLength + e >
      (r.buffer.byteLength * r.buffer.byteLength) / 65536
    ) {
      let t = Math.ceil(e / 65536);
      r.grow(t);
    }
    let o = { start: r.buffer.byteLength, size: e };
    return E.set(o.start, o), o.start;
  }
  function f(e) {
    let o = E.get(e);
    if (!o) {
      console.error("Unable to find block");
      return;
    }
    E.delete(e);
    for (let t = 0; t < c.length; t++)
      c[t].start + c[t].size === o.start
        ? ((o.start = c[t].start), (o.size += c[t].size), c.splice(t, 1), t--)
        : o.start + o.size === c[t].start &&
          ((o.size += c[t].size), c.splice(t, 1), t--);
    R(o);
  }
  function a(e) {
    return x.find((o) => o.dataPtr === e);
  }
  function l(e) {
    let o = i(4 * e).start,
      t = { dataPtr: o, length: 0, capacity: 4, elementTypeSize: e };
    return x.push(t), o;
  }
  function u(e, o) {
    let t = a(e);
    if (!t) throw new Error("Vector not found");
    if (t.length >= t.capacity) {
      let n = t.dataPtr;
      (t.dataPtr = i(2 * t.capacity * t.elementTypeSize).start),
        (t.capacity *= 2);
      let C = new Uint8Array(r.buffer, n, t.length * t.elementTypeSize);
      new Uint8Array(r.buffer, t.dataPtr, t.capacity * t.elementTypeSize).set(
        C
      ),
        f(n);
    }
    let p = new Uint8Array(
      r.buffer,
      t.dataPtr + t.length * t.elementTypeSize,
      t.elementTypeSize
    );
    for (let n = 0; n < t.elementTypeSize; n++) p[n] = (o >> (n * 8)) & 255;
    t.length += 1;
  }
  function N(e, o = 4) {
    let t = i(o),
      p = new Uint8Array(r.buffer, t.start, o);
    for (let n = 0; n < o; n++) p[n] = (e >> (n * 8)) & 255;
    return t.start;
  }
  function P(e, o = 4) {
    let t = new Uint8Array(r.buffer, e, o),
      p = 0;
    for (let n = 0; n < o; n++) p |= t[n] << (n * 8);
    return p;
  }
  return {
    alloc: i,
    dealloc: f,
    merge: T,
    save: Y,
    undo: d,
    undoPenultimate: I,
    createVector: l,
    pushToVector: u,
    allocateValue: N,
    readValue: P,
    getFreeList: _,
    getUsedBlocks: A,
    copy: s,
  };
}
function Eo() {
  function r() {
    return BigInt(Date.now());
  }
  return { now: r };
}
function _o(r, c = void 0) {
  let E = [],
    x = "default",
    S,
    _,
    A,
    R,
    O;
  function Y(s, T, i) {
    let f;
    return (
      i === F
        ? (f = new Float32Array(r.buffer, s, T))
        : (f = new Int32Array(r.buffer, s, T)),
      Array.from(f)
    );
  }
  function d(s, T) {
    let i = new Int32Array(r.buffer, s, T),
      f = new Float32Array(r.buffer, s, T),
      a = "",
      l = !1,
      u = !1,
      N = !1,
      P = !1;
    for (let e = 0; e < i.length; e++) {
      let o = i[e];
      if (l) {
        (a += o.toString()), (l = !1);
        continue;
      }
      if (u) {
        (a += f[e].toString()), (u = !1);
        continue;
      }
      if (N) {
        let t = o,
          p = i[e + 1],
          n = BigInt(t) + (BigInt(p) << 32n);
        (a += n.toString()), (N = !1), e++;
        continue;
      }
      if (P) {
        let t = new Float64Array(r.buffer, s + e * 4, 1);
        (a += t[0].toString()), (P = !1), e++;
        continue;
      }
      if (o === De) {
        l = !0;
        continue;
      }
      if (o === Ve) {
        u = !0;
        continue;
      }
      if (o === Ke) {
        N = !0;
        continue;
      }
      if (o === ze) {
        P = !0;
        continue;
      }
      o >= 32 && o <= 126 ? (a += String.fromCharCode(o)) : (a += o.toString());
    }
    return a;
  }
  function I(s) {
    if (s === Ge) {
      if (E.length > 0) {
        let T = E.join(" ");
        if (c) {
            c.push(T)
        } else console.log(T);
        E = [];
      }
      return;
    }
    if (x === "default") {
      if (s === ye || s === F) {
        (x = "array"), (O = s), (S = void 0), (_ = void 0);
        return;
      }
      if (s === H) {
        (x = "string"), (A = void 0), (_ = void 0);
        return;
      }
      if (s === Ze) {
        (x = "char"), (R = void 0);
        return;
      }
      E.push(s);
    } else if (x === "array") {
      if (_ == null) {
        _ = s;
        return;
      }
      if (!S) {
        S = s;
        let T = Y(S, _, O);
        E.push(T), (S = void 0), (_ = void 0), (x = "default");
      }
    } else if (x === "string") {
      if (s === H) return;
      if (_ == null) {
        _ = s;
        return;
      }
      if (!A) {
        A = s;
        let T = d(A, _);
        E.push(T), (A = void 0), (_ = void 0), (x = "default");
      }
    } else if (x === "char" && !R) {
      R = s;
      let T = String.fromCharCode(R);
      E.push(`${T}`), (x = "default");
    }
  }
  return {
    draw: I,
    drawI64: I,
    drawFP32: I,
    drawFP64: I,
    receiveParams: I,
    readArrayFromMemory: Y,
  };
}
export { Eo as createDate, _o as createDrawer, To as createMemoryManager };
