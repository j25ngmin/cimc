(function(){"use strict";var e={3913:function(e,n,t){var r=t(9242),o=t(6265),i=t.n(o),u=t(3396);const a=(0,u.Uk)("Home"),c=(0,u.Uk)(" | "),f=(0,u.Uk)("About");function s(e,n){const t=(0,u.up)("router-link"),r=(0,u.up)("router-view");return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u._)("nav",null,[(0,u.Wm)(t,{to:"/"},{default:(0,u.w5)((()=>[a])),_:1}),c,(0,u.Wm)(t,{to:"/about"},{default:(0,u.w5)((()=>[f])),_:1})]),(0,u.Wm)(r)],64)}var l=t(89);const d={},p=(0,l.Z)(d,[["render",s]]);var m=p,h=t(2483);const v=[{path:"/",name:"home",component:[]},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,4335))},{path:"/inquiryView",name:"inquiryView",component:()=>t.e(443).then(t.bind(t,2729))},{path:"/inquiryWrite",name:"inquiryWrite",component:()=>t.e(443).then(t.bind(t,1314))},{path:"/counselor/login",name:"login",component:()=>t.e(443).then(t.bind(t,919))},{path:"/counselor/answerView",name:"answerView",component:()=>t.e(443).then(t.bind(t,9838))},{path:"/counselor/answerWrite",name:"answerWrite",component:()=>t.e(443).then(t.bind(t,3621))}],b=(0,h.p7)({history:(0,h.PO)("/"),routes:v});var g=b,y=t(65),w=(0,y.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),k=t(8780),O=t.n(k),j=t(3679),C=t.n(j);const _=(0,r.ri)(m);_.config.globalProperties.axios=i(),i().defaults.withCredentials=!0,_.config.globalProperties.$router=g,_.use(w).use(g).use(C()).use(O()).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(s--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.71ad400c.js"}}(),function(){t.miniCssF=function(e){return"css/about.b8c30966.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="my_project:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={443:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var s=c(t)}for(n&&n(r);f<u.length;f++)i=u[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},r=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(3913)}));r=t.O(r)})();
//# sourceMappingURL=app.16bce799.js.map