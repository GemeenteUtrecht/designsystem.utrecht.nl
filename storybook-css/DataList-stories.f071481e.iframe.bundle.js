/*! For license information please see DataList-stories.f071481e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_css=self.webpackChunk_utrecht_storybook_css||[]).push([[4066],{"../../node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./src/DataList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActionButton:()=>ActionButton,ActionLink:()=>ActionLink,Default:()=>Default,DesignTokens:()=>DesignTokens,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DataList_stories});var css_module=__webpack_require__("../component-library-react/dist/css-module/index.mjs");const tokens_namespaceObject=JSON.parse('{"utrecht":{"data-list":{"margin-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"item-key":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}}},"line-height":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}},"item-value":{"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"line-height":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}},"rows":{"item":{"margin-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}},"item-value":{"margin-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),design_token_story=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/design-token-story.tsx")),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const DataListStory=({appearance,items})=>(0,jsx_runtime.jsx)(css_module.FR,{appearance,children:items.map((({key,keyId,value,actions,multiline})=>(0,jsx_runtime.jsxs)(css_module.LC,{children:[(0,jsx_runtime.jsx)(css_module.rt,{id:keyId,children:key}),(0,jsx_runtime.jsx)(css_module.JL,{multiline,children:value}),actions&&(0,jsx_runtime.jsx)(css_module.HO,{children:actions})]})))});DataListStory.displayName="DataListStory";const meta={title:"CSS Component/Data list",id:"css-data-list",component:DataListStory,argTypes:{items:{description:"Data list items",type:{name:"array",required:!0}},appearance:{description:"Appearance",options:["","rows"],control:{type:"select"}}},args:{appearance:"",items:[]},parameters:{tokensPrefix:"utrecht-data-list",status:{type:"WORK IN PROGRESS"},tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Data list\n\nDe _data list_ component gebruik je onder andere voor:\n\n- een overzicht van gegevens uit een formulier, in een controle-stap voor het verzenden\n- een overzicht vooringevulde gegevens, aan het begin van een formulier\n- een overzicht van bekende gegevens, bijvoorbeeld in een profiel-pagina\n\nOm verschillende soorten data optimaal weer te geven, zijn er speciale componenten gemaakt:\n\n- URL Value: gebruik deze voor internetadressen en e-mailadressen\n- IBAN: gebruik deze voor dit type bankrekeningnummer\n\nEr zijn _BEM modifier class names_ beschikbaar van `utrecht-data-list__value`, voor datatypes:\n\n- `multiline`: voor gegevens die worden aangeleverd als `string`, maar waarvan de tekst verdeeld is over meerdere tekstregels zonder HTML `<br/>` maar met een _newline character_. Bijvoorbeeld ingevoerde tekst uit een `textarea`, of een adres.\n- `number`\n- `telephone`\n\n## Anatomie\n\nDe _data list_ is opgebouwd uit de volgende onderdelen en BEM class names:\n\n- de _data list_\n  - _data list item_, één of meerdere. Naam is gebaseerd op "item" uit `role="associationlistitemvalue"` in de [WAI-ARIA 1.3 Draft](https://w3c.github.io/aria/#associationlistitemvalue)\n    - de _item key_. Naam is gebaseerd op het "key" in uit `role="associationlistitemkey"` in de [WAI-ARIA 1.3 Draft](https://w3c.github.io/aria/#associationlistitemkey).\n    - de _item value_. Naam is gebaseerd op `value` van het `input` HTML-element en op `role="associationlistitemvalue"` in de [WAI-ARIA 1.3 Draft](https://w3c.github.io/aria/#associationlistitemvalue).\n    - de _item actions_ (deze zijn optioneel)\n\nBEM class names:\n\n- `utrecht-data-list`. Gebruik ook `utrecht-data-list--html-dl` voor een reset van standaard styling van het `<dl>` element.\n- `utrecht-data-list__item` voor de `<div>`\n- `utrecht-data-list__item-key` voor de `<dt>`\n- `utrecht-data-list__item-value` voor de `<dd>`\n- `utrecht-data-list__actions` met een eigen `<dd>`\n\n## Vertaalde gegevens\n\nKies per datatype of de _value_ in een andere taal vertaald moet zijn bij gebruikers van automatische vertaalsoftware zoals Google Translate. Van sommige gegevens moet je vertaling voorkomen, bijvoorbeeld bij namen van personen, straatnamen, codes zoals bankrekeningnummers, internetadressen en e-mailadressen. Gebruik het HTML-attribuut `translate="no"` voor deze gegevens.\n\nBijvoorbeeld:\n\n- Gebruik `translate="no"` voor Voorletters. Voorkom dat "KVK" in in het Nederlands wordt vertaald naar "Chamber of Commerce" in het Engels.\n- Gebruik `translate="no"` voor Voornaam. Voorkom dat "Mees" in het Nederlands wordt vertaald naar "Tit" in het Engels.\n- Gebruik `translate="no"` voor Tussenvoegsel. Voorkom dat "Van" in het Nederlands wordt vertaald naar "By" in het Engels.\n- Gebruik `translate="no"` voor Achternaam. Voorkom dat "Post" in het Nederlands wordt vertaald naar "Mail" in het Engels.\n- Gebruik `translate="no"` voor Adres. Voorkom dat "Donau 1" in het Nederlands wordt vertaald naar "Danube 1" in het Engels.\n- Gebruik `translate="no"` voor Postcode. Voorkom dat "1234 CD" in het Nederlands wordt vertaald naar "1234 discos compactos" in het Spaans.\n\nEr zijn enkele plaatsnamen die in een andere taal een naam hebben, er staan veel voorbeelden op Wikipedia: [Lijst van anderstalige namen voor geografische entiteiten in het Nederlandse taalgebied](https://nl.wikipedia.org/wiki/Lijst_van_anderstalige_namen_voor_geografische_entiteiten_in_het_Nederlandse_taalgebied). Toch is het in de meeste veiliger om de plaatsnaam niet automatisch te vertalen.\n\n## HTML\n\nGebruik in de HTML-elementen `dl`, `dt` en `dd` om ([WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships)) om duidelijk onderscheid te maken tussen _key_ en de _value_. Gebruik één `div` element om `dt` en `dd` te groeperen om met makkelijker met CSS de layout te maken.\n\nJe mag in theorie ook een `table` element met `th` voor de _key_ en `td` voor de _value_ gebruiken, maar alleen als je ook een tabel-layout gebruikt. Om de _data list_ leesbaar te maken op kleine schermen is het handiger om geen tabel te gebruiken.\n\n## Hoe het niet moet\n\n### Geen `dl` of `table` gebruiken\n\nGebruik niet alleen `div`, `span` en `p` HTML-element omdat dit niet voldoende duidelijk is (WCAG eis 1.3.1).\n\n## Button of link tekst heeft geen context\n\nNiet:\n\n```html\n<dl>\n  <div>\n    <dt>Naam</dt>\n    <dd>Jos de Vos</dd>\n    <dd><a href="./step-1">Wijzig</a></dd>\n  </div>\n  <div>\n    <dt>Woonplaats</dt>\n    <dd>Amsterdam</dd>\n    <dd><a href="./step-2">Wijzig</a></dd>\n  </div>\n</dl>\n```\n\nWel:\n\n```html\n<dl>\n  <div>\n    <dt>Naam</dt>\n    <dd>Mees de Vos</dd>\n    <dd><a href="./edit" title="Wijzig naam">Wijzig</a></dd>\n  </div>\n  <div>\n    <dt>Woonplaats</dt>\n    <dd>Amsterdam</dd>\n    <dd><a href="./edit" title="Wijzig woonplaats">Wijzig</a></dd>\n  </div>\n</dl>\n```\n\n## Links\n\n- [Summary list van GOV.UK Design System](https://design-system.service.gov.uk/components/summary-list/)\n- [MDN: `<dl>`: The Description List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)\n\n### Relevante WCAG-eisen\n\n- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships) voor gebruik van semantische HTML\n- [WCAG eis 2.4.4](https://www.w3.org/TR/WCAG21/#link-purpose-in-context) en [WCAG eis 2.4.9](https://www.w3.org/TR/WCAG21/#link-purpose-link-only) voor duidelijke namen van acties bij een data list item\n- [WCAG eis 2.5.3](https://www.w3.org/TR/WCAG21/#label-in-name): als de zichtbare tekst van een action "Wijzig" is, dan moet het volledige label ook "Wijzig" gebruiken, dus "Wijzig voornaam" en niet "Bewerk voornaam".\n- [WCAG eis 3.2.4](https://www.w3.org/TR/WCAG21/#consistent-identification): en _data list_ voor controle van formulier-invoer moet consistent zijn bij de tekst van het formulier-label en de tekst van de _data list item key_.\n- [WCAG eis 3.3.4](https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data) en [WCAG eis 3.3.6](https://www.w3.org/TR/WCAG21/#error-prevention-all): de data list gebruik je voor formulieren zodat gebruikers de invoer kunnen controleren\n'}}}},DataList_stories=meta,Default={args:{appearance:"rows",items:[{key:"Voornaam",value:"Mees"},{key:"Achternaam",value:"de Vos"},{key:"Adres",value:"Tweede Kamer der Staten-Generaal\nPostbus 20018\n2500 EA Den Haag",multiline:!0}]},parameters:{docs:{description:{story:"Styling via `utrecht-data-list` class name."}}}},ActionLink={args:{appearance:"rows",items:[{key:"Voornaam",keyId:"993b9f5a-9cb8-454d-8408-9e0fa3125c28",value:"Mees",actions:(0,jsx_runtime.jsx)(css_module.rU,{href:"./form-step-1#given-name",id:"f8b0b08f-8b59-48b8-bef1-c2b78d76564a","aria-labelledby":"f8b0b08f-8b59-48b8-bef1-c2b78d76564a 993b9f5a-9cb8-454d-8408-9e0fa3125c28",children:"Edit"})}]},name:"Action link"},ActionButton={args:{appearance:"rows",items:[{key:"Voornaam",keyId:"720feb7a-8c3d-42ac-96c5-ee7a62c9d75d",value:"Mees",actions:(0,jsx_runtime.jsx)(css_module.Qj,{inline:!0,id:"33bd9956-ca7a-4613-adf3-c42631981303","aria-labelledby":"33bd9956-ca7a-4613-adf3-c42631981303 720feb7a-8c3d-42ac-96c5-ee7a62c9d75d",children:"Edit"})}]},name:"Action button"},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    appearance: 'rows',\n    items: [{\n      key: 'Voornaam',\n      value: 'Mees'\n    }, {\n      key: 'Achternaam',\n      value: 'de Vos'\n    }, {\n      key: 'Adres',\n      value: 'Tweede Kamer der Staten-Generaal\\nPostbus 20018\\n2500 EA Den Haag',\n      multiline: true\n    }]\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling via `utrecht-data-list` class name.'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},ActionLink.parameters={...ActionLink.parameters,docs:{...ActionLink.parameters?.docs,source:{originalSource:"{\n  args: {\n    appearance: 'rows',\n    items: [{\n      key: 'Voornaam',\n      keyId: '993b9f5a-9cb8-454d-8408-9e0fa3125c28',\n      value: 'Mees',\n      actions: <Link href=\"./form-step-1#given-name\" id=\"f8b0b08f-8b59-48b8-bef1-c2b78d76564a\" aria-labelledby=\"f8b0b08f-8b59-48b8-bef1-c2b78d76564a 993b9f5a-9cb8-454d-8408-9e0fa3125c28\">\n            Edit\n          </Link>\n    }]\n  },\n  name: 'Action link'\n}",...ActionLink.parameters?.docs?.source}}},ActionButton.parameters={...ActionButton.parameters,docs:{...ActionButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    appearance: 'rows',\n    items: [{\n      key: 'Voornaam',\n      keyId: '720feb7a-8c3d-42ac-96c5-ee7a62c9d75d',\n      value: 'Mees',\n      actions: <LinkButton inline id=\"33bd9956-ca7a-4613-adf3-c42631981303\" aria-labelledby=\"33bd9956-ca7a-4613-adf3-c42631981303 720feb7a-8c3d-42ac-96c5-ee7a62c9d75d\">\n            Edit\n          </LinkButton>\n    }]\n  },\n  name: 'Action button'\n}",...ActionButton.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","ActionLink","ActionButton","DesignTokens"]},"./src/design-token-story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>designTokenStory});var _utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../documentation/components/ComponentTokensSection.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const designTokenStory=meta=>({args:{tokens:meta.parameters.tokens,definition:meta.parameters.tokensDefinition,component:meta.parameters.tokensPrefix},parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:""}},status:null},render:({tokens,definition,component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__.k,{tokens,definition,component})});try{designTokenStory.displayName="designTokenStory",designTokenStory.__docgenInfo={description:"",displayName:"designTokenStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/design-token-story.tsx#designTokenStory"]={docgenInfo:designTokenStory.__docgenInfo,name:"designTokenStory",path:"src/design-token-story.tsx#designTokenStory"})}catch(__react_docgen_typescript_loader_error){}}}]);