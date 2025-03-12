"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[40351],{3905:(e,i,M)=>{M.d(i,{Zo:()=>c,kt:()=>j});var a=M(67294);function t(e,i,M){return i in e?Object.defineProperty(e,i,{value:M,enumerable:!0,configurable:!0,writable:!0}):e[i]=M,e}function I(e,i){var M=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),M.push.apply(M,a)}return M}function N(e){for(var i=1;i<arguments.length;i++){var M=null!=arguments[i]?arguments[i]:{};i%2?I(Object(M),!0).forEach((function(i){t(e,i,M[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(M)):I(Object(M)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(M,i))}))}return e}function n(e,i){if(null==e)return{};var M,a,t=function(e,i){if(null==e)return{};var M,a,t={},I=Object.keys(e);for(a=0;a<I.length;a++)M=I[a],i.indexOf(M)>=0||(t[M]=e[M]);return t}(e,i);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(e);for(a=0;a<I.length;a++)M=I[a],i.indexOf(M)>=0||Object.prototype.propertyIsEnumerable.call(e,M)&&(t[M]=e[M])}return t}var g=a.createContext({}),l=function(e){var i=a.useContext(g),M=i;return e&&(M="function"==typeof e?e(i):N(N({},i),e)),M},c=function(e){var i=l(e.components);return a.createElement(g.Provider,{value:i},e.children)},D="mdxType",d={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},u=a.forwardRef((function(e,i){var M=e.components,t=e.mdxType,I=e.originalType,g=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),D=l(M),u=t,j=D["".concat(g,".").concat(u)]||D[u]||d[u]||I;return M?a.createElement(j,N(N({ref:i},c),{},{components:M})):a.createElement(j,N({ref:i},c))}));function j(e,i){var M=arguments,t=i&&i.mdxType;if("string"==typeof e||t){var I=M.length,N=new Array(I);N[0]=u;var n={};for(var g in i)hasOwnProperty.call(i,g)&&(n[g]=i[g]);n.originalType=e,n[D]="string"==typeof e?e:t,N[1]=n;for(var l=2;l<I;l++)N[l]=M[l];return a.createElement.apply(null,N)}return a.createElement.apply(null,M)}u.displayName="MDXCreateElement"},87145:(e,i,M)=>{M.r(i),M.d(i,{assets:()=>g,contentTitle:()=>N,default:()=>D,frontMatter:()=>I,metadata:()=>n,toc:()=>l});var a=M(87462),t=(M(67294),M(3905));const I={id:"nesting",title:"Nesting",description:"Nest material demands and capacity groups into other capacity groups",sidebar_position:8},N=void 0,n={unversionedId:"kits/demand-and-capacity-management-kit/adoption-view/use-case/nesting",id:"version-24.12/kits/demand-and-capacity-management-kit/adoption-view/use-case/nesting",title:"Nesting",description:"Nest material demands and capacity groups into other capacity groups",source:"@site/docs-kits_versioned_docs/version-24.12/kits/demand-and-capacity-management-kit/adoption-view/use-case/nesting.md",sourceDirName:"kits/demand-and-capacity-management-kit/adoption-view/use-case",slug:"/kits/demand-and-capacity-management-kit/adoption-view/use-case/nesting",permalink:"/docs-kits/kits/demand-and-capacity-management-kit/adoption-view/use-case/nesting",draft:!1,tags:[],version:"24.12",sidebarPosition:8,frontMatter:{id:"nesting",title:"Nesting",description:"Nest material demands and capacity groups into other capacity groups",sidebar_position:8},sidebar:"kits",previous:{title:"Supply Chain Disruption Notification",permalink:"/docs-kits/kits/demand-and-capacity-management-kit/adoption-view/use-case/disruption-notification"},next:{title:"Onboarding",permalink:"/docs-kits/kits/demand-and-capacity-management-kit/adoption-view/onboarding"}},g={},l=[{value:"Business Roles and Functions",id:"business-roles-and-functions",level:2},{value:"Business Value",id:"business-value",level:2},{value:"Advantages",id:"advantages",level:3},{value:"Functional Description",id:"functional-description",level:2},{value:"Considerations",id:"considerations",level:3},{value:"Sequence Diagram",id:"sequence-diagram",level:2},{value:"Example",id:"example",level:2},{value:"Notice",id:"notice",level:2}],c={toc:l};function D(e){let{components:i,...I}=e;return(0,t.kt)("wrapper",(0,a.Z)({},c,I,{components:i,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"DCM kit banner",src:M(93191).Z,width:"285",height:"245"})),(0,t.kt)("h2",{id:"business-roles-and-functions"},"Business Roles and Functions"),(0,t.kt)("p",null,"Nesting is a feature defined in the DCM standard ",(0,t.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange")," and includes an advanced property of the Capacity Group structure and therefore may be used optionally by suppliers. The Nesting feature is embedded into the WeekBasedCapacityGroup aspect model. This means that only suppliers may apply Nesting and customers consume it."),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Function / Role"),(0,t.kt)("th",{parentName:"tr",align:null},"Customer"),(0,t.kt)("th",{parentName:"tr",align:null},"Supplier"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"Define Nesting in a Capacity Group"),(0,t.kt)("td",{parentName:"tr",align:null}),(0,t.kt)("td",{parentName:"tr",align:null},"X")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"Inform business partners about Nesting via data transfer"),(0,t.kt)("td",{parentName:"tr",align:null}),(0,t.kt)("td",{parentName:"tr",align:null},"X")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"Receive Nesting information"),(0,t.kt)("td",{parentName:"tr",align:null},"X"),(0,t.kt)("td",{parentName:"tr",align:null})))),(0,t.kt)("h2",{id:"business-value"},"Business Value"),(0,t.kt)("p",null,"Nesting may be used by suppliers for the following purposes (but not limited to):"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"To simplify the maintenance of Capacity Groups"),(0,t.kt)("li",{parentName:"ul"},"To enable the bundling of several smaller Capacity Groups to reflect a (virtual, internal) company structure")),(0,t.kt)("h3",{id:"advantages"},"Advantages"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Avoid increased maintenance efforts if same Material Demands may be required for another Capacity Group"),(0,t.kt)("li",{parentName:"ul"},"Allows to provide additional transparency to customers")),(0,t.kt)("h2",{id:"functional-description"},"Functional Description"),(0,t.kt)("p",null,"Nesting is an indirect linking of Material Demand information to a Capacity Group done by a supplier. It involves connecting the WeekBasedCapacityGroup to another WeekBasedCapacityGroup that is already linked to a WeekBasedMaterialDemand.\nSuppliers may apply Nesting within WeekBasedCapacityGroup aspect model via the parameter ",(0,t.kt)("inlineCode",{parentName:"p"},"linkedCapacityGroups"),"."),(0,t.kt)("p",null,"For more transparent collaboration, a supplier may also aggregate two or more Capacity Groups and share this aggregated Capacity Group with its customer,\u202fif all aggregated Capacity Groups refer to the same customer (BPNL).\nNesting helps\u202fsuppliers for example to map\u202fthe internal production sequence in the Capacity Groups, e.g. the combination of two production lines into one final assembly line can be mapped by linking the two Capacity Groups of the preceding lines into another Capacity Group (see ",(0,t.kt)("a",{parentName:"p",href:"#example"},"Example"),").\nThe same applies to multiple production plants representing\u202fa customer's total allocated capacity for materials."),(0,t.kt)("p",null,"The supplier is able to put the desired Capacity Groups with their respective demands and capacities together and then share it with the customer."),(0,t.kt)("p",null,"Consolidation is performed only on the demand and\u202fnot\u202fon the capacity side when Nesting is used: all related capacity information is fully independent, i.e. the capacity data in the Capacity Group must be maintained individually. If a Capacity Group contains linked Capacity Groups, then the Material Demands of these linked Capacity Groups are summed up and used as aggregated demand. The supplier must either link individual Material Demands or link existing Capacity Groups in the Capacity Group."),(0,t.kt)("p",null,"The following figure shows that:\u202f "),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Capacity Group 1 and 2 are linked to Capacity Group 3 (i.e. Nesting or indirect linking).\u202f "),(0,t.kt)("li",{parentName:"ul"},"Material Demand 1 and 2 are linked to Capacity Group 1 (i.e. direct linking)."),(0,t.kt)("li",{parentName:"ul"},"Material Demand 3 and 4 are linked to Capacity Group 2 (i.e. direct linking)."),(0,t.kt)("li",{parentName:"ul"},"Capacity Group 3 considers the Material Demands 1, 2, 3 and 4 because they are indirectly linked via the nested Capacity Group.")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Simple nesting example",src:M(25911).Z,width:"1440",height:"642"}),"\n",(0,t.kt)("img",{alt:"Simple nesting example legend",src:M(30692).Z,width:"1899",height:"72"})),(0,t.kt)("p",null,"Figure: ",(0,t.kt)("em",{parentName:"p"},"Capacity Group with directly linked Material Demands or nested Capacity Groups (indirectly linked Material Demands)")),(0,t.kt)("p",null,"Capacity Group 3 is the result of the indirect way of linking Material Demand, therefore it must not contain any additional directly linked Material Demands."),(0,t.kt)("p",null,'If a linked Capacity Group contains further linked Capacity Groups (dark green in figure below), the Nesting is recurrent and must go further until referenced Capacity Groups contain only linked demand series\u202f(orange in figure below) ("domino effect").'),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Recurrent nested Capacity Groups",src:M(44993).Z,width:"4456",height:"2048"})),(0,t.kt)("p",null,"Figure: ",(0,t.kt)("em",{parentName:"p"},"Recurrent nested Capacity Groups")),(0,t.kt)("h3",{id:"considerations"},"Considerations"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"It must not be possible to have a combination of directly linked Material Demand series and linked Capacity Groups (Nesting) within the same Capacity Group."),(0,t.kt)("li",{parentName:"ul"},"Suppliers can use comments to provide customers with additional information about the Nesting. For more details on this communication feature, see chapter 5.9 in ",(0,t.kt)("a",{parentName:"li",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange")," or ",(0,t.kt)("a",{parentName:"li",href:"/docs-kits/kits/demand-and-capacity-management-kit/adoption-view/use-case/comments"},"Comments")," page in DCM Kit of Tractus-X."),(0,t.kt)("li",{parentName:"ul"},'Suppliers should be carefully applying recurring linked Capacity Groups ("domino effect"), because of the complexity of keeping track on changes and in maintenance. It is more difficult to identify and understand demand changes and where they are originating from (e.g. which part).')),(0,t.kt)("p",null,"Feature Nesting is to be used optional but if it is used certain parameters are required to be filled."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Parameters of the Nesting are as follows:")),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Main Parameters"),(0,t.kt)("th",{parentName:"tr",align:null},"Required?"),(0,t.kt)("th",{parentName:"tr",align:null},"Description"),(0,t.kt)("th",{parentName:"tr",align:null},"Example"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"linkedCapacityGroups"),(0,t.kt)("td",{parentName:"tr",align:null},"No"),(0,t.kt)("td",{parentName:"tr",align:null},"UUID of the linked Capacity Group"),(0,t.kt)("td",{parentName:"tr",align:null},"0157ba42-d2a8-4e28-8565-7b07830c1110")))),(0,t.kt)("p",null,"For further details please refer to ",(0,t.kt)("a",{parentName:"p",href:"/docs-kits/kits/demand-and-capacity-management-kit/development-view/model-WeekBasedCapacityGroup"},"Aspect Model - WeekBasedCapacityGroup"),"."),(0,t.kt)("h2",{id:"sequence-diagram"},"Sequence Diagram"),(0,t.kt)("mermaid",{value:'sequenceDiagram\nautonumber\nParticipant c as Customer\nParticipant s as Supplier\nrect rgb(191,113,00) \n    c->>s: I need 60 pieces of toy 1, 40 pieces of toy 2 and 50 pieces of toy 3\n    c->>s: I need 100 pieces of toy 4 and 70 pieces of toy 5\nend\ns->>s: Toys 1, 2 and 3 are produced on line 1, toys 4 and 5 on line 2 and all toys have to pass through paint shop\nrect rgb(64,74,00)\n    autonumber off\n    s--\x3e>c: Your demand and my capacities need to be assigned to 3 different capacity groups.\n    autonumber 4\n    s->>c: Toys 1, 2 and 3 are part of capacity group "Production Line 1"\n    s->>c: Toys 4 and 5 are part of capacity group "Production Line 2"\n    autonumber off\n    s--\x3e>c: All toys have to be colored in the paint shop\n    autonumber 6\n    s->>c: Nesting "Production Line 1" and "Production Line 2" in "Paint Shop" instead of linking each Material Demand separately again\nend\nc->>c: My demands for all 5 toys are interlinked and transparent that they affect same capacity together'}),(0,t.kt)("p",null,"Figure: ",(0,t.kt)("em",{parentName:"p"},"Utilizing nesting to structure demand and capacity data")),(0,t.kt)("p",null,"For further details, please refer to ",(0,t.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange"),"."),(0,t.kt)("h2",{id:"example"},"Example"),(0,t.kt)("p",null,"The supplier produces five different toys on two different production lines for the customer. Afterwards the produced toys of both production lines are colored in the same paint shop.\nAll five toys pass through the same paint shop within the coloring process."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Production line 1 is used to produce toys 1, 2 and 3 for the customer."),(0,t.kt)("li",{parentName:"ul"},"Production line 2 is used to produce toys 4 and 5 for the customer."),(0,t.kt)("li",{parentName:"ul"},'The supplier has created a Capacity Group "Production Line 1" with the directly linked Material Demands of toys 1, 2 and 3.'),(0,t.kt)("li",{parentName:"ul"},'The supplier has also created a Capacity Group "Production Line 2" with the directly linked Material Demands of toys 4 and 5.'),(0,t.kt)("li",{parentName:"ul"},'For the paint shop the supplier has created another Capacity Group "Paint Shop", but without directly linked Material Demands. Instead, the supplier linked the Capacity Groups "Production Line 1" and "Production Line 2".'),(0,t.kt)("li",{parentName:"ul"},'The customer requires 60 pieces of toy 1, 40 pieces of toy 2 and 50 pieces of toy 3 in the respective week. Therefore the Capacity Group "Production Line 1" has an aggregated Material Demand of 150 pieces per week.'),(0,t.kt)("li",{parentName:"ul"},'Of toy 4, the customer wants 100 pieces and of toy 5 70 pieces in the respective week. Accordingly the related Capacity Group "Production Line 2" shows an aggregated Material Demand of 170 pieces per week.')),(0,t.kt)("p",null,'With the Nesting, the supplier achieves that the latest Material Demands that are linked to "Production Line 1" and "Production Line 2" are automatically available and considered in his Capacity Group "Paint Shop" without any further activities. Also in case a new toy 6 would be requested by same customer and produced on e.g. "Production Line 2", the supplier would only need to add it to that Capacity Group and automatically its Material Demand would also be considered in the Capacity Group "Paint Shop", thus also avoiding time-consuming additional maintenance on the demand side for "Paint Shop" Capacity Group.'),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Advanced Nesting example",src:M(25911).Z,width:"1440",height:"642"}),"\n",(0,t.kt)("img",{alt:"Advanced Nesting example Legend",src:M(30692).Z,width:"1899",height:"72"})),(0,t.kt)("p",null,"Figure: ",(0,t.kt)("em",{parentName:"p"},"Example for application of Nesting")),(0,t.kt)("p",null,"For further details, please refer to ",(0,t.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange"),"."),(0,t.kt)("h2",{id:"notice"},"Notice"),(0,t.kt)("p",null,"This work is licensed under the ",(0,t.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,t.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 BearingPoint Holding B.V"),(0,t.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 SAP SE"),(0,t.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 Volvo Car Corporation"),(0,t.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 Contributors to the Eclipse Foundation")))}D.isMDXComponent=!0},25911:(e,i,M)=>{M.d(i,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI2NDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIG92ZXJmbG93PSJoaWRkZW4iPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjkwIC0xNTMpIj48cGF0aCBkPSJNMjMwNS41IDE2NS4xNjdDMjMwNS41IDE1OS4yNzYgMjMxMC4yOCAxNTQuNSAyMzE2LjE3IDE1NC41TDM3MDUuODMgMTU0LjVDMzcxMS43MiAxNTQuNSAzNzE2LjUgMTU5LjI3NiAzNzE2LjUgMTY1LjE2N0wzNzE2LjUgMjA3LjgzM0MzNzE2LjUgMjEzLjcyNCAzNzExLjcyIDIxOC41IDM3MDUuODMgMjE4LjVMMjMxNi4xNyAyMTguNUMyMzEwLjI4IDIxOC41IDIzMDUuNSAyMTMuNzI0IDIzMDUuNSAyMDcuODMzWiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuNDM3NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjgiIGZpbGw9IiNCM0NCMkQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjx0ZXh0IGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDI4OTguMTcgMTk3KSI+Q2FwYWNpdHkgR3JvdXAgMzwvdGV4dD48cGF0aCBkPSJNMjMwNS41IDI0My4xNjdDMjMwNS41IDIzNy4yNzYgMjMxMC4yOCAyMzIuNSAyMzE2LjE3IDIzMi41TDI4MzMuODMgMjMyLjVDMjgzOS43MiAyMzIuNSAyODQ0LjUgMjM3LjI3NiAyODQ0LjUgMjQzLjE2N0wyODQ0LjUgMjg1LjgzM0MyODQ0LjUgMjkxLjcyNCAyODM5LjcyIDI5Ni41IDI4MzMuODMgMjk2LjVMMjMxNi4xNyAyOTYuNUMyMzEwLjI4IDI5Ni41IDIzMDUuNSAyOTEuNzI0IDIzMDUuNSAyODUuODMzWiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuNDM3NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjgiIHN0cm9rZS1kYXNoYXJyYXk9IjEzLjc1IDEwLjMxMjUiIGZpbGw9IiM2MTcwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjx0ZXh0IGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDI0NjIuMDcgMjc1KSI+Q2FwYWNpdHkgR3JvdXAgMTwvdGV4dD48cGF0aCBkPSJNMjMwNS41IDMyMS4xNjdDMjMwNS41IDMxNS4yNzYgMjMxMC4yOCAzMTAuNSAyMzE2LjE3IDMxMC41TDI1NTcuODMgMzEwLjVDMjU2My43MiAzMTAuNSAyNTY4LjUgMzE1LjI3NiAyNTY4LjUgMzIxLjE2N0wyNTY4LjUgMzYzLjgzM0MyNTY4LjUgMzY5LjcyNCAyNTYzLjcyIDM3NC41IDI1NTcuODMgMzc0LjVMMjMxNi4xNyAzNzQuNUMyMzEwLjI4IDM3NC41IDIzMDUuNSAzNjkuNzI0IDIzMDUuNSAzNjMuODMzWiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuNDM3NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjgiIHN0cm9rZS1kYXNoYXJyYXk9IjEzLjc1IDEwLjMxMjUiIGZpbGw9IiNCRjcxMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjx0ZXh0IGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDIzMDkuOTkgMzUzKSI+TWF0ZXJpYWwgRGVtYW5kIDE8L3RleHQ+PHBhdGggZD0iTTI1ODAuNSAzMjAuMTY3QzI1ODAuNSAzMTQuMjc2IDI1ODUuMjggMzA5LjUgMjU5MS4xNyAzMDkuNUwyODMzLjgzIDMwOS41QzI4MzkuNzIgMzA5LjUgMjg0NC41IDMxNC4yNzYgMjg0NC41IDMyMC4xNjdMMjg0NC41IDM2Mi44MzNDMjg0NC41IDM2OC43MjQgMjgzOS43MiAzNzMuNSAyODMzLjgzIDM3My41TDI1OTEuMTcgMzczLjVDMjU4NS4yOCAzNzMuNSAyNTgwLjUgMzY4LjcyNCAyNTgwLjUgMzYyLjgzM1oiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIzLjQzNzUiIHN0cm9rZS1taXRlcmxpbWl0PSI4IiBzdHJva2UtZGFzaGFycmF5PSIxMy43NSAxMC4zMTI1IiBmaWxsPSIjQkY3MTAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48dGV4dCBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iQ2FsaWJyaSxDYWxpYnJpX01TRm9udFNlcnZpY2Usc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1zaXplPSIyOCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAyNTg1LjUxIDM1MSkiPk1hdGVyaWFsIERlbWFuZCAyPC90ZXh0PjxwYXRoIGQ9Ik0zMTc3LjUgMjQzLjE2N0MzMTc3LjUgMjM3LjI3NiAzMTgyLjI4IDIzMi41IDMxODguMTcgMjMyLjVMMzcwNS44MyAyMzIuNUMzNzExLjcyIDIzMi41IDM3MTYuNSAyMzcuMjc2IDM3MTYuNSAyNDMuMTY3TDM3MTYuNSAyODUuODMzQzM3MTYuNSAyOTEuNzI0IDM3MTEuNzIgMjk2LjUgMzcwNS44MyAyOTYuNUwzMTg4LjE3IDI5Ni41QzMxODIuMjggMjk2LjUgMzE3Ny41IDI5MS43MjQgMzE3Ny41IDI4NS44MzNaIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy40Mzc1IiBzdHJva2UtbWl0ZXJsaW1pdD0iOCIgc3Ryb2tlLWRhc2hhcnJheT0iMTMuNzUgMTAuMzEyNSIgZmlsbD0iIzYxNzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHRleHQgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9IkNhbGlicmksQ2FsaWJyaV9NU0ZvbnRTZXJ2aWNlLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZvbnQtc2l6ZT0iMjgiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMzMzNC4yNiAyNzUpIj5DYXBhY2l0eSBHcm91cCAyPC90ZXh0PjxwYXRoIGQ9Ik0zMTc3LjUgMzIxLjE2N0MzMTc3LjUgMzE1LjI3NiAzMTgyLjI4IDMxMC41IDMxODguMTcgMzEwLjVMMzQyOS44MyAzMTAuNUMzNDM1LjcyIDMxMC41IDM0NDAuNSAzMTUuMjc2IDM0NDAuNSAzMjEuMTY3TDM0NDAuNSAzNjMuODMzQzM0NDAuNSAzNjkuNzI0IDM0MzUuNzIgMzc0LjUgMzQyOS44MyAzNzQuNUwzMTg4LjE3IDM3NC41QzMxODIuMjggMzc0LjUgMzE3Ny41IDM2OS43MjQgMzE3Ny41IDM2My44MzNaIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy40Mzc1IiBzdHJva2UtbWl0ZXJsaW1pdD0iOCIgc3Ryb2tlLWRhc2hhcnJheT0iMTMuNzUgMTAuMzEyNSIgZmlsbD0iI0JGNzEwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHRleHQgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9IkNhbGlicmksQ2FsaWJyaV9NU0ZvbnRTZXJ2aWNlLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZvbnQtc2l6ZT0iMjgiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMzE4Mi4xOCAzNTMpIj5NYXRlcmlhbCBEZW1hbmQgMzwvdGV4dD48cGF0aCBkPSJNMzQ1Mi41IDMyMC4xNjdDMzQ1Mi41IDMxNC4yNzYgMzQ1Ny4yOCAzMDkuNSAzNDYzLjE3IDMwOS41TDM3MDUuODMgMzA5LjVDMzcxMS43MiAzMDkuNSAzNzE2LjUgMzE0LjI3NiAzNzE2LjUgMzIwLjE2N0wzNzE2LjUgMzYyLjgzM0MzNzE2LjUgMzY4LjcyNCAzNzExLjcyIDM3My41IDM3MDUuODMgMzczLjVMMzQ2My4xNyAzNzMuNUMzNDU3LjI4IDM3My41IDM0NTIuNSAzNjguNzI0IDM0NTIuNSAzNjIuODMzWiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuNDM3NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjgiIHN0cm9rZS1kYXNoYXJyYXk9IjEzLjc1IDEwLjMxMjUiIGZpbGw9IiNCRjcxMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjx0ZXh0IGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDM0NTcuNyAzNTEpIj5NYXRlcmlhbCBEZW1hbmQgNDwvdGV4dD48cGF0aCBkPSJNMjUyMy41IDQ4NS44NiAyNTc0LjUgNDY4LjUgMjYyNS41IDQ4NS44NiAyNjAwIDQ4NS44NiAyNjAwIDU1Mi41IDI1NDkgNTUyLjUgMjU0OSA0ODUuODZaIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy40Mzc1IiBzdHJva2UtbWl0ZXJsaW1pdD0iOCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTMzOTUuNSA0ODUuODYgMzQ0Ni41IDQ2OC41IDM0OTcuNSA0ODUuODYgMzQ3MiA0ODUuODYgMzQ3MiA1NTIuNSAzNDIxIDU1Mi41IDM0MjEgNDg1Ljg2WiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuNDM3NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjgiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik0yMzA1LjUgNjU3QzIzMDUuNSA2NTEuMjAxIDIzMTAuMiA2NDYuNSAyMzE2IDY0Ni41TDI4MzQgNjQ2LjVDMjgzOS44IDY0Ni41IDI4NDQuNSA2NTEuMjAxIDI4NDQuNSA2NTdMMjg0NC41IDY5OUMyODQ0LjUgNzA0Ljc5OSAyODM5LjggNzA5LjUgMjgzNCA3MDkuNUwyMzE2IDcwOS41QzIzMTAuMiA3MDkuNSAyMzA1LjUgNzA0Ljc5OSAyMzA1LjUgNjk5WiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuNDM3NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjgiIGZpbGw9IiNCM0NCMkQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjx0ZXh0IGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDI0NjIuMDcgNjg4KSI+Q2FwYWNpdHkgR3JvdXAgMTwvdGV4dD48cGF0aCBkPSJNMjMwNS41IDczNS4xNjdDMjMwNS41IDcyOS4yNzYgMjMxMC4yOCA3MjQuNSAyMzE2LjE3IDcyNC41TDI1NTcuODMgNzI0LjVDMjU2My43MiA3MjQuNSAyNTY4LjUgNzI5LjI3NiAyNTY4LjUgNzM1LjE2N0wyNTY4LjUgNzc3LjgzM0MyNTY4LjUgNzgzLjcyNCAyNTYzLjcyIDc4OC41IDI1NTcuODMgNzg4LjVMMjMxNi4xNyA3ODguNUMyMzEwLjI4IDc4OC41IDIzMDUuNSA3ODMuNzI0IDIzMDUuNSA3NzcuODMzWiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuNDM3NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjgiIGZpbGw9IiNGRkE2MDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjx0ZXh0IGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDIzMDkuOTkgNzY3KSI+TWF0ZXJpYWwgRGVtYW5kIDE8L3RleHQ+PHBhdGggZD0iTTI1ODAuNSA3MzRDMjU4MC41IDcyOC4yMDEgMjU4NS4yIDcyMy41IDI1OTEgNzIzLjVMMjgzNCA3MjMuNUMyODM5LjggNzIzLjUgMjg0NC41IDcyOC4yMDEgMjg0NC41IDczNEwyODQ0LjUgNzc2QzI4NDQuNSA3ODEuNzk5IDI4MzkuOCA3ODYuNSAyODM0IDc4Ni41TDI1OTEgNzg2LjVDMjU4NS4yIDc4Ni41IDI1ODAuNSA3ODEuNzk5IDI1ODAuNSA3NzZaIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy40Mzc1IiBzdHJva2UtbWl0ZXJsaW1pdD0iOCIgZmlsbD0iI0ZGQTYwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHRleHQgZm9udC1mYW1pbHk9IkNhbGlicmksQ2FsaWJyaV9NU0ZvbnRTZXJ2aWNlLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZvbnQtc2l6ZT0iMjgiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMjU4NS41MSA3NjUpIj5NYXRlcmlhbCBEZW1hbmQgMjwvdGV4dD48cGF0aCBkPSJNMzE3Ny41IDY1N0MzMTc3LjUgNjUxLjIwMSAzMTgyLjIgNjQ2LjUgMzE4OCA2NDYuNUwzNzA2IDY0Ni41QzM3MTEuOCA2NDYuNSAzNzE2LjUgNjUxLjIwMSAzNzE2LjUgNjU3TDM3MTYuNSA2OTlDMzcxNi41IDcwNC43OTkgMzcxMS44IDcwOS41IDM3MDYgNzA5LjVMMzE4OCA3MDkuNUMzMTgyLjIgNzA5LjUgMzE3Ny41IDcwNC43OTkgMzE3Ny41IDY5OVoiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIzLjQzNzUiIHN0cm9rZS1taXRlcmxpbWl0PSI4IiBmaWxsPSIjQjNDQjJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48dGV4dCBmb250LWZhbWlseT0iQ2FsaWJyaSxDYWxpYnJpX01TRm9udFNlcnZpY2Usc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1zaXplPSIyOCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzMzM0LjI2IDY4OCkiPkNhcGFjaXR5IEdyb3VwIDI8L3RleHQ+PHBhdGggZD0iTTMxNzcuNSA3MzUuMTY3QzMxNzcuNSA3MjkuMjc2IDMxODIuMjggNzI0LjUgMzE4OC4xNyA3MjQuNUwzNDI5LjgzIDcyNC41QzM0MzUuNzIgNzI0LjUgMzQ0MC41IDcyOS4yNzYgMzQ0MC41IDczNS4xNjdMMzQ0MC41IDc3Ny44MzNDMzQ0MC41IDc4My43MjQgMzQzNS43MiA3ODguNSAzNDI5LjgzIDc4OC41TDMxODguMTcgNzg4LjVDMzE4Mi4yOCA3ODguNSAzMTc3LjUgNzgzLjcyNCAzMTc3LjUgNzc3LjgzM1oiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIzLjQzNzUiIHN0cm9rZS1taXRlcmxpbWl0PSI4IiBmaWxsPSIjRkZBNjAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48dGV4dCBmb250LWZhbWlseT0iQ2FsaWJyaSxDYWxpYnJpX01TRm9udFNlcnZpY2Usc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1zaXplPSIyOCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzMTgyLjE4IDc2NykiPk1hdGVyaWFsIERlbWFuZCAzPC90ZXh0PjxwYXRoIGQ9Ik0zNDUyLjUgNzM0QzM0NTIuNSA3MjguMjAxIDM0NTcuMiA3MjMuNSAzNDYzIDcyMy41TDM3MDYgNzIzLjVDMzcxMS44IDcyMy41IDM3MTYuNSA3MjguMjAxIDM3MTYuNSA3MzRMMzcxNi41IDc3NkMzNzE2LjUgNzgxLjc5OSAzNzExLjggNzg2LjUgMzcwNiA3ODYuNUwzNDYzIDc4Ni41QzM0NTcuMiA3ODYuNSAzNDUyLjUgNzgxLjc5OSAzNDUyLjUgNzc2WiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuNDM3NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjgiIGZpbGw9IiNGRkE2MDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjx0ZXh0IGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDM0NTcuNyA3NjUpIj5NYXRlcmlhbCBEZW1hbmQgNDwvdGV4dD48L2c+PC9zdmc+"},44993:(e,i,M)=>{M.d(i,{Z:()=>a});const a=M.p+"assets/images/business-process_nesting_example-recurrent-05276dd74bbd06d4c215edc9e2148d5a.svg"},30692:(e,i,M)=>{M.d(i,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg5OSIgaGVpZ2h0PSI3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgb3ZlcmZsb3c9ImhpZGRlbiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxMzQgLTExNzIpIj48cmVjdCB4PSIyMTM1LjUiIHk9IjExNzQuNSIgd2lkdGg9IjQ2MCIgaGVpZ2h0PSI2My45OTk5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy40Mzc1IiBzdHJva2UtbWl0ZXJsaW1pdD0iOCIgZmlsbD0iI0ZGQTYwMCIvPjx0ZXh0IGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDIxNzEuMzggMTIxNikiPkRlbWFuZCBkYXRhIChkaXJlY3RseSBsaW5rZWQpPC90ZXh0PjxyZWN0IHg9IjI2MTQuNSIgeT0iMTE3My41IiB3aWR0aD0iNDU5IiBoZWlnaHQ9IjYzLjk5OTkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIzLjQzNzUiIHN0cm9rZS1taXRlcmxpbWl0PSI4IiBzdHJva2UtZGFzaGFycmF5PSIxMy43NSAxMC4zMTI1IiBmaWxsPSIjQkY3MTAwIi8+PHRleHQgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9IkNhbGlicmksQ2FsaWJyaV9NU0ZvbnRTZXJ2aWNlLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZvbnQtc2l6ZT0iMjgiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMjYzOC4xOSAxMjE2KSI+RGVtYW5kIGRhdGEgKGluZGlyZWN0bHkgbGlua2VkKTwvdGV4dD48cmVjdCB4PSIzMDkzLjUiIHk9IjExNzQuNSIgd2lkdGg9IjQ1OSIgaGVpZ2h0PSI2My45OTk5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy40Mzc1IiBzdHJva2UtbWl0ZXJsaW1pdD0iOCIgZmlsbD0iI0IzQ0IyRCIvPjx0ZXh0IGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDMyMzMuOSAxMjE2KSI+Q2FwYWNpdHkgZGF0YTwvdGV4dD48cmVjdCB4PSIzNTcxLjUiIHk9IjExNzMuNSIgd2lkdGg9IjQ2MCIgaGVpZ2h0PSI2My45OTk5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy40Mzc1IiBzdHJva2UtbWl0ZXJsaW1pdD0iOCIgc3Ryb2tlLWRhc2hhcnJheT0iMTMuNzUgMTAuMzEyNSIgZmlsbD0iIzYxNzAwMCIvPjx0ZXh0IGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDM1OTMuODYgMTIxNikiPkNhcGFjaXR5IGRhdGEgKGxpbmtlZCBvciBuZXN0ZWQpPC90ZXh0PjwvZz48L3N2Zz4="},93191:(e,i,M)=>{M.d(i,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg1IiBoZWlnaHQ9IjI0NSIgdmlld0JveD0iMCAwIDI4NSAyNDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xXzE4MDYpIj4KPHBhdGggZD0iTTEyMy4wNDggOTEuODM2OUMxMzMuNzA1IDg1LjY4NDQgMTUwLjk4NSA4NS42ODQ0IDE2MS42NDIgOTEuODM2OUwyNTQuMzQ1IDE0NS4zNTRDMjY1LjAwMiAxNTEuNTA3IDI2NS4wMDIgMTYxLjQ4MiAyNTQuMzQ1IDE2Ny42MzVMMTYxLjY0MiAyMjEuMTUyQzE1MC45ODUgMjI3LjMwNCAxMzMuNzA1IDIyNy4zMDQgMTIzLjA0OCAyMjEuMTUyTDMwLjM0NTMgMTY3LjYzNUMxOS42ODc5IDE2MS40ODIgMTkuNjg3OCAxNTEuNTA3IDMwLjM0NTMgMTQ1LjM1NEwxMjMuMDQ4IDkxLjgzNjlaIiBmaWxsPSIjRTNERUU2IiBmaWxsLW9wYWNpdHk9IjAuOSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1My4zOCAxNTguMTFMMTYwLjY3NyAxMDQuNTkzQzE1MC41NTMgOTguNzQ4MyAxMzQuMTM3IDk4Ljc0ODMgMTI0LjAxMyAxMDQuNTkzTDMxLjMxMDIgMTU4LjExQzIxLjE4NTYgMTYzLjk1NSAyMS4xODU2IDE3My40MzIgMzEuMzEwMiAxNzkuMjc3TDEyNC4wMTMgMjMyLjc5NEMxMzQuMTM3IDIzOC42MzkgMTUwLjU1MyAyMzguNjM5IDE2MC42NzcgMjMyLjc5NEwyNTMuMzggMTc5LjI3N0MyNjMuNTA0IDE3My40MzIgMjYzLjUwNCAxNjMuOTU1IDI1My4zOCAxNTguMTFaTTE2MS42NDIgMTA0LjAzNkMxNTAuOTg1IDk3Ljg4MzYgMTMzLjcwNSA5Ny44ODM2IDEyMy4wNDggMTA0LjAzNkwzMC4zNDU0IDE1Ny41NTNDMTkuNjg3OSAxNjMuNzA2IDE5LjY4NzkgMTczLjY4MSAzMC4zNDU0IDE3OS44MzRMMTIzLjA0OCAyMzMuMzUxQzEzMy43MDUgMjM5LjUwNCAxNTAuOTg1IDIzOS41MDQgMTYxLjY0MiAyMzMuMzUxTDI1NC4zNDUgMTc5LjgzNEMyNjUuMDAyIDE3My42ODEgMjY1LjAwMiAxNjMuNzA2IDI1NC4zNDUgMTU3LjU1M0wxNjEuNjQyIDEwNC4wMzZaIiBmaWxsPSIjRTVFMEU3Ii8+CjxwYXRoIGQ9Ik0xMjMuNjY0IDY0LjY5NjhDMTM0LjMyMiA1OC41NDQzIDE1MS42MDEgNTguNTQ0MyAxNjIuMjU5IDY0LjY5NjhMMjU0Ljk2MSAxMTguMjE0QzI2NS42MTkgMTI0LjM2NyAyNjUuNjE5IDEzNC4zNDIgMjU0Ljk2MSAxNDAuNDk0TDE2Mi4yNTkgMTk0LjAxMkMxNTEuNjAxIDIwMC4xNjQgMTM0LjMyMiAyMDAuMTY0IDEyMy42NjQgMTk0LjAxMkwzMC45NjE4IDE0MC40OTRDMjAuMzA0NCAxMzQuMzQyIDIwLjMwNDQgMTI0LjM2NyAzMC45NjE4IDExOC4yMTRMMTIzLjY2NCA2NC42OTY4WiIgZmlsbD0iI0Q2Q0VEQSIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kZGRkZF8xXzE4MDYpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNTMuOTk2IDEzMC45N0wxNjEuMjk0IDc3LjQ1M0MxNTEuMTY5IDcxLjYwODEgMTM0Ljc1NCA3MS42MDgxIDEyNC42MjkgNzcuNDUzTDMxLjkyNjcgMTMwLjk3QzIxLjgwMjEgMTM2LjgxNSAyMS44MDIxIDE0Ni4yOTIgMzEuOTI2NyAxNTIuMTM3TDEyNC42MjkgMjA1LjY1NEMxMzQuNzU0IDIxMS40OTkgMTUxLjE2OSAyMTEuNDk5IDE2MS4yOTQgMjA1LjY1NEwyNTMuOTk2IDE1Mi4xMzdDMjY0LjEyMSAxNDYuMjkyIDI2NC4xMjEgMTM2LjgxNSAyNTMuOTk2IDEzMC45N1pNMTYyLjI1OSA3Ni44OTZDMTUxLjYwMSA3MC43NDM1IDEzNC4zMjIgNzAuNzQzNSAxMjMuNjY0IDc2Ljg5NkwzMC45NjE4IDEzMC40MTNDMjAuMzA0NCAxMzYuNTY2IDIwLjMwNDQgMTQ2LjU0MSAzMC45NjE4IDE1Mi42OTRMMTIzLjY2NCAyMDYuMjExQzEzNC4zMjIgMjEyLjM2MyAxNTEuNjAxIDIxMi4zNjMgMTYyLjI1OSAyMDYuMjExTDI1NC45NjEgMTUyLjY5NEMyNjUuNjE5IDE0Ni41NDEgMjY1LjYxOSAxMzYuNTY2IDI1NC45NjEgMTMwLjQxM0wxNjIuMjU5IDc2Ljg5NloiIGZpbGw9IiNENkNFREEiLz4KPC9nPgo8cGF0aCBkPSJNMTIzLjY2NCAzOC43ODk2QzEzNC4zMjIgMzIuNjM3IDE1MS42MDEgMzIuNjM3IDE2Mi4yNTkgMzguNzg5NkwyNTQuOTYxIDkyLjMwNjhDMjY1LjYxOSA5OC40NTk0IDI2NS42MTkgMTA4LjQzNSAyNTQuOTYxIDExNC41ODdMMTYyLjI1OSAxNjguMTA0QzE1MS42MDEgMTc0LjI1NyAxMzQuMzIyIDE3NC4yNTcgMTIzLjY2NCAxNjguMTA0TDMwLjk2MTggMTE0LjU4N0MyMC4zMDQ0IDEwOC40MzUgMjAuMzA0NCA5OC40NTk0IDMwLjk2MTggOTIuMzA2OEwxMjMuNjY0IDM4Ljc4OTZaIiBmaWxsPSIjQjZBNkJGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUzLjk5NiAxMDUuMDYzTDE2MS4yOTQgNTEuNTQ1OEMxNTEuMTY5IDQ1LjcwMDkgMTM0Ljc1NCA0NS43MDA5IDEyNC42MjkgNTEuNTQ1OEwzMS45MjY3IDEwNS4wNjNDMjEuODAyMiAxMTAuOTA4IDIxLjgwMjIgMTIwLjM4NCAzMS45MjY3IDEyNi4yMjlMMTI0LjYyOSAxNzkuNzQ3QzEzNC43NTQgMTg1LjU5MiAxNTEuMTY5IDE4NS41OTIgMTYxLjI5NCAxNzkuNzQ3TDI1My45OTYgMTI2LjIyOUMyNjQuMTIxIDEyMC4zODQgMjY0LjEyMSAxMTAuOTA4IDI1My45OTYgMTA1LjA2M1pNMTYyLjI1OSA1MC45ODg4QzE1MS42MDEgNDQuODM2MyAxMzQuMzIyIDQ0LjgzNjMgMTIzLjY2NSA1MC45ODg4TDMwLjk2MTkgMTA0LjUwNkMyMC4zMDQ0IDExMC42NTkgMjAuMzA0NCAxMjAuNjM0IDMwLjk2MTkgMTI2Ljc4NkwxMjMuNjY1IDE4MC4zMDRDMTM0LjMyMiAxODYuNDU2IDE1MS42MDEgMTg2LjQ1NiAxNjIuMjU5IDE4MC4zMDRMMjU0Ljk2MSAxMjYuNzg2QzI2NS42MTkgMTIwLjYzNCAyNjUuNjE5IDExMC42NTkgMjU0Ljk2MSAxMDQuNTA2TDE2Mi4yNTkgNTAuOTg4OFoiIGZpbGw9IiNCNkE2QkYiLz4KPHBhdGggZD0iTTEyMy42NjUgMTEuNjQ5QzEzNC4zMjIgNS40OTY0MiAxNTEuNjAxIDUuNDk2NDEgMTYyLjI1OSAxMS42NDlMMjU0Ljk2MiA2NS4xNjYyQzI2NS42MTkgNzEuMzE4NyAyNjUuNjE5IDgxLjI5NCAyNTQuOTYyIDg3LjQ0NjVMMTYyLjI1OSAxNDAuOTY0QzE1MS42MDEgMTQ3LjExNiAxMzQuMzIyIDE0Ny4xMTYgMTIzLjY2NSAxNDAuOTY0TDMwLjk2MjIgODcuNDQ2NUMyMC4zMDQ4IDgxLjI5NCAyMC4zMDQ4IDcxLjMxODggMzAuOTYyMiA2NS4xNjYyTDEyMy42NjUgMTEuNjQ5WiIgZmlsbD0iIzk2NzZBNiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1My45OTcgNzcuOTIyNEwxNjEuMjk0IDI0LjQwNTJDMTUxLjE3IDE4LjU2MDMgMTM0Ljc1NCAxOC41NjAzIDEyNC42MyAyNC40MDUyTDMxLjkyNzEgNzcuOTIyNEMyMS44MDI1IDgzLjc2NzMgMjEuODAyNSA5My4yNDM4IDMxLjkyNzEgOTkuMDg4OEwxMjQuNjMgMTUyLjYwNkMxMzQuNzU0IDE1OC40NTEgMTUxLjE3IDE1OC40NTEgMTYxLjI5NCAxNTIuNjA2TDI1My45OTcgOTkuMDg4OEMyNjQuMTIxIDkzLjI0MzggMjY0LjEyMSA4My43NjczIDI1My45OTcgNzcuOTIyNFpNMTYyLjI1OSAyMy44NDgyQzE1MS42MDEgMTcuNjk1NiAxMzQuMzIyIDE3LjY5NTYgMTIzLjY2NSAyMy44NDgyTDMwLjk2MjIgNzcuMzY1NEMyMC4zMDQ4IDgzLjUxOCAyMC4zMDQ4IDkzLjQ5MzIgMzAuOTYyMiA5OS42NDU4TDEyMy42NjUgMTUzLjE2M0MxMzQuMzIyIDE1OS4zMTYgMTUxLjYwMSAxNTkuMzE2IDE2Mi4yNTkgMTUzLjE2M0wyNTQuOTYyIDk5LjY0NThDMjY1LjYxOSA5My40OTMyIDI2NS42MTkgODMuNTE4IDI1NC45NjIgNzcuMzY1NEwxNjIuMjU5IDIzLjg0ODJaIiBmaWxsPSIjOTY3NkE2Ii8+CjxwYXRoIGQ9Ik0xMzguMjE3IDczLjI2NzFMMTE3LjcyNSA4NS4wOTc1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTE2MS42MzcgODkuODYwNEwxNDMuODA2IDEwMC4xNTQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPgo8cGF0aCBkPSJNMTU4LjQ0NCA3Ni42NDdMMTMwLjc2NSA5Mi42MjU3IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTExNy43MjUgNzAuMDQwNUwxMDQuNjg0IDc3LjU2OSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxwYXRoIGQ9Ik0xMTUuMDYzIDU2LjUyTDkxLjY0MyA3MC4wNDA1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTEyNC42NDQgNDkuNDUyNUwxMjQuNzMzIDUxLjc5NjhDMTI1LjA0IDU5LjkwNjUgMTM3LjA0IDY2LjIxNzMgMTUxLjA1NiA2NS42Mzk1VjY1LjYzOTVDMTY2LjU4OSA2NC45OTkxIDE3OS4yMjUgNzIuNzUzOSAxNzcuMTY5IDgxLjY2NTVMMTc2Ljg1NiA4My4wMjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kZGRkZF8xXzE4MDYiIHg9Ii00Mi4wMzEyIiB5PSI1OC4yODE3IiB3aWR0aD0iMzkxLjk4NSIgaGVpZ2h0PSI0MTguNTQzIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfMV8xODA2Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjEiIGR5PSIxMiIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMyIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd18xXzE4MDYiIHJlc3VsdD0iZWZmZWN0Ml9kcm9wU2hhZG93XzFfMTgwNiIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR4PSIzIiBkeT0iNDciLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMjQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDkgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iZWZmZWN0Ml9kcm9wU2hhZG93XzFfMTgwNiIgcmVzdWx0PSJlZmZlY3QzX2Ryb3BTaGFkb3dfMV8xODA2Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjYiIGR5PSIxMDciLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMzIiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iZWZmZWN0M19kcm9wU2hhZG93XzFfMTgwNiIgcmVzdWx0PSJlZmZlY3Q0X2Ryb3BTaGFkb3dfMV8xODA2Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjExIiBkeT0iMTkwIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjM4Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjAxIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9ImVmZmVjdDRfZHJvcFNoYWRvd18xXzE4MDYiIHJlc3VsdD0iZWZmZWN0NV9kcm9wU2hhZG93XzFfMTgwNiIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDVfZHJvcFNoYWRvd18xXzE4MDYiIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMV8xODA2Ij4KPHJlY3Qgd2lkdGg9IjI4NC4zNDIiIGhlaWdodD0iMjQzLjk4MyIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC41MDg3ODkpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);