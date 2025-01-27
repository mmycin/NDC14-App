import { O as store_get, Q as unsubscribe_stores } from "../../../../../chunks/index3.js";
import { B as BASE_URL } from "../../../../../chunks/api.js";
function _page($$payload) {
  var $$store_subs;
  store_get($$store_subs ??= {}, "$BASE_URL", BASE_URL);
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
export {
  _page as default
};
