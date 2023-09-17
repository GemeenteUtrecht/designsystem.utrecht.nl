/*! For license information please see components-URLValue-stories.9c71f808.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[7686],{"../../node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../../documentation/components/ComponentTokensSection.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>ComponentTokensSection});var prop_types=__webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),DesignTokensTable=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../documentation/components/DesignTokensTable.jsx"));const isHiddenDesignToken=token=>!!token&&!!token.$extensions&&!0===token.$extensions["nl.nldesignsystem.hidden"];var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ComponentTokensTable=({component,tokens})=>{const componentPath=["utrecht",component.replace(/^(example|denhaag|utrecht)-/,"")],subset=tokens.filter((token=>componentPath.every(((name,index)=>token.path[index]===name)))).filter((token=>!isHiddenDesignToken(token)));return 0===subset.length?(0,jsx_runtime.jsxs)("p",{children:["This component has ",(0,jsx_runtime.jsx)("strong",{children:"no documented design tokens"}),"."]}):(0,jsx_runtime.jsx)(DesignTokensTable.V,{tokens:subset})};ComponentTokensTable.displayName="ComponentTokensTable",ComponentTokensTable.propTypes={component:prop_types_default().string.isRequired,tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])}))};var lodash_isplainobject=__webpack_require__("../../node_modules/.pnpm/lodash.isplainobject@4.0.6/node_modules/lodash.isplainobject/index.js"),lodash_isplainobject_default=__webpack_require__.n(lodash_isplainobject);const CopyButton=({value,textContent="Copy"})=>(0,jsx_runtime.jsx)("button",{className:"utrecht-button utrecht-button--secondary-action utrecht-button--html-button",style:{cursor:"copy"},onClick:()=>navigator.clipboard.writeText(value),type:"button",children:textContent});CopyButton.displayName="CopyButton",CopyButton.propTypes={value:prop_types_default().string.isRequired,textContent:prop_types_default().string};const traverseDeep=(root,parents,current,valueTest,callback)=>{valueTest(current)?callback(parents,current):lodash_isplainobject_default()(current)&&Object.entries(current).forEach((([key,value])=>{traverseDeep(root,[...parents,key],value,valueTest,callback)}))},isDesignTokenDefinition=value=>(value=>Object.prototype.hasOwnProperty.call(value,"value")||Object.prototype.hasOwnProperty.call(value,"$value"))(value)||Object.prototype.hasOwnProperty.call(value,"css")||Object.prototype.hasOwnProperty.call(value,"$extensions"),tokensToCSS=tokens=>{const lines=[];return((tokens,callback)=>{traverseDeep(tokens,[],tokens,isDesignTokenDefinition,callback)})(tokens,((path,value)=>{isHiddenDesignToken(value)||lines.push(`  /* --${path.join("-")}: ${value&&value.$extensions&&value.$extensions["nl.nldesignsystem.css.property"]&&value.$extensions["nl.nldesignsystem.css.property"].syntax?value.$extensions["nl.nldesignsystem.css.property"].syntax:"<value>"}; */`)})),`.your-theme {\n  /* Uncomment each custom property you need */\n${lines.join("\n")}\n}`},ExampleTokensCSS=({definition})=>{const code=tokensToCSS(definition);return(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("h2",{children:["Template for ",(0,jsx_runtime.jsx)("samp",{children:"your-theme.css"})]}),(0,jsx_runtime.jsx)("p",{children:"If you do not (yet) want to manage your design tokens in JSON files, but when you just want to get started quickly to reuse our CSS component with your own design, then you can use this CSS template as a starting point to see what parts of the component you can customize with design tokens."}),(0,jsx_runtime.jsxs)("p",{children:["Combine the design tokens CSS with our"," ",(0,jsx_runtime.jsx)("a",{href:"https://npmjs.com/package/@utrecht/component-library-css",children:"CSS component library pacakge on npm"}),", and you should be able to quickly and easily create a web page with our components and your own design."]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CopyButton,{value:code,textContent:"Copy CSS"})}),(0,jsx_runtime.jsx)("pre",{children:code})]})};ExampleTokensCSS.displayName="ExampleTokensCSS",ExampleTokensCSS.propTypes={definition:prop_types_default().object.isRequired};var lodash_clonedeepwith=__webpack_require__("../../node_modules/.pnpm/lodash.clonedeepwith@4.5.0/node_modules/lodash.clonedeepwith/index.js"),lodash_clonedeepwith_default=__webpack_require__.n(lodash_clonedeepwith),lodash_mapvalues=__webpack_require__("../../node_modules/.pnpm/lodash.mapvalues@4.6.0/node_modules/lodash.mapvalues/index.js"),lodash_mapvalues_default=__webpack_require__.n(lodash_mapvalues),lodash_omitby=__webpack_require__("../../node_modules/.pnpm/lodash.omitby@4.6.0/node_modules/lodash.omitby/index.js"),lodash_omitby_default=__webpack_require__.n(lodash_omitby);const ExampleTokensJSON=({definition})=>{const filter=item=>lodash_isplainobject_default()(item.$extensions)||lodash_isplainobject_default()(item.$value)?{}:lodash_isplainobject_default()(item)?lodash_mapvalues_default()(lodash_omitby_default()(item,(item=>isHiddenDesignToken(item))),(item=>lodash_clonedeepwith_default()(item,filter))):void 0,tokens=lodash_clonedeepwith_default()(definition,filter),code=JSON.stringify(tokens,null,"  ");return(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("h2",{children:["Template ",(0,jsx_runtime.jsx)("samp",{children:"tokens.json"})," for your theme"]}),(0,jsx_runtime.jsxs)("p",{children:["We use the ",(0,jsx_runtime.jsx)("a",{href:"https://design-tokens.github.io/community-group/format/",children:"Design Tokens Format"})," to store our design choices in JSON files. These ",(0,jsx_runtime.jsx)("code",{children:"tokens.json"})," files are translated into other formats such as CSS and SCSS variables, so the design choices can be imported automatically into projects with varying technical stacks."]}),(0,jsx_runtime.jsx)("p",{children:"When we develop front-end components in CSS, we avoid putting design decisions in our CSS code directly. Instead we use CSS variables that reference the design tokens. This way we don't need to change the CSS components when over time we make different design decisions, we just include the latest export of the design tokens."}),(0,jsx_runtime.jsx)("p",{children:"Because our CSS components are coded in such a way that design decisions —such as fonts, colors and sizes— are stored in an optional file that you don't have to use, you can reuse our CSS components and combine them with design decisions for your own project and brand."}),(0,jsx_runtime.jsxs)("p",{children:["Copy the JSON template below if you want to reuse this component, and replace the empty placeholder object with your own code:",(0,jsx_runtime.jsx)("code",{children:'{ "value": "#123456", "comment": "my design choice" }'}),"."]}),(0,jsx_runtime.jsxs)("p",{children:["When you have a collection of design token JSON files, you can use"," ",(0,jsx_runtime.jsx)("a",{href:"https://amzn.github.io/style-dictionary/#/",children:"Style Dictionary"})," to translate them to CSS or any other format your developers need."]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CopyButton,{value:code,textContent:"Copy JSON"})}),(0,jsx_runtime.jsx)("pre",{children:code})]})};ExampleTokensJSON.displayName="ExampleTokensJSON",ExampleTokensJSON.propTypes={definition:prop_types_default().object.isRequired};const ComponentTokensSection=({component,tokens,definition})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[definition?(0,jsx_runtime.jsx)(ExampleTokensJSON,{definition}):"",definition?(0,jsx_runtime.jsx)(ExampleTokensCSS,{definition}):"",(0,jsx_runtime.jsx)(ComponentTokensTable,{component,tokens})]});ComponentTokensSection.propTypes={component:prop_types_default().string.isRequired,definition:prop_types_default().object,tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])})).isRequired}},"./stories/components/URLValue.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,HyphenatedEmail:()=>HyphenatedEmail,HyphenatedWebsite:()=>HyphenatedWebsite,Ligatures:()=>Ligatures,RightToLeftPath:()=>RightToLeftPath,RightToLeftTopLevelDomain:()=>RightToLeftTopLevelDomain,__namedExportsOrder:()=>__namedExportsOrder,default:()=>URLValue_stories});var css_module=__webpack_require__("../component-library-react/dist/css-module/index.mjs");const tokens_namespaceObject=JSON.parse('{"utrecht":{"url":{}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),util=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./stories/components/util.tsx")),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const HypenatedTextWithLinks=({children,paragraph,external,href,...props})=>(0,jsx_runtime.jsx)(css_module.nv,{style:{hyphens:"auto"},children:paragraph.split(/((\w+\W){3})/g).map((text=>text||(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(css_module.rU,{href,external,children:(0,jsx_runtime.jsx)(css_module.yy,{...props,children})})})))});HypenatedTextWithLinks.displayName="HypenatedTextWithLinks";const meta={title:"CSS Component/URL value",id:"css-url",component:({paragraph,external,href,...props})=>paragraph?(0,jsx_runtime.jsx)(HypenatedTextWithLinks,{paragraph,external,href,...props}):(0,jsx_runtime.jsx)(css_module.yy,{...props}),argTypes:{children:{description:"URL",type:"string"}},args:{children:[]},parameters:{tokensPrefix:"utrecht-url",status:{type:"WORK IN PROGRESS"},tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# URL component\n\nComponent to display URLs in a page.\n"}}}},URLValue_stories=meta,Default={args:{children:"https://example.com/"}},Ligatures={args:{children:"https://example.fi/"},name:"Ligatures",parameters:{docs:{description:{story:"Some URLs have common ligatures, for example as part of a top-level-domain.\n  \n  It can be helpful to avoid rendering characters together as a ligatures, such as displaying `fi` as `ﬁ`. The CSS property [`font-variant-ligatures`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-ligatures) can be used to disable ligatures."}}}},RightToLeftPath={args:{children:"https://example.com/الأمثلة/"},name:"URL with right-to-left path",parameters:{docs:{description:{story:'When displaying an URL in HTML, explicitly mark the text directionality as left-to-right using `dir="ltr"`, to prevent trailing non-word characters such as `/` to be misplaced in a right-to-left document. A trailing slash might end up before `http:` when the URL is in right-to-left text such as Arabic. To maintain the correct rendering even in automated translations of a document, specifically mark URLs as `dir="ltr"` even when the document as a whole is already configured as such using `<html dir="ltr">`.'}}}},RightToLeftTopLevelDomain={args:{children:"https://example.شبكة/"},name:"URL with right-to-left top-level domain"},lipsum="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\nmagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\nconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\npariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\nlaborum.",HyphenatedWebsite={args:{paragraph:lipsum,external:!0,children:"https://example.com/supercalifragilisticexpialidocious/some-hypenated-path/must-not-be/ambiguous.html",href:"https://example.com/supercalifragilisticexpialidocious/some-hypenated-path/must-not-be/ambiguous.html"},name:"URL in hypenated text",parameters:{docs:{description:{story:"Internetadressen (URLs) en e-mailadressen werken niet goed als je per ongeluk een extra koppelstreepje gebruikt. Aan het einde van een regel worden deze adressen soms per ongeluk opgeknipt met een koppelstreepje: dan is het erg onduidelijk of het streepje onderdeel is van het adres of dat het genegeerd moet worden.\n\nGebruik de _URL value_ component voor deze adressen om met CSS het koppelstreepje te voorkomen."}}},render:({...props})=>(0,jsx_runtime.jsx)(HypenatedTextWithLinks,{...props})},HyphenatedEmail={args:{paragraph:lipsum,external:!0,children:"supercalifragilisticexpialidocious@domain-with-hypen.example.com",href:"mailto:supercalifragilisticexpialidocious@domain-with-hypen.example.com"},name:"E-mail address in hypenated text",render:({...props})=>(0,jsx_runtime.jsx)(HypenatedTextWithLinks,{...props})},DesignTokens=(0,util.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'https://example.com/'\n  }\n}",...Default.parameters?.docs?.source}}},Ligatures.parameters={...Ligatures.parameters,docs:{...Ligatures.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'https://example.fi/'\n  },\n  name: 'Ligatures',\n  parameters: {\n    docs: {\n      description: {\n        story: `Some URLs have common ligatures, for example as part of a top-level-domain.\n  \n  It can be helpful to avoid rendering characters together as a ligatures, such as displaying \\`fi\\` as \\`ﬁ\\`. The CSS property [\\`font-variant-ligatures\\`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-ligatures) can be used to disable ligatures.`\n      }\n    }\n  }\n}",...Ligatures.parameters?.docs?.source}}},RightToLeftPath.parameters={...RightToLeftPath.parameters,docs:{...RightToLeftPath.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'https://example.com/الأمثلة/'\n  },\n  name: 'URL with right-to-left path',\n  parameters: {\n    docs: {\n      description: {\n        story: 'When displaying an URL in HTML, explicitly mark the text directionality as left-to-right using `dir=\"ltr\"`, to prevent trailing non-word characters such as `/` to be misplaced in a right-to-left document. A trailing slash might end up before `http:` when the URL is in right-to-left text such as Arabic. To maintain the correct rendering even in automated translations of a document, specifically mark URLs as `dir=\"ltr\"` even when the document as a whole is already configured as such using `<html dir=\"ltr\">`.'\n      }\n    }\n  }\n}",...RightToLeftPath.parameters?.docs?.source}}},RightToLeftTopLevelDomain.parameters={...RightToLeftTopLevelDomain.parameters,docs:{...RightToLeftTopLevelDomain.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'https://example.شبكة/'\n  },\n  name: 'URL with right-to-left top-level domain'\n}",...RightToLeftTopLevelDomain.parameters?.docs?.source}}},HyphenatedWebsite.parameters={...HyphenatedWebsite.parameters,docs:{...HyphenatedWebsite.parameters?.docs,source:{originalSource:"{\n  args: {\n    paragraph: lipsum,\n    external: true,\n    children: 'https://example.com/supercalifragilisticexpialidocious/some-hypenated-path/must-not-be/ambiguous.html',\n    href: 'https://example.com/supercalifragilisticexpialidocious/some-hypenated-path/must-not-be/ambiguous.html'\n  },\n  name: 'URL in hypenated text',\n  parameters: {\n    docs: {\n      description: {\n        story: `Internetadressen (URLs) en e-mailadressen werken niet goed als je per ongeluk een extra koppelstreepje gebruikt. Aan het einde van een regel worden deze adressen soms per ongeluk opgeknipt met een koppelstreepje: dan is het erg onduidelijk of het streepje onderdeel is van het adres of dat het genegeerd moet worden.\n\nGebruik de _URL value_ component voor deze adressen om met CSS het koppelstreepje te voorkomen.`\n      }\n    }\n  },\n  render: ({\n    ...props\n  }) => {\n    return <HypenatedTextWithLinks {...props} />;\n  }\n}",...HyphenatedWebsite.parameters?.docs?.source}}},HyphenatedEmail.parameters={...HyphenatedEmail.parameters,docs:{...HyphenatedEmail.parameters?.docs,source:{originalSource:"{\n  args: {\n    paragraph: lipsum,\n    external: true,\n    children: 'supercalifragilisticexpialidocious@domain-with-hypen.example.com',\n    href: 'mailto:supercalifragilisticexpialidocious@domain-with-hypen.example.com'\n  },\n  name: 'E-mail address in hypenated text',\n  render: ({\n    ...props\n  }) => {\n    return <HypenatedTextWithLinks {...props} />;\n  }\n}",...HyphenatedEmail.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Ligatures","RightToLeftPath","RightToLeftTopLevelDomain","HyphenatedWebsite","HyphenatedEmail","DesignTokens"]},"./stories/components/util.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>designTokenStory});var _utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../documentation/components/ComponentTokensSection.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const designTokenStory=meta=>({args:{tokens:meta.parameters.tokens,definition:meta.parameters.tokensDefinition,component:meta.parameters.tokensPrefix},parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:""}},status:null},render:({tokens,definition,component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__.k,{tokens,definition,component})});try{designTokenStory.displayName="designTokenStory",designTokenStory.__docgenInfo={description:"",displayName:"designTokenStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/util.tsx#designTokenStory"]={docgenInfo:designTokenStory.__docgenInfo,name:"designTokenStory",path:"stories/components/util.tsx#designTokenStory"})}catch(__react_docgen_typescript_loader_error){}}}]);