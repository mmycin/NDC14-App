import"../chunks/Bg9kRutz.js";import"../chunks/CZwOOZ8X.js";import{p as Z,l as ee,b as te,t as E,c as ae,d as o,e as r,s as c,g as e,m as f,r as a,f as ve}from"../chunks/C49fxnTX.js";import{a as x,t as u}from"../chunks/BVyY2eYF.js";import{s as se,a as re}from"../chunks/CZe-tk6V.js";import{s as p}from"../chunks/CpG_a03V.js";import{r as V,s as A}from"../chunks/C55JGdRg.js";import{e as pe,r as fe,i as le}from"../chunks/Cd7jppo2.js";import{b as O}from"../chunks/DY5b5QkI.js";import{p as he}from"../chunks/CWmzcjye.js";import{i as me}from"../chunks/Dza9i49Z.js";import{a as de,B as oe}from"../chunks/D4POEFCI.js";import{N as X}from"../chunks/DzgOfrvm.js";import{e as ie,i as ce}from"../chunks/6_bSFVyE.js";import{o as ge}from"../chunks/rzUrWnQ3.js";import{w as xe}from"../chunks/CuZgcXpL.js";var ue=u(`<section class="contact-section py-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black svelte-1dhlzs9"><div class="max-w-2xl mx-auto px-4"><h2 class="section-title svelte-1dhlzs9">Contact</h2> <div class="note-container mb-6 svelte-1dhlzs9"><p class="note-text text-sm sm:text-base svelte-1dhlzs9">This page is for feedback and contact with the captains of
                Group-14. Only students of Group-14 are permitted to send
                messages.</p></div> <h3 class="text-3xl align-middle mb-2">Message:</h3> <form><div class="grid grid-cols-1 gap-6"><input type="text" placeholder="Your Name" class="form-input svelte-1dhlzs9" id="name" required> <input type="email" placeholder="Your Email" class="form-input svelte-1dhlzs9" id="email" required> <input type="text" placeholder="Your College Roll" class="form-input svelte-1dhlzs9" id="roll" required> <textarea placeholder="Your Message" class="form-input svelte-1dhlzs9" rows="4" id="message" required></textarea> <button type="submit" class="button svelte-1dhlzs9"> </button></div></form></div></section>`);function be(z,F){Z(F,!1);const P=se(),b=()=>re(oe,"$BASE_URL",P);let n=f(""),m=f(""),v=f(""),h=f(""),_=f(!1),Y=f("");const I=()=>{c(n,""),c(m,""),c(v,""),c(h,"")},M=async()=>{var d,s,i,y;if(!e(_)){c(_,!0);try{const t=await de.post(`${(await e(Y)).toString()}/contacts/`,{name:e(n),email:e(m),roll:e(v),message:e(h)});X("Your message is sent! We will contact you via your email shortly.","success"),I()}catch(t){if(t.status===400){const l=((s=(d=t.response)==null?void 0:d.data)==null?void 0:s.message)||"Invalid Roll. Only for For Group-14 students.";X(l,"error")}else{const l=((y=(i=t.response)==null?void 0:i.data)==null?void 0:y.message)||"Failed to send message. Please try again";X(l,"error")}}finally{c(_,!1)}}};ee(()=>b(),()=>{c(Y,b())}),te(),me();var w=ue(),G=r(w),C=o(r(G),6),W=r(C),j=r(W);V(j);var U=o(j,2);V(U);var $=o(U,2);V($);var q=o($,2);fe(q);var N=o(q,2),D=r(N,!0);a(N),a(W),a(C),a(G),a(w),E(()=>{N.disabled=e(_),p(D,e(_)?"Sending...":"Send Message")}),O(j,()=>e(n),d=>c(n,d)),O(U,()=>e(m),d=>c(m,d)),O($,()=>e(v),d=>c(v,d)),O(q,()=>e(h),d=>c(h,d)),pe("submit",C,he(M)),x(z,w),ae()}const ne=xe([]);var _e=u('<div class="flex justify-center items-center py-10 svelte-1t7omc5"><div class="loader svelte-1t7omc5"></div></div>'),ye=u('<div class="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4 transform hover:scale-105 hover:shadow-2xl svelte-1t7omc5"><h2 class="text-xl font-semibold text-white"> </h2> <p class="text-sm text-gray-300"><i class="fas fa-envelope mr-2"></i>Email: <a class="text-blue-400 hover:underline"> </a></p> <p class="text-sm text-gray-400"><i class="fas fa-id-card mr-2"></i> </p> <p class="text-sm text-gray-400"><i class="fas fa-phone-alt mr-2"></i>Phone: <a target="_blank" class="text-blue-400 hover:underline"> </a></p> <a target="_blank" class="text-blue-400 hover:underline"><i class="fab fa-facebook mr-2"></i>Facebook Profile</a></div>'),we=u('<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center items-center svelte-1t7omc5"></div>'),$e=u('<div class="flex justify-center items-center py-10 svelte-1t7omc5"><div class="loader svelte-1t7omc5"></div></div>'),ke=u('<div class="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4 transform hover:scale-105 hover:shadow-2xl svelte-1t7omc5"><h2 class="text-xl font-semibold text-white"> </h2> <p class="text-sm text-gray-300"><i class="fas fa-envelope mr-2"></i>Email: <a class="text-blue-400 hover:underline"> </a></p> <p class="text-sm text-gray-400"><i class="fas fa-id-card mr-2"></i> </p> <p class="text-sm text-gray-400"><i class="fas fa-phone-alt mr-2"></i>Phone: <a target="_blank" class="text-blue-400 hover:underline"> </a></p> <a target="_blank" class="text-blue-400 hover:underline"><i class="fab fa-facebook mr-2"></i>Facebook Profile</a></div>'),Be=u('<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center items-center svelte-1t7omc5"></div>'),Le=u('<section class="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100 py-16 px-6 w-full flex flex-col items-center svelte-1t7omc5"><h1 class="text-4xl font-extrabold text-center mb-6 text-white leading-tight svelte-1t7omc5"> </h1> <p class="text-center text-gray-400 mb-8">For any help, please contact the captains of the group-14</p> <!></section> <section class="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100 py-16 px-6 w-full flex flex-col items-center svelte-1t7omc5"><h1 class="text-4xl font-extrabold text-center mb-6 text-white leading-tight svelte-1t7omc5"> </h1> <p class="text-center text-gray-400 mb-8">For any help, please contact the captains of the group-14</p> <!></section>',1);function Re(z,F){Z(F,!1);const P=se(),b=()=>re(oe,"$BASE_URL",P);let n=[],m=f([]),v=f([]),h=f(!0),_=f("");const Y=async()=>{try{let s;ne.subscribe(l=>s=l)(),s.length>0?n=s:(n=(await de.get(`${(await e(_)).toString()}/users/`)).data.data,ne.set(n));const i=[...new Set(n.map(l=>l.batch))].sort((l,g)=>g-l),[y,t]=i;c(m,n.filter(l=>l.batch===y)),c(v,n.filter(l=>l.batch===t))}catch(s){console.error("Error fetching admins:",s)}finally{c(h,!1)}};ge(()=>{Y()}),ee(()=>b(),()=>{c(_,b())}),te(),me();var I=Le(),M=ve(I),w=r(M),G=r(w);a(w);var C=o(w,4);{var W=s=>{var i=_e();x(s,i)},j=s=>{var i=we();ie(i,5,()=>e(m),ce,(y,t)=>{var l=ye(),g=r(l),T=r(g,!0);a(g);var k=o(g,2),B=o(r(k),2),H=r(B,!0);a(B),a(k);var L=o(k,2),J=o(r(L));a(L);var R=o(L,2),S=o(r(R),2),K=r(S,!0);E(()=>p(K,e(t).phone.startsWith("+88")?e(t).phone:"+88"+e(t).phone)),a(S),a(R);var Q=o(R,2);a(l),E(()=>{p(T,e(t).fullName),A(B,"href",`mailto:${e(t).email??""}`),p(H,e(t).email),p(J,`Roll: ${e(t).roll??""}`),A(S,"href",`tel:${e(t).phone}`),A(Q,"href",e(t).fbLink)}),x(y,l)}),a(i),x(s,i)};le(C,s=>{e(h)?s(W):s(j,!1)})}a(M);var U=o(M,2),$=r(U),q=r($);a($);var N=o($,4);{var D=s=>{var i=$e();x(s,i)},d=s=>{var i=Be();ie(i,5,()=>e(v),ce,(y,t)=>{var l=ke(),g=r(l),T=r(g,!0);a(g);var k=o(g,2),B=o(r(k),2),H=r(B,!0);a(B),a(k);var L=o(k,2),J=o(r(L));a(L);var R=o(L,2),S=o(r(R),2),K=r(S,!0);E(()=>p(K,e(t).phone.startsWith("+88")?e(t).phone:"+88"+e(t).phone)),a(S),a(R);var Q=o(R,2);a(l),E(()=>{p(T,e(t).fullName),A(B,"href",`mailto:${e(t).email??""}`),p(H,e(t).email),p(J,`Roll: ${e(t).roll??""}`),A(S,"href",`tel:${e(t).phone}`),A(Q,"href",e(t).fbLink)}),x(y,l)}),a(i),x(s,i)};le(N,s=>{e(h)?s(D):s(d,!1)})}a(U),E(()=>{var s,i;p(G,`Captains of Batch ${(((s=e(m)[0])==null?void 0:s.batch)||"")??""}`),p(q,`Captains of Batch ${(((i=e(v)[0])==null?void 0:i.batch)||"")??""}`)}),x(z,I),ae()}var Se=u('<div class="container flex flex-col items-center justify-center md:mx-20 pb-5 bg-gradient-to-r from-gray-800 via-gray-900 to-black"><!> <hr class="border-white w-5/6 border-3"> <hr class="border-white w-5/6 border-3 mt-2"> <hr class="border-white w-5/6 border-3 mt-2"> <!></div>');function De(z,F){Z(F,!1);const P=se(),b=()=>re(oe,"$BASE_URL",P);let n=f("");ee(()=>b(),()=>{c(n,b())}),te();var m=Se(),v=r(m);be(v,{});var h=o(v,8);Re(h,{}),a(m),x(z,m),ae()}export{De as component};
