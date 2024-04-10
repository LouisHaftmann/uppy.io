"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[8375],{66692:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>y,frontMatter:()=>p,metadata:()=>a,toc:()=>c});var n=s(74848),o=s(28453),i=s(11470),t=s(19365),l=s(65171);const p={sidebar_position:7},d="Supporting IE11",a={id:"guides/browser-support",title:"Supporting IE11",description:"We officially support recent versions of Chrome, Firefox, Safari and Edge.",source:"@site/docs/guides/browser-support.mdx",sourceDirName:"guides",slug:"/guides/browser-support",permalink:"/docs/guides/browser-support",draft:!1,unlisted:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/guides/browser-support.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Building your own UI with Uppy",permalink:"/docs/guides/building-your-own-ui-with-uppy"},next:{title:"Custom stores",permalink:"/docs/guides/custom-stores"}},u={},c=[{value:"Polyfills",id:"polyfills",level:2},{value:"Legacy CDN bundle",id:"legacy-cdn-bundle",level:2}];function h(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"supporting-ie11",children:"Supporting IE11"}),"\n",(0,n.jsx)(r.p,{children:"We officially support recent versions of Chrome, Firefox, Safari and Edge."}),"\n",(0,n.jsx)(r.p,{children:"Internet Explorer is not officially supported, as in we don\u2019t run tests for it,\nbut you can be mostly confident it works with the right polyfills. But it does\ncome with a risk of unexpected results in styling or functionality."}),"\n",(0,n.jsx)(r.h2,{id:"polyfills",children:"Polyfills"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(t.A,{value:"npm",label:"NPM",default:!0,children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"npm install core-js whatwg-fetch abortcontroller-polyfill md-gum-polyfill resize-observer-polyfill\n"})})}),(0,n.jsx)(t.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"yarn add core-js whatwg-fetch abortcontroller-polyfill md-gum-polyfill resize-observer-polyfill\n"})})})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"import 'core-js';\nimport 'whatwg-fetch';\nimport 'abortcontroller-polyfill/dist/polyfill-patch-fetch';\n// Order matters: AbortController needs fetch which needs Promise (provided by core-js).\n\nimport 'md-gum-polyfill';\nimport ResizeObserver from 'resize-observer-polyfill';\n\nwindow.ResizeObserver ??= ResizeObserver;\n\nexport { default } from '@uppy/core';\nexport * from '@uppy/core';\n"})}),"\n",(0,n.jsx)(r.h2,{id:"legacy-cdn-bundle",children:"Legacy CDN bundle"}),"\n",(0,n.jsx)(l.A,{uppyJsName:"uppy.legacy.min.js",children:"\n    import { Uppy, DragDrop, Tus } from \"{{UPPY_JS_URL}}\"\n    const uppy = new Uppy()\n    uppy.use(DragDrop, { target: '#uppy' })\n    uppy.use(Tus, { endpoint: '//tusd.tusdemo.net/files/' })\n  "})]})}function y(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},65171:(e,r,s)=>{s.d(r,{A:()=>d});var n=s(96540),o=s(21432),i=s(27293),t=s(4476),l=s(74848);const{version:p}=t;function d(e){let{children:r,uppyCssName:s="uppy.min.css",uppyJsName:t="uppy.min.mjs"}=e,d=[];n.Children.toArray(r).forEach((e=>{d=[...d,...String(e).trim().split("\n").map((e=>e.trim()))]}));const a=d.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${p}/${t}`,c=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${p}/${s}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${a.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.A,{type:"caution",children:[(0,l.jsx)("p",{children:"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."}),(0,l.jsx)("p",{children:"It can be useful to speed up your development environment, so don't hesitate to use it to get you started."})]}),(0,l.jsx)(o.A,{language:"html",children:c})]})}}}]);