var zn = Object.defineProperty;
var $n = (u, e, t) =>
  e in u
    ? zn(u, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (u[e] = t);
var R = (u, e, t) => $n(u, typeof e != "symbol" ? e + "" : e, t);
// import * as le from "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/+esm";
import * as le from "./monaco-editor+esm.js?v=1.11.1";
const Ae = {
  getItem(u, e) {
    try {
      const t = localStorage.getItem(u + "::" + e);
      if (t === null) return null;
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    } catch {
      return null;
    }
  },
  setItem(u, e, t) {
    try {
      const n = typeof t == "string" ? t : JSON.stringify(t);
      localStorage.setItem(u + "::" + e, n);
    } catch {}
  },
};
function yt() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null,
  };
}
let me = yt();
function fn(u) {
  me = u;
}
const Be = { exec: () => null };
function y(u, e = "") {
  let t = typeof u == "string" ? u : u.source;
  const n = {
    replace: (s, r) => {
      let o = typeof r == "string" ? r : r.source;
      return (o = o.replace(U.caret, "$1")), (t = t.replace(s, o)), n;
    },
    getRegex: () => new RegExp(t, e),
  };
  return n;
}
const U = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceTabs: /^\t+/,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] /,
    listReplaceTask: /^\[[ xX]\] +/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: (u) => new RegExp(`^( {0,3}${u})((?:[	 ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: (u) =>
      new RegExp(
        `^ {0,${Math.min(
          3,
          u - 1
        )}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`
      ),
    hrRegex: (u) =>
      new RegExp(
        `^ {0,${Math.min(
          3,
          u - 1
        )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
      ),
    fencesBeginRegex: (u) =>
      new RegExp(`^ {0,${Math.min(3, u - 1)}}(?:\`\`\`|~~~)`),
    headingBeginRegex: (u) => new RegExp(`^ {0,${Math.min(3, u - 1)}}#`),
    htmlBeginRegex: (u) =>
      new RegExp(`^ {0,${Math.min(3, u - 1)}}<(?:[a-z].*>|!--)`, "i"),
  },
  Bn = /^(?:[ \t]*(?:\n|$))+/,
  Un = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
  Hn =
    /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  He = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  Fn = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  St = /(?:[*+-]|\d{1,9}[.)])/,
  dn =
    /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  gn = y(dn)
    .replace(/bull/g, St)
    .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
    .replace(/blockquote/g, / {0,3}>/)
    .replace(/heading/g, / {0,3}#{1,6}/)
    .replace(/html/g, / {0,3}<[^\n>]+>\n/)
    .replace(/\|table/g, "")
    .getRegex(),
  Gn = y(dn)
    .replace(/bull/g, St)
    .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
    .replace(/blockquote/g, / {0,3}>/)
    .replace(/heading/g, / {0,3}#{1,6}/)
    .replace(/html/g, / {0,3}<[^\n>]+>\n/)
    .replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
    .getRegex(),
  At =
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  Wn = /^[^\n]+/,
  Rt = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
  qn = y(
    /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/
  )
    .replace("label", Rt)
    .replace(
      "title",
      /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
    )
    .getRegex(),
  Zn = y(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
    .replace(/bull/g, St)
    .getRegex(),
  nt =
    "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
  Lt = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
  jn = y(
    "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
    "i"
  )
    .replace("comment", Lt)
    .replace("tag", nt)
    .replace(
      "attribute",
      / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
    )
    .getRegex(),
  mn = y(At)
    .replace("hr", He)
    .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
    .replace("|lheading", "")
    .replace("|table", "")
    .replace("blockquote", " {0,3}>")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
    )
    .replace("tag", nt)
    .getRegex(),
  Yn = y(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
    .replace("paragraph", mn)
    .getRegex(),
  It = {
    blockquote: Yn,
    code: Un,
    def: qn,
    fences: Hn,
    heading: Fn,
    hr: He,
    html: jn,
    lheading: gn,
    list: Zn,
    newline: Bn,
    paragraph: mn,
    table: Be,
    text: Wn,
  },
  Kt = y(
    "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  )
    .replace("hr", He)
    .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
    .replace("blockquote", " {0,3}>")
    .replace("code", "(?: {4}| {0,3}	)[^\\n]")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
    )
    .replace("tag", nt)
    .getRegex(),
  Xn = {
    ...It,
    lheading: Gn,
    table: Kt,
    paragraph: y(At)
      .replace("hr", He)
      .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
      .replace("|lheading", "")
      .replace("table", Kt)
      .replace("blockquote", " {0,3}>")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace(
        "html",
        "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
      )
      .replace("tag", nt)
      .getRegex(),
  },
  Vn = {
    ...It,
    html: y(
      `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
    )
      .replace("comment", Lt)
      .replace(
        /tag/g,
        "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
      )
      .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: Be,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: y(At)
      .replace("hr", He)
      .replace(
        "heading",
        ` *#{1,6} *[^
]`
      )
      .replace("lheading", gn)
      .replace("|table", "")
      .replace("blockquote", " {0,3}>")
      .replace("|fences", "")
      .replace("|list", "")
      .replace("|html", "")
      .replace("|tag", "")
      .getRegex(),
  },
  Qn = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  Kn = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  kn = /^( {2,}|\\)\n(?!\s*$)/,
  Jn =
    /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  it = /[\p{P}\p{S}]/u,
  Ct = /[\s\p{P}\p{S}]/u,
  bn = /[^\s\p{P}\p{S}]/u,
  ei = y(/^((?![*_])punctSpace)/, "u")
    .replace(/punctSpace/g, Ct)
    .getRegex(),
  xn = /(?!~)[\p{P}\p{S}]/u,
  ti = /(?!~)[\s\p{P}\p{S}]/u,
  ni = /(?:[^\s\p{P}\p{S}]|~)/u,
  ii =
    /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,
  wn = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,
  ri = y(wn, "u").replace(/punct/g, it).getRegex(),
  si = y(wn, "u").replace(/punct/g, xn).getRegex(),
  Tn =
    "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",
  oi = y(Tn, "gu")
    .replace(/notPunctSpace/g, bn)
    .replace(/punctSpace/g, Ct)
    .replace(/punct/g, it)
    .getRegex(),
  li = y(Tn, "gu")
    .replace(/notPunctSpace/g, ni)
    .replace(/punctSpace/g, ti)
    .replace(/punct/g, xn)
    .getRegex(),
  ai = y(
    "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
    "gu"
  )
    .replace(/notPunctSpace/g, bn)
    .replace(/punctSpace/g, Ct)
    .replace(/punct/g, it)
    .getRegex(),
  ci = y(/\\(punct)/, "gu")
    .replace(/punct/g, it)
    .getRegex(),
  ui = y(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
    .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
    .replace(
      "email",
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/
    )
    .getRegex(),
  pi = y(Lt).replace("(?:-->|$)", "-->").getRegex(),
  hi = y(
    "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
  )
    .replace("comment", pi)
    .replace(
      "attribute",
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/
    )
    .getRegex(),
  Je = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
  fi = y(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
    .replace("label", Je)
    .replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
    .replace(
      "title",
      /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/
    )
    .getRegex(),
  _n = y(/^!?\[(label)\]\[(ref)\]/)
    .replace("label", Je)
    .replace("ref", Rt)
    .getRegex(),
  En = y(/^!?\[(ref)\](?:\[\])?/)
    .replace("ref", Rt)
    .getRegex(),
  di = y("reflink|nolink(?!\\()", "g")
    .replace("reflink", _n)
    .replace("nolink", En)
    .getRegex(),
  vt = {
    _backpedal: Be,
    anyPunctuation: ci,
    autolink: ui,
    blockSkip: ii,
    br: kn,
    code: Kn,
    del: Be,
    emStrongLDelim: ri,
    emStrongRDelimAst: oi,
    emStrongRDelimUnd: ai,
    escape: Qn,
    link: fi,
    nolink: En,
    punctuation: ei,
    reflink: _n,
    reflinkSearch: di,
    tag: hi,
    text: Jn,
    url: Be,
  },
  gi = {
    ...vt,
    link: y(/^!?\[(label)\]\((.*?)\)/)
      .replace("label", Je)
      .getRegex(),
    reflink: y(/^!?\[(label)\]\s*\[([^\]]*)\]/)
      .replace("label", Je)
      .getRegex(),
  },
  Tt = {
    ...vt,
    emStrongRDelimAst: li,
    emStrongLDelim: si,
    url: y(
      /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      "i"
    )
      .replace(
        "email",
        /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/
      )
      .getRegex(),
    _backpedal:
      /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
  },
  mi = {
    ...Tt,
    br: y(kn).replace("{2,}", "*").getRegex(),
    text: y(Tt.text)
      .replace("\\b_", "\\b_| {2,}\\n")
      .replace(/\{2,\}/g, "*")
      .getRegex(),
  },
  Xe = { normal: It, gfm: Xn, pedantic: Vn },
  Oe = { normal: vt, gfm: Tt, breaks: mi, pedantic: gi },
  ki = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
  Jt = (u) => ki[u];
function ee(u, e) {
  if (e) {
    if (U.escapeTest.test(u)) return u.replace(U.escapeReplace, Jt);
  } else if (U.escapeTestNoEncode.test(u))
    return u.replace(U.escapeReplaceNoEncode, Jt);
  return u;
}
function en(u) {
  try {
    u = encodeURI(u).replace(U.percentDecode, "%");
  } catch {
    return null;
  }
  return u;
}
function tn(u, e) {
  var r;
  const t = u.replace(U.findPipe, (o, l, p) => {
      let a = !1,
        c = l;
      for (; --c >= 0 && p[c] === "\\"; ) a = !a;
      return a ? "|" : " |";
    }),
    n = t.split(U.splitPipe);
  let s = 0;
  if (
    (n[0].trim() || n.shift(),
    n.length > 0 && !((r = n.at(-1)) != null && r.trim()) && n.pop(),
    e)
  )
    if (n.length > e) n.splice(e);
    else for (; n.length < e; ) n.push("");
  for (; s < n.length; s++) n[s] = n[s].trim().replace(U.slashPipe, "|");
  return n;
}
function De(u, e, t) {
  const n = u.length;
  if (n === 0) return "";
  let s = 0;
  for (; s < n && u.charAt(n - s - 1) === e; ) s++;
  return u.slice(0, n - s);
}
function bi(u, e) {
  if (u.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < u.length; n++)
    if (u[n] === "\\") n++;
    else if (u[n] === e[0]) t++;
    else if (u[n] === e[1] && (t--, t < 0)) return n;
  return -1;
}
function nn(u, e, t, n, s) {
  const r = e.href,
    o = e.title || null,
    l = u[1].replace(s.other.outputLinkReplace, "$1");
  if (u[0].charAt(0) !== "!") {
    n.state.inLink = !0;
    const p = {
      type: "link",
      raw: t,
      href: r,
      title: o,
      text: l,
      tokens: n.inlineTokens(l),
    };
    return (n.state.inLink = !1), p;
  }
  return { type: "image", raw: t, href: r, title: o, text: l };
}
function xi(u, e, t) {
  const n = u.match(t.other.indentCodeCompensation);
  if (n === null) return e;
  const s = n[1];
  return e
    .split(
      `
`
    )
    .map((r) => {
      const o = r.match(t.other.beginningSpace);
      if (o === null) return r;
      const [l] = o;
      return l.length >= s.length ? r.slice(s.length) : r;
    }).join(`
`);
}
class et {
  constructor(e) {
    R(this, "options");
    R(this, "rules");
    R(this, "lexer");
    this.options = e || me;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic
          ? n
          : De(
              n,
              `
`
            ),
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const n = t[0],
        s = xi(n, t[3] || "", this.rules);
      return {
        type: "code",
        raw: n,
        lang: t[2]
          ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1")
          : t[2],
        text: s,
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        const s = De(n, "#");
        (this.options.pedantic ||
          !s ||
          this.rules.other.endingSpaceChar.test(s)) &&
          (n = s.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: n,
        tokens: this.lexer.inline(n),
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: De(
          t[0],
          `
`
        ),
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = De(
          t[0],
          `
`
        ).split(`
`),
        s = "",
        r = "";
      const o = [];
      for (; n.length > 0; ) {
        let l = !1;
        const p = [];
        let a;
        for (a = 0; a < n.length; a++)
          if (this.rules.other.blockquoteStart.test(n[a]))
            p.push(n[a]), (l = !0);
          else if (!l) p.push(n[a]);
          else break;
        n = n.slice(a);
        const c = p.join(`
`),
          k = c
            .replace(
              this.rules.other.blockquoteSetextReplace,
              `
    $1`
            )
            .replace(this.rules.other.blockquoteSetextReplace2, "");
        (s = s
          ? `${s}
${c}`
          : c),
          (r = r
            ? `${r}
${k}`
            : k);
        const b = this.lexer.state.top;
        if (
          ((this.lexer.state.top = !0),
          this.lexer.blockTokens(k, o, !0),
          (this.lexer.state.top = b),
          n.length === 0)
        )
          break;
        const x = o.at(-1);
        if ((x == null ? void 0 : x.type) === "code") break;
        if ((x == null ? void 0 : x.type) === "blockquote") {
          const S = x,
            _ =
              S.raw +
              `
` +
              n.join(`
`),
            M = this.blockquote(_);
          (o[o.length - 1] = M),
            (s = s.substring(0, s.length - S.raw.length) + M.raw),
            (r = r.substring(0, r.length - S.text.length) + M.text);
          break;
        } else if ((x == null ? void 0 : x.type) === "list") {
          const S = x,
            _ =
              S.raw +
              `
` +
              n.join(`
`),
            M = this.list(_);
          (o[o.length - 1] = M),
            (s = s.substring(0, s.length - x.raw.length) + M.raw),
            (r = r.substring(0, r.length - S.raw.length) + M.raw),
            (n = _.substring(o.at(-1).raw.length).split(`
`));
          continue;
        }
      }
      return { type: "blockquote", raw: s, tokens: o, text: r };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim();
      const s = n.length > 1,
        r = {
          type: "list",
          raw: "",
          ordered: s,
          start: s ? +n.slice(0, -1) : "",
          loose: !1,
          items: [],
        };
      (n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`),
        this.options.pedantic && (n = s ? n : "[*+-]");
      const o = this.rules.other.listItemRegex(n);
      let l = !1;
      for (; e; ) {
        let a = !1,
          c = "",
          k = "";
        if (!(t = o.exec(e)) || this.rules.block.hr.test(e)) break;
        (c = t[0]), (e = e.substring(c.length));
        let b = t[2]
            .split(
              `
`,
              1
            )[0]
            .replace(this.rules.other.listReplaceTabs, (ae) =>
              " ".repeat(3 * ae.length)
            ),
          x = e.split(
            `
`,
            1
          )[0],
          S = !b.trim(),
          _ = 0;
        if (
          (this.options.pedantic
            ? ((_ = 2), (k = b.trimStart()))
            : S
            ? (_ = t[1].length + 1)
            : ((_ = t[2].search(this.rules.other.nonSpaceChar)),
              (_ = _ > 4 ? 1 : _),
              (k = b.slice(_)),
              (_ += t[1].length)),
          S &&
            this.rules.other.blankLine.test(x) &&
            ((c +=
              x +
              `
`),
            (e = e.substring(x.length + 1)),
            (a = !0)),
          !a)
        ) {
          const ae = this.rules.other.nextBulletRegex(_),
            te = this.rules.other.hrRegex(_),
            O = this.rules.other.fencesBeginRegex(_),
            V = this.rules.other.headingBeginRegex(_),
            ce = this.rules.other.htmlBeginRegex(_);
          for (; e; ) {
            const ue = e.split(
              `
`,
              1
            )[0];
            let ne;
            if (
              ((x = ue),
              this.options.pedantic
                ? ((x = x.replace(this.rules.other.listReplaceNesting, "  ")),
                  (ne = x))
                : (ne = x.replace(this.rules.other.tabCharGlobal, "    ")),
              O.test(x) || V.test(x) || ce.test(x) || ae.test(x) || te.test(x))
            )
              break;
            if (ne.search(this.rules.other.nonSpaceChar) >= _ || !x.trim())
              k +=
                `
` + ne.slice(_);
            else {
              if (
                S ||
                b
                  .replace(this.rules.other.tabCharGlobal, "    ")
                  .search(this.rules.other.nonSpaceChar) >= 4 ||
                O.test(b) ||
                V.test(b) ||
                te.test(b)
              )
                break;
              k +=
                `
` + x;
            }
            !S && !x.trim() && (S = !0),
              (c +=
                ue +
                `
`),
              (e = e.substring(ue.length + 1)),
              (b = ne.slice(_));
          }
        }
        r.loose ||
          (l
            ? (r.loose = !0)
            : this.rules.other.doubleBlankLine.test(c) && (l = !0));
        let M = null,
          ke;
        this.options.gfm &&
          ((M = this.rules.other.listIsTask.exec(k)),
          M &&
            ((ke = M[0] !== "[ ] "),
            (k = k.replace(this.rules.other.listReplaceTask, "")))),
          r.items.push({
            type: "list_item",
            raw: c,
            task: !!M,
            checked: ke,
            loose: !1,
            text: k,
            tokens: [],
          }),
          (r.raw += c);
      }
      const p = r.items.at(-1);
      if (p) (p.raw = p.raw.trimEnd()), (p.text = p.text.trimEnd());
      else return;
      r.raw = r.raw.trimEnd();
      for (let a = 0; a < r.items.length; a++)
        if (
          ((this.lexer.state.top = !1),
          (r.items[a].tokens = this.lexer.blockTokens(r.items[a].text, [])),
          !r.loose)
        ) {
          const c = r.items[a].tokens.filter((b) => b.type === "space"),
            k =
              c.length > 0 &&
              c.some((b) => this.rules.other.anyLine.test(b.raw));
          r.loose = k;
        }
      if (r.loose)
        for (let a = 0; a < r.items.length; a++) r.items[a].loose = !0;
      return r;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t)
      return {
        type: "html",
        block: !0,
        raw: t[0],
        pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
        text: t[0],
      };
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const n = t[1]
          .toLowerCase()
          .replace(this.rules.other.multipleSpaceGlobal, " "),
        s = t[2]
          ? t[2]
              .replace(this.rules.other.hrefBrackets, "$1")
              .replace(this.rules.inline.anyPunctuation, "$1")
          : "",
        r = t[3]
          ? t[3]
              .substring(1, t[3].length - 1)
              .replace(this.rules.inline.anyPunctuation, "$1")
          : t[3];
      return { type: "def", tag: n, raw: t[0], href: s, title: r };
    }
  }
  table(e) {
    var l;
    const t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
    const n = tn(t[1]),
      s = t[2].replace(this.rules.other.tableAlignChars, "").split("|"),
      r =
        (l = t[3]) != null && l.trim()
          ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`)
          : [],
      o = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === s.length) {
      for (const p of s)
        this.rules.other.tableAlignRight.test(p)
          ? o.align.push("right")
          : this.rules.other.tableAlignCenter.test(p)
          ? o.align.push("center")
          : this.rules.other.tableAlignLeft.test(p)
          ? o.align.push("left")
          : o.align.push(null);
      for (let p = 0; p < n.length; p++)
        o.header.push({
          text: n[p],
          tokens: this.lexer.inline(n[p]),
          header: !0,
          align: o.align[p],
        });
      for (const p of r)
        o.rows.push(
          tn(p, o.header.length).map((a, c) => ({
            text: a,
            tokens: this.lexer.inline(a),
            header: !1,
            align: o.align[c],
          }))
        );
      return o;
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1]),
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const n =
        t[1].charAt(t[1].length - 1) ===
        `
`
          ? t[1].slice(0, -1)
          : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: n,
        tokens: this.lexer.inline(n),
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0]),
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: t[1] };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return (
        !this.lexer.state.inLink && this.rules.other.startATag.test(t[0])
          ? (this.lexer.state.inLink = !0)
          : this.lexer.state.inLink &&
            this.rules.other.endATag.test(t[0]) &&
            (this.lexer.state.inLink = !1),
        !this.lexer.state.inRawBlock &&
        this.rules.other.startPreScriptTag.test(t[0])
          ? (this.lexer.state.inRawBlock = !0)
          : this.lexer.state.inRawBlock &&
            this.rules.other.endPreScriptTag.test(t[0]) &&
            (this.lexer.state.inRawBlock = !1),
        {
          type: "html",
          raw: t[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          block: !1,
          text: t[0],
        }
      );
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const n = t[2].trim();
      if (
        !this.options.pedantic &&
        this.rules.other.startAngleBracket.test(n)
      ) {
        if (!this.rules.other.endAngleBracket.test(n)) return;
        const o = De(n.slice(0, -1), "\\");
        if ((n.length - o.length) % 2 === 0) return;
      } else {
        const o = bi(t[2], "()");
        if (o > -1) {
          const p = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + o;
          (t[2] = t[2].substring(0, o)),
            (t[0] = t[0].substring(0, p).trim()),
            (t[3] = "");
        }
      }
      let s = t[2],
        r = "";
      if (this.options.pedantic) {
        const o = this.rules.other.pedanticHrefTitle.exec(s);
        o && ((s = o[1]), (r = o[3]));
      } else r = t[3] ? t[3].slice(1, -1) : "";
      return (
        (s = s.trim()),
        this.rules.other.startAngleBracket.test(s) &&
          (this.options.pedantic && !this.rules.other.endAngleBracket.test(n)
            ? (s = s.slice(1))
            : (s = s.slice(1, -1))),
        nn(
          t,
          {
            href: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
            title: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
          },
          t[0],
          this.lexer,
          this.rules
        )
      );
    }
  }
  reflink(e, t) {
    let n;
    if (
      (n = this.rules.inline.reflink.exec(e)) ||
      (n = this.rules.inline.nolink.exec(e))
    ) {
      const s = (n[2] || n[1]).replace(
          this.rules.other.multipleSpaceGlobal,
          " "
        ),
        r = t[s.toLowerCase()];
      if (!r) {
        const o = n[0].charAt(0);
        return { type: "text", raw: o, text: o };
      }
      return nn(n, r, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (!s || (s[3] && n.match(this.rules.other.unicodeAlphaNumeric))) return;
    if (!(s[1] || s[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      const o = [...s[0]].length - 1;
      let l,
        p,
        a = o,
        c = 0;
      const k =
        s[0][0] === "*"
          ? this.rules.inline.emStrongRDelimAst
          : this.rules.inline.emStrongRDelimUnd;
      for (
        k.lastIndex = 0, t = t.slice(-1 * e.length + o);
        (s = k.exec(t)) != null;

      ) {
        if (((l = s[1] || s[2] || s[3] || s[4] || s[5] || s[6]), !l)) continue;
        if (((p = [...l].length), s[3] || s[4])) {
          a += p;
          continue;
        } else if ((s[5] || s[6]) && o % 3 && !((o + p) % 3)) {
          c += p;
          continue;
        }
        if (((a -= p), a > 0)) continue;
        p = Math.min(p, p + a + c);
        const b = [...s[0]][0].length,
          x = e.slice(0, o + s.index + b + p);
        if (Math.min(o, p) % 2) {
          const _ = x.slice(1, -1);
          return {
            type: "em",
            raw: x,
            text: _,
            tokens: this.lexer.inlineTokens(_),
          };
        }
        const S = x.slice(2, -2);
        return {
          type: "strong",
          raw: x,
          text: S,
          tokens: this.lexer.inlineTokens(S),
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " ");
      const s = this.rules.other.nonSpaceChar.test(n),
        r =
          this.rules.other.startingSpaceChar.test(n) &&
          this.rules.other.endingSpaceChar.test(n);
      return (
        s && r && (n = n.substring(1, n.length - 1)),
        { type: "codespan", raw: t[0], text: n }
      );
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2]),
      };
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, s;
      return (
        t[2] === "@"
          ? ((n = t[1]), (s = "mailto:" + n))
          : ((n = t[1]), (s = n)),
        {
          type: "link",
          raw: t[0],
          text: n,
          href: s,
          tokens: [{ type: "text", raw: n, text: n }],
        }
      );
    }
  }
  url(e) {
    var n;
    let t;
    if ((t = this.rules.inline.url.exec(e))) {
      let s, r;
      if (t[2] === "@") (s = t[0]), (r = "mailto:" + s);
      else {
        let o;
        do
          (o = t[0]),
            (t[0] =
              ((n = this.rules.inline._backpedal.exec(t[0])) == null
                ? void 0
                : n[0]) ?? "");
        while (o !== t[0]);
        (s = t[0]), t[1] === "www." ? (r = "http://" + t[0]) : (r = t[0]);
      }
      return {
        type: "link",
        raw: t[0],
        text: s,
        href: r,
        tokens: [{ type: "text", raw: s, text: s }],
      };
    }
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      const n = this.lexer.state.inRawBlock;
      return { type: "text", raw: t[0], text: t[0], escaped: n };
    }
  }
}
class Z {
  constructor(e) {
    R(this, "tokens");
    R(this, "options");
    R(this, "state");
    R(this, "tokenizer");
    R(this, "inlineQueue");
    (this.tokens = []),
      (this.tokens.links = Object.create(null)),
      (this.options = e || me),
      (this.options.tokenizer = this.options.tokenizer || new et()),
      (this.tokenizer = this.options.tokenizer),
      (this.tokenizer.options = this.options),
      (this.tokenizer.lexer = this),
      (this.inlineQueue = []),
      (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
    const t = { other: U, block: Xe.normal, inline: Oe.normal };
    this.options.pedantic
      ? ((t.block = Xe.pedantic), (t.inline = Oe.pedantic))
      : this.options.gfm &&
        ((t.block = Xe.gfm),
        this.options.breaks ? (t.inline = Oe.breaks) : (t.inline = Oe.gfm)),
      (this.tokenizer.rules = t);
  }
  static get rules() {
    return { block: Xe, inline: Oe };
  }
  static lex(e, t) {
    return new Z(t).lex(e);
  }
  static lexInline(e, t) {
    return new Z(t).inlineTokens(e);
  }
  lex(e) {
    (e = e.replace(
      U.carriageReturn,
      `
`
    )),
      this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return (this.inlineQueue = []), this.tokens;
  }
  blockTokens(e, t = [], n = !1) {
    var s, r, o;
    for (
      this.options.pedantic &&
      (e = e.replace(U.tabCharGlobal, "    ").replace(U.spaceLine, ""));
      e;

    ) {
      let l;
      if (
        (r = (s = this.options.extensions) == null ? void 0 : s.block) !=
          null &&
        r.some((a) =>
          (l = a.call({ lexer: this }, e, t))
            ? ((e = e.substring(l.raw.length)), t.push(l), !0)
            : !1
        )
      )
        continue;
      if ((l = this.tokenizer.space(e))) {
        e = e.substring(l.raw.length);
        const a = t.at(-1);
        l.raw.length === 1 && a !== void 0
          ? (a.raw += `
`)
          : t.push(l);
        continue;
      }
      if ((l = this.tokenizer.code(e))) {
        e = e.substring(l.raw.length);
        const a = t.at(-1);
        (a == null ? void 0 : a.type) === "paragraph" ||
        (a == null ? void 0 : a.type) === "text"
          ? ((a.raw +=
              `
` + l.raw),
            (a.text +=
              `
` + l.text),
            (this.inlineQueue.at(-1).src = a.text))
          : t.push(l);
        continue;
      }
      if ((l = this.tokenizer.fences(e))) {
        (e = e.substring(l.raw.length)), t.push(l);
        continue;
      }
      if ((l = this.tokenizer.heading(e))) {
        (e = e.substring(l.raw.length)), t.push(l);
        continue;
      }
      if ((l = this.tokenizer.hr(e))) {
        (e = e.substring(l.raw.length)), t.push(l);
        continue;
      }
      if ((l = this.tokenizer.blockquote(e))) {
        (e = e.substring(l.raw.length)), t.push(l);
        continue;
      }
      if ((l = this.tokenizer.list(e))) {
        (e = e.substring(l.raw.length)), t.push(l);
        continue;
      }
      if ((l = this.tokenizer.html(e))) {
        (e = e.substring(l.raw.length)), t.push(l);
        continue;
      }
      if ((l = this.tokenizer.def(e))) {
        e = e.substring(l.raw.length);
        const a = t.at(-1);
        (a == null ? void 0 : a.type) === "paragraph" ||
        (a == null ? void 0 : a.type) === "text"
          ? ((a.raw +=
              `
` + l.raw),
            (a.text +=
              `
` + l.raw),
            (this.inlineQueue.at(-1).src = a.text))
          : this.tokens.links[l.tag] ||
            (this.tokens.links[l.tag] = { href: l.href, title: l.title });
        continue;
      }
      if ((l = this.tokenizer.table(e))) {
        (e = e.substring(l.raw.length)), t.push(l);
        continue;
      }
      if ((l = this.tokenizer.lheading(e))) {
        (e = e.substring(l.raw.length)), t.push(l);
        continue;
      }
      let p = e;
      if ((o = this.options.extensions) != null && o.startBlock) {
        let a = 1 / 0;
        const c = e.slice(1);
        let k;
        this.options.extensions.startBlock.forEach((b) => {
          (k = b.call({ lexer: this }, c)),
            typeof k == "number" && k >= 0 && (a = Math.min(a, k));
        }),
          a < 1 / 0 && a >= 0 && (p = e.substring(0, a + 1));
      }
      if (this.state.top && (l = this.tokenizer.paragraph(p))) {
        const a = t.at(-1);
        n && (a == null ? void 0 : a.type) === "paragraph"
          ? ((a.raw +=
              `
` + l.raw),
            (a.text +=
              `
` + l.text),
            this.inlineQueue.pop(),
            (this.inlineQueue.at(-1).src = a.text))
          : t.push(l),
          (n = p.length !== e.length),
          (e = e.substring(l.raw.length));
        continue;
      }
      if ((l = this.tokenizer.text(e))) {
        e = e.substring(l.raw.length);
        const a = t.at(-1);
        (a == null ? void 0 : a.type) === "text"
          ? ((a.raw +=
              `
` + l.raw),
            (a.text +=
              `
` + l.text),
            this.inlineQueue.pop(),
            (this.inlineQueue.at(-1).src = a.text))
          : t.push(l);
        continue;
      }
      if (e) {
        const a = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(a);
          break;
        } else throw new Error(a);
      }
    }
    return (this.state.top = !0), t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    var l, p, a;
    let n = e,
      s = null;
    if (this.tokens.links) {
      const c = Object.keys(this.tokens.links);
      if (c.length > 0)
        for (
          ;
          (s = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null;

        )
          c.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) &&
            (n =
              n.slice(0, s.index) +
              "[" +
              "a".repeat(s[0].length - 2) +
              "]" +
              n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; )
      n =
        n.slice(0, s.index) +
        "[" +
        "a".repeat(s[0].length - 2) +
        "]" +
        n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (s = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; )
      n =
        n.slice(0, s.index) +
        "++" +
        n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let r = !1,
      o = "";
    for (; e; ) {
      r || (o = ""), (r = !1);
      let c;
      if (
        (p = (l = this.options.extensions) == null ? void 0 : l.inline) !=
          null &&
        p.some((b) =>
          (c = b.call({ lexer: this }, e, t))
            ? ((e = e.substring(c.raw.length)), t.push(c), !0)
            : !1
        )
      )
        continue;
      if ((c = this.tokenizer.escape(e))) {
        (e = e.substring(c.raw.length)), t.push(c);
        continue;
      }
      if ((c = this.tokenizer.tag(e))) {
        (e = e.substring(c.raw.length)), t.push(c);
        continue;
      }
      if ((c = this.tokenizer.link(e))) {
        (e = e.substring(c.raw.length)), t.push(c);
        continue;
      }
      if ((c = this.tokenizer.reflink(e, this.tokens.links))) {
        e = e.substring(c.raw.length);
        const b = t.at(-1);
        c.type === "text" && (b == null ? void 0 : b.type) === "text"
          ? ((b.raw += c.raw), (b.text += c.text))
          : t.push(c);
        continue;
      }
      if ((c = this.tokenizer.emStrong(e, n, o))) {
        (e = e.substring(c.raw.length)), t.push(c);
        continue;
      }
      if ((c = this.tokenizer.codespan(e))) {
        (e = e.substring(c.raw.length)), t.push(c);
        continue;
      }
      if ((c = this.tokenizer.br(e))) {
        (e = e.substring(c.raw.length)), t.push(c);
        continue;
      }
      if ((c = this.tokenizer.del(e))) {
        (e = e.substring(c.raw.length)), t.push(c);
        continue;
      }
      if ((c = this.tokenizer.autolink(e))) {
        (e = e.substring(c.raw.length)), t.push(c);
        continue;
      }
      if (!this.state.inLink && (c = this.tokenizer.url(e))) {
        (e = e.substring(c.raw.length)), t.push(c);
        continue;
      }
      let k = e;
      if ((a = this.options.extensions) != null && a.startInline) {
        let b = 1 / 0;
        const x = e.slice(1);
        let S;
        this.options.extensions.startInline.forEach((_) => {
          (S = _.call({ lexer: this }, x)),
            typeof S == "number" && S >= 0 && (b = Math.min(b, S));
        }),
          b < 1 / 0 && b >= 0 && (k = e.substring(0, b + 1));
      }
      if ((c = this.tokenizer.inlineText(k))) {
        (e = e.substring(c.raw.length)),
          c.raw.slice(-1) !== "_" && (o = c.raw.slice(-1)),
          (r = !0);
        const b = t.at(-1);
        (b == null ? void 0 : b.type) === "text"
          ? ((b.raw += c.raw), (b.text += c.text))
          : t.push(c);
        continue;
      }
      if (e) {
        const b = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(b);
          break;
        } else throw new Error(b);
      }
    }
    return t;
  }
}
class tt {
  constructor(e) {
    R(this, "options");
    R(this, "parser");
    this.options = e || me;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    var o;
    const s = (o = (t || "").match(U.notSpaceStart)) == null ? void 0 : o[0],
      r =
        e.replace(U.endingNewline, "") +
        `
`;
    return s
      ? '<pre><code class="language-' +
          ee(s) +
          '">' +
          (n ? r : ee(r, !0)) +
          `</code></pre>
`
      : "<pre><code>" +
          (n ? r : ee(r, !0)) +
          `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  heading({ tokens: e, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    const t = e.ordered,
      n = e.start;
    let s = "";
    for (let l = 0; l < e.items.length; l++) {
      const p = e.items[l];
      s += this.listitem(p);
    }
    const r = t ? "ol" : "ul",
      o = t && n !== 1 ? ' start="' + n + '"' : "";
    return (
      "<" +
      r +
      o +
      `>
` +
      s +
      "</" +
      r +
      `>
`
    );
  }
  listitem(e) {
    var n;
    let t = "";
    if (e.task) {
      const s = this.checkbox({ checked: !!e.checked });
      e.loose
        ? ((n = e.tokens[0]) == null ? void 0 : n.type) === "paragraph"
          ? ((e.tokens[0].text = s + " " + e.tokens[0].text),
            e.tokens[0].tokens &&
              e.tokens[0].tokens.length > 0 &&
              e.tokens[0].tokens[0].type === "text" &&
              ((e.tokens[0].tokens[0].text =
                s + " " + ee(e.tokens[0].tokens[0].text)),
              (e.tokens[0].tokens[0].escaped = !0)))
          : e.tokens.unshift({
              type: "text",
              raw: s + " ",
              text: s + " ",
              escaped: !0,
            })
        : (t += s + " ");
    }
    return (
      (t += this.parser.parse(e.tokens, !!e.loose)),
      `<li>${t}</li>
`
    );
  }
  checkbox({ checked: e }) {
    return (
      "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">'
    );
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t = "",
      n = "";
    for (let r = 0; r < e.header.length; r++) n += this.tablecell(e.header[r]);
    t += this.tablerow({ text: n });
    let s = "";
    for (let r = 0; r < e.rows.length; r++) {
      const o = e.rows[r];
      n = "";
      for (let l = 0; l < o.length; l++) n += this.tablecell(o[l]);
      s += this.tablerow({ text: n });
    }
    return (
      s && (s = `<tbody>${s}</tbody>`),
      `<table>
<thead>
` +
        t +
        `</thead>
` +
        s +
        `</table>
`
    );
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    const t = this.parser.parseInline(e.tokens),
      n = e.header ? "th" : "td";
    return (
      (e.align ? `<${n} align="${e.align}">` : `<${n}>`) +
      t +
      `</${n}>
`
    );
  }
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${ee(e, !0)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, tokens: n }) {
    const s = this.parser.parseInline(n),
      r = en(e);
    if (r === null) return s;
    e = r;
    let o = '<a href="' + e + '"';
    return t && (o += ' title="' + ee(t) + '"'), (o += ">" + s + "</a>"), o;
  }
  image({ href: e, title: t, text: n }) {
    const s = en(e);
    if (s === null) return ee(n);
    e = s;
    let r = `<img src="${e}" alt="${n}"`;
    return t && (r += ` title="${ee(t)}"`), (r += ">"), r;
  }
  text(e) {
    return "tokens" in e && e.tokens
      ? this.parser.parseInline(e.tokens)
      : "escaped" in e && e.escaped
      ? e.text
      : ee(e.text);
  }
}
class Ot {
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
}
class j {
  constructor(e) {
    R(this, "options");
    R(this, "renderer");
    R(this, "textRenderer");
    (this.options = e || me),
      (this.options.renderer = this.options.renderer || new tt()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.renderer.parser = this),
      (this.textRenderer = new Ot());
  }
  static parse(e, t) {
    return new j(t).parse(e);
  }
  static parseInline(e, t) {
    return new j(t).parseInline(e);
  }
  parse(e, t = !0) {
    var s, r;
    let n = "";
    for (let o = 0; o < e.length; o++) {
      const l = e[o];
      if (
        (r = (s = this.options.extensions) == null ? void 0 : s.renderers) !=
          null &&
        r[l.type]
      ) {
        const a = l,
          c = this.options.extensions.renderers[a.type].call(
            { parser: this },
            a
          );
        if (
          c !== !1 ||
          ![
            "space",
            "hr",
            "heading",
            "code",
            "table",
            "blockquote",
            "list",
            "html",
            "paragraph",
            "text",
          ].includes(a.type)
        ) {
          n += c || "";
          continue;
        }
      }
      const p = l;
      switch (p.type) {
        case "space": {
          n += this.renderer.space(p);
          continue;
        }
        case "hr": {
          n += this.renderer.hr(p);
          continue;
        }
        case "heading": {
          n += this.renderer.heading(p);
          continue;
        }
        case "code": {
          n += this.renderer.code(p);
          continue;
        }
        case "table": {
          n += this.renderer.table(p);
          continue;
        }
        case "blockquote": {
          n += this.renderer.blockquote(p);
          continue;
        }
        case "list": {
          n += this.renderer.list(p);
          continue;
        }
        case "html": {
          n += this.renderer.html(p);
          continue;
        }
        case "paragraph": {
          n += this.renderer.paragraph(p);
          continue;
        }
        case "text": {
          let a = p,
            c = this.renderer.text(a);
          for (; o + 1 < e.length && e[o + 1].type === "text"; )
            (a = e[++o]),
              (c +=
                `
` + this.renderer.text(a));
          t
            ? (n += this.renderer.paragraph({
                type: "paragraph",
                raw: c,
                text: c,
                tokens: [{ type: "text", raw: c, text: c, escaped: !0 }],
              }))
            : (n += c);
          continue;
        }
        default: {
          const a = 'Token with "' + p.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return n;
  }
  parseInline(e, t = this.renderer) {
    var s, r;
    let n = "";
    for (let o = 0; o < e.length; o++) {
      const l = e[o];
      if (
        (r = (s = this.options.extensions) == null ? void 0 : s.renderers) !=
          null &&
        r[l.type]
      ) {
        const a = this.options.extensions.renderers[l.type].call(
          { parser: this },
          l
        );
        if (
          a !== !1 ||
          ![
            "escape",
            "html",
            "link",
            "image",
            "strong",
            "em",
            "codespan",
            "br",
            "del",
            "text",
          ].includes(l.type)
        ) {
          n += a || "";
          continue;
        }
      }
      const p = l;
      switch (p.type) {
        case "escape": {
          n += t.text(p);
          break;
        }
        case "html": {
          n += t.html(p);
          break;
        }
        case "link": {
          n += t.link(p);
          break;
        }
        case "image": {
          n += t.image(p);
          break;
        }
        case "strong": {
          n += t.strong(p);
          break;
        }
        case "em": {
          n += t.em(p);
          break;
        }
        case "codespan": {
          n += t.codespan(p);
          break;
        }
        case "br": {
          n += t.br(p);
          break;
        }
        case "del": {
          n += t.del(p);
          break;
        }
        case "text": {
          n += t.text(p);
          break;
        }
        default: {
          const a = 'Token with "' + p.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return n;
  }
}
class Ue {
  constructor(e) {
    R(this, "options");
    R(this, "block");
    this.options = e || me;
  }
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
  provideLexer() {
    return this.block ? Z.lex : Z.lexInline;
  }
  provideParser() {
    return this.block ? j.parse : j.parseInline;
  }
}
R(
  Ue,
  "passThroughHooks",
  new Set(["preprocess", "postprocess", "processAllTokens"])
);
class wi {
  constructor(...e) {
    R(this, "defaults", yt());
    R(this, "options", this.setOptions);
    R(this, "parse", this.parseMarkdown(!0));
    R(this, "parseInline", this.parseMarkdown(!1));
    R(this, "Parser", j);
    R(this, "Renderer", tt);
    R(this, "TextRenderer", Ot);
    R(this, "Lexer", Z);
    R(this, "Tokenizer", et);
    R(this, "Hooks", Ue);
    this.use(...e);
  }
  walkTokens(e, t) {
    var s, r;
    let n = [];
    for (const o of e)
      switch (((n = n.concat(t.call(this, o))), o.type)) {
        case "table": {
          const l = o;
          for (const p of l.header) n = n.concat(this.walkTokens(p.tokens, t));
          for (const p of l.rows)
            for (const a of p) n = n.concat(this.walkTokens(a.tokens, t));
          break;
        }
        case "list": {
          const l = o;
          n = n.concat(this.walkTokens(l.items, t));
          break;
        }
        default: {
          const l = o;
          (r =
            (s = this.defaults.extensions) == null ? void 0 : s.childTokens) !=
            null && r[l.type]
            ? this.defaults.extensions.childTokens[l.type].forEach((p) => {
                const a = l[p].flat(1 / 0);
                n = n.concat(this.walkTokens(a, t));
              })
            : l.tokens && (n = n.concat(this.walkTokens(l.tokens, t)));
        }
      }
    return n;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return (
      e.forEach((n) => {
        const s = { ...n };
        if (
          ((s.async = this.defaults.async || s.async || !1),
          n.extensions &&
            (n.extensions.forEach((r) => {
              if (!r.name) throw new Error("extension name required");
              if ("renderer" in r) {
                const o = t.renderers[r.name];
                o
                  ? (t.renderers[r.name] = function (...l) {
                      let p = r.renderer.apply(this, l);
                      return p === !1 && (p = o.apply(this, l)), p;
                    })
                  : (t.renderers[r.name] = r.renderer);
              }
              if ("tokenizer" in r) {
                if (!r.level || (r.level !== "block" && r.level !== "inline"))
                  throw new Error(
                    "extension level must be 'block' or 'inline'"
                  );
                const o = t[r.level];
                o ? o.unshift(r.tokenizer) : (t[r.level] = [r.tokenizer]),
                  r.start &&
                    (r.level === "block"
                      ? t.startBlock
                        ? t.startBlock.push(r.start)
                        : (t.startBlock = [r.start])
                      : r.level === "inline" &&
                        (t.startInline
                          ? t.startInline.push(r.start)
                          : (t.startInline = [r.start])));
              }
              "childTokens" in r &&
                r.childTokens &&
                (t.childTokens[r.name] = r.childTokens);
            }),
            (s.extensions = t)),
          n.renderer)
        ) {
          const r = this.defaults.renderer || new tt(this.defaults);
          for (const o in n.renderer) {
            if (!(o in r)) throw new Error(`renderer '${o}' does not exist`);
            if (["options", "parser"].includes(o)) continue;
            const l = o,
              p = n.renderer[l],
              a = r[l];
            r[l] = (...c) => {
              let k = p.apply(r, c);
              return k === !1 && (k = a.apply(r, c)), k || "";
            };
          }
          s.renderer = r;
        }
        if (n.tokenizer) {
          const r = this.defaults.tokenizer || new et(this.defaults);
          for (const o in n.tokenizer) {
            if (!(o in r)) throw new Error(`tokenizer '${o}' does not exist`);
            if (["options", "rules", "lexer"].includes(o)) continue;
            const l = o,
              p = n.tokenizer[l],
              a = r[l];
            r[l] = (...c) => {
              let k = p.apply(r, c);
              return k === !1 && (k = a.apply(r, c)), k;
            };
          }
          s.tokenizer = r;
        }
        if (n.hooks) {
          const r = this.defaults.hooks || new Ue();
          for (const o in n.hooks) {
            if (!(o in r)) throw new Error(`hook '${o}' does not exist`);
            if (["options", "block"].includes(o)) continue;
            const l = o,
              p = n.hooks[l],
              a = r[l];
            Ue.passThroughHooks.has(o)
              ? (r[l] = (c) => {
                  if (this.defaults.async)
                    return Promise.resolve(p.call(r, c)).then((b) =>
                      a.call(r, b)
                    );
                  const k = p.call(r, c);
                  return a.call(r, k);
                })
              : (r[l] = (...c) => {
                  let k = p.apply(r, c);
                  return k === !1 && (k = a.apply(r, c)), k;
                });
          }
          s.hooks = r;
        }
        if (n.walkTokens) {
          const r = this.defaults.walkTokens,
            o = n.walkTokens;
          s.walkTokens = function (l) {
            let p = [];
            return (
              p.push(o.call(this, l)), r && (p = p.concat(r.call(this, l))), p
            );
          };
        }
        this.defaults = { ...this.defaults, ...s };
      }),
      this
    );
  }
  setOptions(e) {
    return (this.defaults = { ...this.defaults, ...e }), this;
  }
  lexer(e, t) {
    return Z.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return j.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (n, s) => {
      const r = { ...s },
        o = { ...this.defaults, ...r },
        l = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === !0 && r.async === !1)
        return l(
          new Error(
            "marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."
          )
        );
      if (typeof n > "u" || n === null)
        return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string")
        return l(
          new Error(
            "marked(): input parameter is of type " +
              Object.prototype.toString.call(n) +
              ", string expected"
          )
        );
      o.hooks && ((o.hooks.options = o), (o.hooks.block = e));
      const p = o.hooks ? o.hooks.provideLexer() : e ? Z.lex : Z.lexInline,
        a = o.hooks ? o.hooks.provideParser() : e ? j.parse : j.parseInline;
      if (o.async)
        return Promise.resolve(o.hooks ? o.hooks.preprocess(n) : n)
          .then((c) => p(c, o))
          .then((c) => (o.hooks ? o.hooks.processAllTokens(c) : c))
          .then((c) =>
            o.walkTokens
              ? Promise.all(this.walkTokens(c, o.walkTokens)).then(() => c)
              : c
          )
          .then((c) => a(c, o))
          .then((c) => (o.hooks ? o.hooks.postprocess(c) : c))
          .catch(l);
      try {
        o.hooks && (n = o.hooks.preprocess(n));
        let c = p(n, o);
        o.hooks && (c = o.hooks.processAllTokens(c)),
          o.walkTokens && this.walkTokens(c, o.walkTokens);
        let k = a(c, o);
        return o.hooks && (k = o.hooks.postprocess(k)), k;
      } catch (c) {
        return l(c);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (
        ((n.message += `
Please report this to https://github.com/markedjs/marked.`),
        e)
      ) {
        const s =
          "<p>An error occurred:</p><pre>" + ee(n.message + "", !0) + "</pre>";
        return t ? Promise.resolve(s) : s;
      }
      if (t) return Promise.reject(n);
      throw n;
    };
  }
}
const ge = new wi();
function A(u, e) {
  return ge.parse(u, e);
}
A.options = A.setOptions = function (u) {
  return ge.setOptions(u), (A.defaults = ge.defaults), fn(A.defaults), A;
};
A.getDefaults = yt;
A.defaults = me;
A.use = function (...u) {
  return ge.use(...u), (A.defaults = ge.defaults), fn(A.defaults), A;
};
A.walkTokens = function (u, e) {
  return ge.walkTokens(u, e);
};
A.parseInline = ge.parseInline;
A.Parser = j;
A.parser = j.parse;
A.Renderer = tt;
A.TextRenderer = Ot;
A.Lexer = Z;
A.lexer = Z.lex;
A.Tokenizer = et;
A.Hooks = Ue;
A.parse = A;
A.options;
A.setOptions;
A.use;
A.walkTokens;
A.parseInline;
j.parse;
Z.lex;
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */ const {
  entries: yn,
  setPrototypeOf: rn,
  isFrozen: Ti,
  getPrototypeOf: _i,
  getOwnPropertyDescriptor: Ei,
} = Object;
let { freeze: H, seal: Y, create: Sn } = Object,
  { apply: _t, construct: Et } = typeof Reflect < "u" && Reflect;
H ||
  (H = function (e) {
    return e;
  });
Y ||
  (Y = function (e) {
    return e;
  });
_t ||
  (_t = function (e, t, n) {
    return e.apply(t, n);
  });
Et ||
  (Et = function (e, t) {
    return new e(...t);
  });
const Ve = F(Array.prototype.forEach),
  yi = F(Array.prototype.lastIndexOf),
  sn = F(Array.prototype.pop),
  Me = F(Array.prototype.push),
  Si = F(Array.prototype.splice),
  Ke = F(String.prototype.toLowerCase),
  mt = F(String.prototype.toString),
  on = F(String.prototype.match),
  Ne = F(String.prototype.replace),
  Ai = F(String.prototype.indexOf),
  Ri = F(String.prototype.trim),
  X = F(Object.prototype.hasOwnProperty),
  B = F(RegExp.prototype.test),
  Pe = Li(TypeError);
function F(u) {
  return function (e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1;
      s < t;
      s++
    )
      n[s - 1] = arguments[s];
    return _t(u, e, n);
  };
}
function Li(u) {
  return function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return Et(u, t);
  };
}
function w(u, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ke;
  rn && rn(u, null);
  let n = e.length;
  for (; n--; ) {
    let s = e[n];
    if (typeof s == "string") {
      const r = t(s);
      r !== s && (Ti(e) || (e[n] = r), (s = r));
    }
    u[s] = !0;
  }
  return u;
}
function Ii(u) {
  for (let e = 0; e < u.length; e++) X(u, e) || (u[e] = null);
  return u;
}
function de(u) {
  const e = Sn(null);
  for (const [t, n] of yn(u))
    X(u, t) &&
      (Array.isArray(n)
        ? (e[t] = Ii(n))
        : n && typeof n == "object" && n.constructor === Object
        ? (e[t] = de(n))
        : (e[t] = n));
  return e;
}
function ze(u, e) {
  for (; u !== null; ) {
    const n = Ei(u, e);
    if (n) {
      if (n.get) return F(n.get);
      if (typeof n.value == "function") return F(n.value);
    }
    u = _i(u);
  }
  function t() {
    return null;
  }
  return t;
}
const ln = H([
    "a",
    "abbr",
    "acronym",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meter",
    "nav",
    "nobr",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "section",
    "select",
    "shadow",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
  ]),
  kt = H([
    "svg",
    "a",
    "altglyph",
    "altglyphdef",
    "altglyphitem",
    "animatecolor",
    "animatemotion",
    "animatetransform",
    "circle",
    "clippath",
    "defs",
    "desc",
    "ellipse",
    "filter",
    "font",
    "g",
    "glyph",
    "glyphref",
    "hkern",
    "image",
    "line",
    "lineargradient",
    "marker",
    "mask",
    "metadata",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialgradient",
    "rect",
    "stop",
    "style",
    "switch",
    "symbol",
    "text",
    "textpath",
    "title",
    "tref",
    "tspan",
    "view",
    "vkern",
  ]),
  bt = H([
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
  ]),
  Ci = H([
    "animate",
    "color-profile",
    "cursor",
    "discard",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignobject",
    "hatch",
    "hatchpath",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "missing-glyph",
    "script",
    "set",
    "solidcolor",
    "unknown",
    "use",
  ]),
  xt = H([
    "math",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mglyph",
    "mi",
    "mlabeledtr",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mspace",
    "msqrt",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "mprescripts",
  ]),
  vi = H([
    "maction",
    "maligngroup",
    "malignmark",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "mstack",
    "msline",
    "msrow",
    "semantics",
    "annotation",
    "annotation-xml",
    "mprescripts",
    "none",
  ]),
  an = H(["#text"]),
  cn = H([
    "accept",
    "action",
    "align",
    "alt",
    "autocapitalize",
    "autocomplete",
    "autopictureinpicture",
    "autoplay",
    "background",
    "bgcolor",
    "border",
    "capture",
    "cellpadding",
    "cellspacing",
    "checked",
    "cite",
    "class",
    "clear",
    "color",
    "cols",
    "colspan",
    "controls",
    "controlslist",
    "coords",
    "crossorigin",
    "datetime",
    "decoding",
    "default",
    "dir",
    "disabled",
    "disablepictureinpicture",
    "disableremoteplayback",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "face",
    "for",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "id",
    "inputmode",
    "integrity",
    "ismap",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "loop",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "multiple",
    "muted",
    "name",
    "nonce",
    "noshade",
    "novalidate",
    "nowrap",
    "open",
    "optimum",
    "pattern",
    "placeholder",
    "playsinline",
    "popover",
    "popovertarget",
    "popovertargetaction",
    "poster",
    "preload",
    "pubdate",
    "radiogroup",
    "readonly",
    "rel",
    "required",
    "rev",
    "reversed",
    "role",
    "rows",
    "rowspan",
    "spellcheck",
    "scope",
    "selected",
    "shape",
    "size",
    "sizes",
    "span",
    "srclang",
    "start",
    "src",
    "srcset",
    "step",
    "style",
    "summary",
    "tabindex",
    "title",
    "translate",
    "type",
    "usemap",
    "valign",
    "value",
    "width",
    "wrap",
    "xmlns",
    "slot",
  ]),
  wt = H([
    "accent-height",
    "accumulate",
    "additive",
    "alignment-baseline",
    "amplitude",
    "ascent",
    "attributename",
    "attributetype",
    "azimuth",
    "basefrequency",
    "baseline-shift",
    "begin",
    "bias",
    "by",
    "class",
    "clip",
    "clippathunits",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "cx",
    "cy",
    "d",
    "dx",
    "dy",
    "diffuseconstant",
    "direction",
    "display",
    "divisor",
    "dur",
    "edgemode",
    "elevation",
    "end",
    "exponent",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "filterunits",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyph-name",
    "glyphref",
    "gradientunits",
    "gradienttransform",
    "height",
    "href",
    "id",
    "image-rendering",
    "in",
    "in2",
    "intercept",
    "k",
    "k1",
    "k2",
    "k3",
    "k4",
    "kerning",
    "keypoints",
    "keysplines",
    "keytimes",
    "lang",
    "lengthadjust",
    "letter-spacing",
    "kernelmatrix",
    "kernelunitlength",
    "lighting-color",
    "local",
    "marker-end",
    "marker-mid",
    "marker-start",
    "markerheight",
    "markerunits",
    "markerwidth",
    "maskcontentunits",
    "maskunits",
    "max",
    "mask",
    "media",
    "method",
    "mode",
    "min",
    "name",
    "numoctaves",
    "offset",
    "operator",
    "opacity",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "paint-order",
    "path",
    "pathlength",
    "patterncontentunits",
    "patterntransform",
    "patternunits",
    "points",
    "preservealpha",
    "preserveaspectratio",
    "primitiveunits",
    "r",
    "rx",
    "ry",
    "radius",
    "refx",
    "refy",
    "repeatcount",
    "repeatdur",
    "restart",
    "result",
    "rotate",
    "scale",
    "seed",
    "shape-rendering",
    "slope",
    "specularconstant",
    "specularexponent",
    "spreadmethod",
    "startoffset",
    "stddeviation",
    "stitchtiles",
    "stop-color",
    "stop-opacity",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke",
    "stroke-width",
    "style",
    "surfacescale",
    "systemlanguage",
    "tabindex",
    "tablevalues",
    "targetx",
    "targety",
    "transform",
    "transform-origin",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "textlength",
    "type",
    "u1",
    "u2",
    "unicode",
    "values",
    "viewbox",
    "visibility",
    "version",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "width",
    "word-spacing",
    "wrap",
    "writing-mode",
    "xchannelselector",
    "ychannelselector",
    "x",
    "x1",
    "x2",
    "xmlns",
    "y",
    "y1",
    "y2",
    "z",
    "zoomandpan",
  ]),
  un = H([
    "accent",
    "accentunder",
    "align",
    "bevelled",
    "close",
    "columnsalign",
    "columnlines",
    "columnspan",
    "denomalign",
    "depth",
    "dir",
    "display",
    "displaystyle",
    "encoding",
    "fence",
    "frame",
    "height",
    "href",
    "id",
    "largeop",
    "length",
    "linethickness",
    "lspace",
    "lquote",
    "mathbackground",
    "mathcolor",
    "mathsize",
    "mathvariant",
    "maxsize",
    "minsize",
    "movablelimits",
    "notation",
    "numalign",
    "open",
    "rowalign",
    "rowlines",
    "rowspacing",
    "rowspan",
    "rspace",
    "rquote",
    "scriptlevel",
    "scriptminsize",
    "scriptsizemultiplier",
    "selection",
    "separator",
    "separators",
    "stretchy",
    "subscriptshift",
    "supscriptshift",
    "symmetric",
    "voffset",
    "width",
    "xmlns",
  ]),
  Qe = H(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
  Oi = Y(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  Di = Y(/<%[\w\W]*|[\w\W]*%>/gm),
  Mi = Y(/\$\{[\w\W]*/gm),
  Ni = Y(/^data-[\-\w.\u00B7-\uFFFF]+$/),
  Pi = Y(/^aria-[\-\w]+$/),
  An = Y(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  ),
  zi = Y(/^(?:\w+script|data):/i),
  $i = Y(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  Rn = Y(/^html$/i),
  Bi = Y(/^[a-z][.\w]*(-[.\w]+)+$/i);
var pn = Object.freeze({
  __proto__: null,
  ARIA_ATTR: Pi,
  ATTR_WHITESPACE: $i,
  CUSTOM_ELEMENT: Bi,
  DATA_ATTR: Ni,
  DOCTYPE_NAME: Rn,
  ERB_EXPR: Di,
  IS_ALLOWED_URI: An,
  IS_SCRIPT_OR_DATA: zi,
  MUSTACHE_EXPR: Oi,
  TMPLIT_EXPR: Mi,
});
const $e = {
    element: 1,
    text: 3,
    progressingInstruction: 7,
    comment: 8,
    document: 9,
  },
  Ui = function () {
    return typeof window > "u" ? null : window;
  },
  Hi = function (e, t) {
    if (typeof e != "object" || typeof e.createPolicy != "function")
      return null;
    let n = null;
    const s = "data-tt-policy-suffix";
    t && t.hasAttribute(s) && (n = t.getAttribute(s));
    const r = "dompurify" + (n ? "#" + n : "");
    try {
      return e.createPolicy(r, {
        createHTML(o) {
          return o;
        },
        createScriptURL(o) {
          return o;
        },
      });
    } catch {
      return (
        console.warn("TrustedTypes policy " + r + " could not be created."),
        null
      );
    }
  },
  hn = function () {
    return {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: [],
    };
  };
function Ln() {
  let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ui();
  const e = (g) => Ln(g);
  if (
    ((e.version = "3.2.5"),
    (e.removed = []),
    !u || !u.document || u.document.nodeType !== $e.document || !u.Element)
  )
    return (e.isSupported = !1), e;
  let { document: t } = u;
  const n = t,
    s = n.currentScript,
    {
      DocumentFragment: r,
      HTMLTemplateElement: o,
      Node: l,
      Element: p,
      NodeFilter: a,
      NamedNodeMap: c = u.NamedNodeMap || u.MozNamedAttrMap,
      HTMLFormElement: k,
      DOMParser: b,
      trustedTypes: x,
    } = u,
    S = p.prototype,
    _ = ze(S, "cloneNode"),
    M = ze(S, "remove"),
    ke = ze(S, "nextSibling"),
    ae = ze(S, "childNodes"),
    te = ze(S, "parentNode");
  if (typeof o == "function") {
    const g = t.createElement("template");
    g.content && g.content.ownerDocument && (t = g.content.ownerDocument);
  }
  let O,
    V = "";
  const {
      implementation: ce,
      createNodeIterator: ue,
      createDocumentFragment: ne,
      getElementsByTagName: rt,
    } = t,
    { importNode: st } = n;
  let N = hn();
  e.isSupported =
    typeof yn == "function" &&
    typeof te == "function" &&
    ce &&
    ce.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: Re,
    ERB_EXPR: be,
    TMPLIT_EXPR: ie,
    DATA_ATTR: ot,
    ARIA_ATTR: pe,
    IS_SCRIPT_OR_DATA: d,
    ATTR_WHITESPACE: m,
    CUSTOM_ELEMENT: L,
  } = pn;
  let { IS_ALLOWED_URI: T } = pn,
    I = null;
  const Q = w({}, [...ln, ...kt, ...bt, ...xt, ...an]);
  let v = null;
  const W = w({}, [...cn, ...wt, ...un, ...Qe]);
  let E = Object.seal(
      Sn(null, {
        tagNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        attributeNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        allowCustomizedBuiltInElements: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: !1,
        },
      })
    ),
    q = null,
    re = null,
    he = !0,
    Le = !0,
    xe = !1,
    Dt = !0,
    we = !1,
    lt = !0,
    fe = !1,
    at = !1,
    ct = !1,
    Te = !1,
    Fe = !1,
    Ge = !1,
    Mt = !0,
    Nt = !1;
  const In = "user-content-";
  let ut = !0,
    Ie = !1,
    _e = {},
    Ee = null;
  const Pt = w({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp",
  ]);
  let zt = null;
  const $t = w({}, ["audio", "video", "img", "source", "image", "track"]);
  let pt = null;
  const Bt = w({}, [
      "alt",
      "class",
      "for",
      "id",
      "label",
      "name",
      "pattern",
      "placeholder",
      "role",
      "summary",
      "title",
      "value",
      "style",
      "xmlns",
    ]),
    We = "http://www.w3.org/1998/Math/MathML",
    qe = "http://www.w3.org/2000/svg",
    se = "http://www.w3.org/1999/xhtml";
  let ye = se,
    ht = !1,
    ft = null;
  const Cn = w({}, [We, qe, se], mt);
  let Ze = w({}, ["mi", "mo", "mn", "ms", "mtext"]),
    je = w({}, ["annotation-xml"]);
  const vn = w({}, ["title", "style", "font", "a", "script"]);
  let Ce = null;
  const On = ["application/xhtml+xml", "text/html"],
    Dn = "text/html";
  let D = null,
    Se = null;
  const Mn = t.createElement("form"),
    Ut = function (i) {
      return i instanceof RegExp || i instanceof Function;
    },
    dt = function () {
      let i =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!(Se && Se === i)) {
        if (
          ((!i || typeof i != "object") && (i = {}),
          (i = de(i)),
          (Ce =
            On.indexOf(i.PARSER_MEDIA_TYPE) === -1 ? Dn : i.PARSER_MEDIA_TYPE),
          (D = Ce === "application/xhtml+xml" ? mt : Ke),
          (I = X(i, "ALLOWED_TAGS") ? w({}, i.ALLOWED_TAGS, D) : Q),
          (v = X(i, "ALLOWED_ATTR") ? w({}, i.ALLOWED_ATTR, D) : W),
          (ft = X(i, "ALLOWED_NAMESPACES")
            ? w({}, i.ALLOWED_NAMESPACES, mt)
            : Cn),
          (pt = X(i, "ADD_URI_SAFE_ATTR")
            ? w(de(Bt), i.ADD_URI_SAFE_ATTR, D)
            : Bt),
          (zt = X(i, "ADD_DATA_URI_TAGS")
            ? w(de($t), i.ADD_DATA_URI_TAGS, D)
            : $t),
          (Ee = X(i, "FORBID_CONTENTS") ? w({}, i.FORBID_CONTENTS, D) : Pt),
          (q = X(i, "FORBID_TAGS") ? w({}, i.FORBID_TAGS, D) : {}),
          (re = X(i, "FORBID_ATTR") ? w({}, i.FORBID_ATTR, D) : {}),
          (_e = X(i, "USE_PROFILES") ? i.USE_PROFILES : !1),
          (he = i.ALLOW_ARIA_ATTR !== !1),
          (Le = i.ALLOW_DATA_ATTR !== !1),
          (xe = i.ALLOW_UNKNOWN_PROTOCOLS || !1),
          (Dt = i.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
          (we = i.SAFE_FOR_TEMPLATES || !1),
          (lt = i.SAFE_FOR_XML !== !1),
          (fe = i.WHOLE_DOCUMENT || !1),
          (Te = i.RETURN_DOM || !1),
          (Fe = i.RETURN_DOM_FRAGMENT || !1),
          (Ge = i.RETURN_TRUSTED_TYPE || !1),
          (ct = i.FORCE_BODY || !1),
          (Mt = i.SANITIZE_DOM !== !1),
          (Nt = i.SANITIZE_NAMED_PROPS || !1),
          (ut = i.KEEP_CONTENT !== !1),
          (Ie = i.IN_PLACE || !1),
          (T = i.ALLOWED_URI_REGEXP || An),
          (ye = i.NAMESPACE || se),
          (Ze = i.MATHML_TEXT_INTEGRATION_POINTS || Ze),
          (je = i.HTML_INTEGRATION_POINTS || je),
          (E = i.CUSTOM_ELEMENT_HANDLING || {}),
          i.CUSTOM_ELEMENT_HANDLING &&
            Ut(i.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
            (E.tagNameCheck = i.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
          i.CUSTOM_ELEMENT_HANDLING &&
            Ut(i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
            (E.attributeNameCheck =
              i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
          i.CUSTOM_ELEMENT_HANDLING &&
            typeof i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements ==
              "boolean" &&
            (E.allowCustomizedBuiltInElements =
              i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
          we && (Le = !1),
          Fe && (Te = !0),
          _e &&
            ((I = w({}, an)),
            (v = []),
            _e.html === !0 && (w(I, ln), w(v, cn)),
            _e.svg === !0 && (w(I, kt), w(v, wt), w(v, Qe)),
            _e.svgFilters === !0 && (w(I, bt), w(v, wt), w(v, Qe)),
            _e.mathMl === !0 && (w(I, xt), w(v, un), w(v, Qe))),
          i.ADD_TAGS && (I === Q && (I = de(I)), w(I, i.ADD_TAGS, D)),
          i.ADD_ATTR && (v === W && (v = de(v)), w(v, i.ADD_ATTR, D)),
          i.ADD_URI_SAFE_ATTR && w(pt, i.ADD_URI_SAFE_ATTR, D),
          i.FORBID_CONTENTS &&
            (Ee === Pt && (Ee = de(Ee)), w(Ee, i.FORBID_CONTENTS, D)),
          ut && (I["#text"] = !0),
          fe && w(I, ["html", "head", "body"]),
          I.table && (w(I, ["tbody"]), delete q.tbody),
          i.TRUSTED_TYPES_POLICY)
        ) {
          if (typeof i.TRUSTED_TYPES_POLICY.createHTML != "function")
            throw Pe(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
            );
          if (typeof i.TRUSTED_TYPES_POLICY.createScriptURL != "function")
            throw Pe(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
            );
          (O = i.TRUSTED_TYPES_POLICY), (V = O.createHTML(""));
        } else
          O === void 0 && (O = Hi(x, s)),
            O !== null && typeof V == "string" && (V = O.createHTML(""));
        H && H(i), (Se = i);
      }
    },
    Ht = w({}, [...kt, ...bt, ...Ci]),
    Ft = w({}, [...xt, ...vi]),
    Nn = function (i) {
      let h = te(i);
      (!h || !h.tagName) && (h = { namespaceURI: ye, tagName: "template" });
      const f = Ke(i.tagName),
        C = Ke(h.tagName);
      return ft[i.namespaceURI]
        ? i.namespaceURI === qe
          ? h.namespaceURI === se
            ? f === "svg"
            : h.namespaceURI === We
            ? f === "svg" && (C === "annotation-xml" || Ze[C])
            : !!Ht[f]
          : i.namespaceURI === We
          ? h.namespaceURI === se
            ? f === "math"
            : h.namespaceURI === qe
            ? f === "math" && je[C]
            : !!Ft[f]
          : i.namespaceURI === se
          ? (h.namespaceURI === qe && !je[C]) ||
            (h.namespaceURI === We && !Ze[C])
            ? !1
            : !Ft[f] && (vn[f] || !Ht[f])
          : !!(Ce === "application/xhtml+xml" && ft[i.namespaceURI])
        : !1;
    },
    K = function (i) {
      Me(e.removed, { element: i });
      try {
        te(i).removeChild(i);
      } catch {
        M(i);
      }
    },
    Ye = function (i, h) {
      try {
        Me(e.removed, { attribute: h.getAttributeNode(i), from: h });
      } catch {
        Me(e.removed, { attribute: null, from: h });
      }
      if ((h.removeAttribute(i), i === "is"))
        if (Te || Fe)
          try {
            K(h);
          } catch {}
        else
          try {
            h.setAttribute(i, "");
          } catch {}
    },
    Gt = function (i) {
      let h = null,
        f = null;
      if (ct) i = "<remove></remove>" + i;
      else {
        const P = on(i, /^[\r\n\t ]+/);
        f = P && P[0];
      }
      Ce === "application/xhtml+xml" &&
        ye === se &&
        (i =
          '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
          i +
          "</body></html>");
      const C = O ? O.createHTML(i) : i;
      if (ye === se)
        try {
          h = new b().parseFromString(C, Ce);
        } catch {}
      if (!h || !h.documentElement) {
        h = ce.createDocument(ye, "template", null);
        try {
          h.documentElement.innerHTML = ht ? V : C;
        } catch {}
      }
      const z = h.body || h.documentElement;
      return (
        i && f && z.insertBefore(t.createTextNode(f), z.childNodes[0] || null),
        ye === se
          ? rt.call(h, fe ? "html" : "body")[0]
          : fe
          ? h.documentElement
          : z
      );
    },
    Wt = function (i) {
      return ue.call(
        i.ownerDocument || i,
        i,
        a.SHOW_ELEMENT |
          a.SHOW_COMMENT |
          a.SHOW_TEXT |
          a.SHOW_PROCESSING_INSTRUCTION |
          a.SHOW_CDATA_SECTION,
        null
      );
    },
    gt = function (i) {
      return (
        i instanceof k &&
        (typeof i.nodeName != "string" ||
          typeof i.textContent != "string" ||
          typeof i.removeChild != "function" ||
          !(i.attributes instanceof c) ||
          typeof i.removeAttribute != "function" ||
          typeof i.setAttribute != "function" ||
          typeof i.namespaceURI != "string" ||
          typeof i.insertBefore != "function" ||
          typeof i.hasChildNodes != "function")
      );
    },
    qt = function (i) {
      return typeof l == "function" && i instanceof l;
    };
  function oe(g, i, h) {
    Ve(g, (f) => {
      f.call(e, i, h, Se);
    });
  }
  const Zt = function (i) {
      let h = null;
      if ((oe(N.beforeSanitizeElements, i, null), gt(i))) return K(i), !0;
      const f = D(i.nodeName);
      if (
        (oe(N.uponSanitizeElement, i, { tagName: f, allowedTags: I }),
        (i.hasChildNodes() &&
          !qt(i.firstElementChild) &&
          B(/<[/\w!]/g, i.innerHTML) &&
          B(/<[/\w!]/g, i.textContent)) ||
          i.nodeType === $e.progressingInstruction ||
          (lt && i.nodeType === $e.comment && B(/<[/\w]/g, i.data)))
      )
        return K(i), !0;
      if (!I[f] || q[f]) {
        if (
          !q[f] &&
          Yt(f) &&
          ((E.tagNameCheck instanceof RegExp && B(E.tagNameCheck, f)) ||
            (E.tagNameCheck instanceof Function && E.tagNameCheck(f)))
        )
          return !1;
        if (ut && !Ee[f]) {
          const C = te(i) || i.parentNode,
            z = ae(i) || i.childNodes;
          if (z && C) {
            const P = z.length;
            for (let G = P - 1; G >= 0; --G) {
              const J = _(z[G], !0);
              (J.__removalCount = (i.__removalCount || 0) + 1),
                C.insertBefore(J, ke(i));
            }
          }
        }
        return K(i), !0;
      }
      return (i instanceof p && !Nn(i)) ||
        ((f === "noscript" || f === "noembed" || f === "noframes") &&
          B(/<\/no(script|embed|frames)/i, i.innerHTML))
        ? (K(i), !0)
        : (we &&
            i.nodeType === $e.text &&
            ((h = i.textContent),
            Ve([Re, be, ie], (C) => {
              h = Ne(h, C, " ");
            }),
            i.textContent !== h &&
              (Me(e.removed, { element: i.cloneNode() }), (i.textContent = h))),
          oe(N.afterSanitizeElements, i, null),
          !1);
    },
    jt = function (i, h, f) {
      if (Mt && (h === "id" || h === "name") && (f in t || f in Mn)) return !1;
      if (!(Le && !re[h] && B(ot, h))) {
        if (!(he && B(pe, h))) {
          if (!v[h] || re[h]) {
            if (
              !(
                (Yt(i) &&
                  ((E.tagNameCheck instanceof RegExp && B(E.tagNameCheck, i)) ||
                    (E.tagNameCheck instanceof Function &&
                      E.tagNameCheck(i))) &&
                  ((E.attributeNameCheck instanceof RegExp &&
                    B(E.attributeNameCheck, h)) ||
                    (E.attributeNameCheck instanceof Function &&
                      E.attributeNameCheck(h)))) ||
                (h === "is" &&
                  E.allowCustomizedBuiltInElements &&
                  ((E.tagNameCheck instanceof RegExp && B(E.tagNameCheck, f)) ||
                    (E.tagNameCheck instanceof Function && E.tagNameCheck(f))))
              )
            )
              return !1;
          } else if (!pt[h]) {
            if (!B(T, Ne(f, m, ""))) {
              if (
                !(
                  (h === "src" || h === "xlink:href" || h === "href") &&
                  i !== "script" &&
                  Ai(f, "data:") === 0 &&
                  zt[i]
                )
              ) {
                if (!(xe && !B(d, Ne(f, m, "")))) {
                  if (f) return !1;
                }
              }
            }
          }
        }
      }
      return !0;
    },
    Yt = function (i) {
      return i !== "annotation-xml" && on(i, L);
    },
    Xt = function (i) {
      oe(N.beforeSanitizeAttributes, i, null);
      const { attributes: h } = i;
      if (!h || gt(i)) return;
      const f = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: v,
        forceKeepAttr: void 0,
      };
      let C = h.length;
      for (; C--; ) {
        const z = h[C],
          { name: P, namespaceURI: G, value: J } = z,
          ve = D(P);
        let $ = P === "value" ? J : Ri(J);
        if (
          ((f.attrName = ve),
          (f.attrValue = $),
          (f.keepAttr = !0),
          (f.forceKeepAttr = void 0),
          oe(N.uponSanitizeAttribute, i, f),
          ($ = f.attrValue),
          Nt && (ve === "id" || ve === "name") && (Ye(P, i), ($ = In + $)),
          lt && B(/((--!?|])>)|<\/(style|title)/i, $))
        ) {
          Ye(P, i);
          continue;
        }
        if (f.forceKeepAttr || (Ye(P, i), !f.keepAttr)) continue;
        if (!Dt && B(/\/>/i, $)) {
          Ye(P, i);
          continue;
        }
        we &&
          Ve([Re, be, ie], (Qt) => {
            $ = Ne($, Qt, " ");
          });
        const Vt = D(i.nodeName);
        if (jt(Vt, ve, $)) {
          if (
            O &&
            typeof x == "object" &&
            typeof x.getAttributeType == "function" &&
            !G
          )
            switch (x.getAttributeType(Vt, ve)) {
              case "TrustedHTML": {
                $ = O.createHTML($);
                break;
              }
              case "TrustedScriptURL": {
                $ = O.createScriptURL($);
                break;
              }
            }
          try {
            G ? i.setAttributeNS(G, P, $) : i.setAttribute(P, $),
              gt(i) ? K(i) : sn(e.removed);
          } catch {}
        }
      }
      oe(N.afterSanitizeAttributes, i, null);
    },
    Pn = function g(i) {
      let h = null;
      const f = Wt(i);
      for (oe(N.beforeSanitizeShadowDOM, i, null); (h = f.nextNode()); )
        oe(N.uponSanitizeShadowNode, h, null),
          Zt(h),
          Xt(h),
          h.content instanceof r && g(h.content);
      oe(N.afterSanitizeShadowDOM, i, null);
    };
  return (
    (e.sanitize = function (g) {
      let i =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        h = null,
        f = null,
        C = null,
        z = null;
      if (((ht = !g), ht && (g = "<!-->"), typeof g != "string" && !qt(g)))
        if (typeof g.toString == "function") {
          if (((g = g.toString()), typeof g != "string"))
            throw Pe("dirty is not a string, aborting");
        } else throw Pe("toString is not a function");
      if (!e.isSupported) return g;
      if (
        (at || dt(i), (e.removed = []), typeof g == "string" && (Ie = !1), Ie)
      ) {
        if (g.nodeName) {
          const J = D(g.nodeName);
          if (!I[J] || q[J])
            throw Pe("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (g instanceof l)
        (h = Gt("<!---->")),
          (f = h.ownerDocument.importNode(g, !0)),
          (f.nodeType === $e.element && f.nodeName === "BODY") ||
          f.nodeName === "HTML"
            ? (h = f)
            : h.appendChild(f);
      else {
        if (!Te && !we && !fe && g.indexOf("<") === -1)
          return O && Ge ? O.createHTML(g) : g;
        if (((h = Gt(g)), !h)) return Te ? null : Ge ? V : "";
      }
      h && ct && K(h.firstChild);
      const P = Wt(Ie ? g : h);
      for (; (C = P.nextNode()); )
        Zt(C), Xt(C), C.content instanceof r && Pn(C.content);
      if (Ie) return g;
      if (Te) {
        if (Fe)
          for (z = ne.call(h.ownerDocument); h.firstChild; )
            z.appendChild(h.firstChild);
        else z = h;
        return (v.shadowroot || v.shadowrootmode) && (z = st.call(n, z, !0)), z;
      }
      let G = fe ? h.outerHTML : h.innerHTML;
      return (
        fe &&
          I["!doctype"] &&
          h.ownerDocument &&
          h.ownerDocument.doctype &&
          h.ownerDocument.doctype.name &&
          B(Rn, h.ownerDocument.doctype.name) &&
          (G =
            "<!DOCTYPE " +
            h.ownerDocument.doctype.name +
            `>
` +
            G),
        we &&
          Ve([Re, be, ie], (J) => {
            G = Ne(G, J, " ");
          }),
        O && Ge ? O.createHTML(G) : G
      );
    }),
    (e.setConfig = function () {
      let g =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      dt(g), (at = !0);
    }),
    (e.clearConfig = function () {
      (Se = null), (at = !1);
    }),
    (e.isValidAttribute = function (g, i, h) {
      Se || dt({});
      const f = D(g),
        C = D(i);
      return jt(f, C, h);
    }),
    (e.addHook = function (g, i) {
      typeof i == "function" && Me(N[g], i);
    }),
    (e.removeHook = function (g, i) {
      if (i !== void 0) {
        const h = yi(N[g], i);
        return h === -1 ? void 0 : Si(N[g], h, 1)[0];
      }
      return sn(N[g]);
    }),
    (e.removeHooks = function (g) {
      N[g] = [];
    }),
    (e.removeAllHooks = function () {
      N = hn();
    }),
    e
  );
}
var Fi = Ln();
const Gi = () => {
  let u = !1,
    e = !1;
  const t = "com.markdownlivepreview",
    n = "last_state",
    s = "scroll_bar_settings",
    r = "theme_settings",
    o = "Tem certeza que deseja resetar? Suas alterações serão perdidas.",
    l = `# Guia de sintaxe Markdown

## Cabeçalhos

# Este é um título h1
## Este é um título h2
###### Este é um título h6

## Em negrito e itálico

*Este texto ficará em itálico*
_Este também ficará em itálico_

**Este texto ficará em negrito**  
__Este texto também estará em negrito__

_Você **pode** combiná-los_

## Listas

### Não ordenadas

* Item 1
* Item 2
* Item 2a
* Item 2b
    * Item 3a
    * Item 3b

### Ordenadas
1. Item 1
2. Item 2
3. Item 3
    1. Item 3a
    2. Item 3b

## Imagens

![Este é um texto alternativo.](./assets/image/Markdown-mark.svg "Esta é uma imagem de exemplo.")
## Links

Você pode estar usando [Markdown Live Preview](https://markdownlivepreview.com/).

## Citações

> Markdown é uma linguagem de marcação leve com sintaxe de formatação de texto simples, criada em 2004 por John Gruber com base em RAaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tabelas

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Blocos de código

\`\`\`
let message = 'Hello world';
alert(message);
\`\`\`

## Linhas horizontais

---

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocos de código

\`\`\`javascript

\`\`\`
let message = 'Hello world';
alert(message);
\`\`\`

## Inline code

Este site está usando \`markedjs/marked\`.
`;
  self.MonacoEnvironment = {
    getWorker() {
      return new Worker(URL.createObjectURL(new Blob([], { type: 'application/javascript' })));
    }
  };
  le.languages.register = () => {}; // Desabilita registro automático de linguagens
  
  let p = () => {
      let d = le.editor.create(document.querySelector("#editor"), {
        fontSize: 14,
        language: "plaintext",
        minimap: { enabled: !1 },
        scrollBeyondLastLine: !1,
        automaticLayout: !0,
        scrollbar: { vertical: "visible", horizontal: "visible" },
        wordWrap: "on",
        hover: { enabled: !1 },
        quickSuggestions: !1,
        suggestOnTriggerCharacters: !1,
        folding: !1,
        contextmenu: !0
      });
      
      // Traduzir menu de contexto para português brasileiro
      setTimeout(() => {
        const originalGetActions = d.getActions.bind(d);
        d.getActions = () => {
          const actions = originalGetActions();
          const translations = {
            "editor.action.clipboardCutAction": "Recortar",
            "editor.action.clipboardCopyAction": "Copiar",
            "editor.action.clipboardPasteAction": "Colar",
            "editor.action.selectAll": "Selecionar Tudo",
            "undo": "Desfazer",
            "redo": "Refazer",
            "editor.action.quickCommand": "Paleta de Comandos",
            "editor.action.changeAll": "Alterar Todas as Ocorrências",
            "editor.action.formatDocument": "Formatar Documento",
            "editor.action.formatSelection": "Formatar Seleção",
            "editor.action.transformToUppercase": "Transformar em Maiúsculas",
            "editor.action.transformToLowercase": "Transformar em Minúsculas"
          };
          return actions.map(action => {
            if (translations[action.id]) {
              action.label = translations[action.id];
            }
            return action;
          });
        };
      }, 100);
      
      return (
        d.onDidChangeModelContent(() => {
          d.getValue() != l && (u = !0);
          let L = d.getValue();
          a(L), ue(L);
        }),
        d.onDidScrollChange((m) => {
          if (!e) return;
          const L = m.scrollTop,
            T = m.scrollHeight,
            I = d.getLayoutInfo().height,
            Q = T - I,
            v = L / Q;
          let W = document.querySelector("#preview"),
            E = (W.scrollHeight - W.clientHeight) * v;
          W.scrollTo(0, E);
        }),
        d
      );
    },
    a = (d) => {
      let m = { headerIds: !1, mangle: !1 },
        L = A.parse(d, m),
        T = Fi.sanitize(L);
      document.querySelector("#output").innerHTML = T;
    },
    c = () => {
      let d = ie.getValue() != '';
      if (u || d) {
        var m = window.confirm(o);
        if (!m) return;
      }
      k(''),
        document.querySelectorAll(".column").forEach((L) => {
          L.scrollTo({ top: 0 });
        });
    },
    k = (d) => {
      ie.setValue(d),
        ie.revealPosition({ lineNumber: 1, column: 1 }),
        ie.focus(),
        (u = !1);
    },
    b = (d) => {
      let m = document.querySelector("#sync-scroll-checkbox");
      (m.checked = d),
        (e = d),
        m.addEventListener("change", (L) => {
          let T = L.currentTarget.checked;
          (e = T), st(T);
        });
    };
  const x = "./assets/css/github-markdown-light.css?v=1.11.0",
    S = "./assets/css/github-markdown-dark_dimmed.css?v=1.11.0";
  let _ = (d) => {
      const m = document.getElementById("gh-markdown-link");
      if (!m) {
        const T = document.createElement("link");
        (T.id = "gh-markdown-link"),
          (T.rel = "stylesheet"),
          (T.href = d ? S : x),
          document.head.appendChild(T);
        return;
      }
      const L = d ? S : x;
      m.getAttribute("href") !== L && m.setAttribute("href", L);
    },
    M = (d) => {
      document.documentElement.setAttribute("data-theme", d ? "dark" : "light");
    },
    ke = (d) => {
      let m = document.querySelector("#theme-checkbox");
      m &&
        ((m.checked = d),
        M(d),
        le &&
          le.editor &&
          typeof le.editor.setTheme == "function" &&
          le.editor.setTheme(d ? "vs-dark" : "vs"),
        _(d),
        m.addEventListener("change", (L) => {
          let T = L.currentTarget.checked;
          M(T),
            N(T),
            _(T),
            le &&
              le.editor &&
              typeof le.editor.setTheme == "function" &&
              le.editor.setTheme(T ? "vs-dark" : "vs");
        }));
    },
    ae = (d, m, L) => {
      if (navigator.clipboard && navigator.clipboard.writeText)
        navigator.clipboard.writeText(d).then(
          () => {
            m();
          },
          () => {}
        );
      else
        try {
          const T = document.createElement("textarea");
          (T.value = d),
            (T.style.position = "fixed"),
            (T.style.opacity = "0"),
            document.body.appendChild(T),
            T.select(),
            document.execCommand("copy"),
            document.body.removeChild(T),
            m();
        } catch (T) {
          console.error("Fallback copy failed:", T);
        }
    },
    te = () => {
      let d = document.querySelector("#copy-button a");
      (d.innerHTML = "Copiado!"),
        setTimeout(() => {
          d.innerHTML = "Copiar";
        }, 1e3);
    },
    O = () => {
      document.querySelector("#reset-button").addEventListener("click", (d) => {
        d.preventDefault(), c();
      });
    },
    V = (d) => {
      document.querySelector("#copy-button").addEventListener("click", (m) => {
        m.preventDefault();
        let L = d.getValue();
        ae(L, () => {
          te();
        });
      });
    },
    ce = () => Ae.getItem(t, n),
    ue = (d) => {
      let m = new Date(2099, 1, 1);
      Ae.setItem(t, n, d, m);
    },
    ne = () => Ae.getItem(t, s),
    rt = () => {
      let d = Ae.getItem(t, r);
      if (d == null)
        try {
          const m = localStorage.getItem("com.markdownlivepreview_theme");
          if (m === "dark") return !0;
          if (m === "light") return !1;
        } catch {}
      return d;
    },
    st = (d) => {
      let m = new Date(2099, 1, 1);
      Ae.setItem(t, s, d, m);
    },
    N = (d) => {
      let m = new Date(2099, 1, 1);
      Ae.setItem(t, r, d, m);
      try {
        localStorage.setItem(
          "com.markdownlivepreview_theme",
          d ? "dark" : "light"
        );
      } catch {}
    },
    Re = () => {
      let d = 0.5;
      const m = document.getElementById("split-divider"),
        L = document.getElementById("edit"),
        T = document.getElementById("preview"),
        I = document.getElementById("container");
      let Q = !1;
      m.addEventListener("mouseenter", () => {
        m.classList.add("hover");
      }),
        m.addEventListener("mouseleave", () => {
          Q || m.classList.remove("hover");
        }),
        m.addEventListener("mousedown", () => {
          (Q = !0),
            m.classList.add("active"),
            (document.body.style.cursor = "col-resize");
        }),
        m.addEventListener("dblclick", () => {
          const W = I.getBoundingClientRect().width,
            E = m.offsetWidth,
            q = (W - E) / 2;
          (L.style.width = q + "px"), (T.style.width = q + "px");
        }),
        document.addEventListener("mousemove", (v) => {
          if (!Q) return;
          document.body.style.userSelect = "none";
          const W = I.getBoundingClientRect(),
            E = W.width,
            q = v.clientX - W.left,
            re = m.offsetWidth,
            he = 100,
            Le = E - he - re,
            xe = Math.max(he, Math.min(q, Le));
          (L.style.width = xe + "px"),
            (T.style.width = E - xe - re + "px"),
            (d = xe / (E - re));
        }),
        document.addEventListener("mouseup", () => {
          Q &&
            ((Q = !1),
            m.classList.remove("active"),
            m.classList.remove("hover"),
            (document.body.style.cursor = "default"),
            (document.body.style.userSelect = ""));
        }),
        window.addEventListener("resize", () => {
          const W = I.getBoundingClientRect().width,
            E = m.offsetWidth,
            q = W - E,
            re = q * d,
            he = q * (1 - d);
          (L.style.width = re + "px"), (T.style.width = he + "px");
        });
    },
    be = ce(),
    ie = p();
  k(be || l), O(), V(ie);
  let ot = ne() || !1;
  b(ot);
  let pe = rt();
  pe === "true" || pe === !0 ? (pe = !0) : (pe = !1), ke(pe), Re();
};
window.addEventListener("load", () => {
  Gi();
});
