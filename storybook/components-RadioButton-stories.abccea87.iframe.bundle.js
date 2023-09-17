/*! For license information please see components-RadioButton-stories.abccea87.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[3468],{"../../node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../../documentation/components/ComponentTokensSection.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>ComponentTokensSection});var prop_types=__webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),DesignTokensTable=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../documentation/components/DesignTokensTable.jsx"));const isHiddenDesignToken=token=>!!token&&!!token.$extensions&&!0===token.$extensions["nl.nldesignsystem.hidden"];var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ComponentTokensTable=({component,tokens})=>{const componentPath=["utrecht",component.replace(/^(example|denhaag|utrecht)-/,"")],subset=tokens.filter((token=>componentPath.every(((name,index)=>token.path[index]===name)))).filter((token=>!isHiddenDesignToken(token)));return 0===subset.length?(0,jsx_runtime.jsxs)("p",{children:["This component has ",(0,jsx_runtime.jsx)("strong",{children:"no documented design tokens"}),"."]}):(0,jsx_runtime.jsx)(DesignTokensTable.V,{tokens:subset})};ComponentTokensTable.displayName="ComponentTokensTable",ComponentTokensTable.propTypes={component:prop_types_default().string.isRequired,tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])}))};var lodash_isplainobject=__webpack_require__("../../node_modules/.pnpm/lodash.isplainobject@4.0.6/node_modules/lodash.isplainobject/index.js"),lodash_isplainobject_default=__webpack_require__.n(lodash_isplainobject);const CopyButton=({value,textContent="Copy"})=>(0,jsx_runtime.jsx)("button",{className:"utrecht-button utrecht-button--secondary-action utrecht-button--html-button",style:{cursor:"copy"},onClick:()=>navigator.clipboard.writeText(value),type:"button",children:textContent});CopyButton.displayName="CopyButton",CopyButton.propTypes={value:prop_types_default().string.isRequired,textContent:prop_types_default().string};const traverseDeep=(root,parents,current,valueTest,callback)=>{valueTest(current)?callback(parents,current):lodash_isplainobject_default()(current)&&Object.entries(current).forEach((([key,value])=>{traverseDeep(root,[...parents,key],value,valueTest,callback)}))},isDesignTokenDefinition=value=>(value=>Object.prototype.hasOwnProperty.call(value,"value")||Object.prototype.hasOwnProperty.call(value,"$value"))(value)||Object.prototype.hasOwnProperty.call(value,"css")||Object.prototype.hasOwnProperty.call(value,"$extensions"),tokensToCSS=tokens=>{const lines=[];return((tokens,callback)=>{traverseDeep(tokens,[],tokens,isDesignTokenDefinition,callback)})(tokens,((path,value)=>{isHiddenDesignToken(value)||lines.push(`  /* --${path.join("-")}: ${value&&value.$extensions&&value.$extensions["nl.nldesignsystem.css.property"]&&value.$extensions["nl.nldesignsystem.css.property"].syntax?value.$extensions["nl.nldesignsystem.css.property"].syntax:"<value>"}; */`)})),`.your-theme {\n  /* Uncomment each custom property you need */\n${lines.join("\n")}\n}`},ExampleTokensCSS=({definition})=>{const code=tokensToCSS(definition);return(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("h2",{children:["Template for ",(0,jsx_runtime.jsx)("samp",{children:"your-theme.css"})]}),(0,jsx_runtime.jsx)("p",{children:"If you do not (yet) want to manage your design tokens in JSON files, but when you just want to get started quickly to reuse our CSS component with your own design, then you can use this CSS template as a starting point to see what parts of the component you can customize with design tokens."}),(0,jsx_runtime.jsxs)("p",{children:["Combine the design tokens CSS with our"," ",(0,jsx_runtime.jsx)("a",{href:"https://npmjs.com/package/@utrecht/component-library-css",children:"CSS component library pacakge on npm"}),", and you should be able to quickly and easily create a web page with our components and your own design."]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CopyButton,{value:code,textContent:"Copy CSS"})}),(0,jsx_runtime.jsx)("pre",{children:code})]})};ExampleTokensCSS.displayName="ExampleTokensCSS",ExampleTokensCSS.propTypes={definition:prop_types_default().object.isRequired};var lodash_clonedeepwith=__webpack_require__("../../node_modules/.pnpm/lodash.clonedeepwith@4.5.0/node_modules/lodash.clonedeepwith/index.js"),lodash_clonedeepwith_default=__webpack_require__.n(lodash_clonedeepwith),lodash_mapvalues=__webpack_require__("../../node_modules/.pnpm/lodash.mapvalues@4.6.0/node_modules/lodash.mapvalues/index.js"),lodash_mapvalues_default=__webpack_require__.n(lodash_mapvalues),lodash_omitby=__webpack_require__("../../node_modules/.pnpm/lodash.omitby@4.6.0/node_modules/lodash.omitby/index.js"),lodash_omitby_default=__webpack_require__.n(lodash_omitby);const ExampleTokensJSON=({definition})=>{const filter=item=>lodash_isplainobject_default()(item.$extensions)||lodash_isplainobject_default()(item.$value)?{}:lodash_isplainobject_default()(item)?lodash_mapvalues_default()(lodash_omitby_default()(item,(item=>isHiddenDesignToken(item))),(item=>lodash_clonedeepwith_default()(item,filter))):void 0,tokens=lodash_clonedeepwith_default()(definition,filter),code=JSON.stringify(tokens,null,"  ");return(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("h2",{children:["Template ",(0,jsx_runtime.jsx)("samp",{children:"tokens.json"})," for your theme"]}),(0,jsx_runtime.jsxs)("p",{children:["We use the ",(0,jsx_runtime.jsx)("a",{href:"https://design-tokens.github.io/community-group/format/",children:"Design Tokens Format"})," to store our design choices in JSON files. These ",(0,jsx_runtime.jsx)("code",{children:"tokens.json"})," files are translated into other formats such as CSS and SCSS variables, so the design choices can be imported automatically into projects with varying technical stacks."]}),(0,jsx_runtime.jsx)("p",{children:"When we develop front-end components in CSS, we avoid putting design decisions in our CSS code directly. Instead we use CSS variables that reference the design tokens. This way we don't need to change the CSS components when over time we make different design decisions, we just include the latest export of the design tokens."}),(0,jsx_runtime.jsx)("p",{children:"Because our CSS components are coded in such a way that design decisions —such as fonts, colors and sizes— are stored in an optional file that you don't have to use, you can reuse our CSS components and combine them with design decisions for your own project and brand."}),(0,jsx_runtime.jsxs)("p",{children:["Copy the JSON template below if you want to reuse this component, and replace the empty placeholder object with your own code:",(0,jsx_runtime.jsx)("code",{children:'{ "value": "#123456", "comment": "my design choice" }'}),"."]}),(0,jsx_runtime.jsxs)("p",{children:["When you have a collection of design token JSON files, you can use"," ",(0,jsx_runtime.jsx)("a",{href:"https://amzn.github.io/style-dictionary/#/",children:"Style Dictionary"})," to translate them to CSS or any other format your developers need."]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CopyButton,{value:code,textContent:"Copy JSON"})}),(0,jsx_runtime.jsx)("pre",{children:code})]})};ExampleTokensJSON.displayName="ExampleTokensJSON",ExampleTokensJSON.propTypes={definition:prop_types_default().object.isRequired};const ComponentTokensSection=({component,tokens,definition})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[definition?(0,jsx_runtime.jsx)(ExampleTokensJSON,{definition}):"",definition?(0,jsx_runtime.jsx)(ExampleTokensCSS,{definition}):"",(0,jsx_runtime.jsx)(ComponentTokensTable,{component,tokens})]});ComponentTokensSection.propTypes={component:prop_types_default().string.isRequired,definition:prop_types_default().object,tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])})).isRequired}},"./stories/components/RadioButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,Checked:()=>Checked,CheckedAndActive:()=>CheckedAndActive,CheckedAndDisabled:()=>CheckedAndDisabled,CheckedAndFocus:()=>CheckedAndFocus,CheckedAndFocusVisible:()=>CheckedAndFocusVisible,CheckedAndHover:()=>CheckedAndHover,CheckedAndInvalid:()=>CheckedAndInvalid,CheckedDisabledAndActive:()=>CheckedDisabledAndActive,CheckedDisabledAndFocus:()=>CheckedDisabledAndFocus,CheckedDisabledAndFocusVisible:()=>CheckedDisabledAndFocusVisible,CheckedDisabledAndHover:()=>CheckedDisabledAndHover,Default:()=>Default,DesignTokens:()=>DesignTokens,Disabled:()=>Disabled,DisabledAndActive:()=>DisabledAndActive,DisabledAndFocusVisible:()=>DisabledAndFocusVisible,DisabledAndFocussed:()=>DisabledAndFocussed,DisabledAndHover:()=>DisabledAndHover,Focus:()=>Focus,FocusVisible:()=>FocusVisible,Hover:()=>Hover,Invalid:()=>Invalid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utrecht_component_library_react_dist_css_module__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../component-library-react/dist/css-module/index.mjs"),_utrecht_components_radio_button_README_md_raw__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/radio-button/README.md?raw"),_utrecht_components_radio_button_tokens_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/radio-button/tokens.json"),_utrecht_design_tokens_dist_index_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),clsx__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),_util__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./stories/components/util.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const RadioButtonStory=({active,focus,focusVisible,hover,name,...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_utrecht_component_library_react_dist_css_module__WEBPACK_IMPORTED_MODULE_6__.EU,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_7__.Z)({"utrecht-radio-button--active":active,"utrecht-radio-button--focus":focus,"utrecht-radio-button--focus-visible":focusVisible,"utrecht-radio-button--hover":hover}),name:name||void 0,...args});RadioButtonStory.displayName="RadioButtonStory";const meta={title:"CSS Component/Radio Button",id:"css-radio-button",component:RadioButtonStory,args:{checked:!1,disabled:!1,active:!1,hover:!1,focus:!1,focusVisible:!1,invalid:!1,name:""},argTypes:{checked:{description:"Checked",control:"boolean"},disabled:{description:"Disabled",control:"boolean"},active:{description:"Active",control:"boolean"},hover:{description:"Hover",control:"boolean"},focus:{description:"Focus",control:"boolean"},focusVisible:{description:"Focus-visible",control:"boolean"},invalid:{description:"Invalid",control:"boolean"},name:{description:"Radio group name. Use the same name for each radio button in a group.",control:"string"}},parameters:{tokensPrefix:"utrecht-radio-button",status:{type:"WORK IN PROGRESS"},tokens:_utrecht_design_tokens_dist_index_json__WEBPACK_IMPORTED_MODULE_2__,tokensDefinition:_utrecht_components_radio_button_tokens_json__WEBPACK_IMPORTED_MODULE_1__,docs:{description:{component:_utrecht_components_radio_button_README_md_raw__WEBPACK_IMPORTED_MODULE_0__}}}},__WEBPACK_DEFAULT_EXPORT__=meta,Default={},Hover={name:"Hover",args:{hover:!0}},Focus={name:"Focus",args:{focus:!0}},FocusVisible={name:"Focus Visible",args:{focus:!0,focusVisible:!0}},Active={name:"Active",args:{active:!0,focus:!0},parameters:{docs:{description:{story:"When the component is `active`, it always has `focus` too. Test these states together for accurate results."}}}},Disabled={name:"Disabled",args:{disabled:!0}},DisabledAndFocussed={name:"Disabled and Focus",args:{disabled:!0,focus:!0}},DisabledAndFocusVisible={name:"Disabled and Focus-Visible",args:{disabled:!0,focus:!0,focusVisible:!0}},DisabledAndHover={name:"Disabled and Hover",args:{disabled:!0,hover:!0}},DisabledAndActive={name:"Disabled and Active",args:{disabled:!0,active:!0}},Checked={name:"Checked",args:{checked:!0}},CheckedAndFocus={name:"Checked and Focus",args:{checked:!0,focus:!0}},CheckedAndFocusVisible={name:"Checked and Focus-Visible",args:{checked:!0,focus:!0,focusVisible:!0}},CheckedAndHover={name:"Checked and Hover",args:{checked:!0,hover:!0}},CheckedAndActive={name:"Checked and Active",args:{checked:!0,active:!0}},CheckedAndDisabled={name:"Checked and Disabled",args:{checked:!0,disabled:!0}},CheckedDisabledAndHover={name:"Checked, Disabled and Hover",args:{checked:!0,disabled:!0,hover:!0},parameters:{docs:{description:{story:'Should be identical to "Checked + disabled"'}}}},CheckedDisabledAndFocus={name:"Checked, Disabled and Focus",args:{checked:!0,disabled:!0,focus:!0},parameters:{docs:{description:{story:'Should be identical to "Checked + disabled"'}}}},CheckedDisabledAndFocusVisible={name:"Checked, Disabled and Focus-visible",args:{checked:!0,disabled:!0,focus:!0,focusVisible:!0},parameters:{docs:{description:{story:'Should be identical to "Checked + disabled"'}}}},CheckedDisabledAndActive={name:"Checked, Disabled and Active",args:{checked:!0,disabled:!0,active:!0,focus:!0},parameters:{docs:{description:{story:'Should be identical to "Checked + disabled"'}}}},Invalid={name:"Invalid",args:{invalid:!0}},CheckedAndInvalid={name:"Checked and Invalid",args:{checked:!0,invalid:!0}},DesignTokens=(0,_util__WEBPACK_IMPORTED_MODULE_4__.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Hover.parameters={...Hover.parameters,docs:{...Hover.parameters?.docs,source:{originalSource:"{\n  name: 'Hover',\n  args: {\n    hover: true\n  }\n}",...Hover.parameters?.docs?.source}}},Focus.parameters={...Focus.parameters,docs:{...Focus.parameters?.docs,source:{originalSource:"{\n  name: 'Focus',\n  args: {\n    focus: true\n  }\n}",...Focus.parameters?.docs?.source}}},FocusVisible.parameters={...FocusVisible.parameters,docs:{...FocusVisible.parameters?.docs,source:{originalSource:"{\n  name: 'Focus Visible',\n  args: {\n    focus: true,\n    focusVisible: true\n  }\n}",...FocusVisible.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:"{\n  name: 'Active',\n  args: {\n    active: true,\n    focus: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: `When the component is \\`active\\`, it always has \\`focus\\` too. Test these states together for accurate results.`\n      }\n    }\n  }\n}",...Active.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  name: 'Disabled',\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},DisabledAndFocussed.parameters={...DisabledAndFocussed.parameters,docs:{...DisabledAndFocussed.parameters?.docs,source:{originalSource:"{\n  name: 'Disabled and Focus',\n  args: {\n    disabled: true,\n    focus: true\n  }\n}",...DisabledAndFocussed.parameters?.docs?.source}}},DisabledAndFocusVisible.parameters={...DisabledAndFocusVisible.parameters,docs:{...DisabledAndFocusVisible.parameters?.docs,source:{originalSource:"{\n  name: 'Disabled and Focus-Visible',\n  args: {\n    disabled: true,\n    focus: true,\n    focusVisible: true\n  }\n}",...DisabledAndFocusVisible.parameters?.docs?.source}}},DisabledAndHover.parameters={...DisabledAndHover.parameters,docs:{...DisabledAndHover.parameters?.docs,source:{originalSource:"{\n  name: 'Disabled and Hover',\n  args: {\n    disabled: true,\n    hover: true\n  }\n}",...DisabledAndHover.parameters?.docs?.source}}},DisabledAndActive.parameters={...DisabledAndActive.parameters,docs:{...DisabledAndActive.parameters?.docs,source:{originalSource:"{\n  name: 'Disabled and Active',\n  args: {\n    disabled: true,\n    active: true\n  }\n}",...DisabledAndActive.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  name: 'Checked',\n  args: {\n    checked: true\n  }\n}",...Checked.parameters?.docs?.source}}},CheckedAndFocus.parameters={...CheckedAndFocus.parameters,docs:{...CheckedAndFocus.parameters?.docs,source:{originalSource:"{\n  name: 'Checked and Focus',\n  args: {\n    checked: true,\n    focus: true\n  }\n}",...CheckedAndFocus.parameters?.docs?.source}}},CheckedAndFocusVisible.parameters={...CheckedAndFocusVisible.parameters,docs:{...CheckedAndFocusVisible.parameters?.docs,source:{originalSource:"{\n  name: 'Checked and Focus-Visible',\n  args: {\n    checked: true,\n    focus: true,\n    focusVisible: true\n  }\n}",...CheckedAndFocusVisible.parameters?.docs?.source}}},CheckedAndHover.parameters={...CheckedAndHover.parameters,docs:{...CheckedAndHover.parameters?.docs,source:{originalSource:"{\n  name: 'Checked and Hover',\n  args: {\n    checked: true,\n    hover: true\n  }\n}",...CheckedAndHover.parameters?.docs?.source}}},CheckedAndActive.parameters={...CheckedAndActive.parameters,docs:{...CheckedAndActive.parameters?.docs,source:{originalSource:"{\n  name: 'Checked and Active',\n  args: {\n    checked: true,\n    active: true\n  }\n}",...CheckedAndActive.parameters?.docs?.source}}},CheckedAndDisabled.parameters={...CheckedAndDisabled.parameters,docs:{...CheckedAndDisabled.parameters?.docs,source:{originalSource:"{\n  name: 'Checked and Disabled',\n  args: {\n    checked: true,\n    disabled: true\n  }\n}",...CheckedAndDisabled.parameters?.docs?.source}}},CheckedDisabledAndHover.parameters={...CheckedDisabledAndHover.parameters,docs:{...CheckedDisabledAndHover.parameters?.docs,source:{originalSource:"{\n  name: 'Checked, Disabled and Hover',\n  args: {\n    checked: true,\n    disabled: true,\n    hover: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: `Should be identical to \"Checked + disabled\"`\n      }\n    }\n  }\n}",...CheckedDisabledAndHover.parameters?.docs?.source}}},CheckedDisabledAndFocus.parameters={...CheckedDisabledAndFocus.parameters,docs:{...CheckedDisabledAndFocus.parameters?.docs,source:{originalSource:"{\n  name: 'Checked, Disabled and Focus',\n  args: {\n    checked: true,\n    disabled: true,\n    focus: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: `Should be identical to \"Checked + disabled\"`\n      }\n    }\n  }\n}",...CheckedDisabledAndFocus.parameters?.docs?.source}}},CheckedDisabledAndFocusVisible.parameters={...CheckedDisabledAndFocusVisible.parameters,docs:{...CheckedDisabledAndFocusVisible.parameters?.docs,source:{originalSource:"{\n  name: 'Checked, Disabled and Focus-visible',\n  args: {\n    checked: true,\n    disabled: true,\n    focus: true,\n    focusVisible: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: `Should be identical to \"Checked + disabled\"`\n      }\n    }\n  }\n}",...CheckedDisabledAndFocusVisible.parameters?.docs?.source}}},CheckedDisabledAndActive.parameters={...CheckedDisabledAndActive.parameters,docs:{...CheckedDisabledAndActive.parameters?.docs,source:{originalSource:"{\n  name: 'Checked, Disabled and Active',\n  args: {\n    checked: true,\n    disabled: true,\n    active: true,\n    focus: true\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: `Should be identical to \"Checked + disabled\"`\n      }\n    }\n  }\n}",...CheckedDisabledAndActive.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  name: 'Invalid',\n  args: {\n    invalid: true\n  }\n}",...Invalid.parameters?.docs?.source}}},CheckedAndInvalid.parameters={...CheckedAndInvalid.parameters,docs:{...CheckedAndInvalid.parameters?.docs,source:{originalSource:"{\n  name: 'Checked and Invalid',\n  args: {\n    checked: true,\n    invalid: true\n  }\n}",...CheckedAndInvalid.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Hover","Focus","FocusVisible","Active","Disabled","DisabledAndFocussed","DisabledAndFocusVisible","DisabledAndHover","DisabledAndActive","Checked","CheckedAndFocus","CheckedAndFocusVisible","CheckedAndHover","CheckedAndActive","CheckedAndDisabled","CheckedDisabledAndHover","CheckedDisabledAndFocus","CheckedDisabledAndFocusVisible","CheckedDisabledAndActive","Invalid","CheckedAndInvalid","DesignTokens"]},"./stories/components/util.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>designTokenStory});var _utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../documentation/components/ComponentTokensSection.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const designTokenStory=meta=>({args:{tokens:meta.parameters.tokens,definition:meta.parameters.tokensDefinition,component:meta.parameters.tokensPrefix},parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:""}},status:null},render:({tokens,definition,component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__.k,{tokens,definition,component})});try{designTokenStory.displayName="designTokenStory",designTokenStory.__docgenInfo={description:"",displayName:"designTokenStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/util.tsx#designTokenStory"]={docgenInfo:designTokenStory.__docgenInfo,name:"designTokenStory",path:"stories/components/util.tsx#designTokenStory"})}catch(__react_docgen_typescript_loader_error){}},"../../components/radio-button/README.md?raw":module=>{module.exports='\x3c!-- @license CC0-1.0 --\x3e\n\n# Radio button\n\n## Design\n\nZorg dat de radio button herkenbaar is, doordat die lijkt op radio buttons op andere websites. Maak niet heel bijzonder ontwerp dat onduidelijk is voor veel gebruikers.\n\n- Een radio button is rond, niet een vierkant of een ruit.\n- Een radio button heeft een ronde cirkel als _checked_ icoon.\n- Gebruik voor de radio button geen checkmark icoon (een vinkje), dat zou verwarrend zijn. Door een checkmark lijkt het alsof je meerdere opties kunt selecteren, terwijl dat niet zo is.\n\n## Terminologie\n\n- **radio button**: "Radio button" heeft [een Wikipedia-lemma](https://en.wikipedia.org/wiki/Radio_button), [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) noemt het ook "radio button" en "radio group".\n- **checked**: [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) en HTML noemen de staat van de radio button "checked", CSS heeft de `:checked` pseudo-class.\n\n## Class names\n\n- `.utrecht-radio-button`\n'},"../../components/radio-button/tokens.json":module=>{module.exports=JSON.parse('{"utrecht":{"radio-button":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<percentage>","inherits":true}}},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"icon":{"size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}},"active":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"checked":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"active":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"hover":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"focus":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}},"hover":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"focus":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"disabled":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"invalid":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}}}}')}}]);