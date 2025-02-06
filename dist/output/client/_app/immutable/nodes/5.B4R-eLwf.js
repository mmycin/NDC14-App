import"../chunks/Bg9kRutz.js";import"../chunks/DUhZXiNj.js";import{p as te,l as ee,b as ae,t as _,c as oe,d as o,e as n,g as t,s as l,m as h,r as a,n as At,f as Y,j as re}from"../chunks/DJc_ZBf1.js";import{s as dt}from"../chunks/DEazUP1j.js";import{i as k,e as x}from"../chunks/8oqJBz5t.js";import{e as Dt,i as se}from"../chunks/BDIavYgK.js";import{h as ie}from"../chunks/D0-lUZOc.js";import{a as d,t as y,c as C}from"../chunks/BTk0yM5Y.js";import{r as zt,s as ct,h as ne}from"../chunks/nUEVBPDf.js";import{b as Bt}from"../chunks/C_lEBhVf.js";import{b as le}from"../chunks/Bhl_6JoX.js";import{i as de}from"../chunks/BLuxHWBz.js";import{s as ce,a as pe}from"../chunks/BSPJWgNF.js";import{o as ve}from"../chunks/DxLxZ-jt.js";import{a as Ct,B as ue}from"../chunks/pUnYsnP1.js";async function me(){localStorage.getItem("version")||localStorage.setItem("version","2.0.0");const m=localStorage.getItem("version")||"2.0.0",f="https://plural-ahead.pockethost.io/api/collections/ndcapp/records/i4kbkeaa5zofe7d";try{if(f){const s=await Ct.get(f),{version:g,url:w}=s.data.App;g!==m&&fe(w,g),console.log("Version data:",g,w)}}catch(s){console.error("Error fetching version:",s)}}const fe=(m,f)=>{const s=document.createElement("div");s.classList.add("modal"),s.innerHTML=`
        <div class="modal-content">
            <h2>A New Version is Available!</h2>
            <p>Version ${f} is now available. Would you like to update to the latest version?</p>
            <div class="modal-actions">
                <button id="updateButton">Update</button>
                <button id="closeButton">Later</button>
            </div>
        </div>
    `,document.body.appendChild(s);const g=document.createElement("style");g.textContent=`
        /* Dark Theme Modal */
        .modal {
            display: block;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            animation: fadeIn 0.4s forwards;
        }

        .modal-content {
            background-color: #333;
            color: #fff;
            padding: 40px;
            border-radius: 15px;
            text-align: center;
            max-width: 500px;
            width: 85%;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.4s ease-out;
        }

        .modal h2 {
            font-size: 28px;
            margin-bottom: 20px;
            font-family: 'Roboto', sans-serif;
        }

        .modal p {
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: 30px;
            font-family: 'Roboto', sans-serif;
        }

        .modal-actions {
            display: flex;
            justify-content: space-between;
            gap: 25px;
            flex-wrap: wrap;
        }

        .modal-actions button {
            padding: 15px 30px;
            background: linear-gradient(45deg, #007bff, #00d4ff);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 18px;
            font-family: 'Roboto', sans-serif;
            transition: background-color 0.3s, transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
            flex: 1 1 40%;
            max-width: 200px;
        }

        .modal-actions button:hover {
            background-color: #0056b3;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            transform: scale(1.05);
        }

        .modal-actions button:focus {
            outline: none;
            box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.5);
        }

        /* Fade-in Animation */
        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        /* Slide-in Animation */
        @keyframes slideIn {
            0% { transform: translateY(-40px); }
            100% { transform: translateY(0); }
        }

        /* Mobile responsiveness */
        @media (max-width: 600px) {
            .modal-content {
                width: 90%;
                padding: 25px;
            }

            .modal h2 {
                font-size: 24px;
            }

            .modal p {
                font-size: 16px;
                line-height: 1.4;
            }

            .modal-actions button {
                font-size: 16px;
                padding: 12px 20px;
            }
        }

        /* Additional custom styling */
        body {
            font-family: 'Roboto', sans-serif;
        }

        h2, p {
            text-align: center;
        }

        .modal-actions button:active {
            transform: scale(1);
        }
    `,document.head.appendChild(g);const w=s.querySelector("#updateButton"),c=s.querySelector("#closeButton");w.onclick=async()=>{await ge(m,f),Yt(s)},c.onclick=()=>{Yt(s)}},Yt=m=>{document.body.removeChild(m)},ge=async(m,f)=>{try{localStorage.setItem("version",f),window.open(m,"_blank")?console.log("APK download started in a new tab."):console.error("Failed to open download window.")}catch(s){console.error("Failed to download or install APK:",s)}};var be=y('<div class="flex justify-center items-center h-64"><div class="flex flex-col items-center space-y-4"><div class="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div> <p class="text-slate-400 font-medium animate-pulse">Loading notices...</p></div></div>'),he=y('<div class="flex justify-center items-center h-64"><div class="text-center bg-slate-900/50 backdrop-blur-sm rounded-xl p-8"><svg class="w-16 h-16 text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <p class="text-slate-400 text-lg mb-2">No notices found</p> <p class="text-slate-500">Try adjusting your filters or search terms.</p></div></div>'),xe=y('<div class="flex justify-center"><a class="inline-flex items-center px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold text-base transition-colors duration-200"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> Download PDF</a></div>'),ye=y('<div class="flex justify-center"><img alt="Notice Image" class="w-full max-w-2xl h-auto rounded-lg shadow-lg svelte-pqeumo" loading="lazy"></div>'),we=y('<div class="mt-6 space-y-4"></div>'),_e=y('<div class="group transform transition-all duration-300 hover:-translate-y-1"><div class="relative"><div class="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div> <div class="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6"><div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4"><h2 class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent"> </h2> <div class="flex flex-wrap items-center gap-3"><span class="px-3 py-1 text-sm font-medium bg-violet-500/10 text-violet-400 rounded-full"> </span> <span class="text-sm text-slate-400"> </span></div></div> <div class="prose prose-invert max-w-none"><div class="text-slate-300 leading-relaxed [&amp;_a]:text-blue-400 [&amp;_a]:underline [&amp;_a]:hover:text-blue-300"><!></div></div> <!></div></div></div>'),ke=y('<div class="flex justify-center items-center py-8 space-x-4"><button class="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">Previous</button> <button class="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">Next</button></div>'),Se=y('<div class="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><header class="text-center mb-8 sm:mb-12"><div class="relative inline-block"><div class="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl blur-md opacity-25 group-hover:opacity-75 transition duration-500"></div> <div class="relative px-6 py-4 sm:px-8 sm:py-6 bg-slate-900/90 backdrop-blur-sm ring-1 ring-white/10 rounded-xl"><div class="flex justify-between items-center"><h1 class="text-xl sm:text-4xl font-bold pr-2 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">NDC Group 14 Notice Board</h1> <button class="inline-flex items-center justify-center p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors duration-200"><svg class="w-4 h-4 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,255.99536,255.99536" style="fill:#1A1A1A;"><g fill="#f3f0f0" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-2.9686,0 -5.69718,1.08344 -7.79297,2.875c-0.28605,0.22772 -0.42503,0.59339 -0.36245,0.95363c0.06258,0.36023 0.31676,0.6576 0.66286,0.77549c0.3461,0.1179 0.72895,0.03753 0.99842,-0.20959c1.74821,-1.49444 4.01074,-2.39453 6.49414,-2.39453c5.19656,0 9.45099,3.93793 9.95117,9h-2.95117l4,6l4,-6h-3.05078c-0.51129,-6.14834 -5.67138,-11 -11.94922,-11zM4,10l-4,6h3.05078c0.51129,6.14834 5.67138,11 11.94922,11c2.9686,0 5.69718,-1.08344 7.79297,-2.875c0.28605,-0.22772 0.42504,-0.59339 0.36245,-0.95363c-0.06258,-0.36023 -0.31676,-0.6576 -0.66286,-0.7755c-0.3461,-0.1179 -0.72895,-0.03753 -0.99842,0.20959c-1.74821,1.49444 -4.01074,2.39453 -6.49414,2.39453c-5.19656,0 -9.45099,-3.93793 -9.95117,-9h2.95117z"></path></g></g></svg></button></div></div></div> <p class="mt-4 text-slate-400 text-base sm:text-lg">Stay informed with the latest updates and announcements</p></header> <div class="mb-8"><div class="bg-slate-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-xl border border-slate-800"><div class="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4"><div class="relative"><input type="text" placeholder="Search notices..." class="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 text-white rounded-lg border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 placeholder-slate-400 transition-all duration-200"> <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div> <input type="text" class="w-full px-4 py-2.5 bg-slate-800/50 text-white rounded-lg border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 placeholder-slate-400 transition-all duration-200" placeholder="Filter by Date"> <select class="w-full px-4 py-2.5 bg-slate-800/50 text-white rounded-lg border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200"><option>All Years</option><option>1st Year</option><option>2nd Year</option></select></div></div></div> <div class="space-y-6"><!></div> <!></div></div>');function Pe(m,f){te(f,!1);const s=ce(),g=()=>pe(ue,"$BASE_URL",s);let w=h(""),c=[],P=h([]),z=h(!0),v=h(1),S=h(1),T=h(""),L=h(""),I=h("");const N=async(e=1)=>{l(z,!0);try{localStorage.getItem("notices")!==null&&(c=JSON.parse(localStorage.getItem("notices")),l(S,Math.ceil(c.length/5)),R(),setTimeout(()=>{l(z,!1)},1e3));try{const r=await Ct.get(`${(await t(w)).toString()}/notices/`,{params:{page:e}});c=[...r.data.data],c=c.map(i=>{if(i.date){const[p,Q,b]=i.date.split("/"),M=new Date(b,Q-1,p),E=new Date;if(E.setHours(0,0,0,0),M>E)return{...i,isScheduled:!0}}return i}),c.sort((i,p)=>p.ID-i.ID),l(S,Math.ceil(r.data.count/5)),R()}catch(r){console.error("Error fetching notices:",r)}}catch(r){console.error("Error fetching notices:",r),localStorage.getItem("notices")!==null&&(c=JSON.parse(localStorage.getItem("notices")),l(S,Math.ceil(c.length/5)),R())}localStorage.setItem("notices",JSON.stringify(c)),l(z,!1)},pt=e=>{if(!e)return"";const[r,i,p]=e.split("/");return`${p}-${i}-${r}`},Lt=e=>new Date(pt(e)).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),R=()=>{l(P,c.filter(e=>{const r=e.title.toLowerCase().includes(t(T).toLowerCase()),i=t(L)?pt(e.date)===t(L):!0,p=t(I)?t(I)==="1st Year"&&e.year===1||t(I)==="2nd Year"&&e.year===2:!0;return r&&i&&p}))},V=()=>{R()},vt=e=>e?e.filename.split(".").pop().toLowerCase():null;ve(async()=>{window.performance.navigation.type,N(),me()}),ee(()=>g(),()=>{l(w,g())}),ae(),de();var q=Se(),ut=o(q),$=o(ut),mt=o($),ft=n(o(mt),2),gt=o(ft),Nt=n(o(gt),2);a(gt),a(ft),a(mt),At(2),a($);var J=n($,2),bt=o(J),ht=o(bt),O=o(ht),W=o(O);zt(W),At(2),a(O);var j=n(O,2);zt(j);var U=n(j,2);_(()=>{t(I),re(()=>{})});var H=o(U);H.value=((H.__value="")==null,"");var K=n(H);K.value=(K.__value="1st Year")==null?"":"1st Year";var xt=n(K);xt.value=(xt.__value="2nd Year")==null?"":"2nd Year",a(U),a(ht),a(bt),a(J);var G=n(J,2),Rt=o(G);{var Ut=e=>{var r=be();d(e,r)},Et=e=>{var r=C(),i=Y(r);{var p=b=>{var M=he();d(b,M)},Q=b=>{var M=C(),E=Y(M);Dt(E,3,()=>t(P),(X,u)=>X.ID+"-"+u,(X,u)=>{var yt=C(),Tt=Y(yt);{var Vt=Z=>{var tt=_e(),wt=o(tt),_t=n(o(wt),2),et=o(_t),at=o(et),qt=o(at,!0);a(at);var kt=n(at,2),ot=o(kt),$t=o(ot,!0);a(ot);var St=n(ot,2),Jt=o(St,!0);_(()=>dt(Jt,Lt(t(u).date))),a(St),a(kt),a(et);var rt=n(et,2),It=o(rt),Ot=o(It);ie(Ot,()=>t(u).content),a(It),a(rt);var Wt=n(rt,2);{var Ht=st=>{var it=we();Dt(it,5,()=>t(u).files,se,(Kt,B)=>{var jt=C(),Gt=Y(jt);{var Qt=A=>{var D=xe(),F=o(D);_(()=>ct(F,"href",`https://res.cloudinary.com/djqao3rbs/image/upload/fl_attachment/${t(B).filename.split("/image/upload/")[1]}`)),a(D),_(()=>ct(F,"download",t(B).filename)),d(A,D)},Xt=A=>{var D=C(),F=Y(D);{var Zt=nt=>{var lt=ye(),Mt=o(lt);a(lt),_(()=>ct(Mt,"src",t(B).filename)),ne(Mt),d(nt,lt)};k(F,nt=>{["jpg","jpeg","png","gif"].includes(vt(t(B)))&&nt(Zt)},!0)}d(A,D)};k(Gt,A=>{vt(t(B))==="pdf"?A(Qt):A(Xt,!1)})}d(Kt,jt)}),a(it),d(st,it)};k(Wt,st=>{t(u).files&&t(u).files.length>0&&st(Ht)})}a(_t),a(wt),a(tt),_(()=>{dt(qt,t(u).title),dt($t,t(u).year===1?"1st Year":"2nd Year")}),d(Z,tt)};k(Tt,Z=>{t(u).isScheduled||Z(Vt)})}d(X,yt)}),d(b,M)};k(i,b=>{t(P).length===0?b(p):b(Q,!1)},!0)}d(e,r)};k(Rt,e=>{t(z)&&t(v)===1?e(Ut):e(Et,!1)})}a(G);var Ft=n(G,2);{var Pt=e=>{var r=ke(),i=o(r),p=n(i,2);a(r),_(()=>{i.disabled=t(v)===1,p.disabled=t(v)===t(S)}),x("click",i,()=>{l(v,Math.max(1,t(v)-1)),N(t(v))}),x("click",p,()=>{l(v,Math.min(t(S),t(v)+1)),N(t(v))}),d(e,r)};k(Ft,e=>{!t(z)&&t(S)>1&&e(Pt)})}a(ut),a(q),x("click",Nt,()=>N(t(v))),Bt(W,()=>t(T),e=>l(T,e)),x("input",W,V),Bt(j,()=>t(L),e=>l(L,e)),x("input",j,V),x("blur",j,e=>!e.target.value&&(e.target.type="text")),x("focus",j,e=>e.target.type="date"),le(U,()=>t(I),e=>l(I,e)),x("change",U,V),d(m,q),oe()}export{Pe as component};
