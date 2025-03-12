"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[71572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},I=Object.keys(e);for(a=0;a<I.length;a++)n=I[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(e);for(a=0;a<I.length;a++)n=I[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),l=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(r.Provider,{value:t},e.children)},M="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},o=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,I=e.originalType,r=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),M=l(n),o=i,g=M["".concat(r,".").concat(o)]||M[o]||N[o]||I;return n?a.createElement(g,d(d({ref:t},c),{},{components:n})):a.createElement(g,d({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var I=n.length,d=new Array(I);d[0]=o;var m={};for(var r in t)hasOwnProperty.call(t,r)&&(m[r]=t[r]);m.originalType=e,m[M]="string"==typeof e?e:i,d[1]=m;for(var l=2;l<I;l++)d[l]=n[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},60402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>M,frontMatter:()=>I,metadata:()=>m,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const I={id:"api-IdBasedComment",title:"API - IdBasedComment",description:"API - IdBasedComment"},d=void 0,m={unversionedId:"kits/demand-and-capacity-management-kit/development-view/api-IdBasedComment",id:"kits/demand-and-capacity-management-kit/development-view/api-IdBasedComment",title:"API - IdBasedComment",description:"API - IdBasedComment",source:"@site/docs-kits/kits/demand-and-capacity-management-kit/development-view/api-comment.md",sourceDirName:"kits/demand-and-capacity-management-kit/development-view",slug:"/kits/demand-and-capacity-management-kit/development-view/api-IdBasedComment",permalink:"/docs-kits/next/kits/demand-and-capacity-management-kit/development-view/api-IdBasedComment",draft:!1,tags:[],version:"current",frontMatter:{id:"api-IdBasedComment",title:"API - IdBasedComment",description:"API - IdBasedComment"},sidebar:"kits",previous:{title:"postIdBasedRequestForUpdate",permalink:"/docs-kits/next/kits/demand-and-capacity-management-kit/development-view/plugin-generated-rfu-api/post-id-based-request-for-update"},next:{title:"API Specification",permalink:"/docs-kits/next/category/api-specification-3"}},r={},l=[{value:"IdBasedComment API",id:"idbasedcomment-api",level:2},{value:"Roles and Functions",id:"roles-and-functions",level:3},{value:"Data Exchanges",id:"data-exchanges",level:3},{value:"Open API documentation",id:"open-api-documentation",level:3},{value:"Notice",id:"notice",level:2}],c={toc:l};function M(e){let{components:t,...I}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,I,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"DCM kit banner",src:n(97345).Z,width:"264",height:"245"})),(0,i.kt)("h2",{id:"idbasedcomment-api"},"IdBasedComment API"),(0,i.kt)("p",null,"The IdBasedComment API is owned and registered as an EDC asset by both customer and supplier. The corresponding business partner (supplier and customer) provides comment data to the API via POST request."),(0,i.kt)("h3",{id:"roles-and-functions"},"Roles and Functions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Role / Function"),(0,i.kt)("th",{parentName:"tr",align:null},"API Owner"),(0,i.kt)("th",{parentName:"tr",align:null},"POST to API"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Customer"),(0,i.kt)("td",{parentName:"tr",align:null},"X"),(0,i.kt)("td",{parentName:"tr",align:null},"X")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Supplier"),(0,i.kt)("td",{parentName:"tr",align:null},"X"),(0,i.kt)("td",{parentName:"tr",align:null},"X")))),(0,i.kt)("h3",{id:"data-exchanges"},"Data Exchanges"),(0,i.kt)("mermaid",{value:"sequenceDiagram\n    actor c as Customer \n    participant ca as Comment API\n    participant ce as Customer EDC\n    participant se as Supplier EDC\n    participant sa as Comment API\n    actor s as Supplier\n    \n     rect rgb(217,24,24)\n    autonumber 1\n    c->>+ce: Register API as Asset\n    ce->>-c: API registered\n    end\n    rect rgb(217,24,24)\n    autonumber 1\n    s->>+se: Register API as Asset\n    se->>-s: API registered\n    end\nautonumber 1\n    rect rgb(04,107,153)\n    c->>+ce: Provide IdBasedComment\n    rect rgb(33,157,212)\n    ce->>+se: Initiate Handshake\n    se->>ce: Complete Handshake\n    end\n    ce->>se: Provide IdBasedComment\n    se->>+sa: Provide IdBasedComment\n    sa->>-se: IdBasedComment consumed\n    se->>-ce: IdBasedComment consumed\n    ce->>-c: IdBasedComment consumed\n    \n    end\n\n    rect rgb(04,107,153)\n    s->>+se: Provide IdBasedComment\n    rect rgb(33,157,212)\n    se->>+ce: Initiate Handshake\n    ce->>se: Complete Handshake\n    end\n    se->>ce: Provide IdBasedComment\n    ce->>+ca: Provide IdBasedComment\n    ca->>-ce: IdBasedComment consumed\n    ce->>-se: IdBasedComment consumed\n    se->>-s: IdBasedComment consumed\n    \n    end\n  "}),(0,i.kt)("p",null,"Figure: ",(0,i.kt)("em",{parentName:"p"},"Exchanging IdBasedComment via API")),(0,i.kt)("h3",{id:"open-api-documentation"},"Open API documentation"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"API"),(0,i.kt)("th",{parentName:"tr",align:null},"Link"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"IdBasedComment"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs-kits/next/kits/demand-and-capacity-management-kit/development-view/plugin-generated-comment-api/post-id-based-comment"},"Find here"))))),(0,i.kt)("p",null,"For further details, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange"),"."),(0,i.kt)("h2",{id:"notice"},"Notice"),(0,i.kt)("p",null,"This work is licensed under the ",(0,i.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 BASF SE"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Fraunhofer-Gesellschaft zur F\xf6rderung der angewandten Forschung e.V (Fraunhofer)"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Henkel AG & Co.KGaA"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Mercedes Benz Group AG"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SAP SE"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SupplyOn AG"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Volkswagen AG"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 ZF Friedrichshafen AG"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Contributors to the Eclipse Foundation")))}M.isMDXComponent=!0},97345:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IGNvbG9yLXNjaGVtZTogbGlnaHQgZGFyazsiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNjRweCIgaGVpZ2h0PSIyNDVweCIgdmlld0JveD0iLTAuNSAtMC41IDI2NCAyNDUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMTAwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIwJSIgaWQ9ImRyYXdpby1zdmctRTFmTS11QktEWXZGb1NnWnJqUlUtZ3JhZGllbnQtbGlnaHQtZGFya19lNWNjZmZfNDQyZTVhXy0xLWxpZ2h0LWRhcmtfYjk1ZWZmX2I1NjdmMV8tMS1lLTAiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNCOTVFRkYiIHN0b3Atb3BhY2l0eT0iMSIgc3R5bGU9InN0b3AtY29sb3I6IGxpZ2h0LWRhcmsocmdiKDE4NSwgOTQsIDI1NSksIHJnYigxODEsIDEwMywgMjQxKSk7IHN0b3Atb3BhY2l0eTogMTsiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFNUNDRkYiIHN0b3Atb3BhY2l0eT0iMSIgc3R5bGU9InN0b3AtY29sb3I6IGxpZ2h0LWRhcmsocmdiKDIyOSwgMjA0LCAyNTUpLCByZ2IoNjgsIDQ2LCA5MCkpOyBzdG9wLW9wYWNpdHk6IDE7Ii8+PC9saW5lYXJHcmFkaWVudD48c3R5bGUgdHlwZT0idGV4dC9jc3MiPkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWFucm9wZTp3Z2h0QDQwMDs1MDApOyYjeGE7PC9zdHlsZT48L2RlZnM+PGc+PGcvPjxnPjxwYXRoIGQ9Ik0gNjYgMTMwLjc1IEwgMTA5Ljg0IDEwNS40OCBRIDEzMS41IDkzIDE1My4xNiAxMDUuNDggTCAyNDAuODQgMTU2LjAyIFEgMjYyLjUgMTY4LjUgMjQwLjg0IDE4MC45OCBMIDE1My4xNiAyMzEuNTIgUSAxMzEuNSAyNDQgMTA5Ljg0IDIzMS41MiBMIDIyLjE2IDE4MC45OCBRIDAuNSAxNjguNSAyMi4xNiAxNTYuMDIgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYjk1ZWZmIiBzdHJva2Utb3BhY2l0eT0iMC40IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHN0eWxlPSJzdHJva2U6IGxpZ2h0LWRhcmsocmdiKDE4NSwgOTQsIDI1NSksIHJnYigxODEsIDEwMywgMjQxKSk7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0gNjYgMTE5Ljc1IEwgMTA5Ljg0IDk0LjQ4IFEgMTMxLjUgODIgMTUzLjE2IDk0LjQ4IEwgMjQwLjg0IDE0NS4wMiBRIDI2Mi41IDE1Ny41IDI0MC44NCAxNjkuOTggTCAxNTMuMTYgMjIwLjUyIFEgMTMxLjUgMjMzIDEwOS44NCAyMjAuNTIgTCAyMi4xNiAxNjkuOTggUSAwLjUgMTU3LjUgMjIuMTYgMTQ1LjAyIFoiIGZpbGwtb3BhY2l0eT0iMC40IiBmaWxsPSJ1cmwoI2RyYXdpby1zdmctRTFmTS11QktEWXZGb1NnWnJqUlUtZ3JhZGllbnQtbGlnaHQtZGFya19lNWNjZmZfNDQyZTVhXy0xLWxpZ2h0LWRhcmtfYjk1ZWZmX2I1NjdmMV8tMS1lLTApIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHN0eWxlPSJmaWxsOiB1cmwoJnF1b3Q7I2RyYXdpby1zdmctRTFmTS11QktEWXZGb1NnWnJqUlUtZ3JhZGllbnQtbGlnaHQtZGFya19lNWNjZmZfNDQyZTVhXy0xLWxpZ2h0LWRhcmtfYjk1ZWZmX2I1NjdmMV8tMS1lLTAmcXVvdDspOyIvPjwvZz48Zz48cGF0aCBkPSJNIDY2IDEwMi43NSBMIDEwOS44NCA3Ny40OCBRIDEzMS41IDY1IDE1My4xNiA3Ny40OCBMIDI0MC44NCAxMjguMDIgUSAyNjIuNSAxNDAuNSAyNDAuODQgMTUyLjk4IEwgMTUzLjE2IDIwMy41MiBRIDEzMS41IDIxNiAxMDkuODQgMjAzLjUyIEwgMjIuMTYgMTUyLjk4IFEgMC41IDE0MC41IDIyLjE2IDEyOC4wMiBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNiOTVlZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIgc3R5bGU9InN0cm9rZTogbGlnaHQtZGFyayhyZ2IoMTg1LCA5NCwgMjU1KSwgcmdiKDE4MSwgMTAzLCAyNDEpKTsiLz48L2c+PGc+PHBhdGggZD0iTSA2NiA5MC43NSBMIDEwOS44NCA2NS40OCBRIDEzMS41IDUzIDE1My4xNiA2NS40OCBMIDI0MC44NCAxMTYuMDIgUSAyNjIuNSAxMjguNSAyNDAuODQgMTQwLjk4IEwgMTUzLjE2IDE5MS41MiBRIDEzMS41IDIwNCAxMDkuODQgMTkxLjUyIEwgMjIuMTYgMTQwLjk4IFEgMC41IDEyOC41IDIyLjE2IDExNi4wMiBaIiBmaWxsLW9wYWNpdHk9IjAuNDgiIGZpbGw9InVybCgjZHJhd2lvLXN2Zy1FMWZNLXVCS0RZdkZvU2dacmpSVS1ncmFkaWVudC1saWdodC1kYXJrX2U1Y2NmZl80NDJlNWFfLTEtbGlnaHQtZGFya19iOTVlZmZfYjU2N2YxXy0xLWUtMCkiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIgc3R5bGU9ImZpbGw6IHVybCgmcXVvdDsjZHJhd2lvLXN2Zy1FMWZNLXVCS0RZdkZvU2dacmpSVS1ncmFkaWVudC1saWdodC1kYXJrX2U1Y2NmZl80NDJlNWFfLTEtbGlnaHQtZGFya19iOTVlZmZfYjU2N2YxXy0xLWUtMCZxdW90Oyk7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0gNjUuNSA3Ni43NSBMIDEwOS4zNCA1MS40OCBRIDEzMSAzOSAxNTIuNjYgNTEuNDggTCAyNDAuMzQgMTAyLjAyIFEgMjYyIDExNC41IDI0MC4zNCAxMjYuOTggTCAxNTIuNjYgMTc3LjUyIFEgMTMxIDE5MCAxMDkuMzQgMTc3LjUyIEwgMjEuNjYgMTI2Ljk4IFEgMCAxMTQuNSAyMS42NiAxMDIuMDIgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYjk1ZWZmIiBzdHJva2Utb3BhY2l0eT0iMC44IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHN0eWxlPSJzdHJva2U6IGxpZ2h0LWRhcmsocmdiKDE4NSwgOTQsIDI1NSksIHJnYigxODEsIDEwMywgMjQxKSk7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0gNjUuNSA2NC43NSBMIDEwOS4zNCAzOS40OCBRIDEzMSAyNyAxNTIuNjYgMzkuNDggTCAyNDAuMzQgOTAuMDIgUSAyNjIgMTAyLjUgMjQwLjM0IDExNC45OCBMIDE1Mi42NiAxNjUuNTIgUSAxMzEgMTc4IDEwOS4zNCAxNjUuNTIgTCAyMS42NiAxMTQuOTggUSAwIDEwMi41IDIxLjY2IDkwLjAyIFoiIGZpbGwtb3BhY2l0eT0iMC42NDAwMDAwMDAwMDAwMDAxIiBmaWxsPSJ1cmwoI2RyYXdpby1zdmctRTFmTS11QktEWXZGb1NnWnJqUlUtZ3JhZGllbnQtbGlnaHQtZGFya19lNWNjZmZfNDQyZTVhXy0xLWxpZ2h0LWRhcmtfYjk1ZWZmX2I1NjdmMV8tMS1lLTApIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHN0eWxlPSJmaWxsOiB1cmwoJnF1b3Q7I2RyYXdpby1zdmctRTFmTS11QktEWXZGb1NnWnJqUlUtZ3JhZGllbnQtbGlnaHQtZGFya19lNWNjZmZfNDQyZTVhXy0xLWxpZ2h0LWRhcmtfYjk1ZWZmX2I1NjdmMV8tMS1lLTAmcXVvdDspOyIvPjwvZz48Zz48cGF0aCBkPSJNIDY2IDQ4Ljc1IEwgMTA5Ljg0IDIzLjQ4IFEgMTMxLjUgMTEgMTUzLjE2IDIzLjQ4IEwgMjQwLjg0IDc0LjAyIFEgMjYyLjUgODYuNSAyNDAuODQgOTguOTggTCAxNTMuMTYgMTQ5LjUyIFEgMTMxLjUgMTYyIDEwOS44NCAxNDkuNTIgTCAyMi4xNiA5OC45OCBRIDAuNSA4Ni41IDIyLjE2IDc0LjAyIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2I5NWVmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIiBzdHlsZT0ic3Ryb2tlOiBsaWdodC1kYXJrKHJnYigxODUsIDk0LCAyNTUpLCByZ2IoMTgxLCAxMDMsIDI0MSkpOyIvPjwvZz48Zz48cGF0aCBkPSJNIDY2IDM3Ljc1IEwgMTA5Ljg0IDEyLjQ4IFEgMTMxLjUgMCAxNTMuMTYgMTIuNDggTCAyNDAuODQgNjMuMDIgUSAyNjIuNSA3NS41IDI0MC44NCA4Ny45OCBMIDE1My4xNiAxMzguNTIgUSAxMzEuNSAxNTEgMTA5Ljg0IDEzOC41MiBMIDIyLjE2IDg3Ljk4IFEgMC41IDc1LjUgMjIuMTYgNjMuMDIgWiIgZmlsbD0idXJsKCNkcmF3aW8tc3ZnLUUxZk0tdUJLRFl2Rm9TZ1pyalJVLWdyYWRpZW50LWxpZ2h0LWRhcmtfZTVjY2ZmXzQ0MmU1YV8tMS1saWdodC1kYXJrX2I5NWVmZl9iNTY3ZjFfLTEtZS0wKSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIiBzdHlsZT0iZmlsbDogdXJsKCZxdW90OyNkcmF3aW8tc3ZnLUUxZk0tdUJLRFl2Rm9TZ1pyalJVLWdyYWRpZW50LWxpZ2h0LWRhcmtfZTVjY2ZmXzQ0MmU1YV8tMS1saWdodC1kYXJrX2I5NWVmZl9iNTY3ZjFfLTEtZS0wJnF1b3Q7KTsiLz48L2c+PGc+PGc+PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjYzIiB2aWV3Qm94PSIwIDAgMTA4IDYzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9Ijc3IiB5PSI0My41IiBzdHlsZT0iZm9udC1mYW1pbHk6IGluaXRpYWw7Ij4mI3hhOzxwYXRoIGQ9Ik00OS4yMTcyIDM0LjI2NzFMMjguNzI0NiA0Ni4wOTc1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4mI3hhOzxwYXRoIGQ9Ik03Mi42Mzc0IDUwLjg2MDRMNTQuODA2MSA2MS4xNTQzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4mI3hhOzxwYXRoIGQ9Ik02OS40NDM3IDM3LjY0N0w0MS43NjUzIDUzLjYyNTciIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPiYjeGE7PHBhdGggZD0iTTI4LjcyNDUgMzEuMDQwNUwxNS42ODM4IDM4LjU2OSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0Ii8+JiN4YTs8cGF0aCBkPSJNMjYuMDYzMiAxNy41MkwyLjY0Mjk5IDMxLjA0MDUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPiYjeGE7PHBhdGggZD0iTTM1LjY0NDIgMTAuNDUyNUwzNS43MzI5IDEyLjc5NjhDMzYuMDM5OSAyMC45MDY1IDQ4LjA0MDQgMjcuMjE3MyA2Mi4wNTU3IDI2LjYzOTVWMjYuNjM5NUM3Ny41ODkxIDI1Ljk5OTEgOTAuMjI1IDMzLjc1MzkgODguMTY5MSA0Mi42NjU1TDg3Ljg1NTkgNDQuMDIzMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0Ii8+JiN4YTs8L3N2Zz48L2c+PC9nPjwvZz48L3N2Zz4="}}]);