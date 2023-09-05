/*! For license information please see form-field-css-stories-example-stories-mdx.54033a4b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[38549],{"../../components/form-field/css/stories/example.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{achternaam:()=>achternaam,default:()=>example_stories,eMail:()=>eMail,gebruikersnaam:()=>gebruikersnaam,naam:()=>naam,nieuwWachtwoord:()=>nieuwWachtwoord,postcode:()=>postcode,telefoonnummer:()=>telefoonnummer,voornaam:()=>voornaam,voornamen:()=>voornamen,voorvoegsel:()=>voorvoegsel,wachtwoord:()=>wachtwoord});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.3.2_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");const _email_namespaceObject="\x3c!-- @license CC0-1.0 --\x3e\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nAls je vraagt om het e-mailadres van een persoon, leg dan uit waar het voor gebruikt zal worden.\n",_new_password_namespaceObject='\x3c!-- @license CC0-1.0 --\x3e\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nGebruik voor een nieuw wachtwoord `autocomplete="new-password"`.\n\nGebruik voor een wachtwoord geen `maxlength` attribuut in HTML omdat het problemen veroorzaakt als het niet duidelijk dat een gekozen wachtwoord te lang is. Gebruik een melding wanneer het ingevulde wachtwoord te lang is. Als een gebruiker een wachtwoord plakt of een _password manager_ een wachtwoord invult invult dat langer is dan `maxlength` dan kan het laatste gedeelte ongemerkt ontbreken. Ongemerkt wordt dan een korter wachtwoord opgeslagen, daarna kan de gebruiker niet inloggen met het gekozen wachtwoord.\n',_tel_namespaceObject="\x3c!-- @license CC0-1.0 --\x3e\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nAls je vraagt om het telefoonnumer van een persoon, leg dan uit waar het voor gebruikt zal worden. Niet alle gebruikers kunnen de telefoon beantwoorden, voor deze gebruikers is e-mail vaak een goed alternatief.\n",voorvoegsels_tabel_36_namespaceObject=JSON.parse('["A","a","aan","Aan","aan de","Aan de","aan den","Aan den","aan der","Aan der","Aan het","aan het","Aan t","aan t","aan \'t","Aan \'t","Af","af","al","Al","am","Am","am de","Am de","auf","Auf","auf dem","Auf dem","auf den","Auf den","auf der","Auf der","auf ter","Auf ter","Aus","aus","aus dem","Aus dem","Aus den","aus den","Aus der","aus der","aus m","Aus m","Aus \'m","aus \'m","Ben","ben","bij","Bij","Bij de","bij de","bij den","Bij den","Bij het","bij het","bij t","Bij t","bij \'t","Bij \'t","bin","Bin","boven d","Boven d","boven d\'","Boven d\'","d","D","D\'","d\'","Da","da","Dal","dal","dal\'","Dal\'","Dalla","dalla","das","Das","de","De","de die","De die","de die le","De die le","de l","De l","de l\'","De l\'","de la","De la","de las","De las","De le","de le","de van der","De van der","deca","Deca","Degli","degli","Dei","dei","del","Del","Della","della","den","Den","Der","der","des","Des","di","Di","die le","Die le","do","Do","don","Don","dos","Dos","du","Du","el","El","Het","het","i","I","im","Im","In","in","In de","in de","In den","in den","in der","In der","in het","In het","in t","In t","In \'t","in \'t","L","l","L\'","l\'","la","La","Las","las","le","Le","les","Les","lo","Lo","Los","los","Of","of","Onder","onder","onder de","Onder de","onder den","Onder den","onder het","Onder het","onder t","Onder t","onder \'t","Onder \'t","op","Op","op de","Op de","Op den","op den","op der","Op der","Op gen","op gen","op het","Op het","op t","Op t","op \'t","Op \'t","op ten","Op ten","Over","over","over de","Over de","over den","Over den","over het","Over het","over t","Over t","over \'t","Over \'t","s","S","\'s","\'S","s\'","S\'","t","T","\'t","\'T","Te","te","ten","Ten","ter","Ter","Tho","tho","Thoe","thoe","thor","Thor","to","To","Toe","toe","Tot","tot","uijt","Uijt","Uijt de","uijt de","Uijt den","uijt den","Uijt \'t","uijt \'t","uijt te de","Uijt te de","uijt ten","Uijt ten","uit","Uit","Uit de","uit de","uit den","Uit den","uit het","Uit het","uit t","Uit t","uit \'t","Uit \'t","Uit te de","uit te de","Uit ten","uit ten","Unter","unter","van","Van","Van de","van De","van de","van de l","Van de l","Van de l\'","van de l\'","van den","Van Den","Van den","van der","Van der","Van Der","van gen","Van gen","van het","Van het","van la","Van la","van t","Van t","Van \'t","van \'t","Van ter","van ter","Van van de","van van de","ver","Ver","Vom","vom","von","Von","von dem","Von dem","von den","Von den","Von der","von der","Von t","von t","Von \'t","von \'t","voor","Voor","Voor de","voor de","Voor den","voor den","voor in t","Voor in t","voor in \'t","Voor in \'t","Voor \'t","voor \'t","vor","Vor","vor der","Vor der","Zu","zu","zum","Zum","zur","Zur"]'),_achternaam_namespaceObject='\x3c!-- @license CC0-1.0 --\x3e\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nGebruik de `autocomplete` waarde `family-name` wanneer je de achternaam inclusief voorvoegsel nodig hebt.\n\nAls je een eigen textbox voor voorvoegsel gebruikt, gebruik dan niet `autocomplete="family-name"` omdat daarmee het voorvoegsel automatisch in het verkeerde veld wordt ingevuld.\n\nGebruik nooit een minimumlengte voor de validatie van een achternaam. "O" is een achternaam van één letter die voorkomt in Nederland en Belgie ([zie Wikipedia](<https://nl.wikipedia.org/wiki/O_(achternaam)>)). Gebruik liever `required` dan `minlength="1"` omdat het een duidelijkere foutmelding oplevert.\n\nJe kunt op de [FamilienamenBank website](https://www.cbgfamilienamen.nl/nfb/) van het Centrum voor Familiegeschiedenis vinden welke familienamen voorkomen in Nederland.\n',_naam_namespaceObject="\x3c!-- @license CC0-1.0 --\x3e\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nGebruik de `autocomplete` waarde `name` als je de naam van een persoon nodig hebt, en het niet nodig is om de onderdelen van de naam te gebruiken. Dit is de meest gebruiksvriendelijke manier van een naam vragen, gebruik bij voorkeur één formulierveld voor de naam.\n",_postcode_namespaceObject='\x3c!-- @license CC0-1.0 --\x3e\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nGebruik de `autocomplete` waarde `postal-code`.\n\nAls je alleen wilt vragen om de eerste vier cijfers van de postcode, dan zou het autocomplete resultaat van `postal-code` door de laatste twee letters niet aan het juist formaat voldoen. Accepteer in zo\'n geval ook de volledige postcode als invoer, en negeer de letters van de spotcode. Gebruik helemaal geen `autocomplete` als het niet mogelijk is om ook de letters te accepteren.\n\nGebruik voor validatie niet een limiet kleiner dan `maxlength="7"` zodat een spatie tussen de cijfers en letters past.\n',_voornaam_namespaceObject='\x3c!-- @license CC0-1.0 --\x3e\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nGebruik de `autocomplete` waarde `given-name` wanneer je alleen de voornaam nodig hebt, of je de voornaam nodig hebt als los onderdeel van de naam.\n\nEr is geen `autocomplete` waarde voor "Voornamen". De `autocomplete` waarde `given-name` gaat alleen om de eerste naam. Als losse `autocomplete` optie bestaat `additional-name`, maar er is geen combinatie mogelijk.\n\nGebruik nooit een minimumlengte voor de validatie van een voornaam. Er zijn diverse namen van één letter die voorkomen in Nederland en België. Gebruik liever `required` dan `minlength="1"` omdat het een duidelijkere foutmelding oplevert.\nBekijk op de [Nederlandse Voornamenbank](https://www.meertens.knaw.nl/nvb/) van het Meertens Instituut de voornamen die voorkomen in Nederland.\n\nLet op bij validatie van de ingevoerde tekst dat je tekens toestaat die officiëel toegestaan zijn in de basisregistratie personen, zodat elke persoon zijn officiële naam kan invullen.\n\n"Voornamen" is onderdeel van de basisregistratie personen (elementnummer 02.10 in het [Logisch Ontwerp BRP](https://www.rvig.nl/brp/documenten/publicaties/2022/10/21/logisch-ontwerp-brp-4.1)): lengte 1-200, alfanumerieke tekens uit Teletex.\n\nVul automatisch de voornaam in wanneer deze al bekend is, bijvoorbeeld als de gebruiker met DigiD is ingelogd. De voornaam is bijvoorbeeld beschikbaar vanuit [Haal Centraal](https://vng.nl/projecten/haal-centraal).\n',_voorvoegsel_namespaceObject="\x3c!-- @license CC0-1.0 --\x3e\n\x3c!-- markdownlint-disable MD041 --\x3e\n\nAls je naast achternaam een eigen textbox voor voorvoegsel gebruikt, overweeg dan of het niet mogelijk is hele achternaam in één veld te vragen, of zelfs de gehele naam in één veld te vragen: dit is gebruiksvriendelijker en werkt beter met autocomplete.\n\nDe Rijksdienst voor Identiteitsgegevens publiceert een tabel met voorvoegels: _Landelijke tabel 36_. Je kunt [de lijst met voorvoegsels als CSV downloaden](https://publicaties.rvig.nl/dsresource?objectid=cc448b91-6574-47d3-b458-1e7c6cded8cd).\n\nVoorvoegsel moet niet verplicht zijn.\n";var story_template=__webpack_require__("../../components/form-field/css/story-template.jsx"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n",(0,jsx_runtime.jsx)(dist.h_,{id:"css-form-field--examples",title:"CSS Component/Form field/Common examples",component:story_template.h4,argTypes:story_template.PG,args:story_template._O,parameters:{status:{type:"WORK IN PROGRESS"}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"common-examples-of-form-fields",children:"Common examples of form fields"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"naam",children:"Naam"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{children:_naam_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Naam",args:{control:"text",type:"text",label:"Naam",minLength:1,maxLength:412,required:!0,autoComplete:"name",spellcheck:"false",id:"4c6d647b-bacd-437f-b160-6304353ddbdd"},parameters:{chromatic:{disableSnapshot:!0}},children:story_template.h4.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"voornaam",children:"Voornaam"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{children:_voornaam_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Voornaam",args:{control:"text",type:"text",label:"Voornaam",required:!0,minLength:1,maxLength:200,spellcheck:"false",autoComplete:"given-name",id:"af0084ba-cef6-489d-a876-1da92277624c"},parameters:{chromatic:{disableSnapshot:!0}},children:story_template.h4.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"voornamen",children:"Voornamen"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Voornamen",args:{control:"text",type:"text",label:"Voornaam (1 of meerdere)",minLength:1,maxLength:200,spellcheck:"false",required:!0,id:"8ad75c24-32b9-4558-9057-9b5b327f9b70"},parameters:{chromatic:{disableSnapshot:!0}},children:story_template.h4.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"achternaam",children:"Achternaam"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{children:_achternaam_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Achternaam",args:{control:"text",type:"text",label:"Achternaam",minLength:1,maxLength:200,required:!0,spellcheck:"false",autoComplete:"family-name",id:"12719913-e6d1-43a9-8068-239f609abea0"},parameters:{chromatic:{disableSnapshot:!0}},children:story_template.h4.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"voorvoegsel",children:"Voorvoegsel"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{children:_voorvoegsel_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Voorvoegsel",args:{control:"text",type:"text",label:"Voorvoegsel",minLength:1,maxLength:10,required:!1,spellcheck:"false",datalist:voorvoegsels_tabel_36_namespaceObject.map((item=>({label:item}))),id:"ac0c98d6-2ad1-453e-9e06-6b26a5f61546"},parameters:{chromatic:{disableSnapshot:!0}},children:story_template.h4.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"postcode",children:"Postcode"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{children:_postcode_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Postcode",args:{control:"text",type:"text",label:"Postcode",spellcheck:"false",autoComplete:"postal-code",id:"16e1fde4-94e2-4848-9cae-27679070bc93"},parameters:{chromatic:{disableSnapshot:!0}},children:story_template.h4.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"gebruikersnaam",children:"Gebruikersnaam"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Gebruikersnaam",args:{control:"text",type:"text",label:"Gebruikersnaam",spellcheck:"false",autoComplete:"username",id:"6b4dc32d-1a12-496b-bfe6-19470f48f156"},parameters:{chromatic:{disableSnapshot:!0}},children:story_template.h4.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"wachtwoord",children:"Wachtwoord"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Wachtwoord",args:{control:"text",type:"password",label:"Wachtwoord",autoComplete:"current-password",spellcheck:"false",id:"0e462594-7b98-4755-ad8e-3a661df6da05"},parameters:{chromatic:{disableSnapshot:!0}},children:story_template.h4.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"e-mail",children:"E-mail"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{children:_email_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"E-mail",args:{control:"text",type:"email",label:"E-mailadres",description:"Wij sturen op dit e-mailadres de ontvangstbevestiging en we nemen via e-mail contact met u op.",required:!0,autoComplete:"email",spellcheck:"false",id:"ba119f18-ce9d-42d7-8d32-cdfbc6531137"},parameters:{chromatic:{disableSnapshot:!0}},children:story_template.h4.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"telefoonnummer",children:"Telefoonnummer"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{children:_tel_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Telefoonnummer",args:{control:"text",type:"tel",label:"Telefoonnummer",description:"Wij bellen u als de afspraak onverwacht niet door kan gaan. We sturen dan ook een e-mail.",autoComplete:"tel",spellcheck:"false",id:"88b391aa-7b6b-4e86-8033-e810ee4e847e"},parameters:{chromatic:{disableSnapshot:!0}},children:story_template.h4.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"nieuw-wachtwoord",children:"Nieuw wachtwoord"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{children:_new_password_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Nieuw wachtwoord",args:{control:"text",type:"password",label:"Nieuw wachtwoord",autoComplete:"new-password",spellcheck:"false",id:"6dcec3ba-eb91-4173-af55-1b229688d3f7"},parameters:{chromatic:{disableSnapshot:!0}},children:story_template.h4.bind({})})})]})}const naam=story_template.h4.bind({});naam.storyName="Naam",naam.args={control:"text",type:"text",label:"Naam",minLength:1,maxLength:412,required:!0,autoComplete:"name",spellcheck:"false",id:"4c6d647b-bacd-437f-b160-6304353ddbdd"},naam.parameters={storySource:{source:"FormFieldExample.bind({})"},chromatic:{disableSnapshot:!0}};const voornaam=story_template.h4.bind({});voornaam.storyName="Voornaam",voornaam.args={control:"text",type:"text",label:"Voornaam",required:!0,minLength:1,maxLength:200,spellcheck:"false",autoComplete:"given-name",id:"af0084ba-cef6-489d-a876-1da92277624c"},voornaam.parameters={storySource:{source:"FormFieldExample.bind({})"},chromatic:{disableSnapshot:!0}};const voornamen=story_template.h4.bind({});voornamen.storyName="Voornamen",voornamen.args={control:"text",type:"text",label:"Voornaam (1 of meerdere)",minLength:1,maxLength:200,spellcheck:"false",required:!0,id:"8ad75c24-32b9-4558-9057-9b5b327f9b70"},voornamen.parameters={storySource:{source:"FormFieldExample.bind({})"},chromatic:{disableSnapshot:!0}};const achternaam=story_template.h4.bind({});achternaam.storyName="Achternaam",achternaam.args={control:"text",type:"text",label:"Achternaam",minLength:1,maxLength:200,required:!0,spellcheck:"false",autoComplete:"family-name",id:"12719913-e6d1-43a9-8068-239f609abea0"},achternaam.parameters={storySource:{source:"FormFieldExample.bind({})"},chromatic:{disableSnapshot:!0}};const voorvoegsel=story_template.h4.bind({});voorvoegsel.storyName="Voorvoegsel",voorvoegsel.args={control:"text",type:"text",label:"Voorvoegsel",minLength:1,maxLength:10,required:!1,spellcheck:"false",datalist:voorvoegsels_tabel_36_namespaceObject.map((item=>({label:item}))),id:"ac0c98d6-2ad1-453e-9e06-6b26a5f61546"},voorvoegsel.parameters={storySource:{source:"FormFieldExample.bind({})"},chromatic:{disableSnapshot:!0}};const postcode=story_template.h4.bind({});postcode.storyName="Postcode",postcode.args={control:"text",type:"text",label:"Postcode",spellcheck:"false",autoComplete:"postal-code",id:"16e1fde4-94e2-4848-9cae-27679070bc93"},postcode.parameters={storySource:{source:"FormFieldExample.bind({})"},chromatic:{disableSnapshot:!0}};const gebruikersnaam=story_template.h4.bind({});gebruikersnaam.storyName="Gebruikersnaam",gebruikersnaam.args={control:"text",type:"text",label:"Gebruikersnaam",spellcheck:"false",autoComplete:"username",id:"6b4dc32d-1a12-496b-bfe6-19470f48f156"},gebruikersnaam.parameters={storySource:{source:"FormFieldExample.bind({})"},chromatic:{disableSnapshot:!0}};const wachtwoord=story_template.h4.bind({});wachtwoord.storyName="Wachtwoord",wachtwoord.args={control:"text",type:"password",label:"Wachtwoord",autoComplete:"current-password",spellcheck:"false",id:"0e462594-7b98-4755-ad8e-3a661df6da05"},wachtwoord.parameters={storySource:{source:"FormFieldExample.bind({})"},chromatic:{disableSnapshot:!0}};const eMail=story_template.h4.bind({});eMail.storyName="E-mail",eMail.args={control:"text",type:"email",label:"E-mailadres",description:"Wij sturen op dit e-mailadres de ontvangstbevestiging en we nemen via e-mail contact met u op.",required:!0,autoComplete:"email",spellcheck:"false",id:"ba119f18-ce9d-42d7-8d32-cdfbc6531137"},eMail.parameters={storySource:{source:"FormFieldExample.bind({})"},chromatic:{disableSnapshot:!0}};const telefoonnummer=story_template.h4.bind({});telefoonnummer.storyName="Telefoonnummer",telefoonnummer.args={control:"text",type:"tel",label:"Telefoonnummer",description:"Wij bellen u als de afspraak onverwacht niet door kan gaan. We sturen dan ook een e-mail.",autoComplete:"tel",spellcheck:"false",id:"88b391aa-7b6b-4e86-8033-e810ee4e847e"},telefoonnummer.parameters={storySource:{source:"FormFieldExample.bind({})"},chromatic:{disableSnapshot:!0}};const nieuwWachtwoord=story_template.h4.bind({});nieuwWachtwoord.storyName="Nieuw wachtwoord",nieuwWachtwoord.args={control:"text",type:"password",label:"Nieuw wachtwoord",autoComplete:"new-password",spellcheck:"false",id:"6dcec3ba-eb91-4173-af55-1b229688d3f7"},nieuwWachtwoord.parameters={storySource:{source:"FormFieldExample.bind({})"},chromatic:{disableSnapshot:!0}};const componentMeta={title:"CSS Component/Form field/Common examples",id:"css-form-field--examples",parameters:{status:{type:"WORK IN PROGRESS"}},component:story_template.h4,args:story_template._O,argTypes:story_template.PG,tags:["stories-mdx"],includeStories:["naam","voornaam","voornamen","achternaam","voorvoegsel","postcode","gebruikersnaam","wachtwoord","eMail","telefoonnummer","nieuwWachtwoord"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const example_stories=componentMeta}}]);