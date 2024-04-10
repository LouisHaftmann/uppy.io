"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[8343],{47788:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>h});var t=r(74848),s=r(28453),o=r(11470),d=r(19365),l=r(65171);const i={sidebar_position:2,slug:"/drop-target"},a="Drop target",p={id:"user-interfaces/elements/drop-target",title:"Drop target",description:"The @uppy/drop-target plugin lets your users drag-and-drop files on any",source:"@site/docs/user-interfaces/elements/drop-target.mdx",sourceDirName:"user-interfaces/elements",slug:"/drop-target",permalink:"/docs/drop-target",draft:!1,unlisted:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/drop-target.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/drop-target"},sidebar:"tutorialSidebar",previous:{title:"Image editor",permalink:"/docs/image-editor"},next:{title:"Thumbnail generator",permalink:"/docs/thumbnail-generator"}},c={},h=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>onDragLeave</code>",id:"ondragleave",level:4},{value:"<code>onDragOver</code>",id:"ondragover",level:4},{value:"<code>onDrop</code>",id:"ondrop",level:4},{value:"<code>target</code>",id:"target",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"drop-target",children:"Drop target"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"@uppy/drop-target"})," plugin lets your users drag-and-drop files on any\nelement on the page, for example the whole page, ",(0,t.jsx)(n.code,{children:"document.body"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Can be used together with Uppy Dashboard or Drag & Drop plugins, or your custom\nsolution targeting any DOM element."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/examples",children:"Try out the live example"})," or take it for a spin in\n",(0,t.jsx)(n.a,{href:"https://codesandbox.io/s/uppy-drag-drop-gyewzx?file=/src/index.js",children:"CodeSandbox"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"when-should-i-use-this",children:"When should I use this?"}),"\n",(0,t.jsxs)(n.p,{children:["When you want to allow users to drag and drop files in your own UI, rather than\nin the ",(0,t.jsx)(n.a,{href:"/docs/dashboard",children:(0,t.jsx)(n.code,{children:"Dashboard"})})," UI, or catch dropped files from anywhere\non the page."]}),"\n",(0,t.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(d.A,{value:"npm",label:"NPM",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"npm install @uppy/drop-target\n"})})}),(0,t.jsx)(d.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"yarn add @uppy/drop-target\n"})})}),(0,t.jsx)(d.A,{value:"cdn",label:"CDN",children:(0,t.jsx)(l.A,{children:'\n        import { DropTarget } from "{{UPPY_JS_URL}}"\n        const DropTarget = new Uppy().use(DropTarget)\n      '})})]}),"\n",(0,t.jsx)(n.h2,{id:"use",children:"Use"}),"\n",(0,t.jsxs)(n.p,{children:["This module has one default export: the ",(0,t.jsx)(n.code,{children:"DropTarget"})," plugin class."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"{8-10} showLineNumbers",children:"import Uppy from '@uppy/core';\nimport DropTarget from '@uppy/drop-target';\n\nimport '@uppy/core/dist/style.css';\nimport '@uppy/drop-target/dist/style.css';\n\nconst uppy = new Uppy();\nuppy.use(DropTarget, {\n\ttarget: document.body,\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.h4,{id:"ondragleave",children:(0,t.jsx)(n.code,{children:"onDragLeave"})}),"\n",(0,t.jsxs)(n.p,{children:["Event listener for the ",(0,t.jsxs)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragleave_event",children:[(0,t.jsx)(n.code,{children:"dragleave"})," event"]}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"{3-5} showLineNumbers",children:"uppy.use(DropTarget, {\n\ttarget: document.body,\n\tonDragLeave: (event) => {\n\t\tevent.stopPropagation();\n\t},\n});\n"})}),"\n",(0,t.jsx)(n.h4,{id:"ondragover",children:(0,t.jsx)(n.code,{children:"onDragOver"})}),"\n",(0,t.jsxs)(n.p,{children:["Event listener for the ",(0,t.jsxs)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragover_event",children:[(0,t.jsx)(n.code,{children:"dragover"})," event"]}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ondrop",children:(0,t.jsx)(n.code,{children:"onDrop"})}),"\n",(0,t.jsxs)(n.p,{children:["Event listener for the ",(0,t.jsxs)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event",children:[(0,t.jsx)(n.code,{children:"drop"})," event"]}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"target",children:(0,t.jsx)(n.code,{children:"target"})}),"\n",(0,t.jsxs)(n.p,{children:["DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,t.jsx)(n.code,{children:"string"}),", ",(0,t.jsx)(n.code,{children:"Element"}),", ",(0,t.jsx)(n.code,{children:"Function"}),", or ",(0,t.jsx)(n.code,{children:"UIPlugin"}),", default: ",(0,t.jsx)(n.code,{children:"null"}),")."]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},65171:(e,n,r)=>{r.d(n,{A:()=>a});var t=r(96540),s=r(21432),o=r(27293),d=r(4476),l=r(74848);const{version:i}=d;function a(e){let{children:n,uppyCssName:r="uppy.min.css",uppyJsName:d="uppy.min.mjs"}=e,a=[];t.Children.toArray(n).forEach((e=>{a=[...a,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=a.map((e=>`  ${e}`)).join("\n"),c=`https://releases.transloadit.com/uppy/v${i}/${d}`,h=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${i}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,c)}\n<\/script>\n`;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.A,{type:"caution",children:[(0,l.jsx)("p",{children:"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."}),(0,l.jsx)("p",{children:"It can be useful to speed up your development environment, so don't hesitate to use it to get you started."})]}),(0,l.jsx)(s.A,{language:"html",children:h})]})}}}]);