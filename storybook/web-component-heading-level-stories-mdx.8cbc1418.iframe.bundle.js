/*! For license information please see web-component-heading-level-stories-mdx.8cbc1418.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[89483],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/web-component/heading/level.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ariaOnly:()=>ariaOnly,default:()=>__WEBPACK_DEFAULT_EXPORT__,level1:()=>level1,level2:()=>level2,level3:()=>level3,level4:()=>level4,level5:()=>level5,level6:()=>level6});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_story_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/web-component/heading/story-template.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const level1=_story_template__WEBPACK_IMPORTED_MODULE_1__.X6.bind({});level1.storyName="level 1",level1.args={..._story_template__WEBPACK_IMPORTED_MODULE_1__.sS,level:1},level1.parameters={storySource:{source:"Heading.bind({})"}};const level2=_story_template__WEBPACK_IMPORTED_MODULE_1__.X6.bind({});level2.storyName="level 2",level2.args={..._story_template__WEBPACK_IMPORTED_MODULE_1__.sS,level:2},level2.parameters={storySource:{source:"Heading.bind({})"}};const level3=_story_template__WEBPACK_IMPORTED_MODULE_1__.X6.bind({});level3.storyName="level 3",level3.args={..._story_template__WEBPACK_IMPORTED_MODULE_1__.sS,level:3},level3.parameters={storySource:{source:"Heading.bind({})"}};const level4=_story_template__WEBPACK_IMPORTED_MODULE_1__.X6.bind({});level4.storyName="level 4",level4.args={..._story_template__WEBPACK_IMPORTED_MODULE_1__.sS,level:4},level4.parameters={storySource:{source:"Heading.bind({})"}};const level5=_story_template__WEBPACK_IMPORTED_MODULE_1__.X6.bind({});level5.storyName="level 5",level5.args={..._story_template__WEBPACK_IMPORTED_MODULE_1__.sS,level:5},level5.parameters={storySource:{source:"Heading.bind({})"}};const level6=_story_template__WEBPACK_IMPORTED_MODULE_1__.X6.bind({});level6.storyName="level 6",level6.args={..._story_template__WEBPACK_IMPORTED_MODULE_1__.sS,level:6},level6.parameters={storySource:{source:"Heading.bind({})"}};const ariaOnly=_story_template__WEBPACK_IMPORTED_MODULE_1__.X6.bind({});ariaOnly.storyName="Aria only",ariaOnly.args={..._story_template__WEBPACK_IMPORTED_MODULE_1__.sS,level:42},ariaOnly.parameters={storySource:{source:"Heading.bind({})"}};const componentMeta={title:"Web Component/Heading/Variable Heading/Level",id:"web-component-heading",parameters:{status:{type:"BETA"}},component:_story_template__WEBPACK_IMPORTED_MODULE_1__.X6,tags:["stories-mdx"],includeStories:["level1","level2","level3","level4","level5","level6","ariaOnly"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{id:"web-component-heading",title:"Web Component/Heading/Variable Heading/Level",component:_story_template__WEBPACK_IMPORTED_MODULE_1__.X6,parameters:{status:{type:"BETA"}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"heading-levels",children:"Heading levels"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"heading-1",children:"Heading 1"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"level 1",args:{..._story_template__WEBPACK_IMPORTED_MODULE_1__.sS,level:1},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.X6.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"heading-2",children:"Heading 2"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"level 2",args:{..._story_template__WEBPACK_IMPORTED_MODULE_1__.sS,level:2},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.X6.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"heading-3",children:"Heading 3"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"level 3",args:{..._story_template__WEBPACK_IMPORTED_MODULE_1__.sS,level:3},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.X6.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"heading-4",children:"Heading 4"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"level 4",args:{..._story_template__WEBPACK_IMPORTED_MODULE_1__.sS,level:4},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.X6.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"heading-5",children:"Heading 5"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"level 5",args:{..._story_template__WEBPACK_IMPORTED_MODULE_1__.sS,level:5},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.X6.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"heading-6",children:"Heading 6"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"level 6",args:{..._story_template__WEBPACK_IMPORTED_MODULE_1__.sS,level:6},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.X6.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"with-aria-level-only",children:"with aria-level only"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Aria only",args:{..._story_template__WEBPACK_IMPORTED_MODULE_1__.sS,level:42},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.X6.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./stories/web-component/heading/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PG:()=>argTypes,X6:()=>Heading,_O:()=>defaultArgs,sS:()=>exampleArgs});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={level:{description:"Heading level",type:{name:"number",required:!0}},textContent:{description:"Set the content of the heading",control:"text"}},defaultArgs={textContent:"",level:1},exampleArgs={level:1,textContent:"The Quick Brown Fox Jumps Over The Lazy Dog"},Heading=({level=defaultArgs.level,textContent=defaultArgs.textContent})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("utrecht-heading",{level,children:textContent})});Heading.displayName="Heading"}}]);