"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[6356],{40345:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>m,frontMatter:()=>d,metadata:()=>h,toc:()=>p});var i=s(74848),o=s(28453),l=s(11470),a=s(19365),r=s(65171);const d={slug:"/unsplash"},t="Unsplash",h={id:"sources/companion-plugins/unsplash",title:"Unsplash",description:"The @uppy/unsplash plugin lets users import files from their",source:"@site/docs/sources/companion-plugins/unsplash.mdx",sourceDirName:"sources/companion-plugins",slug:"/unsplash",permalink:"/docs/unsplash",draft:!1,unlisted:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/companion-plugins/unsplash.mdx",tags:[],version:"current",frontMatter:{slug:"/unsplash"},sidebar:"tutorialSidebar",previous:{title:"OneDrive",permalink:"/docs/onedrive"},next:{title:"Import from URL",permalink:"/docs/url"}},c={},p=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"unsplash",children:"Unsplash"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"@uppy/unsplash"})," plugin lets users import files from their\n",(0,i.jsx)(n.a,{href:"https://unsplash.com",children:"Unsplash"})," account."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/examples",children:"Try out the live example"})," or take it for a spin in\n",(0,i.jsx)(n.a,{href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd",children:"CodeSandbox"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"when-should-i-use-this",children:"When should I use this?"}),"\n",(0,i.jsxs)(n.p,{children:["When you want to let users import files from their\n",(0,i.jsx)(n.a,{href:"https://unsplash.com",children:"Unsplash"})," account."]}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," instance is required for the Unsplash plugin to\nwork. Companion handles authentication with Unsplash, downloads the files, and\nuploads them to the destination. This saves the user bandwidth, especially\nhelpful if they are on a mobile connection."]}),"\n",(0,i.jsxs)(n.p,{children:["You can self-host Companion or get a hosted version with any\n",(0,i.jsx)(n.a,{href:"https://transloadit.com/pricing/",children:"Transloadit plan"}),"."]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(a.A,{value:"npm",label:"NPM",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"npm install @uppy/unsplash\n"})})}),(0,i.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"yarn add @uppy/unsplash\n"})})}),(0,i.jsx)(a.A,{value:"cdn",label:"CDN",children:(0,i.jsx)(r.A,{children:'\n        import { Uppy, Unsplash } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Unsplash, {\n          // Options\n        })\n      '})})]}),"\n",(0,i.jsx)(n.h2,{id:"use",children:"Use"}),"\n",(0,i.jsx)(n.p,{children:"Using Unsplash requires setup in both Uppy and Companion."}),"\n",(0,i.jsx)(n.h3,{id:"use-in-uppy",children:"Use in Uppy"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"{10-13} showLineNumbers",children:"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Unsplash from '@uppy/unsplash';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nnew Uppy()\n\t.use(Dashboard, { inline: true, target: '#dashboard' })\n\t.use(Unsplash, {\n\t\ttarget: Dashboard,\n\t\tcompanionUrl: 'https://your-companion.com',\n\t});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"use-in-companion",children:"Use in Companion"}),"\n",(0,i.jsxs)(n.p,{children:["You can create a Unsplash App on the\n",(0,i.jsx)(n.a,{href:"https://unsplash.com/developers",children:"Unsplash Developers site"}),". You\u2019ll be\nredirected to the app page, this page lists the app key and app secret."]}),"\n",(0,i.jsx)(n.p,{children:"Configure the Unsplash key and secret. With the standalone Companion server,\nspecify environment variables:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'export COMPANION_UNSPLASH_KEY="Unsplash API key"\nexport COMPANION_UNSPLASH_SECRET="Unsplash API secret"\n'})}),"\n",(0,i.jsx)(n.p,{children:"When using the Companion Node.js API, configure these options:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"companion.app({\n\tproviderOptions: {\n\t\tunsplash: {\n\t\t\tkey: 'Unsplash API key',\n\t\t\tsecret: 'Unsplash API secret',\n\t\t},\n\t},\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.h4,{id:"id",children:(0,i.jsx)(n.code,{children:"id"})}),"\n",(0,i.jsxs)(n.p,{children:["A unique identifier for this plugin (",(0,i.jsx)(n.code,{children:"string"}),", default: ",(0,i.jsx)(n.code,{children:"'Unsplash'"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"title",children:(0,i.jsx)(n.code,{children:"title"})}),"\n",(0,i.jsxs)(n.p,{children:["Title / name shown in the UI, such as Dashboard tabs (",(0,i.jsx)(n.code,{children:"string"}),", default:\n",(0,i.jsx)(n.code,{children:"'Unsplash'"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"target",children:(0,i.jsx)(n.code,{children:"target"})}),"\n",(0,i.jsxs)(n.p,{children:["DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,i.jsx)(n.code,{children:"string"})," or ",(0,i.jsx)(n.code,{children:"Element"}),", default: ",(0,i.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"companionurl",children:(0,i.jsx)(n.code,{children:"companionUrl"})}),"\n",(0,i.jsxs)(n.p,{children:["URL to a ",(0,i.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," instance (",(0,i.jsx)(n.code,{children:"string"}),", default: ",(0,i.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"companionheaders",children:(0,i.jsx)(n.code,{children:"companionHeaders"})}),"\n",(0,i.jsxs)(n.p,{children:["Custom headers that should be sent along to ",(0,i.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," on\nevery request (",(0,i.jsx)(n.code,{children:"Object"}),", default: ",(0,i.jsx)(n.code,{children:"{}"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"companionallowedhosts",children:(0,i.jsx)(n.code,{children:"companionAllowedHosts"})}),"\n",(0,i.jsxs)(n.p,{children:["The valid and authorised URL(s) from which OAuth responses should be accepted\n(",(0,i.jsx)(n.code,{children:"string"})," or ",(0,i.jsx)(n.code,{children:"RegExp"})," or ",(0,i.jsx)(n.code,{children:"Array"}),", default: ",(0,i.jsx)(n.code,{children:"companionUrl"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["This value can be a ",(0,i.jsx)(n.code,{children:"string"}),", a ",(0,i.jsx)(n.code,{children:"RegExp"})," pattern, or an ",(0,i.jsx)(n.code,{children:"Array"})," of both. This is\nuseful when you have your ",(0,i.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," running on several hosts.\nOtherwise, the default value should do fine."]}),"\n",(0,i.jsx)(n.h4,{id:"companioncookiesrule",children:(0,i.jsx)(n.code,{children:"companionCookiesRule"})}),"\n",(0,i.jsxs)(n.p,{children:["This option correlates to the\n",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials",children:"RequestCredentials value"}),"\n(",(0,i.jsx)(n.code,{children:"string"}),", default: ",(0,i.jsx)(n.code,{children:"'same-origin'"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["This tells the plugin whether to send cookies to ",(0,i.jsx)(n.a,{href:"/docs/companion",children:"Companion"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"locale",children:(0,i.jsx)(n.code,{children:"locale"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n\tstrings: {\n\t\tpluginNameUnsplash: 'Unsplash',\n\t},\n};\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},65171:(e,n,s)=>{s.d(n,{A:()=>t});var i=s(96540),o=s(21432),l=s(27293),a=s(4476),r=s(74848);const{version:d}=a;function t(e){let{children:n,uppyCssName:s="uppy.min.css",uppyJsName:a="uppy.min.mjs"}=e,t=[];i.Children.toArray(n).forEach((e=>{t=[...t,...String(e).trim().split("\n").map((e=>e.trim()))]}));const h=t.map((e=>`  ${e}`)).join("\n"),c=`https://releases.transloadit.com/uppy/v${d}/${a}`,p=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${d}/${s}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${h.replace(/{{UPPY_JS_URL}}/g,c)}\n<\/script>\n`;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.A,{type:"caution",children:[(0,r.jsx)("p",{children:"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."}),(0,r.jsx)("p",{children:"It can be useful to speed up your development environment, so don't hesitate to use it to get you started."})]}),(0,r.jsx)(o.A,{language:"html",children:p})]})}}}]);