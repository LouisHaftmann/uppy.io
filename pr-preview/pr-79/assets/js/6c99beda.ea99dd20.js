"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[4420],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,f=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7625:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"\ud83c\udf84 Uppy 2.1-2.3: Audio plugin, fast and efficient streaming for Companion, production-ready Unsplash, and more",date:new Date("2021-12-15T00:00:00.000Z"),authors:["aduh95","arturi","mifi","murderlon"],image:"https://uppy.io/img/blog/2.1-2.3/audio-cover.jpg",published:!0,slug:"2021/12/2.1/2.3"},i=void 0,p={permalink:"/uppy.io/pr-preview/pr-79/blog/2021/12/2.1/2.3",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2021-12-2.1-2.3.md",source:"@site/blog/2021-12-2.1-2.3.md",title:"\ud83c\udf84 Uppy 2.1-2.3: Audio plugin, fast and efficient streaming for Companion, production-ready Unsplash, and more",description:"Last Christmas, we gave you Uppy 1.24, but",date:"2021-12-15T00:00:00.000Z",formattedDate:"December 15, 2021",tags:[],readingTime:5.075,hasTruncateMarker:!0,authors:[{email:"antoine@transloadit.com",name:"Antoine du Hamel",id:"aduh95",tagline:"Developer",imageURL:"https://github.com/aduh95.png",key:"aduh95"},{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"},{email:"mikael@transloadit.com",name:"Mikael Finstad",id:"mikael",tagline:"Developer",imageURL:"https://github.com/mifi.png",key:"mifi"},{email:"merlijn@transloadit.com",name:"Merlijn Vos",id:"merlijn",tagline:"Developer",imageURL:"https://github.com/murderlon.png",key:"murderlon"}],frontMatter:{title:"\ud83c\udf84 Uppy 2.1-2.3: Audio plugin, fast and efficient streaming for Companion, production-ready Unsplash, and more",date:"2021-12-15T00:00:00.000Z",authors:["aduh95","arturi","mifi","murderlon"],image:"https://uppy.io/img/blog/2.1-2.3/audio-cover.jpg",published:!0,slug:"2021/12/2.1/2.3"},prevItem:{title:"Uppy 2.4-2.7: Image Compressor, Transloadit Rate Limiting, ESM",permalink:"/uppy.io/pr-preview/pr-79/blog/2022/03/2.4/2.7"},nextItem:{title:"Uppy 2.0.0: smaller, faster, modular plugins, Preact X, stricter types, and much more",permalink:"/uppy.io/pr-preview/pr-79/blog/2021/08/2.0"}},l={authorsImageUrls:[void 0,void 0,void 0,void 0]},u=[],s={toc:u},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Last Christmas, we gave you ",(0,a.kt)("a",{parentName:"p",href:"https://uppy.io/blog/2020/12/1.24/"},"Uppy 1.24"),", but\nthis very next year, we\u2019ll take it away (since it\u2019s outdated by now) and give\nyou a brand-new Uppy 2.3 \ud83c\udf81!"),(0,a.kt)("p",null,"After the ",(0,a.kt)("a",{parentName:"p",href:"https://uppy.io/blog/2021/08/2.0/"},"release")," of our latest major\nversion, 2.0.0, we\u2019ve been busy with many things. First of all is the\nlong-awaited Audio plugin to record and upload live audio directly. We then\nworked on adding a fast and efficient streaming interface to Companion and made\nUnsplash production ready. Housekeeping was also part of the job: we made Status\nBar improvements, moved from npm to Yarn 3, did some refactoring, and updated\ndependencies."),(0,a.kt)("p",null,"Last but not least, we got the issue count down from around 110 since 2.0.0 to\naround 45 now."))}d.isMDXComponent=!0}}]);