import{j as e}from"./jsx-runtime-29545a09.js";import{t as k,d as x}from"./util-71bce6c8.js";import{c as _}from"./clsx.m-1229b3e0.js";import{r as w}from"./index-76fb7be0.js";import{C as v}from"./Code-c8087bd0.js";import{P as i}from"./Paragraph-e67a9fcb.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const o=w.forwardRef(({className:r,children:h,...y},b)=>e("div",{...y,ref:b,className:_("utrecht-form-field-error-message",r),children:h}));o.displayName="FormFieldErrorMessage";try{o.displayName="FormFieldErrorMessage",o.__docgenInfo={description:"",displayName:"FormFieldErrorMessage",props:{}}}catch{}const C='<!-- @license CC0-1.0 -->\n\n# Form field error message\n\nGebruik dit component voor foutmeldingen bij formuliervelden die geen valide invoer hebben.\n\nDit component is meestal een onderdeel van het _form field_ component.\n\n## Gebruikte termen\n\n- `form` komt van `<form>` in HTML en `role="form"` in WAI-ARIA.\n- `field` komt van `<fieldset>` in HTML.\n- `error-message` komt van `aria-errormessage`.\n\n## HTML\n\nGebruik een `id` attribuut op dit element, zodat je met `aria-describedby` op de _form control_ met `aria-invalid="true"` een koppeling kunt maken. Support voor `aria-errormessage` is nog onvoldoende, dus gebruik voorlopig nog `aria-describedby`.\n\nGebruik in HTML in plaats van `aria-live="polite"` het attribuut `role="status"`.\n\nGebruik in HTML in plaats van `aria-live="assertive"` het attribuut `role="alert"`.\n\n## Relevante WCAG eisen\n\n- [WCAG eis 1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color): gebruik niet alleen kleur om duidelijk te maken dat het een foutmelding is.\n- [WCAG eis 3.3.1](https://www.w3.org/TR/WCAG21/#error-identification). Gebruik `id` attribuut op de _form field description_ en koppel de _form control_ met `aria-describedby` aan deze `id`. Zie ook: [WCAG Technique: Using `aria-invalid` to Indicate An Error Field](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21)\n- [WCAG eis 3.3.2](https://www.w3.org/TR/WCAG21/#labels-or-instructions). Zie ook: [WCAG Technique ARIA1: Using the `aria-describedby` property to provide a descriptive label for user interface controls](https://www.w3.org/WAI/WCAG21/)\n- [WCAG eis 3.3.2](https://www.w3.org/TR/WCAG21/#error-suggestion)\n',A={"form-field-error-message":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}},type:"fontFamilies"},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"fontSizes"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontSizes"},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1},type:"sizing"},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1},type:"sizing"},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}},G={utrecht:A},T={title:"React Component/Form field error message",id:"react-form-field-error-message",component:o,args:{children:""},parameters:{tokensPrefix:"utrecht-form-field-error-message",tokens:k,tokensDefinition:G,docs:{description:{component:C}}},decorators:[r=>e(i,{children:r()})]},n={args:{id:"aee06f60-3496-44de-a177-72dea88b5362",children:e(i,{children:"This is a required field and must not be left empty."})}},s={args:{id:"8a2e3430-d6b1-4575-8353-4c624c87aba9",children:e(i,{children:e(v,{children:"SyntaxError: JSON.parse: unexpected end of data at line 1 column 1 of the JSON data"})})},name:"Code error",parameters:{docs:{description:{story:"Gebruik een _paragraph_ en een _code_ component (en geen _code block_), zodat de tekst kan wrappen over meedere regels en de line-height voldoende is."}}}},t=x(T);var a,d,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    id: 'aee06f60-3496-44de-a177-72dea88b5362',
    children: <Paragraph>This is a required field and must not be left empty.</Paragraph>
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: '8a2e3430-d6b1-4575-8353-4c624c87aba9',
    children: <Paragraph>
        <Code>SyntaxError: JSON.parse: unexpected end of data at line 1 column 1 of the JSON data</Code>
      </Paragraph>
  },
  name: 'Code error',
  parameters: {
    docs: {
      description: {
        story: 'Gebruik een _paragraph_ en een _code_ component (en geen _code block_), zodat de tekst kan wrappen over meedere regels en de line-height voldoende is.'
      }
    }
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,u,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:"designTokenStory(meta)",...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const I=["Default","CodeError","DesignTokens"];export{s as CodeError,n as Default,t as DesignTokens,I as __namedExportsOrder,T as default};
//# sourceMappingURL=FormFieldErrorMessage.stories-bef84244.js.map