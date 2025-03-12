"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[43356],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>y});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=d(a),u=i,y=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return a?n.createElement(y,l(l({ref:e},c),{},{components:a})):n.createElement(y,l({ref:e},c))}));function y(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[m]="string"==typeof t?t:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},46647:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={id:"glossary",title:"Glossary",description:"Glossary"},l=void 0,o={unversionedId:"kits/demand-and-capacity-management-kit/adoption-view/glossary",id:"kits/demand-and-capacity-management-kit/adoption-view/glossary",title:"Glossary",description:"Glossary",source:"@site/docs-kits/kits/demand-and-capacity-management-kit/adoption-view/glossary.md",sourceDirName:"kits/demand-and-capacity-management-kit/adoption-view",slug:"/kits/demand-and-capacity-management-kit/adoption-view/glossary",permalink:"/docs-kits/next/kits/demand-and-capacity-management-kit/adoption-view/glossary",draft:!1,tags:[],version:"current",frontMatter:{id:"glossary",title:"Glossary",description:"Glossary"},sidebar:"kits",previous:{title:"Adoption View",permalink:"/docs-kits/next/kits/demand-and-capacity-management-kit/adoption-view/overview"},next:{title:"Use Case",permalink:"/docs-kits/next/category/use-case"}},s={},d=[{value:"DCM Glossary",id:"dcm-glossary",level:2},{value:"Notice",id:"notice",level:2}],c={toc:d};function m(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"DCM kit banner",src:a(97345).Z,width:"264",height:"245"})),(0,i.kt)("h2",{id:"dcm-glossary"},"DCM Glossary"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Term"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Actual Capacity"),(0,i.kt)("td",{parentName:"tr",align:null},"This is the capacity a supplier realistically plans to have available to satisfy the demand of a certain material per week for a specific customer. It considers the supplier\u2019s own assessment of their capabilities, inventory and existing commitments.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Agreed Capacity"),(0,i.kt)("td",{parentName:"tr",align:null},"This is a capacity value coordinated between customer and supplier and it may refer e.g. to capacity values defined in mutually agreed contracts. Using the agreed capacity is optional, it has purely informative character and therefore does not constitute a legal obligation to deliver. The agreed capacity may be greater than, less than or equal to the actual or Maximum Capacity. It may be used for a time frame different than the whole time series.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"API"),(0,i.kt)("td",{parentName:"tr",align:null},"Application Programming Interface is a set of rules, protocols, and tools for building software and applications. Examples for DCM can be found here: ",(0,i.kt)("a",{parentName:"td",href:"/docs-kits/next/kits/demand-and-capacity-management-kit/development-view/overview#apis-utilized-by-a-dcm-application"},"Development View - APIs utilized by a DCM application"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Aspect Model"),(0,i.kt)("td",{parentName:"tr",align:null},"See: ",(0,i.kt)("a",{parentName:"td",href:"https://catenax-ev.github.io/docs/next/standards/overview"},"CX-0002 Digital Twins in Catena-X"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Bottleneck"),(0,i.kt)("td",{parentName:"tr",align:null},"A facility, function, department, or resource whose capacity is less than the demand placed upon it. For example, a bottleneck machine or work center exists where jobs are processed at a slower rate than they are demanded (Source: ASCM Supply Chain Dictionary, 17th edition).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Business Application Provider"),(0,i.kt)("td",{parentName:"tr",align:null},"Typically, it is a third party that offers tools to data consumers and data providers for demand and capacity management purposes that conform to the core business logic, data models and APIs described in the Catena-X DCM standard.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Business Partner Number Legal Entity (BPNL)"),(0,i.kt)("td",{parentName:"tr",align:null},"See: ",(0,i.kt)("a",{parentName:"td",href:"https://catenax-ev.github.io/docs/next/standards/overview"},"CX-0010 Business Partner Number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Business Partner Number Site (BPNS)"),(0,i.kt)("td",{parentName:"tr",align:null},"See: ",(0,i.kt)("a",{parentName:"td",href:"https://catenax-ev.github.io/docs/next/standards/overview"},"CX-0010 Business Partner Number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Calendar Week"),(0,i.kt)("td",{parentName:"tr",align:null},"A week consisting of seven days, typically numbered according to the week containing the year\u2019s first Thursday. For example, if the first Thursday of the year is on January 1st, that week is considered Week 1.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Capacity"),(0,i.kt)("td",{parentName:"tr",align:null},"1. The capability of a system to perform its expected function. 2. The capability of a worker, machine, work center, plant, or organization to produce output per time period. (Source: ASCM Supply Chain Dictionary, 17th edition).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Capacity Group"),(0,i.kt)("td",{parentName:"tr",align:null},"A capacity group is a virtual entity that contains capacity information, which depend on production capabilities (based e.g. on grouping of one or more machines, plants, production lines or similar), as well as the material demands linked to it. The capacity group is the place where demand and capacity information come together and are compared, in order to recognize production bottlenecks and/or surplus. When written as WeekBasedCapacityGroup, it refers to a specific data model within this standard.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Comments"),(0,i.kt)("td",{parentName:"tr",align:null},"A feature that allows two business partners to exchange messages about material demand and capacity, facilitating direct collaboration and quick issue resolution.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Customer"),(0,i.kt)("td",{parentName:"tr",align:null},"A role within the DCM use case, which represents a company that receives goods from its suppliers. Participating companies can have multiple roles at the same time: in this context, a customer provides consistent and up-to-date demand forecast to and receives capacity data from suppliers. Synonym: one-up.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Consumer"),(0,i.kt)("td",{parentName:"tr",align:null},"A data consumer refers to any entity that retrieves and uses data from a source. This can be an individual, application, or system that accesses and processes data for various purposes or simply in context of Catena-X receiving data from a business partner.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Provider"),(0,i.kt)("td",{parentName:"tr",align:null},"A data provider is an entity that supplies or makes data available to others. In case of Catena-X, this can be a business partner supplying information. In the context of information technology and data management, a data provider can be a database, a web service, an API, a file system, or any other system that allows data to be accessed by data consumers.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"(Simulated) Delta-Production"),(0,i.kt)("td",{parentName:"tr",align:null},"This is an optional feature that allows suppliers to manage capacity bottlenecks by simulating changes in production without altering actual or Maximum Capacity values published to customers. See also pre-/post-production.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Demand Deviation"),(0,i.kt)("td",{parentName:"tr",align:null},"This is an optional metric that allows suppliers to monitor changes in customer demands and to identify significant changes that can collaboratively be addressed by suppliers and customers.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Demand Volatility"),(0,i.kt)("td",{parentName:"tr",align:null},"Demand Volatility help suppliers to identify and measure volatility in demands. It allows them to address demand volatility directly to their customers, increasing transparency for a more effective collaborative capacity planning. Demand deviation is the first metric for measuring demand volatility.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Digital Twin"),(0,i.kt)("td",{parentName:"tr",align:null},"See: ",(0,i.kt)("a",{parentName:"td",href:"https://catenax-ev.github.io/docs/next/standards/overview"},"CX-0002 Digital Twins in Catena-X"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Flexible Capacity"),(0,i.kt)("td",{parentName:"tr",align:null},"The difference between maximum and Actual Capacity, which represents the measures to potentially increase capacity without further agreements between partners, such as extending the utilization of production resources within a week.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JSON"),(0,i.kt)("td",{parentName:"tr",align:null},"The JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transferring data in web applications (e.g. sending some data from the server to the client, so it can be displayed on a web page, or vice versa).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Linking Material Demand"),(0,i.kt)("td",{parentName:"tr",align:null},"Material demands can be linked directly to a capacity group or indirectly through another capacity group, which is known as \u201cNesting.\u201d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Load Factor"),(0,i.kt)("td",{parentName:"tr",align:null},"An optional feature of a capacity group that adds individual numerical material load factors to WeekBasedMaterialDemand linked by the WeekBasedCapacityGroup. It adds flexibility to the unit of measure of the capacity group.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Material"),(0,i.kt)("td",{parentName:"tr",align:null},"The elements, constituents, or substances of which something is composed or can be made of. Usually referred to by a material number.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"(Material) Demand"),(0,i.kt)("td",{parentName:"tr",align:null},"A need for a particular product or component. The demand could come from any number of sources (e.g. a customer order or forecast, an interplant requirement, a branch warehouse request for a service part, or the manufacturing of another product). At the finished goods level, demand data is usually different from sales data, because demand does not necessarily result in sales (e.g. if there is no stock, there will be no sale (Source: ASCM Supply Chain Dictionary, 17th edition)). Material demand may comprise multiple demand series by location and demand categories. When the term is written as one word (WeekBasedMaterialDemand), the term refers specifically to the respective aspect model.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Maximum Capacity"),(0,i.kt)("td",{parentName:"tr",align:null},"This is the highest achievable production capacity of a supplier within a given calendar week, in a certain unit of measure, for a specific customer. The Maximum Capacity is equal or higher than the Actual Capacity. It considers further capacity-increasing measures that have been planned upfront between the parties involved and can be activated whenever needed. Capacity-increasing measures can be, e.g. a longer utilization of the available production resources, a shift extension or additional shifts. Secondarily, additional resources can also be activated.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Nesting"),(0,i.kt)("td",{parentName:"tr",align:null},"A method by which a capacity group links to another capacity group (instead to material demand series), allowing for dynamic changes and centralized data management. See also: linking material demand. Synonym: indirect linking")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"One-down"),(0,i.kt)("td",{parentName:"tr",align:null},"Synonym: \u201csupplier\u201d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"One-up"),(0,i.kt)("td",{parentName:"tr",align:null},"Synonym: \u201ccustomer\u201d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Planning Horizon"),(0,i.kt)("td",{parentName:"tr",align:null},"The planning horizon is the amount of time a plan extends into the future (definition: ASCM Dictionary, 17th edition).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Post-production"),(0,i.kt)("td",{parentName:"tr",align:null},"Post-production means goods are produced LATER than the requested calendar week. This feature may be optionally applied by a supplier in the WeekBasedCapacityGroup. See also (Simulated) Delta-Production.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Pre-production"),(0,i.kt)("td",{parentName:"tr",align:null},"Pre-production means goods are produced BEFORE the requested calendar week. This feature may be optionally applied by a supplier in the WeekBasedCapacityGroup. See also (Simulated) Delta-Production.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Semantic Model"),(0,i.kt)("td",{parentName:"tr",align:null},"The semantic model is a conceptual model that represents the meaning of information within a specific context. It goes beyond the structure and syntax of data to define the relationships and rules that govern the properties of entities and the interactions between them. The goal of a semantic model is to capture the intended meaning of data so that it can be unambiguously understood, processed, and shared.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Supplier"),(0,i.kt)("td",{parentName:"tr",align:null},"A role within the DCM use case, which represents a company that supplies goods to its customers. Participating companies can have multiple roles at the same time. Suppliers provide consistent and up-to-date capacity data and receive demands from customers. Synonym: one-down.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Surplus"),(0,i.kt)("td",{parentName:"tr",align:null},"A surplus is a situation in which an oversupply exists. In the DCM context, it is often used to indicate a situation in which unutilized capacity exists. It is the contrary of a bottleneck. Synonym: idle capacity, excess capacity.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UUID"),(0,i.kt)("td",{parentName:"tr",align:null},"A UUID, which stands for Universally Unique Identifier, is a 128-bit number used to uniquely identify information in computer systems. The primary purpose of a UUID is to enable distributed systems to uniquely identify information without significant central coordination. In this way, anyone can create a UUID and use it to identify something with reasonable confidence that the identifier does not duplicate one that has already been, or will be, created to identify something else.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WeekBasedCapacityGroup"),(0,i.kt)("td",{parentName:"tr",align:null},"This term refers to the specific WeekBasedCapacityGroup object defined in the DCM standard.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WeekBasedMaterialDemand"),(0,i.kt)("td",{parentName:"tr",align:null},"This term refers to the specific WeekBasedMaterialDemand object defined in the DCM standard.")))),(0,i.kt)("h2",{id:"notice"},"Notice"),(0,i.kt)("p",null,"This work is licensed under the ",(0,i.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 BASF SE"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 Henkel AG & Co.KGaA"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 SAP SE"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 SupplyOn AG"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 Contributors to the Eclipse Foundation")))}m.isMDXComponent=!0},97345:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IGNvbG9yLXNjaGVtZTogbGlnaHQgZGFyazsiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNjRweCIgaGVpZ2h0PSIyNDVweCIgdmlld0JveD0iLTAuNSAtMC41IDI2NCAyNDUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMTAwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIwJSIgaWQ9ImRyYXdpby1zdmctRTFmTS11QktEWXZGb1NnWnJqUlUtZ3JhZGllbnQtbGlnaHQtZGFya19lNWNjZmZfNDQyZTVhXy0xLWxpZ2h0LWRhcmtfYjk1ZWZmX2I1NjdmMV8tMS1lLTAiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNCOTVFRkYiIHN0b3Atb3BhY2l0eT0iMSIgc3R5bGU9InN0b3AtY29sb3I6IGxpZ2h0LWRhcmsocmdiKDE4NSwgOTQsIDI1NSksIHJnYigxODEsIDEwMywgMjQxKSk7IHN0b3Atb3BhY2l0eTogMTsiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFNUNDRkYiIHN0b3Atb3BhY2l0eT0iMSIgc3R5bGU9InN0b3AtY29sb3I6IGxpZ2h0LWRhcmsocmdiKDIyOSwgMjA0LCAyNTUpLCByZ2IoNjgsIDQ2LCA5MCkpOyBzdG9wLW9wYWNpdHk6IDE7Ii8+PC9saW5lYXJHcmFkaWVudD48c3R5bGUgdHlwZT0idGV4dC9jc3MiPkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWFucm9wZTp3Z2h0QDQwMDs1MDApOyYjeGE7PC9zdHlsZT48L2RlZnM+PGc+PGcvPjxnPjxwYXRoIGQ9Ik0gNjYgMTMwLjc1IEwgMTA5Ljg0IDEwNS40OCBRIDEzMS41IDkzIDE1My4xNiAxMDUuNDggTCAyNDAuODQgMTU2LjAyIFEgMjYyLjUgMTY4LjUgMjQwLjg0IDE4MC45OCBMIDE1My4xNiAyMzEuNTIgUSAxMzEuNSAyNDQgMTA5Ljg0IDIzMS41MiBMIDIyLjE2IDE4MC45OCBRIDAuNSAxNjguNSAyMi4xNiAxNTYuMDIgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYjk1ZWZmIiBzdHJva2Utb3BhY2l0eT0iMC40IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHN0eWxlPSJzdHJva2U6IGxpZ2h0LWRhcmsocmdiKDE4NSwgOTQsIDI1NSksIHJnYigxODEsIDEwMywgMjQxKSk7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0gNjYgMTE5Ljc1IEwgMTA5Ljg0IDk0LjQ4IFEgMTMxLjUgODIgMTUzLjE2IDk0LjQ4IEwgMjQwLjg0IDE0NS4wMiBRIDI2Mi41IDE1Ny41IDI0MC44NCAxNjkuOTggTCAxNTMuMTYgMjIwLjUyIFEgMTMxLjUgMjMzIDEwOS44NCAyMjAuNTIgTCAyMi4xNiAxNjkuOTggUSAwLjUgMTU3LjUgMjIuMTYgMTQ1LjAyIFoiIGZpbGwtb3BhY2l0eT0iMC40IiBmaWxsPSJ1cmwoI2RyYXdpby1zdmctRTFmTS11QktEWXZGb1NnWnJqUlUtZ3JhZGllbnQtbGlnaHQtZGFya19lNWNjZmZfNDQyZTVhXy0xLWxpZ2h0LWRhcmtfYjk1ZWZmX2I1NjdmMV8tMS1lLTApIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHN0eWxlPSJmaWxsOiB1cmwoJnF1b3Q7I2RyYXdpby1zdmctRTFmTS11QktEWXZGb1NnWnJqUlUtZ3JhZGllbnQtbGlnaHQtZGFya19lNWNjZmZfNDQyZTVhXy0xLWxpZ2h0LWRhcmtfYjk1ZWZmX2I1NjdmMV8tMS1lLTAmcXVvdDspOyIvPjwvZz48Zz48cGF0aCBkPSJNIDY2IDEwMi43NSBMIDEwOS44NCA3Ny40OCBRIDEzMS41IDY1IDE1My4xNiA3Ny40OCBMIDI0MC44NCAxMjguMDIgUSAyNjIuNSAxNDAuNSAyNDAuODQgMTUyLjk4IEwgMTUzLjE2IDIwMy41MiBRIDEzMS41IDIxNiAxMDkuODQgMjAzLjUyIEwgMjIuMTYgMTUyLjk4IFEgMC41IDE0MC41IDIyLjE2IDEyOC4wMiBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNiOTVlZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIgc3R5bGU9InN0cm9rZTogbGlnaHQtZGFyayhyZ2IoMTg1LCA5NCwgMjU1KSwgcmdiKDE4MSwgMTAzLCAyNDEpKTsiLz48L2c+PGc+PHBhdGggZD0iTSA2NiA5MC43NSBMIDEwOS44NCA2NS40OCBRIDEzMS41IDUzIDE1My4xNiA2NS40OCBMIDI0MC44NCAxMTYuMDIgUSAyNjIuNSAxMjguNSAyNDAuODQgMTQwLjk4IEwgMTUzLjE2IDE5MS41MiBRIDEzMS41IDIwNCAxMDkuODQgMTkxLjUyIEwgMjIuMTYgMTQwLjk4IFEgMC41IDEyOC41IDIyLjE2IDExNi4wMiBaIiBmaWxsLW9wYWNpdHk9IjAuNDgiIGZpbGw9InVybCgjZHJhd2lvLXN2Zy1FMWZNLXVCS0RZdkZvU2dacmpSVS1ncmFkaWVudC1saWdodC1kYXJrX2U1Y2NmZl80NDJlNWFfLTEtbGlnaHQtZGFya19iOTVlZmZfYjU2N2YxXy0xLWUtMCkiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIgc3R5bGU9ImZpbGw6IHVybCgmcXVvdDsjZHJhd2lvLXN2Zy1FMWZNLXVCS0RZdkZvU2dacmpSVS1ncmFkaWVudC1saWdodC1kYXJrX2U1Y2NmZl80NDJlNWFfLTEtbGlnaHQtZGFya19iOTVlZmZfYjU2N2YxXy0xLWUtMCZxdW90Oyk7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0gNjUuNSA3Ni43NSBMIDEwOS4zNCA1MS40OCBRIDEzMSAzOSAxNTIuNjYgNTEuNDggTCAyNDAuMzQgMTAyLjAyIFEgMjYyIDExNC41IDI0MC4zNCAxMjYuOTggTCAxNTIuNjYgMTc3LjUyIFEgMTMxIDE5MCAxMDkuMzQgMTc3LjUyIEwgMjEuNjYgMTI2Ljk4IFEgMCAxMTQuNSAyMS42NiAxMDIuMDIgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYjk1ZWZmIiBzdHJva2Utb3BhY2l0eT0iMC44IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHN0eWxlPSJzdHJva2U6IGxpZ2h0LWRhcmsocmdiKDE4NSwgOTQsIDI1NSksIHJnYigxODEsIDEwMywgMjQxKSk7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0gNjUuNSA2NC43NSBMIDEwOS4zNCAzOS40OCBRIDEzMSAyNyAxNTIuNjYgMzkuNDggTCAyNDAuMzQgOTAuMDIgUSAyNjIgMTAyLjUgMjQwLjM0IDExNC45OCBMIDE1Mi42NiAxNjUuNTIgUSAxMzEgMTc4IDEwOS4zNCAxNjUuNTIgTCAyMS42NiAxMTQuOTggUSAwIDEwMi41IDIxLjY2IDkwLjAyIFoiIGZpbGwtb3BhY2l0eT0iMC42NDAwMDAwMDAwMDAwMDAxIiBmaWxsPSJ1cmwoI2RyYXdpby1zdmctRTFmTS11QktEWXZGb1NnWnJqUlUtZ3JhZGllbnQtbGlnaHQtZGFya19lNWNjZmZfNDQyZTVhXy0xLWxpZ2h0LWRhcmtfYjk1ZWZmX2I1NjdmMV8tMS1lLTApIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHN0eWxlPSJmaWxsOiB1cmwoJnF1b3Q7I2RyYXdpby1zdmctRTFmTS11QktEWXZGb1NnWnJqUlUtZ3JhZGllbnQtbGlnaHQtZGFya19lNWNjZmZfNDQyZTVhXy0xLWxpZ2h0LWRhcmtfYjk1ZWZmX2I1NjdmMV8tMS1lLTAmcXVvdDspOyIvPjwvZz48Zz48cGF0aCBkPSJNIDY2IDQ4Ljc1IEwgMTA5Ljg0IDIzLjQ4IFEgMTMxLjUgMTEgMTUzLjE2IDIzLjQ4IEwgMjQwLjg0IDc0LjAyIFEgMjYyLjUgODYuNSAyNDAuODQgOTguOTggTCAxNTMuMTYgMTQ5LjUyIFEgMTMxLjUgMTYyIDEwOS44NCAxNDkuNTIgTCAyMi4xNiA5OC45OCBRIDAuNSA4Ni41IDIyLjE2IDc0LjAyIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2I5NWVmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIiBzdHlsZT0ic3Ryb2tlOiBsaWdodC1kYXJrKHJnYigxODUsIDk0LCAyNTUpLCByZ2IoMTgxLCAxMDMsIDI0MSkpOyIvPjwvZz48Zz48cGF0aCBkPSJNIDY2IDM3Ljc1IEwgMTA5Ljg0IDEyLjQ4IFEgMTMxLjUgMCAxNTMuMTYgMTIuNDggTCAyNDAuODQgNjMuMDIgUSAyNjIuNSA3NS41IDI0MC44NCA4Ny45OCBMIDE1My4xNiAxMzguNTIgUSAxMzEuNSAxNTEgMTA5Ljg0IDEzOC41MiBMIDIyLjE2IDg3Ljk4IFEgMC41IDc1LjUgMjIuMTYgNjMuMDIgWiIgZmlsbD0idXJsKCNkcmF3aW8tc3ZnLUUxZk0tdUJLRFl2Rm9TZ1pyalJVLWdyYWRpZW50LWxpZ2h0LWRhcmtfZTVjY2ZmXzQ0MmU1YV8tMS1saWdodC1kYXJrX2I5NWVmZl9iNTY3ZjFfLTEtZS0wKSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIiBzdHlsZT0iZmlsbDogdXJsKCZxdW90OyNkcmF3aW8tc3ZnLUUxZk0tdUJLRFl2Rm9TZ1pyalJVLWdyYWRpZW50LWxpZ2h0LWRhcmtfZTVjY2ZmXzQ0MmU1YV8tMS1saWdodC1kYXJrX2I5NWVmZl9iNTY3ZjFfLTEtZS0wJnF1b3Q7KTsiLz48L2c+PGc+PGc+PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjYzIiB2aWV3Qm94PSIwIDAgMTA4IDYzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9Ijc3IiB5PSI0My41IiBzdHlsZT0iZm9udC1mYW1pbHk6IGluaXRpYWw7Ij4mI3hhOzxwYXRoIGQ9Ik00OS4yMTcyIDM0LjI2NzFMMjguNzI0NiA0Ni4wOTc1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4mI3hhOzxwYXRoIGQ9Ik03Mi42Mzc0IDUwLjg2MDRMNTQuODA2MSA2MS4xNTQzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4mI3hhOzxwYXRoIGQ9Ik02OS40NDM3IDM3LjY0N0w0MS43NjUzIDUzLjYyNTciIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPiYjeGE7PHBhdGggZD0iTTI4LjcyNDUgMzEuMDQwNUwxNS42ODM4IDM4LjU2OSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0Ii8+JiN4YTs8cGF0aCBkPSJNMjYuMDYzMiAxNy41MkwyLjY0Mjk5IDMxLjA0MDUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPiYjeGE7PHBhdGggZD0iTTM1LjY0NDIgMTAuNDUyNUwzNS43MzI5IDEyLjc5NjhDMzYuMDM5OSAyMC45MDY1IDQ4LjA0MDQgMjcuMjE3MyA2Mi4wNTU3IDI2LjYzOTVWMjYuNjM5NUM3Ny41ODkxIDI1Ljk5OTEgOTAuMjI1IDMzLjc1MzkgODguMTY5MSA0Mi42NjU1TDg3Ljg1NTkgNDQuMDIzMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0Ii8+JiN4YTs8L3N2Zz48L2c+PC9nPjwvZz48L3N2Zz4="}}]);