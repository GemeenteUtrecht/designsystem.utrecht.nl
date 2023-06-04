/*! For license information please see web-component-web-component-library-vue-stories-mdx.dd726ab0.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[73470],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/web-component/web-component-library-vue.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>web_component_library_vue_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),Markdown=__webpack_require__("../../documentation/components/Markdown.jsx");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Vue.js Web Component/README",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Vue.js Web Component/README"}),"\n",(0,jsx_runtime.jsx)(Markdown.U,{children:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Vue.js Components\n\nThe `@utrecht/web-component-library-stencil` package contains the actual implementation of every web component, while the `@utrecht/web-component-library-vue` only contains wrapper Vue.js 3 components to help validate all the templates, and some supporting code to support Vue.js form bindings. The implementation of each component will be loaded separately and on-demand, so including the entire component library will not slow down your application.\n\nInstall both packages to use Vue.js components in your project:\n\n```shell\nnpm install --save-dev --save-exact \\\n  @utrecht/web-component-library-vue \\\n  @utrecht/web-component-library-stencil\n```\n\nFor example, in your `App.vue`:\n\n```html\n<template>\n  <utrecht-heading-1>Login</utrecht-heading-1>\n  <form action="/login" method="post">\n    <utrecht-form-field-textbox v-model="username" autocomplete="username">Username</utrecht-form-field-textbox>\n    <utrecht-form-field-textbox v-model="password" autocomplete="current-password" type="password"\n      >Password</utrecht-form-field-textbox\n    >\n    <div>\n      <utrecht-button type="submit">Login</utrecht-button>\n    </div>\n  </form>\n</template>\n\n<script>\n  import { UtrechtButton, UtrechtFormFieldTextbox, UtrechtHeading1 } from "@utrecht/web-component-library-vue";\n\n  export default {\n    components: {\n      "utrecht-button": UtrechtButton,\n      "utrecht-form-field-textbox": UtrechtFormFieldTextbox,\n      "utrecht-heading-1": UtrechtHeading1,\n    },\n    data() {\n      return {\n        username: "",\n        password: "",\n      };\n    },\n  };\n<\/script>\n```\n\nSince the implementation of the web components needs to be loaded in the browser, include the following effect to import web component library from `@utrecht/web-component-library-stencil`, for example in your `main.js`:\n\n```js\nimport "@utrecht/design-tokens/dist/index.css";\nimport { defineCustomElements } from "@utrecht/web-component-library-stencil/loader";\n\ncreateApp(App).use(router).mount("#app");\n\ndefineCustomElements();\n```\n'})]})}}};const web_component_library_vue_stories=componentMeta},"../../documentation/components/Markdown.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Markdown});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const Markdown=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.UG,{children:children.replace(/(^|\r?\n)---[\s|\D|\w]+\r?\n---/gm,"")});Markdown.displayName="Markdown"}}]);