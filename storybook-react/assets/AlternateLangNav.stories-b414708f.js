import{j as e,F as L,a as G}from"./jsx-runtime-29545a09.js";import{t as N}from"./tokens-72779522.js";import{t as W,d as z}from"./util-76ff89f6.js";import{c as x}from"./clsx.m-1229b3e0.js";import{r as _}from"./index-76fb7be0.js";import{L as u}from"./Link-040f8057.js";import{H as T}from"./Heading-17db86b9.js";import{B as j}from"./ButtonGroup-1a525338.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const g=_.forwardRef(({children:a,disabled:t,inline:n,className:i,pressed:r,type:h,...c},o)=>e("button",{ref:o,"aria-pressed":typeof r=="boolean"?r:void 0,className:x("utrecht-link-button","utrecht-link-button--html-button",{"utrecht-link-button--disabled":t,"utrecht-link-button--inline":n,"utrecht-link-button--pressed":r},i),disabled:t,type:h||"button",...c,children:a}));g.displayName="LinkButton";try{g.displayName="LinkButton",g.__docgenInfo={description:"",displayName:"LinkButton",props:{inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},pressed:{defaultValue:null,description:"",name:"pressed",required:!1,type:{name:"boolean"}}}}}catch{}const I='<!-- @license CC0-1.0 -->\n\n# Alternate Language Navigation\n\n## HTML\n\nUse the `<nav>` with `<a>` element approach for hyperlinks to alternate languages. Use the button group with toggle button approach (`role="region"` with `<button aria-pressed="true">`) for single page apps where language is replaced using client-side scripting.\n\n- Use `aria-current="page"` to annotate the link to the page the use is on currently.\n\n- Use a word separator between the links to keep the links comprehensible without CSS, so do not write `<a>EN</a><a>NL</a>`.\n\n- The links are best discoverable inside a [navigation landmark region](https://www.w3.org/TR/wai-aria-1.1/#navigation), so inside a `role="navigation"` or `<nav>` element.\n\n- The buttons are best discoverable inside a `role="region"` landmark. Provide a label for the landmark, for example by using `aria-label`. <!-- Hmm... isn\'t <section> + <h2> preferable to using ARIA? -->\n\n- Since it is not possible to provide alternate content for every language, it can help users that only understand other languages to use automatic translation tools such as [Google Translate](https://translate.google.com/). Ensure the language of the [current page is declared](https://www.w3.org/International/questions/qa-html-language-declarations.en) using `<html lang="…">`, so the browser can recognize the page is in a foreign language and suggest to enable automatic translation. Provide server side-rendering to improve the ability of those tools to retrieve the text content for translation.\n\n## UX\n\n- For users that don\'t understand the language of the current page, it should be simple to discover if the page is available in alternate languages. Provide the links as part of the page header or the page footer, or both.\n- Do not use [flags as symbol for a language](https://en.wikipedia.org/wiki/Flag_icons_for_languages), this design pattern is discouraged: [W3C Internationalization Best Practices: "Do not use flag icons to indicate languages"](https://www.w3.org/International/geo/html-tech/tech-lang.html#ri20040808.173208643)\n\n## Relevante WCAG eisen\n\n- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): de heading van de landmark gebruikt de juiste _heading level_.\n- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)\n  - de `hreflang` maakt duidelijk dat de link verwijst naar een pagina in een andere taal\n  - `rel="alternate"` maakt duidelijk dat het om dezelfde informatie gaat op een andere pagina\n  - `aria-current` maakt duidelijk welke pagina op dit moment wordt weergegeven\n  - maak duidelijk dat je kunt navigeren naar alternatieve versies door het plaatsen van deze links in een `navigation` landmark (`<nav>`)\n- [WCAG eis 2.4.4](https://www.w3.org/TR/WCAG21/#link-purpose-in-context): met alleen de naam van de taal als label ("English") is het doel van de link duidelijk in de context van een navigation landmark\n- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): alle labels moeten duidelijk zijn:\n  - het label van de landmark (de heading in de `nav` of `section`). Zie ook: [Using `aria-label` to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6).\n  - het zichtbare label van de links of buttons\n  - het langere label van de link of button (in `aria-label` of `title`)\n- [WCAG eis 2.4.9](https://www.w3.org/TR/WCAG21/#link-purpose-link-only): gebruik een label als "This page in English" zodat het doel van de link ook duidelijk is zonder context.\n- [WCAG eis 2.5.3](https://www.w3.org/TR/WCAG21/#label-in-name): door een afkorting te gebruiken als link-tekst, wordt het moeilijk om met een gesproken instructie de link te activeren.\n- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): de link moet groot genoeg zijn om aan te klikken, en kleine links moeten niet te dicht op een andere link staan.\n- [WCAG eis 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts): voor de bezoeker die de huidige taal niet kan lezen, is het handig om voor de linktekst juist de andere taal te gebruiken. Gebruik het `lang` attribuut om aan te geven dat deze linktekst in een andere taal is geschreven.\n- [WCAG eis 3.1.4](https://www.w3.org/TR/WCAG21/#abbreviations): als de taal wordt weergegeven als afkorting, dan moet de volledige naam in het `title` attribuut beschikbaar zijn.\n- [WCAG eis 3.2.3](https://www.w3.org/TR/WCAG21/#consistent-navigation): de links naar alternatieve talen moeten op alle pagina\'s op dezelfde plek staan.\n';const R={title:"React Component/Alternate language navigation",id:"react-alternate-lang-nav",component:u,args:{heading:"Taal kiezen",headingId:"0103ec04-5ef6-41e6-b5f7-2fa7f60b0ed9",headingLevel:2,children:e(L,{})},parameters:{tokensPrefix:"utrecht-alternate-lang-nav",tokens:W,tokensDefinition:N,docs:{description:{component:I}}},render:()=>{const a={heading:"Taal kiezen",headingId:"0103ec04-5ef6-41e6-b5f7-2fa7f60b0ed9",headingLevel:2},{heading:t,headingId:n,headingLevel:i}=a;return G("nav",{className:"utrecht-alternate-lang-nav","aria-labelledby":n,children:[e(T,{level:i,className:"utrecht-alternate-lang-nav__heading",id:n,children:t}),e(u,{"aria-current":"page",className:"utrecht-link--current-lang",href:"https://example.com/en",hrefLang:"en",lang:"en",title:"This page in English",children:"EN"}),e("span",{"aria-hidden":"true",children:" | "}),e(u,{className:"utrecht-link--alternate-lang",href:"https://example.com/nl",hrefLang:"nl",lang:"nl",rel:"alternate",title:"Deze pagina in Nederlands",children:"NL"})]})}},l={},s={render:()=>{const a={heading:"Taal kiezen",headingId:"0103ec04-5ef6-41e6-b5f7-2fa7f60b0ed9",headingLevel:2,items:[{label:"This page in English",lang:"en",current:!0,textContent:"EN"},{label:"Deze pagina in Nederlands",lang:"nl",current:!1,textContent:"NL"}]},{heading:t,headingId:n,headingLevel:i,items:r}=a;return G("section",{className:"utrecht-alternate-lang-nav","aria-labelledby":n,children:[e(T,{level:i,className:"utrecht-alternate-lang-nav__heading",id:n,children:t}),e(j,{children:r.map(({current:h,label:c,lang:o,textContent:y})=>e(g,{inline:!0,pressed:h,lang:o,"aria-label":c,children:y},o))})]})}},d=z(R);var p,m,k;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(k=(m=l.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var b,w,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const args = {
      heading: 'Taal kiezen',
      headingId: '0103ec04-5ef6-41e6-b5f7-2fa7f60b0ed9',
      headingLevel: 2,
      items: [{
        label: 'This page in English',
        lang: 'en',
        current: true,
        textContent: 'EN'
      }, {
        label: 'Deze pagina in Nederlands',
        lang: 'nl',
        current: false,
        textContent: 'NL'
      }]
    };
    const {
      heading,
      headingId,
      headingLevel,
      items
    } = args;
    return <section className="utrecht-alternate-lang-nav" aria-labelledby={headingId}>
        <Heading level={headingLevel} className="utrecht-alternate-lang-nav__heading" id={headingId}>
          {heading}
        </Heading>
        <ButtonGroup>
          {items.map(({
          current,
          label,
          lang,
          textContent
        }) => <LinkButton inline pressed={current} lang={lang} aria-label={label} key={lang}>
              {textContent}
            </LinkButton>)}
        </ButtonGroup>
      </section>;
  }
}`,...(f=(w=s.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var v,C,A;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:"designTokenStory(meta)",...(A=(C=d.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const M=["Default","ButtonGroupStory","DesignTokens"];export{s as ButtonGroupStory,l as Default,d as DesignTokens,M as __namedExportsOrder,R as default};
//# sourceMappingURL=AlternateLangNav.stories-b414708f.js.map
