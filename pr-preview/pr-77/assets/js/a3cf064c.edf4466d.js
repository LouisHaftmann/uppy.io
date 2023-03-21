"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[1970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={title:"Uppy 0.25: Drag & Drop Links Urls & Images, Improved File Selecting in Providers, Interactive Components In i18n",date:new Date("2018-06-07T00:00:00.000Z"),authors:["arturi"],image:"https://uppy.io/img/blog/0.25/new-select-provider.jpg",published:!0,slug:"2018/06/0.25"},i=void 0,l={permalink:"/uppy.io/pr-preview/pr-77/blog/2018/06/0.25",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2018-06-0.25.md",source:"@site/blog/2018-06-0.25.md",title:"Uppy 0.25: Drag & Drop Links Urls & Images, Improved File Selecting in Providers, Interactive Components In i18n",description:"Uppy 0.25 comes with a couple of new features, like drag-and-dropping URLs and",date:"2018-06-07T00:00:00.000Z",formattedDate:"June 7, 2018",tags:[],readingTime:4.4,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 0.25: Drag & Drop Links Urls & Images, Improved File Selecting in Providers, Interactive Components In i18n",date:"2018-06-07T00:00:00.000Z",authors:["arturi"],image:"https://uppy.io/img/blog/0.25/new-select-provider.jpg",published:!0,slug:"2018/06/0.25"},prevItem:{title:"Uppy 0.26: Lerna",permalink:"/uppy.io/pr-preview/pr-77/blog/2018/07/0.26"},nextItem:{title:"Uppy 0.24: Refreshed Dashboard, StatusBar and Provider UI, revamped XHR Response Handling",permalink:"/uppy.io/pr-preview/pr-77/blog/2018/04/0.24"}},p={authorsImageUrls:[void 0]},s=[{value:"Select In Providers",id:"select-in-providers",level:2},{value:"Drag &amp; Drop or Paste Links And Images with the Url Plugin",id:"drag--drop-or-paste-links-and-images-with-the-url-plugin",level:2},{value:"i18n Strings with Interactive Components",id:"i18n-strings-with-interactive-components",level:2},{value:"React Documentation",id:"react-documentation",level:2},{value:"Typescript Definitions",id:"typescript-definitions",level:2},{value:"No need to <code>.run()</code>",id:"no-need-to-run",level:2},{value:"Authorisation tokens in Local Storage",id:"authorisation-tokens-in-local-storage",level:2},{value:"Other Cool Changes",id:"other-cool-changes",level:2}],d={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Uppy 0.25 comes with a couple of new features, like drag-and-dropping URLs and\nimages with the Url plugin, Dashboard modal animation and interactive components\nin i18n strings, as well as a ton of under the hood fixes and improvements."),(0,o.kt)("h2",{id:"select-in-providers"},"Select In Providers"),(0,o.kt)("img",{src:"/img/blog/0.25/new-select-provider.jpg"}),(0,o.kt)("p",null,"Selecting files doesn\u2019t add files to Uppy immediately anymore. Instead a\n\u201cSelect\u201d button appears (with a counter), and pressing that adds all the files\nwith checked checkboxes and closes the Instagram or Google Drive overlay. Cancel\ndiscards the selection and also closes the overlay."),(0,o.kt)("p",null,"This addresses an undesirable case where ",(0,o.kt)("inlineCode",{parentName:"p"},"autoProceed: true")," would begin\nuploading files the moment you ticked a checkbox, and you couldn\u2019t see what was\ngoing on because the provider overlay was still open."),(0,o.kt)("h2",{id:"drag--drop-or-paste-links-and-images-with-the-url-plugin"},"Drag & Drop or Paste Links And Images with the Url Plugin"),(0,o.kt)("p",null,"If you use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/url/"},"Url plugin")," with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/dashboard"},"Dashboard"),",\nyou can now drop or paste URLs into the main Dashboard area. They will\nautomatically be imported by the Url plugin:"),(0,o.kt)("figure",{class:"wide"},(0,o.kt)("video",{alt:"Demo video showing Uppy with Url plugin that accepts drag and dropped urls",autoplay:!0,loop:!0,muted:!0,playsinline:!0},(0,o.kt)("source",{src:"/img/blog/0.25/link-drop-demo.mp4",type:"video/mp4"}),"Your browser does not support the video tag, you can ",(0,o.kt)("a",{href:"/img/blog/0.25/link-drop-demo.mp4"},"download the video")," to watch it.")),(0,o.kt)("h2",{id:"i18n-strings-with-interactive-components"},"i18n Strings with Interactive Components"),(0,o.kt)("p",null,"\u26a0\ufe0f ",(0,o.kt)("strong",{parentName:"p"},"breaking")),(0,o.kt)("p",null,"We\u2019ve changed how i18n strings work with interactive components. We now use a\nplaceholder for e.g. buttons, so it works nicely in languages that have\ndifferent word order than English. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"dropPasteImport: 'Drop files here, paste, import from one of the locations above or %{browse}';\nbrowse: 'browse';\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"%{browse}")," will be replaced with a button/link. Previously, these two strings\nwere concatenated in the view layer, so the ",(0,o.kt)("inlineCode",{parentName:"p"},"browse")," text would always be last."),(0,o.kt)("p",null,"Here\u2019s a list of strings that were changed in this release, please update those\nin your locales:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"core: ",(0,o.kt)("inlineCode",{parentName:"li"},"failedToUpload")," needs to contain ",(0,o.kt)("inlineCode",{parentName:"li"},"%{file}"),", substituted by the name of\nthe file that failed"),(0,o.kt)("li",{parentName:"ul"},"dashboard: ",(0,o.kt)("inlineCode",{parentName:"li"},"dropPaste")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"dropPasteImport")," need to contain ",(0,o.kt)("inlineCode",{parentName:"li"},"%{browse}"),',\nsubstituted by the "browse" text button'),(0,o.kt)("li",{parentName:"ul"},"dashboard: ",(0,o.kt)("inlineCode",{parentName:"li"},"editing")," needs to contain ",(0,o.kt)("inlineCode",{parentName:"li"},"%{file}"),", substituted by the name of\nthe file being edited"),(0,o.kt)("li",{parentName:"ul"},"dashboard: ",(0,o.kt)("inlineCode",{parentName:"li"},"fileSource")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"importFrom")," need to contain ",(0,o.kt)("inlineCode",{parentName:"li"},"%{name}"),",\nsubstituted by the name of the provider"),(0,o.kt)("li",{parentName:"ul"},"dragdrop: ",(0,o.kt)("inlineCode",{parentName:"li"},"dropHereOr")," needs to contain ",(0,o.kt)("inlineCode",{parentName:"li"},"%{browse}"),', substituted by the\n"browse" text button')),(0,o.kt)("p",null,"The full list of available locale strings for each plugin is now documented in\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs/"},"Uppy Docs"),"."),(0,o.kt)("h2",{id:"react-documentation"},"React Documentation"),(0,o.kt)("p",null,"React docs have been improved: we now have a ",(0,o.kt)("a",{parentName:"p",href:"/docs/react/"},"separate page")," for\neach Uppy React wrapper component that we offer."),(0,o.kt)("p",null,"Other improvements in docs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," option is now listed on each plugin's documentation page."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"replaceTargetContent")," option is listed on UI plugin documentation pages."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"locale")," option is described on each plugin documentation page, and\nincludes a short description for each string.")),(0,o.kt)("h2",{id:"typescript-definitions"},"Typescript Definitions"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/taoqf"},"@taoqf")," went ahead and added a lot of type\ndefinitions to Uppy in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/834"},"#834"),". So\nif you are using TypeScript (and even if not, your code editor / linting tool\nlikely supports type definitions), you are in for a treat!"),(0,o.kt)("h2",{id:"no-need-to-run"},"No need to ",(0,o.kt)("inlineCode",{parentName:"h2"},".run()")),(0,o.kt)("p",null,"\u26a0\ufe0f",(0,o.kt)("strong",{parentName:"p"},"breaking")),(0,o.kt)("p",null,"We removed the need to type ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.run()")," in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/793"},"#793"),". You now only have to call\n",(0,o.kt)("inlineCode",{parentName:"p"},".use()")," for the plugins that you need (as usual), and everything is then run\nautomatically. It comes with a few tradeoffs but we were getting a big amount of\nsupport tickets where people forgot to conclude with ",(0,o.kt)("inlineCode",{parentName:"p"},".run()"),", and we saw a\nchance to reduce boilerplate, so we decided to go ahead and pave the cowpath."),(0,o.kt)("h2",{id:"authorisation-tokens-in-local-storage"},"Authorisation tokens in Local Storage"),(0,o.kt)("p",null,"\u26a0\ufe0f",(0,o.kt)("strong",{parentName:"p"},"breaking")),(0,o.kt)("p",null,"Authorisation tokens from Uppy Server are now stored in local storage as opposed\nto cookies. Two primary reasons for this decision are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It avoids CSRF issues which are present when using cookies."),(0,o.kt)("li",{parentName:"ol"},"It allows for less stringent\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/issues/803#issuecomment-386257515"},"CORS policies enforced by browsers"),",\nsince we are no longer sending cookie credentials via Ajax requests.")),(0,o.kt)("p",null,"This is a breaking change because it requires that the Uppy Server version\nshould also be updated to ",(0,o.kt)("strong",{parentName:"p"},"0.13.x")," otherwise there could be unexpected\nbehaviour."),(0,o.kt)("p",null,"What\u2019s more about the Authorisation tokens is that they are now encrypted on the\nserver before being sent down to the client. Subsequent requests from the client\nwill then send the token to the server via headers (not via cookies anymore)."),(0,o.kt)("h2",{id:"other-cool-changes"},"Other Cool Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix: Debounce render calls again, fixes #669 (#796)"),(0,o.kt)("li",{parentName:"ul"},"Fix: XHRUpload canceled uploads progress events (#864)"),(0,o.kt)("li",{parentName:"ul"},"Improvement: Dashboard open/close animation (#852)"),(0,o.kt)("li",{parentName:"ul"},"Improvement: You can now hide action buttons in Dashboard and StatusBar (#821)"),(0,o.kt)("li",{parentName:"ul"},"Improvement: Pass ",(0,o.kt)("inlineCode",{parentName:"li"},"allowedFileTypes")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"maxNumberOfFiles")," to\n",(0,o.kt)("inlineCode",{parentName:"li"},"input[type=file]")," to add restrictions to the system file picking dialog too\n(#814)"),(0,o.kt)("li",{parentName:"ul"},"Improvement: merge meta data when add file (#810)"),(0,o.kt)("li",{parentName:"ul"},"Fix: More robust failure handling for Transloadit, closes #708 (#805)"),(0,o.kt)("li",{parentName:"ul"},"Feature: display username/email in provider view"),(0,o.kt)("li",{parentName:"ul"},"Feature: show message for empty provider files"),(0,o.kt)("li",{parentName:"ul"},"Server: Allow custom headers to be set for remote multipart uploads"),(0,o.kt)("li",{parentName:"ul"},"Server: Add type to metadata as ",(0,o.kt)("inlineCode",{parentName:"li"},"filetype"))),(0,o.kt)("p",null,"\u26a0\ufe0f",(0,o.kt)("strong",{parentName:"p"},"heads up")),(0,o.kt)("p",null,"In the next release we are planning a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/906"},"Lerna conversion"),", meaning that\neach Uppy plugin / module will get its own NPM package. Pretty excited about\nthat one! (but also please refrain from sending us big PRs in the meantime :)"),(0,o.kt)("p",null,"See you in the next one!"),(0,o.kt)("p",null,"The Uppy Team"))}c.isMDXComponent=!0}}]);