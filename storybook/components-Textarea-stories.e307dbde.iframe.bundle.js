/*! For license information please see components-Textarea-stories.e307dbde.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[35059],{"./stories/components/Textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,Disabled:()=>Disabled,Focus:()=>Focus,FocusVisible:()=>FocusVisible,Hover:()=>Hover,Invalid:()=>Invalid,Placeholder:()=>Placeholder,PlaceholderRightToLeft:()=>PlaceholderRightToLeft,ReadOnly:()=>ReadOnly,Required:()=>Required,RightToLeft:()=>RightToLeft,Spellcheck:()=>Spellcheck,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Textarea_stories});var clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Textarea=(0,react.forwardRef)((({dir,disabled,invalid,readOnly,required,className,...restProps},ref)=>(0,jsx_runtime.jsx)("textarea",{...restProps,ref,className:(0,clsx_m.Z)("utrecht-textarea","utrecht-textarea--html-textarea",disabled&&"utrecht-textarea--disabled",invalid&&"utrecht-textarea--invalid",readOnly&&"utrecht-textarea--readonly",required&&"utrecht-textarea--required",className),dir:dir??"auto",disabled,readOnly,required,"aria-invalid":invalid||void 0})));Textarea.displayName="Textarea";try{Textarea.displayName="Textarea",Textarea.__docgenInfo={description:"",displayName:"Textarea",props:{invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../component-library-react/src/Textarea.tsx#Textarea"]={docgenInfo:Textarea.__docgenInfo,name:"Textarea",path:"../component-library-react/src/Textarea.tsx#Textarea"})}catch(__react_docgen_typescript_loader_error){}var READMEraw=__webpack_require__("../../components/textarea/README.md?raw"),tokens=__webpack_require__("../../components/textarea/tokens.json"),dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),util=__webpack_require__("./stories/components/util.tsx");const arabicDecorator=Story=>(0,jsx_runtime.jsx)("div",{dir:"rtl",lang:"ar",children:Story()});arabicDecorator.displayName="arabicDecorator";const TextareaStory=({children,focus,focusVisible,hover,...args})=>(0,jsx_runtime.jsx)(Textarea,{className:(0,clsx_m.Z)({"utrecht-textarea--focus":focus,"utrecht-textarea--focus-visible":focusVisible,"utrecht-textarea--hover":hover}),defaultValue:children,...args});TextareaStory.displayName="TextareaStory";const meta={title:"CSS Component/Textarea",id:"css-textarea",component:TextareaStory,argTypes:{dir:{description:"Text direction",control:{type:"select"},options:{"":void 0,auto:"auto",ltr:"ltr",rtl:"rtl"}},disabled:{description:"Disabled",control:"boolean"},invalid:{description:"Invalid",control:"boolean"},readOnly:{description:"Read-only",control:"boolean"},required:{description:"Required",control:"boolean"},focus:{description:"Focus",control:"boolean"},focusVisible:{description:"focusVisible",control:"boolean"},spellCheck:{description:"Spellcheck",control:{type:"select"},options:{"":void 0,false:"false",true:"true"}}},args:{dir:"auto",disabled:!1,focus:!1,focusVisible:!1,hover:!1,invalid:!1,readOnly:!1,required:!1,children:"The Quick Brown Fox Jumps Over The Lazy Dog",spellCheck:void 0},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-textarea",tokens:dist,tokensDefinition:tokens,docs:{description:{component:READMEraw}}}},Textarea_stories=meta,Default={args:{children:"The Quick Brown Fox Jumps Over The Lazy Dog"},parameters:{docs:{description:{story:"Styling via the `.utrecht-textarea` class name."}}}},Placeholder={name:"Placeholder",args:{...Default.args,children:"",placeholder:"Typ je bericht..."},parameters:{docs:{description:{story:"De `::placeholder` styling werkt automatisch als met de `utrecht-textarea--html-textarea` class name"}}}},PlaceholderRightToLeft={name:"Placeholder (right-to-left)",args:{...Default.args,placeholder:"اكتب رسالتك",children:""},decorators:[arabicDecorator]},RightToLeft={args:{...Default.args,children:"لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي."},decorators:[arabicDecorator],name:"Right-to-left"},Spellcheck={args:{...Default.args,spellCheck:!1},name:"Disable spell check"},Disabled={args:{...Default.args,disabled:!0},name:"Disabled"},Invalid={args:{...Default.args,invalid:!0},name:"Invalid"},ReadOnly={args:{...Default.args,readOnly:!0},name:"Read-only"},Required={args:{...Default.args,required:!0},name:"Required"},Focus={args:{...Default.args,focus:!0},name:"Focus"},FocusVisible={args:{...Default.args,focus:!0,focusVisible:!0},name:"Focus-visible"},Hover={args:{...Default.args,hover:!0},name:"Hover"},DesignTokens=(0,util.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: `Styling via the \\`.utrecht-textarea\\` class name.`\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:"{\n  name: 'Placeholder',\n  args: {\n    ...Default.args,\n    children: '',\n    placeholder: 'Typ je bericht...'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'De `::placeholder` styling werkt automatisch als met de `utrecht-textarea--html-textarea` class name'\n      }\n    }\n  }\n}",...Placeholder.parameters?.docs?.source}}},PlaceholderRightToLeft.parameters={...PlaceholderRightToLeft.parameters,docs:{...PlaceholderRightToLeft.parameters?.docs,source:{originalSource:"{\n  name: 'Placeholder (right-to-left)',\n  args: {\n    ...Default.args,\n    placeholder: 'اكتب رسالتك',\n    children: ''\n  },\n  decorators: [arabicDecorator]\n}",...PlaceholderRightToLeft.parameters?.docs?.source}}},RightToLeft.parameters={...RightToLeft.parameters,docs:{...RightToLeft.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    children: 'لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.'\n  },\n  decorators: [arabicDecorator],\n  name: 'Right-to-left'\n}",...RightToLeft.parameters?.docs?.source}}},Spellcheck.parameters={...Spellcheck.parameters,docs:{...Spellcheck.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    spellCheck: false\n  },\n  name: 'Disable spell check'\n}",...Spellcheck.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    disabled: true\n  },\n  name: 'Disabled'\n}",...Disabled.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    invalid: true\n  },\n  name: 'Invalid'\n}",...Invalid.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    readOnly: true\n  },\n  name: 'Read-only'\n}",...ReadOnly.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    required: true\n  },\n  name: 'Required'\n}",...Required.parameters?.docs?.source}}},Focus.parameters={...Focus.parameters,docs:{...Focus.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    focus: true\n  },\n  name: 'Focus'\n}",...Focus.parameters?.docs?.source}}},FocusVisible.parameters={...FocusVisible.parameters,docs:{...FocusVisible.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    focus: true,\n    focusVisible: true\n  },\n  name: 'Focus-visible'\n}",...FocusVisible.parameters?.docs?.source}}},Hover.parameters={...Hover.parameters,docs:{...Hover.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    hover: true\n  },\n  name: 'Hover'\n}",...Hover.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Placeholder","PlaceholderRightToLeft","RightToLeft","Spellcheck","Disabled","Invalid","ReadOnly","Required","Focus","FocusVisible","Hover","DesignTokens"]}}]);