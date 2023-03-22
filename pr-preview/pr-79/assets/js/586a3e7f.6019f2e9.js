"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,y=c["".concat(l,".").concat(m)]||c[m]||f[m]||o;return n?r.createElement(y,p(p({ref:t},u),{},{components:n})):r.createElement(y,p({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Day 23",date:new Date("2019-04-17T00:00:00.000Z"),author:"samuel",image:"https://uppy.io/img/blog/30daystoliftoff/day23.png",series:"30 Days to Liftoff",seriesSuffix:"of 30",slug:"2019/04/liftoff/23"},p=void 0,i={permalink:"/uppy.io/pr-preview/pr-79/blog/2019/04/liftoff/23",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2019-04-liftoff-23.md",source:"@site/blog/2019-04-liftoff-23.md",title:"Day 23",description:"Hello and welcome to Day 23 of our '30 Days to Liftoff' blog post challenge. The",date:"2019-04-17T00:00:00.000Z",formattedDate:"April 17, 2019",tags:[],readingTime:1.525,hasTruncateMarker:!0,authors:[{name:"samuel"}],frontMatter:{title:"Day 23",date:"2019-04-17T00:00:00.000Z",author:"samuel",image:"https://uppy.io/img/blog/30daystoliftoff/day23.png",series:"30 Days to Liftoff",seriesSuffix:"of 30",slug:"2019/04/liftoff/23"},prevItem:{title:"Day 24",permalink:"/uppy.io/pr-preview/pr-79/blog/2019/04/liftoff/24"},nextItem:{title:"Day 22",permalink:"/uppy.io/pr-preview/pr-79/blog/2019/04/liftoff/22"}},l={authorsImageUrls:[void 0]},s=[],u={toc:s},c="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hello and welcome to Day 23 of our '30 Days to Liftoff' blog post challenge. The\nlaunch date for ",(0,a.kt)("strong",{parentName:"p"},"Uppy 1.0")," is still set for ",(0,a.kt)("strong",{parentName:"p"},"April the 25th")," and a lot of\nwork is ongoing to make it happen. Let's take a look at the updates for today!"),(0,a.kt)("center",null,(0,a.kt)("br",null),(0,a.kt)("img",{width:"400",src:"/img/blog/30daystoliftoff/day23.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"Artur")," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kvz"},"Kevin"),(0,a.kt)("strong",{parentName:"li"},"finished")," the implementation of\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1443"},"language packs")," so that you\ncan now display Uppy in your (user's) local Language. Here is a quick example\non how it is intended for use:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// npm install @uppy/locales --save\nconst russianLocale = require('@uppy/locales/lib/ru_RU');\n\nconst uppy = Uppy({\n    locale: russianLocale,\n});\n")),(0,a.kt)("p",null,"and if you'd use the CDN version of Uppy (instead of bundling and hosting\nyourself:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://releases.transloadit.com/uppy/v0.30.5/uppy.min.js"><\/script>\n<script src="https://releases.transloadit.com/uppy/v0.30.5/locales/ru_RU.min.js"><\/script>\n<script>\nvar uppy = Uppy.Core({\n  locale: Uppy.locales.ru_RU\n})\n<script>\n')),(0,a.kt)("p",null,"While the new locale packs weren't finished, we had to reject updates to the old\nlocales, and quickly became outdated for which we are very sorry. To all\nlanguage contributors, we hope you can forgive us, and that you're willing to\ntranslate the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/packages/%40uppy/locales/src/en_US.js"},"updated en_US locale"),"\nto your own language! This time we promise your contributions will make it to\n1.0!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/nqst"},"Alex")," continues to work on a\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1452"},"new design for the uppy.io website"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifedapoolarewaju"},"Ife")," finished updating Companion to\nreport ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1454"},"better progress")," when\nit's downloading something that it needs to upload to an XHR target.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/goto-bus-stop"},"Ren\xe9e")," is working on error reporting for\nthe Transloadit plugin as mentioned yesterday, which notifies us of\nconnectivity problems when they occur.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/lakesare"},"Evgenia")," continues her work on browser\ncompatibility for dropping or pasting URLs."))),(0,a.kt)("p",null,"On that note, Day 23 of our thirty-day challenge comes to an end. Tomorrow looks\nlike it will be another exciting day, so don't hesitate to keep checking up on\nus via ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/uppy_io"},"Twitter")," or\n",(0,a.kt)("a",{parentName:"p",href:"https://uppy.io/atom.xml"},"RSS"),"!"))}f.isMDXComponent=!0}}]);