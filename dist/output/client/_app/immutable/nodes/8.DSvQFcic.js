import"../chunks/Bg9kRutz.js";import"../chunks/CZwOOZ8X.js";import{p as re,l as se,b as oe,c as le,g as s,s as v,d as a,e as t,m as A,n as ie,r as e,t as F}from"../chunks/C49fxnTX.js";import{s as n}from"../chunks/CpG_a03V.js";import{i as G,e as M}from"../chunks/Cd7jppo2.js";import{e as ne,i as me}from"../chunks/6_bSFVyE.js";import{a as d,t as c}from"../chunks/BVyY2eYF.js";import{s as T}from"../chunks/C55JGdRg.js";import{i as de}from"../chunks/Dza9i49Z.js";import{s as ce,a as pe}from"../chunks/CZe-tk6V.js";import{g as W}from"../chunks/DkGKsnCd.js";import{a as ve,B as fe}from"../chunks/D4POEFCI.js";import{g as xe}from"../chunks/DlQj9-fi.js";import{o as be}from"../chunks/rzUrWnQ3.js";var ue=c('<div class="absolute top-4 right-4 px-3 py-1.5 bg-gray-950 text-sm font-semibold text-yellow-400 rounded-full border border-yellow-400/20 flex items-center gap-1.5"><span class="text-yellow-400">☆</span> Admin</div>'),ge=c('<div class="h-4 bg-gray-800 rounded w-3/4"></div>'),_e=c('<div class="bg-gray-900 p-8 rounded-b-2xl shadow-2xl border border-gray-800"><div class="animate-pulse space-y-4"></div></div>'),we=c('<div class="bg-gray-900 p-6 rounded-b-2xl shadow-2xl border border-gray-800 space-y-6"><div class="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-800"><span class="text-gray-400 w-full sm:w-1/3 mb-2 sm:mb-0">Name</span> <span class="text-white font-medium text-lg"> </span></div> <div class="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-800"><span class="text-gray-400 w-full sm:w-1/3 mb-2 sm:mb-0">Username</span> <span class="text-white font-medium text-lg"> </span></div> <div class="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-800"><span class="text-gray-400 w-full sm:w-1/3 mb-2 sm:mb-0">Email</span> <a class="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg"> </a></div> <div class="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-800"><span class="text-gray-400 w-full sm:w-1/3 mb-2 sm:mb-0">Roll Number</span> <span class="text-white font-medium text-lg"> </span></div> <div class="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-800"><span class="text-gray-400 w-full sm:w-1/3 mb-2 sm:mb-0">Phone Number</span> <span class="text-white font-medium text-lg"> </span></div> <div class="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-800"><span class="text-gray-400 w-full sm:w-1/3 mb-2 sm:mb-0">Batch</span> <span class="text-white font-medium text-lg"> </span></div> <div class="flex flex-col sm:flex-row sm:items-center py-4"><span class="text-gray-400 w-full sm:w-1/3 mb-2 sm:mb-0">Facebook Profile</span> <a target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg truncate"> </a></div></div>'),ye=c('<div class="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8"><div class="max-w-3xl mx-auto"><div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-2xl p-8 shadow-2xl text-center relative border border-gray-800"><h1 class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">Profile</h1> <!> <p class="text-gray-400 mt-2">Your account details</p></div> <!> <div class="text-center mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6"><button class="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-all duration-200 ease-in-out w-full sm:w-auto">Go Back</button> <button class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-all duration-200 ease-in-out w-full sm:w-auto">Edit Profile</button></div></div></div>');function je(Y,q){re(q,!1);const z=ce(),k=()=>pe(fe,"$BASE_URL",z);let N=0,o=A({}),f=A(!0),B=A("");be(async()=>{try{const r=localStorage.getItem("jwtToken");if(!r)W("/login");else{N=xe(r);const i=await ve.get(`${(await s(B)).toString()}/users/id/${N}`);v(o,await i.data.data),v(f,!1)}}catch(r){console.error(r),v(f,!1)}});function C(){window.history.back()}se(()=>k(),()=>{v(B,k())}),oe(),de();var x=ye(),L=t(x),b=t(L),H=a(t(b),2);{var J=r=>{var l=ue();d(r,l)};G(H,r=>{s(o).isAdmin&&r(J)})}ie(2),e(b);var I=a(b,2);{var K=r=>{var l=_e(),i=t(l);ne(i,4,()=>Array(6),me,(p,R)=>{var m=ge();d(p,m)}),e(i),e(l),d(r,l)},O=r=>{var l=we(),i=t(l),p=a(t(i),2),R=t(p,!0);e(p),e(i);var m=a(i,2),S=a(t(m),2),V=t(S,!0);e(S),e(m);var u=a(m,2),g=a(t(u),2),X=t(g,!0);e(g),e(u);var _=a(u,2),U=a(t(_),2),Z=t(U,!0);e(U),e(_);var w=a(_,2),$=a(t(w),2),ee=t($,!0);F(()=>n(ee,s(o).phone.startsWith("+88")?s(o).phone:"+88"+s(o).phone||"N/A")),e($),e(w);var y=a(w,2),D=a(t(y),2),te=t(D,!0);e(D),e(y);var j=a(y,2),h=a(t(j),2),ae=t(h,!0);e(h),e(j),e(l),F(()=>{n(R,s(o).fullName||"N/A"),n(V,s(o).username||"N/A"),T(g,"href",`mailto:${s(o).email??""}`),n(X,s(o).email||"N/A"),n(Z,s(o).roll||"N/A"),n(te,s(o).batch||"N/A"),T(h,"href",s(o).fbLink),n(ae,s(o).fbLink||"N/A")}),d(r,l)};G(I,r=>{s(f)?r(K):r(O,!1)})}var E=a(I,2),P=t(E),Q=a(P,2);e(E),e(L),e(x),M("click",P,C),M("click",Q,()=>W("/dashboard/account/edit")),d(Y,x),le()}export{je as component};
