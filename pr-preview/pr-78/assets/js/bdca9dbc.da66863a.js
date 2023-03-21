"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5386],{5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),i=n(6010),l=n(2466),o=n(6550),s=n(1980),u=n(7392),p=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=f({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),k=(()=>{const e=s??d;return c({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var k=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==o&&(d(t),s(a))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:c,onClick:m},l,{className:(0,i.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},3068:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(814),i=n(3612);const l=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md format:check-diff","prepare":"husky install","format:show-diff":"git stash push -q; prettier . -w --loglevel silent && git --no-pager diff && git reset --hard; git stash pop -q","format:check":"prettier -c .","format:check-diff":"yarn format:check || yarn format:show-diff","format":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","@uppy/audio":"latest","@uppy/box":"latest","@uppy/core":"latest","@uppy/dashboard":"latest","@uppy/dropbox":"latest","@uppy/google-drive":"latest","@uppy/image-editor":"latest","@uppy/instagram":"latest","@uppy/onedrive":"latest","@uppy/react":"latest","@uppy/remote-sources":"latest","@uppy/screen-capture":"latest","@uppy/tus":"latest","@uppy/unsplash":"latest","@uppy/url":"latest","@uppy/webcam":"latest","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:o}=l;function s(e){let{children:t,uppyCssName:n="uppy.min.css",uppyJsName:l="uppy.min.js"}=e,s=[];a.Children.toArray(t).forEach((e=>{s=[...s,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=s.map((e=>`  ${e}`)).join("\n"),p=`https://releases.transloadit.com/uppy/v${o}/${l}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${o}/${n}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${u.replace(/{{UPPY_JS_URL}}/g,p)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(i.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),a.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),a.createElement(r.Z,{language:"html"},d))}},6124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),l=n(5162),o=n(3068);const s={},u="Form",p={unversionedId:"form",id:"form",title:"Form",description:"The @uppy/form plugin integrates with an existing HTML `` element to",source:"@site/docs/form.mdx",sourceDirName:".",slug:"/form",permalink:"/uppy.io/pr-preview/pr-78/docs/form",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/form.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Compressor",permalink:"/uppy.io/pr-preview/pr-78/docs/compressor"}},d={},m=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>resultName</code>",id:"resultname",level:4},{value:"<code>getMetaFromForm</code>",id:"getmetafromform",level:4},{value:"<code>addResultToForm</code>",id:"addresulttoform",level:4},{value:"<code>triggerUploadOnSubmit</code>",id:"triggeruploadonsubmit",level:4},{value:"<code>submitOnSuccess</code>",id:"submitonsuccess",level:4}],c={toc:m},f="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"form"},"Form"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/form")," plugin integrates with an existing HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"<form>")," element to\nextract input data from it, and send along with the Uppy upload. It then appends\nthe upload result back to the form via a hidden input."),(0,r.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,r.kt)("p",null,"When you have an existing HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"<form>")," element and you would like to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Attach the form input values to the files.")," This is useful if you want to\nassociate meta data from the form (for example, name, location, id) with the\nuploaded file, so you can process it on the backend. ",(0,r.kt)("inlineCode",{parentName:"li"},"@uppy/form")," extracts the\ninput values before uploading/processing files and adds them to Uppy meta data\nstate (",(0,r.kt)("inlineCode",{parentName:"li"},"uppy.state.meta"),"), as well as and each file\u2019s meta, and appends to the\nupload in an object with ",(0,r.kt)("inlineCode",{parentName:"li"},"[file input name attribute]")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"[file input value]"),"\nkey/values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Upload the files and put the response (such as the file URLs) into a hidden\nfield")," (",(0,r.kt)("inlineCode",{parentName:"li"},'<input type="hidden" name="uppyResult">'),"). Then you can POST and\nhandle the form yourself. The appended result is a stringified version of a\nresult returned from calling ",(0,r.kt)("inlineCode",{parentName:"li"},"uppy.upload()")," or listening to ",(0,r.kt)("inlineCode",{parentName:"li"},"complete")," event."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automatically start the file upload on submit or submit the form after file\nupload.")," This is off by default. See ",(0,r.kt)("a",{parentName:"li",href:"#submitOnSuccess"},(0,r.kt)("inlineCode",{parentName:"a"},"submitOnSuccess")),"\nand ",(0,r.kt)("a",{parentName:"li",href:"#triggerUploadOnSubmit"},(0,r.kt)("inlineCode",{parentName:"a"},"triggerUploadOnSubmit"))," options respectively for\ndetails.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you are using a UI framework or library like React, Vue or Svelte, you\u2019ll\nmost likely handle form data there as well, and thus won\u2019t need this plugin.\nInstead, pass meta data to Uppy via\n",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy-core#setmetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"uppy.setMeta()"))," and listen to\n",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy-core#complete"},(0,r.kt)("inlineCode",{parentName:"a"},"uppy.on('complete')"))," to get the upload results\nback.")),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/form\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/form\n"))),(0,r.kt)(l.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,r.kt)(o.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Form } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Form, {\n          // Options\n        })\n      '))),(0,r.kt)("h2",{id:"use"},"Use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.js"',title:'"app.js"'},"import Uppy from '@uppy/core';\nimport Form from '@uppy/form';\nimport DragDrop from '@uppy/drag-drop';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/drag-drop/dist/style.min.css';\n\nnew Uppy().use(Form, {\n    target: '#my-form',\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<form id="my-form" action="/submit" method="get">\n    <label for="name">Enter your name: </label>\n    <input type="text" name="name" required />\n\n    <label for="dob">Date of birth: </label>\n    <input type="date" name="dob" />\n\n    <input type="submit" value="Save" />\n</form>\n')),(0,r.kt)("p",null,"By default the code above will:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Extract meta data from the form ",(0,r.kt)("inlineCode",{parentName:"li"},"#my-form"),"."),(0,r.kt)("li",{parentName:"ol"},"Send it with the Uppy upload."),(0,r.kt)("li",{parentName:"ol"},"Those fields will then be added to Uppy meta data state (",(0,r.kt)("inlineCode",{parentName:"li"},"uppy.state.meta"),")\nand each file\u2019s meta, and appended as (meta)data to the upload in an object\nwith ",(0,r.kt)("inlineCode",{parentName:"li"},"[file input name attribute]")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"[file input value]")," key/values."),(0,r.kt)("li",{parentName:"ol"},"When Uppy completes upload/processing, it will add an\n",(0,r.kt)("inlineCode",{parentName:"li"},'<input type="hidden" name="uppyResult">')," with the stringified upload result\nobject back to the form.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can disable both of these features, see options below.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/form")," can also start Uppy upload automatically once the form is\nsubmitted, and even submit the form after the upload is complete. This is off by\ndefault. See ",(0,r.kt)("a",{parentName:"p",href:"#triggerUploadOnSubmit"},(0,r.kt)("inlineCode",{parentName:"a"},"triggerUploadOnSubmit"))," and\n",(0,r.kt)("a",{parentName:"p",href:"#submitOnSuccess"},(0,r.kt)("inlineCode",{parentName:"a"},"submitOnSuccess"))," options below for details.")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("h4",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")),(0,r.kt)("p",null,"A unique identifier for this plugin (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'Form'"),")."),(0,r.kt)("h4",{id:"target"},(0,r.kt)("inlineCode",{parentName:"h4"},"target")),(0,r.kt)("p",null,"DOM element or CSS selector for the form element (",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Element"),",\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("p",null,"This is required for the plugin to work."),(0,r.kt)("h4",{id:"resultname"},(0,r.kt)("inlineCode",{parentName:"h4"},"resultName")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," attribute for the ",(0,r.kt)("inlineCode",{parentName:"p"},'<input type="hidden">')," where the result will be\nadded (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"uppyResult"),")."),(0,r.kt)("h4",{id:"getmetafromform"},(0,r.kt)("inlineCode",{parentName:"h4"},"getMetaFromForm")),(0,r.kt)("p",null,"Configures whether to extract metadata from the form (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default:\n",(0,r.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,r.kt)("p",null,"When set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the Form plugin will extract all fields from a ",(0,r.kt)("inlineCode",{parentName:"p"},"<form>"),"\nelement before upload begins. Those fields will then be added to Uppy meta data\nstate (",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.state.meta"),") and each file\u2019s meta, and appended as (meta)data to\nthe upload in an object with ",(0,r.kt)("inlineCode",{parentName:"p"},"[file input name attribute]")," ->\n",(0,r.kt)("inlineCode",{parentName:"p"},"[file input value]")," key/values."),(0,r.kt)("h4",{id:"addresulttoform"},(0,r.kt)("inlineCode",{parentName:"h4"},"addResultToForm")),(0,r.kt)("p",null,"Configures whether to add upload/encoding results back to the form in an\n",(0,r.kt)("inlineCode",{parentName:"p"},'<input name="uppyResult" type="hidden">')," element (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,r.kt)("h4",{id:"triggeruploadonsubmit"},(0,r.kt)("inlineCode",{parentName:"h4"},"triggerUploadOnSubmit")),(0,r.kt)("p",null,"Configures whether to start the upload when the form is submitted (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),",\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,r.kt)("p",null,"When a user submits the form (via a submit button, the ",(0,r.kt)("kbd",null,"Enter")," key or\notherwise), this option will prevent form submission, and instead upload files\nvia Uppy. Then you could:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"submitOnSuccess: true")," if you need the form to ",(0,r.kt)("em",{parentName:"li"},"actually")," be submitted\nonce all files have been uploaded."),(0,r.kt)("li",{parentName:"ul"},"Listen for ",(0,r.kt)("inlineCode",{parentName:"li"},"uppy.on('complete')")," event to do something else if the file\nuploads are all you need. For example, if the form is used for file metadata\nonly.")),(0,r.kt)("h4",{id:"submitonsuccess"},(0,r.kt)("inlineCode",{parentName:"h4"},"submitOnSuccess")),(0,r.kt)("p",null,"Configures whether to submit the form after Uppy finishes uploading/encoding\n(",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")."))}h.isMDXComponent=!0}}]);