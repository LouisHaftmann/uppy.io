"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5551],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,y=d["".concat(l,".").concat(f)]||d[f]||c[f]||n;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var a=r(7462),o=(r(7294),r(3905));const n={title:"Uppy 1.0: Your best friend in file uploading",date:new Date("2019-04-25T00:00:00.000Z"),author:"arturi",image:"https://uppy.io/img/blog/1.0/uppy-dashboard-1.png",published:!0,slug:"2019/04/1.0"},i=void 0,p={permalink:"/uppy.io/pr-preview/pr-40/blog/2019/04/1.0",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2019-04-1.0.md",source:"@site/blog/2019-04-1.0.md",title:"Uppy 1.0: Your best friend in file uploading",description:"Today, after three years of development, we are launching version 1.0 of Uppy, our file uploader for web browsers.",date:"2019-04-25T00:00:00.000Z",formattedDate:"April 25, 2019",tags:[],readingTime:9.505,hasTruncateMarker:!0,authors:[{name:"arturi"}],frontMatter:{title:"Uppy 1.0: Your best friend in file uploading",date:"2019-04-25T00:00:00.000Z",author:"arturi",image:"https://uppy.io/img/blog/1.0/uppy-dashboard-1.png",published:!0,slug:"2019/04/1.0"},prevItem:{title:"Uppy 1.3: Accessibility and performance, new languages",permalink:"/uppy.io/pr-preview/pr-40/blog/2019/08/1.3"},nextItem:{title:"Day 30",permalink:"/uppy.io/pr-preview/pr-40/blog/2019/04/liftoff/30"}},l={authorsImageUrls:[void 0]},s=[{value:"A little history",id:"a-little-history",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Today, after three years of development, we are launching version 1.0 of Uppy, our file uploader for web browsers."),(0,o.kt)("img",{src:"/img/blog/1.0/uppy-dashboard-1.png"}),(0,o.kt)("h2",{id:"a-little-history"},"A little history"),(0,o.kt)("p",null,"Three years ago, Transloadit was ready to replace their jQuery-based file uploading & processing plugin for browsers with something more modern. They posted a ",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/jobs/2015-10-front-end-developer/"},"job ad")," in search for people to build it:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In general, we\u2019re looking for polished, well tested, carefully crafted products that are delightful to work with and use. So for this job it\u2019s not only important that you know JavaScript, but also how to make things look stunning and work well for end users."),(0,o.kt)("p",{parentName:"blockquote"},"At your disposal are time, focus, and the core team ready to provide feedback, guidance, and anything else you need.")),(0,o.kt)("p",null,"Shortly after, I saw a retweet of this vacancy come across my time line and I decided to apply. That, in a nutshell, is how I got involved with Uppy in the earliest stages of the project."),(0,o.kt)("p",null,"Initially, the idea was to build a proprietary uploader that would work exclusively with Transloadit\u2019s commercial service, but we quickly turned around on it. We felt our version of a file uploader could have a real impact if we made it more widely available. So, just like Transloadit had done before with ",(0,o.kt)("a",{parentName:"p",href:"https://tus.io/"},"Tus"),", we decided to make Uppy an open source solution \u2014 free for anyone to use and hack on. Transloadit support became an optional plugin."),(0,o.kt)("p",null,"Three years, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/stargazers"},"16.000 stargazers"),", getting featured on ",(0,o.kt)("a",{parentName:"p",href:"https://www.smashingmagazine.com/the-smashing-newsletter/smashing-newsletter-issue-197/"},"Smashing Magazine"),", ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/JavaScriptDaily/status/950348390268919809"},"JavaScript Daily"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.producthunt.com/posts/uppy-io"},"Product Hunt"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://survivejs.com/blog/uppy-interview/"},"SurviveJS"),", and a thriving community later\xa0\u2014 and we could not be happier to finally launch Uppy 1.0!"))}c.isMDXComponent=!0}}]);