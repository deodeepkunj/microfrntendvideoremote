var videos_remote;(()=>{"use strict";var e,r,t,o,n,i,a,u,l,d,f,s={6084:(e,r,t)=>{var o={"./App":()=>Promise.all([t.e(235),t.e(107),t.e(96)]).then((()=>()=>t(1096)))},n=(e,r)=>(t.R=r,r=t.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),i=(e,r)=>{if(t.S){var o="default",n=t.S[o];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>n,init:()=>i})}},c={};function p(e){var r=c[e];if(void 0!==r)return r.exports;var t=c[e]={id:e,exports:{}};return s[e](t,t.exports,p),t.exports}p.m=s,p.c=c,p.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return p.d(r,{a:r}),r},p.d=(e,r)=>{for(var t in r)p.o(r,t)&&!p.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},p.f={},p.e=e=>Promise.all(Object.keys(p.f).reduce(((r,t)=>(p.f[t](e,r),r)),[])),p.u=e=>e+".js",p.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),p.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@microfrontend-videos-images-container-application/microfrontend-videos-remote:",p.l=(t,o,n,i)=>{if(e[t])e[t].push(o);else{var a,u;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var f=l[d];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+n){a=f;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,p.nc&&a.setAttribute("nonce",p.nc),a.setAttribute("data-webpack",r+n),a.src=t),e[t]=[o];var s=(r,o)=>{a.onerror=a.onload=null,clearTimeout(c);var n=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(o))),r)return r(o)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),u&&document.head.appendChild(a)}},p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{p.S={};var e={},r={};p.I=(t,o)=>{o||(o=[]);var n=r[t];if(n||(n=r[t]={}),!(o.indexOf(n)>=0)){if(o.push(n),e[t])return e[t];p.o(p.S,t)||(p.S[t]={});var i=p.S[t],a="@microfrontend-videos-images-container-application/microfrontend-videos-remote",u=(e,r,t,o)=>{var n=i[e]=i[e]||{},u=n[r];(!u||!u.loaded&&(!o!=!u.eager?o:a>u.from))&&(n[r]={get:t,from:a,eager:!!o})},l=[];return"default"===t&&(u("react-dom","16.14.0",(()=>Promise.all([p.e(935),p.e(917)]).then((()=>()=>p(3935))))),u("react","16.14.0",(()=>p.e(976).then((()=>()=>p(7294)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),p.p="http://microfrontendvideoremote.netlify.app/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},o=(e,r)=>{e=t(e),r=t(r);for(var o=0;;){if(o>=e.length)return o<r.length&&"u"!=(typeof r[o])[0];var n=e[o],i=(typeof n)[0];if(o>=r.length)return"u"==i;var a=r[o],u=(typeof a)[0];if(i!=u)return"o"==i&&"n"==u||"s"==u||"u"==i;if("o"!=i&&"u"!=i&&n!=a)return n<a;o++}},n=(e,r)=>{if(0 in e){r=t(r);var o=e[0],i=o<0;i&&(o=-o-1);for(var a=0,u=1,l=!0;;u++,a++){var d,f,s=u<e.length?(typeof e[u])[0]:"";if(a>=r.length||"o"==(f=(typeof(d=r[a]))[0]))return!l||("u"==s?u>o&&!i:""==s!=i);if("u"==f){if(!l||"u"!=s)return!1}else if(l)if(s==f)if(u<=o){if(d!=e[u])return!1}else{if(i?d>e[u]:d<e[u])return!1;d!=e[u]&&(l=!1)}else if("s"!=s&&"n"!=s){if(i||u<=o)return!1;l=!1,u--}else{if(u<=o||f<s!=i)return!1;l=!1}else"s"!=s&&"n"!=s&&(l=!1,u--)}}var c=[],p=c.pop.bind(c);for(a=1;a<e.length;a++){var h=e[a];c.push(1==h?p()|p():2==h?p()&p():h?n(h,r):!p())}return!!p()},i=(e,r,t)=>{var i=e[r];return(r=Object.keys(i).reduce(((e,r)=>!n(t,r)||e&&!o(e,r)?e:r),0))&&i[r]},a=e=>(e.loaded=1,e.get()),u=(e=>function(r,t,o,n){var i=p.I(r);return i&&i.then?i.then(e.bind(e,r,p.S[r],t,o,n)):e(0,p.S[r],t,o,n)})(((e,r,t,o,n)=>{var u=r&&p.o(r,t)&&i(r,t,o);return u?a(u):n()})),l={},d={4917:()=>u("default","react",[1,16,14,0],(()=>p.e(294).then((()=>()=>p(7294))))),6279:()=>u("default","react",[0,16,6,0],(()=>p.e(976).then((()=>()=>p(7294))))),7850:()=>u("default","react",[1,16,13,1],(()=>p.e(976).then((()=>()=>p(7294)))))},f={107:[6279,7850],917:[4917]},p.f.consumes=(e,r)=>{p.o(f,e)&&f[e].forEach((e=>{if(p.o(l,e))return r.push(l[e]);var t=r=>{l[e]=0,p.m[e]=t=>{delete p.c[e],t.exports=r()}},o=r=>{delete l[e],p.m[e]=t=>{throw delete p.c[e],r}};try{var n=d[e]();n.then?r.push(l[e]=n.then(t).catch(o)):t(n)}catch(e){o(e)}}))},(()=>{var e={402:0};p.f.j=(r,t)=>{var o=p.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(10|91)7$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var i=p.p+p.u(r),a=new Error;p.l(i,(t=>{if(p.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+n+": "+i+")",a.name="ChunkLoadError",a.type=n,a.request=i,o[1](a)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[i,a,u]=t,l=0;if(i.some((r=>0!==e[r]))){for(o in a)p.o(a,o)&&(p.m[o]=a[o]);u&&u(p)}for(r&&r(t);l<i.length;l++)n=i[l],p.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunk_microfrontend_videos_images_container_application_microfrontend_videos_remote=self.webpackChunk_microfrontend_videos_images_container_application_microfrontend_videos_remote||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),p.nc=void 0;var h=p(6084);videos_remote=h})();