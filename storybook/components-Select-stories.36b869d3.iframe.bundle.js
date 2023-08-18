"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[141],{"./stories/components/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Busy:()=>Busy,Default:()=>Default,DesignTokens:()=>DesignTokens,Disabled:()=>Disabled,Focus:()=>Focus,FocusVisible:()=>FocusVisible,Invalid:()=>Invalid,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Select_stories});var clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Select=(0,react.forwardRef)((({busy,invalid,required,className,noscript,children,...restProps},ref)=>(0,jsx_runtime.jsx)("select",{"aria-busy":busy||void 0,"aria-invalid":invalid||void 0,required:!!noscript&&required,"aria-required":noscript?void 0:required,className:(0,clsx_m.Z)("utrecht-select","utrecht-select--html-select",busy&&"utrecht-select--busy",invalid&&"utrecht-select--invalid",required&&"utrecht-select--required",className),ref,...restProps,children})));Select.displayName="Select";const SelectOption=(0,react.forwardRef)((({disabled,invalid,value,children,className,...restProps},ref)=>(0,jsx_runtime.jsx)("option",{...restProps,ref,disabled,value,className:(0,clsx_m.Z)("utrecht-select__option",disabled&&"utrecht-select__option--disabled",invalid&&"utrecht-select__option--invalid",className),children})));SelectOption.displayName="SelectOption";try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{busy:{defaultValue:null,description:"",name:"busy",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},noscript:{defaultValue:null,description:"`noscript`: Don't let it affect CSS :invalid",name:"noscript",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../component-library-react/src/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"../component-library-react/src/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}var tokens=__webpack_require__("../../components/select/tokens.json"),dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),util=__webpack_require__("./stories/components/util.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),css=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/select/css/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(css.Z,options);css.Z&&css.Z.locals&&css.Z.locals;const meta={title:"CSS Component/Select",id:"css-select",component:Select,argTypes:{busy:{description:"Busy",control:"boolean"},disabled:{description:"Disabled",control:"boolean"},focus:{description:"Focus",control:"boolean"},invalid:{description:"Invalid",control:"boolean"},options:{description:"Options",type:{name:"array",required:!0}},required:{description:"Required",control:"boolean"}},args:{disabled:!1,focus:!1,invalid:!1,options:[{value:"1",label:"Option #1"},{value:"2",label:"Option #2",selected:!0},{value:"3",label:"Option #3"}],required:!1},render:({focus,focusVisible,options,...props})=>(0,jsx_runtime.jsx)(Select,{className:(0,clsx_m.Z)({"utrecht-select--focus":focus,"utrecht-select--focus-visible":focusVisible}),...props,children:options.map((({value,label})=>(0,jsx_runtime.jsx)(SelectOption,{value,children:label})))}),tags:["autodocs"],parameters:{status:{type:"ALPHA"},tokensPrefix:"utrecht-select",tokens:dist,tokensDefinition:tokens,docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Form Select component\n\n## Terminology\n\n- **select**: like the `<select>` element in HTML.\n\n## Class names\n\n- `.utrecht-select`\n- `.utrecht-select--disabled`\n- `.utrecht-select--focus`\n- `.utrecht-select--html-input`\n- `.utrecht-select--invalid`\n- `.utrecht-select--read-only`\n- `.utrecht-select--required`\n"}}}},Select_stories=meta,Default={},Disabled={args:{disabled:!0}},Invalid={args:{invalid:!0}},Required={args:{required:!0}},Busy={args:{busy:!0,options:[]}},Focus={args:{className:"utrecht-select--focus"}},FocusVisible={args:{className:"utrecht-select--focus utrecht-select--focus-visible"}},DesignTokens=(0,util.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  args: {\n    invalid: true\n  }\n}",...Invalid.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"{\n  args: {\n    required: true\n  }\n}",...Required.parameters?.docs?.source}}},Busy.parameters={...Busy.parameters,docs:{...Busy.parameters?.docs,source:{originalSource:"{\n  args: {\n    busy: true,\n    options: []\n  }\n}",...Busy.parameters?.docs?.source}}},Focus.parameters={...Focus.parameters,docs:{...Focus.parameters?.docs,source:{originalSource:"{\n  args: {\n    className: 'utrecht-select--focus'\n  }\n}",...Focus.parameters?.docs?.source}}},FocusVisible.parameters={...FocusVisible.parameters,docs:{...FocusVisible.parameters?.docs,source:{originalSource:"{\n  args: {\n    className: 'utrecht-select--focus utrecht-select--focus-visible'\n  }\n}",...FocusVisible.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled","Invalid","Required","Busy","Focus","FocusVisible","DesignTokens"]},"./stories/components/util.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>designTokenStory});var _utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../documentation/components/ComponentTokensSection.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const designTokenStory=meta=>({args:{tokens:meta.parameters.tokens,definition:meta.parameters.tokensDefinition,component:meta.parameters.tokensPrefix},parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:""}},status:null},render:({tokens,definition,component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__.k,{tokens,definition,component})});try{designTokenStory.displayName="designTokenStory",designTokenStory.__docgenInfo={description:"",displayName:"designTokenStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/util.tsx#designTokenStory"]={docgenInfo:designTokenStory.__docgenInfo,name:"designTokenStory",path:"stories/components/util.tsx#designTokenStory"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/select/css/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utrecht-select{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-color:var(--utrecht-select-background-color, var(--utrecht-form-control-background-color));background-image:var(--utrecht-select-background-image);background-position:100%;background-repeat:no-repeat;background-size:1.4em;border-block-end-width:var(--utrecht-select-border-block-end-width, var(--utrecht-select-border-width, var(--utrecht-form-control-border-width)));border-block-start-width:var(--utrecht-select-border-width, var(--utrecht-form-control-border-width));border-color:var(--utrecht-select-border-color, var(--utrecht-form-control-border-color));border-inline-end-width:var(--utrecht-select-border-width, var(--utrecht-form-control-border-width));border-inline-start-width:var(--utrecht-select-border-width, var(--utrecht-form-control-border-width));border-radius:var(--utrecht-select-border-radius, var(--utrecht-form-control-border-radius, 0));border-style:solid;color:var(--utrecht-select-color, var(--utrecht-form-control-color));font-family:var(--utrecht-select-font-family, var(--utrecht-form-control-font-family));font-size:var(--utrecht-select-font-size, var(--utrecht-form-control-font-size));inline-size:100%;max-inline-size:var(--utrecht-select-max-inline-size, var(--utrecht-form-control-max-inline-size));padding-block-end:var(--utrecht-select-padding-block-end, var(--utrecht-form-control-padding-block-end));padding-block-start:var(--utrecht-select-padding-block-start, var(--utrecht-form-control-padding-block-start));padding-inline-end:var(--utrecht-select-padding-inline-end, var(--utrecht-form-control-padding-inline-end));padding-inline-start:var(--utrecht-select-padding-inline-start, var(--utrecht-form-control-padding-inline-start))}.utrecht-select--disabled{background-color:var(--utrecht-select-disabled-background-color, var(--utrecht-form-control-disabled-background-color, var(--utrecht-select-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-select-disabled-border-color, var(--utrecht-form-control-disabled-border-color, var(--utrecht-select-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-select-disabled-color, var(--utrecht-form-control-disabled-color, var(--utrecht-select-color, var(--utrecht-form-control-color))));cursor:var(--utrecht-action-disabled-cursor)}.utrecht-select--focus{background-color:var(--utrecht-select-focus-background-color, var(--utrecht-form-control-focus-background-color, var(--utrecht-select-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-select-focus-border-color, var(--utrecht-form-control-focus-border-color, var(--utrecht-select-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-select-focus-color, var(--utrecht-form-control-focus-color, var(--utrecht-select-color, var(--utrecht-form-control-color))))}.utrecht-select--focus-visible{--_utrecht-focus-ring-box-shadow: 0 0 0 var(--utrecht-focus-outline-width, 0) var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-select--busy{cursor:var(--utrecht-action-busy-cursor, busy)}.utrecht-select--invalid{--_utrecht-select-border-width: var( --utrecht-select-invalid-border-width, var( --utrecht-form-control-invalid-border-width, var(--utrecht-select-border-width, var(--utrecht-form-control-border-width)) ) );background-color:var(--utrecht-select-invalid-background-color, var(--utrecht-form-control-invalid-background-color, var(--utrecht-select-background-color, var(--utrecht-form-control-background-color))));border-width:var(--_utrecht-select-border-width);border-block-end-width:var(--utrecht-select-invalid-border-block-end-width, var(--utrecht-form-control-invalid-border-block-end-width, var(--utrecht-select-border-block-end-width, var(--utrecht-form-control-border-block-end-width, var(--_utrecht-select-border-width)))));border-color:var(--utrecht-select-invalid-border-color, var(--utrecht-form-control-invalid-border-color, var(--utrecht-select-border-color, var(--utrecht-form-control-border-color))))}.utrecht-select--html-select:disabled{background-color:var(--utrecht-select-disabled-background-color, var(--utrecht-form-control-disabled-background-color, var(--utrecht-select-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-select-disabled-border-color, var(--utrecht-form-control-disabled-border-color, var(--utrecht-select-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-select-disabled-color, var(--utrecht-form-control-disabled-color, var(--utrecht-select-color, var(--utrecht-form-control-color))));cursor:var(--utrecht-action-disabled-cursor)}.utrecht-select--html-select:focus{background-color:var(--utrecht-select-focus-background-color, var(--utrecht-form-control-focus-background-color, var(--utrecht-select-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-select-focus-border-color, var(--utrecht-form-control-focus-border-color, var(--utrecht-select-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-select-focus-color, var(--utrecht-form-control-focus-color, var(--utrecht-select-color, var(--utrecht-form-control-color))));--_utrecht-focus-ring-box-shadow: 0 0 0 var(--utrecht-focus-outline-width, 0) var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-select--html-select:focus:not(:focus-visible){box-shadow:none;outline-style:revert}","",{version:3,sources:["webpack://./../../components/select/css/index.scss","webpack://./../../components/select/css/_mixin.scss","webpack://./../../components/common/focus/_mixin.scss"],names:[],mappings:"AAQA,gBCGE,oBAAA,CACA,uBAAA,CACA,eAAA,CACA,qGAAA,CACA,uDAAA,CACA,wBAAA,CACA,2BAAA,CACA,qBAAA,CACA,iJAAA,CAIA,qGAAA,CACA,yFAAA,CACA,oGAAA,CACA,sGAAA,CACA,+FAAA,CACA,kBAAA,CACA,oEAAA,CACA,sFAAA,CACA,gFAAA,CACA,gBAAA,CACA,kGAAA,CACA,wGAAA,CACA,8GAAA,CACA,2GAAA,CACA,iHAAA,CDzBF,0BC6BE,6MAAA,CAOA,yLAAA,CAOA,sJAAA,CAIA,4CAAA,CD3CF,uBCiDE,uMAAA,CAOA,mLAAA,CAOA,gJAAA,CD3DF,+BEPE,qIAAA,CAGA,gDAAA,CACA,wDAAA,CACA,0DAAA,CACA,wDAAA,CACA,wDAAA,CFIF,sBCkEE,8CAAA,CD9DF,yBCkEE,8MAAA,CAQA,2MAAA,CAOA,gDAAA,CACA,8QAAA,CAUA,uLAAA,CAcA,sCA7FA,6MAAA,CAOA,yLAAA,CAOA,sJAAA,CAIA,4CAAA,CAmFE,mCA7EF,uMAAA,CAOA,mLAAA,CAOA,gJAAA,CClEA,qIAAA,CAGA,gDAAA,CACA,wDAAA,CACA,0DAAA,CACA,wDAAA,CACA,wDAAA,CD+HE,uDC1HF,eAAA,CACA,oBAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Robbert Broersma\n */\n\n@import "../../common/focus/mixin";\n@import "./mixin";\n\n.utrecht-select {\n  @include utrecht-select;\n}\n\n.utrecht-select--disabled {\n  @include utrecht-select--disabled;\n}\n\n.utrecht-select--focus {\n  @include utrecht-select--focus;\n}\n\n.utrecht-select--focus-visible {\n  @include utrecht-select--focus-visible;\n}\n\n.utrecht-select--busy {\n  @include utrecht-select--busy;\n}\n\n.utrecht-select--invalid {\n  @include utrecht-select--invalid;\n}\n\n/* stylelint-disable-next-line block-no-empty */\n.utrecht-select--required {\n  @include utrecht-select--required;\n}\n\n.utrecht-select--html-select {\n  @include utrecht-select--html-select;\n}\n','/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Robbert Broersma\n */\n\n@import "../../common/focus/mixin";\n\n/* TODO: Enable ordering properties when the plugin supports logical CSS properties\n * https://github.com/hudochenkov/stylelint-order/pull/162 */\n/* stylelint-disable order/properties-alphabetical-order */\n@mixin utrecht-select {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: var(--utrecht-select-background-color, var(--utrecht-form-control-background-color));\n  background-image: var(--utrecht-select-background-image);\n  background-position: 100%;\n  background-repeat: no-repeat;\n  background-size: 1.4em;\n  border-block-end-width: var(\n    --utrecht-select-border-block-end-width,\n    var(--utrecht-select-border-width, var(--utrecht-form-control-border-width))\n  );\n  border-block-start-width: var(--utrecht-select-border-width, var(--utrecht-form-control-border-width));\n  border-color: var(--utrecht-select-border-color, var(--utrecht-form-control-border-color));\n  border-inline-end-width: var(--utrecht-select-border-width, var(--utrecht-form-control-border-width));\n  border-inline-start-width: var(--utrecht-select-border-width, var(--utrecht-form-control-border-width));\n  border-radius: var(--utrecht-select-border-radius, var(--utrecht-form-control-border-radius, 0));\n  border-style: solid;\n  color: var(--utrecht-select-color, var(--utrecht-form-control-color));\n  font-family: var(--utrecht-select-font-family, var(--utrecht-form-control-font-family));\n  font-size: var(--utrecht-select-font-size, var(--utrecht-form-control-font-size));\n  inline-size: 100%;\n  max-inline-size: var(--utrecht-select-max-inline-size, var(--utrecht-form-control-max-inline-size));\n  padding-block-end: var(--utrecht-select-padding-block-end, var(--utrecht-form-control-padding-block-end));\n  padding-block-start: var(--utrecht-select-padding-block-start, var(--utrecht-form-control-padding-block-start));\n  padding-inline-end: var(--utrecht-select-padding-inline-end, var(--utrecht-form-control-padding-inline-end));\n  padding-inline-start: var(--utrecht-select-padding-inline-start, var(--utrecht-form-control-padding-inline-start));\n}\n\n@mixin utrecht-select--disabled {\n  background-color: var(\n    --utrecht-select-disabled-background-color,\n    var(\n      --utrecht-form-control-disabled-background-color,\n      var(--utrecht-select-background-color, var(--utrecht-form-control-background-color))\n    )\n  );\n  border-color: var(\n    --utrecht-select-disabled-border-color,\n    var(\n      --utrecht-form-control-disabled-border-color,\n      var(--utrecht-select-border-color, var(--utrecht-form-control-border-color))\n    )\n  );\n  color: var(\n    --utrecht-select-disabled-color,\n    var(--utrecht-form-control-disabled-color, var(--utrecht-select-color, var(--utrecht-form-control-color)))\n  );\n  cursor: var(--utrecht-action-disabled-cursor);\n}\n\n@mixin utrecht-select--focus {\n  @include utrecht-focus;\n\n  background-color: var(\n    --utrecht-select-focus-background-color,\n    var(\n      --utrecht-form-control-focus-background-color,\n      var(--utrecht-select-background-color, var(--utrecht-form-control-background-color))\n    )\n  );\n  border-color: var(\n    --utrecht-select-focus-border-color,\n    var(\n      --utrecht-form-control-focus-border-color,\n      var(--utrecht-select-border-color, var(--utrecht-form-control-border-color))\n    )\n  );\n  color: var(\n    --utrecht-select-focus-color,\n    var(--utrecht-form-control-focus-color, var(--utrecht-select-color, var(--utrecht-form-control-color)))\n  );\n}\n\n@mixin utrecht-select--focus-visible {\n  @include utrecht-focus-visible;\n}\n\n@mixin utrecht-select--busy {\n  cursor: var(--utrecht-action-busy-cursor, busy);\n}\n\n@mixin utrecht-select--invalid {\n  --_utrecht-select-border-width: var(\n    --utrecht-select-invalid-border-width,\n    var(\n      --utrecht-form-control-invalid-border-width,\n      var(--utrecht-select-border-width, var(--utrecht-form-control-border-width))\n    )\n  );\n\n  background-color: var(\n    --utrecht-select-invalid-background-color,\n    var(\n      --utrecht-form-control-invalid-background-color,\n      var(--utrecht-select-background-color, var(--utrecht-form-control-background-color))\n    )\n  );\n  border-width: var(--_utrecht-select-border-width);\n  border-block-end-width: var(\n    --utrecht-select-invalid-border-block-end-width,\n    var(\n      --utrecht-form-control-invalid-border-block-end-width,\n      var(\n        --utrecht-select-border-block-end-width,\n        var(--utrecht-form-control-border-block-end-width, var(--_utrecht-select-border-width))\n      )\n    )\n  );\n  border-color: var(\n    --utrecht-select-invalid-border-color,\n    var(\n      --utrecht-form-control-invalid-border-color,\n      var(--utrecht-select-border-color, var(--utrecht-form-control-border-color))\n    )\n  );\n}\n\n/* stylelint-disable-next-line block-no-empty */\n@mixin utrecht-select--required {\n}\n\n@mixin utrecht-select--html-select {\n  &:disabled {\n    @include utrecht-select--disabled;\n  }\n\n  // The workaround for missing `:focus-visible` support makes the code quite complex,\n  // keep the ideal version around to restore it easily when browser support improves.\n\n  @if $utrecht-focus-visible-fallback {\n    &:focus {\n      @include utrecht-select--focus;\n      @include utrecht-select--focus-visible;\n    }\n\n    &:focus:not(:focus-visible) {\n      @include utrecht-focus-ring-reset;\n    }\n  } @else {\n    &:focus {\n      @include utrecht-select--focus;\n    }\n\n    &:focus-visible {\n      @include utrecht-select--focus-visible;\n    }\n  }\n\n  /* <select> does not support :read-only */\n}\n',"/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Gemeente Utrecht\n * Copyright (c) 2021 Robbert Broersma\n */\n\n$utrecht-focus-visible-fallback: true !default;\n\n@mixin utrecht-focus-ring {\n  /* - The browser default focus ring should apply when these CSS custom properties are not set.\n   * - Make the `box-shadow` value available, so components that have their own `box-shadow`\n   *   can combine it with the focus ring box shadow.\n   */\n  --_utrecht-focus-ring-box-shadow: 0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);\n\n  box-shadow: var(--_utrecht-focus-ring-box-shadow);\n  outline-color: var(--utrecht-focus-outline-color, revert);\n  outline-offset: var(--utrecht-focus-outline-offset, revert);\n  outline-style: var(--utrecht-focus-outline-style, revert);\n  outline-width: var(--utrecht-focus-outline-width, revert);\n}\n\n@mixin utrecht-focus-ring-reset {\n  /* undo focus ring */\n  box-shadow: none;\n  outline-style: revert;\n}\n\n/* stylelint-disable-next-line block-no-empty */\n@mixin utrecht-focus {\n}\n\n@mixin utrecht-focus-visible {\n  @include utrecht-focus-ring;\n}\n\n@mixin utrecht-focus-pseudo-classes {\n  :focus {\n    @include utrecht-focus;\n  }\n  :focus-visible {\n    @include utrecht-focus-visible;\n  }\n}\n\n// When support is needed for Safari versions that do not support :focus-visible,\n// use this mixin instead of the `utrecht-focus-pseudo-classes` mixin.\n@mixin utrecht-focus-pseudo-classes-backwards-compatible {\n  &:focus {\n    @include utrecht-focus-ring;\n  }\n  &:focus:not(:focus-visible) {\n    @include utrecht-focus-ring-reset;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);