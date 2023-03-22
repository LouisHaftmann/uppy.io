"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(n),c=r,h=f["".concat(s,".").concat(c)]||f[c]||m[c]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Day 7",date:new Date("2019-04-01T00:00:00.000Z"),author:"kvz",image:"https://uppy.io/img/blog/30daystoliftoff/day07.png",series:"30 Days to Liftoff",seriesSuffix:"of 30",slug:"2019/04/liftoff/07"},i=void 0,l={permalink:"/uppy.io/pr-preview/pr-79/blog/2019/04/liftoff/07",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2019-04-liftoff-07.md",source:"@site/blog/2019-04-liftoff-07.md",title:"Day 7",description:"Welcome to Day 7 of our ongoing thirty-day blog post challenge toward the Uppy",date:"2019-04-01T00:00:00.000Z",formattedDate:"April 1, 2019",tags:[],readingTime:2.54,hasTruncateMarker:!0,authors:[{name:"kvz"}],frontMatter:{title:"Day 7",date:"2019-04-01T00:00:00.000Z",author:"kvz",image:"https://uppy.io/img/blog/30daystoliftoff/day07.png",series:"30 Days to Liftoff",seriesSuffix:"of 30",slug:"2019/04/liftoff/07"},prevItem:{title:"Day 8",permalink:"/uppy.io/pr-preview/pr-79/blog/2019/04/liftoff/08"},nextItem:{title:"Day 6",permalink:"/uppy.io/pr-preview/pr-79/blog/2019/03/liftoff/06"}},s={authorsImageUrls:[void 0]},p=[{value:"Done",id:"done",level:2},{value:"In Progress",id:"in-progress",level:2}],u={toc:p},f="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to Day 7 of our ongoing thirty-day blog post challenge toward the ",(0,r.kt)("strong",{parentName:"p"},"Uppy\n1.0 release on April 25"),"! With the weekend behind us and all batteries fully\nrecharged, we're ready to start hacking away again at the forest of To Do's that\nlies in front of us."),(0,r.kt)("p",null,"We still have some updates from the end of last week to share with you, and our\nteam is already working hard today on fixing issues and making improvements. So\nlet's jump into it!"),(0,r.kt)("center",null,(0,r.kt)("br",null),(0,r.kt)("img",{width:"400",src:"/img/blog/30daystoliftoff/day07.png"}),(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"done"},"Done"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://transloadit.com/about/#artur"},"Artur")," and\n",(0,r.kt)("a",{parentName:"li",href:"https://transloadit.com/about/#kvz"},"Kevin"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/commit/130b79076c4cee54f1d6045f7ff359d1f46a9c72"},"fixed CI builds"),"\nwith\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/commit/5f4f1cf17e23c195d4a3907d7bb94599ec882ae6"},"new"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/commit/f0ca917a1e238e672540fd1a605c2dee8a81b195"},"npm"),"\nscripts (that now explicitly opt into running Companion via\n",(0,r.kt)("inlineCode",{parentName:"li"},"npm run dev:with-companion"),") and by switching to a newer Chrome version for\nWindows 7 on Saucelabs. Kevin also cut down website deploy times by leveraging\ncache."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://transloadit.com/about/#ife"},"Ife"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/commit/c1abfea33d0c3e80809814c1048b156028c8fcf9"},"fixed"),"\na ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/issues/1390"},"bug")," in XHR Companion\nuploads."),(0,r.kt)("li",{parentName:"ul"},"Then Ife, Artur, and Kevin teamed up for the entire afternoon to deal with\nresumable uploads in RN, and got it to work inside an upload session. You can\nnow hit Pause & Resume! \ud83c\udf89 It does not yet recover after a crash, but more\non that under the ",(0,r.kt)("inlineCode",{parentName:"li"},"In Progress")," section. One of the bigger hurdles addressed\nduring this call was fixing websocket communication between Companion RN, so\nremote uploads done through Companion now report progress to the mobile app."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://transloadit.com/about/#renee"},"Ren\xe9e")," fixed\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1396"},"a TypeScript issue")," for people\nwho do ",(0,r.kt)("inlineCode",{parentName:"li"},"allowSyntheticDefaultImports: false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lakesare"},"Evgenia")," has\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1383"},"removed the jumpiness")," that\noccurred when Uppy was loading."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://transloadit.com/about/#alex"},"Alex")," improved the design of the\nstatusbar for cases where the upload fails. ",(0,r.kt)("br",null)," Before:",(0,r.kt)("br",null),(0,r.kt)("center",null,(0,r.kt)("img",{width:"400",src:"/img/blog/30daystoliftoff/2019-04-liftoff-07a.png"})),"After:",(0,r.kt)("br",null),(0,r.kt)("center",null,(0,r.kt)("img",{width:"400",src:"/img/blog/30daystoliftoff/2019-04-liftoff-07b.png"})))),(0,r.kt)("h2",{id:"in-progress"},"In Progress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As mentioned, resumability in RN doesn't work yet after a crash. To fix this,\nIfe is trying to implement ",(0,r.kt)("a",{parentName:"li",href:"https://tus.io"},"Tus")," fingerprint storing in RN (as\nLocalStorage isn't available there). He'll first finish\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tus/tus-js-client/pull/73/files"},"support for Node.js")," and\nthen add\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tus/tus-js-client#react-native-support"},"React Native support for tus-js-client"),"."),(0,r.kt)("li",{parentName:"ul"},"Artur is working on making our RN example better to look at, showcasing a real\nprogress bar, nice buttons for Pause & Resume, as well as a first iteration on\nfile previews. He'll also be pushing out a release with recent fixes, and give\nEvgenia's early work a smooth landing."),(0,r.kt)("li",{parentName:"ul"},"Ren\xe9e is writing tests to accomodate the change for\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1376"},"better progress reporting")," and\nhas started on Transloadit Assembly Cancellation."),(0,r.kt)("li",{parentName:"ul"},"We're looking at a potentially\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tus/tus-js-client/issues/146"},"big problem")," when using\ntus-js-client inside React Native for large files, stay tuned!"),(0,r.kt)("li",{parentName:"ul"},"Evgenia is working on the dashboard, improving how file previews are justified\nand testing browser compatibility."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alexkolodko"},"Alex Kolodko")," (yes, that is indeed a\ndifferent ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nqst"},"Alex")," \ud83d\ude04) has been drafting up some\nsketches for an iteration on our logo:")),(0,r.kt)("center",null,(0,r.kt)("img",{width:"400",src:"/img/blog/30daystoliftoff/2019-04-liftoff-07c.png"})),(0,r.kt)("p",null,"And that's all the news we have for you today! Catch up with us\n",(0,r.kt)("a",{parentName:"p",href:"/blog/2019/04/liftoff-08/"},"tomorrow")," for more progress on our 30 Days to\nLiftoff! And of course, if you want to make sure you're not missing out on\nanything, feel free to subscribe to our ",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/atom.xml"},"RSS feed"),"\n\ud83d\ude80"))}m.isMDXComponent=!0}}]);