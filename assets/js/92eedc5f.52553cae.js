"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[46],{16245:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>p});var s=i(74848),o=i(28453),r=i(11470),d=i(19365),l=i(65171);const t={slug:"/onedrive"},c="OneDrive",a={id:"sources/companion-plugins/onedrive",title:"OneDrive",description:"The @uppy/onedrive plugin lets users import files from their",source:"@site/docs/sources/companion-plugins/onedrive.mdx",sourceDirName:"sources/companion-plugins",slug:"/onedrive",permalink:"/docs/onedrive",draft:!1,unlisted:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/companion-plugins/onedrive.mdx",tags:[],version:"current",frontMatter:{slug:"/onedrive"},sidebar:"tutorialSidebar",previous:{title:"Instagram",permalink:"/docs/instagram"},next:{title:"Unsplash",permalink:"/docs/unsplash"}},h={},p=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"onedrive",children:"OneDrive"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@uppy/onedrive"})," plugin lets users import files from their\n",(0,s.jsx)(n.a,{href:"https://onedrive.com",children:"OneDrive"})," account."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/examples",children:"Try out the live example"})," or take it for a spin in\n",(0,s.jsx)(n.a,{href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd",children:"CodeSandbox"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"when-should-i-use-this",children:"When should I use this?"}),"\n",(0,s.jsxs)(n.p,{children:["When you want to let users import files from their\n",(0,s.jsx)(n.a,{href:"https://onedrive.com",children:"OneDrive"})," account."]}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," instance is required for the OneDrive plugin to\nwork. Companion handles authentication with OneDrive, downloads the files, and\nuploads them to the destination. This saves the user bandwidth, especially\nhelpful if they are on a mobile connection."]}),"\n",(0,s.jsxs)(n.p,{children:["You can self-host Companion or get a hosted version with any\n",(0,s.jsx)(n.a,{href:"https://transloadit.com/pricing/",children:"Transloadit plan"}),"."]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(d.A,{value:"npm",label:"NPM",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npm install @uppy/onedrive\n"})})}),(0,s.jsx)(d.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"yarn add @uppy/onedrive\n"})})}),(0,s.jsx)(d.A,{value:"cdn",label:"CDN",children:(0,s.jsx)(l.A,{children:'\n        import { Uppy, OneDrive } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(OneDrive, {\n          // Options\n        })\n      '})})]}),"\n",(0,s.jsx)(n.h2,{id:"use",children:"Use"}),"\n",(0,s.jsx)(n.p,{children:"Using OneDrive requires setup in both Uppy and Companion."}),"\n",(0,s.jsx)(n.h3,{id:"use-in-uppy",children:"Use in Uppy"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"{10-13} showLineNumbers",children:"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport OneDrive from '@uppy/onedrive';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nnew Uppy()\n\t.use(Dashboard, { inline: true, target: '#dashboard' })\n\t.use(OneDrive, {\n\t\ttarget: Dashboard,\n\t\tcompanionUrl: 'https://your-companion.com',\n\t});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"use-in-companion",children:"Use in Companion"}),"\n",(0,s.jsxs)(n.p,{children:["To sign up for API keys, go to the\n",(0,s.jsx)(n.a,{href:"https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",children:"Azure Platform from Microsoft"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Create a project for your app if you don\u2019t have one yet."}),"\n",(0,s.jsxs)(n.p,{children:["The app page has a ",(0,s.jsx)(n.code,{children:'"Redirect URIs"'})," field. Here, add:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://$YOUR_COMPANION_HOST_NAME/onedrive/redirect\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you are using Transloadit hosted Companion:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://api2.transloadit.com/companion/onedrive/redirect\n"})}),"\n",(0,s.jsx)(n.p,{children:"Microsoft will give you an OAuth client ID and client secret."}),"\n",(0,s.jsx)(n.p,{children:"Configure the OneDrive key and secret in Companion. With the standalone\nCompanion server, specify environment variables:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'export COMPANION_ONEDRIVE_KEY="OneDrive Application ID"\nexport COMPANION_ONEDRIVE_SECRET="OneDrive OAuth client secret value"\n'})}),"\n",(0,s.jsx)(n.p,{children:"When using the Companion Node.js API, configure these options:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"companion.app({\n\tproviderOptions: {\n\t\tonedrive: {\n\t\t\tkey: 'OneDrive Application ID',\n\t\t\tsecret: 'OneDrive OAuth client secret value',\n\t\t},\n\t},\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.h4,{id:"id",children:(0,s.jsx)(n.code,{children:"id"})}),"\n",(0,s.jsxs)(n.p,{children:["A unique identifier for this plugin (",(0,s.jsx)(n.code,{children:"string"}),", default: ",(0,s.jsx)(n.code,{children:"'OneDrive'"}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"title",children:(0,s.jsx)(n.code,{children:"title"})}),"\n",(0,s.jsxs)(n.p,{children:["Title / name shown in the UI, such as Dashboard tabs (",(0,s.jsx)(n.code,{children:"string"}),", default:\n",(0,s.jsx)(n.code,{children:"'OneDrive'"}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"target",children:(0,s.jsx)(n.code,{children:"target"})}),"\n",(0,s.jsxs)(n.p,{children:["DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,s.jsx)(n.code,{children:"string"})," or ",(0,s.jsx)(n.code,{children:"Element"}),", default: ",(0,s.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"companionurl",children:(0,s.jsx)(n.code,{children:"companionUrl"})}),"\n",(0,s.jsxs)(n.p,{children:["URL to a ",(0,s.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," instance (",(0,s.jsx)(n.code,{children:"string"}),", default: ",(0,s.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"companionheaders",children:(0,s.jsx)(n.code,{children:"companionHeaders"})}),"\n",(0,s.jsxs)(n.p,{children:["Custom headers that should be sent along to ",(0,s.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," on\nevery request (",(0,s.jsx)(n.code,{children:"Object"}),", default: ",(0,s.jsx)(n.code,{children:"{}"}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"companionallowedhosts",children:(0,s.jsx)(n.code,{children:"companionAllowedHosts"})}),"\n",(0,s.jsxs)(n.p,{children:["The valid and authorised URL(s) from which OAuth responses should be accepted\n(",(0,s.jsx)(n.code,{children:"string"})," or ",(0,s.jsx)(n.code,{children:"RegExp"})," or ",(0,s.jsx)(n.code,{children:"Array"}),", default: ",(0,s.jsx)(n.code,{children:"companionUrl"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["This value can be a ",(0,s.jsx)(n.code,{children:"string"}),", a ",(0,s.jsx)(n.code,{children:"RegExp"})," pattern, or an ",(0,s.jsx)(n.code,{children:"Array"})," of both. This is\nuseful when you have your ",(0,s.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," running on several hosts.\nOtherwise, the default value should do fine."]}),"\n",(0,s.jsx)(n.h4,{id:"companioncookiesrule",children:(0,s.jsx)(n.code,{children:"companionCookiesRule"})}),"\n",(0,s.jsxs)(n.p,{children:["This option correlates to the\n",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials",children:"RequestCredentials value"}),"\n(",(0,s.jsx)(n.code,{children:"string"}),", default: ",(0,s.jsx)(n.code,{children:"'same-origin'"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["This tells the plugin whether to send cookies to ",(0,s.jsx)(n.a,{href:"/docs/companion",children:"Companion"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"locale",children:(0,s.jsx)(n.code,{children:"locale"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n\tstrings: {\n\t\tpluginNameOneDrive: 'OneDrive',\n\t},\n};\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},65171:(e,n,i)=>{i.d(n,{A:()=>c});var s=i(96540),o=i(21432),r=i(27293),d=i(4476),l=i(74848);const{version:t}=d;function c(e){let{children:n,uppyCssName:i="uppy.min.css",uppyJsName:d="uppy.min.mjs"}=e,c=[];s.Children.toArray(n).forEach((e=>{c=[...c,...String(e).trim().split("\n").map((e=>e.trim()))]}));const a=c.map((e=>`  ${e}`)).join("\n"),h=`https://releases.transloadit.com/uppy/v${t}/${d}`,p=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${t}/${i}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${a.replace(/{{UPPY_JS_URL}}/g,h)}\n<\/script>\n`;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.A,{type:"caution",children:[(0,l.jsx)("p",{children:"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."}),(0,l.jsx)("p",{children:"It can be useful to speed up your development environment, so don't hesitate to use it to get you started."})]}),(0,l.jsx)(o.A,{language:"html",children:p})]})}}}]);