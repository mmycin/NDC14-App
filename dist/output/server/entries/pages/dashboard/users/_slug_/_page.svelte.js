import { O as store_get, P as ensure_array_like, Q as unsubscribe_stores, V as bind_props, N as pop, J as push } from "../../../../../chunks/index3.js";
/* empty css                       */
/* empty css                             */
import "../../../../../chunks/client.js";
import { B as BASE_URL } from "../../../../../chunks/api.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let data = $$props["data"];
  store_get($$store_subs ??= {}, "$BASE_URL", BASE_URL);
  $$payload.out += `<div class="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 py-12 px-4 sm:px-6 lg:px-8"><div class="max-w-4xl mx-auto space-y-8"><div class="relative overflow-hidden bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-800/50"><div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div> <div class="relative"><h1 class="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-center">User Profile</h1> <p class="text-gray-400 text-center mt-4 text-sm sm:text-base">Complete profile details for the user</p></div></div> `;
  {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(Array(6));
    $$payload.out += `<div class="bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-800/50 space-y-6"><div class="flex justify-center"><div class="w-36 h-36 rounded-full bg-gradient-to-br from-gray-800/50 to-gray-700/50 animate-pulse"></div></div> <!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      each_array[$$index];
      $$payload.out += `<div class="space-y-3"><div class="h-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-full w-1/4 animate-pulse"></div> <div class="h-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg w-3/4 animate-pulse"></div></div>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
