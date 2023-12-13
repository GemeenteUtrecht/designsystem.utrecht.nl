"use strict";(self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[]).push([[5571],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/web-component-library-react.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>web_component_library_react_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.17_@types+react@18.2.42_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");const READMEraw_namespaceObject='\x3c!-- @license CC0-1.0 --\x3e\n\n# Web Components in React\n\nThe `@utrecht/web-component-library-stencil` package contains the actual implementation of every web component, while the `@utrecht/web-component-library-react` only contains wrapper React components to provide JSX elements for every Web Component. The implementation of each component will be loaded separately and on-demand, so including the entire component library will not slow down your application.\n\nInstall both packages to use React web components in your project:\n\n```shell\nnpm install --save-dev --save-exact \\\n  @utrecht/web-component-library-react \\\n  @utrecht/web-component-library-stencil\n```\n\nFor example, using [Next.js](https://nextjs.org):\n\n```js\nimport Head from "next/head";\nimport { UtrechtHeading, UtrechtParagraph, UtrechtDocument } from "@utrecht/component-library-react";\n\nexport default function ExamplePage() {\n  return (\n    <UtrechtDocument>\n      <Head>\n        <title>Example Page</title>\n      </Head>\n      <main>\n        <UtrechtHeading level={1}>Home</UtrechtHeading>\n        <UtrechtParagraph>Hell, world!</UtrechtParagraph>\n      </main>\n    </UtrechtDocument>\n  );\n}\n```\n\nSince the implementation of the web components needs to be loaded in the browser, include the following effect to import web component library from `@utrecht/web-component-library-stencil`, in Next.js this would be in `_app.ts`:\n\n```js\nuseEffect(() => {\n  import("../public/utrecht/utrecht.esm.js");\n}, []);\n```\n\n## React Component or React Web Component?\n\nWhen you\'re working on a React project and the React component is available, currently you should probably use the React component.\n\nThe web components are still experimental. In the future some components might be most convenient to use as web component, and some components might be released exclusively as web component.\n';var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Component/React"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:READMEraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Web Component/React",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const web_component_library_react_stories=componentMeta}}]);