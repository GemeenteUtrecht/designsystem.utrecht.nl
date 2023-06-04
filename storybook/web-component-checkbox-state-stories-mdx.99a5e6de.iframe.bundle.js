/*! For license information please see web-component-checkbox-state-stories-mdx.99a5e6de.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[63694],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/web-component/checkbox/state.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{checked:()=>checked,checkendAndDisabled:()=>checkendAndDisabled,default:()=>__WEBPACK_DEFAULT_EXPORT__,disabled:()=>disabled});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_story_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/web-component/checkbox/story-template.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const checked=_story_template__WEBPACK_IMPORTED_MODULE_1__.XZ.bind({});checked.storyName="Checked",checked.args={checked:!0},checked.parameters={storySource:{source:"Checkbox.bind({})"}};const disabled=_story_template__WEBPACK_IMPORTED_MODULE_1__.XZ.bind({});disabled.storyName="Disabled",disabled.args={disabled:!0},disabled.parameters={storySource:{source:"Checkbox.bind({})"}};const checkendAndDisabled=_story_template__WEBPACK_IMPORTED_MODULE_1__.XZ.bind({});checkendAndDisabled.storyName="Checkend and Disabled",checkendAndDisabled.args={checked:!0,disabled:!0},checkendAndDisabled.parameters={storySource:{source:"Checkbox.bind({})"}};const componentMeta={title:"Web Component/Checkbox/States",id:"web-component-checkbox",parameters:{status:{type:"WORK IN PROGRESS"}},component:_story_template__WEBPACK_IMPORTED_MODULE_1__.XZ,tags:["stories-mdx"],includeStories:["checked","disabled","checkendAndDisabled"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{id:"web-component-checkbox",title:"Web Component/Checkbox/States",component:_story_template__WEBPACK_IMPORTED_MODULE_1__.XZ,parameters:{status:{type:"WORK IN PROGRESS"}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"checkbox-component-states",children:"Checkbox Component States"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"checked",children:"Checked"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Checked",args:{checked:!0},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.XZ.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Disabled",args:{disabled:!0},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.XZ.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"disabled-1",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Checkend and Disabled",args:{checked:!0,disabled:!0},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.XZ.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./stories/web-component/checkbox/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PG:()=>argTypes,XZ:()=>Checkbox,_O:()=>defaultArgs,sS:()=>exampleArgs});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={checked:{description:"Checked",control:"boolean"},disabled:{description:"Disabled",control:"boolean"},value:{description:"Set the value of the text box",control:"text"}},defaultArgs={checked:!1,disabled:!1,value:""},exampleArgs={value:"I agree"},Checkbox=({checked=defaultArgs.checked,disabled=defaultArgs.disabled,value=defaultArgs.value})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("utrecht-checkbox",{checked:checked||null,disabled:disabled||null,value:value||null});Checkbox.displayName="Checkbox"}}]);