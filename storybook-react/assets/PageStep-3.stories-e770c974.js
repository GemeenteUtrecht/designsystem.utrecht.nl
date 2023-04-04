import{a as r,j as e}from"./jsx-runtime-670450c2.js";import{m as c,n as g,L as o,o as w,p as b,B as F,P as d,q as v,r as L,S as l,a as f,b as E,s as u,F as i,C as H,d as a,T as k,R as n,t as y,u as B}from"./index.esm-99a43213.js";import{e as I,f as P,g as z,h as O}from"./index.esm-9532d4d7.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-b4f9149a.js";import"./getPrototypeOf-5b183829.js";import"./index-96c5f47c.js";import"./index-a2c8884e-80e4d6ca.js";import"./preload-helper-41c905a7.js";const G={title:"Template/Multistep form/Step 3",id:"template-form-pages-step-3",component:c},x=p=>r(c,{...p,children:[e(g,{children:e(o,{href:"/",children:e(I,{})})}),r(w,{style:{"--utrecht-space-around":1},children:[e(P,{json:JSON.stringify([{href:"https://example/",title:"Home",current:!1},{href:"https://example/",title:"Online loket",current:!0}]),variant:"arrows"}),r("aside",{children:[e(b,{children:"MIJN LOKET"}),e(z,{children:r(F,{appearance:"primary-action-button",children:["Uitloggen",e(O,{})]})}),e(d,{children:"Mevrouw Cindy"}),e("br",{}),e("br",{})]}),r(v,{children:[e(d,{lead:!0,children:"ONLINE LOKET"}),"Een verhuizing doorgeven"]}),e(L,{children:"Woonsituatie"}),e(l,{}),e("section",{children:r("form",{children:[r(f,{children:[e(E,{children:"MEDEVERHUIZERS"}),r("div",{role:"group","aria-labelledby":"Medeverhuizers-label","data-rating-value":"",children:[e(u,{id:"Medeverhuizers-label",children:"Medeverhuizers"}),r(i,{children:[e(H,{id:"medeverhuizers"}),e(a,{htmlFor:"medeverhuizers",children:"Bruce Verburg"})]})]}),e(l,{}),r(i,{children:[e(a,{htmlFor:"hoeveel-personen",children:"Hoeveel personen - inclusief uzelf - wonen er na uw verhuizing op het nieuwe adres? *"}),e("br",{}),e(k,{id:"hoeveel-personen",required:!0,type:"number"})]}),r("div",{role:"radiogroup","aria-labelledby":"wat-is-uw-nieuwe-woonsituatie-label","data-rating-value":"",children:[e(u,{id:"wat-is-uw-nieuwe-woonsituatie-label",children:"Wat is uw nieuwe woonsituatie? *"}),r(i,{children:[e(n,{id:"1",name:"wat-is-uw-nieuwe-woonsituatie"}),e(a,{htmlFor:"1",children:"Ik ben (mede-)eigenaar van de woning/appartement/studio"})]}),r(i,{children:[e(n,{id:"2",name:"wat-is-uw-nieuwe-woonsituatie"}),e(a,{htmlFor:"2",children:"Ik ben (mede-)huurder van de woning/appartement/studio en heb een huurcontract"})]}),r(i,{children:[e(n,{id:"3",name:"wat-is-uw-nieuwe-woonsituatie"}),e(a,{htmlFor:"3",children:"Ik huur een deel van de woning (kamer/verdieping) en heb een huurcontact"})]}),r(i,{children:[e(n,{id:"4",name:"wat-is-uw-nieuwe-woonsituatie"}),e(a,{htmlFor:"4",children:"Ik ga bij iemand in huis wonen en heb geen huurcontract"})]})]})]}),e(o,{href:"/",children:"VORIGE"}),e(y,{type:"submit",appearance:"primary-action-button",children:"VOLGENDE"})]})})]}),e(B,{})]}),t=x.bind({});var s,h,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => <Page {...args}>
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
      <Heading2>Woonsituatie</Heading2>
      <Separator />
      <section>
        <form>
          <Fieldset>
            <FieldsetLegend>MEDEVERHUIZERS</FieldsetLegend>

            <div role="group" aria-labelledby="Medeverhuizers-label" data-rating-value="">
              <Heading4 id="Medeverhuizers-label">Medeverhuizers</Heading4>
              <FormField>
                <Checkbox id="medeverhuizers" />
                <FormLabel htmlFor="medeverhuizers">Bruce Verburg</FormLabel>
              </FormField>
            </div>
            <Separator />
            <FormField>
              <FormLabel htmlFor="hoeveel-personen">
                Hoeveel personen - inclusief uzelf - wonen er na uw verhuizing op het nieuwe adres? *
              </FormLabel>
              <br />
              <Textbox id="hoeveel-personen" required type="number" />
            </FormField>
            <div role="radiogroup" aria-labelledby="wat-is-uw-nieuwe-woonsituatie-label" data-rating-value="">
              <Heading4 id="wat-is-uw-nieuwe-woonsituatie-label">Wat is uw nieuwe woonsituatie? *</Heading4>
              <FormField>
                <RadioButton id="1" name="wat-is-uw-nieuwe-woonsituatie" />
                <FormLabel htmlFor="1">Ik ben (mede-)eigenaar van de woning/appartement/studio</FormLabel>
              </FormField>
              <FormField>
                <RadioButton id="2" name="wat-is-uw-nieuwe-woonsituatie" />
                <FormLabel htmlFor="2">
                  Ik ben (mede-)huurder van de woning/appartement/studio en heb een huurcontract
                </FormLabel>
              </FormField>
              <FormField>
                <RadioButton id="3" name="wat-is-uw-nieuwe-woonsituatie" />
                <FormLabel htmlFor="3">
                  Ik huur een deel van de woning (kamer/verdieping) en heb een huurcontact
                </FormLabel>
              </FormField>
              <FormField>
                <RadioButton id="4" name="wat-is-uw-nieuwe-woonsituatie" />
                <FormLabel htmlFor="4">Ik ga bij iemand in huis wonen en heb geen huurcontract</FormLabel>
              </FormField>
            </div>
          </Fieldset>
          <Link href="/">VORIGE</Link>
          <Button type="submit" appearance="primary-action-button">
            VOLGENDE
          </Button>
        </form>
      </section>
    </PageContent>
    <PageFooter />
  </Page>`,...(m=(h=t.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const J=["Three"];export{t as Three,J as __namedExportsOrder,G as default};
//# sourceMappingURL=PageStep-3.stories-e770c974.js.map