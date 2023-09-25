import{a,j as e,F as m}from"./jsx-runtime-29545a09.js";import"./chunk-S4VUQJ4A-e9f28a28.js";import{D as g,P as v,A as p,b as h,d as c}from"./index-f5af6af3.js";import{e as u,f as k,m as b,D as _}from"./index-1325f033.js";import{t as y,d as w}from"./util-cf005e6f.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-a7417ded.js";import"../sb-preview/runtime.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./defineProperty-75c483e5.js";import"./clsx.m-1229b3e0.js";import"./index-8d47fad6.js";const f=`<!-- @license CC0-1.0 -->

# Data list

De _data list_ component gebruik je onder andere voor:

- een overzicht van gegevens uit een formulier, in een controle-stap voor het verzenden
- een overzicht vooringevulde gegevens, aan het begin van een formulier
- een overzicht van bekende gegevens, bijvoorbeeld in een profiel-pagina

Om verschillende soorten data optimaal weer te geven, zijn er speciale componenten gemaakt:

- URL Value: gebruik deze voor internetadressen en e-mailadressen
- IBAN: gebruik deze voor dit type bankrekeningnummer

Er zijn _BEM modifier class names_ beschikbaar van \`utrecht-data-list__value\`, voor datatypes:

- \`multiline\`: voor gegevens die worden aangeleverd als \`string\`, maar waarvan de tekst verdeeld is over meerdere tekstregels zonder HTML \`<br/>\` maar met een _newline character_. Bijvoorbeeld ingevoerde tekst uit een \`textarea\`, of een adres.
- \`number\`
- \`telephone\`

## Anatomie

De _data list_ is opgebouwd uit de volgende onderdelen en BEM class names:

- de _data list_
  - _data list item_, één of meerdere. Naam is gebaseerd op "item" uit \`role="associationlistitemvalue"\` in de [WAI-ARIA 1.3 Draft](https://w3c.github.io/aria/#associationlistitemvalue)
    - de _item key_. Naam is gebaseerd op het "key" in uit \`role="associationlistitemkey"\` in de [WAI-ARIA 1.3 Draft](https://w3c.github.io/aria/#associationlistitemkey).
    - de _item value_. Naam is gebaseerd op \`value\` van het \`input\` HTML-element en op \`role="associationlistitemvalue"\` in de [WAI-ARIA 1.3 Draft](https://w3c.github.io/aria/#associationlistitemvalue).
    - de _item actions_ (deze zijn optioneel)

BEM class names:

- \`utrecht-data-list\`. Gebruik ook \`utrecht-data-list--html-dl\` voor een reset van standaard styling van het \`<dl>\` element.
- \`utrecht-data-list__item\` voor de \`<div>\`
- \`utrecht-data-list__item-key\` voor de \`<dt>\`
- \`utrecht-data-list__item-value\` voor de \`<dd>\`
- \`utrecht-data-list__actions\` met een eigen \`<dd>\`

## Vertaalde gegevens

Kies per datatype of de _value_ in een andere taal vertaald moet zijn bij gebruikers van automatische vertaalsoftware zoals Google Translate. Van sommige gegevens moet je vertaling voorkomen, bijvoorbeeld bij namen van personen, straatnamen, codes zoals bankrekeningnummers, internetadressen en e-mailadressen. Gebruik het HTML-attribuut \`translate="no"\` voor deze gegevens.

Bijvoorbeeld:

- Gebruik \`translate="no"\` voor Voorletters. Voorkom dat "KVK" in in het Nederlands wordt vertaald naar "Chamber of Commerce" in het Engels.
- Gebruik \`translate="no"\` voor Voornaam. Voorkom dat "Mees" in het Nederlands wordt vertaald naar "Tit" in het Engels.
- Gebruik \`translate="no"\` voor Tussenvoegsel. Voorkom dat "Van" in het Nederlands wordt vertaald naar "By" in het Engels.
- Gebruik \`translate="no"\` voor Achternaam. Voorkom dat "Post" in het Nederlands wordt vertaald naar "Mail" in het Engels.
- Gebruik \`translate="no"\` voor Adres. Voorkom dat "Donau 1" in het Nederlands wordt vertaald naar "Danube 1" in het Engels.
- Gebruik \`translate="no"\` voor Postcode. Voorkom dat "1234 CD" in het Nederlands wordt vertaald naar "1234 discos compactos" in het Spaans.

Er zijn enkele plaatsnamen die in een andere taal een naam hebben, er staan veel voorbeelden op Wikipedia: [Lijst van anderstalige namen voor geografische entiteiten in het Nederlandse taalgebied](https://nl.wikipedia.org/wiki/Lijst_van_anderstalige_namen_voor_geografische_entiteiten_in_het_Nederlandse_taalgebied). Toch is het in de meeste veiliger om de plaatsnaam niet automatisch te vertalen.

## HTML

Gebruik in de HTML-elementen \`dl\`, \`dt\` en \`dd\` om ([WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships)) om duidelijk onderscheid te maken tussen _key_ en de _value_. Gebruik één \`div\` element om \`dt\` en \`dd\` te groeperen om met makkelijker met CSS de layout te maken.

Je mag in theorie ook een \`table\` element met \`th\` voor de _key_ en \`td\` voor de _value_ gebruiken, maar alleen als je ook een tabel-layout gebruikt. Om de _data list_ leesbaar te maken op kleine schermen is het handiger om geen tabel te gebruiken.

## Hoe het niet moet

### Geen \`dl\` of \`table\` gebruiken

Gebruik niet alleen \`div\`, \`span\` en \`p\` HTML-element omdat dit niet voldoende duidelijk is (WCAG eis 1.3.1).

## Button of link tekst heeft geen context

Niet:

\`\`\`html
<dl>
  <div>
    <dt>Naam</dt>
    <dd>Jos de Vos</dd>
    <dd><a href="./step-1">Wijzig</a></dd>
  </div>
  <div>
    <dt>Woonplaats</dt>
    <dd>Amsterdam</dd>
    <dd><a href="./step-2">Wijzig</a></dd>
  </div>
</dl>
\`\`\`

Wel:

\`\`\`html
<dl>
  <div>
    <dt>Naam</dt>
    <dd>Mees de Vos</dd>
    <dd><a href="./edit" title="Wijzig naam">Wijzig</a></dd>
  </div>
  <div>
    <dt>Woonplaats</dt>
    <dd>Amsterdam</dd>
    <dd><a href="./edit" title="Wijzig woonplaats">Wijzig</a></dd>
  </div>
</dl>
\`\`\`

## Links

- [Summary list van GOV.UK Design System](https://design-system.service.gov.uk/components/summary-list/)
- [MDN: \`<dl>\`: The Description List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)

### Relevante WCAG-eisen

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships) voor gebruik van semantische HTML
- [WCAG eis 2.4.4](https://www.w3.org/TR/WCAG21/#link-purpose-in-context) en [WCAG eis 2.4.9](https://www.w3.org/TR/WCAG21/#link-purpose-link-only) voor duidelijke namen van acties bij een data list item
- [WCAG eis 2.5.3](https://www.w3.org/TR/WCAG21/#label-in-name): als de zichtbare tekst van een action "Wijzig" is, dan moet het volledige label ook "Wijzig" gebruiken, dus "Wijzig voornaam" en niet "Bewerk voornaam".
- [WCAG eis 3.2.4](https://www.w3.org/TR/WCAG21/#consistent-identification): en _data list_ voor controle van formulier-invoer moet consistent zijn bij de tekst van het formulier-label en de tekst van de _data list item key_.
- [WCAG eis 3.3.4](https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data) en [WCAG eis 3.3.6](https://www.w3.org/TR/WCAG21/#error-prevention-all): de data list gebruik je voor formulieren zodat gebruikers de invoer kunnen controleren
`,j={"data-list":{"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"item-key":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},"item-value":{"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},rows:{item:{"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},"item-value":{"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}}},A={utrecht:j},W={title:"React Component/Data List",id:"react-data-list",component:u,args:{appearance:"rows",children:a(k,{children:[e(b,{children:"Gereserveerde zitplaats"}),e(_,{children:"42"})]})},parameters:{tokensPrefix:"utrecht-data-list",tokens:y,tokensDefinition:A,docs:{page:()=>a(m,{children:[e(g,{children:f}),e(v,{}),e(p,{story:h}),e(c,{})]})}}},n={},t=w(W);var i,s,r;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(r=(s=n.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var o,d,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:"designTokenStory(meta)",...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const O=["Default","DesignTokens"];export{n as Default,t as DesignTokens,O as __namedExportsOrder,W as default};
//# sourceMappingURL=DataList.stories-796b3fc0.js.map
