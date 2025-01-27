import { O as store_get, Q as unsubscribe_stores, N as pop, J as push } from "../../../chunks/index3.js";
import { g as goto } from "../../../chunks/client.js";
import { B as BASE_URL } from "../../../chunks/api.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  goto();
  store_get($$store_subs ??= {}, "$BASE_URL", BASE_URL);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
