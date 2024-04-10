"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[453],{68077:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=s(74848),d=s(28453),a=s(11470),l=s(19365),o=s(65171);const i={sidebar_position:4,slug:"/status-bar"},r="Status bar",u={id:"user-interfaces/elements/status-bar",title:"Status bar",description:"The @uppy/status-bar plugin shows upload progress and speed, estimated time,",source:"@site/docs/user-interfaces/elements/status-bar.mdx",sourceDirName:"user-interfaces/elements",slug:"/status-bar",permalink:"/docs/status-bar",draft:!1,unlisted:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/status-bar.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/status-bar"},sidebar:"tutorialSidebar",previous:{title:"Informer",permalink:"/docs/informer"},next:{title:"Progress bar",permalink:"/docs/progress-bar"}},h={},c=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>hideAfterFinish</code>",id:"hideafterfinish",level:4},{value:"<code>showProgressDetails</code>",id:"showprogressdetails",level:4},{value:"<code>hideUploadButton</code>",id:"hideuploadbutton",level:4},{value:"<code>hideRetryButton</code>",id:"hideretrybutton",level:4},{value:"<code>hidePauseResumeButton</code>",id:"hidepauseresumebutton",level:4},{value:"<code>hideCancelButton</code>",id:"hidecancelbutton",level:4},{value:"<code>doneButtonHandler</code>",id:"donebuttonhandler",level:4},{value:"<code>locale</code>",id:"locale",level:4}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"status-bar",children:"Status bar"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"@uppy/status-bar"})," plugin shows upload progress and speed, estimated time,\npre- and post-processing information, and allows users to control\n(pause/resume/cancel) the upload."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Try it out together with ",(0,n.jsx)(t.a,{href:"/docs/drag-drop",children:(0,n.jsx)(t.code,{children:"@uppy/drag-drop"})})," in\n",(0,n.jsx)(t.a,{href:"https://codesandbox.io/s/uppy-drag-drop-gyewzx?file=/src/index.js",children:"CodeSandbox"})]})}),"\n",(0,n.jsx)(t.h2,{id:"when-should-i-use-it",children:"When should I use it?"}),"\n",(0,n.jsxs)(t.p,{children:["When you use the ",(0,n.jsx)(t.a,{href:"/docs/dashboard",children:"Dashboard"})," it\u2019s already included by default.\nThis plugin is published separately but made specifically for the Dashboard. You\ncan still use it without it but it may need some (CSS) tweaking for your use\ncase."]}),"\n",(0,n.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{value:"npm",label:"NPM",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"npm install @uppy/status-bar\n"})})}),(0,n.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"yarn add @uppy/status-bar\n"})})}),(0,n.jsx)(l.A,{value:"cdn",label:"CDN",children:(0,n.jsx)(o.A,{children:"\n        import { Uppy, StatusBar } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(StatusBar, { target: '#status-bar' })\n      "})})]}),"\n",(0,n.jsx)(t.h2,{id:"use",children:"Use"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"showLineNumbers",children:"import Uppy from '@uppy/core';\nimport StatusBar from '@uppy/status-bar';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/status-bar/dist/style.min.css';\n\nnew Uppy().use(StatusBar, { target: '#status-bar' });\n"})}),"\n",(0,n.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,n.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,n.jsx)(t.h4,{id:"id",children:(0,n.jsx)(t.code,{children:"id"})}),"\n",(0,n.jsxs)(t.p,{children:["A unique identifier for this Status Bar (",(0,n.jsx)(t.code,{children:"string"}),", default: ",(0,n.jsx)(t.code,{children:"'StatusBar'"}),")."]}),"\n",(0,n.jsx)(t.p,{children:"Use this if you need to add several StatusBar instances."}),"\n",(0,n.jsx)(t.h4,{id:"target",children:(0,n.jsx)(t.code,{children:"target"})}),"\n",(0,n.jsxs)(t.p,{children:["DOM element, CSS selector, or plugin to mount the Status Bar into (",(0,n.jsx)(t.code,{children:"Element"}),",\n",(0,n.jsx)(t.code,{children:"string"}),", ",(0,n.jsx)(t.code,{children:"UIPlugin"}),", default: ",(0,n.jsx)(t.code,{children:"'body'"}),")."]}),"\n",(0,n.jsx)(t.h4,{id:"hideafterfinish",children:(0,n.jsx)(t.code,{children:"hideAfterFinish"})}),"\n",(0,n.jsxs)(t.p,{children:["Hide the Status Bar after the upload is complete (",(0,n.jsx)(t.code,{children:"boolean"}),", default: ",(0,n.jsx)(t.code,{children:"true"}),")."]}),"\n",(0,n.jsx)(t.h4,{id:"showprogressdetails",children:(0,n.jsx)(t.code,{children:"showProgressDetails"})}),"\n",(0,n.jsxs)(t.p,{children:["Display remaining upload size and estimated time (",(0,n.jsx)(t.code,{children:"boolean"}),", default: ",(0,n.jsx)(t.code,{children:"false"}),")"]}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"false"}),": Uploading: 45%"]}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"true"}),": Uploading: 45%\u30fb43 MB of 101 MB\u30fb8s left"]})]}),"\n",(0,n.jsx)(t.h4,{id:"hideuploadbutton",children:(0,n.jsx)(t.code,{children:"hideUploadButton"})}),"\n",(0,n.jsxs)(t.p,{children:["Hide the upload button (",(0,n.jsx)(t.code,{children:"boolean"}),", default: ",(0,n.jsx)(t.code,{children:"false"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["Use this if you are providing a custom upload button somewhere, and using the\n",(0,n.jsx)(t.code,{children:"uppy.upload()"})," API."]}),"\n",(0,n.jsx)(t.h4,{id:"hideretrybutton",children:(0,n.jsx)(t.code,{children:"hideRetryButton"})}),"\n",(0,n.jsxs)(t.p,{children:["Hide the retry button (",(0,n.jsx)(t.code,{children:"boolean"}),", default: ",(0,n.jsx)(t.code,{children:"false"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["Use this if you are providing a custom retry button somewhere, and using the\n",(0,n.jsx)(t.code,{children:"uppy.retryAll()"})," or ",(0,n.jsx)(t.code,{children:"uppy.retryUpload(fileID)"})," API."]}),"\n",(0,n.jsx)(t.h4,{id:"hidepauseresumebutton",children:(0,n.jsx)(t.code,{children:"hidePauseResumeButton"})}),"\n",(0,n.jsxs)(t.p,{children:["Hide pause/resume buttons (for resumable uploads, via ",(0,n.jsx)(t.a,{href:"http://tus.io",children:"tus"}),", for\nexample) (",(0,n.jsx)(t.code,{children:"boolean"}),", default: ",(0,n.jsx)(t.code,{children:"false"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["Use this if you are providing custom cancel or pause/resume buttons somewhere,\nand using the ",(0,n.jsx)(t.code,{children:"uppy.pauseResume(fileID)"})," or ",(0,n.jsx)(t.code,{children:"uppy.removeFile(fileID)"})," API."]}),"\n",(0,n.jsx)(t.h4,{id:"hidecancelbutton",children:(0,n.jsx)(t.code,{children:"hideCancelButton"})}),"\n",(0,n.jsxs)(t.p,{children:["Hide the cancel button (",(0,n.jsx)(t.code,{children:"boolean"}),", default: ",(0,n.jsx)(t.code,{children:"false"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["Use this if you are providing a custom retry button somewhere, and using the\n",(0,n.jsx)(t.code,{children:"uppy.cancelAll()"})," API."]}),"\n",(0,n.jsx)(t.h4,{id:"donebuttonhandler",children:(0,n.jsx)(t.code,{children:"doneButtonHandler"})}),"\n",(0,n.jsxs)(t.p,{children:["Status Bar will render a \u201cDone\u201d button in place of pause/resume/cancel buttons,\nonce the upload/encoding is done (",(0,n.jsx)(t.code,{children:"Function"}),", default: ",(0,n.jsx)(t.code,{children:"null"}),")."]}),"\n",(0,n.jsx)(t.p,{children:"The behaviour of this \u201cDone\u201d button is defined by the handler function \u2014 can be\nused to close file picker modals or clear the upload state. This is what the\nDashboard plugin, which uses Status Bar internally, sets:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const doneButtonHandler = () => {\n\tthis.uppy.reset();\n\tthis.requestCloseModal();\n};\n"})}),"\n",(0,n.jsx)(t.h4,{id:"locale",children:(0,n.jsx)(t.code,{children:"locale"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"export default {\n\tstrings: {\n\t\t// Shown in the status bar while files are being uploaded.\n\t\tuploading: 'Uploading',\n\t\t// Shown in the status bar once all files have been uploaded.\n\t\tcomplete: 'Complete',\n\t\t// Shown in the status bar if an upload failed.\n\t\tuploadFailed: 'Upload failed',\n\t\t// Shown in the status bar while the upload is paused.\n\t\tpaused: 'Paused',\n\t\t// Used as the label for the button that retries an upload.\n\t\tretry: 'Retry',\n\t\t// Used as the label for the button that cancels an upload.\n\t\tcancel: 'Cancel',\n\t\t// Used as the label for the button that pauses an upload.\n\t\tpause: 'Pause',\n\t\t// Used as the label for the button that resumes an upload.\n\t\tresume: 'Resume',\n\t\t// Used as the label for the button that resets the upload state after an upload\n\t\tdone: 'Done',\n\t\t// When `showProgressDetails` is set, shows the number of files that have been fully uploaded so far.\n\t\tfilesUploadedOfTotal: {\n\t\t\t0: '%{complete} of %{smart_count} file uploaded',\n\t\t\t1: '%{complete} of %{smart_count} files uploaded',\n\t\t},\n\t\t// When `showProgressDetails` is set, shows the amount of bytes that have been uploaded so far.\n\t\tdataUploadedOfTotal: '%{complete} of %{total}',\n\t\t// When `showProgressDetails` is set, shows an estimation of how long the upload will take to complete.\n\t\txTimeLeft: '%{time} left',\n\t\t// Used as the label for the button that starts an upload.\n\t\tuploadXFiles: {\n\t\t\t0: 'Upload %{smart_count} file',\n\t\t\t1: 'Upload %{smart_count} files',\n\t\t},\n\t\t// Used as the label for the button that starts an upload, if another upload has been started in the past\n\t\t// and new files were added later.\n\t\tuploadXNewFiles: {\n\t\t\t0: 'Upload +%{smart_count} file',\n\t\t\t1: 'Upload +%{smart_count} files',\n\t\t},\n\t\tupload: 'Upload',\n\t\tretryUpload: 'Retry upload',\n\t\txMoreFilesAdded: {\n\t\t\t0: '%{smart_count} more file added',\n\t\t\t1: '%{smart_count} more files added',\n\t\t},\n\t\tshowErrorDetails: 'Show error details',\n\t},\n};\n"})})]})}function m(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},65171:(e,t,s)=>{s.d(t,{A:()=>r});var n=s(96540),d=s(21432),a=s(27293),l=s(4476),o=s(74848);const{version:i}=l;function r(e){let{children:t,uppyCssName:s="uppy.min.css",uppyJsName:l="uppy.min.mjs"}=e,r=[];n.Children.toArray(t).forEach((e=>{r=[...r,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=r.map((e=>`  ${e}`)).join("\n"),h=`https://releases.transloadit.com/uppy/v${i}/${l}`,c=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${i}/${s}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${u.replace(/{{UPPY_JS_URL}}/g,h)}\n<\/script>\n`;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.A,{type:"caution",children:[(0,o.jsx)("p",{children:"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."}),(0,o.jsx)("p",{children:"It can be useful to speed up your development environment, so don't hesitate to use it to get you started."})]}),(0,o.jsx)(d.A,{language:"html",children:c})]})}}}]);