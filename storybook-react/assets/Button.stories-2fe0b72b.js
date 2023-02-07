import{j as cr}from"./jsx-runtime-670450c2.js";import{c as ar}from"./index-18349e3e.js";import{t as ir,d as ur}from"./util-36ba316b.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";const lr=`<!-- @license CC0-1.0 -->

# Button

## Tekstbutton

Tekstlinks zijn standaard donkerblauw (#2A5587) en onderstreept. In sommige gevallen zijn tekstlinks zwart of wit. Dit geldt bij teksten op een gekleurde achtergrond, waar blauw niet voldoende contrast biedt. Kijk voor meer informatie over de contrastrichtlijnen bij kleuren (link naar kleuren).

### Voorbeeld

U kunt tegelijk een paspoort en een ID-kaart hebben. Met een paspoort kunt u naar alle landen reizen. Een ID-kaart is goedkoper, maar u kunt hiermee niet naar alle landen reizen.

## Button met pijl

Links met een pijl als voorloopteken worden gebruikt aan het einde van een tekst. Ze verwijzen naar gerelateerde informatie over het onderwerp wat er in de voorafgaande tekst is besproken. De links zijn donkerblauw (#2A5587), bold en hebben een pijl (>) als voorloopteken. Dit type link wordt ook gebruikt in de linklijst en de subnavigatie.

## Terminologie

- **button**: van het \`<button>\` HTML element, \`role="button"\` in ARIA.

## States

- \`hover\`
- \`focus\`
- \`disabled\`

## Class names

- \`.utrecht-button\`
- \`.utrecht-button--focus\`
- \`.utrecht-button--hover\`
- \`.utrecht-button--disabled\`

## Relevante WCAG regels

- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): je kan de button activeren met \`Enter\` of \`Space\`, en het is mogelijk met \`Tab\` de button te focussen. \`Space\` gebruiken heeft dan niet het effect dat de pagina scrollt.
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de button moet duidelijk zijn
- [WCAG eis 2.5.2](https://www.w3.org/TR/WCAG21/#pointer-cancellation):
  - gebruik niet de \`mousedown\` event om de button te activeren, gebruik liever de \`click\` event
  - \`mousedown\` mag alleen gebruikt worden als \`mouseup\` het effect weer ongedaan maakt, bijvoorbeeld een "_fast foward_" button om audio of video door te spoelen.
- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): de button moet groot genoeg zijn om aan te klikken, en kleine buttons moeten niet te dicht op een andere button staan.
`,dr={button:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},"border-radius":{css:{syntax:"<length>",inherits:!0}},"border-width":{css:{syntax:"<length>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}},"font-family":{css:{syntax:"*",inherits:!0}},"font-size":{css:{syntax:"<length>",inherits:!0}},"font-weight":{css:{syntax:"<number>",inherits:!0}},"inline-size":{css:{syntax:"<length>",inherits:!0}},"letter-spacing":{css:{syntax:"<length>",inherits:!0}},"line-height":{css:{syntax:"<length>",inherits:!0}},"margin-block-start":{css:{syntax:"<length>",inherits:!0}},"margin-block-end":{css:{syntax:"<length>",inherits:!0}},"margin-inline-start":{css:{syntax:"<length>",inherits:!0}},"margin-inline-end":{css:{syntax:"<length>",inherits:!0}},"min-block-size":{css:{syntax:"<length>",inherits:!0}},"min-inline-size":{css:{syntax:"<length>",inherits:!0}},"padding-block-start":{css:{syntax:"<length>",inherits:!0}},"padding-block-end":{css:{syntax:"<length>",inherits:!0}},"padding-inline-start":{css:{syntax:"<length>",inherits:!0}},"padding-inline-end":{css:{syntax:"<length>",inherits:!0}},"text-transform":{css:{syntax:"inherit | uppercase",inherits:!0}},active:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}},icon:{gap:{css:{syntax:"<length>",inherits:!0}},size:{css:{syntax:"<length>",inherits:!0}}},disabled:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}},focus:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}},"transform-scale":{css:{syntax:"<number>",inherits:!0}}},hover:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}},"primary-action":{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},"border-width":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}},"font-weight":{css:{syntax:"<number>",inherits:!0}},active:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}},disabled:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}},hover:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}},focus:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}}},"secondary-action":{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},"border-width":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}},"font-weight":{css:{syntax:"<number>",inherits:!0}},active:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}},disabled:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}},hover:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}},focus:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}}},subtle:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},"border-width":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}},"font-weight":{css:{syntax:"<number>",inherits:!0}},active:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}},disabled:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}},hover:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}},focus:{"background-color":{css:{syntax:"<color>",inherits:!0}},"border-color":{css:{syntax:"<color>",inherits:!0}},color:{css:{syntax:"<color>",inherits:!0}}}}}},pr={utrecht:dr},mr={title:"React Component/Button",id:"react-button",component:ar,tags:["autodocs"],parameters:{tokensPrefix:"utrecht-button",tokens:ir,tokensDefinition:pr,docs:{description:{component:lr}}},argTypes:{appearance:{type:"select",options:[void 0,"primary-action-button","secondary-action-button","subtle-button"]},type:{type:"select",options:[void 0,"button","submit","reset"]}}},r=nr=>cr(ar,{...nr}),g=r.bind({});g.args={children:"Read more..."};const x=r.bind({});x.args={children:"Read more...",disabled:!0};const S=r.bind({});S.args={children:"Read more...",busy:!0};const e=r.bind({});e.args={children:"Read more..."};e.parameters={pseudo:{hover:!0}};const t=r.bind({});t.args={children:"Read more..."};t.parameters={pseudo:{focus:!0}};const s=r.bind({});s.args={children:"Read more..."};s.parameters={pseudo:{active:!0}};const o=r.bind({});o.args={children:"Read more..."};o.parameters={pseudo:{focusVisible:!0}};const k=r.bind({});k.args={children:"Read more...",appearance:"primary-action-button"};const f=r.bind({});f.args={children:"Read more...",appearance:"primary-action-button",disabled:!0};const v=r.bind({});v.args={children:"Read more...",appearance:"primary-action-button",busy:!0};const a=r.bind({});a.args={children:"Read more...",appearance:"primary-action-button"};a.parameters={pseudo:{hover:!0}};const n=r.bind({});n.args={children:"Read more...",appearance:"primary-action-button"};n.parameters={pseudo:{focus:!0}};const c=r.bind({});c.args={children:"Read more...",appearance:"primary-action-button"};c.parameters={pseudo:{active:!0}};const i=r.bind({});i.args={children:"Read more...",appearance:"primary-action-button"};i.parameters={pseudo:{focusVisible:!0}};const A=r.bind({});A.args={children:"Read more...",appearance:"secondary-action-button"};const w=r.bind({});w.args={children:"Read more...",appearance:"secondary-action-button",disabled:!0};const B=r.bind({});B.args={children:"Read more...",appearance:"secondary-action-button",busy:!0};const u=r.bind({});u.args={children:"Read more...",appearance:"secondary-action-button"};u.parameters={pseudo:{hover:!0}};const l=r.bind({});l.args={children:"Read more...",appearance:"secondary-action-button"};l.parameters={pseudo:{focus:!0}};const d=r.bind({});d.args={children:"Read more...",appearance:"secondary-action-button"};d.parameters={pseudo:{active:!0}};const p=r.bind({});p.args={children:"Read more...",appearance:"secondary-action-button"};p.parameters={pseudo:{focusVisible:!0}};const D=r.bind({});D.args={children:"Read more...",appearance:"subtle-button"};const R=r.bind({});R.args={children:"Read more...",appearance:"subtle-button",disabled:!0};const j=r.bind({});j.args={children:"Read more...",appearance:"subtle-button",busy:!0};const m=r.bind({});m.args={children:"Read more...",appearance:"subtle-button"};m.parameters={pseudo:{hover:!0}};const y=r.bind({});y.args={children:"Read more...",appearance:"subtle-button"};y.parameters={pseudo:{focus:!0}};const b=r.bind({});b.args={children:"Read more...",appearance:"subtle-button"};b.parameters={pseudo:{active:!0}};const h=r.bind({});h.args={children:"Read more...",appearance:"subtle-button"};h.parameters={pseudo:{focusVisible:!0}};const F=ur(mr);var z;g.parameters={...g.parameters,storySource:{source:"args => <Button {...args} />",...(z=g.parameters)==null?void 0:z.storySource}};var P;x.parameters={...x.parameters,storySource:{source:"args => <Button {...args} />",...(P=x.parameters)==null?void 0:P.storySource}};var T;S.parameters={...S.parameters,storySource:{source:"args => <Button {...args} />",...(T=S.parameters)==null?void 0:T.storySource}};var C;e.parameters={...e.parameters,storySource:{source:"args => <Button {...args} />",...(C=e.parameters)==null?void 0:C.storySource}};var V;t.parameters={...t.parameters,storySource:{source:"args => <Button {...args} />",...(V=t.parameters)==null?void 0:V.storySource}};var G;s.parameters={...s.parameters,storySource:{source:"args => <Button {...args} />",...(G=s.parameters)==null?void 0:G.storySource}};var H;o.parameters={...o.parameters,storySource:{source:"args => <Button {...args} />",...(H=o.parameters)==null?void 0:H.storySource}};var W;k.parameters={...k.parameters,storySource:{source:"args => <Button {...args} />",...(W=k.parameters)==null?void 0:W.storySource}};var I;f.parameters={...f.parameters,storySource:{source:"args => <Button {...args} />",...(I=f.parameters)==null?void 0:I.storySource}};var _;v.parameters={...v.parameters,storySource:{source:"args => <Button {...args} />",...(_=v.parameters)==null?void 0:_.storySource}};var E;a.parameters={...a.parameters,storySource:{source:"args => <Button {...args} />",...(E=a.parameters)==null?void 0:E.storySource}};var L;n.parameters={...n.parameters,storySource:{source:"args => <Button {...args} />",...(L=n.parameters)==null?void 0:L.storySource}};var M;c.parameters={...c.parameters,storySource:{source:"args => <Button {...args} />",...(M=c.parameters)==null?void 0:M.storySource}};var K;i.parameters={...i.parameters,storySource:{source:"args => <Button {...args} />",...(K=i.parameters)==null?void 0:K.storySource}};var O;A.parameters={...A.parameters,storySource:{source:"args => <Button {...args} />",...(O=A.parameters)==null?void 0:O.storySource}};var U;w.parameters={...w.parameters,storySource:{source:"args => <Button {...args} />",...(U=w.parameters)==null?void 0:U.storySource}};var Z;B.parameters={...B.parameters,storySource:{source:"args => <Button {...args} />",...(Z=B.parameters)==null?void 0:Z.storySource}};var q;u.parameters={...u.parameters,storySource:{source:"args => <Button {...args} />",...(q=u.parameters)==null?void 0:q.storySource}};var J;l.parameters={...l.parameters,storySource:{source:"args => <Button {...args} />",...(J=l.parameters)==null?void 0:J.storySource}};var N;d.parameters={...d.parameters,storySource:{source:"args => <Button {...args} />",...(N=d.parameters)==null?void 0:N.storySource}};var Q;p.parameters={...p.parameters,storySource:{source:"args => <Button {...args} />",...(Q=p.parameters)==null?void 0:Q.storySource}};var X;D.parameters={...D.parameters,storySource:{source:"args => <Button {...args} />",...(X=D.parameters)==null?void 0:X.storySource}};var Y;R.parameters={...R.parameters,storySource:{source:"args => <Button {...args} />",...(Y=R.parameters)==null?void 0:Y.storySource}};var $;j.parameters={...j.parameters,storySource:{source:"args => <Button {...args} />",...($=j.parameters)==null?void 0:$.storySource}};var rr;m.parameters={...m.parameters,storySource:{source:"args => <Button {...args} />",...(rr=m.parameters)==null?void 0:rr.storySource}};var er;y.parameters={...y.parameters,storySource:{source:"args => <Button {...args} />",...(er=y.parameters)==null?void 0:er.storySource}};var tr;b.parameters={...b.parameters,storySource:{source:"args => <Button {...args} />",...(tr=b.parameters)==null?void 0:tr.storySource}};var sr;h.parameters={...h.parameters,storySource:{source:"args => <Button {...args} />",...(sr=h.parameters)==null?void 0:sr.storySource}};var or;F.parameters={...F.parameters,storySource:{source:"designTokenStory(meta)",...(or=F.parameters)==null?void 0:or.storySource}};const vr=["Default","DefaultDisabled","DefaultBusy","DefaultHover","DefaultFocus","DefaultActive","DefaultFocusVisible","PrimaryActionDefault","PrimaryActionDisabled","PrimaryActionBusy","PrimaryActionHover","PrimaryActionFocus","PrimaryActionActive","PrimaryActionFocusVisible","SecondaryActionDefault","SecondaryActionDisabled","SecondaryActionBusy","SecondaryActionHover","SecondaryActionFocus","SecondaryActionActive","SecondaryActionFocusVisible","SubtleDefault","SubtleDisabled","SubtleBusy","SubtleHover","SubtleFocus","SubtleActive","SubtleFocusVisible","DesignTokens"];export{g as Default,s as DefaultActive,S as DefaultBusy,x as DefaultDisabled,t as DefaultFocus,o as DefaultFocusVisible,e as DefaultHover,F as DesignTokens,c as PrimaryActionActive,v as PrimaryActionBusy,k as PrimaryActionDefault,f as PrimaryActionDisabled,n as PrimaryActionFocus,i as PrimaryActionFocusVisible,a as PrimaryActionHover,d as SecondaryActionActive,B as SecondaryActionBusy,A as SecondaryActionDefault,w as SecondaryActionDisabled,l as SecondaryActionFocus,p as SecondaryActionFocusVisible,u as SecondaryActionHover,b as SubtleActive,j as SubtleBusy,D as SubtleDefault,R as SubtleDisabled,y as SubtleFocus,h as SubtleFocusVisible,m as SubtleHover,vr as __namedExportsOrder,mr as default};
//# sourceMappingURL=Button.stories-2fe0b72b.js.map