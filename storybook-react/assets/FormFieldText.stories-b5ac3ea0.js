import{a as _,j as e}from"./jsx-runtime-29545a09.js";import{F as d,T as S,P as c,a as I,b as m,c as k}from"./index.esm-3e593079.js";import N from"./FormField.stories-9814124f.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./objectWithoutProperties-8df67654.js";import"./typeof-7fd5df1e.js";import"./clsx.m-1229b3e0.js";import"./extends-98964cd2.js";import"./util-76ff89f6.js";import"./index-8d47fad6.js";import"./Textbox-c473e1cb.js";import"./FormField-29196f12.js";import"./Paragraph-e67a9fcb.js";const j={...N.argTypes,required:{description:"Required",control:"boolean",table:{category:"Story",defaultValue:{summary:!1}}},id:{description:"ID",type:{name:"text",required:!0},table:{category:"Story",defaultValue:{summary:""}}},name:{description:"Name",control:"text",table:{category:"Story",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"Story",defaultValue:{summary:""}}},label:{name:"label",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},invalidDescription:{name:"invalidDescription",description:"Description for invalid input",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},description:{description:"Description",type:{name:"text",required:!1},table:{category:"Story",defaultValue:{summary:""}}}},J={title:"React Component/Form Field/Textbox",id:"react-form-field",component:d,argTypes:j,args:{description:"Maximaal 140 karakters",disabled:!1,id:"3a43bbe9-635c-46c2-86cd-b0aa63855598",invalid:!0,invalidDescription:"Fout: het veld is nog leeg. Vul een bericht in.",label:"Tweet",name:"message",value:"",required:!0,type:"text",Input:S},render:g=>{const{description:i,disabled:l,id:r,Input:v,invalid:s,invalidDescription:o,label:F,name:h,required:T,value:D,type:n}=g,V=i?`${r}-description`:null,q=o?`${r}-invalid-description`:null;return _(d,{invalid:s,type:n,children:[e(c,{className:"utrecht-form-field__label",children:e(I,{disabled:l,htmlFor:r,children:F})}),e(c,{className:"utrecht-form-field__input",children:e(v,{id:r,disabled:l,invalid:s,name:h,type:n,required:T,value:D})}),i?e(m,{id:V,className:"utrecht-form-field__description",children:i}):void 0,o?e(m,{id:q,invalid:!0,className:"utrecht-form-field__description",children:o}):void 0]})}},a={},t={args:{description:"Maximaal 140 karakters",disabled:!1,id:"3a43bbe9-635c-46c2-86cd-b0aa63855598",invalid:!0,invalidDescription:"Fout: het veld is nog leeg. Vul een bericht in.",label:"Tweet",name:"message",value:"",required:!0,type:"text",Input:k}};var u,p,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,f,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    description: 'Maximaal 140 karakters',
    disabled: false,
    id: '3a43bbe9-635c-46c2-86cd-b0aa63855598',
    invalid: true,
    invalidDescription: 'Fout: het veld is nog leeg. Vul een bericht in.',
    label: 'Tweet',
    name: 'message',
    value: '',
    required: true,
    type: 'text',
    Input: Textarea
  }
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const K=["FormFieldTextbox","FormFieldTextarea"];export{t as FormFieldTextarea,a as FormFieldTextbox,K as __namedExportsOrder,J as default};
//# sourceMappingURL=FormFieldText.stories-b5ac3ea0.js.map
