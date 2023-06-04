/*! For license information please see web-component-breadcrumb-readme-stories-mdx.0cacd814.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[41866],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/web-component/breadcrumb/readme.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>readme_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Web Component/Breadcrumb navigation/README",id:"web-component-breadcrumb",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n",(0,jsx_runtime.jsx)(dist.h_,{id:"web-component-breadcrumb",title:"Web Component/Breadcrumb navigation/README"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Breadcrumb navigation\n\nBreadcrumb navigation, ook wel "kruimelpad" genoemd, gebruik je als de pagina\'s van je site georganiseerd zijn in een boomstructuur. Als je site teveel pagina\'s heeft om naar elke pagina een link te maken op de homepage bijvoorbeeld. De eerste link is altijd naar de homepage.\n\nHet kruimelpad moet alleen links bevatten naar hogere niveau\'s of eerdere stappen. De pagina zelf is niet onderdeel van het kruimelpad. Gebruik geen breadcrumb navigation op de homepage, want die heeft geen hogere niveaus.\n\n## HTML\n\nGebruik een `nav` element, want het is handig dat het kruimelpad een _navigation landmark_ is. Het kruimelpad is zelden de enige _navigation landmark_ op de pagina en landmarks moeten wel duidelijk te onderscheiden zijn. Gebruik daarom `aria-label` of `aria-labelledby` met een duidelijk label.\n\nGebruik een heading element met `aria-labelledby`, zodat het label zichtbaar is wanneer de CSS niet geladen kan worden. Zonder stijl is het kruimelpad niet duidelijk herkenbaar, dan maakt de heading dat duidelijk.\n\nDe _breadcrumb navigation_ is niet een onderdeel dat opgezocht wordt via heading navigatie van een _screen reader_. Verberg de heading met `aria-hidden="true"` zodat de headings uit de main content sneller te vinden zijn.\n\nBijvoorbeeld:\n\n```html\n<nav aria-labelledby="breadcrumb-heading">\n  <h2 id="breadcrumb-heading" aria-hidden="true">Kruimelpad</h2>\n  ...kruimelpad...\n</nav>\n```\n\nGebruik `rel` om duidelijk te maken wat het doel is van de links. ([WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)). Gebruik [`rel="home"`](https://microformats.org/wiki/rel-home) voor de link naar de homepage (deze relatie is nog slechts een voorstel). Gebruik [`rel="up"`](https://microformats.org/wiki/rel-up) voor pagina\'s die één niveau hoger zijn in een hierarchie. Gebruik `rel="first"` voor de eerste pagina in een serie.\n\n## Hoe het niet moet\n\n### Navigatie in de verkeerde _landmark_\n\nPlaats het `<nav>` HTML-element met de breadcrumb navigation niet binnen de _main page content_, ofwel het `<main>` HTML-element.\n\nNiet:\n\n```html\n<main>\n  <nav class="breadcrumbs">\n    <a href="/">Home</a> /\n    <a href="/contact" aria-current="page">Contact</a>\n  </nav>\n  <h1>Contact</h1>\n</main>\n```\n\nWel:\n\n```html\n<nav class="breadcrumbs">\n  <a href="/">Home</a> /\n  <a href="/contact" aria-current="page">Contact</a>\n</nav>\n<main>\n  <h1>Contact</h1>\n</main>\n```\n\n## Related info\n\n- [Google Search Central - Advanced SEO - Breadcrumb](https://developers.google.com/search/docs/data-types/breadcrumb)\n- [Homepage Links Remain a Necessity — Nielsen Norman Group](https://www.nngroup.com/articles/homepage-links/)\n- [Breadcrumbs — Adobe Spectrum Design System](https://spectrum.adobe.com/page/breadcrumbs/)\n- [Exploring Markup for Breadcrumbs — Chris Coyier](https://css-tricks.com/markup-for-breadcrumbs/)\n\n## Relevante WCAG regels\n\n- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): gebruik het `<nav>` element voor de `navigation` landmark role.\n- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)\n- [WCAG eis 2.4.5](https://www.w3.org/TR/WCAG21/#multiple-ways)\n- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de `navigation` landmark maakt duidelijk dat het om het broodkruimelpad gaat. Zie ook: [Using `aria-label` to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5).\n- [WCAG eis 2.4.8](https://www.w3.org/TR/WCAG21/#location):\n  - gebruik `<a aria-current="location">` om de huidige pagina te markeren\n  - een kruimelpad is een manier om duidelijk te maken waar de gebruiker zich bevind in de context van een site met meerdere pagina\'s.\n'})]})}}};const readme_stories=componentMeta}}]);