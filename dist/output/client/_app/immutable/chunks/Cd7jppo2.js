import{h as b,x as P,ab as q,aM as g,C as y,af as N,O as S,aG as O,ag as R,aP as D,a1 as B,k as C,a as F,aH as H,a3 as M,a4 as W,w as G,a5 as E,a7 as T,o as L,a8 as k,q as U,_ as Y}from"./C49fxnTX.js";function K(e){b&&P(e)!==null&&q(e)}let x=!1;function Z(){x||(x=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var a;if(!e.defaultPrevented)for(const n of e.target.elements)(a=n.__on_r)==null||a.call(n)})},{capture:!0}))}function m(e){var a=N,n=S;g(null),y(null);try{return e()}finally{g(a),y(n)}}function Q(e,a,n,s=n){e.addEventListener(a,()=>m(n));const r=e.__on_r;r?e.__on_r=()=>{r(),s(!0)}:e.__on_r=()=>s(!0),Z()}const V=new Set,X=new Set;function j(e,a,n,s){function r(t){if(s.capture||z.call(a,t),!t.cancelBubble)return m(()=>n.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?R(()=>{a.addEventListener(e,r,s)}):a.addEventListener(e,r,s),r}function $(e,a,n,s,r){var t={capture:s,passive:r},f=j(e,a,n,t);(a===document.body||a===window||a===document)&&O(()=>{a.removeEventListener(e,f,t)})}function z(e){var w;var a=this,n=a.ownerDocument,s=e.type,r=((w=e.composedPath)==null?void 0:w.call(e))||[],t=r[0]||e.target,f=0,_=e.__root;if(_){var l=r.indexOf(_);if(l!==-1&&(a===document||a===window)){e.__root=a;return}var d=r.indexOf(a);if(d===-1)return;l<=d&&(f=l)}if(t=r[f]||e.target,t!==a){D(e,"currentTarget",{configurable:!0,get(){return t||n}});var h=N,o=S;g(null),y(null);try{for(var i,c=[];t!==null;){var u=t.assignedSlot||t.parentNode||t.host||null;try{var v=t["__"+s];if(v!==void 0&&!t.disabled)if(B(v)){var[A,...I]=v;A.apply(t,[e,...I])}else v.call(t,e)}catch(p){i?c.push(p):i=p}if(e.cancelBubble||u===a||u===null)break;t=u}if(i){for(let p of c)queueMicrotask(()=>{throw p});throw i}}finally{e.__root=a,delete e.currentTarget,g(h),y(o)}}}function ee(e,a,n=!1){b&&F();var s=e,r=null,t=null,f=Y,_=n?H:0,l=!1;const d=(o,i=!0)=>{l=!0,h(i,o)},h=(o,i)=>{if(f===(f=o))return;let c=!1;if(b){const u=s.data===M;!!f===u&&(s=W(),G(s),E(!1),c=!0)}f?(r?T(r):i&&(r=L(()=>i(s))),t&&k(t,()=>{t=null})):(t?T(t):i&&(t=L(()=>i(s))),r&&k(r,()=>{r=null})),c&&E(!0)};C(()=>{l=!1,a(d),l||h(null,null)},_),b&&(s=U)}export{Z as a,V as b,X as c,$ as e,z as h,ee as i,Q as l,K as r};
