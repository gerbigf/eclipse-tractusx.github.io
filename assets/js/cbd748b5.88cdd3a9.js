"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[94664],{3905:(t,e,s)=>{s.d(e,{Zo:()=>u,kt:()=>d});var i=s(67294);function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function a(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){o(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function c(t,e){if(null==t)return{};var s,i,o=function(t,e){if(null==t)return{};var s,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)s=r[i],e.indexOf(s)>=0||(o[s]=t[s]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)s=r[i],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(o[s]=t[s])}return o}var n=i.createContext({}),p=function(t){var e=i.useContext(n),s=e;return t&&(s="function"==typeof t?t(e):a(a({},e),t)),s},u=function(t){var e=p(t.components);return i.createElement(n.Provider,{value:e},t.children)},m="mdxType",l={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var s=t.components,o=t.mdxType,r=t.originalType,n=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=p(s),h=o,d=m["".concat(n,".").concat(h)]||m[h]||l[h]||r;return s?i.createElement(d,a(a({ref:e},u),{},{components:s})):i.createElement(d,a({ref:e},u))}));function d(t,e){var s=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=s.length,a=new Array(r);a[0]=h;var c={};for(var n in e)hasOwnProperty.call(e,n)&&(c[n]=e[n]);c.originalType=t,c[m]="string"==typeof t?t:o,a[1]=c;for(var p=2;p<r;p++)a[p]=s[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,s)}h.displayName="MDXCreateElement"},11734:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>n,toc:()=>u});var i=s(87462),o=(s(67294),s(3905)),r=s(81849);const a={title:"Products"},c=void 0,n={unversionedId:"products",id:"products",title:"Products",description:"",source:"@site/community/products.mdx",sourceDirName:".",slug:"/products",permalink:"/community/products",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/community/community/products.mdx",tags:[],version:"current",frontMatter:{title:"Products"},sidebar:"community",previous:{title:"SIG Architecture",permalink:"/community/sigs/sig_architecture"}},p={},u=[],m={toc:u};function l(t){let{components:e,...s}=t;return(0,o.kt)("wrapper",(0,i.Z)({},m,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{mdxType:"ProductOverview"}))}l.isMDXComponent=!0},81849:(t,e,s)=>{s.d(e,{Z:()=>d});var i=s(87462),o=s(67294),r=s(82280),a=s(38895),c=s(22797),n=s(23508);const p={product_accordion_card:"product_accordion_card_MMEd",accordion:"accordion_fnGx",summary_container:"summary_container_exLB",product_title_container:"product_title_container_BNyb",product_title:"product_title_EAR6",version:"version_uFfv",no_more_content:"no_more_content_zxeB",repo_contact_container:"repo_contact_container_O4vj",repo_details_container:"repo_details_container_MpwY",item_title:"item_title_IuEX",item_link:"item_link_ENe4",details_container:"details_container_py0t",description_container:"description_container_bHo4",description:"description_b01C",no_display:"no_display_wmgb"};function u(t){let{productName:e,productDescription:s,githubRepo:i,committers:u,mailTo:m,hasBoard:l,subTitle:h,showVersion:d=!1}=t;const[g,b]=(0,o.useState)();let f=[...i],v=f.splice(0,1).toString(),y=v.split("/")[3],T=v.split("/")[4],x=m.split("?")[0];(0,o.useEffect)((()=>{fetch(`https://api.github.com/repos/${y}/${T}/releases/latest`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/vnd.github.html+json"}}).then((t=>t.json())).then((t=>{b(t.name)})).catch((t=>console.log(t)))}),[]);const[_,w]=(0,o.useState)(!1);return o.createElement(o.Fragment,null,o.createElement("div",{className:p.product_accordion_card},o.createElement(r.Z,{expanded:_,className:p.accordion},o.createElement(a.Z,{expandIcon:o.createElement(n.Z,{style:{cursor:"pointer"},sx:{color:"#FAA023",fontSize:"2rem"},onClick:()=>w(!_)}),sx:{backgroundColor:"#000",color:"#fff",paddingBottom:"0.5rem",cursor:"unset !important"}},o.createElement("section",{className:p.summary_container},o.createElement("div",{className:p.product_title_container},o.createElement("h2",{className:p.product_title},e),h&&o.createElement("p",{className:p.version},h),d&&null!=g?o.createElement("p",{className:p.version},"Version:",(t=>{let e=t.toLowerCase();return e.startsWith("v")?e.slice(1):e})(g)):o.createElement("p",{className:p.no_display})),o.createElement("div",{className:p.repo_contact_container},o.createElement("ul",{className:p.repo_contact_item},o.createElement("li",{className:p.item_title},"Leading Repository:"),o.createElement("li",{className:p.item_link},o.createElement("a",{href:v},v.substring(19,v.length)))),""!=m&&o.createElement("ul",{className:p.repo_contact_item},o.createElement("li",{className:p.item_title},"Contact:"),o.createElement("li",{className:p.item_link},o.createElement("a",{href:`mailto:${m}`},x)))))),o.createElement(c.Z,{sx:{backgroundColor:"#000",color:"#fff",paddingBottom:"2rem"}},o.createElement("section",{className:p.details_container},o.createElement("div",{className:p.repo_details_container},o.createElement("ul",{className:p.repo_contact_item},o.createElement("li",{className:p.item_title},"Further Repositories:"),f.length>0?f.map(((t,e)=>o.createElement("li",{key:e,className:p.item_link},o.createElement("a",{href:t},t.substring(19,t.length))))):o.createElement("li",{className:p.no_more_content},"No more repositories")),o.createElement("ul",{className:p.repo_contact_item},o.createElement("li",{className:p.item_title},"Committers:"),u.length>0?u.map(((t,e)=>o.createElement("li",{key:e,className:p.item_link},o.createElement("a",{href:t},`@${t.substring(19,t.length)}`)))):o.createElement("li",{className:p.no_more_content},"No committers provided")),l?o.createElement("ul",{className:p.repo_contact_item},o.createElement("li",{className:p.item_title},"Board:"),o.createElement("li",{className:p.item_link},o.createElement("a",{href:`${v}/discussions`},`${v.substring(19,v.length)}/discussions`))):o.createElement("ul",{className:p.no_display}),o.createElement("div",{className:p.description_container},s.length>175?o.createElement("p",{className:p.description},s.substring(0,175),"..."):o.createElement("p",{className:p.description},s))))))))}const m=[{productName:"api-hub",productDescription:"Welcome to the API Hub repository, a centralized location for hosting and viewing API documentation for the Tractus-X organization. This repository automates the collection of OpenAPI specifications from GitHub releases, generates Swagger UI documentation, and publishes it on GitHub Pages.",githubRepo:["https://github.com/eclipse-tractusx/api-hub"],committers:["https://github.com/tomaszbarwicki"],mailTo:"tractusx-dev@eclipse.org?subject=Request api-hub Team",hasBoard:!1,showVersion:!0},{productName:"Tractus-X SDK",productDescription:"A powerful middleware that simplifies the usage and application development using multi-target versions of the EDC, DTR and Data Sources",githubRepo:["https://github.com/eclipse-tractusx/tractusx-sdk"],committers:["https://github.com/matbmoser","https://github.com/CDiezRodriguez","https://github.com/mgarciaLKS"],mailTo:"mathias.moser@catena-x.net?subject=Request Tractus-X SDK Team",hasBoard:!1,showVersion:!0},{productName:"Industry Core Hub",productDescription:"A data provision & consumption lightweight orchestrator, giving an example of usage of the Tractus-X SDK and providing an UI workbench for your to share data easily with Tractus-X compliant technology and following the Catena-X industry core standards.",githubRepo:["https://github.com/eclipse-tractusx/industry-core-hub"],committers:["https://github.com/matbmoser","https://github.com/CDiezRodriguez","https://github.com/mgarciaLKS"],mailTo:"mathias.moser@catena-x.net?subject=Request Industry Core Hub Team",hasBoard:!1,showVersion:!0},{productName:"Business Partner Data Management",productDescription:"The project provides core services for querying, adding, and changing business partner data in the Catena-X data space. Currently, BPDM consists of the Pool and Gate API.",githubRepo:["https://github.com/eclipse-tractusx/bpdm","https://github.com/eclipse-tractusx/bpdm-certificate-management"],committers:["https://github.com/nicoprow","https://github.com/SujitMBRDI","https://github.com/Maximilianong"],mailTo:"tractusx-dev@eclipse.org?subject=Request Business Partner Data Management Team",hasBoard:!1,showVersion:!0},{productName:"bpn-did-resolution-service",productDescription:"Tractus-X Resolver Service for BPN <> DID resolution",githubRepo:["https://github.com/eclipse-tractusx/bpn-did-resolution-service"],committers:["https://github.com/paullatzelsperger","https://github.com/wolf4ood","https://github.com/jimmarino"],mailTo:"tractusx-dev@eclipse.org?subject=Request bpn-did-resolution-service Team",hasBoard:!1,showVersion:!0},{productName:"demand-capacity-mgmt",productDescription:"TBD",githubRepo:["https://github.com/eclipse-tractusx/demand-capacity-mgmt"],committers:["https://github.com/nitin-vavdiya"],mailTo:"tractusx-dev@eclipse.org?subject=Request demand-capacity-mgmt Team",hasBoard:!1,showVersion:!0},{productName:"Digital Product Pass",productDescription:"The Digital Product Pass (DPP) Application provides an easy way to request and visualize product passports from an economic operator using the Catena-X Network. By scanning a QR code or introducing a manufacturerPartId and partInstanceId (productId) passports can be displayed for different products like Batteries (Battery Pass), Transmissions (Transmision Pass) and any other product by simply using the Generic Digital Product Passport Model. Additionally components like the dpp-backend have the power to retrieve any aspect submodel content, which is registered in a Digital Twin using the Catena-X Network, and the dpp-verification add-on enables certification + verification of Catena-X Instance/Type Aspect Models",githubRepo:["https://github.com/eclipse-tractusx/digital-product-pass"],committers:["https://github.com/matbmoser","https://github.com/saudkhan116"],mailTo:"tractusx-dev@eclipse.org?subject=Request digital-product-pass Team",hasBoard:!0,showVersion:!0},{productName:"Self-Description Factory",productDescription:"Generates Self-Description (SD) documents based on input data from the Onboarding Tool, ensuring accurate representation of entities within the network",githubRepo:["https://github.com/eclipse-tractusx/sd-factory"],committers:["https://github.com/tomaszbarwicki","https://github.com/almadigabor"],mailTo:"tractusx-dev@eclipse.org?subject=Request IDS Essential Services Team",hasBoard:!1,showVersion:!0},{productName:"Item Relationship Service",productDescription:"The project provides a service for ad-hoc data chains across n-tier values chains for different use cases based on the EDC.",githubRepo:["https://github.com/eclipse-tractusx/item-relationship-service"],committers:["https://github.com/ds-jhartmann","https://github.com/mkanal","https://github.com/ds-lcapellino","https://github.com/ds-mwesener","https://github.com/ds-jkreutzfeld"],mailTo:"tractusx-dev@eclipse.org?subject=Request Item Relationship Service Team",hasBoard:!1,showVersion:!0},{productName:"knowledge-agents",productDescription:"Reference Implementations of CX-0084 (Federated Queries In Data Spaces)",githubRepo:["https://github.com/eclipse-tractusx/knowledge-agents","https://github.com/eclipse-tractusx/knowledge-agents-aas-bridge","https://github.com/eclipse-tractusx/knowledge-agents-edc"],committers:["https://github.com/almadigabor"],mailTo:"tractusx-dev@eclipse.org?subject=Request knowledge-agents Team",hasBoard:!1,showVersion:!0},{productName:"managed-service-orchestrator",productDescription:"It is a prototype implementation for service provider. This service will help service provider to set up DFT/SDE with EDC and EDC as service in service provider environment.",githubRepo:["https://github.com/eclipse-tractusx/managed-service-orchestrator"],committers:["https://github.com/almadigabor","https://github.com/tomaszbarwicki"],mailTo:"tractusx-dev@eclipse.org?subject=Request managed-service-orchestrator Team",hasBoard:!1,showVersion:!0},{productName:"managed-simple-data-exchanger",productDescription:"It is a component, designed to provide a simplified and efficient solution for data exchange",githubRepo:["https://github.com/eclipse-tractusx/managed-simple-data-exchanger","https://github.com/eclipse-tractusx/managed-simple-data-exchanger-backend","https://github.com/eclipse-tractusx/managed-simple-data-exchanger-frontend"],committers:["https://github.com/almadigabor","https://github.com/tomaszbarwicki"],mailTo:"tractusx-dev@eclipse.org?subject=Request managed-simple-data-exchanger Team",hasBoard:!1,showVersion:!0},{productName:"Policy Hub",productDescription:"The Policy Hub enables data providers, consumers and app providers to access a single-point-of-truth for Catena-X policies, attributes and templates for policy rules.",githubRepo:["https://github.com/eclipse-tractusx/policy-hub"],committers:["https://github.com/evegufy","https://github.com/Phil91"],mailTo:"tractusx-dev@eclipse.org?subject=Request Tractus-X Policy Hub Team",hasBoard:!1,showVersion:!0},{productName:"Portal & Marketplaces",productDescription:"The Portal facilitates the operations for dataspace members (companies), it includes functionalities such as registration, technical onboarding and marketplaces.",githubRepo:["https://github.com/eclipse-tractusx/portal","https://github.com/eclipse-tractusx/portal-backend","https://github.com/eclipse-tractusx/portal-frontend","https://github.com/eclipse-tractusx/portal-frontend-registration","https://github.com/eclipse-tractusx/portal-assets","https://github.com/eclipse-tractusx/portal-iam","https://github.com/eclipse-tractusx/portal-shared-components"],committers:["https://github.com/evegufy","https://github.com/ntruchsess","https://github.com/oyo","https://github.com/Phil91"],mailTo:"tractusx-dev@eclipse.org?subject=Request Portal and Marketplaces Team",hasBoard:!1,showVersion:!0},{productName:"Predictive Unit Real-Time Information Service",productDescription:"Predictive Unit Real-Time Information Service (PURIS) for Short Term Demand and Capacity Management",githubRepo:["https://github.com/eclipse-tractusx/puris"],committers:["https://github.com/tom-rm-meyer-ISST","https://github.com/mhellmeier"],mailTo:"tractusx-dev@eclipse.org?subject=Request puris Team",hasBoard:!1,showVersion:!0},{productName:"Digital Twin Registry",productDescription:"This product provides standards and services to manage digital twins.",githubRepo:["https://github.com/eclipse-tractusx/sldt-digital-twin-registry"],committers:["https://github.com/agg3fe","https://github.com/bs-jokri","https://github.com/LuLeRoemer","https://github.com/tunacicek"],mailTo:"tractusx-dev@eclipse.org?subject=Request Semantic Layer & Digital Twin Team",hasBoard:!1,showVersion:!0},{productName:"Semantic Layer",productDescription:"The project provides methods and tooling to build semantic models (e.g., semantic hub).",githubRepo:["https://github.com/eclipse-tractusx/sldt-semantic-hub","https://github.com/eclipse-tractusx/sldt-semantic-models","https://github.com/eclipse-tractusx/sldt-ontology-model"],committers:["https://github.com/agg3fe","https://github.com/bs-jokri","https://github.com/LuLeRoemer","https://github.com/tunacicek"],mailTo:"tractusx-dev@eclipse.org?subject=Request Semantic Layer & Digital Twin Team",hasBoard:!1,showVersion:!0},{productName:"Discovery Services",productDescription:"The project provides applications for the discovery services. The Discovery Finder is used to find an endpoint to a BPN Discovery for a certain type while BPN Discovery finds the endpoint of a provider EDC.",githubRepo:["https://github.com/eclipse-tractusx/sldt-bpn-discovery","https://github.com/eclipse-tractusx/sldt-discovery-finder"],committers:["https://github.com/agg3fe","https://github.com/bs-jokri","https://github.com/LuLeRoemer","https://github.com/tunacicek"],mailTo:"tractusx-dev@eclipse.org?subject=Request Semantic Layer & Digital Twin Team",hasBoard:!1,showVersion:!0},{productName:"SSI-agent-lib",productDescription:"The SSI Agent Library is a component, designed to facilitate the implementation of Self-Sovereign Identity (SSI) solutions",githubRepo:["https://github.com/eclipse-tractusx/SSI-agent-lib"],committers:["https://github.com/borisrizov-zf","https://github.com/nitin-vavdiya"],mailTo:"tractusx-dev@eclipse.org?subject=Request SSI-agent-lib Team",hasBoard:!1,showVersion:!0},{productName:"ssi-authority-schema-registry",productDescription:"SSI Authority & Schema Registry",githubRepo:["https://github.com/eclipse-tractusx/ssi-authority-schema-registry"],committers:["https://github.com/Phil91","https://github.com/evegufy","https://github.com/ntruchsess"],mailTo:"tractusx-dev@eclipse.org?subject=Request ssi-authority-schema-registry Team",hasBoard:!1,showVersion:!0},{productName:"ssi-credential-issuer",productDescription:"SSI Credential Issuer",githubRepo:["https://github.com/eclipse-tractusx/ssi-credential-issuer"],committers:["https://github.com/Phil91","https://github.com/evegufy","https://github.com/ntruchsess"],mailTo:"tractusx-dev@eclipse.org?subject=Request ssi-credential-issuer Team",hasBoard:!1,showVersion:!0},{productName:"testdata-provider",productDescription:"Testdata Provider",githubRepo:["https://github.com/eclipse-tractusx/testdata-provider"],committers:["https://github.com/ds-lcapellino"],mailTo:"tractusx-dev@eclipse.org?subject=Request testdata-provider Team",hasBoard:!1,showVersion:!0},{productName:"Trace-X",productDescription:"The project provides a business application for tracking parts along the supply chain. It uses quality notifications in a standardized way to notify customers or suppliers about detected faulty parts. It is based on the Catena-X standards for serialized and non-serialized hardware and software components.",githubRepo:["https://github.com/eclipse-tractusx/traceability-foss","https://github.com/eclipse-tractusx/traceability-foss-backend"],committers:["https://github.com/ds-mwesener","https://github.com/ds-mmaul","https://github.com/ds-lcapellino","https://github.com/mkanal"],mailTo:"tractusx-dev@eclipse.org?subject=Request Trace-X Team",hasBoard:!1,showVersion:!0},{productName:"Tractus-X EDC",productDescription:"The project provides the pre-built control- and data-plane docker images and helm charts of the Eclipse Dataspace Connector Project.",githubRepo:["https://github.com/eclipse-tractusx/tractusx-edc","https://github.com/eclipse-tractusx/tractusx-edc-template"],committers:["https://github.com/paullatzelsperger","https://github.com/wolf4ood","https://github.com/ndr-brt","https://github.com/jimmarino"],mailTo:"tractusx-dev@eclipse.org?subject=Request Tractus-X EDC Team",hasBoard:!0,showVersion:!0},{productName:"tractusx-profiles",productDescription:"Defines Credential and Policy Profiles for Tractus-X.",githubRepo:["https://github.com/eclipse-tractusx/tractusx-profiles"],committers:["https://github.com/jimmarino","https://github.com/arnoweiss","https://github.com/wolf4ood"],mailTo:"tractusx-dev@eclipse.org?subject=Request tractusx-profiles Team",hasBoard:!1,showVersion:!0},{productName:"vas-country-risk",productDescription:"The Catena-X Country Risk project is a web application that calculates a risk score per country based on information regarding corruption, political stability, economic risk, and social and structural figures.",githubRepo:["https://github.com/eclipse-tractusx/vas-country-risk"],committers:[],mailTo:"tractusx-dev@eclipse.org?subject=Request vas-country-risk Team",hasBoard:!1,showVersion:!0}],l="product_overview_JsuP",h="container_BydQ";function d(t){let{inputData:e}=t,s=m;return e&&(s=e),o.createElement("section",{className:l},o.createElement("div",{className:h},s.map(((t,e)=>o.createElement(u,(0,i.Z)({key:e},t))))))}}}]);