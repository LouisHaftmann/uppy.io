"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3085],{2503:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),r=t(3366),l=t(7294),i=t(6010),c=t(5999),o=t(6668),s="anchorWithStickyNavbar_LWe7",u="anchorWithHideOnScrollNavbar_WYt5",m=["as","id"];function d(e){var n=e.as,t=e.id,d=(0,r.Z)(e,m),f=(0,o.L)().navbar.hideOnScroll;return"h1"!==n&&t?l.createElement(n,(0,a.Z)({},d,{className:(0,i.Z)("anchor",f?u:s),id:t}),d.children,l.createElement("a",{className:"hash-link",href:"#"+t,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(n,(0,a.Z)({},d,{id:void 0}))}},76:function(e,n,t){t.d(n,{Z:function(){return x}});var a=t(7294),r=t(3905),l=t(7462),i=t(3366),c=t(5742),o=["mdxType","originalType"];var s=t(814);var u=t(9960);var m=t(6010),d=t(2389),f=t(6043),v="details_lb9f",p="isBrowser_bmU9",h="collapsibleContent_i85q",g=["summary","children"];function E(e){return!!e&&("SUMMARY"===e.tagName||E(e.parentElement))}function Z(e,n){return!!e&&(e===n||Z(e.parentElement,n))}function N(e){var n=e.summary,t=e.children,r=(0,i.Z)(e,g),c=(0,d.Z)(),o=(0,a.useRef)(null),s=(0,f.u)({initialState:!r.open}),u=s.collapsed,N=s.setCollapsed,L=(0,a.useState)(r.open),b=L[0],y=L[1];return a.createElement("details",(0,l.Z)({},r,{ref:o,open:b,"data-collapsed":u,className:(0,m.Z)(v,c&&p,r.className),onMouseDown:function(e){E(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;E(n)&&Z(n,o.current)&&(e.preventDefault(),u?(N(!1),y(!0)):N(!0))}}),null!=n?n:a.createElement("summary",null,"Details"),a.createElement(f.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){N(e),y(!e)}},a.createElement("div",{className:h},t)))}var L="details_b_Ee";function b(e){var n=Object.assign({},e);return a.createElement(N,(0,l.Z)({},n,{className:(0,m.Z)("alert alert--info",L,n.className)}))}var y=t(2503);function C(e){return a.createElement(y.Z,e)}var _="containsTaskList_mC6p";var k="img_ev3q";var H={head:function(e){var n=a.Children.map(e.children,(function(e){return a.isValidElement(e)?function(e){var n;if(null!=(n=e.props)&&n.mdxType&&e.props.originalType){var t=e.props,r=(t.mdxType,t.originalType,(0,i.Z)(t,o));return a.createElement(e.props.originalType,r)}return e}(e):e}));return a.createElement(c.Z,e,n)},code:function(e){var n=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){var t;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&n.includes(null==(t=e.props)?void 0:t.mdxType)}))?a.createElement("code",e):a.createElement(s.Z,e)},a:function(e){return a.createElement(u.Z,e)},pre:function(e){var n;return a.createElement(s.Z,(0,a.isValidElement)(e.children)&&"code"===(null==(n=e.children.props)?void 0:n.originalType)?e.children.props:Object.assign({},e))},details:function(e){var n=a.Children.toArray(e.children),t=n.find((function(e){var n;return a.isValidElement(e)&&"summary"===(null==(n=e.props)?void 0:n.mdxType)})),r=a.createElement(a.Fragment,null,n.filter((function(e){return e!==t})));return a.createElement(b,(0,l.Z)({},e,{summary:t}),r)},ul:function(e){return a.createElement("ul",(0,l.Z)({},e,{className:(n=e.className,(0,m.Z)(n,(null==n?void 0:n.includes("contains-task-list"))&&_))}));var n},img:function(e){return a.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(n=e.className,(0,m.Z)(n,k))}));var n},h1:function(e){return a.createElement(C,(0,l.Z)({as:"h1"},e))},h2:function(e){return a.createElement(C,(0,l.Z)({as:"h2"},e))},h3:function(e){return a.createElement(C,(0,l.Z)({as:"h3"},e))},h4:function(e){return a.createElement(C,(0,l.Z)({as:"h4"},e))},h5:function(e){return a.createElement(C,(0,l.Z)({as:"h5"},e))},h6:function(e){return a.createElement(C,(0,l.Z)({as:"h6"},e))},admonition:t(3612).Z};function x(e){var n=e.children;return a.createElement(r.Zo,{components:H},n)}},4247:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var a=t(7294),r=t(6010),l=t(1944),i=t(5281),c=t(4669),o=t(76),s=t(9407),u="mdxPageWrapper_j9I6";function m(e){var n=e.content,t=n.metadata,m=t.title,d=t.description,f=t.frontMatter,v=f.wrapperClassName,p=f.hide_table_of_contents;return a.createElement(l.FG,{className:(0,r.Z)(null!=v?v:i.k.wrapper.mdxPages,i.k.page.mdxPage)},a.createElement(l.d,{title:m,description:d}),a.createElement(c.Z,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,r.Z)("row",u)},a.createElement("div",{className:(0,r.Z)("col",!p&&"col--8")},a.createElement("article",null,a.createElement(o.Z,null,a.createElement(n,null)))),!p&&n.toc.length>0&&a.createElement("div",{className:"col col--2"},a.createElement(s.Z,{toc:n.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level}))))))}},9407:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(7462),r=t(3366),l=t(7294),i=t(6010),c=t(3743),o="tableOfContents_bqdL",s=["className"];function u(e){var n=e.className,t=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",n)},l.createElement(c.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(7462),r=t(3366),l=t(7294),i=t(6668),c=["parentIndex"];function o(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var a=[];return n.forEach((function(e){var t=e.parentIndex,l=(0,r.Z)(e,c);t>=0?n[t].children.push(l):a.push(l)})),a}function s(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function u(e){var n=e.getBoundingClientRect();return n.top===n.bottom?u(e.parentNode):n}function m(e,n){var t,a,r=n.anchorTopOffset,l=e.find((function(e){return u(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(t=e[e.length-1])?t:null}function d(){var e=(0,l.useRef)(0),n=(0,i.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function f(e){var n=(0,l.useRef)(void 0),t=d();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],r=n;r<=t;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),o=m(c,{anchorTopOffset:t.current}),s=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}function v(e){var n=e.toc,t=e.className,a=e.linkClassName,r=e.isChild;return n.length?l.createElement("ul",{className:r?void 0:t},n.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(v,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}var p=l.memo(v),h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function g(e){var n=e.toc,t=e.className,c=void 0===t?"table-of-contents table-of-contents__left-border":t,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,v=void 0===d?void 0:d,g=e.minHeadingLevel,E=e.maxHeadingLevel,Z=(0,r.Z)(e,h),N=(0,i.L)(),L=null!=g?g:N.tableOfContents.minHeadingLevel,b=null!=E?E:N.tableOfContents.maxHeadingLevel,y=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return s({toc:o(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:L,maxHeadingLevel:b});return f((0,l.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:L,maxHeadingLevel:b}}),[m,v,L,b])),l.createElement(p,(0,a.Z)({toc:y,className:c,linkClassName:m},Z))}}}]);