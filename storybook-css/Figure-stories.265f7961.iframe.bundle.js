/*! For license information please see Figure-stories.265f7961.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_css=self.webpackChunk_utrecht_storybook_css||[]).push([[1577],{"../../node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./src/Figure.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Figure_stories});var index_esm=__webpack_require__("../component-library-react/dist/index.esm.js");const tokens_namespaceObject=JSON.parse('{"utrecht":{"figure":{"margin-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"caption":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"line-height":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),design_token_story=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/design-token-story.tsx")),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const FigureStory=({alt,src,width,height,photo,caption})=>(0,jsx_runtime.jsxs)(index_esm.Bc,{children:[src&&(0,jsx_runtime.jsx)(index_esm.Ee,{alt,src,width,height,photo}),caption&&(0,jsx_runtime.jsx)(index_esm.QD,{children:caption})]});FigureStory.displayName="FigureStory";const meta={title:"CSS Component/Figure",id:"css-figure",component:FigureStory,argTypes:{alt:{description:"Text alternative",type:{name:"text",required:!0}},caption:{description:"Caption",control:"text"},height:{description:"Height (in pixels)",type:{name:"number",required:!0}},width:{description:"Width (in pixels)",type:{name:"number",required:!0}},src:{description:"URL of image",type:{name:"text",required:!0}},photo:{description:"Image is a photo",type:"boolean"}},args:{alt:"",caption:"",src:""},parameters:{tokensPrefix:"utrecht-figure",status:{type:"WORK IN PROGRESS"},tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Figure\n"}}}},Figure_stories=meta,Default={args:{caption:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Fotograaf: Gemeente Utrecht",(0,jsx_runtime.jsx)("br",{}),"Titel: Nijntje Vuelta",(0,jsx_runtime.jsx)("br",{}),"Locatie: Stadsplateau",(0,jsx_runtime.jsx)("br",{}),"Geplaatst: 17 augustus 2022",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(index_esm.rU,{href:"https://www.flickr.com/photos/gemeenteutrecht/52287504255/in/dateposted-public/",external:!0,"aria-label":"Bron: 'Nijntje / Vuelta' op Flickr",children:"Bron: Flickr"})]}),src:"example/photo-nijntje-vuelta.jpg",width:2048,height:1536,photo:!0,alt:"Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"}},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    caption: <>\n        Fotograaf: Gemeente Utrecht\n        <br />\n        Titel: Nijntje Vuelta\n        <br />\n        Locatie: Stadsplateau\n        <br />\n        Geplaatst: 17 augustus 2022\n        <br />\n        <Link href=\"https://www.flickr.com/photos/gemeenteutrecht/52287504255/in/dateposted-public/\" external aria-label=\"Bron: 'Nijntje / Vuelta' op Flickr\">\n          Bron: Flickr\n        </Link>\n      </>,\n    src: 'example/photo-nijntje-vuelta.jpg',\n    width: 2048,\n    height: 1536,\n    photo: true,\n    alt: 'Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor'\n  }\n}",...Default.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DesignTokens"]},"./src/design-token-story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>designTokenStory});var _utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../documentation/components/ComponentTokensSection.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const designTokenStory=meta=>({args:{tokens:meta.parameters.tokens,definition:meta.parameters.tokensDefinition,component:meta.parameters.tokensPrefix},parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:""}},status:null},render:({tokens,definition,component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__.k,{tokens,definition,component})});try{designTokenStory.displayName="designTokenStory",designTokenStory.__docgenInfo={description:"",displayName:"designTokenStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/design-token-story.tsx#designTokenStory"]={docgenInfo:designTokenStory.__docgenInfo,name:"designTokenStory",path:"src/design-token-story.tsx#designTokenStory"})}catch(__react_docgen_typescript_loader_error){}}}]);