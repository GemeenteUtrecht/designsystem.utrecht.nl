/*! For license information please see PageContent-stories.009ab47e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_css=self.webpackChunk_utrecht_storybook_css||[]).push([[449],{"../../node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./src/PageContent.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,PageContentWithAside:()=>PageContentWithAside,PageContentWithBreadcrumb:()=>PageContentWithBreadcrumb,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PageContent_stories});var css_module=__webpack_require__("../component-library-react/dist/css-module/index.mjs");const tokens_namespaceObject=JSON.parse('{"utrecht":{"page-content":{"padding-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),design_token_story=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/design-token-story.tsx")),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const PageContentStory=({aside,children,main,nav})=>(0,jsx_runtime.jsxs)(css_module.JH,{children:[nav&&(0,jsx_runtime.jsx)("div",{className:"utrecht-page-content__nav",children:nav}),main&&(0,jsx_runtime.jsx)("main",{className:"utrecht-page-content__main",children:main}),aside&&(0,jsx_runtime.jsx)("aside",{className:"utrecht-page-content__aside",children:aside}),children]});PageContentStory.displayName="PageContentStory";const meta={title:"CSS Component/Page content",id:"css-page-content",component:PageContentStory,argTypes:{aside:{description:"Secondary page content"},children:{description:"Page content"},main:{description:"Main page content"},nav:{description:"Navigation"}},args:{children:[]},parameters:{tokensPrefix:"utrecht-page-content",status:{type:"WORK IN PROGRESS"},tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Page content\n"}}}},PageContent_stories=meta,Default={args:{children:[(0,jsx_runtime.jsx)(css_module.nL,{children:"Lorem ipsum"}),(0,jsx_runtime.jsx)(css_module.nv,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}},PageContentWithBreadcrumb={args:{nav:(0,jsx_runtime.jsxs)(css_module.Qu,{appearance:"arrows",children:[(0,jsx_runtime.jsx)(css_module.At,{href:"https://example.com/",rel:"home",children:"Home"}),(0,jsx_runtime.jsx)(css_module.At,{href:"https://example.com/a/",children:"Wonen en leven"}),(0,jsx_runtime.jsx)(css_module.At,{href:"https://example.com/a/b/",rel:"up",children:"Afval"})]}),main:[(0,jsx_runtime.jsx)(css_module.nL,{children:"Main page content"}),(0,jsx_runtime.jsx)(css_module.nv,{children:"The main landmark should not include breadcrumb navigation. Breadcrumb links should be part of navigation landmark."})]},parameters:{docs:{description:{story:"Styling with the `utrecht-page-content__nav` class name.\n\nThe `main` landmark should not include breadcrumb navigation. Breadcrumb links should be part of `navigation` landmark.\n\nThe preferred markup for secondary navigation components is `<nav>` with `aria-labelledby` to give it a unique label."}}},name:"Breadcrumb navigation"},PageContentWithAside={args:{main:[(0,jsx_runtime.jsx)(css_module.nL,{children:"Main page content"}),(0,jsx_runtime.jsxs)(css_module.nv,{children:["The ",(0,jsx_runtime.jsx)(css_module.EK,{children:"main"})," landmark should be used to separate the main content from complementary and unrelated content."]})],aside:[(0,jsx_runtime.jsx)(css_module.XJ,{children:"Related pages"}),(0,jsx_runtime.jsxs)(css_module.QI,{children:[(0,jsx_runtime.jsx)(css_module.AS,{children:(0,jsx_runtime.jsx)(css_module.rU,{href:"https://www.htmhell.dev/tips/landmarks/",external:!0,children:"Landmarks — HTMHell"})}),(0,jsx_runtime.jsx)(css_module.AS,{children:(0,jsx_runtime.jsx)(css_module.rU,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Complementary_role",external:!0,children:"ARIA: complementary role — MDN"})})]})]},name:"Complementary content"},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: [<Heading1>Lorem ipsum</Heading1>, <Paragraph>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n        laborum.\n      </Paragraph>]\n  }\n}",...Default.parameters?.docs?.source}}},PageContentWithBreadcrumb.parameters={...PageContentWithBreadcrumb.parameters,docs:{...PageContentWithBreadcrumb.parameters?.docs,source:{originalSource:'{\n  args: {\n    nav: <BreadcrumbNav appearance="arrows">\n        <BreadcrumbLink href="https://example.com/" rel="home">\n          Home\n        </BreadcrumbLink>\n        <BreadcrumbLink href="https://example.com/a/">Wonen en leven</BreadcrumbLink>\n        <BreadcrumbLink href="https://example.com/a/b/" rel="up">\n          Afval\n        </BreadcrumbLink>\n      </BreadcrumbNav>,\n    main: [<Heading1>Main page content</Heading1>, <Paragraph>\n        The main landmark should not include breadcrumb navigation. Breadcrumb links should be part of navigation\n        landmark.\n      </Paragraph>]\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: `Styling with the \\`utrecht-page-content__nav\\` class name.\n\nThe \\`main\\` landmark should not include breadcrumb navigation. Breadcrumb links should be part of \\`navigation\\` landmark.\n\nThe preferred markup for secondary navigation components is \\`<nav>\\` with \\`aria-labelledby\\` to give it a unique label.`\n      }\n    }\n  },\n  name: \'Breadcrumb navigation\'\n}',...PageContentWithBreadcrumb.parameters?.docs?.source}}},PageContentWithAside.parameters={...PageContentWithAside.parameters,docs:{...PageContentWithAside.parameters?.docs,source:{originalSource:'{\n  args: {\n    main: [<Heading1>Main page content</Heading1>, <Paragraph>\n        The <Code>main</Code> landmark should be used to separate the main content from complementary and unrelated\n        content.\n      </Paragraph>],\n    aside: [<Heading2>Related pages</Heading2>, <UnorderedList>\n        <UnorderedListItem>\n          <Link href="https://www.htmhell.dev/tips/landmarks/" external>\n            Landmarks — HTMHell\n          </Link>\n        </UnorderedListItem>\n        <UnorderedListItem>\n          <Link href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Complementary_role" external>\n            ARIA: complementary role — MDN\n          </Link>\n        </UnorderedListItem>\n      </UnorderedList>]\n  },\n  name: \'Complementary content\'\n}',...PageContentWithAside.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","PageContentWithBreadcrumb","PageContentWithAside","DesignTokens"]},"./src/design-token-story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>designTokenStory});var _utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../documentation/components/ComponentTokensSection.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const designTokenStory=meta=>({args:{tokens:meta.parameters.tokens,definition:meta.parameters.tokensDefinition,component:meta.parameters.tokensPrefix},parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:""}},status:null},render:({tokens,definition,component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__.k,{tokens,definition,component})});try{designTokenStory.displayName="designTokenStory",designTokenStory.__docgenInfo={description:"",displayName:"designTokenStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/design-token-story.tsx#designTokenStory"]={docgenInfo:designTokenStory.__docgenInfo,name:"designTokenStory",path:"src/design-token-story.tsx#designTokenStory"})}catch(__react_docgen_typescript_loader_error){}}}]);