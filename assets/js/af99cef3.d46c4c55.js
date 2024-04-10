"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3465],{28739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=t(74848),a=t(28453);const s={title:"Uppy 1.8 and 1.9: security, error handling and better types",date:new Date("2020-03-09T00:00:00.000Z"),authors:["arturi"],published:!0,slug:"2020/03/1.9"},o=void 0,i={permalink:"/blog/2020/03/1.9",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2020-03-1.9.md",source:"@site/blog/2020-03-1.9.md",title:"Uppy 1.8 and 1.9: security, error handling and better types",description:"Uppy 1.8, 1.9 and a few important security patches are out! Here are the",date:"2020-03-09T00:00:00.000Z",tags:[],readingTime:3.96,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 1.8 and 1.9: security, error handling and better types",date:"2020-03-09T00:00:00.000Z",authors:["arturi"],published:!0,slug:"2020/03/1.9"},unlisted:!1,prevItem:{title:"Uppy 1.10.1: Facebook and OneDrive",permalink:"/blog/2020/04/1.10"},nextItem:{title:"Uppy 1.7: A Small One",permalink:"/blog/2019/12/1.7"}},l={authorsImageUrls:[void 0]},p=[{value:"Companion: security patches and new Instagram API",id:"companion-security-patches-and-new-instagram-api",level:2},{value:"Error handling",id:"error-handling",level:2},{value:"Dashboard",id:"dashboard",level:2},{value:"Types",id:"types",level:2},{value:"Downloadable ZIP archives of Uppy releases",id:"downloadable-zip-archives-of-uppy-releases",level:2},{value:"Locales",id:"locales",level:2},{value:"Misc",id:"misc",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Uppy 1.8, 1.9 and a few important security patches are out! Here are the\nhighlights:"}),"\n",(0,r.jsx)(n.h2,{id:"companion-security-patches-and-new-instagram-api",children:"Companion: security patches and new Instagram API"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["We released a patch to an SSRF vulnerability affecting ",(0,r.jsx)(n.code,{children:"@uppy/companion"})," and\nthe ",(0,r.jsx)(n.code,{children:"@uppy/url"})," plugin. Many thanks to the parties involved in\n",(0,r.jsx)(n.a,{href:"https://hackerone.com/reports/786956",children:"reporting and disclosing"})," this\nvulnerability to the Uppy team. The patch is available in\n",(0,r.jsx)(n.a,{href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md#194",children:"@uppy/companion version 1.9.5"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["As the Instagram Legacy API will soon no longer be available, we have now\nadded support for the new Instagram Graph API. As far as using this on\n",(0,r.jsx)(n.code,{children:"@uppy/companion"})," goes, not much has changed. The only difference is that you\nwill now be retrieving your Instagram credentials from the\n",(0,r.jsx)(n.a,{href:"https://developers.facebook.com/",children:"Facebook Developer Platform"}),", and no longer\nfrom the ",(0,r.jsx)(n.a,{href:"https://www.instagram.com/developer/",children:"Instagram Developer Platform"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"error-handling",children:"Error handling"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["We\u2019ve significantly improved error handling and retries in ",(0,r.jsx)(n.code,{children:"@uppy/core"}),",\n",(0,r.jsx)(n.code,{children:"@uppy/transloadit"})," and ",(0,r.jsx)(n.code,{children:"@uppy/dashboard"}),". The retry button on the Status Bar,\nwhich was broken in some edge cases, now works as expected."]}),"\n",(0,r.jsx)(n.li,{children:"Errors from Transloadit assemblies now include Assembly ID, as well as the\nfull assembly object, for easier debugging."}),"\n",(0,r.jsx)(n.li,{children:"You can now click on the question mark (?) icon on the Informer or Dashboard\nerror message, and get a browser alert with error details \u2014 much easier for\nthe users to copy-paste the text this way. The Informer now also conveniently\nstays on screen, as long as you hover over the question mark."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"dashboard",children:"Dashboard"}),"\n",(0,r.jsx)(n.p,{children:"The Dashboard plugin has gained new file type icons: for images \u2014 useful before\nthe preview is generated, or when there\u2019s no preview at all, like with images\nfrom the Url plugin \u2014 and for archives."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(21933).A+"",width:"1480",height:"492"})}),"\n",(0,r.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,r.jsxs)(n.p,{children:["Our typings got a significant upgrade: plugin options can now be type-checked!\nIn the past, we did have typings for plugin options, but the ",(0,r.jsx)(n.code,{children:"uppy.use()"}),"\nfunction had a fallback that would accept ",(0,r.jsx)(n.em,{children:"any"})," object as options. If your\nplugin options were wrong, typescript would just use the fallback and not tell\nyou about it!"]}),"\n",(0,r.jsx)(n.p,{children:"Stricter typings normally mean that old code may no longer type-check. So,\nalthough this is a bugfix, you have to opt into the new types. In 2.0, the old\nway will be removed and only the strict types will be available."}),"\n",(0,r.jsxs)(n.p,{children:["You can opt in by specifying the ",(0,r.jsx)(n.code,{children:"StrictTypes"})," type parameter to the ",(0,r.jsx)(n.code,{children:"Uppy"}),"\ntype:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import Uppy = require('@uppy/core');\nconst uppy = Uppy<Uppy.StrictTypes>({\n\t// options here\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This type parameter must also be specified if you are storing the ",(0,r.jsx)(n.code,{children:"uppy"}),"\ninstance anywhere. For example, inside a class:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class UppyProvider extends React.Component {\n\tprivate uppy: Uppy<Uppy.StrictTypes>;\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.uppy = Uppy<Uppy.StrictTypes>({\n\t\t\t// etc\n\t\t});\n\t}\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you do not specify the ",(0,r.jsx)(n.code,{children:"StrictTypes"})," parameter, the old fallback for the\n",(0,r.jsx)(n.code,{children:"uppy.use()"})," method remains available."]}),"\n",(0,r.jsxs)(n.p,{children:["The typings for ",(0,r.jsx)(n.code,{children:"@uppy/react"})," component props are now derived from plugin\noptions types, so they will no longer get out of sync, as they occasionally did\nin the past. For example, in version 1.7, the ",(0,r.jsx)(n.code,{children:"@uppy/drag-drop"})," plugin supported\na ",(0,r.jsx)(n.code,{children:"note"})," option to add some text to the drop area. The React typings didn't\ninclude that option, so you couldn't use it from typescript! That is now\npermanently fixed:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import components = require('@uppy/react');\nconst { DragDrop } = components;\n\n// assuming some `uppy` variable already exists\ndeclare var uppy: Uppy<Uppy.StrictTypes>;\n\nfunction MyComponent() {\n\treturn <DragDrop uppy={uppy} note=\"This prop is now supported!\" />;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Finally, the ",(0,r.jsx)(n.code,{children:"locale"})," options and React props now have full typings. Your editor\nshould now be able to provide autocompletion for language keys!"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Screenshot showing VS Code autocompletion for a language key.",src:t(88052).A+"",width:"1099",height:"332"})}),"\n",(0,r.jsxs)(n.p,{children:["We now also use ",(0,r.jsx)(n.code,{children:"tsd"}),", so our typings are actually tested."]}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/transloadit/uppy/pull/1918",children:"PR #1918"})," for all the\ndetails."]}),"\n",(0,r.jsx)(n.h2,{id:"downloadable-zip-archives-of-uppy-releases",children:"Downloadable ZIP archives of Uppy releases"}),"\n",(0,r.jsx)(n.p,{children:"Uppy is now available as a downloadable ZIP archive from the Transloadit CDN!\nNPM down? Don\u2019t like build tools? Looking for a quick way to play around with\nUppy? We\u2019ve got you covered:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"https://releases.transloadit.com/uppy/v1.9.3/uppy-v1.9.3.zip\n"})}),"\n",(0,r.jsx)(n.h2,{id:"locales",children:"Locales"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Uppy now speaks Korean and Vietnamese."}),"\n",(0,r.jsx)(n.li,{children:"The French, German and Chinese (zh_TW) translations have been improved."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"misc",children:"Misc"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"@uppy/core: core: setState(modifiedFiles) in onBeforeUpload (#2028 / @arturi)"}),"\n",(0,r.jsx)(n.li,{children:"@uppy/core: always log errors (#2029 / @arturi)"}),"\n",(0,r.jsx)(n.li,{children:"@uppy/core: fix mime type checking bug (#2004 / @shahimclt)"}),"\n",(0,r.jsx)(n.li,{children:"@uppy/core: add .tsv and .tab: text/tab-separated-values (#2056 / @arturi)"}),"\n",(0,r.jsx)(n.li,{children:"@uppy/onedrive: make encryption shorter + enable onedrive on website (#2034 /\n@ifedapoolarewaju)"}),"\n",(0,r.jsxs)(n.li,{children:["@uppy/react: use ",(0,r.jsx)(n.code,{children:"componentDidUpdate"})," instead of ",(0,r.jsx)(n.code,{children:"componentWillReceiveProps"}),"\n(@cryptic022, #1999)"]}),"\n",(0,r.jsx)(n.li,{children:"@uppy/xhr-upload: free item from rate limit queue when upload times out\n(@rtaieb, #2018)"}),"\n",(0,r.jsx)(n.li,{children:"@uppy/aws-s3-multipart: add optional headers for signed url (@ardeois, #1985)"}),"\n",(0,r.jsx)(n.li,{children:"@uppy/aws-s3: fix crash when S3 response does not have a Content-Type header\n(@roenschg, #2012)"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["As always, you can find the full list of changes and package versions, as well\nas future plans, in our\n",(0,r.jsx)(n.a,{href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md",children:"changelog"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21933:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/file-type-icons-3df61d5722546c6a244407279bcb4476.png"},88052:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/locale-type-3a3e1fb239489bc1d3a263672754c1e7.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(96540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);