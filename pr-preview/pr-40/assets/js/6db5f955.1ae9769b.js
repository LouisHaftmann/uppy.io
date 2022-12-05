"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[7630],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(f,p(p({ref:t},u),{},{components:r})):a.createElement(f,p({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var s=2;s<o;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={title:"Uppy 0.19: Tests, Informer details and better\xa0APIs",image:"https://uppy.io/img/blog/0.19/informer-details.jpg",date:new Date("2017-09-21T00:00:00.000Z"),author:"arturi",published:!0,slug:"2017/09/0.19"},p=void 0,l={permalink:"/uppy.io/pr-preview/pr-40/blog/2017/09/0.19",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2017-09-0.19.md",source:"@site/blog/2017-09-0.19.md",title:"Uppy 0.19: Tests, Informer details and better\xa0APIs",description:"Hello! The 0.19 release is about internal fixes, optimizations and refactoring, as well as some work on PRs that we\u2019ll hopefully tell you about soon!",date:"2017-09-21T00:00:00.000Z",formattedDate:"September 21, 2017",tags:[],readingTime:3.27,hasTruncateMarker:!0,authors:[{name:"arturi"}],frontMatter:{title:"Uppy 0.19: Tests, Informer details and better\xa0APIs",image:"https://uppy.io/img/blog/0.19/informer-details.jpg",date:"2017-09-21T00:00:00.000Z",author:"arturi",published:!0,slug:"2017/09/0.19"},prevItem:{title:"Uppy 0.20: React, Retry & Time Travel",permalink:"/uppy.io/pr-preview/pr-40/blog/2017/10/0.20"},nextItem:{title:"Uppy 0.18: Dogumentation and The GoldenRetriever",permalink:"/uppy.io/pr-preview/pr-40/blog/2017/08/0.18"}},i={authorsImageUrls:[void 0]},s=[{value:"Jest tests",id:"jest-tests",level:2},{value:"Dashboard APIs",id:"dashboard-apis",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Hello! The ",(0,n.kt)("inlineCode",{parentName:"p"},"0.19")," release is about internal fixes, optimizations and refactoring, as well as some work on PRs that we\u2019ll hopefully tell you about soon!"),(0,n.kt)("h2",{id:"jest-tests"},"Jest tests"),(0,n.kt)("p",null,"Thanks to our contributer, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/richardwillars"},"@richardwillars"),", and following the example set by Uppy Server, we\u2019ve ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/310"},"switched to Jest")," for Uppy\u2019s unit tests, and added a bunch of new tests as well. And even more are being ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/346"},"added")," as we speak!"),(0,n.kt)("p",null,"We're also happy to report that ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy-server/compare/3341a9592d0723fd9b58ec77d8c762f20b434704...d3c6f5b409d08f588d1704b77181e5c0342ca322"},"more tests")," have been added for Uppy Server."),(0,n.kt)("h2",{id:"dashboard-apis"},"Dashboard APIs"),(0,n.kt)("p",null,"We\u2019ve exposed ",(0,n.kt)("inlineCode",{parentName:"p"},"show/hide/isOpen")," APIs for the Dashboard UI plugin. Now you can open and close the modal dialog programmatically:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const modal = uppy.getPlugin('Dashboard')\nmodal.show()\n\n// ...\n\nbutton.addEventListener('click', () => {\n  if (modal.isOpen()) {\n    modal.hide()\n  } else {\n    modal.show()\n  }\n})\n")),(0,n.kt)("p",null,"Check out ",(0,n.kt)("a",{parentName:"p",href:"https://uppy.io/docs/dashboard/#Methods"},"the docs"),"."))}d.isMDXComponent=!0}}]);