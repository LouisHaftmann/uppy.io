"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[1051],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),h=i,c=m["".concat(s,".").concat(h)]||m[h]||d[h]||n;return a?r.createElement(c,o(o({ref:t},u),{},{components:a})):r.createElement(c,o({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1947:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(7462),i=(a(7294),a(3905));const n={title:"Uppy version 0.8 released: The Webcam Edition and Meta Data",date:new Date("2016-08-17T00:00:00.000Z"),author:"arturi",published:!0,slug:"2016/08/0.8.0"},o=void 0,l={permalink:"/uppy.io/pr-preview/pr-40/blog/2016/08/0.8.0",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2016-08-0.8.0.md",source:"@site/blog/2016-08-0.8.0.md",title:"Uppy version 0.8 released: The Webcam Edition and Meta Data",description:"We have just released Uppy 0.8.0 and we can't wait to tell you more about it. Along with various under-the-hood improvements, this release also contains some very visible upgrades. You can read below for further details.",date:"2016-08-17T00:00:00.000Z",formattedDate:"August 17, 2016",tags:[],readingTime:4.295,hasTruncateMarker:!0,authors:[{name:"arturi"}],frontMatter:{title:"Uppy version 0.8 released: The Webcam Edition and Meta Data",date:"2016-08-17T00:00:00.000Z",author:"arturi",published:!0,slug:"2016/08/0.8.0"},prevItem:{title:"Uppy 0.9: Making Progress, then pause & resume. Remote file uploads, Informer.",permalink:"/uppy.io/pr-preview/pr-40/blog/2016/08/0.9.0"},nextItem:{title:"Uppy: let\u2019s teach an old dog some new\xa0tricks",permalink:"/uppy.io/pr-preview/pr-40/blog/2016/06/uppy/begins"}},s={authorsImageUrls:[void 0]},p=[{value:"Including Meta Data",id:"including-meta-data",level:2},{value:"Webcam Support",id:"webcam-support",level:2},{value:"Mime Types and File Icons",id:"mime-types-and-file-icons",level:2},{value:"Previously on Uppy: File Previews, Remote File Handling, Accessibility and Acceptance Tests Stats",id:"previously-on-uppy-file-previews-remote-file-handling-accessibility-and-acceptance-tests-stats",level:2},{value:"Release Notes",id:"release-notes",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We have just released Uppy 0.8.0 and we can't wait to tell you more about it. Along with various under-the-hood improvements, this release also contains some very visible upgrades. You can read below for further details."),(0,i.kt)("h2",{id:"including-meta-data"},"Including Meta Data"),(0,i.kt)("p",null,"While fetching your files, Uppy is now also able to supply some custom metadata to go along with them. So far, there are three components in place for that: Core API (",(0,i.kt)("inlineCode",{parentName:"p"},"core:update-meta")," event), ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaData")," plugin, and a new panel in Dashboard UI called File Card, which looks like this:"),(0,i.kt)("img",{alt:"metadata dashboard UI, editing file name, future size and adding description",src:"/img/blog/0.8/metadata-dashboard.jpg",class:"border"}),(0,i.kt)("p",null,"To summon this panel, all you have to do is click the edit button on the Dashboard:"),(0,i.kt)("img",{alt:"metadata dashboard UI, editing file name, future size and adding description",src:"/img/blog/0.8/uppy-dashboard-ui.jpg",class:"border"}),(0,i.kt)("p",null,"By default, the only active metadata field is ",(0,i.kt)("inlineCode",{parentName:"p"},"Name"),". However, if you want to add other fields you can utilize our new and easy to use ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaData")," plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const uppy = new Uppy()\n  .use(Dashboard)\n  .use(MetaData, {\n    fields: [\n      { id: 'resizeTo', name: 'Resize to', value: 1200, placeholder: 'specify future image size' },\n      { id: 'description', name: 'Description', value: '', placeholder: 'describe what the file is for' },\n    ],\n  })\n")),(0,i.kt)("p",null,"And just like that, we have added two fields: ",(0,i.kt)("inlineCode",{parentName:"p"},"Resize")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Description"),". All metadata is sent along with both ",(0,i.kt)("a",{parentName:"p",href:"http://tus.io"},"tus")," and multipart uploads."),(0,i.kt)("h2",{id:"webcam-support"},"Webcam Support"),(0,i.kt)("p",null,"We have also added a basic ",(0,i.kt)("inlineCode",{parentName:"p"},"Webcam")," plugin, which allows you to acquire images directly from your own webcam. This is still a work in progress and we will be improving it in the next release."),(0,i.kt)("h2",{id:"mime-types-and-file-icons"},"Mime Types and File Icons"),(0,i.kt)("p",null,"Uppy now includes a ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mime-types"},"mime-type")," library that helps us figure out file types by extension."),(0,i.kt)("p",null,"Having proper file types also means that we need the right corresponding file icons for the Dashboard UI. We have already added a few and we will soon supply more icons for audio, video, text, PDF and other common file types."),(0,i.kt)("h2",{id:"previously-on-uppy-file-previews-remote-file-handling-accessibility-and-acceptance-tests-stats"},"Previously on Uppy: File Previews, Remote File Handling, Accessibility and Acceptance Tests Stats"),(0,i.kt)("p",null,"We thought it might be worth taking a moment to list a few highlights from the previous versions as well:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If a file you selected is an image, its preview thumbnail data URL will be generated and added to ",(0,i.kt)("inlineCode",{parentName:"li"},"file.preview")," in Uppy\u2019s state. This URL can be used later to render a preview with any plugin. Currently, this is done by the mighty Dashboard."),(0,i.kt)("li",{parentName:"ul"},"It is now also possible to select remote files in Uppy. Simply double-click a file from, for instance, Google Drive, and Uppy will then show it in a preview area."),(0,i.kt)("li",{parentName:"ul"},"We have been doing some more work on accessibility: from now on, when you switch tabs in Modal, it will focus on the first input in that tab. We have also added proper labels and titles, and are doing more research in this area."),(0,i.kt)("li",{parentName:"ul"},"Everybody likes to see stats. That is why, on our website, you can now ",(0,i.kt)("a",{parentName:"li",href:"http://uppy.io/stats"},"view stats")," that show how acceptance tests are performing in various browsers. If a test is successful, that means Uppy will likely be able to load and upload files in that particular browser."),(0,i.kt)("li",{parentName:"ul"},"The Dashboard UI is now way better looking and easier to work with. It replaced the old ",(0,i.kt)("inlineCode",{parentName:"li"},"Modal")," plugin and it can accept files via drag & drop, local disk and paste (experimental, WIP). It has become our main source of truth and the basic acquire plugin for local files. The DragDrop plugin is still available as a lighter alternative.")),(0,i.kt)("h2",{id:"release-notes"},"Release Notes"),(0,i.kt)("p",null,"Here is the full list of changes for version 0.8.0."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"core: fix bug: no meta information from uppy-server files (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hedgerh"},"@hedgerh"),")"),(0,i.kt)("li",{parentName:"ul"},"core: fix bug: uppy-server file is treated as local and directly uploaded (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hedgerh"},"@hedgerh"),")"),(0,i.kt)("li",{parentName:"ul"},"uppy-server: hammering out websockets/oauth (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hedgerh"},"@hedgerh"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/acconut"},"@acconut"),")"),(0,i.kt)("li",{parentName:"ul"},"debugger: introduce MagicLog as a way to debug state changes in Uppy (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,i.kt)("li",{parentName:"ul"},"modifier: A MetaData plugin to supply meta data (like width, tag, filename, user_id) (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,i.kt)("li",{parentName:"ul"},"modifier: pass custom metadata with non-tus-upload. Maybe mimic meta behavior of tus here, too (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,i.kt)("li",{parentName:"ul"},"modifier: pass custom metadata with tus-upload with tus-js-client (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,i.kt)("li",{parentName:"ul"},"webcam: initial version: webcam light goes on (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hedgerh"},"@hedgerh"),")"),(0,i.kt)("li",{parentName:"ul"},"progress: better icons, styles (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,i.kt)("li",{parentName:"ul"},"core: better mime/type detection (via mime + extension) (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,i.kt)("li",{parentName:"ul"},"core: add deep-freeze to getState so that we are sure we are not mutating state accidentally (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,i.kt)("li",{parentName:"ul"},"meta: release \u201cUppy Begins\u201d post (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kvz"},"@kvz"),")"),(0,i.kt)("li",{parentName:"ul"},"meta: better readme on GitHub and NPM (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,i.kt)("li",{parentName:"ul"},"test: add pre-commit & lint-staged (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,i.kt)("li",{parentName:"ul"},"test: add next-update ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/next-update"},"https://www.npmjs.com/package/next-update")," to check if packages we use can be safely updated (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,i.kt)("li",{parentName:"ul"},"website: blog polish \u2014 add post authors and their gravatars (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,i.kt)("li",{parentName:"ul"},"dashboard: UI revamp, more prototypes, background image, make dashboard nicer (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,i.kt)("li",{parentName:"ul"},"dashboard: try a workflow where import from external service slides over and takes up the whole dashboard screen (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,i.kt)("li",{parentName:"ul"},"modal: merge modal and dashboard (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")")),(0,i.kt)("p",null,"We hope you will enjoy this latest release. Uppy is still improving every day and we hope to bring you more news about our progress soon!"),(0,i.kt)("p",null,"The Uppy Team"))}d.isMDXComponent=!0}}]);