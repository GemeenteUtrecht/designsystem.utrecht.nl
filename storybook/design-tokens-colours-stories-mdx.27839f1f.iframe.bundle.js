/*! For license information please see design-tokens-colours-stories-mdx.27839f1f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[13792],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/design-tokens/colours.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>colours_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.0_@types+react-dom@18.2.7_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ColorExample=({color})=>{const _components=Object.assign({data:"data"},(0,lib.ah)());return(0,jsx_runtime.jsx)(_components.data,{className:"utrecht-color-sample",value:color,style:{color,outline:"1px solid silver"}})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n","\n",(0,jsx_runtime.jsx)(_components.h1,{id:"kleuren-huisstijl",children:"Kleuren huisstijl"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Copyright (c) 2021 Gemeente Utrecht."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"De website gebruikt op hoofdlijnen de kleuren rood, geel, blauw, zwart, wit en grijs."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"rood",children:"Rood"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Rood wordt gebruikt als basiskleur in het ontwerp."}),"\n",(0,jsx_runtime.jsxs)("table",{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Voorbeeld"}),(0,jsx_runtime.jsx)("th",{children:"Design Token naam"}),(0,jsx_runtime.jsx)("th",{children:"Hsl code"}),(0,jsx_runtime.jsx)("th",{children:"Hex code"}),(0,jsx_runtime.jsx)("th",{children:"Gebruik"})]})}),(0,jsx_runtime.jsxs)("tbody",{children:[(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-red-20)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-red-20"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"hsl(0, 100%, 20%)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#660000"})}),(0,jsx_runtime.jsxs)("td",{children:["Donker rood. Gebruikt wit (",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-white"}),") als tekstkleur op rood."]})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-red-30)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-red-30"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"hsl(0, 100%, 30%)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#990000"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Hover rood. Gebruikt wit (",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-white"}),") als tekstkleur op rood. Wordt gebruikt voor de achtergrond\nvan de social media buttons & om waarchuwingen aan te duiden."]})})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-red-40)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-red-40"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"hsl(0, 100%, 40%)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#CC0000"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Basis rood. Wordt gebruikt in de footer, in menu's, bij het zoeken. Toptaak buttons op projectsites. Gebruikt\nwit (",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-white"}),") als tekstkleur op rood."]})})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-red-95)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-red-95"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"hsl(0, 100%, 95%)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#FFE5E5"})}),(0,jsx_runtime.jsx)("td",{children:"Licht rood. Voor gebruik voor rode achtergrond."})]})]})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"inzichten-uit-onderzoek",children:"Inzichten uit onderzoek"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Uit onderzoek blijkt dat laaggeletterden afschrikken van de kleur rood. Deze dus niet gebruiken bij iets waar op geklikt kan worden. De tekst wordt niet gelezen, de laaggeletterde acteert op kleur."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"blauw",children:"Blauw"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-blue-35"})," (donker blauw) wordt gebruikt als basiskleur voor links en knoppen. ",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-blue-80"})," (licht blauw) en ",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-blue-90"})," (ijsblauw) wordt gebruikt voor blokken."]}),"\n",(0,jsx_runtime.jsxs)("table",{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Voorbeeld"}),(0,jsx_runtime.jsx)("th",{children:"Design Token naam"}),(0,jsx_runtime.jsx)("th",{children:"Hsl code"}),(0,jsx_runtime.jsx)("th",{children:"Hex code"}),(0,jsx_runtime.jsx)("th",{children:"Gebruik"})]})}),(0,jsx_runtime.jsxs)("tbody",{children:[(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-blue-20)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-blue-20"})}),(0,jsx_runtime.jsxs)("td",{children:[(0,jsx_runtime.jsx)(_components.code,{children:"hsl(211, 60%, 20%)"})," "]}),(0,jsx_runtime.jsxs)("td",{children:[" ",(0,jsx_runtime.jsx)(_components.code,{children:"#143252"})]}),(0,jsx_runtime.jsx)("td",{children:"Basis donkerblauw. "})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-blue-35)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-blue-35"})}),(0,jsx_runtime.jsxs)("td",{children:[(0,jsx_runtime.jsx)(_components.code,{children:"hsl(211, 60%, 35%)"})," "]}),(0,jsx_runtime.jsxs)("td",{children:[" ",(0,jsx_runtime.jsx)(_components.code,{children:"#24578F"})]}),(0,jsx_runtime.jsx)("td",{children:"Basis kleur voor link en knoppen Call-to-action. Dit is de actie kleur op de (web)app. "})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-blue-40)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-blue-40"})}),(0,jsx_runtime.jsxs)("td",{children:[(0,jsx_runtime.jsx)(_components.code,{children:"hsl(211, 60%, 40%)"})," "]}),(0,jsx_runtime.jsxs)("td",{children:[" ",(0,jsx_runtime.jsx)(_components.code,{children:"#2964A3"})]}),(0,jsx_runtime.jsx)("td",{children:"Blauw variant bij hover/focus. "})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-blue-80)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-blue-80"})}),(0,jsx_runtime.jsxs)("td",{children:[(0,jsx_runtime.jsx)(_components.code,{children:"hsl(211, 60%, 80%)"})," "]}),(0,jsx_runtime.jsxs)("td",{children:[" ",(0,jsx_runtime.jsx)(_components.code,{children:"#ADCBEB"})]}),(0,jsx_runtime.jsx)("td",{children:"Licht blauw voor achtergrond contactblok. "})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-blue-90)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-blue-90"})}),(0,jsx_runtime.jsxs)("td",{children:[(0,jsx_runtime.jsx)(_components.code,{children:"hsl(211 60% 90%)"})," "]}),(0,jsx_runtime.jsxs)("td",{children:[" ",(0,jsx_runtime.jsx)(_components.code,{children:"#D6E5F5"})]}),(0,jsx_runtime.jsx)("td",{children:"Ijsblauw variant voor achtergrond, spotlight en uitgelicht. "})]})]})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"geel",children:"Geel"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Geel wordt gebruikt als ondersteunende kleur."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"logo",children:"Logo"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Het balkje in het digitale logo gebruikt ",(0,jsx_runtime.jsx)(_components.code,{children:"utrecht-color-yellow-50"}),"."]}),"\n",(0,jsx_runtime.jsxs)("table",{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Voorbeeld"}),(0,jsx_runtime.jsx)("th",{children:"Design Token naam"}),(0,jsx_runtime.jsx)("th",{children:"Hsl code"}),(0,jsx_runtime.jsx)("th",{children:"Hex code"}),(0,jsx_runtime.jsx)("th",{children:"Gebruik"})]})}),(0,jsx_runtime.jsxs)("tbody",{children:[(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-yellow-40)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-yellow-40"})}),(0,jsx_runtime.jsxs)("td",{children:[(0,jsx_runtime.jsx)(_components.code,{children:"hsl(48, 100%, 40%)"})," "]}),(0,jsx_runtime.jsxs)("td",{children:[" ",(0,jsx_runtime.jsx)(_components.code,{children:"#CCA300"})]}),(0,jsx_runtime.jsx)("td",{children:"Donkere variant van basis geel. "})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-yellow-50)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-yellow-50"})}),(0,jsx_runtime.jsxs)("td",{children:[(0,jsx_runtime.jsx)(_components.code,{children:"hsl(48, 100%, 50%)"})," "]}),(0,jsx_runtime.jsxs)("td",{children:[" ",(0,jsx_runtime.jsx)(_components.code,{children:"#FFCC00"})]}),(0,jsx_runtime.jsxs)("td",{children:["Basis Gemeente Utrecht kleur geel. Gebruikt zwart (",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-black"}),") als tekstkleur op geel. "]})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-yellow-60)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-yellow-60"})}),(0,jsx_runtime.jsxs)("td",{children:[(0,jsx_runtime.jsx)(_components.code,{children:"hsl(48, 100%, 60%)"})," "]}),(0,jsx_runtime.jsxs)("td",{children:[" ",(0,jsx_runtime.jsx)(_components.code,{children:"#FFD633"})]}),(0,jsx_runtime.jsx)("td",{children:"Deze kleur geel wordt gebruikt als achtergrond bij het selecteren. "})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-yellow-80)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-yellow-80"})}),(0,jsx_runtime.jsxs)("td",{children:[(0,jsx_runtime.jsx)(_components.code,{children:"hsl(48, 100% ,80%)"})," "]}),(0,jsx_runtime.jsxs)("td",{children:[" ",(0,jsx_runtime.jsx)(_components.code,{children:"#FFEB99"})]}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Achtergrond geel voor Spotlight en uitgelicht blokken. Gebruikt zwart (",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-black"}),") als tekstkleur\nop geel."]})})]})]})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"grijs",children:"Grijs"}),"\n",(0,jsx_runtime.jsxs)("table",{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Voorbeeld"}),(0,jsx_runtime.jsx)("th",{children:"Design Token naam"}),(0,jsx_runtime.jsx)("th",{children:"Hsl code"}),(0,jsx_runtime.jsx)("th",{children:"Hex code"}),(0,jsx_runtime.jsx)("th",{children:"Gebruik"})]})}),(0,jsx_runtime.jsxs)("tbody",{children:[(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-grey-10)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-grey-10"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"hsl(0, 0%, 10%)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#1A1A1A"})}),(0,jsx_runtime.jsx)("td",{children:"Wordt gebruikt in Surface component. "})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-grey-15)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-grey-15"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"hsl(0, 0%, 15%)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#262626"})}),(0,jsx_runtime.jsx)("td",{children:"Wordt gebruikt in Top navigatie als hover over een menu item. "})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-grey-30)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-grey-30"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"hsl(0, 0%, 30%)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#4D4D4D"})}),(0,jsx_runtime.jsx)("td",{children:"Wordt gebruikt voor borders in formuliercomponenten. "})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-grey-40)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-grey-40"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"hsl(0, 0%, 40%)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#666666"})}),(0,jsx_runtime.jsx)("td",{children:"Formulier invul element kleur. "})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-grey-80)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-grey-80"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"hsl(0, 0%, 80%)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#CCCCCC"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Break out op landingpagina’s, kruimelpad, en diverse content elementen (spotlight, tabel, accordeon). Gebruikt\nzwart (",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-black"}),") als tekstkleur op dit grijs. Gebruik voor links het standaard donkerblauw\n(",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-blue-35"}),")."]})})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-grey-90)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-grey-90"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"hsl(0, 0%, 90%)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#E6E6E6"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Diverse elementen in contentpagina (scheidingslijn, subnav border, accordeon). Gebruikt zwart\n(",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-black"}),") als tekstkleur op dit lichte grijs. Gebruik voor tekstlinks het standaard donkerblauw\n(",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-blue-35"}),")."]})})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-grey-95)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-grey-95"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"hsl(0, 0%, 95%)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#F2F2F2"})}),(0,jsx_runtime.jsx)("td",{children:"Basiskleur achtergrond kleur van de body. "})]})]})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"groen",children:"Groen"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Groen wordt gebruikt als ondersteunende kleur."}),"\n",(0,jsx_runtime.jsxs)("table",{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Voorbeeld"}),(0,jsx_runtime.jsx)("th",{children:"Design Token naam"}),(0,jsx_runtime.jsx)("th",{children:"Hsl code"}),(0,jsx_runtime.jsx)("th",{children:"Hex code"}),(0,jsx_runtime.jsx)("th",{children:"Gebruik"})]})}),(0,jsx_runtime.jsxs)("tbody",{children:[(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-green-40)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-green-40"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"hsl(90, 30%, 40%)"})}),(0,jsx_runtime.jsxs)("td",{children:[" ",(0,jsx_runtime.jsx)(_components.code,{children:"#668547"})]}),(0,jsx_runtime.jsx)("td",{children:"Donkere variant van basis groen "})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-green-50)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-green-50"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"hsl(90, 30%, 50%)"})}),(0,jsx_runtime.jsxs)("td",{children:[" ",(0,jsx_runtime.jsx)(_components.code,{children:"#80A659"})]}),(0,jsx_runtime.jsx)("td",{children:"Basis Gemeente Utrecht groen "})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-green-80)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-green-80"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"hsl(90, 30%, 80%)"})}),(0,jsx_runtime.jsxs)("td",{children:[" ",(0,jsx_runtime.jsx)(_components.code,{children:"#CCDBBD"})]}),(0,jsx_runtime.jsx)("td",{children:"Nog niet in gebruik. "})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-green-90)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-green-90"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"hsl(90, 30%, 90%)"})}),(0,jsx_runtime.jsxs)("td",{children:[" ",(0,jsx_runtime.jsx)(_components.code,{children:"#E6EDDE"})]}),(0,jsx_runtime.jsx)("td",{children:"Achtergrond groen voor badges "})]})]})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"zwart",children:"Zwart"}),"\n",(0,jsx_runtime.jsxs)("table",{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Voorbeeld"}),(0,jsx_runtime.jsx)("th",{children:"Design Token naam"}),(0,jsx_runtime.jsx)("th",{children:"Hsl code"}),(0,jsx_runtime.jsx)("th",{children:"Hex code"}),(0,jsx_runtime.jsx)("th",{children:"Gebruik"})]})}),(0,jsx_runtime.jsx)("tbody",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-black)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-black"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"hsl(0, 0%, 0%)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#000000"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Gebruik zwart als tekstkleur op de lichtere kleuren: Blauw: ",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-blue-80"}),",\n",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-blue-90"}),". Geel: ",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-yellow-80"}),". Grijs: ",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-grey-80"}),",\n",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-grey-90"}),". Wit: ",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-white"}),"."]})})]})})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"wit",children:"Wit"}),"\n",(0,jsx_runtime.jsxs)("table",{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Voorbeeld"}),(0,jsx_runtime.jsx)("th",{children:"Design Token naam"}),(0,jsx_runtime.jsx)("th",{children:"Hsl code"}),(0,jsx_runtime.jsx)("th",{children:"Hex code"}),(0,jsx_runtime.jsx)("th",{children:"Gebruik"})]})}),(0,jsx_runtime.jsx)("tbody",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-white)"})}),(0,jsx_runtime.jsxs)("td",{children:[" ",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-white"})]}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"hsl(0, 0%, 100%)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#FFFFFF"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Gebruik wit als tekstkleur op de donkere kleuren. Blauw: ",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-blue-35"}),". Rood:\n",(0,jsx_runtime.jsx)(_components.code,{children:"-utrecht-color-red-20"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"-utrecht-color-red-30"}),". Grijs: ",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-grey-40"}),". Zwart:\n",(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-white"})]})})]})})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"secundaire-kleuren",children:"Secundaire kleuren"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"De secundaire kleuren zijn kleuren die gecombineerd kunnen worden met de primaire kleuren; ze zijn bedoeld voor ondersteunend gebruik. Het secundaire kleurenpalet wordt gebruikt voor kleurbanen, grafieken, illustraties en infographics. Gebruik geen andere kleuren. Zwart wordt voor alle lopende tekst gebruikt."}),"\n",(0,jsx_runtime.jsxs)("table",{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Voorbeeld"}),(0,jsx_runtime.jsx)("th",{children:"Design Token naam"}),(0,jsx_runtime.jsx)("th",{children:"Hex code"}),(0,jsx_runtime.jsx)("th",{children:"Gebruik"})]})}),(0,jsx_runtime.jsxs)("tbody",{children:[(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-secondary-purple)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-secondary-purple"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#762cd1"})}),(0,jsx_runtime.jsx)("td",{children:"Paars"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-secondary-magenta)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-secondary-magenta"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#f02198"})}),(0,jsx_runtime.jsx)("td",{children:"Magenta"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-secondary-red)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-secondary-red"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#cc0000"})}),(0,jsx_runtime.jsx)("td",{children:"Rood"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-secondary-orange)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-secondary-orange"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#ff6e00"})}),(0,jsx_runtime.jsx)("td",{children:"Oranje"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-secondary-yellow)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-secondary-yellow"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#ffcc00"})}),(0,jsx_runtime.jsx)("td",{children:"Geel"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-secondary-lime)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-secondary-lime"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#99d000"})}),(0,jsx_runtime.jsx)("td",{children:"Lime"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-secondary-green)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-secondary-green"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#32ab27"})}),(0,jsx_runtime.jsx)("td",{children:"Groen"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-secondary-cyan)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-secondary-cyan"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#009ed4"})}),(0,jsx_runtime.jsx)("td",{children:"Cyaan"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-secondary-blue)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-secondary-blue"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#006dff"})}),(0,jsx_runtime.jsx)("td",{children:"Blauw"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-secondary-navy)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-secondary-navy"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#1c4181"})}),(0,jsx_runtime.jsx)("td",{children:"Marineblauw"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-secondary-brown)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-secondary-brown"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#ad643b"})}),(0,jsx_runtime.jsx)("td",{children:"Bruin"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ColorExample,{color:"var(--utrecht-color-secondary-grey)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"--utrecht-color-secondary-grey"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"#757575"})}),(0,jsx_runtime.jsx)("td",{children:"Grijs"})]})]})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"design",children:"Design"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/msb3CfQBefPoruqNQ968Zh/Utrecht-Design-System?node-id=1%3A866",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma - Utrecht Design System - Kleuren"})})]})}const _kleuren=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function colours_stories_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Utrecht/Design Tokens/Kleuren",parameters:{status:{type:"ALPHA"}}}),"\n",(0,jsx_runtime.jsx)(_kleuren,{})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Utrecht/Design Tokens/Kleuren",parameters:{status:{type:"ALPHA"}},tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function colours_stories_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(colours_stories_createMdxContent,{...props})}):colours_stories_createMdxContent()}};const colours_stories=componentMeta}}]);