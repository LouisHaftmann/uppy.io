"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[4673],{9058:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(7294),l=a(6010),r=a(7676),s=a(7524),o=a(9960),i=a(5999);const c="sidebar_re4s",m="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",g="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function h(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:d},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var E=a(3102);function f(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return n.createElement(E.Zo,{component:f,props:e})}function v(e){let{sidebar:t}=e;const a=(0,s.i)();return t?.items.length?"mobile"===a?n.createElement(b,{sidebar:t}):n.createElement(h,{sidebar:t}):null}function _(e){const{sidebar:t,toc:a,children:s,...o}=e,i=t&&t.items.length>0;return n.createElement(r.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(v,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},2584:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7462),l=a(7294),r=a(5999),s=a(9960);function o(){return l.createElement("b",null,l.createElement(r.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function i(e){const{blogPostTitle:t,...a}=e;return l.createElement(s.Z,(0,n.Z)({"aria-label":(0,r.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(o,null))}},401:(e,t,a)=>{a.d(t,{Z:()=>M});var n=a(7294),l=a(6010),r=a(9460),s=a(4996);function o(e){let{children:t,className:a}=e;const{frontMatter:l,assets:o}=(0,r.C)(),{withBaseUrl:i}=(0,s.C)(),c=o.image??l.image;return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&n.createElement("meta",{itemProp:"image",content:i(c,{absolute:!0})}),t)}var i=a(9960);const c="title_f1Hy";function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,r.C)(),{permalink:o,title:m}=a,u=s?"h1":"h2";return n.createElement(u,{className:(0,l.Z)(c,t),itemProp:"headline"},s?m:n.createElement(i.Z,{itemProp:"url",to:o},m))}var u=a(5999),d=a(2263);const g=["zero","one","two","few","many","other"];function p(e){return g.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:p(["one","other"]),select:e=>1===e?"one":"other"};function E(){const{i18n:{currentLocale:e}}=(0,d.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:p(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),h}}),[e])}function f(){const e=E();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}const b="container_mt6G";function v(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=f();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function _(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function N(){return n.createElement(n.Fragment,null," \xb7 ")}function Z(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:s,formattedDate:o,readingTime:i}=a;return n.createElement("div",{className:(0,l.Z)(b,"margin-vert--md",t)},n.createElement(_,{date:s,formattedDate:o}),void 0!==i&&n.createElement(n.Fragment,null,n.createElement(N,null),n.createElement(v,{readingTime:i})))}function P(e){return e.href?n.createElement(i.Z,e):n.createElement(n.Fragment,null,e.children)}function k(e){let{author:t,className:a}=e;const{name:r,title:s,url:o,imageURL:i,email:c}=t,m=o||c&&`mailto:${c}`||void 0;return n.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},i&&n.createElement(P,{href:m,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:i,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(P,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),s&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},s)))}const T="authorCol_Hf19",w="imageOnlyAuthorRow_pa_O",C="imageOnlyAuthorCol_G86a";function y(e){let{className:t}=e;const{metadata:{authors:a},assets:s}=(0,r.C)();if(0===a.length)return null;const o=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",o?w:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,l.Z)(!o&&"col col--6",o?C:T),key:t},n.createElement(k,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})))))}function B(){return n.createElement("header",null,n.createElement(m,null),n.createElement(Z,null),n.createElement(y,null))}var I=a(8780),F=a(76);function L(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=(0,r.C)();return n.createElement("div",{id:s?I.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},n.createElement(F.Z,null,t))}var x=a(4508);function M(e){let{children:t,className:a}=e;const s=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(o,{className:(0,l.Z)(s,a)},n.createElement(B,null),n.createElement(L,null,t),n.createElement(x.Z,null))}},4881:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7294),l=a(5999),r=a(5281),s=a(7462),o=a(6010);const i="iconEdit_Z9Sw";function c(e){let{className:t,...a}=e;return n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(i,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010),r=a(9960);function s(e){const{permalink:t,title:a,subLabel:s,isNext:o}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&n.createElement("div",{className:"pagination-nav__sublabel"},s),n.createElement("div",{className:"pagination-nav__label"},a))}},6233:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7294),l=a(6010),r=a(5999),s=a(9960);const o="tag_zVej",i="tagRegular_sFm0",c="tagWithCount_h2kH";function m(e){let{permalink:t,label:a,count:r}=e;return n.createElement(s.Z,{href:t,className:(0,l.Z)(o,r?c:i)},a,r&&n.createElement("span",null,r))}const u="tags_jXut",d="tag_QGVx";function g(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(u,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:d},n.createElement(m,{label:t,permalink:a}))}))))}},9460:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>s});var n=a(7294),l=a(902);const r=n.createContext(null);function s(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const s=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:s},t)}function o(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}}}]);