"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2081],{89488:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=i(74848),r=i(28453);const o={title:"\ud83c\udf84 Uppy 3.13 to 3.21: Typescript Saga: the beginning, Image Editor improvements, Dashboard auto-install",date:new Date("2023-12-23T00:00:00.000Z"),authors:["aduh95","murderlon","arturi","mifi"],image:"https://uppy.io/img/blog/3.13-3.21/dog-coding-laptop-mars-christmas-tree-2.jpg",slug:"2023/07/3.13-3.21",published:!0,toc_max_heading_level:2},t=void 0,a={permalink:"/blog/2023/07/3.13-3.21",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2023-12-3.13-3.21.md",source:"@site/blog/2023-12-3.13-3.21.md",title:"\ud83c\udf84 Uppy 3.13 to 3.21: Typescript Saga: the beginning, Image Editor improvements, Dashboard auto-install",description:"It\u2019s this time of the year again! Make yourself cozy",date:"2023-12-23T00:00:00.000Z",tags:[],readingTime:4.64,hasTruncateMarker:!0,authors:[{email:"antoine@transloadit.com",name:"Antoine du Hamel",id:"aduh95",tagline:"Developer",imageURL:"https://github.com/aduh95.png",key:"aduh95"},{email:"merlijn@transloadit.com",name:"Merlijn Vos",id:"merlijn",tagline:"Developer",imageURL:"https://github.com/murderlon.png",key:"murderlon"},{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"},{email:"mikael@transloadit.com",name:"Mikael Finstad",id:"mikael",tagline:"Developer",imageURL:"https://github.com/mifi.png",key:"mifi"}],frontMatter:{title:"\ud83c\udf84 Uppy 3.13 to 3.21: Typescript Saga: the beginning, Image Editor improvements, Dashboard auto-install",date:"2023-12-23T00:00:00.000Z",authors:["aduh95","murderlon","arturi","mifi"],image:"https://uppy.io/img/blog/3.13-3.21/dog-coding-laptop-mars-christmas-tree-2.jpg",slug:"2023/07/3.13-3.21",published:!0,toc_max_heading_level:2},unlisted:!1,nextItem:{title:"Scaling Images on Rotation",permalink:"/blog/2023-10-25-image-editor"}},l={authorsImageUrls:[void 0,void 0,void 0,void 0]},d=[{value:"Typescript",id:"typescript",level:2},{value:"Core",id:"core",level:2},{value:"Image Editor",id:"image-editor",level:2},{value:"Dashboard",id:"dashboard",level:2},{value:"AWS S3",id:"aws-s3",level:2},{value:"Companion",id:"companion",level:2},{value:"Frameworks Integraions",id:"frameworks-integraions",level:2},{value:"Locales",id:"locales",level:2},{value:"Transloadit",id:"transloadit",level:2},{value:"Misc",id:"misc",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",video:"video",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.img,{src:"/img/blog/3.13-3.21/dog-coding-laptop-mars-christmas-tree-2.jpg",alt:"Drawing of a dog with a laptop and Christmas tree on Mars"}),"\n",(0,s.jsxs)(n.p,{children:["It\u2019s this time of the year again! Make yourself cozy\n",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=ouqtX6WWL1U",children:"by the fire"}),", and let us help you\nunwrap the gifts Uppy has prepared for you."]}),"\n",(0,s.jsxs)(n.p,{children:["We proud of all the improvements and amazing new features and bug fixes we were\nable to introduce this year. The highlights being: conditional S3 multipart and\nsigning S3 uploads on the client, speedy handling of 10-50k file uploads,\nrefresh tokens (useful when the token expires mid-upload for a large amount of\nfiles / slow connections), server-sent events and new ",(0,s.jsx)(n.code,{children:"assemblyOptions"})," for the\nTransloadit plugin, Dashboard Single File mode (",(0,s.jsx)(n.code,{children:"singleFileFullScreen"}),"),\nimproved ETA in the Status Bar, a bunch of new languages, including Hindi,\nMexican Spanish and Catalan."]}),"\n",(0,s.jsxs)(n.p,{children:["This one, however, is a recent Uppy updates post, covering releases from\n",(0,s.jsxs)(n.a,{href:"https://github.com/transloadit/uppy/compare/uppy%403.13.0...uppy%403.21.0",children:[(0,s.jsx)(n.code,{children:"3.13.0"})," to ",(0,s.jsx)(n.code,{children:"3.21.0"})]}),":\nannouncing the switch to Typescript, Dashboard can now auto-install plugins,\nsupport for Catalan language, a heap of bug fixes for Tus, Companion, AWS S3,\nand more."]}),"\n",(0,s.jsx)(n.h2,{id:"typescript",children:"Typescript"}),"\n",(0,s.jsxs)(n.p,{children:["We are excited to announce that we are working hard to refactor Uppy Core and\nall plugins source files to TypeScript. We have a build setup in place that\ntemporarily supports both ",(0,s.jsx)(n.code,{children:".ts"})," and ",(0,s.jsx)(n.code,{children:".js"})," files in our monorepo. And a helper\nutility that takes a package name and does the initial renaming and Typescript\nconfig. Then we go through the list of plugins one by one. We begun with\n",(0,s.jsx)(n.code,{children:"@uppy/utils"})," and ",(0,s.jsx)(n.code,{children:"@uppy/core"}),", since most other packages depend on those. Now\nwe are moving to the rest, one by one."]}),"\n",(0,s.jsxs)(n.p,{children:["This work so far is only affecting Uppy internals. In published packages we are\nusing the manually crafted ",(0,s.jsx)(n.code,{children:"d.ts"})," files, as before. We are planning to flip the\nswitch and introduce some breaking changes in the next Uppy major, due to be\nreleased in the first quater of 2024."]}),"\n",(0,s.jsx)(n.h2,{id:"core",children:"Core"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Allow duplicate files with ",(0,s.jsx)(n.code,{children:"onBeforeFileAdded"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Fixed",(0,s.jsx)(n.code,{children:"onBeforeFileAdded"})," with Golden Retriever."]}),"\n",(0,s.jsx)(n.li,{children:"Simplify types with class generic and type more events."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"image-editor",children:"Image Editor"}),"\n",(0,s.jsx)(n.p,{children:"We have a whole separate blog post about the recent rotation improvements in the\nImage Editor, so please read that, if you are interested. Other changes include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fixed labels on all buttons, centered the rotation slider label."}),"\n",(0,s.jsx)(n.li,{children:"Limited cropbox movements."}),"\n",(0,s.jsxs)(n.li,{children:["Fixed to respect ",(0,s.jsx)(n.code,{children:"cropperOptions.initialAspectRatio"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Change the checkered background color, make it semi-transparent."}),"\n",(0,s.jsxs)(n.li,{children:["Fixed granular rotation: ",(0,s.jsx)(n.code,{children:"[-45, 45]"})," instead of ",(0,s.jsx)(n.code,{children:"[-45, 44]"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Removed 1px black lines."}),"\n",(0,s.jsxs)(n.li,{children:["Made ",(0,s.jsx)(n.code,{children:"file-editor:cancel"})," event fire when the Image Editor\u2019s \u201ccancel\u201d button\nis pressed."]}),"\n"]}),"\n",(0,s.jsx)(n.video,{muted:!0,autoPlay:!0,loop:!0,src:"/img/blog/3.13-3.21/crop.mov",type:"video/mp4",children:"\n"}),"\n",(0,s.jsx)(n.img,{alt:"Editor semi-transparant checkered background",src:"/img/blog/3.13-3.21/editor.jpg"}),"\n",(0,s.jsx)(n.h2,{id:"dashboard",children:"Dashboard"}),"\n",(0,s.jsxs)(n.p,{children:["Dashboard can now automatically discover and install compatible plugins without\n",(0,s.jsx)(n.code,{children:"target"})," option. This lets you use a much more condense syntax:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const uppy = new Uppy()\n\t.use(ImageEditor)\n\t.use(Dashboard)\n\t.use(Webcam)\n\t.use(GoogleDrive);\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["The old way via ",(0,s.jsx)(n.code,{children:".use(ImageEditor, { target: Dashboard })"})," and\n",(0,s.jsx)(n.code,{children:".use(Dashboard, { plugins: ['Webcam', 'GoogleDrive'] })"})," still works, but we\nencourage you to use the new syntax."]})}),"\n",(0,s.jsx)(n.p,{children:"Bug fixes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Remove ",(0,s.jsx)(n.code,{children:".uppy-Dashboard-isFixed"})," CSS class when ",(0,s.jsx)(n.code,{children:"uppy.close()"})," is invoked."]}),"\n",(0,s.jsxs)(n.li,{children:["When ",(0,s.jsx)(n.code,{children:"showAddFilesPanel: true"}),", ",(0,s.jsx)(n.code,{children:"aria-hidden"})," should be the opposite."]}),"\n",(0,s.jsx)(n.li,{children:"Don\u2019t cancel all files and Assemblies when clicking \u201cdone\u201d."}),"\n",(0,s.jsx)(n.li,{children:"Update Dashboard\u2019s blue color to meet WCAG contrast requirements."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"aws-s3",children:"AWS S3"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Fixed ",(0,s.jsx)(n.code,{children:"TypeError"}),", fixed ",(0,s.jsx)(n.code,{children:"uploadURL"})," when using ",(0,s.jsx)(n.code,{children:"PUT"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Pass ",(0,s.jsx)(n.code,{children:"signal"})," as separate arg for backward compat; pass the ",(0,s.jsx)(n.code,{children:"uploadURL"})," back\nto the caller."]}),"\n",(0,s.jsx)(n.li,{children:"Refresh file before calling user-defined functions."}),"\n",(0,s.jsx)(n.li,{children:"Made sure we retry signature request."}),"\n",(0,s.jsx)(n.li,{children:"Use uppercase HTTP method names."}),"\n",(0,s.jsxs)(n.li,{children:["Call ",(0,s.jsx)(n.code,{children:"#setCompanionHeaders"})," in ",(0,s.jsx)(n.code,{children:"setOptions"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"companion",children:"Companion"}),"\n",(0,s.jsx)(n.p,{children:"One of the most notable changes in Companion is on the client side, we\u2019ve made\nauthentication optional, allowing for more provider types, with publicly\naccessable links, for example."}),"\n",(0,s.jsx)(n.p,{children:"In Companion Client we were able to drop the now unnecessary preflight requests,\nimproving upload speeds and latency yet again."}),"\n",(0,s.jsx)(n.p,{children:"Other notable changes and fixes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Allow dynamic S3 bucket."}),"\n",(0,s.jsx)(n.li,{children:"Companion+client stability fixes, error handling and retries."}),"\n",(0,s.jsx)(n.li,{children:"Catch \u201cinvalid initialization vector\u201d instead of crashing."}),"\n",(0,s.jsx)(n.li,{children:"Added Onedrive refresh tokens."}),"\n",(0,s.jsxs)(n.li,{children:["Fixed ",(0,s.jsx)(n.code,{children:"authProvider"})," property inconsistency."]}),"\n",(0,s.jsx)(n.li,{children:"Fixed accelerated endpoints for presigned POST."}),"\n",(0,s.jsx)(n.li,{children:"Fixed double tus uploads."}),"\n",(0,s.jsx)(n.li,{children:"Fixed onedrive pagination."}),"\n",(0,s.jsx)(n.li,{children:"Fixed Redis key default TTL."}),"\n",(0,s.jsx)(n.li,{children:"Fixed Uploader.js metadata normalisation."}),"\n",(0,s.jsx)(n.li,{children:"Make CSRF protection helpers available to providers."}),"\n",(0,s.jsxs)(n.li,{children:["Refactor ",(0,s.jsx)(n.code,{children:"getProtectedHttpAgent"})," to make TS happy."]}),"\n",(0,s.jsx)(n.li,{children:"Unify redis initialization."}),"\n",(0,s.jsx)(n.li,{children:"Use deferred length for tus streams."}),"\n",(0,s.jsx)(n.li,{children:"Fixed a refresh token race condition."}),"\n",(0,s.jsx)(n.li,{children:"Fixed edge case for pagination on root."}),"\n",(0,s.jsx)(n.li,{children:"Fixed instagram/facebook auth error regression; uploadRemoteFile undefined;\nProviderView error on empty plugin.icon."}),"\n",(0,s.jsx)(n.li,{children:"Added getBucket metadata argument."}),"\n",(0,s.jsx)(n.li,{children:"Added missing credentialsURL for box."}),"\n",(0,s.jsx)(n.li,{children:"Added test endpoint for dynamic oauth creds."}),"\n",(0,s.jsx)(n.li,{children:"Added Companion OAuth Key type."}),"\n",(0,s.jsx)(n.li,{children:"Aliased \u201cremoveListener\u201d as \u201coff\u201d in Redis emitter."}),"\n",(0,s.jsxs)(n.li,{children:["Use user-defined ",(0,s.jsx)(n.code,{children:"onSuccess"}),", ",(0,s.jsx)(n.code,{children:"onError"}),", and ",(0,s.jsx)(n.code,{children:"onProgress"})," callbacks in\n",(0,s.jsx)(n.code,{children:"@uppy/tus"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Invoke headers function for remote uploads."}),"\n",(0,s.jsx)(n.li,{children:"Send certain Onedrive errors to the user."}),"\n",(0,s.jsx)(n.li,{children:"Upgraded Node.js docker version."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"frameworks-integraions",children:"Frameworks Integraions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Angular: upgraded to Angular 16.x."}),"\n",(0,s.jsx)(n.li,{children:"Svelte: Fixed TS build command."}),"\n",(0,s.jsx)(n.li,{children:"Vue: added export for FileInput."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"locales",children:"Locales"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added Catalan locale ",(0,s.jsx)(n.code,{children:"ca_ES"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Added missing translations to ",(0,s.jsx)(n.code,{children:"de_DE"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Update Farsi."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"transloadit",children:"Transloadit"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Emit assembly progress events."}),"\n",(0,s.jsx)(n.li,{children:"Removed Socket.io \u2014 it\u2019s server-sent events with fallback to polling now."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"misc",children:"Misc"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Added Prettier, migrated to Vitest for Uppy core and Uppy plugins."}),"\n",(0,s.jsxs)(n.li,{children:["Update ",(0,s.jsx)(n.code,{children:"file.meta.name"})," after compression, becase format/extension might have\nchanged."]}),"\n",(0,s.jsx)(n.li,{children:"use latest Node.js version for tests."}),"\n",(0,s.jsx)(n.li,{children:"Migrate to AWS-SDK V3 syntax."}),"\n",(0,s.jsx)(n.li,{children:"Move remote file upload logic into companion-client."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Happy holidays and see you in 2024!"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var s=i(96540);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);