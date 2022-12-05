"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3089],{3269:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var a=n(7294),r=n(6010),l=n(2263),i=n(1944),o=n(5281),s=n(9058),c=n(5999),m=n(2244);function u(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(m.Z,{permalink:n,title:a.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),r&&a.createElement(m.Z,{permalink:r,title:a.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var p=n(197),d=n(9460),E=n(756);function g(e){let{items:t,component:n=E.Z}=e;return a.createElement(a.Fragment,null,t.map((e=>{let{content:t}=e;return a.createElement(d.n,{key:t.metadata.permalink,content:t},a.createElement(n,null,a.createElement(t,null)))})))}function h(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,l.Z)(),{blogDescription:r,blogTitle:o,permalink:s}=t,c="/"===s?n:o;return a.createElement(a.Fragment,null,a.createElement(i.d,{title:c,description:r}),a.createElement(p.Z,{tag:"blog_posts_list"}))}function f(e){const{metadata:t,items:n,sidebar:r}=e;return a.createElement(s.Z,{sidebar:r},a.createElement(g,{items:n}),a.createElement(u,{metadata:t}))}function Z(e){return a.createElement(i.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},a.createElement(h,e),a.createElement(f,e))}},2503:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),i=n(5999),o=n(6668);const s="anchorWithStickyNavbar_LWe7",c="anchorWithHideOnScrollNavbar_WYt5";function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:u}}=(0,o.L)();return"h1"!==t&&n?r.createElement(t,(0,a.Z)({},m,{className:(0,l.Z)("anchor",u?c:s),id:n}),m.children,r.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,(0,a.Z)({},m,{id:void 0}))}},76:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(7294),r=n(3905),l=n(7462),i=n(5742);var o=n(814);var s=n(9960);var c=n(6010),m=n(2389),u=n(6043);const p="details_lb9f",d="isBrowser_bmU9",E="collapsibleContent_i85q";function g(e){return!!e&&("SUMMARY"===e.tagName||g(e.parentElement))}function h(e,t){return!!e&&(e===t||h(e.parentElement,t))}function f(e){let{summary:t,children:n,...r}=e;const i=(0,m.Z)(),o=(0,a.useRef)(null),{collapsed:s,setCollapsed:f}=(0,u.u)({initialState:!r.open}),[Z,v]=(0,a.useState)(r.open);return a.createElement("details",(0,l.Z)({},r,{ref:o,open:Z,"data-collapsed":s,className:(0,c.Z)(p,i&&d,r.className),onMouseDown:e=>{g(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;g(t)&&h(t,o.current)&&(e.preventDefault(),s?(f(!1),v(!0)):f(!0))}}),t??a.createElement("summary",null,"Details"),a.createElement(u.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{f(e),v(!e)}},a.createElement("div",{className:E},n)))}const Z="details_b_Ee";function v(e){let{...t}=e;return a.createElement(f,(0,l.Z)({},t,{className:(0,c.Z)("alert alert--info",Z,t.className)}))}var b=n(2503);function y(e){return a.createElement(b.Z,e)}const k="containsTaskList_mC6p";const N="img_ev3q";const T={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e):e));return a.createElement(i.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?a.createElement("code",e):a.createElement(o.Z,e)},a:function(e){return a.createElement(s.Z,e)},pre:function(e){var t;return a.createElement(o.Z,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(v,(0,l.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,l.Z)({},e,{className:(t=e.className,(0,c.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&k))}));var t},img:function(e){return a.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(t=e.className,(0,c.Z)(t,N))}));var t},h1:e=>a.createElement(y,(0,l.Z)({as:"h1"},e)),h2:e=>a.createElement(y,(0,l.Z)({as:"h2"},e)),h3:e=>a.createElement(y,(0,l.Z)({as:"h3"},e)),h4:e=>a.createElement(y,(0,l.Z)({as:"h4"},e)),h5:e=>a.createElement(y,(0,l.Z)({as:"h5"},e)),h6:e=>a.createElement(y,(0,l.Z)({as:"h6"},e)),admonition:n(3612).Z};function _(e){let{children:t}=e;return a.createElement(r.Zo,{components:T},t)}}}]);