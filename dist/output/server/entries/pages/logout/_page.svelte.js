import "clsx";
import { N as pop, J as push } from "../../../chunks/index3.js";
import { g as goto } from "../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  localStorage.removeItem("jwtToken");
  goto();
  pop();
}
export {
  _page as default
};
