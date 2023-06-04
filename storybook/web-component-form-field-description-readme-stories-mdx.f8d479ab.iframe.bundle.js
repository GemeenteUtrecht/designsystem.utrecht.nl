/*! For license information please see web-component-form-field-description-readme-stories-mdx.f8d479ab.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[90772],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/web-component/form-field-description/readme.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>readme_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Web Component/Form field description/README",id:"web-component-form-field-description",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n",(0,jsx_runtime.jsx)(dist.h_,{id:"web-component-form-field-description",title:"Web Component/Form field description/README"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Form field description\n\nGebruik dit component voor extra beschrijvingen en instructies bij formuliervelden. Gebruik variaties van dit component voor meldingen dat er iets mis is met de invoer (`invalid`), dat er iets fout ging met het behandelen van de invoer (`error`), feedback over de status van de invoer, of feedback dat de invoer OK is.\n\nDit component is meestal een onderdeel van het _form field_ component.\n\n## Gebruikte termen\n\n- `form` komt van `<form>` in HTML en `role="form"` in WAI-ARIA.\n- `field` komt van `<fieldset>` in HTML.\n- `description` komt van `aria-describedby`.\n- `invalid` komt van `:valid` in CSS en `aria-invalid` in WAI-ARIA.\n- `valid` from `:valid` in CSS.\n\n## HTML\n\nGebruik een `id` attribuut op dit element, zodat je met `aria-describedby` op de _form control_ een koppeling kunt maken.\n\n## Relevante WCAG eisen\n\n- [WCAG eis 3.3.1](https://www.w3.org/TR/WCAG21/#error-identification). Gebruik `id` attribuut op de _form field description_ en koppel de _form control_ met `aria-describedby` aan deze `id`. Zie ook: [WCAG Technique: Using `aria-invalid` to Indicate An Error Field](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21)\n- [WCAG eis 3.3.2](https://www.w3.org/TR/WCAG21/#labels-or-instructions). Zie ook: [WCAG Technique ARIA1: Using the `aria-describedby` property to provide a descriptive label for user interface controls](https://www.w3.org/WAI/WCAG21/)\n- [WCAG eis 3.3.2](https://www.w3.org/TR/WCAG21/#error-suggestion)\n'})]})}}};const readme_stories=componentMeta}}]);