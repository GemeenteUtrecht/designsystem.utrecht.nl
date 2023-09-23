import{a as p,j as e}from"./jsx-runtime-29545a09.js";import{F as b,d as V,e as j,H as q,b as o,P as B,a as N,R as $}from"./index.esm-723827c7.js";import O from"./FormField.stories-7440a2fb.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./defineProperty-75c483e5.js";import"./clsx.m-1229b3e0.js";import"./chunk-S4VUQJ4A-bfe39cfc.js";import"./iframe-7db13b6e.js";import"../sb-preview/runtime.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./index-1580e9fd.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./index-d6d1e8d0.js";import"./util-7a3e2898.js";import"./index-8d47fad6.js";const H={...O.argTypes,headingLevel:{description:"Heading level for the label. Leave empty for a regular label.",control:{type:"select"},options:["","1","2","3","4","5","6"],table:{defaultValue:{summary:!1},category:"Story"}},name:{description:"Name attribute of the <input> elements",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},groupLabel:{description:"Label of the group",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},groupInvalidDescription:{description:"Description for an invalid group",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},groupId:{description:"ID of the group",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},groupDescription:{description:"Description of the group",type:{name:"text",required:!1},table:{category:"Story",defaultValue:{summary:""}}}},te={title:"React Component/Form Field/Radio group",id:"react-form-field--radio-group",component:b,argTypes:H,args:{name:"828aa90e-0e99-4db9-a5e5-d39f689cf7b3",groupLabel:"Choose your option",groupId:"df861ef1-844a-42df-8365-b54f59474fb8",options:[{id:"800b7f3f-5048-4dcc-8f23-d04fa6ca4199",value:"1",label:"Option 1"},{id:"fbc03e63-42c2-46e3-9acc-183fa64c6dcd",value:"2",label:"Option 2"},{id:"62824075-bcc1-4563-a97b-78d1eae3544f",value:"3",label:"Option 3"}]},render:I=>{const{groupDescription:i,groupId:a,groupInvalidDescription:d,groupLabel:n,headingLevel:c,invalid:_,options:D,name:x}=I,m=i?`${a}-description`:void 0,u=d?`${a}-invalid-description`:void 0,f=[m,u].filter(Boolean),L=f.length?f.join(" "):void 0;return p(V,{role:"radiogroup",id:a,"aria-describedby":L,invalid:_,children:[e(j,{children:c?e(q,{level:c,children:n}):n}),i?e(o,{id:m,children:i}):void 0,d?e(o,{status:"invalid",id:u,children:d}):void 0,D.map(({id:r,label:S,description:l,invalidDescription:s,value:R})=>{const g=l?`${r}-description`:void 0,y=s?`${r}-invalid-description`:void 0;return p(b,{type:"radio",children:[e(B,{className:"utrecht-form-field__label utrecht-form-field__label--radio",children:p(N,{type:"radio",htmlFor:r,children:[e($,{className:"utrecht-form-field__input",id:r,value:R,name:x,"aria-describedby":[g,y].filter(Boolean).join(" ")||void 0}),S]})}),l?e(o,{id:g,className:"utrecht-form-field__description",children:l}):void 0,s?e(o,{id:y,status:"invalid",className:"utrecht-form-field__description",children:s}):void 0]},r)})]})}},t={};var h,v,F;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(F=(v=t.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const ie=["FormFieldRadioGroup"];export{t as FormFieldRadioGroup,ie as __namedExportsOrder,te as default};
//# sourceMappingURL=FormFieldRadioGroup.stories-f790f3cc.js.map
