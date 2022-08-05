/*! For license information please see 1f391b9e.f8b9d186.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_docusaurus=self.webpackChunk_utrecht_docusaurus||[]).push([[85],{876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(r),p=a,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||l;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9836:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(2784),a=r(876),l=r(7896),o=r(9817),i=r(6277);var c=r(9149),s=r(1813),u=r(421),d=r(9475),f=r(2403),p=r(4341),m=r(889),h=r(836),y=r(7171),v=r(1160),b=r(5569),O=r(1540),g=r(1276);const _={a:function(e){const t=/^https?:/i.test(e.href);return n.createElement(o.Z,(0,l.Z)({className:(0,i.default)("utrecht-link",t&&"utrecht-link--external")},e))},h1:c.Heading1,h2:s.Heading2,h3:u.Heading3,h4:d.Heading4,h5:f.Heading5,h6:p.Heading6,hr:y.Separator,ol:m.OrderedList,p:h.Paragraph,table:v.Table,td:b.TableCell,th:O.TableHeaderCell,tr:g.TableRow,ul:function(e){return n.createElement("ul",(0,l.Z)({},e,{className:(t=e.className,(0,i.default)("utrecht-unordered-list",t,"string"==typeof t&&t.includes("contains-task-list")&&"contains-task-list_leKa"))}));var t}};function j(e){let{children:t}=e;return n.createElement(a.Zo,{components:_},t)}},8398:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var n=r(2784),a=r(6277),l=r(8162),o=r(211),i=r(7155),c=r(9836),s=r(8188);const u="mdxPageWrapper_SLvB";function d(e){const{content:t}=e,{metadata:{title:r,description:d,frontMatter:f}}=t,{wrapperClassName:p,hide_table_of_contents:m}=f;return n.createElement(l.FG,{className:(0,a.default)(null!=p?p:o.k.wrapper.mdxPages,o.k.page.mdxPage)},n.createElement(l.d,{title:r,description:d}),n.createElement(i.Z,null,n.createElement("main",{className:"container container--fluid margin-vert--lg"},n.createElement("div",{className:(0,a.default)("row",u)},n.createElement("div",{className:(0,a.default)("col",!m&&"col--8")},n.createElement("article",null,n.createElement(c.Z,null,n.createElement(t,null)))),!m&&t.toc.length>0&&n.createElement("div",{className:"col col--2"},n.createElement(s.Z,{toc:t.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level}))))))}},8188:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7896),a=r(2784),l=r(6277),o=r(6986);const i="tableOfContents_TN1Q";function c(e){let{className:t,...r}=e;return a.createElement("div",{className:(0,l.default)(i,"thin-scrollbar",t)},a.createElement(o.Z,(0,n.Z)({},r,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},6986:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7896),a=r(2784),l=r(7683);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),r=Array(7).fill(-1);t.forEach(((e,t)=>{const n=r.slice(2,e.level);e.parentIndex=Math.max(...n),r[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:r,...a}=e;r>=0?t[r].children.push(a):n.push(a)})),n}function i(e){let{toc:t,minHeadingLevel:r,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:r,maxHeadingLevel:n});return function(e){return e.level>=r&&e.level<=n}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){var r;let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){var l;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:null!=(l=e[e.indexOf(a)-1])?l:null}return null!=(r=e[e.length-1])?r:null}function u(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),r=u();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:r}=e;const n=[];for(let a=t;a<=r;a+=1)n.push("h"+a+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=s(i,{anchorTopOffset:r.current}),u=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,r){r?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===u)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,r])}function f(e){let{toc:t,className:r,linkClassName:n,isChild:l}=e;return t.length?a.createElement("ul",{className:l?void 0:r},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(f,{isChild:!0,toc:e.children,className:r,linkClassName:n}))))):null}const p=a.memo(f);function m(e){let{toc:t,className:r="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:u,maxHeadingLevel:f,...m}=e;const h=(0,l.L)(),y=null!=u?u:h.tableOfContents.minHeadingLevel,v=null!=f?f:h.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:r,maxHeadingLevel:n}=e;return(0,a.useMemo)((()=>i({toc:o(t),minHeadingLevel:r,maxHeadingLevel:n})),[t,r,n])}({toc:t,minHeadingLevel:y,maxHeadingLevel:v});return d((0,a.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:y,maxHeadingLevel:v}}),[c,s,y,v])),a.createElement(p,(0,n.Z)({toc:b,className:r,linkClassName:c},m))}},9149:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Heading1=void 0;const l=r(2322),o=a(r(6277)),i=r(2784);t.Heading1=i.forwardRef(((e,t)=>{var{children:r,className:a}=e,i=n(e,["children","className"]);return l.jsx("h1",Object.assign({},i,{ref:t,className:o.default("utrecht-heading-1",a)},{children:r}),void 0)})),t.Heading1.displayName="utrecht-heading-1"},1813:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Heading2=void 0;const l=r(2322),o=a(r(6277)),i=r(2784);t.Heading2=i.forwardRef(((e,t)=>{var{children:r,className:a}=e,i=n(e,["children","className"]);return l.jsx("h2",Object.assign({},i,{ref:t,className:o.default("utrecht-heading-2",a)},{children:r}),void 0)})),t.Heading2.displayName="utrecht-heading-2"},421:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Heading3=void 0;const l=r(2322),o=a(r(6277)),i=r(2784);t.Heading3=i.forwardRef(((e,t)=>{var{children:r,className:a}=e,i=n(e,["children","className"]);return l.jsx("h3",Object.assign({},i,{ref:t,className:o.default("utrecht-heading-3",a)},{children:r}),void 0)})),t.Heading3.displayName="utrecht-heading-3"},9475:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Heading4=void 0;const l=r(2322),o=a(r(6277)),i=r(2784);t.Heading4=i.forwardRef(((e,t)=>{var{children:r,className:a}=e,i=n(e,["children","className"]);return l.jsx("h4",Object.assign({},i,{ref:t,className:o.default("utrecht-heading-4",a)},{children:r}),void 0)})),t.Heading4.displayName="utrecht-heading-4"},2403:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Heading5=void 0;const l=r(2322),o=a(r(6277)),i=r(2784);t.Heading5=i.forwardRef(((e,t)=>{var{children:r,className:a}=e,i=n(e,["children","className"]);return l.jsx("h5",Object.assign({},i,{ref:t,className:o.default("utrecht-heading-5",a)},{children:r}),void 0)})),t.Heading5.displayName="utrecht-heading-5"},4341:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Heading6=void 0;const l=r(2322),o=a(r(6277)),i=r(2784);t.Heading6=i.forwardRef(((e,t)=>{var{children:r,className:a}=e,i=n(e,["children","className"]);return l.jsx("h6",Object.assign({},i,{ref:t,className:o.default("utrecht-heading-6",a)},{children:r}),void 0)})),t.Heading6.displayName="utrecht-heading-6"},889:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.OrderedList=void 0;const l=r(2322),o=a(r(6277)),i=r(2784);t.OrderedList=i.forwardRef(((e,t)=>{var{children:r,className:a}=e,i=n(e,["children","className"]);return l.jsx("ol",Object.assign({},i,{ref:t,className:o.default("utrecht-ordered-list",a)},{children:r}),void 0)})),t.OrderedList.displayName="utrecht-ordered-list"},836:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Paragraph=void 0;const l=r(2322),o=a(r(6277)),i=r(2784);t.Paragraph=i.forwardRef(((e,t)=>{var{children:r,className:a,lead:i}=e,c=n(e,["children","className","lead"]);return l.jsx("p",Object.assign({},c,{ref:t,className:o.default("utrecht-paragraph",i&&"utrecht-paragraph--lead",a)},{children:r}),void 0)})),t.Paragraph.displayName="utrecht-paragraph"},7171:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Separator=void 0;const l=r(2322),o=a(r(6277)),i=r(2784);t.Separator=i.forwardRef(((e,t)=>{var{className:r,children:a}=e,i=n(e,["className","children"]);return l.jsx("hr",Object.assign({},i,{ref:t,className:o.default("utrecht-separator",r)}),void 0)})),t.Separator.displayName="utrecht-separator"},1160:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Table=void 0;const l=r(2322),o=a(r(6277)),i=r(2784);t.Table=i.forwardRef(((e,t)=>{var{children:r,className:a}=e,i=n(e,["children","className"]);return l.jsx("table",Object.assign({},i,{ref:t,className:o.default("utrecht-table",a)},{children:r}),void 0)})),t.Table.displayName="utrecht-table"},5569:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TableCell=void 0;const l=r(2322),o=a(r(6277)),i=r(2784);t.TableCell=i.forwardRef(((e,t)=>{var{children:r,className:a}=e,i=n(e,["children","className"]);return l.jsx("td",Object.assign({},i,{ref:t,className:o.default("utrecht-table__cell",a)},{children:r}),void 0)})),t.TableCell.displayName="utrecht-table-cell"},1540:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TableHeaderCell=void 0;const l=r(2322),o=a(r(6277)),i=r(2784);t.TableHeaderCell=i.forwardRef(((e,t)=>{var{children:r,className:a}=e,i=n(e,["children","className"]);return l.jsx("th",Object.assign({},i,{ref:t,className:o.default("utrecht-table__header-cell",a)},{children:r}),void 0)})),t.TableHeaderCell.displayName="utrecht-table-header-cell"},1276:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TableRow=void 0;const l=r(2322),o=a(r(6277)),i=r(2784);t.TableRow=i.forwardRef(((e,t)=>{var{children:r,className:a}=e,i=n(e,["children","className"]);return l.jsx("tr",Object.assign({},i,{ref:t,className:o.default("utrecht-table__row",a)},{children:r}),void 0)})),t.TableRow.displayName="utrecht-table-row"},1837:(e,t,r)=>{r(7320);var n=r(2784),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var l=Symbol.for;a=l("react.element"),t.Fragment=l("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,l={},s=null,u=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:a,type:e,key:s,ref:u,props:l,_owner:o.current}}t.jsx=s,t.jsxs=s},2322:(e,t,r)=>{e.exports=r(1837)}}]);