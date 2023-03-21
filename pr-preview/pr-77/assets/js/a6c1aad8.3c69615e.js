"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[6526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},f="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,c=f["".concat(p,".").concat(m)]||f[m]||g[m]||o;return n?r.createElement(c,i(i({ref:t},u),{},{components:n})):r.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[f]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Day 22",date:new Date("2019-04-16T00:00:00.000Z"),author:"kvz",image:"https://uppy.io/img/blog/30daystoliftoff/day22.png",series:"30 Days to Liftoff",seriesSuffix:"of 30",slug:"2019/04/liftoff/22"},i=void 0,l={permalink:"/uppy.io/pr-preview/pr-77/blog/2019/04/liftoff/22",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2019-04-liftoff-22.md",source:"@site/blog/2019-04-liftoff-22.md",title:"Day 22",description:"We will launch Uppy 1.0 on April 25 and this is our '30 Days to Liftoff'",date:"2019-04-16T00:00:00.000Z",formattedDate:"April 16, 2019",tags:[],readingTime:1.72,hasTruncateMarker:!0,authors:[{name:"kvz"}],frontMatter:{title:"Day 22",date:"2019-04-16T00:00:00.000Z",author:"kvz",image:"https://uppy.io/img/blog/30daystoliftoff/day22.png",series:"30 Days to Liftoff",seriesSuffix:"of 30",slug:"2019/04/liftoff/22"},prevItem:{title:"Day 23",permalink:"/uppy.io/pr-preview/pr-77/blog/2019/04/liftoff/23"},nextItem:{title:"Day 21",permalink:"/uppy.io/pr-preview/pr-77/blog/2019/04/liftoff/21"}},p={authorsImageUrls:[void 0]},s=[],u={toc:s},f="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We will launch ",(0,a.kt)("strong",{parentName:"p"},"Uppy 1.0 on April 25")," and this is our '30 Days to Liftoff'\nblog post challenge where we share updates on our progress each day! Let's see\nwhat happened on Day 22."),(0,a.kt)("center",null,(0,a.kt)("br",null),(0,a.kt)("img",{width:"400",src:"/img/blog/30daystoliftoff/day22.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"Artur")," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kvz"},"Kevin")," have\nbeen pairing on\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1443"},"language packs")," and are nearly\ndone with it. Tr\xe8s bien, magnifique!")),(0,a.kt)("center",null,(0,a.kt)("img",{src:"/img/blog/30daystoliftoff/localetodos.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("p",null,"After this, it will be just as easy to maintain language/locale packs as it will\nbe to switch Uppy to your favorite language. Fun fact: we experimented a bit\nwith Google Sheets and Google Translate to automatically create a first swing\nfor a few of the languages we want to launch with."),(0,a.kt)("center",null,(0,a.kt)("a",{rel:"noreferrer noopener",target:"_blank",href:"/img/blog/30daystoliftoff/sheetstranslate.png"},(0,a.kt)("img",{src:"/img/blog/30daystoliftoff/sheetstranslate.png"}))),(0,a.kt)("p",null,"It kinda worked! Google automatically translates to target languages in each\ncolumn we add, for each change we make in the original! In the end, though, we\ndecided this was not the way to go, as it really didn't save us any time. As it\nturns out, starting from a good English version of the text is ",(0,a.kt)("em",{parentName:"p"},"way")," easier than\nmaking sense of a broken Google translation. It was a fun experiment nonetheless\nand it's cool to see where this is all heading!"),(0,a.kt)("p",null,"Artur will also be reviewing the many PRs that have been submitted by both\nTransloadians and outside contributors."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nqst"},"Alex")," finished his redesign for the new website:")),(0,a.kt)("center",null,(0,a.kt)("a",{rel:"noreferrer noopener",target:"_blank",href:"/img/blog/30daystoliftoff/webdesign2.png"},(0,a.kt)("img",{src:"/img/blog/30daystoliftoff/webdesign2.png"}))),(0,a.kt)("p",null,"..and will start implementing it today! He also worked on more\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1452"},"design improvements for Uppy itself"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifedapoolarewaju"},"Ife")," is investigating incorrect progress\nreporting / uploads with XHR and Companion.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/goto-bus-stop"},"Ren\xe9e")," finished work on making Robodog work\nwith an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1450"},"inline dashboard"),", as\nwell as fix a bug in how we log to the console. Up next, Ren\xe9e will work on\nerror reporting for the Transloadit Plugin.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/lakesare"},"Evgenia")," finished her work on\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1440"},"drag and drop improvements"),"\nand will continue working on accessibility improvements."))),(0,a.kt)("p",null,"Stay current by following us on ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/uppy_io"},"Twitter")," or\nsubscribing to regular updates on ",(0,a.kt)("a",{parentName:"p",href:"https://uppy.io/atom.xml"},"RSS"),". See you\ntomorrow for ",(0,a.kt)("a",{parentName:"p",href:"/blog/2019/04/liftoff-23/"},"Day 23"),"!"))}g.isMDXComponent=!0}}]);