/*! For license information please see Iconset-stories.67f77d24.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[]).push([[5706],{"./src/Iconset.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Iconset_stories});var tokens=__webpack_require__("../../components/icon/tokens.json"),dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),icon_dist=__webpack_require__("../../components/icon/dist/index.json"),design_token_story=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/design-token-story.tsx")),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const meta={title:"Web Component/Icon set",id:"web-component-icon-set",component:({color,icon,size})=>{const IconElement=icon;return color||size?(0,jsx_runtime.jsx)("div",{style:{"--utrecht-icon-color":color&&color,"--utrecht-icon-size":size&&`${size}px`},children:(0,jsx_runtime.jsx)(IconElement,{})}):(0,jsx_runtime.jsx)(IconElement,{})},argTypes:{color:{description:"Color of the icon",control:"color"},size:{description:"Size of the icon (in pixels)",control:"number"},icon:{description:"Icon from the icon set",control:{type:"select"},options:["",...icon_dist.map((({id})=>id))]}},args:{},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-icon",tokens:dist,tokensDefinition:tokens,docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Iconenset\n\nDe gemeente Utrecht gebruikt een eigen iconenset. Veel iconen komen van [Gemeenteniconen.nl](http://gemeenteniconen.nl), en de iconen zijn open source. De iconen worden regelmatig getest met gebruikers om te weten welke iconen duidelijk passen bij welke onderwerpen.\n\nDe iconen zijn beschikbaar als SVG bestanden, die kunnen bijna overal gebruikt worden.\n\nDe iconen zijn ook beschikbaar als web component (bijvoorbeeld: `<utrecht-icon-afval>`), zodat ze makkelijk in de HTML van websites gebruikt kunnen worden. De ontwerpers maken op basis van gebruikersonderzoek soms nieuwe versies van bestaande iconen. Als je web components gebruikt, dan kun je die nieuwe iconen gaan gebruiken zonder op veel plekken code aan te passen.\n\nWe adviseren om waar mogelijk de web component icon te gebruiken, in plaats van de SVG.\n"}}}},Iconset_stories=meta,Default={args:{color:"#888888",icon:"utrecht-icon-loupe",size:32}},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    color: '#888888',\n    icon: 'utrecht-icon-loupe',\n    size: 32\n  }\n}",...Default.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DesignTokens"]},"../../components/icon/dist/index.json":module=>{module.exports=JSON.parse('[{"id":"utrecht-icon-afspraak-maken","src":"afspraak-maken.svg"},{"id":"utrecht-icon-afval-container","src":"afval-container.svg"},{"id":"utrecht-icon-afval-containerpas","src":"afval-containerpas.svg"},{"id":"utrecht-icon-afval-kalender","src":"afval-kalender.svg"},{"id":"utrecht-icon-afval-pmd","src":"afval-pmd.svg"},{"id":"utrecht-icon-afval-scheiden","src":"afval-scheiden.svg"},{"id":"utrecht-icon-afval","src":"afval.svg"},{"id":"utrecht-icon-afvalkalender","src":"afvalkalender.svg"},{"id":"utrecht-icon-alleen","src":"alleen.svg"},{"id":"utrecht-icon-arrow","src":"arrow.svg"},{"id":"utrecht-icon-auto","src":"auto.svg"},{"id":"utrecht-icon-begroting","src":"begroting.svg"},{"id":"utrecht-icon-bestemmingsplan","src":"bestemmingsplan.svg"},{"id":"utrecht-icon-betaaldatum","src":"betaaldatum.svg"},{"id":"utrecht-icon-bewijsstukken","src":"bewijsstukken.svg"},{"id":"utrecht-icon-bijstand","src":"bijstand.svg"},{"id":"utrecht-icon-blad","src":"blad.svg"},{"id":"utrecht-icon-bouwproject","src":"bouwproject.svg"},{"id":"utrecht-icon-brandgevaar","src":"brandgevaar.svg"},{"id":"utrecht-icon-brief-betalen","src":"brief-betalen.svg"},{"id":"utrecht-icon-checkmark","src":"checkmark.svg"},{"id":"utrecht-icon-chevron-down","src":"chevron-down.svg"},{"id":"utrecht-icon-chevron-left","src":"chevron-left.svg"},{"id":"utrecht-icon-chevron-right","src":"chevron-right.svg"},{"id":"utrecht-icon-chevron-up","src":"chevron-up.svg"},{"id":"utrecht-icon-close","src":"close.svg"},{"id":"utrecht-icon-college-b-w","src":"college-b-w.svg"},{"id":"utrecht-icon-container-bio","src":"container-bio.svg"},{"id":"utrecht-icon-container-glas","src":"container-glas.svg"},{"id":"utrecht-icon-container-groenafval","src":"container-groenafval.svg"},{"id":"utrecht-icon-container-met-zak","src":"container-met-zak.svg"},{"id":"utrecht-icon-container-papier","src":"container-papier.svg"},{"id":"utrecht-icon-container-pmd","src":"container-pmd.svg"},{"id":"utrecht-icon-container-restafval","src":"container-restafval.svg"},{"id":"utrecht-icon-container-textiel","src":"container-textiel.svg"},{"id":"utrecht-icon-cross","src":"cross.svg"},{"id":"utrecht-icon-dakloos","src":"dakloos.svg"},{"id":"utrecht-icon-dementie","src":"dementie.svg"},{"id":"utrecht-icon-documenten","src":"documenten.svg"},{"id":"utrecht-icon-duurzaam","src":"duurzaam.svg"},{"id":"utrecht-icon-eenzaamheid","src":"eenzaamheid.svg"},{"id":"utrecht-icon-eikenprocessie","src":"eikenprocessie.svg"},{"id":"utrecht-icon-elektrisch-rijden","src":"elektrisch-rijden.svg"},{"id":"utrecht-icon-energie-vergoeding","src":"energie-vergoeding.svg"},{"id":"utrecht-icon-energietransitie","src":"energietransitie.svg"},{"id":"utrecht-icon-error","src":"error.svg"},{"id":"utrecht-icon-evenementen","src":"evenementen.svg"},{"id":"utrecht-icon-facebook","src":"facebook.svg"},{"id":"utrecht-icon-fiets","src":"fiets.svg"},{"id":"utrecht-icon-filter","src":"filter.svg"},{"id":"utrecht-icon-geboorte","src":"geboorte.svg"},{"id":"utrecht-icon-gebruiker-centraal","src":"gebruiker-centraal.svg"},{"id":"utrecht-icon-gebruiker-ingelogd","src":"gebruiker-ingelogd.svg"},{"id":"utrecht-icon-gegevenswoordenboek","src":"gegevenswoordenboek.svg"},{"id":"utrecht-icon-geluid","src":"geluid.svg"},{"id":"utrecht-icon-gemeente-locatie","src":"gemeente-locatie.svg"},{"id":"utrecht-icon-gemeenteraad","src":"gemeenteraad.svg"},{"id":"utrecht-icon-gereedschap","src":"gereedschap.svg"},{"id":"utrecht-icon-gezicht","src":"gezicht.svg"},{"id":"utrecht-icon-gezin","src":"gezin.svg"},{"id":"utrecht-icon-glas-afval","src":"glas-afval.svg"},{"id":"utrecht-icon-glijbaan","src":"glijbaan.svg"},{"id":"utrecht-icon-grafiek","src":"grafiek.svg"},{"id":"utrecht-icon-grofvuil-ophalen","src":"grofvuil-ophalen.svg"},{"id":"utrecht-icon-grofvuil","src":"grofvuil.svg"},{"id":"utrecht-icon-hamburger-menu","src":"hamburger-menu.svg"},{"id":"utrecht-icon-herdenking","src":"herdenking.svg"},{"id":"utrecht-icon-hondenbelasting","src":"hondenbelasting.svg"},{"id":"utrecht-icon-horeca","src":"horeca.svg"},{"id":"utrecht-icon-horecavergunning","src":"horecavergunning.svg"},{"id":"utrecht-icon-huis-en-omgeving","src":"huis-en-omgeving.svg"},{"id":"utrecht-icon-huis","src":"huis.svg"},{"id":"utrecht-icon-huishoudelijk-geweld","src":"huishoudelijk-geweld.svg"},{"id":"utrecht-icon-hulp-huishouden","src":"hulp-huishouden.svg"},{"id":"utrecht-icon-hulp-vervoer","src":"hulp-vervoer.svg"},{"id":"utrecht-icon-hulp-zorg","src":"hulp-zorg.svg"},{"id":"utrecht-icon-hulpmiddelen-gezin","src":"hulpmiddelen-gezin.svg"},{"id":"utrecht-icon-hulpverlening","src":"hulpverlening.svg"},{"id":"utrecht-icon-idee","src":"idee.svg"},{"id":"utrecht-icon-informatie","src":"informatie.svg"},{"id":"utrecht-icon-information","src":"information.svg"},{"id":"utrecht-icon-innovatie","src":"innovatie.svg"},{"id":"utrecht-icon-inspraak-inwoners","src":"inspraak-inwoners.svg"},{"id":"utrecht-icon-instagram","src":"instagram.svg"},{"id":"utrecht-icon-kalender","src":"kalender.svg"},{"id":"utrecht-icon-kennis","src":"kennis.svg"},{"id":"utrecht-icon-kerstbomen","src":"kerstbomen.svg"},{"id":"utrecht-icon-klachten","src":"klachten.svg"},{"id":"utrecht-icon-kroon","src":"kroon.svg"},{"id":"utrecht-icon-laadpaal","src":"laadpaal.svg"},{"id":"utrecht-icon-language","src":"language.svg"},{"id":"utrecht-icon-lantaarnpaal-oud","src":"lantaarnpaal-oud.svg"},{"id":"utrecht-icon-lantaarnpaal","src":"lantaarnpaal.svg"},{"id":"utrecht-icon-leren","src":"leren.svg"},{"id":"utrecht-icon-let-op","src":"let-op.svg"},{"id":"utrecht-icon-linkedin","src":"linkedin.svg"},{"id":"utrecht-icon-list-check","src":"list-check.svg"},{"id":"utrecht-icon-list-number","src":"list-number.svg"},{"id":"utrecht-icon-list","src":"list.svg"},{"id":"utrecht-icon-loupe","src":"loupe.svg"},{"id":"utrecht-icon-markt","src":"markt.svg"},{"id":"utrecht-icon-melding-boom","src":"melding-boom.svg"},{"id":"utrecht-icon-melding-klacht","src":"melding-klacht.svg"},{"id":"utrecht-icon-melding-openbareruimte","src":"melding-openbareruimte.svg"},{"id":"utrecht-icon-melding-verlichting","src":"melding-verlichting.svg"},{"id":"utrecht-icon-melding","src":"melding.svg"},{"id":"utrecht-icon-menselijk","src":"menselijk.svg"},{"id":"utrecht-icon-menu-dot-open","src":"menu-dot-open.svg"},{"id":"utrecht-icon-menu-dot","src":"menu-dot.svg"},{"id":"utrecht-icon-meterkast","src":"meterkast.svg"},{"id":"utrecht-icon-milieu-ontheffing","src":"milieu-ontheffing.svg"},{"id":"utrecht-icon-milieu-zone","src":"milieu-zone.svg"},{"id":"utrecht-icon-minus-vertical","src":"minus-vertical.svg"},{"id":"utrecht-icon-minus","src":"minus.svg"},{"id":"utrecht-icon-mobiliteit","src":"mobiliteit.svg"},{"id":"utrecht-icon-natuur","src":"natuur.svg"},{"id":"utrecht-icon-nieuw-huis","src":"nieuw-huis.svg"},{"id":"utrecht-icon-nummerbord","src":"nummerbord.svg"},{"id":"utrecht-icon-om-het-huis","src":"om-het-huis.svg"},{"id":"utrecht-icon-omgeving","src":"omgeving.svg"},{"id":"utrecht-icon-omgevingsvisie","src":"omgevingsvisie.svg"},{"id":"utrecht-icon-omgevingswet","src":"omgevingswet.svg"},{"id":"utrecht-icon-onderhoud","src":"onderhoud.svg"},{"id":"utrecht-icon-ondernemen","src":"ondernemen.svg"},{"id":"utrecht-icon-openingstijden","src":"openingstijden.svg"},{"id":"utrecht-icon-over-de-stad","src":"over-de-stad.svg"},{"id":"utrecht-icon-overlijden","src":"overlijden.svg"},{"id":"utrecht-icon-panden","src":"panden.svg"},{"id":"utrecht-icon-park","src":"park.svg"},{"id":"utrecht-icon-parkeerkaart","src":"parkeerkaart.svg"},{"id":"utrecht-icon-parkeervergunning","src":"parkeervergunning.svg"},{"id":"utrecht-icon-parken","src":"parken.svg"},{"id":"utrecht-icon-parkeren-bedrijven","src":"parkeren-bedrijven.svg"},{"id":"utrecht-icon-parkeren-betaalautomaat","src":"parkeren-betaalautomaat.svg"},{"id":"utrecht-icon-parkeren-betalen","src":"parkeren-betalen.svg"},{"id":"utrecht-icon-parkeren","src":"parkeren.svg"},{"id":"utrecht-icon-participatie-campagne","src":"participatie-campagne.svg"},{"id":"utrecht-icon-participatie-like","src":"participatie-like.svg"},{"id":"utrecht-icon-participatie-pitch","src":"participatie-pitch.svg"},{"id":"utrecht-icon-paspoort","src":"paspoort.svg"},{"id":"utrecht-icon-presentatie","src":"presentatie.svg"},{"id":"utrecht-icon-prijskaartje","src":"prijskaartje.svg"},{"id":"utrecht-icon-read-aloud","src":"read-aloud.svg"},{"id":"utrecht-icon-rijbewijs","src":"rijbewijs.svg"},{"id":"utrecht-icon-rioolheffing","src":"rioolheffing.svg"},{"id":"utrecht-icon-rolstoel","src":"rolstoel.svg"},{"id":"utrecht-icon-schild-gemeente-utrecht","src":"schild-gemeente-utrecht.svg"},{"id":"utrecht-icon-search","src":"search.svg"},{"id":"utrecht-icon-shoppen","src":"shoppen.svg"},{"id":"utrecht-icon-sinterklaas","src":"sinterklaas.svg"},{"id":"utrecht-icon-slechtziende-hoordende","src":"slechtziende-hoordende.svg"},{"id":"utrecht-icon-sport-en-cultuur","src":"sport-en-cultuur.svg"},{"id":"utrecht-icon-sport-voetbal","src":"sport-voetbal.svg"},{"id":"utrecht-icon-sport","src":"sport.svg"},{"id":"utrecht-icon-stookverbod","src":"stookverbod.svg"},{"id":"utrecht-icon-strand","src":"strand.svg"},{"id":"utrecht-icon-strooien","src":"strooien.svg"},{"id":"utrecht-icon-subsidie-gezin","src":"subsidie-gezin.svg"},{"id":"utrecht-icon-subsidie","src":"subsidie.svg"},{"id":"utrecht-icon-t-shirt","src":"t-shirt.svg"},{"id":"utrecht-icon-thuiswerken","src":"thuiswerken.svg"},{"id":"utrecht-icon-toeslag","src":"toeslag.svg"},{"id":"utrecht-icon-trein","src":"trein.svg"},{"id":"utrecht-icon-trouwen","src":"trouwen.svg"},{"id":"utrecht-icon-twitter","src":"twitter.svg"},{"id":"utrecht-icon-user","src":"user.svg"},{"id":"utrecht-icon-uw-wijk","src":"uw-wijk.svg"},{"id":"utrecht-icon-vaccinatie","src":"vaccinatie.svg"},{"id":"utrecht-icon-veilige-wijk","src":"veilige-wijk.svg"},{"id":"utrecht-icon-vergaderen","src":"vergaderen.svg"},{"id":"utrecht-icon-vergaderendigitaal","src":"vergaderendigitaal.svg"},{"id":"utrecht-icon-vergoeding","src":"vergoeding.svg"},{"id":"utrecht-icon-verhuizen","src":"verhuizen.svg"},{"id":"utrecht-icon-verkeerslicht","src":"verkeerslicht.svg"},{"id":"utrecht-icon-verkiezingen","src":"verkiezingen.svg"},{"id":"utrecht-icon-verslaving","src":"verslaving.svg"},{"id":"utrecht-icon-vervoersvoorziening","src":"vervoersvoorziening.svg"},{"id":"utrecht-icon-virus","src":"virus.svg"},{"id":"utrecht-icon-vluchtelingen","src":"vluchtelingen.svg"},{"id":"utrecht-icon-voorzieningen-vervoer","src":"voorzieningen-vervoer.svg"},{"id":"utrecht-icon-vrijwilligerswerk","src":"vrijwilligerswerk.svg"},{"id":"utrecht-icon-vuilnisbak","src":"vuilnisbak.svg"},{"id":"utrecht-icon-vuilniszak","src":"vuilniszak.svg"},{"id":"utrecht-icon-vuurwerk","src":"vuurwerk.svg"},{"id":"utrecht-icon-wandelstok","src":"wandelstok.svg"},{"id":"utrecht-icon-warm","src":"warm.svg"},{"id":"utrecht-icon-warning","src":"warning.svg"},{"id":"utrecht-icon-werken","src":"werken.svg"},{"id":"utrecht-icon-werkzaamheden","src":"werkzaamheden.svg"},{"id":"utrecht-icon-whatsapp","src":"whatsapp.svg"},{"id":"utrecht-icon-wonen-kosten","src":"wonen-kosten.svg"},{"id":"utrecht-icon-woning-zoeken","src":"woning-zoeken.svg"},{"id":"utrecht-icon-x","src":"x.svg"},{"id":"utrecht-icon-youtube","src":"youtube.svg"},{"id":"utrecht-icon-zelfstandig-wonen","src":"zelfstandig-wonen.svg"},{"id":"utrecht-icon-zoom-minus","src":"zoom-minus.svg"},{"id":"utrecht-icon-zoom-plus","src":"zoom-plus.svg"},{"id":"utrecht-icon-zoomin","src":"zoomin.svg"},{"id":"utrecht-icon-zoomout","src":"zoomout.svg"},{"id":"utrecht-icon-zorg-huis","src":"zorg-huis.svg"},{"id":"utrecht-icon-zweefpaal","src":"zweefpaal.svg"},{"id":"utrecht-icon-zwemmen","src":"zwemmen.svg"}]')},"../../components/icon/tokens.json":module=>{module.exports=JSON.parse('{"utrecht":{"icon":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length-percentage>","inherits":true}}},"inset-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"baseline":{"inset-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}}}}}')}}]);