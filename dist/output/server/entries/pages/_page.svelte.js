import { O as store_get, Q as unsubscribe_stores, N as pop, J as push } from "../../chunks/index3.js";
import { B as BASE_URL } from "../../chunks/api.js";
import { a as attr } from "../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let searchQuery = "";
  let filterDate = "";
  store_get($$store_subs ??= {}, "$BASE_URL", BASE_URL);
  $$payload.out += `<div class="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><header class="text-center mb-8 sm:mb-12"><div class="relative inline-block"><div class="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl blur-md opacity-25 group-hover:opacity-75 transition duration-500"></div> <div class="relative px-6 py-4 sm:px-8 sm:py-6 bg-slate-900/90 backdrop-blur-sm ring-1 ring-white/10 rounded-xl"><div class="flex justify-between items-center"><h1 class="text-xl sm:text-4xl font-bold pr-2 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">NDC Group 14 Notice Board</h1> <button class="inline-flex items-center justify-center p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors duration-200"><svg class="w-4 h-4 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,255.99536,255.99536" style="fill:#1A1A1A;"><g fill="#f3f0f0" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-2.9686,0 -5.69718,1.08344 -7.79297,2.875c-0.28605,0.22772 -0.42503,0.59339 -0.36245,0.95363c0.06258,0.36023 0.31676,0.6576 0.66286,0.77549c0.3461,0.1179 0.72895,0.03753 0.99842,-0.20959c1.74821,-1.49444 4.01074,-2.39453 6.49414,-2.39453c5.19656,0 9.45099,3.93793 9.95117,9h-2.95117l4,6l4,-6h-3.05078c-0.51129,-6.14834 -5.67138,-11 -11.94922,-11zM4,10l-4,6h3.05078c0.51129,6.14834 5.67138,11 11.94922,11c2.9686,0 5.69718,-1.08344 7.79297,-2.875c0.28605,-0.22772 0.42504,-0.59339 0.36245,-0.95363c-0.06258,-0.36023 -0.31676,-0.6576 -0.66286,-0.7755c-0.3461,-0.1179 -0.72895,-0.03753 -0.99842,0.20959c-1.74821,1.49444 -4.01074,2.39453 -6.49414,2.39453c-5.19656,0 -9.45099,-3.93793 -9.95117,-9h2.95117z"></path></g></g></svg></button></div></div></div> <p class="mt-4 text-slate-400 text-base sm:text-lg">Stay informed with the latest updates and announcements</p></header> <div class="mb-8"><div class="bg-slate-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-xl border border-slate-800"><div class="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4"><div class="relative"><input type="text" placeholder="Search notices..." class="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 text-white rounded-lg border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 placeholder-slate-400 transition-all duration-200"${attr("value", searchQuery)}> <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div> <input type="text" class="w-full px-4 py-2.5 bg-slate-800/50 text-white rounded-lg border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 placeholder-slate-400 transition-all duration-200"${attr("value", filterDate)} placeholder="Filter by Date"> <select class="w-full px-4 py-2.5 bg-slate-800/50 text-white rounded-lg border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200"><option value="">All Years</option><option value="1st Year">1st Year</option><option value="2nd Year">2nd Year</option></select></div></div></div> <div class="space-y-6">`;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex justify-center items-center h-64"><div class="flex flex-col items-center space-y-4"><div class="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div> <p class="text-slate-400 font-medium animate-pulse">Loading notices...</p></div></div>`;
  }
  $$payload.out += `<!--]--></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
