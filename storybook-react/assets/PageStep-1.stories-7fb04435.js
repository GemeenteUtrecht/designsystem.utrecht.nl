import{a,j as e}from"./jsx-runtime-91a467a5.js";import{a5 as D,a8 as b,L as o,a6 as w,Q as V,l as E,P as l,H as f,O as n,w as d,x as t,y as r,z as i,ac as c,K as m,M as u,T as h,d as v,a7 as K}from"./index-5f4459ab.js";import{e as H,f as I,g as F,h as P,i as S}from"./index.esm-4b1221cc.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./defineProperty-a128c648.js";import"./clsx.m-1229b3e0.js";import"./extends-98964cd2.js";import"./getPrototypeOf-5b183829.js";import"./index-8ce4a492.js";import"./iframe-8ac03048.js";import"../sb-preview/runtime.mjs";const J={title:"Template/Multistep form/Step 1",id:"template-form-pages-step-1",component:D},O=y=>a(D,{...y,children:[e(b,{children:e(o,{href:"/",children:e(H,{})})}),a(w,{style:{"--utrecht-space-around":1},children:[e(I,{json:JSON.stringify([{href:"https://example/",title:"Home",current:!1},{href:"https://example/",title:"Online loket",current:!0}]),variant:"arrows"}),a("aside",{children:[e(V,{children:"MIJN LOKET"}),e(F,{children:a(E,{appearance:"primary-action-button",children:["Uitloggen",e(P,{})]})}),e(l,{children:"Mevrouw Cindy"}),e("br",{}),e("br",{})]}),a(f,{children:[e(l,{lead:!0,children:"ONLINE LOKET"}),"Een verhuizing doorgeven"]}),a("section",{children:[e(n,{children:"Uw gegevens"}),a(l,{children:["Hieronder ziet u de gegevens die wij van u weten. Kloppen uw gegevens niet? Dan kunt u deze laten aanpassen via",e(o,{href:"https://www.utrecht.nl/persoonsgegevenswijzigen",children:" www.utrecht.nl/persoonsgegevenswijzigen. "}),"Uw e-mailadres en telefoonnummer vult u zelf in."]})]}),a("section",{children:[e(n,{children:"PERSOONSGEGEVENS"}),a(d,{appearance:"rows",children:[a(t,{children:[e(r,{children:"Burgerservicenummer"}),e(i,{children:"298272921"})]}),a(t,{children:[e(r,{children:"Aanhef"}),e(i,{children:"Vrouw"})]}),a(t,{children:[e(r,{children:"Voorletter(s)"}),e(i,{notranslate:!0,children:"C."})]}),a(t,{children:[e(r,{children:"Tussenvoegsel(s)"}),e(i,{notranslate:!0})]}),a(t,{children:[e(r,{children:"Achternaam"}),e(i,{notranslate:!0,children:"Verburg"})]})]})]}),e(c,{}),a("section",{children:[e(n,{children:"ADRESGEGEVENS"}),a(d,{appearance:"rows",children:[a(t,{children:[e(r,{children:"Straatnaam"}),e(i,{notranslate:!0,children:"Stadsplateau"})]}),a(t,{children:[e(r,{children:"Huisnummer"}),e(i,{children:"1"})]}),a(t,{children:[e(r,{children:"Huisletter"}),e(i,{notranslate:!0})]}),a(t,{children:[e(r,{children:"Huisnummertoevoeging"}),e(i,{notranslate:!0})]}),a(t,{children:[e(r,{children:"Postcode"}),e(i,{notranslate:!0,children:"3521AZ"})]}),a(t,{children:[e(r,{children:"Woonplaats"}),e(i,{notranslate:!0,children:"Utrecht"})]})]})]}),e(c,{}),a("section",{children:[e(n,{children:"CONTACTGEGEVENS"}),a("form",{children:[a(m,{children:[e(u,{htmlFor:"telefoonnummer",children:"Telefoonnummer"}),e("br",{}),e(h,{id:"telefoonnummer"})]}),a(m,{children:[e(u,{id:"email-label",htmlFor:"email",children:"E-mailadres *"}),e("br",{}),e(h,{required:!0,id:"email","aria-labelledby":"email-label","aria-describedby":"email-desc"}),e(S,{id:"email-desc",children:"Vragen met een * zijn verplicht."})]}),e(v,{appearance:"primary-action-button",type:"submit",children:"VOLGENDE"})]})]})]}),e(K,{})]}),s=O.bind({});var L,g,p;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`args => <Page {...args}>
    <PageHeader>
      <Link href="/">
        <UtrechtLogo />
      </Link>
    </PageHeader>
    <PageContent style={({
    '--utrecht-space-around': 1
  } as any)}>
      <UtrechtBreadcrumb json={JSON.stringify([{
      href: 'https://example/',
      title: 'Home',
      current: false
    }, {
      href: 'https://example/',
      title: 'Online loket',
      current: true
    }])} variant="arrows" />

      <aside>
        <Heading3>MIJN LOKET</Heading3>
        <UtrechtDigidButton>
          <ButtonLink appearance="primary-action-button">
            Uitloggen
            <UtrechtIconArrow />
          </ButtonLink>
        </UtrechtDigidButton>
        <Paragraph>Mevrouw Cindy</Paragraph>
        <br />
        <br />
      </aside>
      <Heading1>
        <Paragraph lead>ONLINE LOKET</Paragraph>
        Een verhuizing doorgeven
      </Heading1>
      <section>
        <Heading2>Uw gegevens</Heading2>
        <Paragraph>
          Hieronder ziet u de gegevens die wij van u weten. Kloppen uw gegevens niet? Dan kunt u deze laten aanpassen
          via
          <Link href="https://www.utrecht.nl/persoonsgegevenswijzigen"> www.utrecht.nl/persoonsgegevenswijzigen. </Link>
          Uw e-mailadres en telefoonnummer vult u zelf in.
        </Paragraph>
      </section>
      <section>
        <Heading2>PERSOONSGEGEVENS</Heading2>
        <DataList appearance="rows">
          <DataListItem>
            <DataListKey>Burgerservicenummer</DataListKey>
            <DataListValue>298272921</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Aanhef</DataListKey>
            <DataListValue>Vrouw</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Voorletter(s)</DataListKey>
            <DataListValue notranslate>C.</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Tussenvoegsel(s)</DataListKey>
            <DataListValue notranslate></DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Achternaam</DataListKey>
            <DataListValue notranslate>Verburg</DataListValue>
          </DataListItem>
        </DataList>
      </section>
      <Separator />
      <section>
        <Heading2>ADRESGEGEVENS</Heading2>
        <DataList appearance="rows">
          <DataListItem>
            <DataListKey>Straatnaam</DataListKey>
            <DataListValue notranslate>Stadsplateau</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Huisnummer</DataListKey>
            <DataListValue>1</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Huisletter</DataListKey>
            <DataListValue notranslate></DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Huisnummertoevoeging</DataListKey>
            <DataListValue notranslate></DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Postcode</DataListKey>
            <DataListValue notranslate>3521AZ</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Woonplaats</DataListKey>
            <DataListValue notranslate>Utrecht</DataListValue>
          </DataListItem>
        </DataList>
      </section>
      <Separator />
      <section>
        <Heading2>CONTACTGEGEVENS</Heading2>
        <form>
          <FormField>
            <FormLabel htmlFor="telefoonnummer">Telefoonnummer</FormLabel>
            <br />
            <Textbox id="telefoonnummer" />
          </FormField>
          <FormField>
            <FormLabel id="email-label" htmlFor="email">
              E-mailadres *
            </FormLabel>
            <br />
            <Textbox required id="email" aria-labelledby="email-label" aria-describedby="email-desc" />
            <UtrechtFormFieldDescription id="email-desc">Vragen met een * zijn verplicht.</UtrechtFormFieldDescription>
          </FormField>
          <Button appearance="primary-action-button" type="submit">
            VOLGENDE
          </Button>
        </form>
      </section>
    </PageContent>
    <PageFooter />
  </Page>`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const R=["One"];export{s as One,R as __namedExportsOrder,J as default};
//# sourceMappingURL=PageStep-1.stories-7fb04435.js.map