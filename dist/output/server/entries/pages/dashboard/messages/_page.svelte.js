import { O as store_get, Q as unsubscribe_stores, N as pop, J as push } from "../../../../chunks/index3.js";
import "../../../../chunks/client.js";
/* empty css                       */
/* empty css                          */
import { B as BASE_URL } from "../../../../chunks/api.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  store_get($$store_subs ??= {}, "$BASE_URL", BASE_URL);
  $$payload.out += `<div class="min-h-screen bg-gray-950 text-gray-100 p-4 md:p-6"><h1 class="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Message Board</h1> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex justify-center items-center min-h-[200px]"><div class="animate-pulse text-blue-400">Loading...</div></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
