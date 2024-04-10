"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[9455],{96376:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var r=s(74848),a=s(28453);const i={title:"Uppy 0.9: Making Progress, then pause & resume. Remote file uploads, Informer.",date:new Date("2016-08-26T00:00:00.000Z"),author:"hedgerh",published:!0,slug:"2016/08/0.9.0"},n=void 0,o={permalink:"/blog/2016/08/0.9.0",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2016-08-0.9.0.md",source:"@site/blog/2016-08-0.9.0.md",title:"Uppy 0.9: Making Progress, then pause & resume. Remote file uploads, Informer.",description:"We have just released Uppy 0.9.0. This release features some changes that we",date:"2016-08-26T00:00:00.000Z",tags:[],readingTime:3.225,hasTruncateMarker:!0,authors:[{name:"hedgerh"}],frontMatter:{title:"Uppy 0.9: Making Progress, then pause & resume. Remote file uploads, Informer.",date:"2016-08-26T00:00:00.000Z",author:"hedgerh",published:!0,slug:"2016/08/0.9.0"},unlisted:!1,prevItem:{title:"Uppy 0.10: Getting together, the future, Google Drive UI, exposed events",permalink:"/blog/2016/09/0.10"},nextItem:{title:"Uppy version 0.8 released: The Webcam Edition and Meta Data",permalink:"/blog/2016/08/0.8.0"}},l={authorsImageUrls:[void 0]},h=[{value:"Ability to pause uploads, progress indicators &amp; ETA",id:"ability-to-pause-uploads-progress-indicators--eta",level:2},{value:"Remote file uploads",id:"remote-file-uploads",level:2},{value:"Informer interface",id:"informer-interface",level:2},{value:"Webcam: Say Cheese!",id:"webcam-say-cheese",level:2},{value:"Under the hood: UI refactors",id:"under-the-hood-ui-refactors",level:2},{value:"Release Notes",id:"release-notes",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"We have just released Uppy 0.9.0. This release features some changes that we\nthink you will be very excited about. Let's see what's new!"}),"\n",(0,r.jsx)(t.h2,{id:"ability-to-pause-uploads-progress-indicators--eta",children:"Ability to pause uploads, progress indicators & ETA"}),"\n",(0,r.jsx)(t.p,{children:"The most visible feature that has been added is the ability to pause and resume\nfile uploads."}),"\n",(0,r.jsx)(t.img,{alt:"dashboard UI with paused uploads",src:"/img/blog/0.9/upload-pause.jpg",className:"border"}),"\n",(0,r.jsx)(t.img,{alt:"dashboard UI with files uploading and a pause all button",src:"/img/blog/0.9/upload-resume.jpg",className:"border"}),"\n",(0,r.jsx)(t.p,{children:"The upload dashboard now contains more information about uploads, such as the\ntime remaining until an upload is finished. We have also added circular progress\nindicators to give better visual feedback on an upload's progress."}),"\n",(0,r.jsx)(t.h2,{id:"remote-file-uploads",children:"Remote file uploads"}),"\n",(0,r.jsx)(t.p,{children:"Remote file uploading is now working again."}),"\n",(0,r.jsx)(t.h2,{id:"informer-interface",children:"Informer interface"}),"\n",(0,r.jsxs)(t.p,{children:["We have added a new ",(0,r.jsx)(t.code,{children:"Informer"})," plugin (tested with ",(0,r.jsx)(t.code,{children:"Dashboard"}),", should also work\nanywhere else) that listens to ",(0,r.jsx)(t.code,{children:"informer"})," events, like so:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"bus.emit('informer', message, type, duration);\n"})}),"\n",(0,r.jsx)(t.p,{children:"and displays a message bubble for a certain amount of time. It will be useful to\nnotify you when the internet connection is (a licky boom-boom) down (or back\nup):"}),"\n",(0,r.jsx)(t.img,{alt:"info: no connection",src:"/img/blog/0.9/info-no-connection.jpg",className:"border"}),"\n",(0,r.jsx)(t.p,{children:"Or when Uppy has successfully uploaded your files:"}),"\n",(0,r.jsx)(t.img,{alt:"info: upload successful",src:"/img/blog/0.9/info-upload-success.jpg",className:"border"}),"\n",(0,r.jsx)(t.h2,{id:"webcam-say-cheese",children:"Webcam: Say Cheese!"}),"\n",(0,r.jsx)(t.p,{children:"The Webcam plugin can now take snapshots and add them to the file dashboard in\nUppy's modal. We have also added Flash support for Safari/IE users. The UI has\nalso been cleaned up in the dashboard. We have temporarily disabled video\nrecording in order to focus on rolling out the snapshot feature."}),"\n",(0,r.jsx)(t.h2,{id:"under-the-hood-ui-refactors",children:"Under the hood: UI refactors"}),"\n",(0,r.jsxs)(t.p,{children:["Under the hood, we have made some changes to how the UI is structured. We are\ntaking a more componentized approach. For example, the rendering of Google\nDrive's UI has been separated into multiple smaller components that can be found\nin the ",(0,r.jsx)(t.code,{children:"plugins/GoogleDrive"})," folder."]}),"\n",(0,r.jsx)(t.h2,{id:"release-notes",children:"Release Notes"}),"\n",(0,r.jsx)(t.p,{children:"Here is the full list of changes for version 0.9.0.:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:['dashboard: informer interface: message when all uploads are "done"\n(',(0,r.jsx)(t.a,{href:"https://github.com/arturi",children:"@arturi"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["dashboard: improve file paste \u2014 not really possible \u2014 no file names, weird\nAPI, Chrome-only ",(0,r.jsx)(t.a,{href:"http://stackoverflow.com/a/22940020",children:"http://stackoverflow.com/a/22940020"}),"\n(",(0,r.jsx)(t.a,{href:"https://github.com/arturi",children:"@arturi"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["meta: add google demo account ",(0,r.jsx)(t.a,{href:"https://github.com/kvz",children:"@kvz"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["meta: Set up a Google testing account that people can use to try the demo\n(",(0,r.jsx)(t.a,{href:"https://github.com/hedgerh",children:"@hedgerh"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["meta: write 0.9 release blog post (",(0,r.jsx)(t.a,{href:"https://github.com/hedgerh",children:"@hedgerh"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["webcam: a barely working webcam snapshot & upload\n(",(0,r.jsx)(t.a,{href:"https://github.com/hedgerh",children:"@hedgerh"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["metadata: Uppy + tus empty metadata value issue in Safari\n",(0,r.jsx)(t.a,{href:"https://github.com/tus/tus-js-client/issues/41",children:"https://github.com/tus/tus-js-client/issues/41"})," --\x3e tus issue \u2014 nailed down,\npassed to @account (@arturi, @account)"]}),"\n",(0,r.jsxs)(t.li,{children:["core: experiment with switching to ",(0,r.jsx)(t.code,{children:"virtual-dom"})," in a separate branch;\nexperiment with rollup again (",(0,r.jsx)(t.a,{href:"https://github.com/arturi",children:"@arturi"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["core: figure out race conditions (animations not completing because file div\ngets re-added to the dom each time) with ",(0,r.jsx)(t.code,{children:"yo-yo"}),"/",(0,r.jsx)(t.code,{children:"morphdom"}),"\n",(0,r.jsx)(t.a,{href:"https://github.com/shama/bel/issues/26#issuecomment-238004130",children:"https://github.com/shama/bel/issues/26#issuecomment-238004130"}),"\n(",(0,r.jsx)(t.a,{href:"https://github.com/arturi",children:"@arturi"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["core: switch to ",(0,r.jsx)(t.a,{href:"https://github.com/sethvincent/namespace-emitter",children:"https://github.com/sethvincent/namespace-emitter"})," \u2014 smaller,\nallows for ",(0,r.jsx)(t.code,{children:"on('*')"})," (",(0,r.jsx)(t.a,{href:"https://github.com/arturi",children:"@arturi"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["dashboard: add aria-labels and titles everywhere to improve accessibility #114\n(",(0,r.jsx)(t.a,{href:"https://github.com/arturi",children:"@arturi"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["dashboard: file name + extension should fit on two lines, truncate in the\nmiddle (maybe\n",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/measureText",children:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/measureText"}),")\n(",(0,r.jsx)(t.a,{href:"https://github.com/arturi",children:"@arturi"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["dashboard: implement a circular progress indicator on top of the fileItem with\nplay/pause (",(0,r.jsx)(t.a,{href:"https://github.com/arturi",children:"@arturi"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["dashboard: refactor to smaller components, as discussed in #110\n(",(0,r.jsx)(t.a,{href:"https://github.com/arturi",children:"@arturi"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["google drive: refactor to smaller components, as discussed in #110\n(",(0,r.jsx)(t.a,{href:"https://github.com/hedgerh",children:"@hedgerh"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["google drive: add demo account (",(0,r.jsx)(t.a,{href:"https://github.com/hedgerh",children:"@hedgerh"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["metadata: add labels to fields in fileCard\n(",(0,r.jsx)(t.a,{href:"https://github.com/arturi",children:"@arturi"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["metadata: the aftermath \u2014 better UI (",(0,r.jsx)(t.a,{href:"https://github.com/arturi",children:"@arturi"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["test: Get IE6 on Win XP to run Uppy and see it fall back to regular form\nupload #108 (",(0,r.jsx)(t.a,{href:"https://github.com/arturi",children:"@arturi"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["test: refactor tests, add DragDrop back (",(0,r.jsx)(t.a,{href:"https://github.com/arturi",children:"@arturi"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["tus: update uppy to ",(0,r.jsx)(t.code,{children:"tus-js-client@1.2.1"}),", test on requirebin\n(",(0,r.jsx)(t.a,{href:"https://github.com/arturi",children:"@arturi"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["tus: add ability to pause/resume all uploads at once\n(",(0,r.jsx)(t.a,{href:"https://github.com/arturi",children:"@arturi"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["tus: add ability to pause/resume upload (",(0,r.jsx)(t.a,{href:"https://github.com/arturi",children:"@arturi"}),")"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"We hope you will enjoy this latest release. Uppy is still improving every day\nand we hope to bring you more news about our progress soon!"}),"\n",(0,r.jsx)(t.p,{children:"The Uppy Team"})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>o});var r=s(96540);const a={},i=r.createContext(a);function n(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);