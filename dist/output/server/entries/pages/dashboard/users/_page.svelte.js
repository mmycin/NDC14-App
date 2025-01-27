import { O as store_get, P as ensure_array_like, Q as unsubscribe_stores, N as pop, J as push } from "../../../../chunks/index3.js";
import { B as BASE_URL } from "../../../../chunks/api.js";
import { a as attr } from "../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let batches = [];
  let searchQuery = "";
  let showAdminsOnly = false;
  store_get($$store_subs ??= {}, "$BASE_URL", BASE_URL);
  const each_array = ensure_array_like(batches);
  $$payload.out += `<div class="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 svelte-mpr6ch"><div class="container mx-auto px-4 py-8 svelte-mpr6ch"><div class="text-center mb-8 relative svelte-mpr6ch"><h1 class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient pb-1 svelte-mpr6ch">Captains of Group-14</h1> <div class="h-0.5 w-40 mx-auto mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full svelte-mpr6ch"></div></div> <div class="text-center mb-8 svelte-mpr6ch"><a href="/dashboard/users/add" class="group relative inline-flex items-center justify-center px-6 py-2 font-bold text-white transition-all duration-500 ease-in-out bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 rounded-lg overflow-hidden hover:scale-105 shadow-lg shadow-blue-500/20 svelte-mpr6ch"><span class="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out svelte-mpr6ch"></span> <span class="relative flex items-center space-x-2 svelte-mpr6ch"><svg class="w-4 h-4 svelte-mpr6ch" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" class="svelte-mpr6ch"></path></svg> <span class="text-sm svelte-mpr6ch">Add New User</span></span></a></div> <div class="max-w-3xl mx-auto mb-8 space-y-4 svelte-mpr6ch"><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 svelte-mpr6ch"><div class="relative group svelte-mpr6ch"><div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-20 blur transition-all duration-300 group-hover:opacity-30 group-focus-within:opacity-30 svelte-mpr6ch"></div> <div class="absolute inset-0.5 bg-gray-800 rounded-xl svelte-mpr6ch"></div> <div class="relative flex items-center svelte-mpr6ch"><svg class="absolute left-3 w-4 h-4 text-gray-400 transition-colors duration-300 group-focus-within:text-blue-400 svelte-mpr6ch" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" class="svelte-mpr6ch"></path></svg> <input type="text"${attr("value", searchQuery)} class="w-full pl-10 pr-4 py-2 bg-transparent text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-sm svelte-mpr6ch" placeholder="Search users..."></div></div> <div class="relative group svelte-mpr6ch"><div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-20 blur transition-all duration-300 group-hover:opacity-30 group-focus-within:opacity-30 svelte-mpr6ch"></div> <div class="absolute inset-0.5 bg-gray-800 rounded-xl svelte-mpr6ch"></div> <select class="relative w-full px-4 py-2 bg-transparent text-white rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-sm cursor-pointer svelte-mpr6ch"><option value="" class="text-gray-800 svelte-mpr6ch">All Batches</option><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let batch = each_array[$$index];
    $$payload.out += `<option${attr("value", batch)} class="text-gray-800 svelte-mpr6ch">Batch ${escape_html(batch)}</option>`;
  }
  $$payload.out += `<!--]--></select> <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none transition-colors duration-300 group-hover:text-blue-400 svelte-mpr6ch" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" class="svelte-mpr6ch"></path></svg></div></div> <div class="flex justify-center svelte-mpr6ch"><label class="relative inline-flex items-center cursor-pointer group svelte-mpr6ch"><input type="checkbox"${attr("checked", showAdminsOnly, true)} class="sr-only peer svelte-mpr6ch"> <div class="w-12 h-6 bg-gray-700 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-500/25 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600 svelte-mpr6ch"></div> <span class="ml-3 text-sm font-medium text-gray-300 group-hover:text-white transition-colors svelte-mpr6ch">Show Admins Only</span></label></div></div> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex justify-center items-center py-10 svelte-mpr6ch"><div class="relative w-12 h-12 svelte-mpr6ch"><div class="absolute inset-0 rounded-full border-3 border-blue-500/20 svelte-mpr6ch"></div> <div class="absolute inset-0 rounded-full border-3 border-blue-500 border-t-transparent animate-spin-slow svelte-mpr6ch"></div></div></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
