"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[4194],{17298:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>m,frontMatter:()=>t,metadata:()=>c,toc:()=>p});var o=s(74848),i=s(28453),r=s(11470),l=s(19365),d=s(65171);const t={slug:"/url"},a="Import from URL",c={id:"sources/companion-plugins/url",title:"Import from URL",description:"The @uppy/url plugin allows users to import files from the internet. Paste any",source:"@site/docs/sources/companion-plugins/url.mdx",sourceDirName:"sources/companion-plugins",slug:"/url",permalink:"/docs/url",draft:!1,unlisted:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/companion-plugins/url.mdx",tags:[],version:"current",frontMatter:{slug:"/url"},sidebar:"tutorialSidebar",previous:{title:"Unsplash",permalink:"/docs/unsplash"},next:{title:"Zoom",permalink:"/docs/zoom"}},h={},p=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"import-from-url",children:"Import from URL"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"@uppy/url"})," plugin allows users to import files from the internet. Paste any\nURL and it will be added!"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/examples",children:"Try out the live example"})," or take it for a spin in\n",(0,o.jsx)(n.a,{href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd",children:"CodeSandbox"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"when-should-i-use-this",children:"When should I use this?"}),"\n",(0,o.jsx)(n.p,{children:"When you want to let users import files any URL."}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," instance is required for the URL plugin to work.\nThis saves the user bandwidth, especially helpful if they are on a mobile\nconnection."]}),"\n",(0,o.jsxs)(n.p,{children:["You can self-host Companion or get a hosted version with any\n",(0,o.jsx)(n.a,{href:"https://transloadit.com/pricing/",children:"Transloadit plan"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Companion has\n",(0,o.jsx)(n.a,{href:"https://owasp.org/www-community/attacks/Server_Side_Request_Forgery",children:"Server Side Request Forgery"}),"\n(SSRF) protections built-in so you don\u2019t have to worry about the security\nimplications of arbitrary URLs."]})}),"\n",(0,o.jsxs)(r.A,{children:[(0,o.jsx)(l.A,{value:"npm",label:"NPM",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"npm install @uppy/url\n"})})}),(0,o.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"yarn add @uppy/url\n"})})}),(0,o.jsx)(l.A,{value:"cdn",label:"CDN",children:(0,o.jsx)(d.A,{children:'\n        import { Uppy, Url } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Url, {\n          // Options\n        })\n      '})})]}),"\n",(0,o.jsx)(n.h2,{id:"use",children:"Use"}),"\n",(0,o.jsxs)(n.p,{children:["Using ",(0,o.jsx)(n.code,{children:"@uppy/url"})," only requires setup in Uppy."]}),"\n",(0,o.jsx)(n.h3,{id:"use-in-uppy",children:"Use in Uppy"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:"{10-13} showLineNumbers",children:"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Url from '@uppy/url';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nnew Uppy().use(Dashboard, { inline: true, target: '#dashboard' }).use(Url, {\n\ttarget: Dashboard,\n\tcompanionUrl: 'https://your-companion.com',\n});\n"})}),"\n",(0,o.jsx)(n.h3,{id:"use-in-companion",children:"Use in Companion"}),"\n",(0,o.jsx)(n.p,{children:"Companion supports this plugin out-of-the-box so integration is required on this\nside."}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,o.jsx)(n.h4,{id:"id",children:(0,o.jsx)(n.code,{children:"id"})}),"\n",(0,o.jsxs)(n.p,{children:["A unique identifier for this plugin (",(0,o.jsx)(n.code,{children:"string"}),", default: ",(0,o.jsx)(n.code,{children:"'Url'"}),")."]}),"\n",(0,o.jsx)(n.h4,{id:"title",children:(0,o.jsx)(n.code,{children:"title"})}),"\n",(0,o.jsxs)(n.p,{children:["Title / name shown in the UI, such as Dashboard tabs (",(0,o.jsx)(n.code,{children:"string"}),", default:\n",(0,o.jsx)(n.code,{children:"'Url'"}),")."]}),"\n",(0,o.jsx)(n.h4,{id:"target",children:(0,o.jsx)(n.code,{children:"target"})}),"\n",(0,o.jsxs)(n.p,{children:["DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,o.jsx)(n.code,{children:"string"})," or ",(0,o.jsx)(n.code,{children:"Element"}),", default: ",(0,o.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,o.jsx)(n.h4,{id:"companionurl",children:(0,o.jsx)(n.code,{children:"companionUrl"})}),"\n",(0,o.jsxs)(n.p,{children:["URL to a ",(0,o.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," instance (",(0,o.jsx)(n.code,{children:"string"}),", default: ",(0,o.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,o.jsx)(n.h4,{id:"companionheaders",children:(0,o.jsx)(n.code,{children:"companionHeaders"})}),"\n",(0,o.jsxs)(n.p,{children:["Custom headers that should be sent along to ",(0,o.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," on\nevery request (",(0,o.jsx)(n.code,{children:"Object"}),", default: ",(0,o.jsx)(n.code,{children:"{}"}),")."]}),"\n",(0,o.jsx)(n.h4,{id:"companionallowedhosts",children:(0,o.jsx)(n.code,{children:"companionAllowedHosts"})}),"\n",(0,o.jsxs)(n.p,{children:["The valid and authorised URL(s) from which OAuth responses should be accepted\n(",(0,o.jsx)(n.code,{children:"string"})," or ",(0,o.jsx)(n.code,{children:"RegExp"})," or ",(0,o.jsx)(n.code,{children:"Array"}),", default: ",(0,o.jsx)(n.code,{children:"companionUrl"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["This value can be a ",(0,o.jsx)(n.code,{children:"string"}),", a ",(0,o.jsx)(n.code,{children:"RegExp"})," pattern, or an ",(0,o.jsx)(n.code,{children:"Array"})," of both. This is\nuseful when you have your ",(0,o.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," running on several hosts.\nOtherwise, the default value should do fine."]}),"\n",(0,o.jsx)(n.h4,{id:"companioncookiesrule",children:(0,o.jsx)(n.code,{children:"companionCookiesRule"})}),"\n",(0,o.jsxs)(n.p,{children:["This option correlates to the\n",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials",children:"RequestCredentials value"}),"\n(",(0,o.jsx)(n.code,{children:"string"}),", default: ",(0,o.jsx)(n.code,{children:"'same-origin'"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["This tells the plugin whether to send cookies to ",(0,o.jsx)(n.a,{href:"/docs/companion",children:"Companion"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"locale",children:(0,o.jsx)(n.code,{children:"locale"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n\tstrings: {\n\t\tpluginNameUrl: 'Url',\n\t},\n};\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},65171:(e,n,s)=>{s.d(n,{A:()=>a});var o=s(96540),i=s(21432),r=s(27293),l=s(4476),d=s(74848);const{version:t}=l;function a(e){let{children:n,uppyCssName:s="uppy.min.css",uppyJsName:l="uppy.min.mjs"}=e,a=[];o.Children.toArray(n).forEach((e=>{a=[...a,...String(e).trim().split("\n").map((e=>e.trim()))]}));const c=a.map((e=>`  ${e}`)).join("\n"),h=`https://releases.transloadit.com/uppy/v${t}/${l}`,p=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${t}/${s}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${c.replace(/{{UPPY_JS_URL}}/g,h)}\n<\/script>\n`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.A,{type:"caution",children:[(0,d.jsx)("p",{children:"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."}),(0,d.jsx)("p",{children:"It can be useful to speed up your development environment, so don't hesitate to use it to get you started."})]}),(0,d.jsx)(i.A,{language:"html",children:p})]})}}}]);