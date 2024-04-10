"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[1655],{80482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(74848),i=t(28453);const s={title:"Uppy 3.0: Future-proof, conveniently easy, stable as ever",date:new Date("2022-09-13T00:00:00.000Z"),authors:["aduh95","arturi","mifi","murderlon"],image:"https://uppy.io/img/blog/3.0/uppy-3-0.jpg",published:!0,slug:"2022/09/3.0"},r=void 0,a={permalink:"/blog/2022/09/3.0",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2022-09-3.0.md",source:"@site/blog/2022-09-3.0.md",title:"Uppy 3.0: Future-proof, conveniently easy, stable as ever",description:"Screenshot of Uppy 3.0.0 UI",date:"2022-09-13T00:00:00.000Z",tags:[],readingTime:6.68,hasTruncateMarker:!0,authors:[{email:"antoine@transloadit.com",name:"Antoine du Hamel",id:"aduh95",tagline:"Developer",imageURL:"https://github.com/aduh95.png",key:"aduh95"},{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"},{email:"mikael@transloadit.com",name:"Mikael Finstad",id:"mikael",tagline:"Developer",imageURL:"https://github.com/mifi.png",key:"mifi"},{email:"merlijn@transloadit.com",name:"Merlijn Vos",id:"merlijn",tagline:"Developer",imageURL:"https://github.com/murderlon.png",key:"murderlon"}],frontMatter:{title:"Uppy 3.0: Future-proof, conveniently easy, stable as ever",date:"2022-09-13T00:00:00.000Z",authors:["aduh95","arturi","mifi","murderlon"],image:"https://uppy.io/img/blog/3.0/uppy-3-0.jpg",published:!0,slug:"2022/09/3.0"},unlisted:!1,prevItem:{title:"\ud83c\udf84 Uppy 3.1-3.3: Improved AWS S3 Multipart, Single File Mode",permalink:"/blog/2022/12/3.3"},nextItem:{title:"Uppy 2.4-2.7: Image Compressor, Transloadit Rate Limiting, ESM",permalink:"/blog/2022/03/2.4-2.7"}},l={authorsImageUrls:[void 0,void 0,void 0,void 0]},d=[{value:"ESM surgery",id:"esm-surgery",level:2},{value:"Less integration code with the new remote sources preset",id:"less-integration-code-with-the-new-remote-sources-preset",level:2},{value:"Robodog ends its service",id:"robodog-ends-its-service",level:2},{value:"Native mobile camera",id:"native-mobile-camera",level:2},{value:"Devotedly stable",id:"devotedly-stable",level:2},{value:"Companion turns 4.0",id:"companion-turns-40",level:2},{value:"Streaming upload",id:"streaming-upload",level:3},{value:"Event emitter",id:"event-emitter",level:3},{value:"Internal improvements",id:"internal-improvements",level:3},{value:"And more!",id:"and-more",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Screenshot of Uppy 3.0.0 UI",src:t(59343).A+"",width:"1200",height:"630"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["For those new to Uppy, coming from Reddit, Hacker News and Product Hunt today:\nUppy is a popular open source file uploader for the browser. Pick files from\nlocal disk or camera, remote sources like Instagram, Unsplash, Dropbox etc,\nrecord audio and screencasts. Crop and tweak images with the image editor\nplugin. Supports resumable uploads to a tus.io server, AWS S3 (and many others\nwith similar API like DigitalOcean), multipart.\n",(0,o.jsx)(n.a,{href:"https://uppy.io/examples/dashboard",children:"Try it"}),"!"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Uppy is turning three! When you\u2019re counting in\n",(0,o.jsx)(n.a,{href:"https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/",children:"dog years"}),"\n\u2013 which we most certainly are \u2013 that\u2019s 29 already. An age like that signifies\nproper adulthood. For Uppy, this means it\u2019s ready to stay loyal, but without the\nsilly mistakes (read: bugs). Uppy also underwent (ESM) surgery to keep it\nstrolling by your side in the current ecosystem, and received other behavioral\nimprovements \ud83d\udc36"]}),"\n",(0,o.jsxs)(n.p,{children:["TL;DR: ESM transition, native mobile camera, new Remote Sources plugin, sweeping\nCompanion rewrite and streaming support, ",(0,o.jsx)(n.code,{children:"async"}),"/",(0,o.jsx)(n.code,{children:"await"})," everything, React 18\nand Vue 3 support, all examples rewritten."]}),"\n",(0,o.jsx)(n.h2,{id:"esm-surgery",children:"ESM surgery"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",children:"ECMAScript Modules"}),"\n(ESM) are the future and we\u2019re ready to adopt it. Benefits over CommonJS\ninclude: improved security, better tree shaking, and a syntax that can be\nunderstood natively by browsers, which can greatly improve the DX if the tools\nare configured to take advantage of that."]}),"\n",(0,o.jsx)(n.p,{children:"Following in the footsteps of many other packages, we now only ship Uppy core\nand its plugins as ESM. For Uppy 2.x, we were shipping CommonJS."}),"\n",(0,o.jsxs)(n.p,{children:["If you are already using ESM or the CDN builds, nothing changes for you! If you\nare using CommonJS, you may have to add extra tooling for everything to work, or\nconsider refactoring your codebase to ESM. Please refer to the\n",(0,o.jsx)(n.a,{href:"https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c",children:"Pure ESM package gist"}),"\nfor more information and help on how to do that."]}),"\n",(0,o.jsx)(n.h2,{id:"less-integration-code-with-the-new-remote-sources-preset",children:"Less integration code with the new remote sources preset"}),"\n",(0,o.jsxs)(n.p,{children:["We\u2019ve introduced a new Uppy preset plugin,\n",(0,o.jsx)(n.a,{href:"/docs/remote-sources",children:(0,o.jsx)(n.code,{children:"@uppy/remote-sources"})}),", which combines Instagram,\nFacebook, Google Drive, Box, Unsplash, Dropbox, One Drive, Zoom and any other\nremote cloud sources that Uppy will support in the future. The plugin only works\nwith Dashboard and allows you to enable all the above sources in a single line."]}),"\n",(0,o.jsx)(n.p,{children:"Before, you had to manually include every cloud provider / remote source:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"uppy\n\t.use(Instagram, {\n\t\tcompanionUrl: COMPANION_URL,\n\t\tcompanionAllowedHosts: COMPANION_ALLOWED_HOSTS,\n\t})\n\t.use(GoogleDrive, {\n\t\tcompanionUrl: COMPANION_URL,\n\t\tcompanionAllowedHosts: COMPANION_ALLOWED_HOSTS,\n\t})\n\t.use(OneDrive, {\n\t\tcompanionUrl: COMPANION_URL,\n\t\tcompanionAllowedHosts: COMPANION_ALLOWED_HOSTS,\n\t})\n\t.use(Instagram, {\n\t\tcompanionUrl: COMPANION_URL,\n\t\tcompanionAllowedHosts: COMPANION_ALLOWED_HOSTS,\n\t})\n\t.use(Facebook, {\n\t\tcompanionUrl: COMPANION_URL,\n\t\tcompanionAllowedHosts: COMPANION_ALLOWED_HOSTS,\n\t})\n\t.use(Unsplash, {\n\t\tcompanionUrl: COMPANION_URL,\n\t\tcompanionAllowedHosts: COMPANION_ALLOWED_HOSTS,\n\t});\n// ...\n"})}),"\n",(0,o.jsx)(n.p,{children:"After:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"uppy.use(RemoteSources, { companionUrl: COMPANION_URL });\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To get started, check out the ",(0,o.jsxs)(n.a,{href:"/docs/remote-sources",children:[(0,o.jsx)(n.code,{children:"RemoteSources"})," docs"]}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"robodog-ends-its-service",children:"Robodog ends its service"}),"\n",(0,o.jsxs)(n.p,{children:["Uppy is flexible and extensible through plugins, but the integration code could\nsometimes prove daunting. This is what brought ",(0,o.jsx)(n.a,{href:"/docs/robodog/",children:"Robodog"})," to\nlife. It served as an alternative with the same features, but with a more\nergonomic and minimal API."]}),"\n",(0,o.jsx)(n.p,{children:"It did, however, come with its own set of new problems:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Robodog tries to do the exact same thing as Uppy, but looks like an entirely\ndifferent product."}),"\n",(0,o.jsx)(n.li,{children:"Users are faced with a confusing choice between using Robodog or using Uppy\ndirectly."}),"\n",(0,o.jsx)(n.li,{children:"Robodog is more ergonomic because it\u2019s limited. When hitting such a limit, the\nuser has to refactor everything to Uppy using plugins."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This has now led us to deprecating Robodog and embracing Uppy for its strong\nsuits: modularity and flexibility. At the same time, we\u2019re also introducing\nsomething to take away some of the repetitive integration code:\n",(0,o.jsx)(n.a,{href:"/docs/remote-sources",children:(0,o.jsx)(n.code,{children:"@uppy/remote-sources"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Are you using Robodog in your code base? You can check out the\n",(0,o.jsx)(n.a,{href:"https://uppy.io/docs/guides/migration-guides/#migrate-from-robodog-to-uppy-plugins",children:"migration guide"}),"\nto see how you can transition to Uppy plugins without losing functionality. We\nhave committed ourselves to extending Robodog support for one year to give our\nusers more time to migrate."]}),"\n",(0,o.jsx)(n.h2,{id:"native-mobile-camera",children:"Native mobile camera"}),"\n",(0,o.jsx)(n.p,{children:"As you are probably aware, Uppy\u2019s Webcam plugin provides a nice UI for desktop\ndevices to take pictures and record videos. Up until 3.0, the same UI was\nutilized on mobile as well."}),"\n",(0,o.jsxs)(n.p,{children:["Since most mobile devices have a system UI for taking pictures and recording\nvideos \u2013 which is usually better than any custom solution we can offer \u2013 we\u2019ve\nintroduced a new option called ",(0,o.jsx)(n.code,{children:"mobileNativeCamera"})," for the Webcam plugin:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"uppy.use(Webcam, {\n\tmobileNativeCamera: isMobile({ tablet: true }),\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["By default, it uses the ",(0,o.jsx)(n.a,{href:"https://github.com/juliangruber/is-mobile",children:(0,o.jsx)(n.code,{children:"is-mobile"})}),"\npackage to detect mobile devices, like smartphones and tablets, but you can\nmanually set this option to ",(0,o.jsx)(n.code,{children:"true"})," or ",(0,o.jsx)(n.code,{children:"false"})," if you wish. When enabled, instead\nof the usual Camera/Webcam Uppy UI, users will be presented with buttons that\nopen their device\u2019s native camera interface:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Uppy native camera UI",src:t(78511).A+"",width:"1430",height:"1321"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/webcam/#videoConstraints",children:(0,o.jsx)(n.code,{children:"videoConstraints.facingMode"})})," is also\nsupported by this option via the\n",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture",children:(0,o.jsx)(n.code,{children:"capture"})}),"\nattribute (in the browsers and devices that respect it)."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"uppy.use(Webcam, {\n\tvideoConstraints: {\n\t\tfacingMode: 'user',\n\t},\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The same applies to ",(0,o.jsx)(n.a,{href:"/docs/webcam/#modes",children:(0,o.jsx)(n.code,{children:"modes"})}),", allowing you to enable only\nvideo or only photos."]}),"\n",(0,o.jsx)(n.h2,{id:"devotedly-stable",children:"Devotedly stable"}),"\n",(0,o.jsxs)(n.p,{children:["Since the Uppy 2.7.0 release, ",(0,o.jsx)(n.strong,{children:"we\u2019ve fixed over 95 bugs!"})," This includes fixes\nto bugs that made uploading less stable, documentation corrections, and\ndependency upgrades."]}),"\n",(0,o.jsx)(n.h2,{id:"companion-turns-40",children:"Companion turns 4.0"}),"\n",(0,o.jsx)(n.p,{children:"Everyone\u2019s favorite Companion also received some love."}),"\n",(0,o.jsx)(n.h3,{id:"streaming-upload",children:"Streaming upload"}),"\n",(0,o.jsxs)(n.p,{children:["Streaming upload can now also be enabled in Companion when using Tus. This comes\nwith greatly improved upload speeds and allows uploading up to hundreds of\ngigabytes without needing a large server storage. We found that this improves\nspeeds by about 37% for a Google Drive upload of a 1 GB file\n(",(0,o.jsx)(n.a,{href:"https://github.com/transloadit/uppy/pull/4046#issuecomment-1235697937",children:"source"}),").\nThis feature was also available before Companion 4.0, but it didn\u2019t work with\nTus until now."]}),"\n",(0,o.jsx)(n.p,{children:"With streaming upload disabled (default), the whole file will be downloaded\nfirst. The upload will then start when the download has completely finished."}),"\n",(0,o.jsx)(n.p,{children:"When streaming upload is enabled, Companion will start downloading the file from\nthe provider (such as Google Drive), while at the same time starting the upload\nto the destination (such as Tus), and sending every chunk of data consecutively."}),"\n",(0,o.jsxs)(n.p,{children:["For more information, see the ",(0,o.jsx)(n.a,{href:"/docs/companion/",children:"Companion docs"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"event-emitter",children:"Event emitter"}),"\n",(0,o.jsx)(n.p,{children:"Companion now has a server-side event emitter that can be used to detect when\nuploads start, finish and fail, without having to depend on the client (so it\nworks even when users have closed their browser)."}),"\n",(0,o.jsx)(n.p,{children:"Example code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const { app, emitter } = companion.app(options);\n\nemitter.on('upload-start', ({ token }) => {\n\tconsole.log('Upload started', token);\n\n\tfunction onUploadEvent({ action, payload }) {\n\t\tif (action === 'success') {\n\t\t\temitter.off(token, onUploadEvent); // avoid listener leak\n\t\t\tconsole.log('Upload finished', token, payload.url);\n\t\t} else if (action === 'error') {\n\t\t\temitter.off(token, onUploadEvent); // avoid listener leak\n\t\t\tconsole.error('Upload failed', payload);\n\t\t}\n\t}\n\temitter.on(token, onUploadEvent);\n});\n"})}),"\n",(0,o.jsx)(n.h3,{id:"internal-improvements",children:"Internal improvements"}),"\n",(0,o.jsxs)(n.p,{children:["Companion\u2019s internal request code and Providers have been rewritten to\n",(0,o.jsx)(n.code,{children:"async"}),"/",(0,o.jsx)(n.code,{children:"await"}),", which has greatly simplified and reduced the amount of code.\nThis will lead to less bugs and security issues, and make it easier to implement\nnew custom Providers."]}),"\n",(0,o.jsxs)(n.p,{children:["We have also replaced the deprecated\n",(0,o.jsx)(n.a,{href:"https://github.com/request/request",children:(0,o.jsx)(n.code,{children:"request"})})," library with\n",(0,o.jsx)(n.a,{href:"https://github.com/sindresorhus/got",children:(0,o.jsx)(n.code,{children:"got"})}),". This also removed the need for\n",(0,o.jsx)(n.a,{href:"https://github.com/simov/purest",children:(0,o.jsx)(n.code,{children:"purest"})}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"and-more",children:"And more!"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/compressor",children:"Compressor"})," is officially stable. The Compressor plugin for\nUppy optimizes images (JPEG, PNG), saving on average up to 60% in size. It has\nproven itself through extensive battle testing."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/aws-s3-multipart",children:"AWS S3 Multipart"})," also became more stable this\nrelease, as a result of us hammering out some of the last edge cases with lots\nof files and/or huge files."]}),"\n",(0,o.jsxs)(n.li,{children:["React 18 is now supported in ",(0,o.jsx)(n.a,{href:"/docs/react",children:(0,o.jsx)(n.code,{children:"@uppy/react"})}),", Vue 3 is supported\nfor ",(0,o.jsx)(n.a,{href:"/docs/vue",children:(0,o.jsx)(n.code,{children:"@uppy/vue"})}),", and Angular 14 for\n",(0,o.jsx)(n.a,{href:"/docs/angular",children:(0,o.jsx)(n.code,{children:"@uppy/angular"})}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Our ",(0,o.jsx)(n.a,{href:"https://github.com/transloadit/uppy/tree/main/examples",children:"examples"})," have\nreceived a fresh round of updates to keep them relevant."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Animate picture of a visibly happy dog getting a head massage",src:t(71642).A+"",width:"400",height:"286"})}),"\n",(0,o.jsxs)(n.p,{children:["For more details, see the full\n",(0,o.jsx)(n.a,{href:"https://github.com/transloadit/uppy/blob/HEAD/CHANGELOG.md#1300",children:"changelog"})," and\nthe ",(0,o.jsx)(n.a,{href:"/docs/migration-guides.html",children:"migration guide"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["That\u2019s it from us for now! As you can see, Uppy may be slowly turning into an\nold dog, but we\u2019re still committed to keep teaching it new tricks. We hope\nyou\u2019ll enjoy this latest major release, and all the features and improvements it\nincludes. We can\u2019t wait to hear your thoughts about it on\n",(0,o.jsx)(n.a,{href:"https://twitter.com/uppy_io",children:"Twitter"}),"!"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},71642:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/dog-enjoys-875f8d3432b4fa5d05df0255f83c655a.gif"},78511:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/native-camera-d180107e4e1d511e85c203b1d6b49cb9.jpg"},59343:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/uppy-3-0-71a46f198071d75565646ce69236acec.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(96540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);