/*! For license information please see html-component-RadioButton-stories.dc0215fa.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[33367],{"../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./stories/html-component/RadioButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,CheckedAndDisabled:()=>CheckedAndDisabled,Default:()=>Default,DesignTokens:()=>DesignTokens,Disabled:()=>Disabled,Invalid:()=>Invalid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RadioButton_stories});var tokens=__webpack_require__("../../components/radio-button/tokens.json"),dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),decorator=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./stories/html-component/decorator.tsx")),util=__webpack_require__("./stories/components/util.tsx"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const RadioButton=({checked,disabled,invalid,required,value,...attributes})=>(0,jsx_runtime.jsx)("input",{type:"radio",defaultChecked:checked||null,"aria-invalid":invalid||null,disabled:disabled||null,required:required||null,value,...attributes});RadioButton.displayName="RadioButton";const meta={title:"HTML Component/Radio button",id:"html-radio-button",component:RadioButton,decorators:[decorator.j],argTypes:{checked:{description:"Checked",control:"boolean"},disabled:{description:"Disabled",control:"boolean"},invalid:{description:"Invalid",control:"boolean"},required:{description:"Required",control:"boolean"},value:{description:"Set the value of the text box",control:"text"}},args:{checked:!1,disabled:!1,invalid:!1,required:!1,value:""},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-radio-button",tokens:dist,tokensDefinition:tokens,docs:{description:{component:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Radio button\n\n## Design\n\nZorg dat de radio button herkenbaar is, doordat die lijkt op radio buttons op andere websites. Maak niet heel bijzonder ontwerp dat onduidelijk is voor veel gebruikers.\n\n- Een radio button is rond, niet een vierkant of een ruit.\n- Een radio button heeft een ronde cirkel als _checked_ icoon.\n- Gebruik voor de radio button geen checkmark icoon (een vinkje), dat zou verwarrend zijn. Door een checkmark lijkt het alsof je meerdere opties kunt selecteren, terwijl dat niet zo is.\n\n## Terminologie\n\n- **radio button**: "Radio button" heeft [een Wikipedia-lemma](https://en.wikipedia.org/wiki/Radio_button), [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) noemt het ook "radio button" en "radio group".\n- **checked**: [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) en HTML noemen de staat van de radio button "checked", CSS heeft de `:checked` pseudo-class.\n\n## Class names\n\n- `.utrecht-radio-button`\n'}}}},RadioButton_stories=meta,Default={args:{name:"option",value:"option-a"},parameters:{docs:{description:{story:'Markup using the `<input type="radio">` element.'}}}},Checked={args:{checked:!0,name:"option",value:"option-a"},name:"Checked",parameters:{docs:{description:{story:"Markup using the `checked` attribute."}}}},Disabled={args:{disabled:!0,name:"option",value:"option-a"},name:"Disabled",parameters:{docs:{description:{story:"Markup using the `disabled` attribute."}}}},CheckedAndDisabled={args:{checked:!0,disabled:!0,name:"option",value:"option-a"},name:"Checked and disabled",parameters:{docs:{description:{story:"Markup using the `checked` and `disabled` attributes."}}}},Invalid={args:{invalid:!0,name:"option",value:"option-a"},name:"Invalid",parameters:{docs:{description:{story:'Markup using the `aria-invalid="true"` attribute.'}}}},DesignTokens=(0,util.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'option',\n    value: 'option-a'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `<input type=\"radio\">` element.'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  args: {\n    checked: true,\n    name: 'option',\n    value: 'option-a'\n  },\n  name: 'Checked',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `checked` attribute.'\n      }\n    }\n  }\n}",...Checked.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true,\n    name: 'option',\n    value: 'option-a'\n  },\n  name: 'Disabled',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `disabled` attribute.'\n      }\n    }\n  }\n}",...Disabled.parameters?.docs?.source}}},CheckedAndDisabled.parameters={...CheckedAndDisabled.parameters,docs:{...CheckedAndDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    checked: true,\n    disabled: true,\n    name: 'option',\n    value: 'option-a'\n  },\n  name: 'Checked and disabled',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `checked` and `disabled` attributes.'\n      }\n    }\n  }\n}",...CheckedAndDisabled.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  args: {\n    invalid: true,\n    name: 'option',\n    value: 'option-a'\n  },\n  name: 'Invalid',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `aria-invalid=\"true\"` attribute.'\n      }\n    }\n  }\n}",...Invalid.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Checked","Disabled","CheckedAndDisabled","Invalid","DesignTokens"]},"./stories/html-component/decorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>htmlContentDecorator});var _utrecht_component_library_react_dist_css_module__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../component-library-react/dist/css-module/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const htmlContentDecorator=(Story,storyContext)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_utrecht_component_library_react_dist_css_module__WEBPACK_IMPORTED_MODULE_2__.pu,{dir:storyContext?.args?.dir,lang:storyContext?.args?.lang,children:Story()});htmlContentDecorator.displayName="htmlContentDecorator"},"../../components/radio-button/tokens.json":module=>{module.exports=JSON.parse('{"utrecht":{"radio-button":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<percentage>","inherits":true}}},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"icon":{"size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}},"active":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"checked":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"active":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"hover":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"focus":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}},"hover":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"focus":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"disabled":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"invalid":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}}}}')}}]);