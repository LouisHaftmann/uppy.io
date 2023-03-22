"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2045],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},142:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={title:"Uppy 0.17: Restrictions",date:new Date("2017-07-11T00:00:00.000Z"),authors:["arturi"],published:!0,slug:"2017/05/0.17"},o=void 0,l={permalink:"/uppy.io/pr-preview/pr-79/blog/2017/05/0.17",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2017-05-0.17.md",source:"@site/blog/2017-05-0.17.md",title:"Uppy 0.17: Restrictions",description:"Hi! We are back with yet another Uppy release that contains some often requested",date:"2017-07-11T00:00:00.000Z",formattedDate:"July 11, 2017",tags:[],readingTime:5.825,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 0.17: Restrictions",date:"2017-07-11T00:00:00.000Z",authors:["arturi"],published:!0,slug:"2017/05/0.17"},prevItem:{title:"The Golden Retriever: Making uploads survive browser crashes",permalink:"/uppy.io/pr-preview/pr-79/blog/2017/07/golden/retriever"},nextItem:{title:"Uppy 0.16: Transloadit!",permalink:"/uppy.io/pr-preview/pr-79/blog/2017/05/0.16"}},s={authorsImageUrls:[void 0]},p=[{value:"\u26a0\ufe0f File Restrictions",id:"\ufe0f-file-restrictions",level:2},{value:"\ud83d\udcf8 Instagram plugin and UI overhaul",id:"-instagram-plugin-and-ui-overhaul",level:2},{value:"StatusBar",id:"statusbar",level:2},{value:"Better file type detection",id:"better-file-type-detection",level:2},{value:"Extracting metadata from <code>&lt;form&gt;</code> inputs",id:"extracting-metadata-from-form-inputs",level:2},{value:"More",id:"more",level:2},{value:"Release Notes",id:"release-notes",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Hi! We are back with yet another Uppy release that contains some often requested\nfeatures such as file restrictions and better file type detection, alongside a\nbrand new Instagram plugin, UI improvements and more!"),(0,n.kt)("h2",{id:"\ufe0f-file-restrictions"},"\u26a0\ufe0f File Restrictions"),(0,n.kt)("p",null,"Something that a few of our biggest fans were asking for, is finally here!\nHere's the gist of it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"Uppy({\n    debug: true,\n    autoProceed: false,\n    restrictions: {\n        maxFileSize: 300000,\n        maxNumberOfFiles: 5,\n        minNumberOfFiles: 2,\n        allowedFileTypes: ['image/*', 'video/*'],\n    },\n    onBeforeFileAdded: (currentFile, files) => {\n        if (currentFile.name === 'my-file.jpg') {\n            return Promise.resolve();\n        }\n        return Promise.reject('This is not the file I was looking for');\n    },\n    onBeforeUpload: (files) => {\n        if (Object.keys(files).length < 2) {\n            return Promise.reject('Too few files :(');\n        }\n        return Promise.resolve();\n    },\n});\n")),(0,n.kt)("p",null,"Basically, there are two ways to set restrictions:"),(0,n.kt)("p",null,"1","."," Using the ",(0,n.kt)("inlineCode",{parentName:"p"},"restrictions")," object in Uppy's core settings:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"restrictions: {\n  maxFileSize: 300000,\n  maxNumberOfFiles: 5,\n  minNumberOfFiles: 2,\n  allowedFileTypes: ['image/*', 'video/*']\n}\n")),(0,n.kt)("p",null,"Translation: allow only images and videos of any type, a minimum of 2 and\nmaximum of 5 files must be selected, 300kb or less."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"allowedFileTypes")," must be an array of strings with supported file mime-types.\nAnything from\n",(0,n.kt)("a",{parentName:"p",href:"https://www.iana.org/assignments/media-types/media-types.xhtml"},"this list"),"\nshould work, as long as Uppy is able to detect it (and Uppy promises to try real\nhard, see below for details). Both wildcards ",(0,n.kt)("inlineCode",{parentName:"p"},"video/*")," and specicifc types\n",(0,n.kt)("inlineCode",{parentName:"p"},"image/jpeg")," are supported!"),(0,n.kt)("p",null,"2","."," Using the more advanced callbacks: ",(0,n.kt)("inlineCode",{parentName:"p"},"onBeforeFileAdded(currentFile, files)"),",\nwhich fires before a file is added and allows you to run whatever checks you\nwish against either the single file that is about to be added or all files\ncurrently selected / uploaded, and ",(0,n.kt)("inlineCode",{parentName:"p"},"onBeforeUpload(files)"),", where you are able\nto check stuff before proceeding with the upload."),(0,n.kt)("p",null,"Basically, use the first option for the simple stuff such as limiting uploads to\nimages or a maximum of three files. Use the second option for things like \u201cwe\nneed users to upload 5 photos and an audio file, so we can make a short clip out\nof it\u201d. Let us know if this suits your needs, we are all \ud83d\udc42ears\ud83d\udc42!"),(0,n.kt)("p",null,"Also, a new ",(0,n.kt)("inlineCode",{parentName:"p"},"note")," option has been added to the Dashboard, as a quick and easy\nway to inform users about the restrictions you choose to set up:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Dashboard, {\n    note: 'Images and video only, 300kb or less',\n});\n")),(0,n.kt)("img",{className:"border",src:"/img/blog/0.17/restrictions-note.jpg"}),(0,n.kt)("h2",{id:"-instagram-plugin-and-ui-overhaul"},"\ud83d\udcf8 Instagram plugin and UI overhaul"),(0,n.kt)("p",null,"Yes, Instagram is now supported in Uppy, so you can easily import all of your\ncat, dog and food pictures!"),(0,n.kt)("figure",{class:"wide"},(0,n.kt)("img",{className:"border",src:"/img/blog/0.17/instagram-ui.jpg"})),(0,n.kt)("p",null,"You can try it live in the\n",(0,n.kt)("a",{parentName:"p",href:"https://uppy.io/examples/dashboard/"},"Dashboard example"),"."),(0,n.kt)("p",null,"The UI for all \u201cprovider\u201d plugins, which is the way we call Google Drive,\nDropbox and other external services, have been revamped to make better use of\nthe space."),(0,n.kt)("p",null,"Files are now selected, or added, on click/tap, rather than double click, which\nis easier and also works on mobile. \ud83d\ude40"),(0,n.kt)("img",{className:"border",src:"/img/blog/0.17/provider-search.jpg"}),(0,n.kt)("h2",{id:"statusbar"},"StatusBar"),(0,n.kt)("p",null,"The Dashboard\u2019s StatusBar has been improved. First of all, even though it still\ncomes bundled with the Dashboard like before, it is now a separate plugin that\ncan be used anywhere, like with the Drag and Drop plugin or your own custom\nthing. Furthermore, it now shows fatal upload errors in addition to the upload /\nprocessing / transcoding progress. \ud83d\udcaa"),(0,n.kt)("p",null,"In the Dashboard, you can now disable the StatusBar and/or Informer if you don\u2019t\nneed them or want something custom, by setting ",(0,n.kt)("inlineCode",{parentName:"p"},"disableStatusBar: true")," and\n",(0,n.kt)("inlineCode",{parentName:"p"},"disableInformer: true"),"."),(0,n.kt)("p",null,"Details: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/217"},"#217")),(0,n.kt)("h2",{id:"better-file-type-detection"},"Better file type detection"),(0,n.kt)("p",null,"We\u2019ve added a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/file-type"},(0,n.kt)("inlineCode",{parentName:"a"},"file-type"))," module\nthat helps with figuring out the file type by reading the first magic bytes of\nthe file. If that doesn\u2019t work, we try to use the mime-type provided by the\nsystem/browser, and if that is still a dead end, we attempt to figure it out by\nextension. All in all, this leads to a more robust file type detecting\nexperience. Personally, I\u2019m just happy my Sex and the City \ud83c\udf78 ",(0,n.kt)("inlineCode",{parentName:"p"},".avi")," files are\nnow recognized as ",(0,n.kt)("inlineCode",{parentName:"p"},"video")," on a Mac!"),(0,n.kt)("p",null,"Further details can be found here:\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/219"},"#219")),(0,n.kt)("h2",{id:"extracting-metadata-from-form-inputs"},"Extracting metadata from ",(0,n.kt)("inlineCode",{parentName:"h2"},"<form>")," inputs"),(0,n.kt)("p",null,"If a plugin\u2019s ",(0,n.kt)("inlineCode",{parentName:"p"},"target")," is a ",(0,n.kt)("inlineCode",{parentName:"p"},"form")," element, we are going to try to extract all\nthe data from that form\u2019s inputs and add it as ",(0,n.kt)("inlineCode",{parentName:"p"},"meta")," to Uppy\u2019s state. That\n",(0,n.kt)("inlineCode",{parentName:"p"},"meta")," is then merged with file\u2019s meta when it is being added."),(0,n.kt)("p",null,"Uppy\u2019s core options have received a new ",(0,n.kt)("inlineCode",{parentName:"p"},"meta")," property, where you can define\nsome metadata from the start, as well as a new ",(0,n.kt)("inlineCode",{parentName:"p"},"setMeta")," method that can be\ncalled at any time."),(0,n.kt)("p",null,"See here for more details: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/238"},"#238")),(0,n.kt)("h2",{id:"more"},"More"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added a ",(0,n.kt)("inlineCode",{parentName:"li"},"reset()")," method that stops uploads, clears files and totalProgress,\nand restores things to the way they were on initialization, before user\ninteractions ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/226"},"#226")),(0,n.kt)("li",{parentName:"ul"},"Support for headers in Multipart plugin\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/224"},"#224")),(0,n.kt)("li",{parentName:"ul"},"Set bytesUploaded/bytesTotal as soon as the file is added, fixes a ",(0,n.kt)("inlineCode",{parentName:"li"},"NaN")," issue\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/232"},"#232"))),(0,n.kt)("h2",{id:"release-notes"},"Release Notes"),(0,n.kt)("p",null,"Here is the full list of changes for version 0.17:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"core: added restrictions \u2014 by file type, size, number of files (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"provider: improved UI: improve overall look, breadcrumbs, more responsive\n(@arturi)"),(0,n.kt)("li",{parentName:"ul"},"core: css-in-js demos, try template-css (@arturi @goto-bus-stop #239)"),(0,n.kt)("li",{parentName:"ul"},"core: added ",(0,n.kt)("inlineCode",{parentName:"li"},"uppy.reset()")," as discussed in #179 (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"core: added nanoraf\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/yoshuawuyts/choo/pull/135/files?diff=unified"},"https://github.com/yoshuawuyts/choo/pull/135/files?diff=unified"),"\n(@goto-bus-stop, @arturi)"),(0,n.kt)("li",{parentName:"ul"},"core: file type detection: archives, markdown (possible modules: file-type,\nidentify-filetype) example:\n",(0,n.kt)("a",{parentName:"li",href:"http://requirebin.com/?gist=f9bea9602030f1320a227cf7f140c45f"},"http://requirebin.com/?gist=f9bea9602030f1320a227cf7f140c45f"),",\n",(0,n.kt)("a",{parentName:"li",href:"http://stackoverflow.com/a/29672957"},"http://stackoverflow.com/a/29672957")," (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"dashboard: made file icons prettier:\n",(0,n.kt)("a",{parentName:"li",href:"https://uppy.io/img/blog/0.16/service-logos.png"},"https://uppy.io/img/blog/0.16/service-logos.png")," (@arturi, @nqst / #215)"),(0,n.kt)("li",{parentName:"ul"},"fileinput: allow retrieving fields/options from form (@arturi #153)"),(0,n.kt)("li",{parentName:"ul"},"server: configurable server port (@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"server: added support for custom providers (@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"statusbar: also show major errors, add \u201cerror\u201d state (@goto-bus-stop)"),(0,n.kt)("li",{parentName:"ul"},"statusbar: pre/postprocessing status updates in the StatusBar (@goto-bus-stop,\n#202)"),(0,n.kt)("li",{parentName:"ul"},"statusbar: show status \u201cUpload started...\u201d when the remote upload has begun,\nbut no progress events received yet (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"statusbar: work towards extracting StatusBar to a separate plugin, still\nbundle it with Dashboard (@goto-bus-stop, @arturi)"),(0,n.kt)("li",{parentName:"ul"},"tus/uppy-server: support metadata in remote tus uploads (@ifedapoolarewaju,\n@goto-bus-stop / #210)"),(0,n.kt)("li",{parentName:"ul"},"uploaders: added direct-to-s3 upload plugin and test it with the flow to then\nupload to transloadit, stage 1, WIP (@goto-bus-stop)"),(0,n.kt)("li",{parentName:"ul"},"uppy/uppy-server: Made a barely working Instagram Plugin (@ifedapoolarewaju /\n#21)"),(0,n.kt)("li",{parentName:"ul"},"uppy/uppy-server: allow google drive/dropbox non-tus (i.e multipart) remote\nuploads (@arturi, @ifedapoolarewaju / #205)"),(0,n.kt)("li",{parentName:"ul"},"uppy/uppy-server: do not show files that cannot be downloaded from Google\nDrive (@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"uppy: fixed Google Drive uploads on mobile (double click issue) (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"core: updated prettier-bytes to fix the IE support issue\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Flet/prettier-bytes/issues/3"},"https://github.com/Flet/prettier-bytes/issues/3")," (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"core: use URL.createObjectURL instead of resizing thumbnails (@arturi,\n@goto-bus-stop / #199)"),(0,n.kt)("li",{parentName:"ul"},"dashboard: fixed ETA when multiple files are being uploaded (@goto-bus-stop,\n#197)"),(0,n.kt)("li",{parentName:"ul"},"transloadit: fixed receiving assembly results that are not related to an input\nfile (@arturi, @goto-bus-stop / #201)"),(0,n.kt)("li",{parentName:"ul"},"transloadit: use the ",(0,n.kt)("inlineCode",{parentName:"li"},"tus_upload_url")," to reliably link assembly results with\ntheir input files (@goto-bus-stop / #207)"),(0,n.kt)("li",{parentName:"ul"},"transloadit: moved user-facing strings into locale option (@goto-bus-stop /\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/commit/87a22e7ee37b6fa3754fa34868516a6700306b60"},"https://github.com/transloadit/uppy/commit/87a22e7ee37b6fa3754fa34868516a6700306b60"),")"),(0,n.kt)("li",{parentName:"ul"},"webcam: mute audio in realtime playback (@goto-bus-stop / #196)"),(0,n.kt)("li",{parentName:"ul"},"temporarily downgrade yo-yoify, until shama/yo-yoify#45 is resolved (@arturi /\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/commit/6292b96"},"https://github.com/transloadit/uppy/commit/6292b96"),")")),(0,n.kt)("p",null,"Enjoy!"),(0,n.kt)("p",null,"The Uppy Team"))}m.isMDXComponent=!0}}]);