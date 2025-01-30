import"../chunks/Bg9kRutz.js";import"../chunks/CZwOOZ8X.js";import{p as Ht,l as Qt,b as Xt,t as w,c as Zt,d as i,e as o,g as t,s as l,m as b,r as a,n as St,f as U,j as te}from"../chunks/C49fxnTX.js";import{s as it}from"../chunks/CpG_a03V.js";import{i as A,e as x}from"../chunks/Cd7jppo2.js";import{e as It,i as ee}from"../chunks/6_bSFVyE.js";import{h as ae}from"../chunks/D2KFMmPb.js";import{a as n,t as h,c as E}from"../chunks/BVyY2eYF.js";import{r as jt,s as lt,h as oe}from"../chunks/C55JGdRg.js";import{b as Mt}from"../chunks/DY5b5QkI.js";import{b as re}from"../chunks/BYitliNK.js";import{i as se}from"../chunks/Dza9i49Z.js";import{s as ie,a as le}from"../chunks/CZe-tk6V.js";import{o as ne}from"../chunks/rzUrWnQ3.js";import{a as zt,B as de}from"../chunks/D4POEFCI.js";async function ce(){localStorage.getItem("version")||localStorage.setItem("version","2.0.0");const u=localStorage.getItem("version")||"2.0.0",m="https://plural-ahead.pockethost.io/api/collections/ndcapp/records/i4kbkeaa5zofe7d";try{if(m){const s=await zt.get(m),{version:f,url:y}=s.data.App;f!==u&&pe(y,f),console.log("Version data:",f,y)}}catch(s){console.error("Error fetching version:",s)}}const pe=(u,m)=>{const s=document.createElement("div");s.classList.add("modal"),s.innerHTML=`
        <div class="modal-content">
            <h2>A New Version is Available!</h2>
            <p>Version ${m} is now available. Would you like to update to the latest version?</p>
            <div class="modal-actions">
                <button id="updateButton">Update</button>
                <button id="closeButton">Later</button>
            </div>
        </div>
    `,document.body.appendChild(s);const f=document.createElement("style");f.textContent=`
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
    `,document.head.appendChild(f);const y=s.querySelector("#updateButton"),c=s.querySelector("#closeButton");y.onclick=async()=>{await ve(u,m),At(s)},c.onclick=()=>{At(s)}},At=u=>{document.body.removeChild(u)},ve=async(u,m)=>{try{localStorage.setItem("version",m),window.open(u,"_blank")?console.log("APK download started in a new tab."):console.error("Failed to open download window.")}catch(s){console.error("Failed to download or install APK:",s)}};var ue=h('<div class="flex justify-center items-center h-64"><div class="flex flex-col items-center space-y-4"><div class="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div> <p class="text-slate-400 font-medium animate-pulse">Loading notices...</p></div></div>'),me=h('<div class="flex justify-center items-center h-64"><div class="text-center bg-slate-900/50 backdrop-blur-sm rounded-xl p-8"><svg class="w-16 h-16 text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <p class="text-slate-400 text-lg mb-2">No notices found</p> <p class="text-slate-500">Try adjusting your filters or search terms.</p></div></div>'),fe=h('<div class="flex justify-center"><a class="inline-flex items-center px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold text-base transition-colors duration-200"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> Download PDF</a></div>'),ge=h('<div class="flex justify-center"><img alt="Notice Image" class="w-full max-w-2xl h-auto rounded-lg shadow-lg svelte-1aazb1a" loading="lazy"></div>'),be=h('<div class="mt-6 space-y-4"></div>'),xe=h('<div class="group transform transition-all duration-300 hover:-translate-y-1"><div class="relative"><div class="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div> <div class="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6"><div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4"><h2 class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent"> </h2> <div class="flex flex-wrap items-center gap-3"><span class="px-3 py-1 text-sm font-medium bg-violet-500/10 text-violet-400 rounded-full"> </span> <span class="text-sm text-slate-400"> </span></div></div> <div class="prose prose-invert max-w-none"><div class="text-slate-300 leading-relaxed [&amp;_a]:text-blue-400 [&amp;_a]:underline [&amp;_a]:hover:text-blue-300"><!></div></div> <!></div></div></div>'),he=h('<div class="flex justify-center items-center py-8 space-x-4"><button class="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">Previous</button> <button class="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">Next</button></div>'),ye=h('<div class="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><header class="text-center mb-8 sm:mb-12"><div class="relative inline-block"><div class="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl blur-md opacity-25 group-hover:opacity-75 transition duration-500"></div> <div class="relative px-6 py-4 sm:px-8 sm:py-6 bg-slate-900/90 backdrop-blur-sm ring-1 ring-white/10 rounded-xl"><div class="flex justify-between items-center"><h1 class="text-xl sm:text-4xl font-bold pr-2 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">NDC Group 14 Notice Board</h1> <button class="inline-flex items-center justify-center p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors duration-200"><svg class="w-4 h-4 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,255.99536,255.99536" style="fill:#1A1A1A;"><g fill="#f3f0f0" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-2.9686,0 -5.69718,1.08344 -7.79297,2.875c-0.28605,0.22772 -0.42503,0.59339 -0.36245,0.95363c0.06258,0.36023 0.31676,0.6576 0.66286,0.77549c0.3461,0.1179 0.72895,0.03753 0.99842,-0.20959c1.74821,-1.49444 4.01074,-2.39453 6.49414,-2.39453c5.19656,0 9.45099,3.93793 9.95117,9h-2.95117l4,6l4,-6h-3.05078c-0.51129,-6.14834 -5.67138,-11 -11.94922,-11zM4,10l-4,6h3.05078c0.51129,6.14834 5.67138,11 11.94922,11c2.9686,0 5.69718,-1.08344 7.79297,-2.875c0.28605,-0.22772 0.42504,-0.59339 0.36245,-0.95363c-0.06258,-0.36023 -0.31676,-0.6576 -0.66286,-0.7755c-0.3461,-0.1179 -0.72895,-0.03753 -0.99842,0.20959c-1.74821,1.49444 -4.01074,2.39453 -6.49414,2.39453c-5.19656,0 -9.45099,-3.93793 -9.95117,-9h2.95117z"></path></g></g></svg></button></div></div></div> <p class="mt-4 text-slate-400 text-base sm:text-lg">Stay informed with the latest updates and announcements</p></header> <div class="mb-8"><div class="bg-slate-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-xl border border-slate-800"><div class="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4"><div class="relative"><input type="text" placeholder="Search notices..." class="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 text-white rounded-lg border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 placeholder-slate-400 transition-all duration-200"> <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div> <input type="text" class="w-full px-4 py-2.5 bg-slate-800/50 text-white rounded-lg border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 placeholder-slate-400 transition-all duration-200" placeholder="Filter by Date"> <select class="w-full px-4 py-2.5 bg-slate-800/50 text-white rounded-lg border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200"><option>All Years</option><option>1st Year</option><option>2nd Year</option></select></div></div></div> <div class="space-y-6"><!></div> <!></div></div>');function Re(u,m){Ht(m,!1);const s=ie(),f=()=>le(de,"$BASE_URL",s);let y=b(""),c=[],F=b([]),z=b(!0),p=b(1),_=b(1),P=b(""),D=b(""),k=b("");const Y=async(e=1)=>{l(z,!0);try{localStorage.getItem("notices")!==null&&(c=JSON.parse(localStorage.getItem("notices")),l(_,Math.ceil(c.length/5)),C(),setTimeout(()=>{l(z,!1)},1e3));try{const r=await zt.get(`${(await t(y)).toString()}/notices/`,{params:{page:e}});c=[...r.data.data],c.sort((d,v)=>v.ID-d.ID),l(_,Math.ceil(r.data.count/5)),C()}catch(r){console.error("Error fetching notices:",r)}}catch(r){console.error("Error fetching notices:",r),localStorage.getItem("notices")!==null&&(c=JSON.parse(localStorage.getItem("notices")),l(_,Math.ceil(c.length/5)),C())}localStorage.setItem("notices",JSON.stringify(c)),l(z,!1)},nt=e=>{if(!e)return"";const[r,d,v]=e.split("/");return`${v}-${d}-${r}`},Bt=e=>new Date(nt(e)).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),C=()=>{l(F,c.filter(e=>{const r=e.title.toLowerCase().includes(t(P).toLowerCase()),d=t(D)?nt(e.date)===t(D):!0,v=t(k)?t(k)==="1st Year"&&e.year===1||t(k)==="2nd Year"&&e.year===2:!0;return r&&d&&v}))},T=()=>{C()},dt=e=>e?e.filename.split(".").pop().toLowerCase():null;ne(async()=>{window.performance.navigation.type,Y(),ce()}),Qt(()=>f(),()=>{l(y,f())}),Xt(),se();var V=ye(),ct=o(V),$=o(ct),pt=o($),vt=i(o(pt),2),ut=o(vt),Dt=i(o(ut),2);a(ut),a(vt),a(pt),St(2),a($);var q=i($,2),mt=o(q),ft=o(mt),J=o(ft),O=o(J);jt(O),St(2),a(J);var S=i(J,2);jt(S);var L=i(S,2);w(()=>{t(k),te(()=>{})});var W=o(L);W.value=((W.__value="")==null,"");var K=i(W);K.value=(K.__value="1st Year")==null?"":"1st Year";var gt=i(K);gt.value=(gt.__value="2nd Year")==null?"":"2nd Year",a(L),a(ft),a(mt),a(q);var G=i(q,2),Yt=o(G);{var Ct=e=>{var r=ue();n(e,r)},Lt=e=>{var r=E(),d=U(r);{var v=I=>{var N=me();n(I,N)},Ut=I=>{var N=E(),Et=U(N);It(Et,3,()=>t(F),(H,g)=>H.ID+"-"+g,(H,g)=>{var Q=xe(),bt=o(Q),xt=i(o(bt),2),X=o(xt),Z=o(X),Ft=o(Z,!0);a(Z);var ht=i(Z,2),tt=o(ht),Pt=o(tt,!0);a(tt);var yt=i(tt,2),Tt=o(yt,!0);w(()=>it(Tt,Bt(t(g).date))),a(yt),a(ht),a(X);var et=i(X,2),wt=o(et),Vt=o(wt);ae(Vt,()=>t(g).content),a(wt),a(et);var $t=i(et,2);{var qt=at=>{var ot=be();It(ot,5,()=>t(g).files,ee,(Jt,B)=>{var _t=E(),Ot=U(_t);{var Wt=j=>{var M=fe(),R=o(M);w(()=>lt(R,"href",`https://res.cloudinary.com/djqao3rbs/image/upload/fl_attachment/${t(B).filename.split("/image/upload/")[1]}`)),a(M),w(()=>lt(R,"download",t(B).filename)),n(j,M)},Kt=j=>{var M=E(),R=U(M);{var Gt=rt=>{var st=ge(),kt=o(st);a(st),w(()=>lt(kt,"src",t(B).filename)),oe(kt),n(rt,st)};A(R,rt=>{["jpg","jpeg","png","gif"].includes(dt(t(B)))&&rt(Gt)},!0)}n(j,M)};A(Ot,j=>{dt(t(B))==="pdf"?j(Wt):j(Kt,!1)})}n(Jt,_t)}),a(ot),n(at,ot)};A($t,at=>{t(g).files&&t(g).files.length>0&&at(qt)})}a(xt),a(bt),a(Q),w(()=>{it(Ft,t(g).title),it(Pt,t(g).year===1?"1st Year":"2nd Year")}),n(H,Q)}),n(I,N)};A(d,I=>{t(F).length===0?I(v):I(Ut,!1)},!0)}n(e,r)};A(Yt,e=>{t(z)&&t(p)===1?e(Ct):e(Lt,!1)})}a(G);var Nt=i(G,2);{var Rt=e=>{var r=he(),d=o(r),v=i(d,2);a(r),w(()=>{d.disabled=t(p)===1,v.disabled=t(p)===t(_)}),x("click",d,()=>{l(p,Math.max(1,t(p)-1)),Y(t(p))}),x("click",v,()=>{l(p,Math.min(t(_),t(p)+1)),Y(t(p))}),n(e,r)};A(Nt,e=>{!t(z)&&t(_)>1&&e(Rt)})}a(ct),a(V),x("click",Dt,()=>Y(t(p))),Mt(O,()=>t(P),e=>l(P,e)),x("input",O,T),Mt(S,()=>t(D),e=>l(D,e)),x("input",S,T),x("blur",S,e=>!e.target.value&&(e.target.type="text")),x("focus",S,e=>e.target.type="date"),re(L,()=>t(k),e=>l(k,e)),x("change",L,T),n(u,V),Zt()}export{Re as component};
