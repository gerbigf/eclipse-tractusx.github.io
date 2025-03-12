"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[8081],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var i=a(67294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,i,c=function(e,t){if(null==e)return{};var a,i,c={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var I=i.createContext({}),s=function(e){var t=i.useContext(I),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},m=function(e){var t=s(e.components);return i.createElement(I.Provider,{value:t},e.children)},o="mdxType",r={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},N=i.forwardRef((function(e,t){var a=e.components,c=e.mdxType,l=e.originalType,I=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),o=s(a),N=c,g=o["".concat(I,".").concat(N)]||o[N]||r[N]||l;return a?i.createElement(g,n(n({ref:t},m),{},{components:a})):i.createElement(g,n({ref:t},m))}));function g(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var l=a.length,n=new Array(l);n[0]=N;var d={};for(var I in t)hasOwnProperty.call(t,I)&&(d[I]=t[I]);d.originalType=e,d[o]="string"==typeof e?e:c,n[1]=d;for(var s=2;s<l;s++)n[s]=a[s];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}N.displayName="MDXCreateElement"},36825:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>I,contentTitle:()=>n,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var i=a(87462),c=(a(67294),a(3905));const l={id:"load-factors",title:"Load Factors",description:"Detail capacities by defining how much of a strain a material is on your capacities, compared to other materials.",sidebar_position:4},n=void 0,d={unversionedId:"kits/demand-and-capacity-management-kit/adoption-view/use-case/load-factors",id:"kits/demand-and-capacity-management-kit/adoption-view/use-case/load-factors",title:"Load Factors",description:"Detail capacities by defining how much of a strain a material is on your capacities, compared to other materials.",source:"@site/docs-kits/kits/demand-and-capacity-management-kit/adoption-view/use-case/load-factors.md",sourceDirName:"kits/demand-and-capacity-management-kit/adoption-view/use-case",slug:"/kits/demand-and-capacity-management-kit/adoption-view/use-case/load-factors",permalink:"/docs-kits/next/kits/demand-and-capacity-management-kit/adoption-view/use-case/load-factors",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"load-factors",title:"Load Factors",description:"Detail capacities by defining how much of a strain a material is on your capacities, compared to other materials.",sidebar_position:4},sidebar:"kits",previous:{title:"Simulated Delta Production",permalink:"/docs-kits/next/kits/demand-and-capacity-management-kit/adoption-view/use-case/delta-production"},next:{title:"Request for Update",permalink:"/docs-kits/next/kits/demand-and-capacity-management-kit/adoption-view/use-case/rfu"}},I={},s=[{value:"Business Roles and Functions",id:"business-roles-and-functions",level:2},{value:"Business value",id:"business-value",level:2},{value:"Advantages",id:"advantages",level:3},{value:"Functional description",id:"functional-description",level:2},{value:"Considerations",id:"considerations",level:3},{value:"Example",id:"example",level:2},{value:"Sequence Diagram",id:"sequence-diagram",level:3},{value:"Sample Data",id:"sample-data",level:3},{value:"Notice",id:"notice",level:3}],m={toc:s};function o(e){let{components:t,...l}=e;return(0,c.kt)("wrapper",(0,i.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"DCM kit banner",src:a(97345).Z,width:"264",height:"245"})),(0,c.kt)("h2",{id:"business-roles-and-functions"},"Business Roles and Functions"),(0,c.kt)("p",null,"Load Factors are advanced parameters of a Capacity Group structure and therefore used optionally by suppliers. The application of Load Factors is embedded into the WeekBasedCapacityGroup aspect model. This means that only suppliers may apply Load Factors and customers consume it."),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Function / Role"),(0,c.kt)("th",{parentName:"tr",align:null},"Customer"),(0,c.kt)("th",{parentName:"tr",align:null},"Supplier"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Define Load Factors for materials"),(0,c.kt)("td",{parentName:"tr",align:null}),(0,c.kt)("td",{parentName:"tr",align:null},"X")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Define conversion factor for unit of measure"),(0,c.kt)("td",{parentName:"tr",align:null}),(0,c.kt)("td",{parentName:"tr",align:null},"X")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Inform business partners about factors"),(0,c.kt)("td",{parentName:"tr",align:null}),(0,c.kt)("td",{parentName:"tr",align:null},"X")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Acknowledge factors"),(0,c.kt)("td",{parentName:"tr",align:null},"X"),(0,c.kt)("td",{parentName:"tr",align:null})),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Recalculate demands in user interface, based on factors"),(0,c.kt)("td",{parentName:"tr",align:null},"X"),(0,c.kt)("td",{parentName:"tr",align:null},"X")))),(0,c.kt)("h2",{id:"business-value"},"Business value"),(0,c.kt)("p",null,"The feature \u201cLoad Factors\u201d allows suppliers to model and represent otherwise impossible capacity occurrences, by introducing a numerical multiplication factor, that changes the demand volume interpretation of a capacity group."),(0,c.kt)("p",null,"Load Factors should be used to solve the following two problems:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"Processing of non-homogeneous material variants within a capacity group, resulting in diverging capacity utilization.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"Requirement for having a different unit of measure within a WeekBasedCapacityGroup, in relation to its linked WeekBasedMaterialDemand."))),(0,c.kt)("p",null,"Load Factors solve these problems by:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"Scaling the weekly demand linearly if a material variant causes higher or lower than normal load within the capacity group. Load Factors can, for example, express a reduction to 90% or an increase to 150%.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"Acting as conversion factors, converting the unit of measure of a WeekBasedMaterialDemand into the unit of measure of the WeekBasedCapacityGroup. This leads to a conversion into either \u201ctime\u201d (unit:secondUnitOfTime) or \u201ccycle\u201d (unit:cycle), expressing that, for example, a piece of material takes 12 seconds, or a set of material takes half a cycle to manufacture."))),(0,c.kt)("h3",{id:"advantages"},"Advantages"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Possible differentiation of capacity utilization for product variants within a capacity group"),(0,c.kt)("li",{parentName:"ul"},"Possible conversion of different units of measure"),(0,c.kt)("li",{parentName:"ul"},"Better reflection of actual production environment")),(0,c.kt)("h2",{id:"functional-description"},"Functional description"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Loadfactor",src:a(53413).Z,width:"2089",height:"162"}),"\n",(0,c.kt)("img",{alt:"LoadfactorLegend",src:a(78413).Z,width:"742",height:"42"})),(0,c.kt)("p",null,"Figure: ",(0,c.kt)("em",{parentName:"p"},"Capacity group structure with linked material demand incl. Load Factors")),(0,c.kt)("p",null,"Suppliers may apply Load Factors within WeekBasedCapacityGroup aspect model via the parameter:"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Main Parameters"),(0,c.kt)("th",{parentName:"tr",align:null},"Required?"),(0,c.kt)("th",{parentName:"tr",align:null},"Description"),(0,c.kt)("th",{parentName:"tr",align:null},"Example"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Load Factor"),(0,c.kt)("td",{parentName:"tr",align:null},"No"),(0,c.kt)("td",{parentName:"tr",align:null},"If applied, a Load Factor indicates that in order to produce the required material demand, more (or less) production resources are required."),(0,c.kt)("td",{parentName:"tr",align:null},'Decimal value (e.g. "3.5"). A value of 3.5 means that in the respective week the demand value is multiplied by 3,5 in order to reflect the required capacity needed to fulfil the demand.')))),(0,c.kt)("p",null,"Suppliers can apply Load Factors within the WeekBasedCapacityGroup model via a parameter. If they choose to do so, a Load Factor must be assigned to every WeekBasedMaterialDemand linked to the WeekBasedCapacityGroup."),(0,c.kt)("p",null,"A Load Factor of 1 is neutral and does not change the linked WeekBasedMaterialDemand. Since Load Factors are applied via the WeekBasedCapacityGroup, a WeekBasedMaterialDemand can have multiple, differing Load Factors."),(0,c.kt)("p",null,"Without Load Factors, the units of measure of a WeekBasedCapacityGroup and its linked WeekBasedMaterialDemand should be identical. With Load Factors, they may differ."),(0,c.kt)("h3",{id:"considerations"},"Considerations"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"The standard does not specify individual calculation logic for applying a Load Factor (e.g., converting capacity in pieces to production cycles). This logic depends on the suppliers\u2019 individual planning requirements and tools. Indicating a Load Factor informs the customer that a conversion has taken place but does not affect the transferred demand or capacity values."),(0,c.kt)("li",{parentName:"ul"},"Lot size restrictions, especially lot size = 1, are not considered when using Load Factors."),(0,c.kt)("li",{parentName:"ul"},"To maintain consistency in demand-capacity comparison, rounding of fractional conversion results should be avoided."),(0,c.kt)("li",{parentName:"ul"},"If a WeekBasedCapacityGroup links several WeekBasedMaterialDemand containing the same material, the Load Factors applied to these WeekBasedMaterialDemand should be identical.")),(0,c.kt)("p",null,"Suppliers can use comments to provide customers with additional information about the applied Load Factors. For more details on this communication feature, see Chapter 5.9 of ",(0,c.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange")),(0,c.kt)("h2",{id:"example"},"Example"),(0,c.kt)("p",null,"The supplier produces two toys colored red and chrome on its line for the customer.\nBoth materials pass through the same station within the coloring process."),(0,c.kt)("p",null,"Red toy needs 1 cycle at this station. Chrome toy needs 2 cycles because it needs to be painted twice. The supplier can effectively produce 250 cycles per week at this station."),(0,c.kt)("h3",{id:"sequence-diagram"},"Sequence Diagram"),(0,c.kt)("mermaid",{value:"sequenceDiagram\nautonumber\nParticipant c as Customer\nParticipant s as Supplier\nrect rgb(157,93,00) \n    c->>s: I need 100 red and 100 chrome toys\nend\ns->>s: Chrome toys strain my capacities twice as much as red toys\nrect rgb(4,107,153)\n    s--\x3e>c: Your demand and my capacities need to be expressed as production cycles.\n    autonumber off\n    s--\x3e>c: Red toys are loaded with factor 1\n    s--\x3e>c: Chrome toys are loaded with factor 2\n    s->>c: My overall capacity is 250 cycles\nend\nautonumber 4\nc->>c: My demands are 100 red cycles plus 200 chrome cycles equals 300 cycles\nc->>c: Their capacity for both toys is 250 cycles\nc->>c: Reduce demand for chrome toys to 75 so total demand equals 250 cycles"}),(0,c.kt)("p",null,"Figure: ",(0,c.kt)("em",{parentName:"p"},"Utilizing load factors")),(0,c.kt)("p",null,'The supplier has created a capacity group "Red and Chrome Toys" with the unit \u201ccycle\u201d (unit:cycle). A processing time per piece of 1 cycle is set for red toys and 2 cycles for chrome toys. The maximum available process time is set to 250 cycles.'),(0,c.kt)("p",null,"The customer requires 100 pieces of red toys and 100 pieces of chrome toys in the respective week. The supplier calculates the required process time to be 300 cycles, i.e. 100(red)","*","1 + 100(chrome)","*","2 = 100 + 200 = 300 cycles."),(0,c.kt)("p",null,"Without the Load Factor applied, it would not have been transparent for the customer, that the required amount of red and chrome toys is not possible to be fulfilled and it is necessary to decrease the volume in the respective week."),(0,c.kt)("p",null,"One possible solution would be to reduce the chrome toys by 25 pieces to 75 pieces. New required process time would add up to 100(red)","*","1 + 75(chrome)","*","2 = 100 + 150 = 250 cycles."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Loadfactor",src:a(72851).Z,width:"3965",height:"2287"})),(0,c.kt)("p",null,"Figure: ",(0,c.kt)("em",{parentName:"p"},"Example for application of Load Factor within WeekBasedCapacityGroup")),(0,c.kt)("p",null,"For further details, please refer to ",(0,c.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange"),"."),(0,c.kt)("h3",{id:"sample-data"},"Sample Data"),(0,c.kt)("p",null,"For sample data please refer to ",(0,c.kt)("a",{parentName:"p",href:"/docs-kits/next/kits/demand-and-capacity-management-kit/development-view/model-WeekBasedCapacityGroup"},"Aspect Model - WeekBasedCapacityGroup"),"."),(0,c.kt)("h3",{id:"notice"},"Notice"),(0,c.kt)("p",null,"This work is licensed under the ",(0,c.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 BASF SE"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 Capgemini SE"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Fraunhofer-Gesellschaft zur F\xf6rderung der angewandten Forschung e.V (Fraunhofer)"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Henkel AG & Co.KGaA"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Mercedes Benz Group AG"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SAP SE"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SupplyOn AG"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Volkswagen AG"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 ZF Friedrichshafen AG"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Contributors to the Eclipse Foundation")))}o.isMDXComponent=!0},78413:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyBhcmlhLXJvbGVkZXNjcmlwdGlvbj0iYmxvY2siIHJvbGU9ImdyYXBoaWNzLWRvY3VtZW50IGRvY3VtZW50IiB2aWV3Qm94PSItNSAtMjEgNzQxLjkzNzUgNDIiIHN0eWxlPSJtYXgtd2lkdGg6IDc0MS45MzhweDsgYmFja2dyb3VuZDogcmdiKDIzLCAyMywgMjUpOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaWQ9ImV4cG9ydC1zdmciPjxzdHlsZSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCI+QGltcG9ydCB1cmwoImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS82LjIuMC9jc3MvYWxsLm1pbi5jc3MiKTsgcCB7bWFyZ2luOiAwO308L3N0eWxlPjxzdHlsZT4jZXhwb3J0LXN2Z3tmb250LWZhbWlseToidHJlYnVjaGV0IG1zIix2ZXJkYW5hLGFyaWFsLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE2cHg7ZmlsbDojY2NjO30jZXhwb3J0LXN2ZyAuZXJyb3ItaWNvbntmaWxsOiNhNDQxNDE7fSNleHBvcnQtc3ZnIC5lcnJvci10ZXh0e2ZpbGw6I2RkZDtzdHJva2U6I2RkZDt9I2V4cG9ydC1zdmcgLmVkZ2UtdGhpY2tuZXNzLW5vcm1hbHtzdHJva2Utd2lkdGg6MXB4O30jZXhwb3J0LXN2ZyAuZWRnZS10aGlja25lc3MtdGhpY2t7c3Ryb2tlLXdpZHRoOjMuNXB4O30jZXhwb3J0LXN2ZyAuZWRnZS1wYXR0ZXJuLXNvbGlke3N0cm9rZS1kYXNoYXJyYXk6MDt9I2V4cG9ydC1zdmcgLmVkZ2UtdGhpY2tuZXNzLWludmlzaWJsZXtzdHJva2Utd2lkdGg6MDtmaWxsOm5vbmU7fSNleHBvcnQtc3ZnIC5lZGdlLXBhdHRlcm4tZGFzaGVke3N0cm9rZS1kYXNoYXJyYXk6Mzt9I2V4cG9ydC1zdmcgLmVkZ2UtcGF0dGVybi1kb3R0ZWR7c3Ryb2tlLWRhc2hhcnJheToyO30jZXhwb3J0LXN2ZyAubWFya2Vye2ZpbGw6bGlnaHRncmV5O3N0cm9rZTpsaWdodGdyZXk7fSNleHBvcnQtc3ZnIC5tYXJrZXIuY3Jvc3N7c3Ryb2tlOmxpZ2h0Z3JleTt9I2V4cG9ydC1zdmcgc3Zne2ZvbnQtZmFtaWx5OiJ0cmVidWNoZXQgbXMiLHZlcmRhbmEsYXJpYWwsc2Fucy1zZXJpZjtmb250LXNpemU6MTZweDt9I2V4cG9ydC1zdmcgcHttYXJnaW46MDt9I2V4cG9ydC1zdmcgLmxhYmVse2ZvbnQtZmFtaWx5OiJ0cmVidWNoZXQgbXMiLHZlcmRhbmEsYXJpYWwsc2Fucy1zZXJpZjtjb2xvcjojY2NjO30jZXhwb3J0LXN2ZyAuY2x1c3Rlci1sYWJlbCB0ZXh0e2ZpbGw6I0Y5RkZGRTt9I2V4cG9ydC1zdmcgLmNsdXN0ZXItbGFiZWwgc3BhbiwjZXhwb3J0LXN2ZyBwe2NvbG9yOiNGOUZGRkU7fSNleHBvcnQtc3ZnIC5sYWJlbCB0ZXh0LCNleHBvcnQtc3ZnIHNwYW4sI2V4cG9ydC1zdmcgcHtmaWxsOiNjY2M7Y29sb3I6I2NjYzt9I2V4cG9ydC1zdmcgLm5vZGUgcmVjdCwjZXhwb3J0LXN2ZyAubm9kZSBjaXJjbGUsI2V4cG9ydC1zdmcgLm5vZGUgZWxsaXBzZSwjZXhwb3J0LXN2ZyAubm9kZSBwb2x5Z29uLCNleHBvcnQtc3ZnIC5ub2RlIHBhdGh7ZmlsbDojMWYyMDIwO3N0cm9rZTojY2NjO3N0cm9rZS13aWR0aDoxcHg7fSNleHBvcnQtc3ZnIC5mbG93Y2hhcnQtbGFiZWwgdGV4dHt0ZXh0LWFuY2hvcjptaWRkbGU7fSNleHBvcnQtc3ZnIC5ub2RlIC5sYWJlbHt0ZXh0LWFsaWduOmNlbnRlcjt9I2V4cG9ydC1zdmcgLm5vZGUuY2xpY2thYmxle2N1cnNvcjpwb2ludGVyO30jZXhwb3J0LXN2ZyAuYXJyb3doZWFkUGF0aHtmaWxsOmxpZ2h0Z3JleTt9I2V4cG9ydC1zdmcgLmVkZ2VQYXRoIC5wYXRoe3N0cm9rZTpsaWdodGdyZXk7c3Ryb2tlLXdpZHRoOjIuMHB4O30jZXhwb3J0LXN2ZyAuZmxvd2NoYXJ0LWxpbmt7c3Ryb2tlOmxpZ2h0Z3JleTtmaWxsOm5vbmU7fSNleHBvcnQtc3ZnIC5lZGdlTGFiZWx7YmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMCUsIDM0LjQxMTc2NDcwNTklKTt0ZXh0LWFsaWduOmNlbnRlcjt9I2V4cG9ydC1zdmcgLmVkZ2VMYWJlbCByZWN0e29wYWNpdHk6MC41O2JhY2tncm91bmQtY29sb3I6aHNsKDAsIDAlLCAzNC40MTE3NjQ3MDU5JSk7ZmlsbDpoc2woMCwgMCUsIDM0LjQxMTc2NDcwNTklKTt9I2V4cG9ydC1zdmcgLmxhYmVsQmtne2JhY2tncm91bmQtY29sb3I6cmdiYSg4Ny43NSwgODcuNzUsIDg3Ljc1LCAwLjUpO30jZXhwb3J0LXN2ZyAubm9kZSAuY2x1c3RlcntmaWxsOnJnYmEoNzEuMTUyMzgwOTUyNSwgNzMuNDQ3NjE5MDQ3NywgNzMuNDQ3NjE5MDQ3NywgMC41KTtzdHJva2U6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO2JveC1zaGFkb3c6cmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMTNweCAyN3B4IC01cHgscmdiYSgwLCAwLCAwLCAwLjMpIDBweCA4cHggMTZweCAtOHB4O3N0cm9rZS13aWR0aDoxcHg7fSNleHBvcnQtc3ZnIC5jbHVzdGVyIHRleHR7ZmlsbDojRjlGRkZFO30jZXhwb3J0LXN2ZyAuY2x1c3RlciBzcGFuLCNleHBvcnQtc3ZnIHB7Y29sb3I6I0Y5RkZGRTt9I2V4cG9ydC1zdmcgZGl2Lm1lcm1haWRUb29sdGlwe3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyO21heC13aWR0aDoyMDBweDtwYWRkaW5nOjJweDtmb250LWZhbWlseToidHJlYnVjaGV0IG1zIix2ZXJkYW5hLGFyaWFsLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7YmFja2dyb3VuZDpoc2woMjAsIDEuNTg3MzAxNTg3MyUsIDEyLjM1Mjk0MTE3NjUlKTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7Ym9yZGVyLXJhZGl1czoycHg7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OjEwMDt9I2V4cG9ydC1zdmcgLmZsb3djaGFydFRpdGxlVGV4dHt0ZXh0LWFuY2hvcjptaWRkbGU7Zm9udC1zaXplOjE4cHg7ZmlsbDojY2NjO30jZXhwb3J0LXN2ZyAubm9kZSAubmVvLW5vZGV7c3Ryb2tlOiNjY2M7fSNleHBvcnQtc3ZnIFtkYXRhLWxvb2s9Im5lbyJdLm5vZGUgcmVjdCwjZXhwb3J0LXN2ZyBbZGF0YS1sb29rPSJuZW8iXS5jbHVzdGVyIHJlY3QsI2V4cG9ydC1zdmcgW2RhdGEtbG9vaz0ibmVvIl0ubm9kZSBwb2x5Z29ue3N0cm9rZTp1cmwoI2V4cG9ydC1zdmctZ3JhZGllbnQpO2ZpbHRlcjpkcm9wLXNoYWRvdyggMXB4IDJweCAycHggcmdiYSgxODUsMTg1LDE4NSwxKSk7fSNleHBvcnQtc3ZnIFtkYXRhLWxvb2s9Im5lbyJdLm5vZGUgcmVjdCwjZXhwb3J0LXN2ZyBbZGF0YS1sb29rPSJuZW8iXS5ub2RlIHBvbHlnb24sI2V4cG9ydC1zdmcgW2RhdGEtbG9vaz0ibmVvIl0ubm9kZSBwYXRoe3N0cm9rZTp1cmwoI2V4cG9ydC1zdmctZ3JhZGllbnQpO2ZpbHRlcjpkcm9wLXNoYWRvdyggMXB4IDJweCAycHggcmdiYSgxODUsMTg1LDE4NSwxKSk7fSNleHBvcnQtc3ZnIFtkYXRhLWxvb2s9Im5lbyJdLm5vZGUgLm5lby1saW5lIHBhdGh7c3Ryb2tlOiNjY2NjY2M7ZmlsdGVyOm5vbmU7fSNleHBvcnQtc3ZnIFtkYXRhLWxvb2s9Im5lbyJdLm5vZGUgY2lyY2xle3N0cm9rZTp1cmwoI2V4cG9ydC1zdmctZ3JhZGllbnQpO2ZpbHRlcjpkcm9wLXNoYWRvdyggMXB4IDJweCAycHggcmdiYSgxODUsMTg1LDE4NSwxKSk7fSNleHBvcnQtc3ZnIFtkYXRhLWxvb2s9Im5lbyJdLm5vZGUgY2lyY2xlIC5zdGF0ZS1zdGFydHtmaWxsOiMwMDAwMDA7fSNleHBvcnQtc3ZnIFtkYXRhLWxvb2s9Im5lbyJdLnN0YXRlZGlhZ3JhbS1jbHVzdGVyIHJlY3R7ZmlsbDojMWYyMDIwO3N0cm9rZTp1cmwoI2V4cG9ydC1zdmctZ3JhZGllbnQpO3N0cm9rZS13aWR0aDoxcHg7fSNleHBvcnQtc3ZnIFtkYXRhLWxvb2s9Im5lbyJdLmljb24tc2hhcGUgLmljb24gcGF0aHtmaWxsOnVybCgjZXhwb3J0LXN2Zy1ncmFkaWVudCk7ZmlsdGVyOmRyb3Atc2hhZG93KCAxcHggMnB4IDJweCByZ2JhKDE4NSwxODUsMTg1LDEpKTt9I2V4cG9ydC1zdmcgW2RhdGEtbG9vaz0ibmVvIl0uaWNvbi1zaGFwZSBwYXRoe3N0cm9rZTp1cmwoI2V4cG9ydC1zdmctZ3JhZGllbnQpO2ZpbHRlcjpkcm9wLXNoYWRvdyggMXB4IDJweCAycHggcmdiYSgxODUsMTg1LDE4NSwxKSk7fSNleHBvcnQtc3ZnIDpyb290ey0tbWVybWFpZC1mb250LWZhbWlseToidHJlYnVjaGV0IG1zIix2ZXJkYW5hLGFyaWFsLHNhbnMtc2VyaWY7fTwvc3R5bGU+PGcvPjxtYXJrZXIgb3JpZW50PSJhdXRvIiBtYXJrZXJIZWlnaHQ9IjEyIiBtYXJrZXJXaWR0aD0iMTIiIG1hcmtlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcmVmWT0iNSIgcmVmWD0iNiIgdmlld0JveD0iMCAwIDEwIDEwIiBjbGFzcz0ibWFya2VyIGJsb2NrIiBpZD0iZXhwb3J0LXN2Z19ibG9jay1wb2ludEVuZCI+PHBhdGggc3R5bGU9InN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogMSwgMDsiIGNsYXNzPSJhcnJvd01hcmtlclBhdGgiIGQ9Ik0gMCAwIEwgMTAgNSBMIDAgMTAgeiIvPjwvbWFya2VyPjxtYXJrZXIgb3JpZW50PSJhdXRvIiBtYXJrZXJIZWlnaHQ9IjEyIiBtYXJrZXJXaWR0aD0iMTIiIG1hcmtlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcmVmWT0iNSIgcmVmWD0iNC41IiB2aWV3Qm94PSIwIDAgMTAgMTAiIGNsYXNzPSJtYXJrZXIgYmxvY2siIGlkPSJleHBvcnQtc3ZnX2Jsb2NrLXBvaW50U3RhcnQiPjxwYXRoIHN0eWxlPSJzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IDEsIDA7IiBjbGFzcz0iYXJyb3dNYXJrZXJQYXRoIiBkPSJNIDAgNSBMIDEwIDEwIEwgMTAgMCB6Ii8+PC9tYXJrZXI+PG1hcmtlciBvcmllbnQ9ImF1dG8iIG1hcmtlckhlaWdodD0iMTEiIG1hcmtlcldpZHRoPSIxMSIgbWFya2VyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiByZWZZPSI1IiByZWZYPSIxMSIgdmlld0JveD0iMCAwIDEwIDEwIiBjbGFzcz0ibWFya2VyIGJsb2NrIiBpZD0iZXhwb3J0LXN2Z19ibG9jay1jaXJjbGVFbmQiPjxjaXJjbGUgc3R5bGU9InN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogMSwgMDsiIGNsYXNzPSJhcnJvd01hcmtlclBhdGgiIHI9IjUiIGN5PSI1IiBjeD0iNSIvPjwvbWFya2VyPjxtYXJrZXIgb3JpZW50PSJhdXRvIiBtYXJrZXJIZWlnaHQ9IjExIiBtYXJrZXJXaWR0aD0iMTEiIG1hcmtlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcmVmWT0iNSIgcmVmWD0iLTEiIHZpZXdCb3g9IjAgMCAxMCAxMCIgY2xhc3M9Im1hcmtlciBibG9jayIgaWQ9ImV4cG9ydC1zdmdfYmxvY2stY2lyY2xlU3RhcnQiPjxjaXJjbGUgc3R5bGU9InN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogMSwgMDsiIGNsYXNzPSJhcnJvd01hcmtlclBhdGgiIHI9IjUiIGN5PSI1IiBjeD0iNSIvPjwvbWFya2VyPjxtYXJrZXIgb3JpZW50PSJhdXRvIiBtYXJrZXJIZWlnaHQ9IjExIiBtYXJrZXJXaWR0aD0iMTEiIG1hcmtlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcmVmWT0iNS4yIiByZWZYPSIxMiIgdmlld0JveD0iMCAwIDExIDExIiBjbGFzcz0ibWFya2VyIGNyb3NzIGJsb2NrIiBpZD0iZXhwb3J0LXN2Z19ibG9jay1jcm9zc0VuZCI+PHBhdGggc3R5bGU9InN0cm9rZS13aWR0aDogMjsgc3Ryb2tlLWRhc2hhcnJheTogMSwgMDsiIGNsYXNzPSJhcnJvd01hcmtlclBhdGgiIGQ9Ik0gMSwxIGwgOSw5IE0gMTAsMSBsIC05LDkiLz48L21hcmtlcj48bWFya2VyIG9yaWVudD0iYXV0byIgbWFya2VySGVpZ2h0PSIxMSIgbWFya2VyV2lkdGg9IjExIiBtYXJrZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHJlZlk9IjUuMiIgcmVmWD0iLTEiIHZpZXdCb3g9IjAgMCAxMSAxMSIgY2xhc3M9Im1hcmtlciBjcm9zcyBibG9jayIgaWQ9ImV4cG9ydC1zdmdfYmxvY2stY3Jvc3NTdGFydCI+PHBhdGggc3R5bGU9InN0cm9rZS13aWR0aDogMjsgc3Ryb2tlLWRhc2hhcnJheTogMSwgMDsiIGNsYXNzPSJhcnJvd01hcmtlclBhdGgiIGQ9Ik0gMSwxIGwgOSw5IE0gMTAsMSBsIC05LDkiLz48L21hcmtlcj48ZyBjbGFzcz0iYmxvY2siPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg4LjQ5MjE4NzUsIDApIiBkYXRhLWlkPSJBIiBkYXRhLW5vZGU9InRydWUiIGlkPSJBIiBjbGFzcz0ibm9kZSBkZWZhdWx0IGRlZmF1bHQgZmxvd2NoYXJ0LWxhYmVsIj48cmVjdCBoZWlnaHQ9IjMyIiB3aWR0aD0iMTc2Ljk4NDM3NSIgeT0iLTE2IiB4PSItODguNDkyMTg3NSIgcnk9IjUiIHJ4PSI1IiBzdHlsZT0iZmlsbDojRkZBNjAwOyIgY2xhc3M9ImJhc2ljIGxhYmVsLWNvbnRhaW5lciIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03OC4yNDYwOTM3NSwgLTEyKSIgc3R5bGU9ImNvbG9yOiNGNEYyRjM7IiBjbGFzcz0ibGFiZWwiPjxyZWN0Lz48Zm9yZWlnbk9iamVjdCBoZWlnaHQ9IjI0IiB3aWR0aD0iMTU2LjQ5MjE4NzUiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJjb2xvcjogcmdiKDI0NCwgMjQyLCAyNDMpOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdoaXRlLXNwYWNlOiBub3dyYXA7Ij48c3BhbiBjbGFzcz0ibm9kZUxhYmVsIiBzdHlsZT0iY29sb3I6I0Y0RjJGMzsiPkRlbWFuZCBkYXRhIChNVVNUKTwvc3Bhbj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNzMuNDc2NTYyNSwgMCkiIGRhdGEtaWQ9IkIiIGRhdGEtbm9kZT0idHJ1ZSIgaWQ9IkIiIGNsYXNzPSJub2RlIGRlZmF1bHQgZGVmYXVsdCBmbG93Y2hhcnQtbGFiZWwiPjxyZWN0IGhlaWdodD0iMzIiIHdpZHRoPSIxNzYuOTg0Mzc1IiB5PSItMTYiIHg9Ii04OC40OTIxODc1IiByeT0iNSIgcng9IjUiIHN0eWxlPSJmaWxsOiNCRjcxMDA7IiBjbGFzcz0iYmFzaWMgbGFiZWwtY29udGFpbmVyIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgzLjYwNTQ2ODc1LCAtMTIpIiBzdHlsZT0iY29sb3I6I0Y0RjJGMzsiIGNsYXNzPSJsYWJlbCI+PHJlY3QvPjxmb3JlaWduT2JqZWN0IGhlaWdodD0iMjQiIHdpZHRoPSIxNjcuMjEwOTM3NSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImNvbG9yOiByZ2IoMjQ0LCAyNDIsIDI0Myk7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgd2hpdGUtc3BhY2U6IG5vd3JhcDsiPjxzcGFuIGNsYXNzPSJub2RlTGFiZWwiIHN0eWxlPSJjb2xvcjojRjRGMkYzOyI+RGVtYW5kIGRhdGEgKG9wdGlvbmFsKTwvc3Bhbj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NTguNDYwOTM3NSwgMCkiIGRhdGEtaWQ9IkMiIGRhdGEtbm9kZT0idHJ1ZSIgaWQ9IkMiIGNsYXNzPSJub2RlIGRlZmF1bHQgZGVmYXVsdCBmbG93Y2hhcnQtbGFiZWwiPjxyZWN0IGhlaWdodD0iMzIiIHdpZHRoPSIxNzYuOTg0Mzc1IiB5PSItMTYiIHg9Ii04OC40OTIxODc1IiByeT0iNSIgcng9IjUiIHN0eWxlPSJmaWxsOiNCM0NCMkQ7IiBjbGFzcz0iYmFzaWMgbGFiZWwtY29udGFpbmVyIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc5LjEzMjgxMjUsIC0xMikiIHN0eWxlPSJjb2xvcjojRjRGMkYzOyIgY2xhc3M9ImxhYmVsIj48cmVjdC8+PGZvcmVpZ25PYmplY3QgaGVpZ2h0PSIyNCIgd2lkdGg9IjE1OC4yNjU2MjUiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJjb2xvcjogcmdiKDI0NCwgMjQyLCAyNDMpOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdoaXRlLXNwYWNlOiBub3dyYXA7Ij48c3BhbiBjbGFzcz0ibm9kZUxhYmVsIiBzdHlsZT0iY29sb3I6I0Y0RjJGMzsiPkNhcGFjaXR5IGRhdGEgKE1VU1QpPC9zcGFuPjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY0My40NDUzMTI1LCAwKSIgZGF0YS1pZD0iRCIgZGF0YS1ub2RlPSJ0cnVlIiBpZD0iRCIgY2xhc3M9Im5vZGUgZGVmYXVsdCBkZWZhdWx0IGZsb3djaGFydC1sYWJlbCI+PHJlY3QgaGVpZ2h0PSIzMiIgd2lkdGg9IjE3Ni45ODQzNzUiIHk9Ii0xNiIgeD0iLTg4LjQ5MjE4NzUiIHJ5PSI1IiByeD0iNSIgc3R5bGU9ImZpbGw6IzYxNzAwMDsiIGNsYXNzPSJiYXNpYyBsYWJlbC1jb250YWluZXIiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODQuNDkyMTg3NSwgLTEyKSIgc3R5bGU9ImNvbG9yOiNGNEYyRjM7IiBjbGFzcz0ibGFiZWwiPjxyZWN0Lz48Zm9yZWlnbk9iamVjdCBoZWlnaHQ9IjI0IiB3aWR0aD0iMTY4Ljk4NDM3NSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImNvbG9yOiByZ2IoMjQ0LCAyNDIsIDI0Myk7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgd2hpdGUtc3BhY2U6IG5vd3JhcDsiPjxzcGFuIGNsYXNzPSJub2RlTGFiZWwiIHN0eWxlPSJjb2xvcjojRjRGMkYzOyI+Q2FwYWNpdHkgZGF0YSAob3B0aW9uYWwpPC9zcGFuPjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PC9nPjwvZz48L3N2Zz4="},72851:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/business-process_LoadFactor_example_diagram-715d7b136dc8e7834abfedd0e55ce27b.svg"},53413:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/business-process_LoadFactor_functional-580a5b3a2a66351defbba75a456a6bd6.svg"},97345:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IGNvbG9yLXNjaGVtZTogbGlnaHQgZGFyazsiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNjRweCIgaGVpZ2h0PSIyNDVweCIgdmlld0JveD0iLTAuNSAtMC41IDI2NCAyNDUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMTAwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIwJSIgaWQ9ImRyYXdpby1zdmctRTFmTS11QktEWXZGb1NnWnJqUlUtZ3JhZGllbnQtbGlnaHQtZGFya19lNWNjZmZfNDQyZTVhXy0xLWxpZ2h0LWRhcmtfYjk1ZWZmX2I1NjdmMV8tMS1lLTAiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNCOTVFRkYiIHN0b3Atb3BhY2l0eT0iMSIgc3R5bGU9InN0b3AtY29sb3I6IGxpZ2h0LWRhcmsocmdiKDE4NSwgOTQsIDI1NSksIHJnYigxODEsIDEwMywgMjQxKSk7IHN0b3Atb3BhY2l0eTogMTsiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFNUNDRkYiIHN0b3Atb3BhY2l0eT0iMSIgc3R5bGU9InN0b3AtY29sb3I6IGxpZ2h0LWRhcmsocmdiKDIyOSwgMjA0LCAyNTUpLCByZ2IoNjgsIDQ2LCA5MCkpOyBzdG9wLW9wYWNpdHk6IDE7Ii8+PC9saW5lYXJHcmFkaWVudD48c3R5bGUgdHlwZT0idGV4dC9jc3MiPkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWFucm9wZTp3Z2h0QDQwMDs1MDApOyYjeGE7PC9zdHlsZT48L2RlZnM+PGc+PGcvPjxnPjxwYXRoIGQ9Ik0gNjYgMTMwLjc1IEwgMTA5Ljg0IDEwNS40OCBRIDEzMS41IDkzIDE1My4xNiAxMDUuNDggTCAyNDAuODQgMTU2LjAyIFEgMjYyLjUgMTY4LjUgMjQwLjg0IDE4MC45OCBMIDE1My4xNiAyMzEuNTIgUSAxMzEuNSAyNDQgMTA5Ljg0IDIzMS41MiBMIDIyLjE2IDE4MC45OCBRIDAuNSAxNjguNSAyMi4xNiAxNTYuMDIgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYjk1ZWZmIiBzdHJva2Utb3BhY2l0eT0iMC40IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHN0eWxlPSJzdHJva2U6IGxpZ2h0LWRhcmsocmdiKDE4NSwgOTQsIDI1NSksIHJnYigxODEsIDEwMywgMjQxKSk7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0gNjYgMTE5Ljc1IEwgMTA5Ljg0IDk0LjQ4IFEgMTMxLjUgODIgMTUzLjE2IDk0LjQ4IEwgMjQwLjg0IDE0NS4wMiBRIDI2Mi41IDE1Ny41IDI0MC44NCAxNjkuOTggTCAxNTMuMTYgMjIwLjUyIFEgMTMxLjUgMjMzIDEwOS44NCAyMjAuNTIgTCAyMi4xNiAxNjkuOTggUSAwLjUgMTU3LjUgMjIuMTYgMTQ1LjAyIFoiIGZpbGwtb3BhY2l0eT0iMC40IiBmaWxsPSJ1cmwoI2RyYXdpby1zdmctRTFmTS11QktEWXZGb1NnWnJqUlUtZ3JhZGllbnQtbGlnaHQtZGFya19lNWNjZmZfNDQyZTVhXy0xLWxpZ2h0LWRhcmtfYjk1ZWZmX2I1NjdmMV8tMS1lLTApIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHN0eWxlPSJmaWxsOiB1cmwoJnF1b3Q7I2RyYXdpby1zdmctRTFmTS11QktEWXZGb1NnWnJqUlUtZ3JhZGllbnQtbGlnaHQtZGFya19lNWNjZmZfNDQyZTVhXy0xLWxpZ2h0LWRhcmtfYjk1ZWZmX2I1NjdmMV8tMS1lLTAmcXVvdDspOyIvPjwvZz48Zz48cGF0aCBkPSJNIDY2IDEwMi43NSBMIDEwOS44NCA3Ny40OCBRIDEzMS41IDY1IDE1My4xNiA3Ny40OCBMIDI0MC44NCAxMjguMDIgUSAyNjIuNSAxNDAuNSAyNDAuODQgMTUyLjk4IEwgMTUzLjE2IDIwMy41MiBRIDEzMS41IDIxNiAxMDkuODQgMjAzLjUyIEwgMjIuMTYgMTUyLjk4IFEgMC41IDE0MC41IDIyLjE2IDEyOC4wMiBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNiOTVlZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIgc3R5bGU9InN0cm9rZTogbGlnaHQtZGFyayhyZ2IoMTg1LCA5NCwgMjU1KSwgcmdiKDE4MSwgMTAzLCAyNDEpKTsiLz48L2c+PGc+PHBhdGggZD0iTSA2NiA5MC43NSBMIDEwOS44NCA2NS40OCBRIDEzMS41IDUzIDE1My4xNiA2NS40OCBMIDI0MC44NCAxMTYuMDIgUSAyNjIuNSAxMjguNSAyNDAuODQgMTQwLjk4IEwgMTUzLjE2IDE5MS41MiBRIDEzMS41IDIwNCAxMDkuODQgMTkxLjUyIEwgMjIuMTYgMTQwLjk4IFEgMC41IDEyOC41IDIyLjE2IDExNi4wMiBaIiBmaWxsLW9wYWNpdHk9IjAuNDgiIGZpbGw9InVybCgjZHJhd2lvLXN2Zy1FMWZNLXVCS0RZdkZvU2dacmpSVS1ncmFkaWVudC1saWdodC1kYXJrX2U1Y2NmZl80NDJlNWFfLTEtbGlnaHQtZGFya19iOTVlZmZfYjU2N2YxXy0xLWUtMCkiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIgc3R5bGU9ImZpbGw6IHVybCgmcXVvdDsjZHJhd2lvLXN2Zy1FMWZNLXVCS0RZdkZvU2dacmpSVS1ncmFkaWVudC1saWdodC1kYXJrX2U1Y2NmZl80NDJlNWFfLTEtbGlnaHQtZGFya19iOTVlZmZfYjU2N2YxXy0xLWUtMCZxdW90Oyk7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0gNjUuNSA3Ni43NSBMIDEwOS4zNCA1MS40OCBRIDEzMSAzOSAxNTIuNjYgNTEuNDggTCAyNDAuMzQgMTAyLjAyIFEgMjYyIDExNC41IDI0MC4zNCAxMjYuOTggTCAxNTIuNjYgMTc3LjUyIFEgMTMxIDE5MCAxMDkuMzQgMTc3LjUyIEwgMjEuNjYgMTI2Ljk4IFEgMCAxMTQuNSAyMS42NiAxMDIuMDIgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYjk1ZWZmIiBzdHJva2Utb3BhY2l0eT0iMC44IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHN0eWxlPSJzdHJva2U6IGxpZ2h0LWRhcmsocmdiKDE4NSwgOTQsIDI1NSksIHJnYigxODEsIDEwMywgMjQxKSk7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0gNjUuNSA2NC43NSBMIDEwOS4zNCAzOS40OCBRIDEzMSAyNyAxNTIuNjYgMzkuNDggTCAyNDAuMzQgOTAuMDIgUSAyNjIgMTAyLjUgMjQwLjM0IDExNC45OCBMIDE1Mi42NiAxNjUuNTIgUSAxMzEgMTc4IDEwOS4zNCAxNjUuNTIgTCAyMS42NiAxMTQuOTggUSAwIDEwMi41IDIxLjY2IDkwLjAyIFoiIGZpbGwtb3BhY2l0eT0iMC42NDAwMDAwMDAwMDAwMDAxIiBmaWxsPSJ1cmwoI2RyYXdpby1zdmctRTFmTS11QktEWXZGb1NnWnJqUlUtZ3JhZGllbnQtbGlnaHQtZGFya19lNWNjZmZfNDQyZTVhXy0xLWxpZ2h0LWRhcmtfYjk1ZWZmX2I1NjdmMV8tMS1lLTApIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHN0eWxlPSJmaWxsOiB1cmwoJnF1b3Q7I2RyYXdpby1zdmctRTFmTS11QktEWXZGb1NnWnJqUlUtZ3JhZGllbnQtbGlnaHQtZGFya19lNWNjZmZfNDQyZTVhXy0xLWxpZ2h0LWRhcmtfYjk1ZWZmX2I1NjdmMV8tMS1lLTAmcXVvdDspOyIvPjwvZz48Zz48cGF0aCBkPSJNIDY2IDQ4Ljc1IEwgMTA5Ljg0IDIzLjQ4IFEgMTMxLjUgMTEgMTUzLjE2IDIzLjQ4IEwgMjQwLjg0IDc0LjAyIFEgMjYyLjUgODYuNSAyNDAuODQgOTguOTggTCAxNTMuMTYgMTQ5LjUyIFEgMTMxLjUgMTYyIDEwOS44NCAxNDkuNTIgTCAyMi4xNiA5OC45OCBRIDAuNSA4Ni41IDIyLjE2IDc0LjAyIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2I5NWVmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIiBzdHlsZT0ic3Ryb2tlOiBsaWdodC1kYXJrKHJnYigxODUsIDk0LCAyNTUpLCByZ2IoMTgxLCAxMDMsIDI0MSkpOyIvPjwvZz48Zz48cGF0aCBkPSJNIDY2IDM3Ljc1IEwgMTA5Ljg0IDEyLjQ4IFEgMTMxLjUgMCAxNTMuMTYgMTIuNDggTCAyNDAuODQgNjMuMDIgUSAyNjIuNSA3NS41IDI0MC44NCA4Ny45OCBMIDE1My4xNiAxMzguNTIgUSAxMzEuNSAxNTEgMTA5Ljg0IDEzOC41MiBMIDIyLjE2IDg3Ljk4IFEgMC41IDc1LjUgMjIuMTYgNjMuMDIgWiIgZmlsbD0idXJsKCNkcmF3aW8tc3ZnLUUxZk0tdUJLRFl2Rm9TZ1pyalJVLWdyYWRpZW50LWxpZ2h0LWRhcmtfZTVjY2ZmXzQ0MmU1YV8tMS1saWdodC1kYXJrX2I5NWVmZl9iNTY3ZjFfLTEtZS0wKSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIiBzdHlsZT0iZmlsbDogdXJsKCZxdW90OyNkcmF3aW8tc3ZnLUUxZk0tdUJLRFl2Rm9TZ1pyalJVLWdyYWRpZW50LWxpZ2h0LWRhcmtfZTVjY2ZmXzQ0MmU1YV8tMS1saWdodC1kYXJrX2I5NWVmZl9iNTY3ZjFfLTEtZS0wJnF1b3Q7KTsiLz48L2c+PGc+PGc+PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjYzIiB2aWV3Qm94PSIwIDAgMTA4IDYzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9Ijc3IiB5PSI0My41IiBzdHlsZT0iZm9udC1mYW1pbHk6IGluaXRpYWw7Ij4mI3hhOzxwYXRoIGQ9Ik00OS4yMTcyIDM0LjI2NzFMMjguNzI0NiA0Ni4wOTc1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4mI3hhOzxwYXRoIGQ9Ik03Mi42Mzc0IDUwLjg2MDRMNTQuODA2MSA2MS4xNTQzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4mI3hhOzxwYXRoIGQ9Ik02OS40NDM3IDM3LjY0N0w0MS43NjUzIDUzLjYyNTciIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPiYjeGE7PHBhdGggZD0iTTI4LjcyNDUgMzEuMDQwNUwxNS42ODM4IDM4LjU2OSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0Ii8+JiN4YTs8cGF0aCBkPSJNMjYuMDYzMiAxNy41MkwyLjY0Mjk5IDMxLjA0MDUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPiYjeGE7PHBhdGggZD0iTTM1LjY0NDIgMTAuNDUyNUwzNS43MzI5IDEyLjc5NjhDMzYuMDM5OSAyMC45MDY1IDQ4LjA0MDQgMjcuMjE3MyA2Mi4wNTU3IDI2LjYzOTVWMjYuNjM5NUM3Ny41ODkxIDI1Ljk5OTEgOTAuMjI1IDMzLjc1MzkgODguMTY5MSA0Mi42NjU1TDg3Ljg1NTkgNDQuMDIzMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0Ii8+JiN4YTs8L3N2Zz48L2c+PC9nPjwvZz48L3N2Zz4="}}]);