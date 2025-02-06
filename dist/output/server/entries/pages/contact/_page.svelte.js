import { O as store_get, Q as unsubscribe_stores, N as pop, J as push } from "../../../chunks/index3.js";
/* empty css                       */
/* empty css                       */
import { B as BASE_URL } from "../../../chunks/api.js";
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import "clsx";
function Contact($$payload, $$props) {
  push();
  var $$store_subs;
  let name = "";
  let email = "";
  let roll = "";
  let message = "";
  let isSubmitting = false;
  store_get($$store_subs ??= {}, "$BASE_URL", BASE_URL);
  $$payload.out += `<section class="contact-section py-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black svelte-1dhlzs9"><div class="max-w-2xl mx-auto px-4"><h2 class="section-title svelte-1dhlzs9">Contact</h2> <div class="note-container mb-6 svelte-1dhlzs9"><p class="note-text text-sm sm:text-base svelte-1dhlzs9">This page is for feedback and contact with the captains of
                Group-14. Only students of Group-14 are permitted to send
                messages.</p></div> <h3 class="text-3xl align-middle mb-2">Message:</h3> <form><div class="grid grid-cols-1 gap-6"><input type="text" placeholder="Your Name" class="form-input svelte-1dhlzs9" id="name"${attr("value", name)} required> <input type="email" placeholder="Your Email" class="form-input svelte-1dhlzs9" id="email"${attr("value", email)} required> <input type="text" placeholder="Your College Roll" class="form-input svelte-1dhlzs9" id="roll"${attr("value", roll)} required> <textarea placeholder="Your Message" class="form-input svelte-1dhlzs9" rows="4" id="message" required>`;
  const $$body = escape_html(message);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea> <button type="submit" class="button svelte-1dhlzs9"${attr("disabled", isSubmitting, true)}>${escape_html("Send Message")}</button></div></form></div></section>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function CurrentAdmins($$payload, $$props) {
  push();
  var $$store_subs;
  let secondLatestBatchUsers = [];
  store_get($$store_subs ??= {}, "$BASE_URL", BASE_URL);
  $$payload.out += `<section class="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100 py-16 px-6 w-full flex flex-col items-center svelte-xd6ayh"><h1 class="text-4xl font-extrabold text-center mb-6 text-white leading-tight svelte-xd6ayh">Captains of Batch ${escape_html("")}</h1> <p class="text-center text-gray-400 mb-8">For any help, please contact the captains of the group-14</p> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex justify-center items-center py-10 svelte-xd6ayh"><div class="loader svelte-xd6ayh"></div></div>`;
  }
  $$payload.out += `<!--]--></section> `;
  if (secondLatestBatchUsers.length > 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<section class="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100 py-16 px-6 w-full flex flex-col items-center svelte-xd6ayh"><h1 class="text-4xl font-extrabold text-center mb-6 text-white leading-tight svelte-xd6ayh">Captains of Batch ${escape_html("")}</h1> <p class="text-center text-gray-400 mb-8">For any help, please contact the captains of the group-14</p> `;
    {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="flex justify-center items-center py-10 svelte-xd6ayh"><div class="loader svelte-xd6ayh"></div></div>`;
    }
    $$payload.out += `<!--]--></section>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload) {
  var $$store_subs;
  store_get($$store_subs ??= {}, "$BASE_URL", BASE_URL);
  $$payload.out += `<div class="container flex flex-col items-center justify-center md:mx-20 pb-5 bg-gradient-to-r from-gray-800 via-gray-900 to-black">`;
  Contact($$payload);
  $$payload.out += `<!----> <hr class="border-white w-5/6 border-3"> <hr class="border-white w-5/6 border-3 mt-2"> <hr class="border-white w-5/6 border-3 mt-2"> `;
  CurrentAdmins($$payload);
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
export {
  _page as default
};
