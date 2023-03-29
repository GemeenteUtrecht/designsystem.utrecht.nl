import{a as v,j as t}from"./jsx-runtime-670450c2.js";import{v as m,T as h,P as r}from"./index-a5237a52.js";import{t as y,d as k}from"./util-dae3d5f1.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-b4f9149a.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const _='<!-- @license CC0-1.0 -->\n\n# Form field\n\nGebruik het _form field_ component om een alle onderdelen van een formulierveld in te verzamelen: het label, de _form control_, eventueel een extra beschrijving of de status en eventueel een validatiemelding of foutmelding.\n\nDe volgende componenten zijn vaak onderdeel van een _form field_:\n\n- _form label_ component\n- _form field description_ component met extra beschrijving\n- _form field description_ component met een validatiemelding\n- een form control component zoals bijvoorbeeld:\n  - _textbox_ component\n  - _textarea_ component\n  - _checkbox_ component\n  - _radio button_ component\n  - _form select_ component\n  - etcetera\n- _form field description_ component met een foutmelding\n- _form field description_ component status van component\n\n## HTML\n\nGebruik een element `<div>` element voor formuliervelden met één _form control_. Een formulierveld moet meerdere `<p>` elementen kunnen bevatten, gebruik daarom geen `<p>` element voor de form field. Je moet geen _landmark role_ gebruiken voor een formulierveld (dus geen `<section>`) element.\n\nVoor formuliervelden met meerdere _form controls_ mag je een `<fieldset>` element gebruiken, bijvoorbeeld voor: jaar, maand en dag. Voor CSS is het handig om dan nog steeds een `<div>` om de fieldset heen te hebben: `<div><fieldset>...</fieldset></div>`.\n\n## Gebruikte termen\n\n- `form` komt van `<form>` in HTML en `role="form"` in WAI-ARIA.\n- `field` komt van `<fieldset>` in HTML.\n- `invalid` komt van `aria-invalid` in WAI-ARIA.\n- `radio` komt van `<input type="radio">` in HTML.\n- `checkbox` komt van `<input type="checkbox">` in HTML.\n- `label` komt van `<label>` in HTML en `aria-labelledby` in WAI-ARIA.\n- `description` komt van `aria-describedby` in WAI-ARIA.\n\n## Relevante WCAG regels\n\n- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de tekst van het label moet duidelijk zijn\n- [WCAG eis 3.3.9](https://www.w3.org/TR/WCAG22/#redundant-entry): gebruik niet een formulierveld voor informatie die de gebruiker eerder al heeft ingevuld.\n  - Vraag gebruikers niet twee keer achter elkaar identieke gegevens in te vullen, bijvoorbeeld om typfouten te herkennen en daarmee fouten te voorkomen. Bied liever een mogelijkheid aan om de gegevens te controleren als laatste stap.\n  - Vul bestaande gegevens in als standaardwaarde wanneer je de gegevens al hebt maar je graag zeker wilt weken of de oude gegevens nog juist zijn.\n',x={"form-field":{"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},invalid:{"border-inline-start-color":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},"border-inline-start-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},label:{"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},j={utrecht:x},T={title:"React Component/Form Field/Textbox",id:"react-form-field",component:m,argTypes:{disabled:{description:"Disabled",control:"boolean",table:{category:"Component",defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{category:"Component",defaultValue:{summary:!1}}},type:{name:"type",control:{type:"select"},options:["","checkbox","radio","text"],table:{category:"Component",defaultValue:{summary:!1}}}},tags:["autodocs"],parameters:{tokensPrefix:"utrecht-form-field",tokens:y,tokensDefinition:j,docs:{description:{component:_}}}},A=c=>{const{description:p,invalid:u,label:g,type:f,input:b}=c;return v(m,{invalid:u,type:f,children:[t(r,{className:"utrecht-form-field__label",children:g}),t(r,{className:"utrecht-form-field__input",children:b}),p]})},e=A.bind({});e.args={description:"Maximaal 140 karakters",disabled:!1,id:"3a43bbe9-635c-46c2-86cd-b0aa63855598",invalid:!0,invalidDescription:"Fout: het veld is nog leeg. Vul een bericht in.",label:"Tweet",name:"message",value:"",required:!0,type:"text",Input:h};const n=k(T);var o,i,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const {
    description,
    invalid,
    label,
    type,
    input
  } = args;
  return <FormField invalid={invalid} type={type}>
      <Paragraph className="utrecht-form-field__label">{label}</Paragraph>
      <Paragraph className="utrecht-form-field__input">{input}</Paragraph>
      {description}
    </FormField>;
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,l,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:"designTokenStory(meta)",...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const V=["FormFieldStory","DesignTokens"];export{n as DesignTokens,e as FormFieldStory,V as __namedExportsOrder,T as default};
//# sourceMappingURL=FormField.stories-f7588deb.js.map