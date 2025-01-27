import"../chunks/Bg9kRutz.js";import"../chunks/CZwOOZ8X.js";import{p as ce,l as pe,b as ue,t as G,c as fe,g as t,s,d as r,e as o,m as i,r as l,j as me}from"../chunks/C49fxnTX.js";import{s as ge}from"../chunks/CpG_a03V.js";import{i as M,e as V,r as be}from"../chunks/Cd7jppo2.js";import{a as v,t as K,b as H}from"../chunks/BVyY2eYF.js";import{r as J}from"../chunks/C55JGdRg.js";import{b as I}from"../chunks/DY5b5QkI.js";import{b as ve}from"../chunks/BYitliNK.js";import{p as ye}from"../chunks/CWmzcjye.js";import{i as _e}from"../chunks/Dza9i49Z.js";import{s as xe,a as he}from"../chunks/CZe-tk6V.js";import{o as we}from"../chunks/rzUrWnQ3.js";import{g as ke}from"../chunks/DkGKsnCd.js";import{a as B,B as Ee}from"../chunks/D4POEFCI.js";import{I as De,a as $e,g as Ae}from"../chunks/DlQj9-fi.js";import{N as u}from"../chunks/DzgOfrvm.js";var Ne=K('<div class="flex justify-center items-center"><div class="border-t-4 border-blue-500 w-8 h-8 mx-auto animate-spin rounded-full"></div> <span class="ml-2 text-white">Uploading...</span></div>'),Se=K('<div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center py-8"><div class="w-full max-w-lg bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-700/50"><h2 class="text-2xl font-bold text-white mb-6 text-center">Add New Notice</h2> <p class="text-gray-400 text-center mb-6"> </p> <form class="space-y-6"><div><label for="title" class="block text-gray-400 font-medium mb-2">Notice Title</label> <input type="text" placeholder="Enter notice title" class="w-full px-4 py-3 bg-gray-700/50 text-white rounded-xl border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"></div> <div><label for="date" class="block text-gray-400 font-medium mb-2">Date</label> <input type="date" class="w-full px-4 py-3 bg-gray-700/50 text-white rounded-xl border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"></div> <div><label for="content" class="block text-gray-400 font-medium mb-2">Content</label> <textarea rows="4" placeholder="Enter notice content" class="w-full px-4 py-3 bg-gray-700/50 text-white rounded-xl border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea></div> <div><label for="year" class="block text-gray-400 font-medium mb-2">Year</label> <select class="w-full px-4 py-3 bg-gray-700/50 text-white rounded-xl border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"><option disabled selected>Select year</option><option>1st Year</option><option>2nd Year</option></select></div> <div><label for="file" class="block text-gray-400 font-medium mb-2">Upload Files</label> <input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" class="block w-full text-sm text-gray-300 file:py-2 file:px-4 file:border file:border-gray-600 file:rounded-md file:bg-gray-700 file:text-white hover:file:bg-blue-600 mb-4"></div> <!> <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"><!></button></form></div></div>');function Je(O,Q){ce(Q,!1);const W=xe(),L=()=>he(Ee,"$BASE_URL",W);let y=i(""),T=i(""),f=i(""),m=i(""),g=i(""),c=i(""),_="",b=[],x=[],p=i(!1);const X="djqao3rbs",Z="ndc14-web-project";we(async()=>{try{const e=localStorage.getItem("jwtToken");if(e&&e.length>0&&De(e)&&!$e(e)){_=Ae(e);const a=await B.get(`${(await t(y)).toString()}/users/id/${_}`);s(T,a.data.data.fullName)}}catch(e){console.error("Error fetching user data:",e)}});function ee(e){const a=e.target;a&&a.files&&(x=Array.from(a.files))}async function te(){b=[],s(p,!0);const e=x.map(async a=>{const n=new FormData;n.append("file",a),n.append("upload_preset",Z);try{const de=await(await B.post(`https://api.cloudinary.com/v1_1/${X}/auto/upload`,n,{headers:{"Content-Type":"multipart/form-data"},params:{resource_type:"auto",chunk_size:6e6}})).data;b.push(de.secure_url),await u(`Uploaded file: ${a.name}`,"success")}catch(d){console.error(`Error uploading file: ${a.name}`,d),u(`Error uploading file: ${a.name}`,"error")}});await Promise.all(e),s(p,!1)}async function ae(e){if(e.preventDefault(),!t(f)||!t(m)||!t(g)||!t(c)){u("All fields are required","error");return}const a=new Date(t(m)).toLocaleDateString("en-GB").replace(/\//g,"/"),n={title:t(f),date:a,content:t(g),year:t(c)==="1st Year"?1:2,added_by:_,files:[]};x.length>0&&await te(),b.length>0&&b.forEach(d=>{n.files.push({filename:d})});try{await B.post(`${(await t(y)).toString()}/notices/`,n,{params:{page:1}}),u("Notice added successfully!","success"),ke("/dashboard/notices")}catch(d){console.error("Error adding notice:",d),u("Error adding notice","error")}}pe(()=>L(),()=>{s(y,L())}),ue(),_e();var h=Se(),F=o(h),w=r(o(F),2),re=o(w);l(w);var k=r(w,2),E=o(k),P=r(o(E),2);J(P),l(E);var D=r(E,2),R=r(o(D),2);J(R),l(D);var $=r(D,2),C=r(o($),2);be(C),l($);var A=r($,2),N=r(o(A),2);G(()=>{t(c),me(()=>{})});var S=o(N);S.value=((S.__value="")==null,"");var j=r(S);j.value=(j.__value="1st Year")==null?"":"1st Year";var q=r(j);q.value=(q.__value="2nd Year")==null?"":"2nd Year",l(N),l(A);var U=r(A,2),oe=r(o(U),2);l(U);var z=r(U,2);{var le=e=>{var a=Ne();v(e,a)};M(z,e=>{t(p)&&e(le)})}var Y=r(z,2),se=o(Y);{var ie=e=>{var a=H("Processing...");v(e,a)},ne=e=>{var a=H("Add Notice");v(e,a)};M(se,e=>{t(p)?e(ie):e(ne,!1)})}l(Y),l(k),l(F),l(h),G(()=>{ge(re,`Added by ${t(T)??""}`),Y.disabled=t(p)}),I(P,()=>t(f),e=>s(f,e)),I(R,()=>t(m),e=>s(m,e)),I(C,()=>t(g),e=>s(g,e)),ve(N,()=>t(c),e=>s(c,e)),V("change",oe,ee),V("submit",k,ye(ae)),v(O,h),fe()}export{Je as component};
