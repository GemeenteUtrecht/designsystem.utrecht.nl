"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[76437],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/content-translation.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>content_translation_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.0_@types+react-dom@18.2.7_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");const content_translationraw_namespaceObject='\x3c!-- @license CC0-1.0 --\x3e\n\n# Content translation\n\n## Specify the page language and text direction\n\nSpecify at least the following information\n\n- text language: `lang="en-GB"`\n- text directionality: `dir="ltr"`\n- text encoding: `charset="utf-8"`\n\n```html\n<html lang="en-GB" dir="ltr">\n  <head>\n    <meta charset="utf-8" />\n    <title>Example</title>\n  </head>\n  <body>\n    ...\n  </body>\n</html>\n```\n\nThis information can partially provided in the [`Content-Language`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language) and [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTP Headers, but including the information in the HTML code is still recommended:\n\n```text\nContent-Language: en-GB\nContent-Type: text/html; charset=utf-8\n```\n\n## Automatic translation tools\n\nA significant percentage of visitors of utrecht.nl uses a translation tool such as Google Translate to read the page in other languages, such as English, Polish, Arabic and Spanish. While the accuracy of the pages varies, the importance of disclosing the content in more languages is paramount.\n\nDo not include a `notranslate` `meta` element in your page, since you will not be able to provide a translation in every language.\n\n```html\n<meta name="google" value="notranslate" />\n```\n\nIf there are small portions of the page you don\'t want to have translated, you can apply a `notranslate` class name to that specific part of the page.\n\n```html\n<p lang="en">\n  As the Latin saying goes — <i><q lang="la" class="notranslate">in vino veritas</q></i\n  >…\n</p>\n```\n\nTo maintain the correct text directionality after translating to a right-to-left language Arabic, it is recommended to explictly mark certain parts of your document as left-to-right, such as URLs or code snippets, even when `<html dir="ltr>` is already declared:\n\n- `<span dir="ltr">https://example.com/</span>`\n- `<pre dir="ltr">// This is example code in a programming language</pre>`\n';var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Utrecht/Content Translation"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:content_translationraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Utrecht/Content Translation",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const content_translation_stories=componentMeta}}]);