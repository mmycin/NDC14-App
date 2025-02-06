import { O as store_get, P as ensure_array_like, Q as unsubscribe_stores, N as pop, J as push } from "../../../../chunks/index3.js";
import "../../../../chunks/client.js";
import { B as BASE_URL } from "../../../../chunks/api.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let data = {};
  store_get($$store_subs ??= {}, "$BASE_URL", BASE_URL);
  $$payload.out += `<div class="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8"><div class="max-w-3xl mx-auto"><div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-2xl p-8 shadow-2xl text-center relative border border-gray-800"><h1 class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">Profile</h1> `;
  if (data.isAdmin) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="absolute top-4 right-4 px-3 py-1.5 bg-gray-950 text-sm font-semibold text-yellow-400 rounded-full border border-yellow-400/20 flex items-center gap-1.5"><span class="text-yellow-400">☆</span> Admin</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <p class="text-gray-400 mt-2">Your account details</p></div> `;
  {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(Array(6));
    $$payload.out += `<div class="bg-gray-900 p-8 rounded-b-2xl shadow-2xl border border-gray-800"><div class="animate-pulse space-y-4"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      each_array[$$index];
      $$payload.out += `<div class="h-4 bg-gray-800 rounded w-3/4"></div>`;
    }
    $$payload.out += `<!--]--></div></div>`;
  }
  $$payload.out += `<!--]--> <div class="text-center mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6"><button class="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-all duration-200 ease-in-out w-full sm:w-auto">Go Back</button> <button class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-all duration-200 ease-in-out w-full sm:w-auto">Edit Profile</button></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
