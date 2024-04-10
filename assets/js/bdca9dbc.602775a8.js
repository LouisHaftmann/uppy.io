"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5631],{80206:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var i=t(74848),s=t(28453),l=t(11470),d=t(19365),o=t(65171);const r={},a="Form",c={id:"form",title:"Form",description:"The @uppy/form plugin integrates with an existing HTML `` element to",source:"@site/docs/form.mdx",sourceDirName:".",slug:"/form",permalink:"/docs/form",draft:!1,unlisted:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/form.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Compressor",permalink:"/docs/compressor"}},h={},u=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>resultName</code>",id:"resultname",level:4},{value:"<code>getMetaFromForm</code>",id:"getmetafromform",level:4},{value:"<code>addResultToForm</code>",id:"addresulttoform",level:4},{value:"<code>triggerUploadOnSubmit</code>",id:"triggeruploadonsubmit",level:4},{value:"<code>submitOnSuccess</code>",id:"submitonsuccess",level:4}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"form",children:"Form"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"@uppy/form"})," plugin integrates with an existing HTML ",(0,i.jsx)(n.code,{children:"<form>"})," element to\nextract input data from it, and send along with the Uppy upload. It then appends\nthe upload result back to the form via a hidden input."]}),"\n",(0,i.jsx)(n.h2,{id:"when-should-i-use-this",children:"When should I use this?"}),"\n",(0,i.jsxs)(n.p,{children:["When you have an existing HTML ",(0,i.jsx)(n.code,{children:"<form>"})," element and you would like to:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Attach the form input values to the files."})," This is useful if you want to\nassociate meta data from the form (for example, name, location, id) with the\nuploaded file, so you can process it on the backend. ",(0,i.jsx)(n.code,{children:"@uppy/form"})," extracts the\ninput values before uploading/processing files and adds them to Uppy meta data\nstate (",(0,i.jsx)(n.code,{children:"uppy.state.meta"}),"), as well as and each file\u2019s meta, and appends to the\nupload in an object with ",(0,i.jsx)(n.code,{children:"[file input name attribute]"})," -> ",(0,i.jsx)(n.code,{children:"[file input value]"}),"\nkey/values."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Upload the files and put the response (such as the file URLs) into a hidden\nfield"})," (",(0,i.jsx)(n.code,{children:'<input type="hidden" name="uppyResult">'}),"). Then you can POST and\nhandle the form yourself. The appended result is a stringified version of a\nresult returned from calling ",(0,i.jsx)(n.code,{children:"uppy.upload()"})," or listening to ",(0,i.jsx)(n.code,{children:"complete"})," event."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Automatically start the file upload on submit or submit the form after file\nupload."})," This is off by default. See ",(0,i.jsx)(n.a,{href:"#submitOnSuccess",children:(0,i.jsx)(n.code,{children:"submitOnSuccess"})}),"\nand ",(0,i.jsx)(n.a,{href:"#triggerUploadOnSubmit",children:(0,i.jsx)(n.code,{children:"triggerUploadOnSubmit"})})," options respectively for\ndetails."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you are using a UI framework or library like React, Vue or Svelte, you\u2019ll\nmost likely handle form data there as well, and thus won\u2019t need this plugin.\nInstead, pass meta data to Uppy via ",(0,i.jsx)(n.a,{href:"/docs/uppy#setmetadata",children:(0,i.jsx)(n.code,{children:"uppy.setMeta()"})}),"\nand listen to ",(0,i.jsx)(n.a,{href:"/docs/uppy#complete",children:(0,i.jsx)(n.code,{children:"uppy.on('complete')"})})," to get the upload\nresults back."]})}),"\n",(0,i.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{value:"npm",label:"NPM",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"npm install @uppy/form\n"})})}),(0,i.jsx)(d.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"yarn add @uppy/form\n"})})}),(0,i.jsx)(d.A,{value:"cdn",label:"CDN",children:(0,i.jsx)(o.A,{children:'\n        import { Uppy, Form } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Form, {\n          // Options\n        })\n      '})})]}),"\n",(0,i.jsx)(n.h2,{id:"use",children:"Use"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"import Uppy from '@uppy/core';\nimport Form from '@uppy/form';\nimport DragDrop from '@uppy/drag-drop';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/drag-drop/dist/style.min.css';\n\nnew Uppy().use(Form, {\n\ttarget: '#my-form',\n});\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'<form id="my-form" action="/submit" method="get">\n\t<label for="name">Enter your name: </label>\n\t<input type="text" name="name" required />\n\n\t<label for="dob">Date of birth: </label>\n\t<input type="date" name="dob" />\n\n\t<input type="submit" value="Save" />\n</form>\n'})}),"\n",(0,i.jsx)(n.p,{children:"By default the code above will:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Extract meta data from the form ",(0,i.jsx)(n.code,{children:"#my-form"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Send it with the Uppy upload."}),"\n",(0,i.jsxs)(n.li,{children:["Those fields will then be added to Uppy meta data state (",(0,i.jsx)(n.code,{children:"uppy.state.meta"}),")\nand each file\u2019s meta, and appended as (meta)data to the upload in an object\nwith ",(0,i.jsx)(n.code,{children:"[file input name attribute]"})," -> ",(0,i.jsx)(n.code,{children:"[file input value]"})," key/values."]}),"\n",(0,i.jsxs)(n.li,{children:["When Uppy completes upload/processing, it will add an\n",(0,i.jsx)(n.code,{children:'<input type="hidden" name="uppyResult">'})," with the stringified upload result\nobject back to the form."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"You can disable both of these features, see options below."})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@uppy/form"})," can also start Uppy upload automatically once the form is\nsubmitted, and even submit the form after the upload is complete. This is off by\ndefault. See ",(0,i.jsx)(n.a,{href:"#triggerUploadOnSubmit",children:(0,i.jsx)(n.code,{children:"triggerUploadOnSubmit"})})," and\n",(0,i.jsx)(n.a,{href:"#submitOnSuccess",children:(0,i.jsx)(n.code,{children:"submitOnSuccess"})})," options below for details."]})}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.h4,{id:"id",children:(0,i.jsx)(n.code,{children:"id"})}),"\n",(0,i.jsxs)(n.p,{children:["A unique identifier for this plugin (",(0,i.jsx)(n.code,{children:"string"}),", default: ",(0,i.jsx)(n.code,{children:"'Form'"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"target",children:(0,i.jsx)(n.code,{children:"target"})}),"\n",(0,i.jsxs)(n.p,{children:["DOM element or CSS selector for the form element (",(0,i.jsx)(n.code,{children:"string"})," or ",(0,i.jsx)(n.code,{children:"Element"}),",\ndefault: ",(0,i.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"This is required for the plugin to work."}),"\n",(0,i.jsx)(n.h4,{id:"resultname",children:(0,i.jsx)(n.code,{children:"resultName"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"name"})," attribute for the ",(0,i.jsx)(n.code,{children:'<input type="hidden">'})," where the result will be\nadded (",(0,i.jsx)(n.code,{children:"string"}),", default: ",(0,i.jsx)(n.code,{children:"uppyResult"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"getmetafromform",children:(0,i.jsx)(n.code,{children:"getMetaFromForm"})}),"\n",(0,i.jsxs)(n.p,{children:["Configures whether to extract metadata from the form (",(0,i.jsx)(n.code,{children:"boolean"}),", default:\n",(0,i.jsx)(n.code,{children:"true"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["When set to ",(0,i.jsx)(n.code,{children:"true"}),", the Form plugin will extract all fields from a ",(0,i.jsx)(n.code,{children:"<form>"}),"\nelement before upload begins. Those fields will then be added to Uppy meta data\nstate (",(0,i.jsx)(n.code,{children:"uppy.state.meta"}),") and each file\u2019s meta, and appended as (meta)data to\nthe upload in an object with ",(0,i.jsx)(n.code,{children:"[file input name attribute]"})," ->\n",(0,i.jsx)(n.code,{children:"[file input value]"})," key/values."]}),"\n",(0,i.jsx)(n.h4,{id:"addresulttoform",children:(0,i.jsx)(n.code,{children:"addResultToForm"})}),"\n",(0,i.jsxs)(n.p,{children:["Configures whether to add upload/encoding results back to the form in an\n",(0,i.jsx)(n.code,{children:'<input name="uppyResult" type="hidden">'})," element (",(0,i.jsx)(n.code,{children:"boolean"}),", default: ",(0,i.jsx)(n.code,{children:"true"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"triggeruploadonsubmit",children:(0,i.jsx)(n.code,{children:"triggerUploadOnSubmit"})}),"\n",(0,i.jsxs)(n.p,{children:["Configures whether to start the upload when the form is submitted (",(0,i.jsx)(n.code,{children:"boolean"}),",\ndefault: ",(0,i.jsx)(n.code,{children:"false"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["When a user submits the form (via a submit button, the ",(0,i.jsx)("kbd",{children:"Enter"})," key or\notherwise), this option will prevent form submission, and instead upload files\nvia Uppy. Then you could:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"submitOnSuccess: true"})," if you need the form to ",(0,i.jsx)(n.em,{children:"actually"})," be submitted\nonce all files have been uploaded."]}),"\n",(0,i.jsxs)(n.li,{children:["Listen for ",(0,i.jsx)(n.code,{children:"uppy.on('complete')"})," event to do something else if the file\nuploads are all you need. For example, if the form is used for file metadata\nonly."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"submitonsuccess",children:(0,i.jsx)(n.code,{children:"submitOnSuccess"})}),"\n",(0,i.jsxs)(n.p,{children:["Configures whether to submit the form after Uppy finishes uploading/encoding\n(",(0,i.jsx)(n.code,{children:"boolean"}),", default: ",(0,i.jsx)(n.code,{children:"false"}),")."]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},65171:(e,n,t)=>{t.d(n,{A:()=>a});var i=t(96540),s=t(21432),l=t(27293),d=t(4476),o=t(74848);const{version:r}=d;function a(e){let{children:n,uppyCssName:t="uppy.min.css",uppyJsName:d="uppy.min.mjs"}=e,a=[];i.Children.toArray(n).forEach((e=>{a=[...a,...String(e).trim().split("\n").map((e=>e.trim()))]}));const c=a.map((e=>`  ${e}`)).join("\n"),h=`https://releases.transloadit.com/uppy/v${r}/${d}`,u=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${r}/${t}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${c.replace(/{{UPPY_JS_URL}}/g,h)}\n<\/script>\n`;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l.A,{type:"caution",children:[(0,o.jsx)("p",{children:"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."}),(0,o.jsx)("p",{children:"It can be useful to speed up your development environment, so don't hesitate to use it to get you started."})]}),(0,o.jsx)(s.A,{language:"html",children:u})]})}}}]);