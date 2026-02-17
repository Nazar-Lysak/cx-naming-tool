const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["chunks/MainApp-BbeVYd0C.js","chunks/vendor-react-C2GjpP9I.js","chunks/vendor-DNyN8xRk.js"])))=>i.map(i=>d[i]);
import{j as e,r as f,c as j}from"./chunks/vendor-react-C2GjpP9I.js";import{l as c}from"./chunks/vendor-styled-cIDmuWEW.js";import{m as E}from"./chunks/vendor-motion-BDXVASg0.js";import"./chunks/vendor-DNyN8xRk.js";const S="modulepreload",k=function(t){return"/"+t},g={},C=function(o,r,u){let p=Promise.resolve();if(r&&r.length>0){let y=function(n){return Promise.all(n.map(l=>Promise.resolve(l).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");p=y(r.map(n=>{if(n=k(n),n in g)return;g[n]=!0;const l=n.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${d}`))return;const s=document.createElement("link");if(s.rel=l?"stylesheet":S,l||(s.as="script"),s.crossOrigin="",s.href=n,i&&s.setAttribute("nonce",i),document.head.appendChild(s),l)return new Promise((v,w)=>{s.addEventListener("load",v),s.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${n}`)))})}))}function m(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return p.then(a=>{for(const i of a||[])i.status==="rejected"&&m(i.reason);return o().catch(m)})},N=c.button`
  background-color: #e91c24;
  border: solid 1px #e91c24;
  color: #ffffff;
  border-radius: 8px;
  padding: 14px 40px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 250ms ease-out;

  &:hover,
  &:focus {
    background-color: #2b2b2b;
  }
`,A=({title:t,handleClick:o})=>e.jsx(N,{onClick:o,children:t}),P=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 16px;
`,_=c.div`
  text-align: center;
  max-width: 500px;
`,L=c.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #2b2b2b;
  margin: 0 0 16px 0;
  line-height: 1.2;
`,z=c.p`
  font-size: 1rem;
  color: #2b2b2b;
  margin: 0 0 32px 0;
  line-height: 1.5;
`;function T({onStart:t}){return e.jsx(P,{children:e.jsxs(_,{children:[e.jsx(L,{children:"Find the Pawfect Name"}),e.jsx(z,{children:"Found the perfect breed? Now you need a name! Try our new Dog Name Generator; from the UK's most popular ones, names for small dogs, big dogs, or something unusual - we've got the one for you!"}),e.jsx(A,{title:"Start",handleClick:t})]})})}const D="/assets/loading-red.png",R=c(E.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(43, 43, 43, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`,U=()=>e.jsx(R,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsx("img",{src:D,alt:"Loading..."})}),B=f.lazy(()=>C(()=>import("./chunks/MainApp-BbeVYd0C.js"),__vite__mapDeps([0,1,2]))),I=c.div`
  position: relative;
  width: 100%;
  min-height: 200px;
`;function O({config:t}){const[o,r]=f.useState(!1),u=()=>{r(!0)};return e.jsxs(I,{className:"cx-naming-tool",children:[!o&&e.jsx(T,{onStart:u}),o&&e.jsx(f.Suspense,{fallback:e.jsx(U,{}),children:e.jsx(B,{...t})})]})}const h=document.getElementById("cx-naming-tool-widget");if(!h)throw console.error("CX Naming Tool: Element #cx-naming-tool-widget not found"),new Error("Widget container not found");const x=document.currentScript;function W(t){const o={};return Array.from(t.attributes).forEach(r=>{if(r.name.startsWith("data-")){const u=r.name.replace("data-","").replace(/-([a-z])/g,(p,m)=>m.toUpperCase());o[u]=r.value}}),o}const b=x?W(x):{...h.dataset};if(!b.id)throw console.warn('CX Naming Tool: No "id" provided in data attributes'),new Error("Widget ID is required");j.createRoot(h).render(e.jsx(f.StrictMode,{children:e.jsx(O,{config:b})}));
