import{ad as N,k as L,aD as V,h as c,aE as O,u as T,a5 as _,w as p,q as l,x as S,aF as b,H as w,a as k,ae as F,v as Y,aG as M,ab as P,a2 as $,aH as j,o as q,p as G,O as W,c as z,at as B}from"./DJc_ZBf1.js";import{b as J,c as D,h as v}from"./8oqJBz5t.js";import{d as K}from"./BTk0yM5Y.js";const Q=["touchstart","touchmove"];function U(a){return Q.includes(a)}let n;function X(){n=void 0}function te(a){let e=null,t=c;var i;if(c){for(e=l,n===void 0&&(n=S(document.head));n!==null&&(n.nodeType!==8||n.data!==O);)n=T(n);n===null?_(!1):n=p(T(n))}c||(i=document.head.appendChild(N()));try{L(()=>a(i),V)}finally{t&&(_(!0),n=l,p(e))}}let H=!0;function re(a,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=t,a.nodeValue=t==null?"":t+"")}function Z(a,e){return C(a,e)}function ne(a,e){b(),e.intro=e.intro??!1;const t=e.target,i=c,y=l;try{for(var r=S(t);r&&(r.nodeType!==8||r.data!==O);)r=T(r);if(!r)throw w;_(!0),p(r),k();const u=C(a,{...e,anchor:r});if(l===null||l.nodeType!==8||l.data!==F)throw Y(),w;return _(!1),u}catch(u){if(u===w)return e.recover===!1&&M(),b(),P(t),_(!1),Z(a,e);throw u}finally{_(i),p(y),X()}}const f=new Map;function C(a,{target:e,anchor:t,props:i={},events:y,context:r,intro:u=!0}){b();var m=new Set,g=o=>{for(var s=0;s<o.length;s++){var d=o[s];if(!m.has(d)){m.add(d);var h=U(d);e.addEventListener(d,v,{passive:h});var A=f.get(d);A===void 0?(document.addEventListener(d,v,{passive:h}),f.set(d,1)):f.set(d,A+1)}}};g($(J)),D.add(g);var E=void 0,I=j(()=>{var o=t??e.appendChild(N());return q(()=>{if(r){G({});var s=B;s.c=r}y&&(i.$$events=y),c&&K(o,null),H=u,E=a(o,i)||{},H=!0,c&&(W.nodes_end=l),r&&z()}),()=>{var h;for(var s of m){e.removeEventListener(s,v);var d=f.get(s);--d===0?(document.removeEventListener(s,v),f.delete(s)):f.set(s,d)}D.delete(g),o!==t&&((h=o.parentNode)==null||h.removeChild(o))}});return R.set(E,I),E}let R=new WeakMap;function se(a,e){const t=R.get(a);return t?(R.delete(a),t(e)):Promise.resolve()}export{H as a,ne as b,te as h,Z as m,re as s,se as u};
