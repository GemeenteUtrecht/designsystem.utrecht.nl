"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[58317],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/nl-design-system/contributing-storybook.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>contributing_storybook_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.0_@types+react-dom@18.2.7_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");const contributing_storybookraw_namespaceObject='\x3c!-- @license CC0-1.0 --\x3e\n\n# Contribution Guidelines for Storybook\n\n## Story names should be clear in stand-alone context\n\nStory names should accurately describe the situation in the story. Story names are not only displayed in the Storybook sidebar: they also function as the caption for a screenshot in visual regression tests. A clear description helps to quickly decide if a visual change is the desired result or a regression bug.\n\nIf it helps, you can think of it this way: when the story canvas is an HTML `img` element, the story name would be the `alt` attribute.\n\n## Create a story for each state, don\'t rely on controls\n\nFor example, for the hyperlink component, you should include stories for the following states:\n\n- normal\n- hover\n- focus\n- visited\n\nHaving separate stories helps test automation detect issues with any state, without writing code to trigger the interaction. Accessibility tests can recognize color contrast issues in every state, and easily detect an issue in the disabled state of a button. Visual regression tests can compare screenshots in every state, and easily detect a regression bug in for example the focus state.\n\n## Write documentation in Markdown and lower the barrier for contributing\n\nIn Storybook it is common to type documentation in `.mdx` files that combine text and code. However, there are many great tools to write documentation in Markdown format ([iA Writer](https://ia.net/writer), [HackMD](https://hackmd.io)), but only few that also support MDX.\n\nTo enpower a wide variety of experts to contribute and publish our documentation, it helps to maintain the majority of the documentation in plain `.md` files. To include Markdown documentation in your Storybook, create documentation files in pairs. For example:\n\n`readme.md`:\n\n```md\n# Example Design System\n\n...\n```\n\n`readme.stories.mdx`:\n\n```mdx\nimport { Markdown, Meta } from "@storybook/blocks";\n\nimport markdown from "./readme.md";\n\n<Meta title="Example Design System/README" />\n\n<Markdown>{markdown}</Markdown>\n```\n';var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"NL Design System/Contributing/Storybook"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:contributing_storybookraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"NL Design System/Contributing/Storybook",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const contributing_storybook_stories=componentMeta}}]);