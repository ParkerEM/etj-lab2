if(!self.define){let e,t={};const i=(i,n)=>(i=new URL(i+".js",n).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let s={};const f=e=>i(e,r),c={module:{uri:r},exports:s,require:f};t[r]=Promise.all(n.map((e=>c[e]||f(e)))).then((e=>(o(...e),s)))}}define(["./workbox-8738f3ab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"5357705b.js",revision:"f0127e26896150b2b827597f1eafe73f"},{url:"index.html",revision:"ea527d93c31b2633cf7f1cba7f4b1077"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
