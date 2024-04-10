"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[7518],{90001:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=t(74848),i=t(28453);const a={title:"Uppy 1.11 \u2014 1.13: Dark Mode, custom meta fields and Google Docs in Companion",date:new Date("2020-04-20T00:00:00.000Z"),authors:["arturi"],image:"https://uppy.io/img/blog/1.13/uppy-dashboard-dark-mar-2020.png",published:!0,slug:"2020/04/1.13"},s=void 0,r={permalink:"/blog/2020/04/1.13",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2020-04-1.13.md",source:"@site/blog/2020-04-1.13.md",title:"Uppy 1.11 \u2014 1.13: Dark Mode, custom meta fields and Google Docs in Companion",description:"Releases 1.11 through 1.13 introduced a bunch of major new features and",date:"2020-04-20T00:00:00.000Z",tags:[],readingTime:2.725,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 1.11 \u2014 1.13: Dark Mode, custom meta fields and Google Docs in Companion",date:"2020-04-20T00:00:00.000Z",authors:["arturi"],image:"https://uppy.io/img/blog/1.13/uppy-dashboard-dark-mar-2020.png",published:!0,slug:"2020/04/1.13"},unlisted:!1,prevItem:{title:"Adding Custom Providers: Step by Step Tutorial to add Custom Providers",permalink:"/blog/2020/03/custom-providers"},nextItem:{title:"Uppy 1.10.1: Facebook and OneDrive",permalink:"/blog/2020/04/1.10"}},l={authorsImageUrls:[void 0]},d=[{value:"Dark mode",id:"dark-mode",level:2},{value:"Custom meta fields",id:"custom-meta-fields",level:2},{value:"Google Docs support in Companion",id:"google-docs-support-in-companion",level:2},{value:"AWS S3",id:"aws-s3",level:2},{value:"Locales",id:"locales",level:2},{value:"Exifr in Thumbnail Generator",id:"exifr-in-thumbnail-generator",level:2},{value:"Misc",id:"misc",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",source:"source",ul:"ul",video:"video",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Releases 1.11 through 1.13 introduced a bunch of major new features and\nbugfixes. Let's go through the main ones!"}),"\n",(0,o.jsx)(n.h2,{id:"dark-mode",children:"Dark mode"}),"\n",(0,o.jsxs)(n.p,{children:["A little while ago we\u2019ve\n",(0,o.jsx)(n.a,{href:"https://mobile.twitter.com/uppy_io/status/1221070643543838721",children:"announced work in progress"}),"\non Dark Mode for the Dashboard. We're happy to tell you it\u2019s live now! You can\ntry it out on ",(0,o.jsx)(n.a,{href:"/examples/dashboard/",children:"the Dashboard example page"}),"."]}),"\n",(0,o.jsxs)(n.video,{alt:"Demo video showing Uppy Dark Mode",muted:!0,autoPlay:!0,loop:!0,children:["\n  ",(0,o.jsx)(n.source,{src:"/img/blog/1.13/dark-mode-auto.webm",type:"video/webm"}),"\n  ",(0,o.jsx)(n.source,{src:"/img/blog/1.13/dark-mode-auto.mp4",type:"video/mp4"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"There are three options available:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"light"})," \u2014 the default"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"dark"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"auto"})," \u2014 will respect the user\u2019s system settings and switch automatically"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"uppy.use(Dashboard, {\n\ttheme: 'dark',\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(19202).A+"",width:"1200",height:"940"})}),"\n",(0,o.jsx)(n.h2,{id:"custom-meta-fields",children:"Custom meta fields"}),"\n",(0,o.jsxs)(n.p,{children:["This is big one! Thanks to @galli-leo, you can now add custom fields to the\nDashboard meta editor, such as ",(0,o.jsx)(n.code,{children:'<input type="tel">'}),", ",(0,o.jsx)(n.code,{children:"<select>"})," or\n",(0,o.jsx)(n.code,{children:'<input type="checkbox">'}),", like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"uppy.use(Dashboard, {\n\ttrigger: '#pick-files',\n\tmetaFields: [\n\t\t{\n\t\t\tid: 'caption',\n\t\t\tname: 'Caption',\n\t\t\tplaceholder: 'describe what the image is about',\n\t\t},\n\t\t{\n\t\t\tid: 'public',\n\t\t\tname: 'Public',\n\t\t\trender: ({ value, onChange }, h) => {\n\t\t\t\treturn h('input', {\n\t\t\t\t\ttype: 'checkbox',\n\t\t\t\t\tonChange: (ev) => onChange(ev.target.checked ? 'on' : 'off'),\n\t\t\t\t\tdefaultChecked: value === 'on',\n\t\t\t\t});\n\t\t\t},\n\t\t},\n\t],\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/dashboard/#metaFields",children:"the docs"})," and\n",(0,o.jsx)(n.a,{href:"https://github.com/transloadit/uppy/pull/2147",children:"PR #2147"})," for details."]}),"\n",(0,o.jsx)(n.h2,{id:"google-docs-support-in-companion",children:"Google Docs support in Companion"}),"\n",(0,o.jsxs)(n.p,{children:["In the past, Uppy could already import files from Google Drive using Companion.\nHowever, files from Google Docs are not ",(0,o.jsx)(n.em,{children:"really"})," files, and could not be\nimported. That was confusing for users: some of their files simply didn't\nappear!"]}),"\n",(0,o.jsxs)(n.p,{children:["Companion now automagically converts GSuite documents, such as docs,\nspreadsheets and presentations, to ",(0,o.jsx)(n.code,{children:".docx"}),", ",(0,o.jsx)(n.code,{children:".xlsx"})," and ",(0,o.jsx)(n.code,{children:".ppt"})," files that can be\nopened in various applications. The current list of conversions is hardcoded to:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n\t"application/vnd.google-apps.document": ".docx",\n\t"application/vnd.google-apps.drawing": ".png",\n\t"application/vnd.google-apps.script": ".json",\n\t"application/vnd.google-apps.spreadsheet": ".xlsx",\n\t"application/vnd.google-apps.presentation": ".ppt"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"This may be configurable in a future release."}),"\n",(0,o.jsx)(n.p,{children:"Note that only documents under 10MB are converted. This is a limitation set by\nthe Google Drive API."}),"\n",(0,o.jsx)(n.h2,{id:"aws-s3",children:"AWS S3"}),"\n",(0,o.jsxs)(n.p,{children:["The Aws S3 plugin now handles uploads internally, instead of deferring to XHR\nUpload. This change fixes many bugs with Aws S3. See\n",(0,o.jsx)(n.a,{href:"https://github.com/transloadit/uppy/pull/2147",children:"PR #2060"})," for details."]}),"\n",(0,o.jsx)(n.h2,{id:"locales",children:"Locales"}),"\n",(0,o.jsx)(n.p,{children:"Polish, Croatian and Romanian language packs have been added by @alfatv, @dkisic\nand @akizor \ud83c\udf89"}),"\n",(0,o.jsx)(n.h2,{id:"exifr-in-thumbnail-generator",children:"Exifr in Thumbnail Generator"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/MikeKovarik",children:"@MikeKovarik"})," created an awesome library called\n",(0,o.jsx)(n.a,{href:"https://github.com/MikeKovarik/exifr",children:"Exifr"}),", useful for extracting EXIF image\ndata. He was kind enough to submit a PR that replaces Uppy\u2019s internal fork of\n",(0,o.jsx)(n.code,{children:"exif-js"})," with ",(0,o.jsx)(n.code,{children:"exifr"}),". Our thumbnail generation is now faster and more robust!\nSee ",(0,o.jsx)(n.a,{href:"https://github.com/transloadit/uppy/pull/2140",children:"PR 2140"})," for details."]}),"\n",(0,o.jsx)(n.h2,{id:"misc",children:"Misc"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"@uppy/tus, @uppy/xhr-upload: emit error when companion returns error during\nupload creation (#2166 / @ifedapoolarewaju)"}),"\n",(0,o.jsx)(n.li,{children:"@uppy/transloadit: fix progress with very different Assembly runtimes (#2143 /\n@agreene-coursera)"}),"\n",(0,o.jsxs)(n.li,{children:["@uppy/core: Only ",(0,o.jsx)(n.code,{children:"_startIfAutoProceed"})," if some files were actually added\n(#2146 / @arturi)"]}),"\n",(0,o.jsx)(n.li,{children:"@uppy/companion: emit error to client if download fails (#2139 /\n@ifedapoolarewaju)"}),"\n",(0,o.jsx)(n.li,{children:"@uppy/companion: validate all client provided upload data. (#2160 /\n@ifedapoolarewaju)"}),"\n",(0,o.jsx)(n.li,{children:"@uppy/dashboard: Log warning instead of an error when trigger is not found\n(#2144 / @arturi)"}),"\n",(0,o.jsxs)(n.li,{children:["@uppy/robodog: Pass ",(0,o.jsx)(n.code,{children:"hideUploadButton"})," to Dashboard in Robodog too (#2169 /\n@arturi)"]}),"\n",(0,o.jsxs)(n.li,{children:["@uppy/aws-s3-multipart: emit ",(0,o.jsx)(n.code,{children:"upload-error"})," when companion returns error\nduring upload instantiation (#2168 / @ifedapoolarewaju)"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["As always, you can find the full list of changes and package versions, as well\nas future plans, in our\n",(0,o.jsx)(n.a,{href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md",children:"changelog"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},19202:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/uppy-dashboard-dark-mar-2020-8404676e497ecef5f6832518f40f8fa6.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(96540);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);