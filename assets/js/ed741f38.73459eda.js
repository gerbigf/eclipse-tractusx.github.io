"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[78543],{8439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var i=a(87462),n=(a(67294),a(3905)),s=a(26389),r=a(94891),o=(a(75190),a(47507),a(24310)),d=(a(63303),a(75035),a(85162));const p={id:"post-id-based-request-for-update",title:"postIdBasedRequestForUpdate",description:"Endpoint to receive an Id Based Request for Update with header information from a Catena-X DCM partner.",sidebar_label:"postIdBasedRequestForUpdate",hide_title:!0,hide_table_of_contents:!0,api:{tags:["IdBasedRequestForUpdate"],operationId:"postIdBasedRequestForUpdate",description:"Endpoint to receive an Id Based Request for Update with header information from a Catena-X DCM partner.",requestBody:{content:{"application/json":{schema:{description:"An entity that combines the IdBasedRequestForUpdate with the message header data model in order to be compliant with the DCM standard for the exchange of a request for update.",type:"object",properties:{messageHeader:{description:"The Capacity Group ID uniquely identifies the capacity group within the business relationship between a supplier and its customer.",type:"object",properties:{header:{description:"Contains standardized attributes for message processing common across several use cases.",type:"object",properties:{messageId:{description:"Unique ID identifying the message. The purpose of the ID is to uniquely identify a single message, therefore it MUST not be reused.",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},context:{description:"Information about the context the message should be considered in.\nThe value MUST consist of two parts: an identifier of the context (e.g. business domain, etc.) followed by a version number.\nBoth the identifier and the version number MUST correspond to the content of the message.\nIf the content of a message is described by an aspect model available in the Catena-X Semantic Hub, then the unique identifier of this semantic model (e.g. urn:samm:io.catenax.<ASPECT-MODEL-NAME>:1.x.x) MUST be used as a value of the context field. This is considered the default case.\nIn all other cases the value of the context field MUST follow the pattern <domain>-<subdomain>-<object>:<[major] version> (e.g. TRACE-QM-Alert:1.x.x).\nVersioning only refers to major versions in both default and fallback cases.\nNote: The version of the message's header is specified in the version field.",type:"string"},sentDateTime:{description:"Time zone aware timestamp holding the date and the time the message was sent by the sending party. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](.[0-9]+)?|(24:00:00(.0+)?))(Z|(+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},senderBpn:{description:"The Business Partner Number of the sending party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard",type:"string",pattern:"^BPNL[a-zA-Z0-9]{12}$"},receiverBpn:{description:"The Business Partner Number of the receiving party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard.",type:"string",pattern:"^BPNL[a-zA-Z0-9]{12}$"},expectedResponseBy:{description:"Time zone aware timestamp holding the date and time by which the sending party expects a certain type of response from the receiving party. The meaning and interpretation of the fields's value are context-bound and MUST therefore be defined by any business domain or platform capability making use of it. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](.[0-9]+)?|(24:00:00(.0+)?))(Z|(+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},relatedMessageId:{description:"Unique ID identifying a message somehow related to the current one",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},version:{description:"The unique identifier of the aspect model defining the structure and the semantics of the message's header. The version number should reflect the versioning schema of aspect models in Catena-X.",type:"string",pattern:"^(0|[1-9][0-9]*).(0|[1-9][0-9]*).(0|[1-9][0-9]*)(-(0|[1-9A-Za-z-][0-9A-Za-z-]*)(.[0-9A-Za-z-]+)*)?([0-9A-Za-z-]+(.[0-9A-Za-z-]+)*)?$"}},required:["messageId","context","sentDateTime","senderBpn","receiverBpn","version"]}},required:["header"]},content:{description:"Bundles all business objects in this property.",type:"object",properties:{informationObject:{description:"Property to collect all transferred business objects.",type:"array",items:{description:"The requirements for a request for update from another Catena-X Partner of a specific entity.\nIf within the payload, no specific object type is defined (Payload empty), than an update of all objects within the sender receiver relation is requested).",type:"object",properties:{weekBasedMaterialDemand:{description:"Material demands the supplier requests an update for.\nIf within the array, no specific ID (array empty), than an update of all IDs is requested).",type:"array",items:{description:"Encapsulates the information that is necessary for an update request.",type:"object",properties:{materialDemandId:{description:"The Material Demand ID uniquely identifies the material demand the supplier requests an update for within the business relationship between the customer and its supplier.",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},changedAt:{description:"Point in time of the last update known to the requesting business partner. If the requested entity has been changed more recently, the requested party should resend the data. If the changedAt property is not given, the latest entity should be send without precondition.",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](.[0-9]+)?|(24:00:00(.0+)?))(Z|(+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"}},required:["materialDemandId"]},uniqueItems:!0},weekBasedCapacityGroup:{description:"Capacity groups the customer requests an update for.\nIf within the array, no specific ID (array empty), than an update of all IDs is requested).",type:"array",items:{description:"Encapsulates the information that is necessary for an update request.",type:"object",properties:{capacityGroupId:{description:"The Capacity Group ID uniquely identifies the capacity group the supplier requests an update for within the business relationship between the supplier and its customer.",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},changedAt:{description:"Point in time of the last update known to the requesting business partner. If the requested entity has been changed more recently, the requested party should resend the data. If the changedAt property is not given, the latest entity should be send without precondition.",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](.[0-9]+)?|(24:00:00(.0+)?))(Z|(+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"}},required:["capacityGroupId"]},uniqueItems:!0}}},uniqueItems:!0}}}}}}}},responses:{200:{description:"OK"},400:{description:"Bad request"},401:{description:"Unauthorized"},403:{description:"Forbidden"},405:{description:"Method not allowed"},422:{description:"Unprocessable Entity"},503:{description:"Service Unavailable"}},method:"post",path:"/internal-dcm-application-id-based-request-for-update-post-endpoint",jsonRequestBodyExample:{messageHeader:{header:{messageId:"string",context:"string",sentDateTime:"string",senderBpn:"string",receiverBpn:"string",expectedResponseBy:"string",relatedMessageId:"string",version:"string"}},content:{informationObject:[{weekBasedMaterialDemand:[{materialDemandId:"string",changedAt:"string"}],weekBasedCapacityGroup:[{capacityGroupId:"string",changedAt:"string"}]}]}},info:{title:"Catena-X DCM ID Based Request For Update",description:"Open API documentation for the Catena-X DCM ID Based Request For Update",version:"3.0.0"},postman:{name:"post Id Based Request For Update",description:{content:"Endpoint to receive an Id Based Request for Update with header information from a Catena-X DCM partner.",type:"text/plain"},url:{path:["internal-dcm-application-id-based-request-for-update-post-endpoint"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/demand-and-capacity-management-kit/development-view/plugin-generated-rfu-api/catena-x-dcm-id-based-request-for-update",custom_edit_url:null},l=void 0,u={unversionedId:"kits/demand-and-capacity-management-kit/development-view/plugin-generated-rfu-api/post-id-based-request-for-update",id:"kits/demand-and-capacity-management-kit/development-view/plugin-generated-rfu-api/post-id-based-request-for-update",title:"postIdBasedRequestForUpdate",description:"Endpoint to receive an Id Based Request for Update with header information from a Catena-X DCM partner.",source:"@site/docs-kits/kits/demand-and-capacity-management-kit/development-view/plugin-generated-rfu-api/post-id-based-request-for-update.api.mdx",sourceDirName:"kits/demand-and-capacity-management-kit/development-view/plugin-generated-rfu-api",slug:"/kits/demand-and-capacity-management-kit/development-view/plugin-generated-rfu-api/post-id-based-request-for-update",permalink:"/docs-kits/next/kits/demand-and-capacity-management-kit/development-view/plugin-generated-rfu-api/post-id-based-request-for-update",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"post-id-based-request-for-update",title:"postIdBasedRequestForUpdate",description:"Endpoint to receive an Id Based Request for Update with header information from a Catena-X DCM partner.",sidebar_label:"postIdBasedRequestForUpdate",hide_title:!0,hide_table_of_contents:!0,api:{tags:["IdBasedRequestForUpdate"],operationId:"postIdBasedRequestForUpdate",description:"Endpoint to receive an Id Based Request for Update with header information from a Catena-X DCM partner.",requestBody:{content:{"application/json":{schema:{description:"An entity that combines the IdBasedRequestForUpdate with the message header data model in order to be compliant with the DCM standard for the exchange of a request for update.",type:"object",properties:{messageHeader:{description:"The Capacity Group ID uniquely identifies the capacity group within the business relationship between a supplier and its customer.",type:"object",properties:{header:{description:"Contains standardized attributes for message processing common across several use cases.",type:"object",properties:{messageId:{description:"Unique ID identifying the message. The purpose of the ID is to uniquely identify a single message, therefore it MUST not be reused.",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},context:{description:"Information about the context the message should be considered in.\nThe value MUST consist of two parts: an identifier of the context (e.g. business domain, etc.) followed by a version number.\nBoth the identifier and the version number MUST correspond to the content of the message.\nIf the content of a message is described by an aspect model available in the Catena-X Semantic Hub, then the unique identifier of this semantic model (e.g. urn:samm:io.catenax.<ASPECT-MODEL-NAME>:1.x.x) MUST be used as a value of the context field. This is considered the default case.\nIn all other cases the value of the context field MUST follow the pattern <domain>-<subdomain>-<object>:<[major] version> (e.g. TRACE-QM-Alert:1.x.x).\nVersioning only refers to major versions in both default and fallback cases.\nNote: The version of the message's header is specified in the version field.",type:"string"},sentDateTime:{description:"Time zone aware timestamp holding the date and the time the message was sent by the sending party. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},senderBpn:{description:"The Business Partner Number of the sending party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard",type:"string",pattern:"^BPNL[a-zA-Z0-9]{12}$"},receiverBpn:{description:"The Business Partner Number of the receiving party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard.",type:"string",pattern:"^BPNL[a-zA-Z0-9]{12}$"},expectedResponseBy:{description:"Time zone aware timestamp holding the date and time by which the sending party expects a certain type of response from the receiving party. The meaning and interpretation of the fields's value are context-bound and MUST therefore be defined by any business domain or platform capability making use of it. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},relatedMessageId:{description:"Unique ID identifying a message somehow related to the current one",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},version:{description:"The unique identifier of the aspect model defining the structure and the semantics of the message's header. The version number should reflect the versioning schema of aspect models in Catena-X.",type:"string",pattern:"^(0|[1-9][0-9]*).(0|[1-9][0-9]*).(0|[1-9][0-9]*)(-(0|[1-9A-Za-z-][0-9A-Za-z-]*)(.[0-9A-Za-z-]+)*)?([0-9A-Za-z-]+(.[0-9A-Za-z-]+)*)?$"}},required:["messageId","context","sentDateTime","senderBpn","receiverBpn","version"]}},required:["header"]},content:{description:"Bundles all business objects in this property.",type:"object",properties:{informationObject:{description:"Property to collect all transferred business objects.",type:"array",items:{description:"The requirements for a request for update from another Catena-X Partner of a specific entity.\nIf within the payload, no specific object type is defined (Payload empty), than an update of all objects within the sender receiver relation is requested).",type:"object",properties:{weekBasedMaterialDemand:{description:"Material demands the supplier requests an update for.\nIf within the array, no specific ID (array empty), than an update of all IDs is requested).",type:"array",items:{description:"Encapsulates the information that is necessary for an update request.",type:"object",properties:{materialDemandId:{description:"The Material Demand ID uniquely identifies the material demand the supplier requests an update for within the business relationship between the customer and its supplier.",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},changedAt:{description:"Point in time of the last update known to the requesting business partner. If the requested entity has been changed more recently, the requested party should resend the data. If the changedAt property is not given, the latest entity should be send without precondition.",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"}},required:["materialDemandId"]},uniqueItems:!0},weekBasedCapacityGroup:{description:"Capacity groups the customer requests an update for.\nIf within the array, no specific ID (array empty), than an update of all IDs is requested).",type:"array",items:{description:"Encapsulates the information that is necessary for an update request.",type:"object",properties:{capacityGroupId:{description:"The Capacity Group ID uniquely identifies the capacity group the supplier requests an update for within the business relationship between the supplier and its customer.",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},changedAt:{description:"Point in time of the last update known to the requesting business partner. If the requested entity has been changed more recently, the requested party should resend the data. If the changedAt property is not given, the latest entity should be send without precondition.",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"}},required:["capacityGroupId"]},uniqueItems:!0}}},uniqueItems:!0}}}}}}}},responses:{200:{description:"OK"},400:{description:"Bad request"},401:{description:"Unauthorized"},403:{description:"Forbidden"},405:{description:"Method not allowed"},422:{description:"Unprocessable Entity"},503:{description:"Service Unavailable"}},method:"post",path:"/internal-dcm-application-id-based-request-for-update-post-endpoint",jsonRequestBodyExample:{messageHeader:{header:{messageId:"string",context:"string",sentDateTime:"string",senderBpn:"string",receiverBpn:"string",expectedResponseBy:"string",relatedMessageId:"string",version:"string"}},content:{informationObject:[{weekBasedMaterialDemand:[{materialDemandId:"string",changedAt:"string"}],weekBasedCapacityGroup:[{capacityGroupId:"string",changedAt:"string"}]}]}},info:{title:"Catena-X DCM ID Based Request For Update",description:"Open API documentation for the Catena-X DCM ID Based Request For Update",version:"3.0.0"},postman:{name:"post Id Based Request For Update",description:{content:"Endpoint to receive an Id Based Request for Update with header information from a Catena-X DCM partner.",type:"text/plain"},url:{path:["internal-dcm-application-id-based-request-for-update-post-endpoint"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/demand-and-capacity-management-kit/development-view/plugin-generated-rfu-api/catena-x-dcm-id-based-request-for-update",custom_edit_url:null},sidebar:"kits",previous:{title:"IdBasedRequestForUpdate",permalink:"/docs-kits/next/category/kits/demand-and-capacity-management-kit/development-view/plugin-generated-rfu-api/id-based-request-for-update"},next:{title:"API - IdBasedComment",permalink:"/docs-kits/next/kits/demand-and-capacity-management-kit/development-view/api-IdBasedComment"}},c={},m=[{value:"postIdBasedRequestForUpdate",id:"postidbasedrequestforupdate",level:2}],h={toc:m};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"postidbasedrequestforupdate"},"postIdBasedRequestForUpdate"),(0,n.kt)("p",null,"Endpoint to receive an Id Based Request for Update with header information from a Catena-X DCM partner."),(0,n.kt)(r.Z,{mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"messageHeader"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"The Capacity Group ID uniquely identifies the capacity group within the business relationship between a supplier and its customer.")),(0,n.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"header"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Contains standardized attributes for message processing common across several use cases.")),(0,n.kt)(o.Z,{collapsible:!1,name:"messageId",required:!0,deprecated:void 0,schemaDescription:"Unique ID identifying the message. The purpose of the ID is to uniquely identify a single message, therefore it MUST not be reused.",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"context",required:!0,deprecated:void 0,schemaDescription:"Information about the context the message should be considered in.\nThe value MUST consist of two parts: an identifier of the context (e.g. business domain, etc.) followed by a version number.\nBoth the identifier and the version number MUST correspond to the content of the message.\nIf the content of a message is described by an aspect model available in the Catena-X Semantic Hub, then the unique identifier of this semantic model (e.g. urn:samm:io.catenax.<ASPECT-MODEL-NAME>:1.x.x) MUST be used as a value of the context field. This is considered the default case.\nIn all other cases the value of the context field MUST follow the pattern <domain>-<subdomain>-<object>:<[major] version> (e.g. TRACE-QM-Alert:1.x.x).\nVersioning only refers to major versions in both default and fallback cases.\nNote: The version of the message's header is specified in the version field.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"sentDateTime",required:!0,deprecated:void 0,schemaDescription:"Time zone aware timestamp holding the date and the time the message was sent by the sending party. The value MUST be formatted according to the ISO 8601 standard",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"senderBpn",required:!0,deprecated:void 0,schemaDescription:"The Business Partner Number of the sending party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^BPNL[a-zA-Z0-9]{12}$`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"receiverBpn",required:!0,deprecated:void 0,schemaDescription:"The Business Partner Number of the receiving party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard.",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^BPNL[a-zA-Z0-9]{12}$`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"expectedResponseBy",required:!1,deprecated:void 0,schemaDescription:"Time zone aware timestamp holding the date and time by which the sending party expects a certain type of response from the receiving party. The meaning and interpretation of the fields's value are context-bound and MUST therefore be defined by any business domain or platform capability making use of it. The value MUST be formatted according to the ISO 8601 standard",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"relatedMessageId",required:!1,deprecated:void 0,schemaDescription:"Unique ID identifying a message somehow related to the current one",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"version",required:!0,deprecated:void 0,schemaDescription:"The unique identifier of the aspect model defining the structure and the semantics of the message's header. The version number should reflect the versioning schema of aspect models in Catena-X.",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^(0|[1-9][0-9]*).(0|[1-9][0-9]*).(0|[1-9][0-9]*)(-(0|[1-9A-Za-z-][0-9A-Za-z-]*)(.[0-9A-Za-z-]+)*)?([0-9A-Za-z-]+(.[0-9A-Za-z-]+)*)?$`",defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Bundles all business objects in this property.")),(0,n.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"informationObject"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Property to collect all transferred business objects.")),(0,n.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"weekBasedMaterialDemand"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Material demands the supplier requests an update for.\nIf within the array, no specific ID (array empty), than an update of all IDs is requested).")),(0,n.kt)(o.Z,{collapsible:!1,name:"materialDemandId",required:!0,deprecated:void 0,schemaDescription:"The Material Demand ID uniquely identifies the material demand the supplier requests an update for within the business relationship between the customer and its supplier.",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"changedAt",required:!1,deprecated:void 0,schemaDescription:"Point in time of the last update known to the requesting business partner. If the requested entity has been changed more recently, the requested party should resend the data. If the changedAt property is not given, the latest entity should be send without precondition.",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"weekBasedCapacityGroup"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Capacity groups the customer requests an update for.\nIf within the array, no specific ID (array empty), than an update of all IDs is requested).")),(0,n.kt)(o.Z,{collapsible:!1,name:"capacityGroupId",required:!0,deprecated:void 0,schemaDescription:"The Capacity Group ID uniquely identifies the capacity group the supplier requests an update for within the business relationship between the supplier and its customer.",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"changedAt",required:!1,deprecated:void 0,schemaDescription:"Point in time of the last update known to the requesting business partner. If the requested entity has been changed more recently, the requested party should resend the data. If the changedAt property is not given, the latest entity should be send without precondition.",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?`",defaultValue:void 0,mdxType:"SchemaItem"})))))))))))))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Bad request")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Unauthorized")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Forbidden")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"405",value:"405",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Method not allowed")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Unprocessable Entity")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Service Unavailable")),(0,n.kt)("div",null)))))}f.isMDXComponent=!0}}]);