"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[7575],{68964:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var r=s(74848),i=s(28453),t=s(11470),d=s(19365),o=s(65171);const c={sidebar_position:2,slug:"/screen-capture"},l="Screen capture",a={id:"sources/screen-capture",title:"Screen capture",description:"The @uppy/screen-capture plugin can record your screen or an application and",source:"@site/docs/sources/screen-capture.mdx",sourceDirName:"sources",slug:"/screen-capture",permalink:"/docs/screen-capture",draft:!1,unlisted:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/screen-capture.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/screen-capture"},sidebar:"tutorialSidebar",previous:{title:"Webcam",permalink:"/docs/webcam"},next:{title:"Audio",permalink:"/docs/audio"}},p={},h=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:3},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>displayMediaConstraints</code>",id:"displaymediaconstraints",level:4},{value:"<code>userMediaConstraints</code>",id:"usermediaconstraints",level:4},{value:"<code>preferredVideoMimeType</code>",id:"preferredvideomimetype",level:4},{value:"<code>locale</code>",id:"locale",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"screen-capture",children:"Screen capture"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"@uppy/screen-capture"})," plugin can record your screen or an application and\nsave it as a video."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/examples",children:"Try out the live example"})," or take it for a spin in\n",(0,r.jsx)(n.a,{href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd",children:"CodeSandbox"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"when-should-i-use-this",children:"When should I use this?"}),"\n",(0,r.jsxs)(n.p,{children:["When you want users record their screen on their computer. This plugin only\nworks on desktop browsers which support\n",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia",children:(0,r.jsx)(n.code,{children:"getDisplayMedia API"})}),".\nIf no support for the API is detected, Screen Capture won\u2019t be installed, so you\ndon\u2019t have to do anything."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["To use the screen capture plugin in a Chromium-based browser,\n",(0,r.jsx)(n.a,{href:"https://developers.google.com/web/updates/2015/10/chrome-47-webrtc#public_service_announcements",children:"your site must be served over https"}),".\nThis restriction does not apply on ",(0,r.jsx)(n.code,{children:"localhost"}),", so you don\u2019t have to jump\nthrough many hoops during development."]})}),"\n",(0,r.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(t.A,{children:[(0,r.jsx)(d.A,{value:"npm",label:"NPM",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install @uppy/screen-capture\n"})})}),(0,r.jsx)(d.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"yarn add @uppy/screen-capture\n"})})}),(0,r.jsx)(d.A,{value:"cdn",label:"CDN",children:(0,r.jsx)(o.A,{children:"\n        import { Uppy, Dashboard, ScreenCapture } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(Dashboard, { inline: true, target: 'body' })\n        uppy.use(ScreenCapture, { target: Uppy.Dashboard })\n      "})})]}),"\n",(0,r.jsx)(n.h2,{id:"use",children:"Use"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"{3,7,11} showLineNumbers",children:"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport ScreenCapture from '@uppy/screen-capture';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\nimport '@uppy/screen-capture/dist/style.min.css';\n\nnew Uppy()\n\t.use(Dashboard, { inline: true, target: 'body' })\n\t.use(ScreenCapture, { target: Dashboard });\n"})}),"\n",(0,r.jsx)(n.h3,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.h4,{id:"id",children:(0,r.jsx)(n.code,{children:"id"})}),"\n",(0,r.jsxs)(n.p,{children:["A unique identifier for this plugin (",(0,r.jsx)(n.code,{children:"string"}),", default: ",(0,r.jsx)(n.code,{children:"'ScreenCapture'"}),")."]}),"\n",(0,r.jsx)(n.h4,{id:"title",children:(0,r.jsx)(n.code,{children:"title"})}),"\n",(0,r.jsxs)(n.p,{children:["Configures the title / name shown in the UI, for instance, on Dashboard tabs\n(",(0,r.jsx)(n.code,{children:"string"}),", default: ",(0,r.jsx)(n.code,{children:"'Screen Capture'"}),")."]}),"\n",(0,r.jsx)(n.h4,{id:"target",children:(0,r.jsx)(n.code,{children:"target"})}),"\n",(0,r.jsxs)(n.p,{children:["DOM element, CSS selector, or plugin to place the screen capture into (",(0,r.jsx)(n.code,{children:"string"}),"\nor ",(0,r.jsx)(n.code,{children:"Element"}),", default: ",(0,r.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,r.jsx)(n.h4,{id:"displaymediaconstraints",children:(0,r.jsx)(n.code,{children:"displayMediaConstraints"})}),"\n",(0,r.jsxs)(n.p,{children:["Options passed to\n",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia",children:(0,r.jsx)(n.code,{children:"MediaDevices.getDisplayMedia()"})}),"\n(",(0,r.jsx)(n.code,{children:"Object"}),", default: ",(0,r.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["See the\n",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints",children:(0,r.jsx)(n.code,{children:"MediaTrackConstraints"})}),"\nfor a list of options."]}),"\n",(0,r.jsx)(n.h4,{id:"usermediaconstraints",children:(0,r.jsx)(n.code,{children:"userMediaConstraints"})}),"\n",(0,r.jsxs)(n.p,{children:["Options passed to\n",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia",children:(0,r.jsx)(n.code,{children:"MediaDevices.getUserMedia()"})}),"\n(",(0,r.jsx)(n.code,{children:"Object"}),", default: ",(0,r.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["See the\n",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints",children:(0,r.jsx)(n.code,{children:"MediaTrackConstraints"})}),"\nfor a list of options."]}),"\n",(0,r.jsx)(n.h4,{id:"preferredvideomimetype",children:(0,r.jsx)(n.code,{children:"preferredVideoMimeType"})}),"\n",(0,r.jsxs)(n.p,{children:["Set the preferred mime type for video recordings, for example ",(0,r.jsx)(n.code,{children:"'video/webm'"}),"\n(",(0,r.jsx)(n.code,{children:"string"}),", default: ",(0,r.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,r.jsx)(n.p,{children:"If the browser supports the given mime type, the video will be recorded in this\nformat. If the browser does not support it, it will use the browser default."}),"\n",(0,r.jsxs)(n.p,{children:["If no preferred video mime type is given, the ScreenCapture plugin will prefer\ntypes listed in the ",(0,r.jsxs)(n.a,{href:"/docs/uppy/#restrictions",children:[(0,r.jsx)(n.code,{children:"allowedFileTypes"})," restriction"]}),",\nif any."]}),"\n",(0,r.jsx)(n.h4,{id:"locale",children:(0,r.jsx)(n.code,{children:"locale"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n\tstrings: {\n\t\tstartCapturing: 'Begin screen capturing',\n\t\tstopCapturing: 'Stop screen capturing',\n\t\tsubmitRecordedFile: 'Submit recorded file',\n\t\tstreamActive: 'Stream active',\n\t\tstreamPassive: 'Stream passive',\n\t\tmicDisabled: 'Microphone access denied by user',\n\t\trecording: 'Recording',\n\t},\n};\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},65171:(e,n,s)=>{s.d(n,{A:()=>l});var r=s(96540),i=s(21432),t=s(27293),d=s(4476),o=s(74848);const{version:c}=d;function l(e){let{children:n,uppyCssName:s="uppy.min.css",uppyJsName:d="uppy.min.mjs"}=e,l=[];r.Children.toArray(n).forEach((e=>{l=[...l,...String(e).trim().split("\n").map((e=>e.trim()))]}));const a=l.map((e=>`  ${e}`)).join("\n"),p=`https://releases.transloadit.com/uppy/v${c}/${d}`,h=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${c}/${s}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${a.replace(/{{UPPY_JS_URL}}/g,p)}\n<\/script>\n`;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.A,{type:"caution",children:[(0,o.jsx)("p",{children:"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."}),(0,o.jsx)("p",{children:"It can be useful to speed up your development environment, so don't hesitate to use it to get you started."})]}),(0,o.jsx)(i.A,{language:"html",children:h})]})}}}]);