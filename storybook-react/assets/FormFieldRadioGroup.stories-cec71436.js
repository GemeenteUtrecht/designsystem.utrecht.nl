import{a as n,j as e}from"./jsx-runtime-29545a09.js";import{F as b,d as V,e as j,H as q,b as o,P as B,a as N,R as $}from"./index.esm-87a50324.js";import O from"./FormField.stories-bd841542.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./objectWithoutProperties-8df67654.js";import"./typeof-7fd5df1e.js";import"./clsx.m-1229b3e0.js";import"./extends-98964cd2.js";import"./util-c59842d4.js";import"./index-8d47fad6.js";import"./Textbox-c473e1cb.js";import"./FormField-29196f12.js";import"./Paragraph-e67a9fcb.js";const H={...O.argTypes,headingLevel:{description:"Heading level for the label. Leave empty for a regular label.",control:{type:"select"},options:["","1","2","3","4","5","6"],table:{defaultValue:{summary:!1},category:"Story"}},name:{description:"Name attribute of the <input> elements",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},groupLabel:{description:"Label of the group",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},groupInvalidDescription:{description:"Description for an invalid group",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},groupId:{description:"ID of the group",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},groupDescription:{description:"Description of the group",type:{name:"text",required:!1},table:{category:"Story",defaultValue:{summary:""}}}},W={title:"React Component/Form Field/Radio group",id:"react-form-field--radio-group",component:b,argTypes:H,args:{name:"828aa90e-0e99-4db9-a5e5-d39f689cf7b3",groupLabel:"Choose your option",groupId:"df861ef1-844a-42df-8365-b54f59474fb8",options:[{id:"800b7f3f-5048-4dcc-8f23-d04fa6ca4199",value:"1",label:"Option 1"},{id:"fbc03e63-42c2-46e3-9acc-183fa64c6dcd",value:"2",label:"Option 2"},{id:"62824075-bcc1-4563-a97b-78d1eae3544f",value:"3",label:"Option 3"}]},render:I=>{const{groupDescription:t,groupId:i,groupInvalidDescription:d,groupLabel:p,headingLevel:c,invalid:_,options:D,name:x}=I,u=t?`${i}-description`:void 0,m=d?`${i}-invalid-description`:void 0,f=[u,m].filter(Boolean),L=f.length?f.join(" "):void 0;return n(V,{role:"radiogroup",id:i,"aria-describedby":L,invalid:_,children:[e(j,{children:c?e(q,{level:c,children:p}):p}),t?e(o,{id:u,children:t}):void 0,d?e(o,{status:"invalid",id:m,children:d}):void 0,D.map(({id:r,label:S,description:l,invalidDescription:s,value:R})=>{const g=l?`${r}-description`:void 0,y=s?`${r}-invalid-description`:void 0;return n(b,{type:"radio",children:[e(B,{className:"utrecht-form-field__label utrecht-form-field__label--radio",children:n(N,{type:"radio",htmlFor:r,children:[e($,{className:"utrecht-form-field__input",id:r,value:R,name:x,"aria-describedby":[g,y].filter(Boolean).join(" ")||void 0}),S]})}),l?e(o,{id:g,className:"utrecht-form-field__description",children:l}):void 0,s?e(o,{id:y,status:"invalid",className:"utrecht-form-field__description",children:s}):void 0]},r)})]})}},a={};var h,v,F;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(F=(v=a.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const X=["FormFieldRadioGroup"];export{a as FormFieldRadioGroup,X as __namedExportsOrder,W as default};
//# sourceMappingURL=FormFieldRadioGroup.stories-cec71436.js.map
