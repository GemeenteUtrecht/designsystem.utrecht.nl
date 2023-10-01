import{j as t,a as p}from"./jsx-runtime-29545a09.js";import F from"./FormField.stories-9814124f.js";import{C as _}from"./Checkbox-5bf6f1fb.js";import{c as D}from"./clsx.m-1229b3e0.js";import{r as V}from"./index-76fb7be0.js";import{F as u}from"./FormField-29196f12.js";import{P as q}from"./Paragraph-e67a9fcb.js";import{F as N}from"./FormLabel-6d569a5a.js";import"./util-76ff89f6.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./Textbox-c473e1cb.js";const i=V.forwardRef(({invalid:o,valid:c,warning:r,className:l,children:e,...d},a)=>t("div",{...d,ref:a,className:D("utrecht-form-field-description",o&&"utrecht-form-field-description--invalid",c&&"utrecht-form-field-description--valid",r&&"utrecht-form-field-description--warning",l),children:e}));i.displayName="FormFieldDescription";try{i.displayName="FormFieldDescription",i.__docgenInfo={description:"",displayName:"FormFieldDescription",props:{invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}}}}}catch{}const S={...F.argTypes,checked:{description:"Checked",control:"boolean",table:{category:"Story",defaultValue:{summary:!1}}},required:{description:"Required",control:"boolean",table:{category:"Story",defaultValue:{summary:!1}}},id:{description:"ID",type:{name:"text",required:!0},table:{category:"Story",defaultValue:{summary:""}}},name:{description:"Name",control:"text",table:{category:"Story",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"Story",defaultValue:{summary:""}}},label:{name:"label",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},invalidDescription:{name:"invalidDescription",description:"Description for invalid input",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},description:{description:"Description",type:{name:"text",required:!1},table:{category:"Story",defaultValue:{summary:""}}}},L={title:"React Component/Form Field/Checkbox",id:"react-form-field--checkbox",component:u,argTypes:S,args:{checked:!1,description:"U kunt ons echt vertrouwen!",disabled:!1,id:"43f471c8-c6f1-4867-bc53-9602c06b8a32",invalid:!0,invalidDescription:"U moet akkoord gaan met de algemene voorwaarden, anders kunt u niet verder.",label:"Ik ga akkoord met de algemene voorwaarden",name:"consent",value:"true",required:!0,type:"checkbox"},render:o=>{const{checked:c,description:r,disabled:l,id:e,invalid:d,invalidDescription:a,label:h,name:v,required:g,value:k,type:x}=o,s=r?`${e}-description`:null,m=a?`${e}-invalid-description`:null;return p(u,{invalid:d,type:x,children:[t(q,{className:"utrecht-form-field__label utrecht-form-field__label--checkbox",children:p(N,{disabled:l,type:"checkbox",htmlFor:e,children:[t(_,{"aria-describedby":[s,m].filter(Boolean).join(" ")||null,className:"utrecht-form-field__input",defaultChecked:c,disabled:l,id:e,invalid:d,required:g,name:v,value:k}),h]})}),r?t(i,{id:s,className:"utrecht-form-field__description",children:r}):void 0,a?t(i,{id:m,invalid:!0,className:"utrecht-form-field__description",children:a}):void 0]})}},n={};var f,y,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const O=["FormFieldCheckbox"];export{n as FormFieldCheckbox,O as __namedExportsOrder,L as default};
//# sourceMappingURL=FormFieldCheckbox.stories-a651c558.js.map
