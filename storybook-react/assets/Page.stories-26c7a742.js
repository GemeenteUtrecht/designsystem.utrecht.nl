import{j as e,a as l,F as g}from"./jsx-runtime-91a467a5.js";import"./chunk-PCJTTTQV-28fee610.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{D as d,P as h,A as u,a as y,S as f}from"./index-49b82de3.js";import{a9 as P}from"./index-7370ff9b.js";import{t as b,d as k}from"./util-4d24f58c.js";import{Default as n}from"./PageContent.stories-f0c13892.js";import{Default as a}from"./PageFooter.stories-4e97b0e0.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-092a0af9.js";import"../sb-preview/runtime.mjs";import"./react-18-ff2c0a32.js";import"./index-8ce4a492.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-5b183829.js";import"./index-9d29e343.js";import"./index-356e4a49.js";import"./defineProperty-a128c648.js";import"./clsx.m-1229b3e0.js";import"./index-1fc0ca9a.js";const x=`<!-- @license CC0-1.0 -->

# Page component

Component that centers the page. The page maximizes the width of the content for large viewports, to keep the line length of texts readable and avoid large horizontal distances between related components.

Typically the contents of the page component are:

- Page Header component
- Page Content component
  - Main content
  - Complimentary content
- Page Footer component

## API

- CSS class name: \`utrecht-page\`
- Web component: \`<utrecht-page>\`
- Angular/React/Vue.js component: \`UtrechtPage\`

## CSS implementation

### Margin

To create some transparent space around the page, \`margin-inline\` CSS variables are provided. However, to automatically horizontally center the page \`margin-inline: auto\` needs to be used.

Achieving both goals is made possible by implementing the \`margin-inline\` as \`padding-inline\` on a transparent container element. The only downside to this approach is that margin collapsing won't work anymore, but that doesn't seem like anyone would ever need for a component that realistically is only used once per document.

### Padding

Padding is not applied directly in the page component itself, but in the child components such as Page Header, Page Content and Page Footer.

## Relevante WCAG regels

- [WCAG eis 2.4.1](https://www.w3.org/TR/WCAG21/#bypass-blocks): gebruik de skip link zodat gebruikers direct naar de _main page content_ kunnen gaan.
- [WCAG eis 2.4.2](https://www.w3.org/TR/WCAG21/#page-titled): de pagina moet een duidelijke titel hebben
`,C={page:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"margin-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}},w={utrecht:C},S={title:"React Component/Page",id:"react-page",component:P,subcomponents:{PageContent:n,PageFooter:a,PageHeader:n},args:{children:[e(n,{...n.args}),e(n,{...n.args}),e(a,{...a.args})]},parameters:{tokensPrefix:"utrecht-page",tokens:b,tokensDefinition:w,docs:{page:()=>l(g,{children:[e(d,{children:x}),e(h,{}),e(u,{story:y}),e(f,{})]})}}},t={},o=k(S);var r,s,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,m,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"designTokenStory(meta)",...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const K=["Default","DesignTokens"];export{t as Default,o as DesignTokens,K as __namedExportsOrder,S as default};
//# sourceMappingURL=Page.stories-26c7a742.js.map
