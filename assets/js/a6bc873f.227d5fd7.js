"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[6969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={title:"Uppy 3.0: Future-proof, conveniently easy, stable as ever",date:new Date("2022-09-13T00:00:00.000Z"),authors:["aduh95","arturi","mifi","murderlon"],image:"https://uppy.io/img/blog/3.0/uppy-3-0.jpg",published:!0,slug:"2022/09/3.0"},i=void 0,s={permalink:"/uppy.io/blog/2022/09/3.0",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2022-09-3.0.md",source:"@site/blog/2022-09-3.0.md",title:"Uppy 3.0: Future-proof, conveniently easy, stable as ever",description:"Screenshot of Uppy 3.0.0 UI",date:"2022-09-13T00:00:00.000Z",formattedDate:"September 13, 2022",tags:[],readingTime:6.68,hasTruncateMarker:!0,authors:[{email:"antoine@transloadit.com",name:"Antoine du Hamel",id:"aduh95",tagline:"Developer",imageURL:"https://github.com/aduh95.png",key:"aduh95"},{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"},{email:"mikael@transloadit.com",name:"Mikael Finstad",id:"mikael",tagline:"Developer",imageURL:"https://github.com/mifi.png",key:"mifi"},{email:"merlijn@transloadit.com",name:"Merlijn Vos",id:"merlijn",tagline:"Developer",imageURL:"https://github.com/murderlon.png",key:"murderlon"}],frontMatter:{title:"Uppy 3.0: Future-proof, conveniently easy, stable as ever",date:"2022-09-13T00:00:00.000Z",authors:["aduh95","arturi","mifi","murderlon"],image:"https://uppy.io/img/blog/3.0/uppy-3-0.jpg",published:!0,slug:"2022/09/3.0"},prevItem:{title:"\ud83c\udf84 Uppy 3.1-3.3: Improved AWS S3 Multipart, Single File Mode",permalink:"/uppy.io/blog/2022/12/3.3"},nextItem:{title:"Uppy 2.4-2.7: Image Compressor, Transloadit Rate Limiting, ESM",permalink:"/uppy.io/blog/2022/03/2.4/2.7"}},l={authorsImageUrls:[void 0,void 0,void 0,void 0]},p=[{value:"ESM surgery",id:"esm-surgery",level:2},{value:"Less integration code with the new remote sources preset",id:"less-integration-code-with-the-new-remote-sources-preset",level:2},{value:"Robodog ends its service",id:"robodog-ends-its-service",level:2},{value:"Native mobile camera",id:"native-mobile-camera",level:2},{value:"Devotedly stable",id:"devotedly-stable",level:2},{value:"Companion turns 4.0",id:"companion-turns-40",level:2},{value:"Streaming upload",id:"streaming-upload",level:3},{value:"Event emitter",id:"event-emitter",level:3},{value:"Internal improvements",id:"internal-improvements",level:3},{value:"And more!",id:"and-more",level:3}],u={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of Uppy 3.0.0 UI",src:n(6397).Z,width:"1200",height:"630"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For those new to Uppy, coming from Reddit, Hacker News and Product Hunt today:\nUppy is a popular open source file uploader for the browser. Pick files from\nlocal disk or camera, remote sources like Instagram, Unsplash, Dropbox etc,\nrecord audio and screencasts. Crop and tweak images with the image editor\nplugin. Supports resumable uploads to a tus.io server, AWS S3 (and many others\nwith similar API like DigitalOcean), multipart.\n",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/examples/dashboard"},"Try it"),"!")),(0,o.kt)("p",null,"Uppy is turning three! When you\u2019re counting in\n",(0,o.kt)("a",{parentName:"p",href:"https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/"},"dog years"),"\n\u2013 which we most certainly are \u2013 that\u2019s 29 already. An age like that signifies\nproper adulthood. For Uppy, this means it\u2019s ready to stay loyal, but without the\nsilly mistakes (read: bugs). Uppy also underwent (ESM) surgery to keep it\nstrolling by your side in the current ecosystem, and received other behavioral\nimprovements \ud83d\udc36"),(0,o.kt)("p",null,"TL;DR: ESM transition, native mobile camera, new Remote Sources plugin, sweeping\nCompanion rewrite and streaming support, ",(0,o.kt)("inlineCode",{parentName:"p"},"async"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"await")," everything, React 18\nand Vue 3 support, all examples rewritten."),(0,o.kt)("h2",{id:"esm-surgery"},"ESM surgery"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"},"ECMAScript Modules"),"\n(ESM) are the future and we\u2019re ready to adopt it. Benefits over CommonJS\ninclude: improved security, better tree shaking, and a syntax that can be\nunderstood natively by browsers, which can greatly improve the DX if the tools\nare configured to take advantage of that."),(0,o.kt)("p",null,"Following in the footsteps of many other packages, we now only ship Uppy core\nand its plugins as ESM. For Uppy 2.x, we were shipping CommonJS."),(0,o.kt)("p",null,"If you are already using ESM or the CDN builds, nothing changes for you! If you\nare using CommonJS, you may have to add extra tooling for everything to work, or\nconsider refactoring your codebase to ESM. Please refer to the\n",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c"},"Pure ESM package gist"),"\nfor more information and help on how to do that."),(0,o.kt)("h2",{id:"less-integration-code-with-the-new-remote-sources-preset"},"Less integration code with the new remote sources preset"),(0,o.kt)("p",null,"We\u2019ve introduced a new Uppy preset plugin,\n",(0,o.kt)("a",{parentName:"p",href:"/docs/remote-sources"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/remote-sources")),", which combines Instagram,\nFacebook, Google Drive, Box, Unsplash, Dropbox, One Drive, Zoom and any other\nremote cloud sources that Uppy will support in the future. The plugin only works\nwith Dashboard and allows you to enable all the above sources in a single line."),(0,o.kt)("p",null,"Before, you had to manually include every cloud provider / remote source:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy\n    .use(Instagram, {\n        companionUrl: COMPANION_URL,\n        companionAllowedHosts: COMPANION_ALLOWED_HOSTS,\n    })\n    .use(GoogleDrive, {\n        companionUrl: COMPANION_URL,\n        companionAllowedHosts: COMPANION_ALLOWED_HOSTS,\n    })\n    .use(OneDrive, {\n        companionUrl: COMPANION_URL,\n        companionAllowedHosts: COMPANION_ALLOWED_HOSTS,\n    })\n    .use(Instagram, {\n        companionUrl: COMPANION_URL,\n        companionAllowedHosts: COMPANION_ALLOWED_HOSTS,\n    })\n    .use(Facebook, {\n        companionUrl: COMPANION_URL,\n        companionAllowedHosts: COMPANION_ALLOWED_HOSTS,\n    })\n    .use(Unsplash, {\n        companionUrl: COMPANION_URL,\n        companionAllowedHosts: COMPANION_ALLOWED_HOSTS,\n    });\n// ...\n")),(0,o.kt)("p",null,"After:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(RemoteSources, { companionUrl: COMPANION_URL });\n")),(0,o.kt)("p",null,"To get started, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/remote-sources"},(0,o.kt)("inlineCode",{parentName:"a"},"RemoteSources")," docs"),"."),(0,o.kt)("h2",{id:"robodog-ends-its-service"},"Robodog ends its service"),(0,o.kt)("p",null,"Uppy is flexible and extensible through plugins, but the integration code could\nsometimes prove daunting. This is what brought ",(0,o.kt)("a",{parentName:"p",href:"/docs/robodog/"},"Robodog")," to\nlife. It served as an alternative with the same features, but with a more\nergonomic and minimal API."),(0,o.kt)("p",null,"It did, however, come with its own set of new problems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Robodog tries to do the exact same thing as Uppy, but looks like an entirely\ndifferent product."),(0,o.kt)("li",{parentName:"ul"},"Users are faced with a confusing choice between using Robodog or using Uppy\ndirectly."),(0,o.kt)("li",{parentName:"ul"},"Robodog is more ergonomic because it\u2019s limited. When hitting such a limit, the\nuser has to refactor everything to Uppy using plugins.")),(0,o.kt)("p",null,"This has now led us to deprecating Robodog and embracing Uppy for its strong\nsuits: modularity and flexibility. At the same time, we\u2019re also introducing\nsomething to take away some of the repetitive integration code:\n",(0,o.kt)("a",{parentName:"p",href:"/docs/remote-sources"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/remote-sources")),"."),(0,o.kt)("p",null,"Are you using Robodog in your code base? You can check out the\n",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/migration-guides.html#Migrate-from-Robodog-to-Uppy-plugins"},"migration guide"),"\nto see how you can transition to Uppy plugins without losing functionality. We\nhave committed ourselves to extending Robodog support for one year to give our\nusers more time to migrate."),(0,o.kt)("h2",{id:"native-mobile-camera"},"Native mobile camera"),(0,o.kt)("p",null,"As you are probably aware, Uppy\u2019s Webcam plugin provides a nice UI for desktop\ndevices to take pictures and record videos. Up until 3.0, the same UI was\nutilized on mobile as well."),(0,o.kt)("p",null,"Since most mobile devices have a system UI for taking pictures and recording\nvideos \u2013 which is usually better than any custom solution we can offer \u2013 we\u2019ve\nintroduced a new option called ",(0,o.kt)("inlineCode",{parentName:"p"},"mobileNativeCamera")," for the Webcam plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Webcam, {\n    mobileNativeCamera: isMobile({ tablet: true }),\n});\n")),(0,o.kt)("p",null,"By default, it uses the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/juliangruber/is-mobile"},(0,o.kt)("inlineCode",{parentName:"a"},"is-mobile")),"\npackage to detect mobile devices, like smartphones and tablets, but you can\nmanually set this option to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if you wish. When enabled, instead\nof the usual Camera/Webcam Uppy UI, users will be presented with buttons that\nopen their device\u2019s native camera interface:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Uppy native camera UI",src:n(3241).Z,width:"1430",height:"1321"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/webcam/#videoConstraints"},(0,o.kt)("inlineCode",{parentName:"a"},"videoConstraints.facingMode"))," is also\nsupported by this option via the\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture"},(0,o.kt)("inlineCode",{parentName:"a"},"capture")),"\nattribute (in the browsers and devices that respect it)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Webcam, {\n    videoConstraints: {\n        facingMode: 'user',\n    },\n});\n")),(0,o.kt)("p",null,"The same applies to ",(0,o.kt)("a",{parentName:"p",href:"/docs/webcam/#modes"},(0,o.kt)("inlineCode",{parentName:"a"},"modes")),", allowing you to enable only\nvideo or only photos."),(0,o.kt)("h2",{id:"devotedly-stable"},"Devotedly stable"),(0,o.kt)("p",null,"Since the Uppy 2.7.0 release, ",(0,o.kt)("strong",{parentName:"p"},"we\u2019ve fixed over 95 bugs!")," This includes fixes\nto bugs that made uploading less stable, documentation corrections, and\ndependency upgrades."),(0,o.kt)("h2",{id:"companion-turns-40"},"Companion turns 4.0"),(0,o.kt)("p",null,"Everyone\u2019s favorite Companion also received some love."),(0,o.kt)("h3",{id:"streaming-upload"},"Streaming upload"),(0,o.kt)("p",null,"Streaming upload can now also be enabled in Companion when using Tus. This comes\nwith greatly improved upload speeds and allows uploading up to hundreds of\ngigabytes without needing a large server storage. We found that this improves\nspeeds by about 37% for a Google Drive upload of a 1 GB file\n(",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/4046#issuecomment-1235697937"},"source"),").\nThis feature was also available before Companion 4.0, but it didn\u2019t work with\nTus until now."),(0,o.kt)("p",null,"With streaming upload disabled (default), the whole file will be downloaded\nfirst. The upload will then start when the download has completely finished."),(0,o.kt)("p",null,"When streaming upload is enabled, Companion will start downloading the file from\nthe provider (such as Google Drive), while at the same time starting the upload\nto the destination (such as Tus), and sending every chunk of data consecutively."),(0,o.kt)("p",null,"For more information, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion/"},"Companion docs"),"."),(0,o.kt)("h3",{id:"event-emitter"},"Event emitter"),(0,o.kt)("p",null,"Companion now has a server-side event emitter that can be used to detect when\nuploads start, finish and fail, without having to depend on the client (so it\nworks even when users have closed their browser)."),(0,o.kt)("p",null,"Example code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { app, emitter } = companion.app(options);\n\nemitter.on('upload-start', ({ token }) => {\n    console.log('Upload started', token);\n\n    function onUploadEvent({ action, payload }) {\n        if (action === 'success') {\n            emitter.off(token, onUploadEvent); // avoid listener leak\n            console.log('Upload finished', token, payload.url);\n        } else if (action === 'error') {\n            emitter.off(token, onUploadEvent); // avoid listener leak\n            console.error('Upload failed', payload);\n        }\n    }\n    emitter.on(token, onUploadEvent);\n});\n")),(0,o.kt)("h3",{id:"internal-improvements"},"Internal improvements"),(0,o.kt)("p",null,"Companion\u2019s internal request code and Providers have been rewritten to\n",(0,o.kt)("inlineCode",{parentName:"p"},"async"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"await"),", which has greatly simplified and reduced the amount of code.\nThis will lead to less bugs and security issues, and make it easier to implement\nnew custom Providers."),(0,o.kt)("p",null,"We have also replaced the deprecated\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/request/request"},(0,o.kt)("inlineCode",{parentName:"a"},"request"))," library with\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/got"},(0,o.kt)("inlineCode",{parentName:"a"},"got")),". This also removed the need for\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/simov/purest"},(0,o.kt)("inlineCode",{parentName:"a"},"purest")),"."),(0,o.kt)("h3",{id:"and-more"},"And more!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/compressor"},"Compressor")," is officially stable. The Compressor plugin for\nUppy optimizes images (JPEG, PNG), saving on average up to 60% in size. It has\nproven itself through extensive battle testing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws-s3-multipart"},"AWS S3 Multipart")," also became more stable this\nrelease, as a result of us hammering out some of the last edge cases with lots\nof files and/or huge files."),(0,o.kt)("li",{parentName:"ul"},"React 18 is now supported in ",(0,o.kt)("a",{parentName:"li",href:"/docs/react"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/react")),", Vue 3 is supported\nfor ",(0,o.kt)("a",{parentName:"li",href:"/docs/vue"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/vue")),", and Angular 14 for\n",(0,o.kt)("a",{parentName:"li",href:"/docs/angular"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/angular")),"."),(0,o.kt)("li",{parentName:"ul"},"Our ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/tree/main/examples"},"examples")," have\nreceived a fresh round of updates to keep them relevant.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Animate picture of a visibly happy dog getting a head massage",src:n(1981).Z,width:"400",height:"286"})),(0,o.kt)("p",null,"For more details, see the full\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/HEAD/CHANGELOG.md#1300"},"changelog")," and\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs/migration-guides.html"},"migration guide"),"."),(0,o.kt)("p",null,"That\u2019s it from us for now! As you can see, Uppy may be slowly turning into an\nold dog, but we\u2019re still committed to keep teaching it new tricks. We hope\nyou\u2019ll enjoy this latest major release, and all the features and improvements it\nincludes. We can\u2019t wait to hear your thoughts about it on\n",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/uppy_io"},"Twitter"),"!"))}m.isMDXComponent=!0},1981:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dog-enjoys-875f8d3432b4fa5d05df0255f83c655a.gif"},3241:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/native-camera-d180107e4e1d511e85c203b1d6b49cb9.jpg"},6397:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/uppy-3-0-71a46f198071d75565646ce69236acec.jpg"}}]);