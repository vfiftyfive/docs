"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,N=s["".concat(d,".").concat(f)]||s[f]||k[f]||i;return n?a.createElement(N,o(o({ref:t},m),{},{components:n})):a.createElement(N,o({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Usage telemetry"},o=void 0,l={unversionedId:"otterize-oss/usage-telemetry",id:"otterize-oss/usage-telemetry",title:"Usage telemetry",description:"Otterize OSS components report anonymous usage information back to the Otterize team, to help the team understand how the software is used in the community and what aspects users find useful. No personal or organizational identifying information is transmitted in these metrics: they only reflect patterns of usage. You may opt out at any time through a single configuration flag.",source:"@site/docs/otterize-oss/usage-telemetry.mdx",sourceDirName:"otterize-oss",slug:"/otterize-oss/usage-telemetry",permalink:"/otterize-oss/usage-telemetry",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/otterize-oss/usage-telemetry.mdx",tags:[],version:"current",frontMatter:{title:"Usage telemetry"},sidebar:"docSidebar",previous:{title:"Error telemetry",permalink:"/otterize-oss/error-telemetry"},next:{title:"Otterize Cloud",permalink:"/otterize-cloud/"}},d={},p=[{value:"What information is collected?",id:"what-information-is-collected",level:2},{value:"Identifiers",id:"identifiers",level:3},{value:"Events",id:"events",level:3},{value:"CLI Commands",id:"cli-commands",level:3},{value:"Configuring whether to report usage information",id:"configuring-whether-to-report-usage-information",level:2}],m={toc:p},s="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Otterize OSS components report anonymous usage information back to the Otterize team, to help the team understand how the software is used in the community and what aspects users find useful. No personal or organizational identifying information is transmitted in these metrics: they only reflect patterns of usage. You may opt out at any time through a single configuration flag."),(0,r.kt)("h2",{id:"what-information-is-collected"},"What information is collected?"),(0,r.kt)("p",null,"The information reported by Otterize OSS is defined in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/otterize/intents-operator/blob/main/src/shared/telemetries/telemetriesgql/schema.graphql"},"GraphQL schema of the telemetry source code"),"; this is the GraphQL schema shared with the Otterize incoming-telemetry GraphQL endpoint. Usage information is sent as events, each containing the event type, sometimes also a count, and some identifiers to allow correlating multiple events in order to understand usage."),(0,r.kt)("h3",{id:"identifiers"},"Identifiers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Identifier"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"componentType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Which Otterize OSS component sent the event: one of ",(0,r.kt)("inlineCode",{parentName:"td"},"INTENTS_OPERATOR"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"CREDENTIALS_OPERATOR"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"NETWORK_MAPPER")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"CLI"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"componentInstanceId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A randomly-generated UUID identifying the installed instance of the component, to allow correlating its events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"contextId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A hash (for anonymity) of an identifier of the context in which the component is installed. For example, for components running in a Kubernetes cluster, this is a hash of the UUID of the ",(0,r.kt)("inlineCode",{parentName:"td"},"kube-system")," namespace in the cluster.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The version of the Otterize OSS component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cloudClientId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If connected to Otterize Cloud: the client id used to connect with Otterize Cloud, to allow correlating events with Cloud usage info.")))),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Event type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"INTENTS_DELETED")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many intents were deleted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"INTENTS_APPLIED")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many declared intents were applied.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"INTENTS_APPLIED_KAFKA")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many intents were applied with Kafka type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"INTENTS_APPLIED_HTTP")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many intents were applied with HTTP type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"INTENTS_APPLIED_DATABASE")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many intents were applied with Database type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"INTENTS_DISCOVERED")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many intents were discovered by the network mapper.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"INTENTS_DISCOVERED_SOCKET_SCAN")),(0,r.kt)("td",{parentName:"tr",align:"left"},'How many intents were discovered by the network watcher ("sniffer") via scanning for open sockets.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"INTENTS_DISCOVERED_CAPTURE")),(0,r.kt)("td",{parentName:"tr",align:"left"},'How many intents were discovered by the network watcher ("sniffer") via reading DNS query responses.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"INTENTS_DISCOVERED_KAFKA")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many intents were discovered by the Kafka watcher.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"INTENTS_DISCOVERED_ISTIO")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many intents were discovered by the Istio watcher.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"MAPPER_EXPORT ")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many intents from the network mapper were exported by the CLI: ",(0,r.kt)("inlineCode",{parentName:"td"},"otterize mapper export..."),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"MAPPER_VISUALIZE")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many intents from the network mapper were visualized by the CLI: ",(0,r.kt)("inlineCode",{parentName:"td"},"otterize mapper visualize..."),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"KAFKA_SERVER_CONFIG_APPLIED")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A Kafka Server Config was applied (i.e. the intents operator will recognize it as a Kafka broker).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"KAFKA_SERVER_CONFIG_DELETED")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A Kafka Server Config was deleted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NETWORK_POLICIES_CREATED")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many network policies were created by the intents operator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NETWORK_POLICIES_DELETED")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many network policies were deleted by the intents operator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"KAFKA_ACLS_CREATED")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many Kafka ACLs were created by the intents operator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"KAFKA_ACLS_DELETED")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many Kafka ACLs were deleted by the intents operator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ISTIO_POLICIES_CREATED")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many Istio authorization policies were created by the intents operator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ISTIO_POLICIES_DELETED")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many Istio authorization policies were deleted by the intents operator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"STARTED")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The operator was started.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ACTIVE")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sent periodically to indicate that the component is still running.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SERVICE_DISCOVERED")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many services were discovered by the network mapper.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NAMESPACE_DISCOVERED")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many namespaces were discovered by the network mapper.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PROTECTED_SERVICE_APPLIED")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many protected services were applied.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PROTECTED_SERVICE_DELETED")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many protected services were deleted.")))),(0,r.kt)("h3",{id:"cli-commands"},"CLI Commands"),(0,r.kt)("p",null,"For the CLI, the reported events correspond simply to the commands invoked."),(0,r.kt)("p",null,"Most CLI commands are of the form ",(0,r.kt)("inlineCode",{parentName:"p"},"otterize <noun> <verb>")," where the ",(0,r.kt)("inlineCode",{parentName:"p"},"<noun>")," is the type of object (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"intents"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"clusters"),") and the ",(0,r.kt)("inlineCode",{parentName:"p"},"<verb>")," is the operation being performed. Otterize OSS telemetry for CLI commands only reports what ",(0,r.kt)("inlineCode",{parentName:"p"},"<noun>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<verb>")," were used, never what specific identifier was used in the command, nor what was the response. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"otterize clusters get <cluster-id>")," would report that ",(0,r.kt)("inlineCode",{parentName:"p"},"clusters")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," were used, without reporting ",(0,r.kt)("inlineCode",{parentName:"p"},"<cluster-id>")," nor the response about that cluster. In some cases, modifiers are also reported, to clarify which specific action was taken."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<noun>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The type of object on which the operation (",(0,r.kt)("inlineCode",{parentName:"td"},"<verb>"),") is being performed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<verb>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The operation performed on ",(0,r.kt)("inlineCode",{parentName:"td"},"<noun>"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"MODIFIERS")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If applicable, a list of modifiers to clarify the specific operation. For example, ",(0,r.kt)("inlineCode",{parentName:"td"},"otterize env update add-labels")," would report ",(0,r.kt)("inlineCode",{parentName:"td"},"add-labels")," as the modifier.")))),(0,r.kt)("h2",{id:"configuring-whether-to-report-usage-information"},"Configuring whether to report usage information"),(0,r.kt)("p",null,"To configure whether to report usage information to the Otterize team, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"telemetry")," flag in the installation/configuration of Otterize OSS. By default, telemetry is enabled."),(0,r.kt)("p",null,"To ",(0,r.kt)("strong",{parentName:"p"},"disable")," only the sending of usage information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Via the Otterize OSS Helm chart: ",(0,r.kt)("inlineCode",{parentName:"li"},"--set global.telemetry.usage.enabled=false"),"."),(0,r.kt)("li",{parentName:"ul"},"Via an environment variable: ",(0,r.kt)("inlineCode",{parentName:"li"},"OTTERIZE_TELEMETRY_USAGE_ENABLED=false"),"."),(0,r.kt)("li",{parentName:"ul"},"If running an operator directly: ",(0,r.kt)("inlineCode",{parentName:"li"},"telemetry-usage-enabled=false"),".")),(0,r.kt)("p",null,"To ",(0,r.kt)("strong",{parentName:"p"},"disable")," sending any telemetry information, including both usage information and error information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Via the Otterize OSS Helm chart: ",(0,r.kt)("inlineCode",{parentName:"li"},"--set global.telemetry.enabled=false"),"."),(0,r.kt)("li",{parentName:"ul"},"Via an environment variable: ",(0,r.kt)("inlineCode",{parentName:"li"},"OTTERIZE_TELEMETRY_ENABLED=false"),"."),(0,r.kt)("li",{parentName:"ul"},"If running an operator directly: ",(0,r.kt)("inlineCode",{parentName:"li"},"telemetry-enabled=false"),".")),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"telemetry")," flag is omitted or set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", telemetry will be enabled: usage information will be reported."))}k.isMDXComponent=!0}}]);