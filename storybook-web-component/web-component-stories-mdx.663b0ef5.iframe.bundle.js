/*! For license information please see web-component-stories-mdx.663b0ef5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[]).push([[796],{"./src/web-component.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>web_component_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.0_@types+react-dom@18.2.7_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),Markdown=__webpack_require__("../../documentation/components/Markdown.jsx");const READMEraw_namespaceObject='\x3c!-- @license CC0-1.0 --\x3e\n\n# Web Components\n\nIf you want to use the components library, you can use custom elements in your HTML page to render the components. The npm package `@utrecht/web-component-library-stencil` contains the implementation of every web component, but each component will be loaded separately and on-demand, so including the entire component library will not slow down your application.\n\n## Getting started\n\nInclude the Design Token CSS variables:\n\n```html\n<link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/design-tokens/dist/index.css" />\n```\n\nCombine it with the latest Web Components (for convenience you can use the unpkg CDN), for example:\n\n```html\n<script\n  src="https://unpkg.com/@utrecht/web-component-library-stencil/dist/utrecht/utrecht.esm.js"\n  type="module"\n><\/script>\n```\n\nThen you can go ahead and see the result:\n\n```html\n<utrecht-html-content class="utrecht-theme">\n  <h1>Page styled with NL Design System</h1>\n</utrecht-html-content>\n```\n\n## `Content-Security-Policy`\n\nAutodiscovery of the nonce will ensure the CSS for lazy loaded components can be loaded in pages with a strict CSP configuration. To safely configure the nonce, render a `style` element early in the `<head>` of your HTML page, with a cryptographically strong random value in the `nonce` attribute that you must generate for each request. For example:\n\n```html\n<html>\n  <head>\n    <style nonce="2346ad27d7568ba9896f1b7da6b5991251debdf2"></style>\n  </head>\n</html>\n```\n\nThe nonce must match with the nonce you provide in the `Content-Security-Policy` HTTP header for the web page. For example:\n\n```text\nContent-Security-Policy: default-src \'self\'; style-src \'self\' \'nonce-2346ad27d7568ba9896f1b7da6b5991251debdf2\'\nContent-Type: text/html\n```\n\n**You MUST NOT use a hardcoded value for the nonce.** Do not copy the example code as-is.\n';var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Component/README"}),"\n",(0,jsx_runtime.jsx)(Markdown.U,{children:READMEraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Web Component/README",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const web_component_stories=componentMeta},"../../documentation/components/Markdown.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Markdown});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const Markdown=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.UG,{children:children.replace(/(^|\r?\n)---[\s|\D|\w]+\r?\n---/gm,"")});Markdown.displayName="Markdown"}}]);