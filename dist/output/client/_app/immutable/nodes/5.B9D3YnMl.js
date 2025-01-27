import"../chunks/Bg9kRutz.js";import"../chunks/CZwOOZ8X.js";import{p as Jt,l as Ot,b as Xt,t as y,c as Zt,d as i,e as o,g as t,s as p,m as b,r as a,n as jt,f as R,j as te}from"../chunks/C49fxnTX.js";import{s as st}from"../chunks/CpG_a03V.js";import{i as z,e as g}from"../chunks/Cd7jppo2.js";import{e as At,i as ee}from"../chunks/6_bSFVyE.js";import{h as ae}from"../chunks/D2KFMmPb.js";import{a as n,t as x,c as U}from"../chunks/BVyY2eYF.js";import{r as zt,s as it,h as oe}from"../chunks/C55JGdRg.js";import{b as Mt}from"../chunks/DY5b5QkI.js";import{b as re}from"../chunks/BYitliNK.js";import{i as se}from"../chunks/Dza9i49Z.js";import{s as ie,a as ne}from"../chunks/CZe-tk6V.js";import{o as le}from"../chunks/rzUrWnQ3.js";import{a as Bt,B as de}from"../chunks/D4POEFCI.js";async function ce(){localStorage.getItem("version")||localStorage.setItem("version","2.0.0");const v=localStorage.getItem("version")||"2.0.0",u="https://plural-ahead.pockethost.io/api/collections/ndcapp/records/i4kbkeaa5zofe7d";try{if(u){const s=await Bt.get(u),{version:m,url:h}=s.data.App;m!==v&&pe(h,m),console.log("Version data:",m,h)}}catch(s){console.error("Error fetching version:",s)}}const pe=(v,u)=>{const s=document.createElement("div");s.classList.add("modal"),s.innerHTML=`
        <div class="modal-content">
            <h2>A New Version is Available!</h2>
            <p>Version ${u} is now available. Would you like to update to the latest version?</p>
            <div class="modal-actions">
                <button id="updateButton">Update</button>
                <button id="closeButton">Later</button>
            </div>
        </div>
    `,document.body.appendChild(s);const m=document.createElement("style");m.textContent=`
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
    `,document.head.appendChild(m);const h=s.querySelector("#updateButton"),M=s.querySelector("#closeButton");h.onclick=async()=>{await ve(v,u),St(s)},M.onclick=()=>{St(s)}},St=v=>{document.body.removeChild(v)},ve=async(v,u)=>{try{localStorage.setItem("version",u),window.open(v,"_blank")?console.log("APK download started in a new tab."):console.error("Failed to open download window.")}catch(s){console.error("Failed to download or install APK:",s)}};var ue=x('<div class="flex justify-center items-center h-64"><div class="flex flex-col items-center space-y-4"><div class="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div> <p class="text-slate-400 font-medium animate-pulse">Loading notices...</p></div></div>'),me=x(`<div class="flex justify-center items-center h-64"><div class="text-center bg-slate-900/50 backdrop-blur-sm rounded-xl p-8"><svg class="w-16 h-16 text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <p class="text-slate-400 text-lg mb-2">No notices found</p> <p class="text-slate-500">Try adjusting your filters or search terms or check
                            your internet.</p></div></div>`),fe=x('<div class="flex justify-center"><a class="inline-flex items-center px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold text-base transition-colors duration-200"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> Download PDF</a></div>'),be=x('<div class="flex justify-center"><img alt="Notice Image" class="w-full max-w-2xl h-auto rounded-lg shadow-lg svelte-1aazb1a" loading="lazy"></div>'),ge=x('<div class="mt-6 space-y-4"></div>'),xe=x('<div class="group transform transition-all duration-300 hover:-translate-y-1"><div class="relative"><div class="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div> <div class="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6"><div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4"><h2 class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent"> </h2> <div class="flex flex-wrap items-center gap-3"><span class="px-3 py-1 text-sm font-medium bg-violet-500/10 text-violet-400 rounded-full"> </span> <span class="text-sm text-slate-400"> </span></div></div> <div class="prose prose-invert max-w-none"><div class="text-slate-300 leading-relaxed [&amp;_a]:text-blue-400 [&amp;_a]:underline [&amp;_a]:hover:text-blue-300"><!></div></div> <!></div></div></div>'),he=x('<div class="flex justify-center items-center py-8 space-x-4"><button class="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">Previous</button> <button class="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">Next</button></div>'),ye=x('<div class="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><header class="text-center mb-8 sm:mb-12"><div class="relative inline-block"><div class="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl blur-md opacity-25 group-hover:opacity-75 transition duration-500"></div> <div class="relative px-6 py-4 sm:px-8 sm:py-6 bg-slate-900/90 backdrop-blur-sm ring-1 ring-white/10 rounded-xl"><div class="flex justify-between items-center"><h1 class="text-xl sm:text-4xl font-bold pr-2 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">NDC Group 14 Notice Board</h1> <button class="inline-flex items-center justify-center p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors duration-200"><svg class="w-4 h-4 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,255.99536,255.99536" style="fill:#1A1A1A;"><g fill="#f3f0f0" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-2.9686,0 -5.69718,1.08344 -7.79297,2.875c-0.28605,0.22772 -0.42503,0.59339 -0.36245,0.95363c0.06258,0.36023 0.31676,0.6576 0.66286,0.77549c0.3461,0.1179 0.72895,0.03753 0.99842,-0.20959c1.74821,-1.49444 4.01074,-2.39453 6.49414,-2.39453c5.19656,0 9.45099,3.93793 9.95117,9h-2.95117l4,6l4,-6h-3.05078c-0.51129,-6.14834 -5.67138,-11 -11.94922,-11zM4,10l-4,6h3.05078c0.51129,6.14834 5.67138,11 11.94922,11c2.9686,0 5.69718,-1.08344 7.79297,-2.875c0.28605,-0.22772 0.42504,-0.59339 0.36245,-0.95363c-0.06258,-0.36023 -0.31676,-0.6576 -0.66286,-0.7755c-0.3461,-0.1179 -0.72895,-0.03753 -0.99842,0.20959c-1.74821,1.49444 -4.01074,2.39453 -6.49414,2.39453c-5.19656,0 -9.45099,-3.93793 -9.95117,-9h2.95117z"></path></g></g></svg></button></div></div></div> <p class="mt-4 text-slate-400 text-base sm:text-lg">Stay informed with the latest updates and announcements</p></header> <div class="mb-8"><div class="bg-slate-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-xl border border-slate-800"><div class="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4"><div class="relative"><input type="text" placeholder="Search notices..." class="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 text-white rounded-lg border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 placeholder-slate-400 transition-all duration-200"> <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div> <input type="text" class="w-full px-4 py-2.5 bg-slate-800/50 text-white rounded-lg border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 placeholder-slate-400 transition-all duration-200" placeholder="Filter by Date"> <select class="w-full px-4 py-2.5 bg-slate-800/50 text-white rounded-lg border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200"><option>All Years</option><option>1st Year</option><option>2nd Year</option></select></div></div></div> <div class="space-y-6"><!></div> <!></div></div>');function Re(v,u){Jt(u,!1);const s=ie(),m=()=>ne(de,"$BASE_URL",s);let h=b(""),M=[],F=b([]),B=b(!0),d=b(1),D=b(1),E=b(""),I=b(""),w=b("");const Y=async(e=1)=>{p(B,!0);try{const r=await Bt.get(`${(await t(h)).toString()}/notices/`,{params:{page:e}});M=[...r.data.data],M.sort((l,c)=>c.ID-l.ID),p(D,Math.ceil(r.data.count/5)),lt()}catch(r){console.error("Error fetching notices:",r)}p(B,!1)},nt=e=>{if(!e)return"";const[r,l,c]=e.split("/");return`${c}-${l}-${r}`},Dt=e=>new Date(nt(e)).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),lt=()=>{p(F,M.filter(e=>{const r=e.title.toLowerCase().includes(t(E).toLowerCase()),l=t(I)?nt(e.date)===t(I):!0,c=t(w)?t(w)==="1st Year"&&e.year===1||t(w)==="2nd Year"&&e.year===2:!0;return r&&l&&c}))},P=()=>{lt()},dt=e=>e?e.filename.split(".").pop().toLowerCase():null;le(async()=>{window.performance.navigation.type,Y(),ce()}),Ot(()=>m(),()=>{p(h,m())}),Xt(),se();var V=ye(),ct=o(V),T=o(ct),pt=o(T),vt=i(o(pt),2),ut=o(vt),It=i(o(ut),2);a(ut),a(vt),a(pt),jt(2),a(T);var $=i(T,2),mt=o($),ft=o(mt),q=o(ft),W=o(q);zt(W),jt(2),a(q);var _=i(q,2);zt(_);var C=i(_,2);y(()=>{t(w),te(()=>{})});var K=o(C);K.value=((K.__value="")==null,"");var G=i(K);G.value=(G.__value="1st Year")==null?"":"1st Year";var bt=i(G);bt.value=(bt.__value="2nd Year")==null?"":"2nd Year",a(C),a(ft),a(mt),a($);var H=i($,2),Yt=o(H);{var Ct=e=>{var r=ue();n(e,r)},Lt=e=>{var r=U(),l=R(r);{var c=k=>{var L=me();n(k,L)},Ut=k=>{var L=U(),Ft=R(L);At(Ft,3,()=>t(F),(Q,f)=>Q.ID+"-"+f,(Q,f)=>{var J=xe(),gt=o(J),xt=i(o(gt),2),O=o(xt),X=o(O),Et=o(X,!0);a(X);var ht=i(X,2),Z=o(ht),Pt=o(Z,!0);a(Z);var yt=i(Z,2),Vt=o(yt,!0);y(()=>st(Vt,Dt(t(f).date))),a(yt),a(ht),a(O);var tt=i(O,2),wt=o(tt),Tt=o(wt);ae(Tt,()=>t(f).content),a(wt),a(tt);var $t=i(tt,2);{var qt=et=>{var at=ge();At(at,5,()=>t(f).files,ee,(Wt,S)=>{var _t=U(),Kt=R(_t);{var Gt=j=>{var A=fe(),N=o(A);y(()=>it(N,"href",`https://res.cloudinary.com/djqao3rbs/image/upload/fl_attachment/${t(S).filename.split("/image/upload/")[1]}`)),a(A),y(()=>it(N,"download",t(S).filename)),n(j,A)},Ht=j=>{var A=U(),N=R(A);{var Qt=ot=>{var rt=be(),kt=o(rt);a(rt),y(()=>it(kt,"src",t(S).filename)),oe(kt),n(ot,rt)};z(N,ot=>{["jpg","jpeg","png","gif"].includes(dt(t(S)))&&ot(Qt)},!0)}n(j,A)};z(Kt,j=>{dt(t(S))==="pdf"?j(Gt):j(Ht,!1)})}n(Wt,_t)}),a(at),n(et,at)};z($t,et=>{t(f).files&&t(f).files.length>0&&et(qt)})}a(xt),a(gt),a(J),y(()=>{st(Et,t(f).title),st(Pt,t(f).year===1?"1st Year":"2nd Year")}),n(Q,J)}),n(k,L)};z(l,k=>{t(F).length===0?k(c):k(Ut,!1)},!0)}n(e,r)};z(Yt,e=>{t(B)&&t(d)===1?e(Ct):e(Lt,!1)})}a(H);var Nt=i(H,2);{var Rt=e=>{var r=he(),l=o(r),c=i(l,2);a(r),y(()=>{l.disabled=t(d)===1,c.disabled=t(d)===t(D)}),g("click",l,()=>{p(d,Math.max(1,t(d)-1)),Y(t(d))}),g("click",c,()=>{p(d,Math.min(t(D),t(d)+1)),Y(t(d))}),n(e,r)};z(Nt,e=>{!t(B)&&t(D)>1&&e(Rt)})}a(ct),a(V),g("click",It,()=>Y(t(d))),Mt(W,()=>t(E),e=>p(E,e)),g("input",W,P),Mt(_,()=>t(I),e=>p(I,e)),g("input",_,P),g("blur",_,e=>!e.target.value&&(e.target.type="text")),g("focus",_,e=>e.target.type="date"),re(C,()=>t(w),e=>p(w,e)),g("change",C,P),n(v,V),Zt()}export{Re as component};
