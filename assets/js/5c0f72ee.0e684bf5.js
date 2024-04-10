"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[700],{68349:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=t(74848),a=t(28453);const s={title:"Uppy 0.14: Responsive Dashboard, Standalone & Pluggable Server, Dropbox",date:new Date("2017-02-13T00:00:00.000Z"),authors:["arturi"],published:!0,slug:"2017/02/0.14"},o=void 0,i={permalink:"/blog/2017/02/0.14",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2017-02-0.14.md",source:"@site/blog/2017-02-0.14.md",title:"Uppy 0.14: Responsive Dashboard, Standalone & Pluggable Server, Dropbox",description:"Hi! Hope y\u2019all have had great holidays! \ud83c\udf84 Which reminds us, we still have a",date:"2017-02-13T00:00:00.000Z",tags:[],readingTime:5.495,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 0.14: Responsive Dashboard, Standalone & Pluggable Server, Dropbox",date:"2017-02-13T00:00:00.000Z",authors:["arturi"],published:!0,slug:"2017/02/0.14"},unlisted:!1,prevItem:{title:"Uppy 0.15: Spring cleanup",permalink:"/blog/2017/03/0.15"},nextItem:{title:"Uppy 0.12: Responsive. Cancel. Feedback. Refreshed\xa0ES6 server",permalink:"/blog/2016/12/0.12"}},l={authorsImageUrls:[void 0]},d=[{value:"Major Uppy Server Updates",id:"major-uppy-server-updates",level:2},{value:"Dashboard",id:"dashboard",level:2},{value:"Per plugin locale settings",id:"per-plugin-locale-settings",level:2},{value:"Misc",id:"misc",level:2},{value:"Release Notes",id:"release-notes",level:2},{value:"Feedback",id:"feedback",level:2}];function h(e){const n={a:"a",code:"code",em:"em",figure:"figure",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Hi! Hope y\u2019all have had great holidays! \ud83c\udf84 Which reminds us, we still have a\ngift for you \u2014 and we even wrapped it in a package (npm). Look inside and you\u2019ll\nfind that Uppy 0.14!"}),"\n",(0,r.jsx)(n.p,{children:"\u201cBut wait\u201d, you might ask, \u201cwhere is the 0.13 release that we have been waiting\nfor?\u201d"}),"\n",(0,r.jsx)(n.p,{children:"Well, let\u2019s just say we are superstitious like that. You won\u2019t see us coding\nunder any ladders either! And we were also in the middle of the holiday season,\nso we decided to call 0.13 \u201cThe Release That Wasn\u2019t\u201d and skip it."}),"\n",(0,r.jsx)(n.p,{children:"Let\u2019s take a look at what Uppy 0.14 has in store for you."}),"\n",(0,r.jsx)(n.h2,{id:"major-uppy-server-updates",children:"Major Uppy Server Updates"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Express.js"})," We\u2019ve switched to Express from Koa. It\u2019s more widely adopted and\nsupported, has larger community and better maintained packages, so we went for\nit."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Pluggable or standalone"})," Uppy Server can now be plugged into your existing\nExpress/Koa server app, but you can also still run it as a standalone server.\n",(0,r.jsx)(n.a,{href:"https://github.com/transloadit/uppy-server#run-as-standalone-server",children:"See here"}),"\nfor further instructions."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Smooth authentication"})," It used to be the case that when you clicked that\nstylish \u201cauthenticate\u201d [with Google Drive] button, you were taken away from the\npage, and things tended to get lost. That has now all been made silky smooth:\nupon clicking the button, a fresh tab will open in your browser, which will take\nyou to the authentication page \u2013 be it on Google Drive, Dropbox, or somewhere\nelse. When you are done, this tab is automagically closed, and you are back\nwhere you were, authenticated, with all your remote files at hand."]}),"\n",(0,r.jsx)(n.img,{className:"border",src:"/img/blog/0.14/smooth-auth.png"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Dropbox plugin"})," Dropbox support made it into Uppy this release! \ud83c\udf89\n",(0,r.jsx)(n.a,{href:"https://github.com/ifedapoolarewaju",children:"Ife"})," rocks like that. (A shoutout here as\nwell to ",(0,r.jsx)(n.a,{href:"https://github.com/hedgerh",children:"Harry"})," for the initial work on Uppy Server\nand the Google Drive plugin!) Why don't you\n",(0,r.jsx)(n.a,{href:"https://uppy.io/examples/dashboard/",children:"give it a try"}),"!"]}),"\n",(0,r.jsx)(n.img,{className:"border",src:"/img/blog/0.14/uppy-dropbox.png"}),"\n",(0,r.jsx)(n.p,{children:"What\u2019s more, the client-side code of Google Drive and Dropbox plugins is slowly\nbeing refactored into a generic provider view that can be shared among\nall\xa0services."}),"\n",(0,r.jsx)(n.h2,{id:"dashboard",children:"Dashboard"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Responsive UI and more icons"})," The Dashboard now adapts itself to screen sizes\nbig and small. That includes ",(0,r.jsx)(n.code,{children:"inline"})," mode, where you can set ",(0,r.jsx)(n.code,{children:"maxWidth"})," and\n",(0,r.jsx)(n.code,{children:"maxHeight"})," in options, like so:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"uppy.use(Dashboard, {\n\tmaxWidth: 300,\n\tmaxHeight: 350,\n\tinline: true,\n\ttarget: '#myUploadContainer',\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We are not using media queries here, but have instead added a\n",(0,r.jsx)(n.code,{children:"UppyDashboard--wide"})," CSS class, which allows for more flexibility \u2014 your file\nuploading widget can be tiny even if the screen is large."]}),"\n",(0,r.jsx)(n.p,{children:"When there is little space available, the file grid view that you have become\nused to, will turn into a new compact list view."}),"\n",(0,r.jsxs)(n.figure,{className:"wide",children:["\n  ",(0,r.jsx)(n.img,{src:"/img/blog/0.14/dashboard-grid-list.jpg"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"We are also adding more file type icons and trying to be smarter about detecting\nthem. We have new icons for video, audio, text, and PDF for you to enjoy."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Total / uploaded sizes"})," Total and uploaded sizes have been added to the\nStatusBar, allowing you and your users to keep track of all those bits and\nbytes."]}),"\n",(0,r.jsx)(n.img,{src:"/img/blog/0.14/statusbar-uploaded-total-size.png"}),"\n",(0,r.jsxs)(n.p,{children:["You can play with all of these new features on\n",(0,r.jsx)(n.a,{href:"https://uppy.io/examples/dashboard/",children:"the Dashboard example page"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"per-plugin-locale-settings",children:"Per plugin locale settings"}),"\n",(0,r.jsx)(n.p,{children:"We have moved locale settings from global/core to plugins. By default, each UI\nplugin ships with an English locale, and you can override any string with your\nown, like so:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"uppy.use(DragDrop, {\n\ttarget: '.drop',\n\tlocale: {\n\t\tstrings: {\n\t\t\tchooseFile: 'Valitse tiedoston',\n\t\t\torDragDrop: 'tai siirt\xe4\xe4 t\xe4nne',\n\t\t},\n\t},\n});\n"})}),"\n",(0,r.jsx)(n.img,{src:"/img/blog/0.14/dnd-fi.png"}),"\n",(0,r.jsxs)(n.p,{children:["And just like that, your Drag&Drop plugin now speaks Finnish! ",(0,r.jsx)(n.em,{children:"Hyv\xe4\xe4 huomenta!"}),"\nThis feature is a work in progress, we are trying to find the sweet spot between\n",(0,r.jsx)(n.a,{href:"https://github.com/transloadit/uppy/blob/8c6252933813af69c1b71ec4621a7fc14dfb3ab0/src/locales/pt_BR.js",children:"bundling a whole bunch of strings in packs"}),",\nwhich might be redundant (i.e. if you only use the Drag&Drop, you don\u2019t need\nstrings from the Dashboard), and making you choose or set language strings for\neach UI plugin. We\u2019d love to\n",(0,r.jsx)(n.a,{href:"https://github.com/transloadit/uppy/issues/42",children:"hear what you think"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"misc",children:"Misc"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/yo-yoify",children:"yo-yoify"})," has been added to our build\nsetup in order to solve a\n",(0,r.jsx)(n.a,{href:"https://github.com/shama/bel#note",children:"Function.caller / strict mode issue"})," and\nto make the app faster/smaller by transforming template strings into pure and\nfast document calls."]}),"\n",(0,r.jsxs)(n.li,{children:["By the way, Uppy\u2019s UI DOM is powered by\n",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/yo-yo",children:"yo-yo"}),". We like yo-yo for its\nsimplicity, speed and small size, but sometimes there are issues, one of them\nbeing the lack of wide adoption. We are looking at\n",(0,r.jsx)(n.a,{href:"https://preactjs.com/",children:"Preact"}),", but are also quite excited about\n",(0,r.jsx)(n.a,{href:"https://github.com/yoshuawuyts/nanocomponent",children:"Nanocomponent"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Progress events that were not being properly sent from Uppy Server as now\nfixed. As it turns out, this occurred because server uploads were happening\ntoo fast, before the client was actually able to connect to the server.\n\ud83d\ude31 Guess that\u2019s a good problem to have solved!"}),"\n",(0,r.jsxs)(n.li,{children:["We have recently added Uppy to\n",(0,r.jsx)(n.a,{href:"https://www.producthunt.com/posts/uppy",children:"Product Hunt"})," and we were very\npleased with the warm welcome, we even made it to the front page a few days\nlater. Let\u2019s hope it will help get more people excited about the project."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"release-notes",children:"Release Notes"}),"\n",(0,r.jsx)(n.p,{children:"Here is the full list of changes for version 0.14:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["dashboard: use ",(0,r.jsx)(n.code,{children:"isWide"})," prop/class instead of media queries, so that\ncompact/mobile version can be used in bigger screens too (@arturi)"]}),"\n",(0,r.jsx)(n.li,{children:"dashboard: basic \u201clist\u201d view in addition to current \u201cgrid\u201d view (@arturi)"}),"\n",(0,r.jsx)(n.li,{children:"dashboard: more icons for file types (@arturi)"}),"\n",(0,r.jsx)(n.li,{children:"dashboard: add totalSize and totalUploadedSize to StatusBar (@arturi)"}),"\n",(0,r.jsx)(n.li,{children:"dashboard: figure out where to place Informer, accounting for StatusBar \u2014 over\nthe StatusBar for now (@arturi)"}),"\n",(0,r.jsxs)(n.li,{children:["dashboard: add ",(0,r.jsx)(n.code,{children:"<progress>"})," element for progress bar, like here\n",(0,r.jsx)(n.a,{href:"https://overcast.fm/+BtuxMygVg/",children:"https://overcast.fm/+BtuxMygVg/"}),". Added hidden for now, for\nsemantics/accessibility (@arturi)"]}),"\n",(0,r.jsx)(n.li,{children:"dragdrop: show number of selected files, remove upload btn (@arturi)"}),"\n",(0,r.jsx)(n.li,{children:"build: exclude locales from build (@arturi)"}),"\n",(0,r.jsx)(n.li,{children:"core: i18n for each plugin in options \u2014 local instead of global (@arturi)"}),"\n",(0,r.jsx)(n.li,{children:"core: add default pluralization (can be overridden in plugin options) to\nTranslator (@arturi)"}),"\n",(0,r.jsxs)(n.li,{children:["core: use yo-yoify to solve\n",(0,r.jsx)(n.a,{href:"https://github.com/shama/bel#note",children:"Function.caller / strict mode issue"})," and\nmake our app faster/smaller by transforming template strings into pure and\nfast document calls (@arturi)"]}),"\n",(0,r.jsx)(n.li,{children:"server: a pluggable uppy-server (express / koa for now) (@ifedapoolarewaju)"}),"\n",(0,r.jsx)(n.li,{children:"server: standalone uppy-server (@ifedapoolarewaju)"}),"\n",(0,r.jsx)(n.li,{children:"server: Integrate dropbox plugin (@ifedapoolarewaju)"}),"\n",(0,r.jsx)(n.li,{children:"server: smooth authentication: after auth you are back in your app where you\nleft, no page reloads (@ifedapoolarewaju)"}),"\n",(0,r.jsx)(n.li,{children:"tus: fix upload progress from uppy-server (@arturi, @ifedapoolarewaju)"}),"\n",(0,r.jsx)(n.li,{children:"core: basic React component \u2014 DnD (@arturi)"}),"\n",(0,r.jsxs)(n.li,{children:["core: fix support for both ES6 module import and CommonJS requires with\n",(0,r.jsx)(n.code,{children:"add-module-exports"})," babel plugin (@arturi)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"feedback",children:"Feedback"}),"\n",(0,r.jsxs)(n.p,{children:["We appreciate your feedback, feel free to\n",(0,r.jsx)(n.a,{href:"https://github.com/transloadit/uppy/issues/",children:"comment on GitHub"}),", send a PR, and\nhit us on ",(0,r.jsx)(n.a,{href:"https://twitter.com/uppy_io",children:"twitter"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The Uppy Team"})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(96540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);