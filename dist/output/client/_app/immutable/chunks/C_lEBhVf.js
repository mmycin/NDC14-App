import{am as k,N as n,an as s,h as u}from"./DJc_ZBf1.js";import{l as h}from"./8oqJBz5t.js";function t(e,a,v=a){var c=k();h(e,"input",l=>{var r=l?e.defaultValue:e.value;if(r=f(e)?d(r):r,v(r),c&&r!==(r=a())){var _=e.selectionStart,o=e.selectionEnd;e.value=r??"",o!==null&&(e.selectionStart=_,e.selectionEnd=Math.min(o,e.value.length))}}),(u&&e.defaultValue!==e.value||n(a)==null&&e.value)&&v(f(e)?d(e.value):e.value),s(()=>{var l=a();f(e)&&l===d(e.value)||e.type==="date"&&!l&&!e.value||l!==e.value&&(e.value=l??"")})}function y(e,a,v=a){h(e,"change",c=>{var l=c?e.defaultChecked:e.checked;v(l)}),(u&&e.defaultChecked!==e.checked||n(a)==null)&&v(e.checked),s(()=>{var c=a();e.checked=!!c})}function f(e){var a=e.type;return a==="number"||a==="range"}function d(e){return e===""?null:+e}export{y as a,t as b};
