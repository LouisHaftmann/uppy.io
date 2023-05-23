"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[6103],{5203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(7294),l=n(6010),o=n(833),r=n(5281),i=n(9460),c=n(9058),s=n(1324),m=n(7462),u=n(5999),d=n(2244);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:l,date:r,tags:c,authors:s,frontMatter:m}=t,{keywords:u}=m,d=e.image??m.image;return a.createElement(o.d,{title:n,description:l,keywords:u,image:d},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:r}),s.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var p=n(9407);function v(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:o}=(0,i.C)(),{nextItem:r,prevItem:m,frontMatter:u}=l,{hide_table_of_contents:d,toc_min_heading_level:f,toc_max_heading_level:v}=u;return a.createElement(c.Z,{sidebar:t,toc:!d&&o.length>0?a.createElement(p.Z,{toc:o,minHeadingLevel:f,maxHeadingLevel:v}):void 0},a.createElement(s.Z,null,n),(r||m)&&a.createElement(g,{nextItem:r,prevItem:m}))}function h(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(o.FG,{className:(0,l.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage)},a.createElement(f,null),a.createElement(v,{sidebar:e.sidebar},a.createElement(t,null))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),l=n(7294),o=n(6010),r=n(3743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},c="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,o.Z)(i.tableOfContents,"thin-scrollbar",t)},l.createElement(r.Z,(0,a.Z)({},n,{linkClassName:c,linkActiveClassName:s})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),l=n(7294),o=n(6668);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:r}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=s(i,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:o}=e;return t.length?l.createElement("ul",{className:o?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=l.memo(d);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:d,...f}=e;const p=(0,o.L)(),v=m??p.tableOfContents.minHeadingLevel,h=d??p.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>i({toc:r(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:v,maxHeadingLevel:h});return u((0,l.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:v,maxHeadingLevel:h}}),[c,s,v,h])),l.createElement(g,(0,a.Z)({toc:b,className:n,linkClassName:c},f))}},4508:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),l=n(6010),o=n(9460),r=(n(4881),n(6233)),i=n(2584);const c={footer:"footer_ZfVL",blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};function s(){const{metadata:e,isBlogPostPage:t}=(0,o.C)(),{tags:n,title:s,editUrl:m,hasTruncateMarker:u}=e,d=!t&&u,g=n.length>0;return g||d||m?a.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&c.blogPostFooterDetailsFull)},g&&a.createElement("div",{className:(0,l.Z)("col",{"col--9":d})},a.createElement(r.Z,{tags:n})),t&&a.createElement("ul",{className:c.footer},a.createElement("li",null,a.createElement("a",{target:"_blank",rel:"noopener",href:"https://twitter.com/uppy_io"},"Twitter")),a.createElement("li",null,a.createElement("a",{target:"_blank",rel:"noopener",href:"https://uppy.io/blog/atom.xml"},"RSS feed")),a.createElement("li",null,a.createElement("a",{target:"_blank",rel:"noopener",href:"https://github.com/transloadit/uppy"},"GitHub"))),d&&a.createElement("div",{className:(0,l.Z)("col text--left",{"col--3":g})},a.createElement(i.Z,{blogPostTitle:s,to:e.permalink}))):null}}}]);