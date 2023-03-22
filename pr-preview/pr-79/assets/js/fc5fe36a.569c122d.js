"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[1074],{3068:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7294),i=a(814),l=a(3612);const r=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md format:check-diff","prepare":"husky install","format:show-diff":"git stash push -q; prettier . -w --loglevel silent && git --no-pager diff && git reset --hard; git stash pop -q","format:check":"prettier -c .","format:check-diff":"yarn format:check || yarn format:show-diff","format":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.3.1","@docusaurus/plugin-client-redirects":"^2.3.1","@docusaurus/preset-classic":"^2.3.1","@mdx-js/react":"^1.6.22","@uppy/audio":"latest","@uppy/box":"latest","@uppy/core":"latest","@uppy/dashboard":"latest","@uppy/dropbox":"latest","@uppy/google-drive":"latest","@uppy/image-editor":"latest","@uppy/instagram":"latest","@uppy/locales":"latest","@uppy/onedrive":"latest","@uppy/react":"latest","@uppy/remote-sources":"latest","@uppy/screen-capture":"latest","@uppy/tus":"latest","@uppy/unsplash":"latest","@uppy/url":"latest","@uppy/webcam":"latest","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.3.1","@docusaurus/module-type-aliases":"^2.3.1","@tsconfig/docusaurus":"^1.0.7","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:o}=r;function p(e){let{children:t,uppyCssName:a="uppy.min.css",uppyJsName:r="uppy.min.js"}=e,p=[];n.Children.toArray(t).forEach((e=>{p=[...p,...String(e).trim().split("\n").map((e=>e.trim()))]}));const s=p.map((e=>`  ${e}`)).join("\n"),d=`https://releases.transloadit.com/uppy/v${o}/${r}`,u=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${o}/${a}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${s.replace(/{{UPPY_JS_URL}}/g,d)}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(l.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),n.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),n.createElement(i.Z,{language:"html"},u))}},9253:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>p,metadata:()=>d,toc:()=>m});var n=a(7462),i=(a(7294),a(3905)),l=a(4866),r=a(5162),o=a(3068);const p={sidebar_position:5,slug:"/xhr-upload"},s="XHR",d={unversionedId:"uploader/xhr",id:"uploader/xhr",title:"XHR",description:"The @uppy/xhr-upload plugin is for regular uploads to a HTTP server.",source:"@site/docs/uploader/xhr.mdx",sourceDirName:"uploader",slug:"/xhr-upload",permalink:"/uppy.io/pr-preview/pr-79/docs/xhr-upload",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/uploader/xhr.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/xhr-upload"},sidebar:"tutorialSidebar",previous:{title:"AWS S3 Multipart",permalink:"/uppy.io/pr-preview/pr-79/docs/aws-s3-multipart"},next:{title:"Angular",permalink:"/uppy.io/pr-preview/pr-79/docs/angular"}},u={},m=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>endpoint</code>",id:"endpoint",level:4},{value:"<code>method</code>",id:"method",level:4},{value:"<code>formData</code>",id:"formdata",level:4},{value:"<code>fieldName</code>",id:"fieldname",level:4},{value:"<code>allowedMetaFields</code>",id:"allowedmetafields",level:4},{value:"<code>headers</code>",id:"headers",level:4},{value:"<code>bundle</code>",id:"bundle",level:4},{value:"<code>validateStatus</code>",id:"validatestatus",level:4},{value:"Parameters",id:"parameters",level:5},{value:"<code>getResponseData</code>",id:"getresponsedata",level:4},{value:"<code>getResponseError</code>",id:"getresponseerror",level:4},{value:"<code>responseUrlFieldName</code>",id:"responseurlfieldname",level:4},{value:"<code>timeout: 30 * 1000</code>",id:"timeout-30--1000",level:4},{value:"<code>limit</code>",id:"limit",level:4},{value:"<code>responseType</code>",id:"responsetype",level:4},{value:"<code>withCredentials</code>",id:"withcredentials",level:4},{value:"<code>locale: {}</code>",id:"locale-",level:4},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"How to send along meta data with the upload?",id:"how-to-send-along-meta-data-with-the-upload",level:3},{value:"How to upload to a PHP server?",id:"how-to-upload-to-a-php-server",level:3}],h={toc:m},k="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(k,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"xhr"},"XHR"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@uppy/xhr-upload")," plugin is for regular uploads to a HTTP server."),(0,i.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Not sure which uploader is best for you? Read\n\u201c",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/choosing-uploader"},"Choosing the uploader you need"),"\u201d.")),(0,i.kt)("p",null,"When you have an existing HTTP server and you don\u2019t need Transloadit services or\nwant to run a ",(0,i.kt)("a",{parentName:"p",href:"https://tus.io/"},"tus")," server. Note that it\u2019s still possible to use ",(0,i.kt)("a",{parentName:"p",href:"https://tus.io/"},"tus"),"\nwithout running an extra server by integrating tus into your existing one. For\ninstance, if you have a Node.js server (or server-side framework like Next.js)\nyou could integrate ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tus/tus-node-server"},"tus-node-server"),"."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/xhr-upload\n"))),(0,i.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/xhr-upload\n"))),(0,i.kt)(r.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, XHRUpload } from \"{{UPPY_JS_URL}}\"\n        new Uppy().use(XHRUpload, { endpoint: 'https://tusd.tusdemo.net/files' })\n      "))),(0,i.kt)("h2",{id:"use"},"Use"),(0,i.kt)("p",null,"A quick overview of the complete API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{10} showLineNumbers","{10}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport XHR from '@uppy/xhr-upload';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nnew Uppy()\n    .use(Dashboard, { inline: true, target: 'body' })\n    .use(XHR, { endpoint: 'https://your-domain.com/upload' });\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("h4",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")),(0,i.kt)("p",null,"A unique identifier for this plugin (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"'XHRUpload'"),")."),(0,i.kt)("h4",{id:"endpoint"},(0,i.kt)("inlineCode",{parentName:"h4"},"endpoint")),(0,i.kt)("p",null,"URL of the tus server (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,i.kt)("h4",{id:"method"},(0,i.kt)("inlineCode",{parentName:"h4"},"method")),(0,i.kt)("p",null,"Configures which HTTP method to use for the upload (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default:\n",(0,i.kt)("inlineCode",{parentName:"p"},"'post'"),")."),(0,i.kt)("h4",{id:"formdata"},(0,i.kt)("inlineCode",{parentName:"h4"},"formData")),(0,i.kt)("p",null,"Configures whether to use a multipart form upload, using ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData"},"FormData"),"\n(",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,i.kt)("p",null,"This works similarly to using a ",(0,i.kt)("inlineCode",{parentName:"p"},"<form>")," element with an ",(0,i.kt)("inlineCode",{parentName:"p"},'<input type="file">'),"\nfor uploads. When set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", file metadata is also sent to the endpoint as\nseparate form fields. When set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", only the file contents are sent."),(0,i.kt)("h4",{id:"fieldname"},(0,i.kt)("inlineCode",{parentName:"h4"},"fieldName")),(0,i.kt)("p",null,"When ",(0,i.kt)("a",{parentName:"p",href:"#formData-true"},(0,i.kt)("inlineCode",{parentName:"a"},"formData"))," is set to true, this is used as the form field\nname for the file to be uploaded."),(0,i.kt)("p",null,"It defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"'files[]'")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"bundle")," option is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", otherwise it\ndefaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"'file'"),"."),(0,i.kt)("h4",{id:"allowedmetafields"},(0,i.kt)("inlineCode",{parentName:"h4"},"allowedMetaFields")),(0,i.kt)("p",null,"Pass an array of field names to limit the metadata fields that will be added to\nupload."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set this to an empty array ",(0,i.kt)("inlineCode",{parentName:"li"},"[]")," to not send any fields."),(0,i.kt)("li",{parentName:"ul"},"Set this to ",(0,i.kt)("inlineCode",{parentName:"li"},"['name']")," to only send the ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," field."),(0,i.kt)("li",{parentName:"ul"},"Set this to ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," (the default) to send ",(0,i.kt)("em",{parentName:"li"},"all")," metadata fields.")),(0,i.kt)("p",null,"If the ",(0,i.kt)("a",{parentName:"p",href:"#formData-true"},(0,i.kt)("inlineCode",{parentName:"a"},"formData"))," option is set to false, ",(0,i.kt)("inlineCode",{parentName:"p"},"metaFields")," is\nignored."),(0,i.kt)("h4",{id:"headers"},(0,i.kt)("inlineCode",{parentName:"h4"},"headers")),(0,i.kt)("p",null,"An object containing HTTP headers to use for the upload request. Keys are header\nnames, values are header values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n    authorization: `Bearer ${window.getCurrentUserToken()}`,\n};\n")),(0,i.kt)("p",null,"Header values can also be derived from file data by providing a function. The\nfunction receives an ",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy#working-with-uppy-files"},"Uppy file")," and must return an object where the keys are\nheader names, and values are header values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const headers = (file) => {\n    return {\n        authorization: `Bearer ${window.getCurrentUserToken()}`,\n        expires: file.meta.expires,\n    };\n};\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The function syntax is not available when ",(0,i.kt)("a",{parentName:"p",href:"#bundle"},(0,i.kt)("inlineCode",{parentName:"a"},"bundle"))," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,i.kt)("h4",{id:"bundle"},(0,i.kt)("inlineCode",{parentName:"h4"},"bundle")),(0,i.kt)("p",null,"Send all files in a single multipart request (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,i.kt)("p",null,"All files will be appended to the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"fieldName")," field in the request."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"When ",(0,i.kt)("inlineCode",{parentName:"p"},"bundle")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#formData-true"},(0,i.kt)("inlineCode",{parentName:"a"},"formData"))," must also be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},"Uppy won\u2019t be able to bundle remote files (such as Google Drive) and will\nthrow an error in this case."),(0,i.kt)("li",{parentName:"ul"},"Only ",(0,i.kt)("a",{parentName:"li",href:"/docs/uppy/#meta"},"global uppy metadata")," is sent to the endpoint.\nIndividual per-file metadata is ignored."))),(0,i.kt)("p",null,"To upload files on different fields, use\n",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy#uppy-setFileState-fileID-state"},(0,i.kt)("inlineCode",{parentName:"a"},"uppy.setFileState()"))," to set the\n",(0,i.kt)("inlineCode",{parentName:"p"},"xhrUpload.fieldName")," property on the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"uppy.setFileState(fileID, {\n    xhrUpload: { fieldName: 'pic0' },\n});\n")),(0,i.kt)("h4",{id:"validatestatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"validateStatus")),(0,i.kt)("p",null,"Check if the response was successful (",(0,i.kt)("inlineCode",{parentName:"p"},"function"),", default:\n",(0,i.kt)("inlineCode",{parentName:"p"},"(status, responseText, response) => boolean"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"By default, responses with a 2xx HTTP status code are considered successful."),(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,i.kt)("a",{parentName:"li",href:"#getResponseData-responseText-response"},(0,i.kt)("inlineCode",{parentName:"a"},"getResponseData()")),"\nwill be called and the upload will be marked as successful."),(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", both\n",(0,i.kt)("a",{parentName:"li",href:"#getResponseData-responseText-response"},(0,i.kt)("inlineCode",{parentName:"a"},"getResponseData()"))," and\n",(0,i.kt)("a",{parentName:"li",href:"#getResponseError-responseText-response"},(0,i.kt)("inlineCode",{parentName:"a"},"getResponseError()"))," will be called\nand the upload will be marked as unsuccessful.")),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"statusCode")," is the numeric HTTP status code returned by the endpoint."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"responseText")," is the XHR endpoint response as a string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"response")," is the ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},"XMLHttpRequest")," object.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This option is only used for ",(0,i.kt)("strong",{parentName:"p"},"local")," uploads. Uploads from remote providers\nlike Google Drive or Instagram do not support this and will always use the\ndefault.")),(0,i.kt)("h4",{id:"getresponsedata"},(0,i.kt)("inlineCode",{parentName:"h4"},"getResponseData")),(0,i.kt)("p",null,"Extract the response data from the successful upload (",(0,i.kt)("inlineCode",{parentName:"p"},"function"),", default:\n",(0,i.kt)("inlineCode",{parentName:"p"},"(responseText, response) => void"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"responseText")," is the XHR endpoint response as a string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"response")," is the ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},"XMLHttpRequest")," object.")),(0,i.kt)("p",null,"JSON is handled automatically, so you should only use this if the endpoint\nresponds with a different format. For example, an endpoint that responds with an\nXML document:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function getResponseData(responseText, response) {\n    const parser = new DOMParser();\n    const xmlDoc = parser.parseFromString(responseText, 'text/xml');\n    return {\n        url: xmlDoc.querySelector('Location').textContent,\n    };\n}\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This response data will be available on the file\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},".response")," property and will\nbe emitted in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy/#upload-success"},(0,i.kt)("inlineCode",{parentName:"a"},"upload-success"))," event.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When uploading files from remote providers such as Dropbox or Instagram,\nCompanion sends upload response data to the client. This is made available in\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"getResponseData()")," function as well. The ",(0,i.kt)("inlineCode",{parentName:"p"},"response")," object from Companion\nhas some properties named after their ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},"XMLHttpRequest")," counterparts.")),(0,i.kt)("h4",{id:"getresponseerror"},(0,i.kt)("inlineCode",{parentName:"h4"},"getResponseError")),(0,i.kt)("p",null,"Extract the error from the failed upload (",(0,i.kt)("inlineCode",{parentName:"p"},"function"),", default:\n",(0,i.kt)("inlineCode",{parentName:"p"},"(responseText, response) => void"),")."),(0,i.kt)("p",null,"For example, if the endpoint responds with a JSON object containing a\n",(0,i.kt)("inlineCode",{parentName:"p"},"{ message }")," property, this would show that message to the user:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function getResponseError(responseText, response) {\n    return new Error(JSON.parse(responseText).message);\n}\n")),(0,i.kt)("h4",{id:"responseurlfieldname"},(0,i.kt)("inlineCode",{parentName:"h4"},"responseUrlFieldName")),(0,i.kt)("p",null,"The field name containing the location of the uploaded file (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default:\n",(0,i.kt)("inlineCode",{parentName:"p"},"'url'"),")."),(0,i.kt)("p",null,"This is returned by ",(0,i.kt)("a",{parentName:"p",href:"#getResponseData"},(0,i.kt)("inlineCode",{parentName:"a"},"getResponseData()")),"."),(0,i.kt)("h4",{id:"timeout-30--1000"},(0,i.kt)("inlineCode",{parentName:"h4"},"timeout: 30 * 1000")),(0,i.kt)("p",null,"Abort the connection if no upload progress events have been received for this\nmilliseconds amount (",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"30_000"),")."),(0,i.kt)("p",null,"Note that unlike the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout"},(0,i.kt)("inlineCode",{parentName:"a"},"XMLHttpRequest.timeout"))," property, this is a\ntimer between progress events: the total upload can take longer than this value.\nSet to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," to disable this check."),(0,i.kt)("h4",{id:"limit"},(0,i.kt)("inlineCode",{parentName:"h4"},"limit")),(0,i.kt)("p",null,"The maximum amount of files to upload in parallel (",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),")."),(0,i.kt)("h4",{id:"responsetype"},(0,i.kt)("inlineCode",{parentName:"h4"},"responseType")),(0,i.kt)("p",null,"The response type expected from the server, determining how the ",(0,i.kt)("inlineCode",{parentName:"p"},"xhr.response"),"\nproperty should be filled (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"'text'"),")."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"xhr.response")," property can be accessed in a custom\n",(0,i.kt)("a",{parentName:"p",href:"#getResponseData-responseText-response"},(0,i.kt)("inlineCode",{parentName:"a"},"getResponseData()"))," callback. This\noption sets the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType"},(0,i.kt)("inlineCode",{parentName:"a"},"XMLHttpRequest.responseType"))," property. Only\n",(0,i.kt)("inlineCode",{parentName:"p"},"''"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'text'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'arraybuffer'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'blob'")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"'document'")," are widely supported\nby browsers, so it\u2019s recommended to use one of those."),(0,i.kt)("h4",{id:"withcredentials"},(0,i.kt)("inlineCode",{parentName:"h4"},"withCredentials")),(0,i.kt)("p",null,"Indicates whether cross-site Access-Control requests should be made using\ncredentials (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,i.kt)("h4",{id:"locale-"},(0,i.kt)("inlineCode",{parentName:"h4"},"locale: {}")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        // Shown in the Informer if an upload is being canceled because it stalled for too long.\n        timedOut: 'Upload stalled for %{seconds} seconds, aborting.',\n    },\n};\n")),(0,i.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,i.kt)("h3",{id:"how-to-send-along-meta-data-with-the-upload"},"How to send along meta data with the upload?"),(0,i.kt)("p",null,"When using XHRUpload with ",(0,i.kt)("a",{parentName:"p",href:"#formData-true"},(0,i.kt)("inlineCode",{parentName:"a"},"formData: true")),", file metadata is\nsent along with each upload request. You can set metadata for a file using\n",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy#uppy-setFileMeta-fileID-data"},(0,i.kt)("inlineCode",{parentName:"a"},"uppy.setFileMeta(fileID, data)")),", or\nfor all files simultaneously using\n",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy#uppy-setMeta-data"},(0,i.kt)("inlineCode",{parentName:"a"},"uppy.setMeta(data)")),"."),(0,i.kt)("p",null,"It may be useful to set metadata depending on some file properties, such as the\nsize. You can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy/#file-added"},(0,i.kt)("inlineCode",{parentName:"a"},"file-added"))," event and the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy#uppy-setFileMeta-fileID-data"},(0,i.kt)("inlineCode",{parentName:"a"},"uppy.setFileMeta(fileID, data)")),"\nmethod to do this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('file-added', (file) => {\n    uppy.setFileMeta(file.id, {\n        size: file.size,\n    });\n});\n")),(0,i.kt)("p",null,"Now, a form field named ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," will be sent along to the\n",(0,i.kt)("a",{parentName:"p",href:"#endpoint-39-39"},(0,i.kt)("inlineCode",{parentName:"a"},"endpoint"))," once the upload starts."),(0,i.kt)("p",null,"By default, all metadata is sent, including Uppy\u2019s default ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"\nmetadata. If you do not want the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," metadata properties to be\nsent to your upload endpoint, you can use the ",(0,i.kt)("a",{parentName:"p",href:"#metaFields-null"},(0,i.kt)("inlineCode",{parentName:"a"},"metaFields")),"\noption to restrict the field names that should be sent."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(XHRUpload, {\n    // Only send our own `size` metadata field.\n    allowedMetaFields: ['size'],\n});\n")),(0,i.kt)("h3",{id:"how-to-upload-to-a-php-server"},"How to upload to a PHP server?"),(0,i.kt)("p",null,"The XHRUpload plugin works similarly to a ",(0,i.kt)("inlineCode",{parentName:"p"},"<form>")," upload. You can use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"$_FILES")," variable on the server to work with uploaded files. See the PHP\ndocumentation on ",(0,i.kt)("a",{parentName:"p",href:"https://secure.php.net/manual/en/features.file-upload.php"},"Handling file uploads"),"."),(0,i.kt)("p",null,"The default form field for file uploads is ",(0,i.kt)("inlineCode",{parentName:"p"},"files[]"),", which means you have to\naccess the ",(0,i.kt)("inlineCode",{parentName:"p"},"$_FILES")," array as described in ",(0,i.kt)("a",{parentName:"p",href:"https://secure.php.net/manual/en/features.file-upload.multiple.php"},"Uploading many files"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n// upload.php\n$files = $_FILES['files'];\n$file_path = $files['tmp_name'][0]; // temporary upload path of the first file\n$file_name = $_POST['name']; // desired name of the file\nmove_uploaded_file($file_path, './img/' . basename($file_name)); // save the file in `img/`\n")),(0,i.kt)("p",null,"Note how we are using ",(0,i.kt)("inlineCode",{parentName:"p"},"$_POST['name']")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"$my_file['name']"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"$my_file['name']")," has the original name of the file on the user\u2019s device.\n",(0,i.kt)("inlineCode",{parentName:"p"},"$_POST['name']")," has the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," metadata value for the uploaded file, which can\nbe edited by the user using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/dashboard"},"Dashboard"),"."),(0,i.kt)("p",null,"Set a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"fieldName")," to make working with the ",(0,i.kt)("inlineCode",{parentName:"p"},"$_FILES")," array a bit less\nconvoluted:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nuppy.use(XHRUpload, {\n    endpoint: '/upload.php',\n    fieldName: 'my_file',\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n// upload.php\n$my_file = $_FILES['my_file'];\n$file_path = $my_file['tmp_name']; // temporary upload path of the file\n$file_name = $_POST['name']; // desired name of the file\nmove_uploaded_file($file_path, $_SERVER['DOCUMENT_ROOT'] . '/img/' . basename($file_name)); // save the file at `img/FILE_NAME`\n")))}c.isMDXComponent=!0}}]);