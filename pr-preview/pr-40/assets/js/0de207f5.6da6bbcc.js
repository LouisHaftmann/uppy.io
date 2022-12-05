"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[8421],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||n;return a?o.createElement(h,s(s({ref:t},u),{},{components:a})):o.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<n;p++)s[p]=a[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1694:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=a(7462),r=(a(7294),a(3905));const n={sidebar_position:1},s="Choosing the upload strategy you need",i={unversionedId:"guides/choosing-upload-strategy",id:"guides/choosing-upload-strategy",title:"Choosing the upload strategy you need",description:"Versatile, reliable uploading is at the heart of Uppy. It has many configurable plugins to suit your needs.",source:"@site/docs/guides/choosing-upload-strategy.md",sourceDirName:"guides",slug:"/guides/choosing-upload-strategy",permalink:"/uppy.io/pr-preview/pr-40/docs/guides/choosing-upload-strategy",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/guides/choosing-upload-strategy.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/uppy.io/pr-preview/pr-40/docs/quick-start"},next:{title:"Using locales",permalink:"/uppy.io/pr-preview/pr-40/docs/guides/using-locales"}},l={},p=[{value:"Use cases",id:"use-cases",level:2},{value:"I want worry-free, plug-and-play uploads with Transloadit services",id:"i-want-worry-free-plug-and-play-uploads-with-transloadit-services",level:3},{value:"I want reliable, resumable uploads",id:"i-want-reliable-resumable-uploads",level:3},{value:"I want to upload to AWS S3 (or S3-compatible storage) directly",id:"i-want-to-upload-to-aws-s3-or-s3-compatible-storage-directly",level:3},{value:"Which one should I pick?",id:"which-one-should-i-pick",level:4},{value:"I want to send regular HTTP uploads to my own server",id:"i-want-to-send-regular-http-uploads-to-my-own-server",level:3}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"choosing-the-upload-strategy-you-need"},"Choosing the upload strategy you need"),(0,r.kt)("p",null,"Versatile, reliable uploading is at the heart of Uppy. It has many configurable plugins to suit your needs.\nIn this guide we will explain the different plugins, their strategies, and when to use them based on use cases."),(0,r.kt)("h2",{id:"use-cases"},"Use cases"),(0,r.kt)("h3",{id:"i-want-worry-free-plug-and-play-uploads-with-transloadit-services"},"I want worry-free, plug-and-play uploads with Transloadit services"),(0,r.kt)("p",null,"Transloadit\u2019s strength is versatility.\nBy doing video, audio, images, documents, and more,\nyou only need one vendor for ",(0,r.kt)("a",{parentName:"p",href:"https://transloadit.com/services/"},"all your file processing needs"),".\nThe ",(0,r.kt)("a",{parentName:"p",href:"/docs/upload-strategies/transloadit"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/transloadit"))," plugin directly uploads to Transloadit\nso you only have to worry about creating a ",(0,r.kt)("a",{parentName:"p",href:"https://transloadit.com/docs/getting-started/concepts/"},"template"),".\nIt uses ",(0,r.kt)("a",{parentName:"p",href:"#i-want-reliable-resumable-uploads"},"Tus")," under the hood so you don\u2019t have to\nsacrifice reliable, resumable uploads for convenience."),(0,r.kt)("p",null,"You should use ",(0,r.kt)("a",{parentName:"p",href:"/docs/upload-strategies/transloadit"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/transloadit"))," if you don\u2019t want to host your own server,\n(optionally) need file processing, and store it in the service (such as S3 or GCS) of your liking.\nAll with minimal effort."),(0,r.kt)("h3",{id:"i-want-reliable-resumable-uploads"},"I want reliable, resumable uploads"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tus.io/"},"Tus")," is a new open protocol for resumable uploads built on HTTP.\nThis means accidentally closing your tab or losing connection let\u2019s you continue, for instance, your 10GB upload\ninstead of starting all over."),(0,r.kt)("p",null,"Tus supports any language, any platform, and any network.\nIt requires a client and server integration to work.\nYou can checkout the client and server ",(0,r.kt)("a",{parentName:"p",href:"https://tus.io/implementations.html"},"implementations")," to find the server in your preferred language.\nYou can store files on the Tus server itself, but you can also use service integrations (such as S3) to store files externally."),(0,r.kt)("p",null,"If you want reliable, resumable uploads: use ",(0,r.kt)("a",{parentName:"p",href:"/docs/upload-strategies/tus"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/tus"))," to connect to your Tus server in a few lines of code."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you plan to let people upload ",(0,r.kt)("em",{parentName:"p"},"a lot")," of files, ",(0,r.kt)("a",{parentName:"p",href:"/docs/upload-strategies/tus"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/tus"))," has exponential backoff built-in.\nMeaning if your server (or proxy) returns HTTP 429 because it\u2019s being overloaded, ",(0,r.kt)("a",{parentName:"p",href:"/docs/upload-strategies/tus"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/tus"))," will\nfind the ideal sweet spot to keep uploading without overloading.")),(0,r.kt)("h3",{id:"i-want-to-upload-to-aws-s3-or-s3-compatible-storage-directly"},"I want to upload to AWS S3 (or S3-compatible storage) directly"),(0,r.kt)("p",null,"When you prefer a ",(0,r.kt)("em",{parentName:"p"},"client-to-storage")," over a ",(0,r.kt)("em",{parentName:"p"},"client-to-server-to-storage")," (such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/upload-strategies/transloadit"},"Transloadit")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/upload-strategies/tus"},"Tus"),") setup.\nThis may in some cases be preferable, for instance, to reduce costs or the complexity of running a server and load balancer with ",(0,r.kt)("a",{parentName:"p",href:"/docs/upload-strategies/tus"},"Tus"),"."),(0,r.kt)("p",null,"Uppy has two plugins to make this happen ",(0,r.kt)("a",{parentName:"p",href:"/docs/upload-strategies/aws-s3"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/upload-strategies/aws-s3-multipart"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3-multipart")),"."),(0,r.kt)("h4",{id:"which-one-should-i-pick"},"Which one should I pick?"),(0,r.kt)("p",null,"If your users are planning to mostly upload small files and/or a lot of files, it\u2019s better to use ",(0,r.kt)("a",{parentName:"p",href:"/docs/upload-strategies/aws-s3"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3")),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/upload-strategies/aws-s3-multipart"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3-multipart"))," is valuable for larger files (100","\xa0","MB+) as it uploads a single object as a set of parts.\nThis has certain benefits, such as improved throughput (uploading parts in parallel) and quick recovery from network issues (only the failed parts need to be retried).\nThe downside is request overhead, as it needs to do creation, signing, and completion requests besides the upload requests.\nFor example, if you are uploading files that are only a couple kilobytes with a 100ms roundtrip latency,\nyou are spending 400ms on overhead and only a few milliseconds on uploading. "),(0,r.kt)("p",null,"If you are uploading large files (100","\xa0","MB+), we recommend ",(0,r.kt)("a",{parentName:"p",href:"/docs/upload-strategies/aws-s3-multipart"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3-multipart")),", otherwise ",(0,r.kt)("a",{parentName:"p",href:"/docs/upload-strategies/aws-s3"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3")),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can also save files in S3 with the ",(0,r.kt)("a",{parentName:"p",href:"https://transloadit.com/services/file-exporting/s3-store/"},(0,r.kt)("inlineCode",{parentName:"a"},"/s3/store"))," robot while still\nusing the powers of Transloadit services.")),(0,r.kt)("h3",{id:"i-want-to-send-regular-http-uploads-to-my-own-server"},"I want to send regular HTTP uploads to my own server"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/upload-strategies/xhr"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/xhr-upload"))," handles classic HTML multipart form uploads as well as uploads using the HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," method."))}d.isMDXComponent=!0}}]);