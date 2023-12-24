"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[1473],{83239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(85893),i=n(11151);const a={title:"Scaling Images on Rotation",date:new Date("2023-12-08T00:00:00.000Z"),authors:["evgenia","tim"],image:"/img/blog/3.4-3.13/single-file-mode.jpg",slug:"2023-10-25-image-editor",published:!0,toc_max_heading_level:3},r=void 0,s={permalink:"/blog/2023-10-25-image-editor",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2023-10-25-image-editor.md",source:"@site/blog/2023-10-25-image-editor.md",title:"Scaling Images on Rotation",description:"We recently released an \u201cimage scaling on rotation\u201d feature for Uppy\u2019s",date:"2023-12-08T00:00:00.000Z",formattedDate:"December 8, 2023",tags:[],readingTime:5.805,hasTruncateMarker:!0,authors:[{email:"lakesare@gmail.com",name:"Evgenia Karunus",id:"evgenia",tagline:"Developer",imageURL:"https://github.com/lakesare.png",key:"evgenia"},{email:"tim@transloadit.com",name:"Tim Koschuetzki",id:"tim",tagline:"Transloadit co-founder",imageURL:"https://github.com/tim-kos.png",key:"tim"}],frontMatter:{title:"Scaling Images on Rotation",date:"2023-12-08T00:00:00.000Z",authors:["evgenia","tim"],image:"/img/blog/3.4-3.13/single-file-mode.jpg",slug:"2023-10-25-image-editor",published:!0,toc_max_heading_level:3},unlisted:!1,prevItem:{title:"\ud83c\udf84 Uppy 3.13 to 3.21: Typescript Saga: the beginning, Image Editor improvements, Dashboard auto-install",permalink:"/blog/2023/07/3.13-3.21"},nextItem:{title:"Uppy 3.3 to 3.13: conditional S3 multipart, signing on the client, speedy handling of 10k files and much much more",permalink:"/blog/2023/07/3.3-3.13"}},l={authorsImageUrls:[void 0,void 0]},d=[];function c(e){const t={a:"a",p:"p",source:"source",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",video:"video",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["We recently released an \u201cimage scaling on rotation\u201d feature for Uppy\u2019s\n",(0,o.jsx)(t.a,{href:"https://uppy.io/docs/image-editor/",children:"Image Editor"}),", an often-requested feature\nthat we\u2019re super proud to be able to announce."]}),"\n",(0,o.jsx)(t.p,{children:"In this blog post, we\u2019ll be taking a peek behind the curtain, as we take a\ndetailed look into the development of this feature, and our thought-process\napproaching it."}),"\n",(0,o.jsx)(t.p,{children:"Before we start though, take a look below at a comparison between how Uppy\u2019s\nImage Editor used to handle image rotations, and how it handles them now."}),"\n\n  \n  \n  ",(0,o.jsxs)(t.table,{style:{},"textalign:":"",'"center"':"","}}":"",children:["\n  ",(0,o.jsxs)(t.thead,{children:["\n  ",(0,o.jsxs)(t.tr,{children:["\n    ",(0,o.jsx)(t.th,{colSpan:"{2}",children:"\n      Rotation\n    "}),"\n  "]}),(0,o.jsxs)(t.tr,{children:["\n    ",(0,o.jsx)(t.th,{children:"Without scaling"}),"\n    ",(0,o.jsx)(t.th,{children:"With scaling"}),"\n  "]}),"\n  "]}),(0,o.jsxs)(t.tbody,{children:["\n  ",(0,o.jsxs)(t.tr,{children:["\n  ",(0,o.jsxs)(t.td,{children:["\n    ",(0,o.jsxs)(t.video,{controls:!0,muted:!0,autoPlay:!0,children:["\n      ",(0,o.jsx)(t.source,{src:"/img/blog/2023-10-25-image-editor/without-scaling.mov",type:"video/mp4"}),"\n    "]}),"\n  "]}),(0,o.jsxs)(t.td,{children:["\n    ",(0,o.jsxs)(t.video,{controls:!0,muted:!0,autoPlay:!0,children:["\n      ",(0,o.jsx)(t.source,{src:"/img/blog/2023-10-25-image-editor/with-scaling.mov",type:"video/mp4"}),"\n    "]}),"\n  "]}),"\n  "]}),"\n  "]})]}),"\n",(0,o.jsx)(t.p,{children:"Without further ado, let\u2019s dive into some of the finer technical details, so you\ncan follow along and implement this feature into your own image editor."})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var o=n(67294);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);