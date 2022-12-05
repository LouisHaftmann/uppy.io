"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[4165],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6101:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={title:"Uppy 0.28: A look behind the scenes",date:new Date("2018-11-05T00:00:00.000Z"),author:"renee",image:"https://uppy.io/img/blog/0.28/dashboard-uploading.jpg",published:!0,slug:"2018/10/0.28"},i=void 0,l={permalink:"/uppy.io/pr-preview/pr-40/blog/2018/10/0.28",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2018-10-0.28.md",source:"@site/blog/2018-10-0.28.md",title:"Uppy 0.28: A look behind the scenes",description:"In 0.28, we are introducing a new \u201cSingle Upload\u201d mode, improving on the Status Bar plugin with a spinner and different pause/resume/cancel buttons. We'll also share some progress on bringing back unified locale packs and a Transloadit Preset \ud83c\udf41",date:"2018-11-05T00:00:00.000Z",formattedDate:"November 5, 2018",tags:[],readingTime:4.71,hasTruncateMarker:!0,authors:[{name:"renee"}],frontMatter:{title:"Uppy 0.28: A look behind the scenes",date:"2018-11-05T00:00:00.000Z",author:"renee",image:"https://uppy.io/img/blog/0.28/dashboard-uploading.jpg",published:!0,slug:"2018/10/0.28"},prevItem:{title:"Uppy 0.29: separate Core and Plugin styles, React Native in tus-js-client",permalink:"/uppy.io/pr-preview/pr-40/blog/2018/12/0.29"},nextItem:{title:"Uppy 0.27: First Swing at React Native Support",permalink:"/uppy.io/pr-preview/pr-40/blog/2018/08/0.27"}},s={authorsImageUrls:[void 0]},p=[{value:"Single Uploads",id:"single-uploads",level:2},{value:"Status Bar improvements",id:"status-bar-improvements",level:2},{value:"Locale packs",id:"locale-packs",level:2},{value:"Hosted Companion with Transloadit",id:"hosted-companion-with-transloadit",level:2},{value:"Transloadit Preset",id:"transloadit-preset",level:2},{value:"Other Cool Changes",id:"other-cool-changes",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{class:"border",src:"/img/blog/0.28/dashboard-uploading.jpg"}),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"0.28"),", we are introducing a new \u201cSingle Upload\u201d mode, improving on the Status Bar plugin with a spinner and different pause/resume/cancel buttons. We'll also share some progress on bringing back unified locale packs and a Transloadit Preset \ud83c\udf41"),(0,o.kt)("h2",{id:"single-uploads"},"Single Uploads"),(0,o.kt)("p",null,"Uppy has been flexible about uploading lots of things from the start. You can add files at any time, even after uploads have already started. This is neat, but not always the desired behaviour: sometimes, you just want to upload a few files together with a form. In that case, it's useful to allow users to only upload a set of files ",(0,o.kt)("em",{parentName:"p"},"once"),". 0.28.0 adds some options to help with that!"),(0,o.kt)("p",null,'An upload in Uppy terminology can be more than one file. Users can add a bunch of files and when they press "Upload", all those files are bunched up into an upload. They can then add more files and press the "Upload" button again: the ',(0,o.kt)("em",{parentName:"p"},"new")," files are bunched into a second upload."),(0,o.kt)("p",null,"The new ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/uppy/#allowMultipleUploads-true"},(0,o.kt)("inlineCode",{parentName:"a"},"allowMultipleUploads"))," option in Uppy Core can be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),' to only allow a single one of those uploads. Once an upload is started, the Dashboard and Status Bar no longer show "add files" and "upload" buttons. You can listen for a \'complete\' event and then safely continue your app\'s form flow.'),(0,o.kt)("p",null,"The Dashboard also has a new option: ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/dashboard/#closeAfterFinish-false"},(0,o.kt)("inlineCode",{parentName:"a"},"closeAfterFinish")),". When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the modal Dashboard will automatically hide once an upload has completed. You should only use this option in conjunction with ",(0,o.kt)("inlineCode",{parentName:"p"},"allowMultipleUploads"),", otherwise it might close the Dashboard when the user isn't done yet! It can only be used with the modal Dashboard, when ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/dashboard/#inline-false"},(0,o.kt)("inlineCode",{parentName:"a"},"inline"))," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),'. "Closing" an inline Dashboard makes no sense \ud83d\ude04 You will see a warning in the console in both cases, so you don\'t have to remember all that.'),(0,o.kt)("p",null,"Speaking of the Dashboard, it now also shows more statuses in the title bar: \u201cUpload complete\u201d, \u201cUpload paused\u201d, \u201cProcessing 5 files\u201d and \u201cUploading 5 files\u201d."),(0,o.kt)("h2",{id:"status-bar-improvements"},"Status Bar improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u26a0\ufe0f ",(0,o.kt)("strong",{parentName:"li"},"breaking")," We\u2019ve added separate options for hiding pause/resume and cancel buttons. So now there are several options for buttons: ",(0,o.kt)("inlineCode",{parentName:"li"},"hideUploadButton"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"hideRetryButton"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"hidePauseResumeButton")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"hideCancelButton"),". These options can be passed from the Dashboard, if you are not using Status Bar separately (most common case). See the docs for more info: ",(0,o.kt)("a",{parentName:"li",href:"https://uppy.io/docs/status-bar/"},"https://uppy.io/docs/status-bar/"),"."),(0,o.kt)("li",{parentName:"ul"},"The Status Bar now features a spinner animation when upload is in progress."),(0,o.kt)("li",{parentName:"ul"},"Encoding (with the Transloadit plugin, for example) and uploading progress now get different colors, so it\u2019s easier to tell what\u2019s happening, visually.")),(0,o.kt)("img",{class:"border",style:{borderTop:0},src:"/img/blog/0.28/status-bar-uploading.png"}),(0,o.kt)("img",{class:"border",style:{borderTop:0},src:"/img/blog/0.28/status-bar-paused.png"}),(0,o.kt)("img",{class:"border",style:{borderTop:0},src:"/img/blog/0.28/status-bar-encoding.png"}),(0,o.kt)("img",{class:"border",style:{borderTop:0},src:"/img/blog/0.28/status-bar-complete.png"}),(0,o.kt)("h2",{id:"locale-packs"},"Locale packs"),(0,o.kt)("p",null,"In the beginning, we used to have unified locale packs for text strings in Uppy \u2014 English, Russian, German, Polish, etc. Then we made a switch to per-plugin locales, and the ability to load one file with locale strings in any language (locale pack) was lost for a while. This release is the first step in bringing this functionality back."),(0,o.kt)("p",null,"With this change, you can load a locale pack like so: ",(0,o.kt)("inlineCode",{parentName:"p"},"const uppy = Uppy({locale: german})"),", then still override specific strings in a certain plugin, if needed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const uppy = Uppy({ locale: german })\nuppy.use(Dashboard, {\n  trigger: '#pick-files',\n  locale: {\n    strings: {\n      dropPasteImport: 'Something else here, %{browse} or this',\n    },\n  },\n})\n")),(0,o.kt)("p",null,"The benefit to this is that there will be a central point of configuration for languages, so there could be language packs with strings for, e.g., Czech at @uppy/lang-cz (or @uppy/langs/cz) that would be very easy to contribute to (or use)."),(0,o.kt)("p",null,"After Uppy 0.28.0, this functionality is technically possible, but we still need to update and publish locale packs for multiple languages."),(0,o.kt)("h2",{id:"hosted-companion-with-transloadit"},"Hosted Companion with Transloadit"),(0,o.kt)("p",null,"When using remote providers such as Google Drive and Dropbox, so that your users can pick files from these sources, you can host ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/companion/"},"Companion")," yourself, or use the one provided by Transloadit. And to simplify the latter, you can now use ",(0,o.kt)("inlineCode",{parentName:"p"},"Transloadit.COMPANION")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Transloadit.COMPANION_PATTERN")," constants in remote provider options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const Dropbox = require('@uppy/dropbox')\nconst Transloadit = require('@uppy/transloadit')\n\nuppy.use(Dropbox, {\n  serverUrl: Transloadit.COMPANION,\n  serverPattern: Transloadit.COMPANION_PATTERN\n})\n")),(0,o.kt)("p",null,"Please see ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/transloadit/"},"Transloadit plugin documentation")," for more details."),(0,o.kt)("h2",{id:"transloadit-preset"},"Transloadit Preset"),(0,o.kt)("p",null,"Lately, we've been working on a wrapper package around Uppy and the ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/transloadit/"},"Transloadit plugin")," that will make common Transloadit-based workflows much simpler to implement. It's not ready just yet, but it should land in the next month!"),(0,o.kt)("p",null,'This "preset" will provide three or so simple methods:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transloadit.form()"),", to enhance a form with existing file ",(0,o.kt)("inlineCode",{parentName:"li"},"<input>"),"s with Transloadit encoding capabilities, powered by Uppy's resilient uploading plugins"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transloadit.modal()"),", to show a one-off modal Dashboard that uploads to Transloadit's encoding backend"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transloadit.upload()"),", to instruct Uppy to upload files, using your own UI instead")),(0,o.kt)("p",null,"Stay tuned!"),(0,o.kt)("h2",{id:"other-cool-changes"},"Other Cool Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@uppy/core: \u26a0\ufe0f ",(0,o.kt)("strong",{parentName:"li"},"breaking")," remove ",(0,o.kt)("inlineCode",{parentName:"li"},"upload-cancel")," event, ",(0,o.kt)("inlineCode",{parentName:"li"},"file-removed")," should be enough, see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1069"},"#1069")," for details"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: \u26a0\ufe0f ",(0,o.kt)("strong",{parentName:"li"},"breaking")," Migrated provider adapter to Companion: saves 5KB on the frontend, all heavy lifting moved to the server side"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: Removed an erroneous TypeScript dependency that added 40MB to the install size"),(0,o.kt)("li",{parentName:"ul"},"@uppy/thumbnail-generator: You can now constrain thumbnail height, thanks to @richartkeil, see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1096"},"#1096")," for documentation (we are planning to add real Thumbnail Generator documentation soon, too!)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/webcam: Fix getting data from Webcam recording if mime type includes codec metadata (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1094"},"#1094")," / @goto-bus-stop)"),(0,o.kt)("li",{parentName:"ul"},"meta: Added integration tests (in real browsers, thanks to Sauce Labs) for @uppy/url, @uppy/transloadit and @uppy/thumbnail-generator \ud83d\ude80")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md#0280"},"full changelog (0.28 and 0.27.x patches) for more")),(0,o.kt)("p",null,"See you in the next release!"),(0,o.kt)("p",null,"The Uppy Team"))}d.isMDXComponent=!0}}]);