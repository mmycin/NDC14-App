import{a as p}from"./pUnYsnP1.js";import{N as a}from"./DzgOfrvm.js";import{g as c}from"./C9ThMXTw.js";async function f(y,d){const e=document.createElement("div");e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.backgroundColor="rgba(0, 0, 0, 0.8)",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.zIndex="1000",e.style.padding="16px";const t=document.createElement("div");t.style.backgroundColor="#1f2937",t.style.padding="20px",t.style.borderRadius="8px",t.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)",t.style.textAlign="center",t.style.width="100%",t.style.maxWidth="400px";const s=document.createElement("p");s.textContent="Are you sure you want to delete this?",s.style.marginBottom="20px",s.style.color="#f3f4f6";const l=document.createElement("div");l.style.display="flex",l.style.justifyContent="space-between",l.style.gap="10px";const o=document.createElement("button");o.textContent="Confirm",o.style.backgroundColor="#ef4444",o.style.color="white",o.style.border="none",o.style.padding="10px 20px",o.style.borderRadius="5px",o.style.cursor="pointer",o.style.flex="1";const n=document.createElement("button");return n.textContent="Cancel",n.style.backgroundColor="#4b5563",n.style.color="white",n.style.border="none",n.style.padding="10px 20px",n.style.borderRadius="5px",n.style.cursor="pointer",n.style.flex="1",l.appendChild(o),l.appendChild(n),t.appendChild(s),t.appendChild(l),e.appendChild(t),document.body.appendChild(e),new Promise(r=>{o.addEventListener("click",async()=>{document.body.removeChild(e);try{const i=await p.delete(y);a("Deleted Successfully","success"),d?c(d):c(window.location.pathname),r(!0)}catch(i){console.error("Error deleting item:",i),a("Error deleting item","error"),r(!1)}}),n.addEventListener("click",()=>{document.body.removeChild(e),r(!1)})})}export{f as D};
