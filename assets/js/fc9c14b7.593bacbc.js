"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[920],{70833:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>x,frontMatter:()=>t,metadata:()=>c,toc:()=>p});var d=r(74848),i=r(28453),s=r(11470),l=r(19365),o=r(65171);const t={sidebar_position:2,slug:"/drag-drop"},a="Drag & Drop",c={id:"user-interfaces/drag-drop",title:"Drag & Drop",description:"The @uppy/drag-drop plugin renders a drag and drop area for file selection.",source:"@site/docs/user-interfaces/drag-drop.mdx",sourceDirName:"user-interfaces",slug:"/drag-drop",permalink:"/docs/drag-drop",draft:!1,unlisted:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/drag-drop.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/drag-drop"},sidebar:"tutorialSidebar",previous:{title:"Dashboard",permalink:"/docs/dashboard"},next:{title:"Image editor",permalink:"/docs/image-editor"}},h={},p=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>width</code>",id:"width",level:4},{value:"<code>height</code>",id:"height",level:4},{value:"<code>note</code>",id:"note",level:4},{value:"<code>locale</code>",id:"locale",level:4},{value:"<code>onDragOver(event)</code>",id:"ondragoverevent",level:4},{value:"<code>onDragLeave(event)</code>",id:"ondragleaveevent",level:4},{value:"<code>onDrop(event)</code>",id:"ondropevent",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"drag--drop",children:"Drag & Drop"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"@uppy/drag-drop"})," plugin renders a drag and drop area for file selection."]}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/examples",children:"Try out the live example"})," or take it for a spin in\n",(0,d.jsx)(n.a,{href:"https://stackblitz.com/edit/vitejs-vite-yzbujq?file=main.js/g",children:"StackBlitz"}),"."]})}),"\n",(0,d.jsx)(n.h2,{id:"when-should-i-use-this",children:"When should I use this?"}),"\n",(0,d.jsxs)(n.p,{children:["It can be useful when you only want the local device as a file source, don\u2019t\nneed file previews and a UI for metadata editing, or the\n",(0,d.jsx)(n.a,{href:"/docs/dashboard/",children:"Dashboard"})," is too much. But it can be too minimal too. By\ndefault it doesn\u2019t show that a file has been added nor is there a progress bar."]}),"\n",(0,d.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,d.jsxs)(s.A,{children:[(0,d.jsx)(l.A,{value:"npm",label:"NPM",default:!0,children:(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"npm install @uppy/core @uppy/drag-drop\n"})})}),(0,d.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"yarn add @uppy/core @uppy/drag-drop\n"})})}),(0,d.jsx)(l.A,{value:"cdn",label:"CDN",children:(0,d.jsx)(o.A,{children:"\n        import { Uppy, DragDrop } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(DragDrop, { target: '#uppy' })\n      "})})]}),"\n",(0,d.jsx)(n.h2,{id:"use",children:"Use"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"import Uppy from '@uppy/core';\nimport DragDrop from '@uppy/drag-drop';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/drag-drop/dist/style.min.css';\n\nnew Uppy().use(DragDrop, { target: '#drag-drop' });\n"})}),"\n",(0,d.jsx)(n.admonition,{type:"info",children:(0,d.jsxs)(n.p,{children:["Certain ",(0,d.jsx)(n.a,{href:"/docs/uppy#restrictions",children:"restrictions"})," set in Uppy\u2019s options, namely\n",(0,d.jsx)(n.code,{children:"maxNumberOfFiles"})," and ",(0,d.jsx)(n.code,{children:"allowedFileTypes"}),", affect the system file picker dialog.\nIf ",(0,d.jsx)(n.code,{children:"maxNumberOfFiles: 1"}),", users will only be able to select one file, and\n",(0,d.jsx)(n.code,{children:"allowedFileTypes: ['video/*', '.gif']"})," means only videos or gifs (files with\n",(0,d.jsx)(n.code,{children:".gif"})," extension) will be selectable."]})}),"\n",(0,d.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,d.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,d.jsx)(n.h4,{id:"id",children:(0,d.jsx)(n.code,{children:"id"})}),"\n",(0,d.jsxs)(n.p,{children:["A unique identifier for this plugin (",(0,d.jsx)(n.code,{children:"string"}),", Default: ",(0,d.jsx)(n.code,{children:"'DragDrop'"}),")."]}),"\n",(0,d.jsx)(n.p,{children:"Use this if you need to add several DragDrop instances."}),"\n",(0,d.jsx)(n.h4,{id:"target",children:(0,d.jsx)(n.code,{children:"target"})}),"\n",(0,d.jsxs)(n.p,{children:["DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,d.jsx)(n.code,{children:"string"})," or ",(0,d.jsx)(n.code,{children:"Element"}),", default: ",(0,d.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,d.jsx)(n.h4,{id:"width",children:(0,d.jsx)(n.code,{children:"width"})}),"\n",(0,d.jsxs)(n.p,{children:["Drag and drop area width (",(0,d.jsx)(n.code,{children:"string"}),", default: ",(0,d.jsx)(n.code,{children:"'100%'"}),")."]}),"\n",(0,d.jsx)(n.p,{children:"Set in inline CSS, so feel free to use percentage, pixels or other values that\nyou like."}),"\n",(0,d.jsx)(n.h4,{id:"height",children:(0,d.jsx)(n.code,{children:"height"})}),"\n",(0,d.jsxs)(n.p,{children:["Drag and drop area height (",(0,d.jsx)(n.code,{children:"string"}),", default: ",(0,d.jsx)(n.code,{children:"'100%'"}),")."]}),"\n",(0,d.jsx)(n.p,{children:"Set in inline CSS, so feel free to use percentage, pixels or other values that\nyou like."}),"\n",(0,d.jsx)(n.h4,{id:"note",children:(0,d.jsx)(n.code,{children:"note"})}),"\n",(0,d.jsxs)(n.p,{children:["Optionally, specify a string of text that explains something about the upload\nfor the user (",(0,d.jsx)(n.code,{children:"string"}),", default: ",(0,d.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,d.jsxs)(n.p,{children:["This is a place to explain any ",(0,d.jsx)(n.code,{children:"restrictions"})," that are put in place. For\nexample: ",(0,d.jsx)(n.code,{children:"'Images and video only, 2\u20133 files, up to 1 MB'"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"locale",children:(0,d.jsx)(n.code,{children:"locale"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n\tstrings: {\n\t\t// Text to show on the droppable area.\n\t\t// `%{browse}` is replaced with a link that opens the system file selection dialog.\n\t\tdropHereOr: 'Drop here or %{browse}',\n\t\t// Used as the label for the link that opens the system file selection dialog.\n\t\tbrowse: 'browse',\n\t},\n};\n"})}),"\n",(0,d.jsx)(n.h4,{id:"ondragoverevent",children:(0,d.jsx)(n.code,{children:"onDragOver(event)"})}),"\n",(0,d.jsxs)(n.p,{children:["Callback for the ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragover",children:(0,d.jsx)(n.code,{children:"ondragover"})})," event handler."]}),"\n",(0,d.jsx)(n.h4,{id:"ondragleaveevent",children:(0,d.jsx)(n.code,{children:"onDragLeave(event)"})}),"\n",(0,d.jsxs)(n.p,{children:["Callback for the ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragleave",children:(0,d.jsx)(n.code,{children:"ondragleave"})})," event handler."]}),"\n",(0,d.jsx)(n.h4,{id:"ondropevent",children:(0,d.jsx)(n.code,{children:"onDrop(event)"})}),"\n",(0,d.jsxs)(n.p,{children:["Callback for the ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondrop",children:(0,d.jsx)(n.code,{children:"ondrop"})})," event handler."]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(u,{...e})}):u(e)}},65171:(e,n,r)=>{r.d(n,{A:()=>a});var d=r(96540),i=r(21432),s=r(27293),l=r(4476),o=r(74848);const{version:t}=l;function a(e){let{children:n,uppyCssName:r="uppy.min.css",uppyJsName:l="uppy.min.mjs"}=e,a=[];d.Children.toArray(n).forEach((e=>{a=[...a,...String(e).trim().split("\n").map((e=>e.trim()))]}));const c=a.map((e=>`  ${e}`)).join("\n"),h=`https://releases.transloadit.com/uppy/v${t}/${l}`,p=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${t}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${c.replace(/{{UPPY_JS_URL}}/g,h)}\n<\/script>\n`;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.A,{type:"caution",children:[(0,o.jsx)("p",{children:"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."}),(0,o.jsx)("p",{children:"It can be useful to speed up your development environment, so don't hesitate to use it to get you started."})]}),(0,o.jsx)(i.A,{language:"html",children:p})]})}}}]);