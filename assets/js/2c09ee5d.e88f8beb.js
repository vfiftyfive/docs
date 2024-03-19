"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4194,8401],{9365:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(6540),o=a(53);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,s),hidden:a},t)}},1470:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(8168),o=a(6540),r=a(53),s=a(3104),l=a(6347),i=a(7485),c=a(1682),u=a(9466);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function p(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[i,c]=g({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Dv)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),y=(()=>{const e=i??d;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,r]),tabValues:r}}var y=a(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(d(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return o.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},s,{className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return o.createElement("div",{className:(0,r.A)("tabs-container",b.tabList)},o.createElement(f,(0,n.A)({},e,t)),o.createElement(v,(0,n.A)({},e,t)))}function w(e){const t=(0,y.A)();return o.createElement(N,(0,n.A)({key:String(t)},e))}},1202:(e,t,a)=>{a.d(t,{A:()=>S});var n=a(8168),o=a(6540),r=a(2303),s=a(53),l=a(6058),i=a(7559),c=a(4291);const u={codeBlockContainer:"codeBlockContainer_APcc"};function d(e){let{as:t,...a}=e;const r=(0,l.A)(),d=(0,c.M$)(r);return o.createElement(t,(0,n.A)({},a,{style:d,className:(0,s.A)(a.className,u.codeBlockContainer,i.G.common.codeBlock)}))}const p={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function m(e){let{children:t,className:a}=e;return o.createElement(d,{as:"pre",tabIndex:0,className:(0,s.A)(p.codeBlockStandalone,"thin-scrollbar",a)},o.createElement("code",{className:p.codeBlockLines},t))}var g=a(6342),h=a(6591),y=a(8382);const b={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};var f=a(6025);function v(e){let{line:t,classNames:a,showLineNumbers:r,getLineProps:l,getTokenProps:i}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=l({line:t,className:(0,s.A)(a,r&&b.codeLine)}),u=t.map(((e,t)=>o.createElement("span",(0,n.A)({key:t},i({token:e,key:t})))));return o.createElement("span",c,r?o.createElement(o.Fragment,null,o.createElement("span",{className:b.codeLineNumber}),o.createElement("span",{className:b.codeLineContent},u)):u,o.createElement("br",null))}var N=a(6861),w=a(1312),k=a(1473),C=a(4115);const E={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function T(e){let{code:t,className:a}=e;const[n,r]=(0,o.useState)(!1),l=(0,o.useRef)(void 0),i=(0,o.useCallback)((()=>{(0,N.A)(t),r(!0),l.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),o.createElement("button",{type:"button","aria-label":n?(0,w.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,w.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,w.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.A)("clean-btn",a,E.copyButton,n&&E.copyButtonCopied),onClick:i},o.createElement("span",{className:E.copyButtonIcons,"aria-hidden":"true"},o.createElement(k.A,{className:E.copyButtonIcon}),o.createElement(C.A,{className:E.copyButtonSuccessIcon})))}var I=a(5048);const A={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function B(e){let{className:t,onClick:a,isEnabled:n}=e;const r=(0,w.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:a,className:(0,s.A)("clean-btn",t,n&&A.wordWrapButtonEnabled),"aria-label":r,title:r},o.createElement(I.A,{className:A.wordWrapButtonIcon,"aria-hidden":"true"}))}function L(e){let{children:t,className:a="",metastring:r,title:i,showLineNumbers:u,language:m}=e;const{prism:{defaultLanguage:b,magicComments:N}}=(0,g.p)(),w=m??(0,c.Op)(a)??b,k=(0,l.A)(),C=(0,h.f)(),E=(0,c.wt)(r)||i,{lineClassNames:I,code:A}=(0,c.Li)(t,{metastring:r,language:w,magicComments:N}),L=(0,f.A)("/",{absolute:!0}).slice(0,-1),S=A.replaceAll("${ABSOLUTE_URL}",L),z=u??(0,c._u)(r);return o.createElement(d,{as:"div",className:(0,s.A)(a,w&&!a.includes(`language-${w}`)&&`language-${w}`)},E&&o.createElement("div",{className:p.codeBlockTitle},E),o.createElement("div",{className:p.codeBlockContent},o.createElement(y.Ay,(0,n.A)({},y.Gs,{theme:k,code:S,language:w??"text"}),(e=>{let{className:t,tokens:a,getLineProps:n,getTokenProps:r}=e;return o.createElement("pre",{tabIndex:0,ref:C.codeBlockRef,className:(0,s.A)(t,p.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,s.A)(p.codeBlockLines,z&&p.codeBlockLinesWithNumbering)},a.map(((e,t)=>o.createElement(v,{key:t,line:e,getLineProps:n,getTokenProps:r,classNames:I[t],showLineNumbers:z})))))})),o.createElement("div",{className:p.buttonGroup},(C.isEnabled||C.isCodeScrollable)&&o.createElement(B,{className:p.codeButton,onClick:()=>C.toggle(),isEnabled:C.isEnabled}),o.createElement(T,{className:p.codeButton,code:S}))))}function S(e){let{children:t,...a}=e;const s=(0,r.A)(),l=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof l?L:m;return o.createElement(i,(0,n.A)({key:String(s)},a),l)}},9411:(e,t,a)=>{a.r(t),a.d(t,{Terminal:()=>u,assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(8168),o=(a(6540),a(5680));a(1202),a(1470),a(9365);const r={sidebar_position:2,title:"Just-in-time PostgreSQL access",image:"/img/quick-tutorials/postgres/social.png"},s=void 0,l={unversionedId:"features/postgresql/tutorials/postgres",id:"features/postgresql/tutorials/postgres",title:"Just-in-time PostgreSQL access",description:"This tutorial will deploy an example cluster to highlight Otterize's PostgreSQL capabilities. Within that cluster is a client service that hits an endpoint on a server, which then connects to a database. The server runs two different database operations:",source:"@site/docs/features/postgresql/tutorials/postgres.mdx",sourceDirName:"features/postgresql/tutorials",slug:"/features/postgresql/tutorials/postgres",permalink:"/features/postgresql/tutorials/postgres",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/features/postgresql/tutorials/postgres.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Just-in-time PostgreSQL access",image:"/img/quick-tutorials/postgres/social.png"},sidebar:"docSidebar",previous:{title:"PostgreSQL | Overview",permalink:"/features/postgresql/"},next:{title:"PostgreSQL table-level access mapping",permalink:"/features/postgresql/tutorials/postgres-mapping"}},i={},c=[{value:"1. Minikube Cluster",id:"1-minikube-cluster",level:4},{value:"2. ngrok",id:"2-ngrok",level:4},{value:"Deploy tutorial services and request database credentials",id:"deploy-tutorial-services-and-request-database-credentials",level:3},{value:"Make the database accessible to Otterize Cloud",id:"make-the-database-accessible-to-otterize-cloud",level:3},{value:"Integrate the database to Otterize Cloud",id:"integrate-the-database-to-otterize-cloud",level:3},{value:"Integrate the cluster to Otterize Cloud",id:"integrate-the-cluster-to-otterize-cloud",level:3},{value:"View logs for the server",id:"view-logs-for-the-server",level:3},{value:"Define your ClientIntents",id:"define-your-clientintents",level:3}],u=e=>{let{children:t}=e;return(0,o.yg)("div",{style:{backgroundColor:"#eee",borderRadius:"5px",fontSize:"12px",fontWeight:"600",color:"darkgreen",padding:"1rem",fontFamily:"monospace, monospace"}},t)},d={toc:c,Terminal:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,o.yg)(p,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"overview"},"Overview"),(0,o.yg)("p",null,"This tutorial will deploy an example cluster to highlight Otterize's PostgreSQL capabilities. Within that cluster is a client service that hits an endpoint on a server, which then connects to a database. The server runs two different database operations:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"An ",(0,o.yg)("inlineCode",{parentName:"li"},"INSERT")," operation to append a table within the database"),(0,o.yg)("li",{parentName:"ol"},"A ",(0,o.yg)("inlineCode",{parentName:"li"},"SELECT")," operation to validate the updates.")),(0,o.yg)("p",null,"The server needs appropriate permissions to access the database. You could use one admin user for all services, which is insecure and is the cause for many security breaches. With Otterize, you can specify required access, and have Otterize create users and perform correctly scoped SQL GRANTs just in time, as the service spins up and down."),(0,o.yg)("p",null,"In this tutorial, we will:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Deploy an example cluster"),(0,o.yg)("li",{parentName:"ul"},"Make our database accessible to Otterize Cloud"),(0,o.yg)("li",{parentName:"ul"},"Connect our cluster and database to Otterize Cloud"),(0,o.yg)("li",{parentName:"ul"},"Declare a ClientIntents resource for the server, specifying required access"),(0,o.yg)("li",{parentName:"ul"},"See that the required access has been granted")),(0,o.yg)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("h4",{id:"1-minikube-cluster"},"1. Minikube Cluster"),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Prepare a Kubernetes cluster with Minikube"),(0,o.yg)("p",null,"For this tutorial you'll need a local Kubernetes cluster. Having a cluster with a ",(0,o.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"},"CNI")," that supports ",(0,o.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"NetworkPolicies")," isn't required for this tutorial, but is recommended so that your cluster works with other tutorials."),(0,o.yg)("p",null,"If you don't have the Minikube CLI, first ",(0,o.yg)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"install it"),"."),(0,o.yg)("p",null,"Then start your Minikube cluster with Calico, in order to enforce network policies."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"minikube start --cpus=4 --memory 4096 --disk-size 32g --cni=calico\n"))),(0,o.yg)("h4",{id:"2-ngrok"},"2. ngrok"),(0,o.yg)("p",null,"We will be using it to create a proxy to connect our locally running database to Otterize Cloud, for the tutorial's purposes. Once you have a ",(0,o.yg)("a",{parentName:"p",href:"https://dashboard.ngrok.com/signup"},"ngrok account"),", you\u2019ll want to install it in your terminal using the instructions found here: ",(0,o.yg)("a",{parentName:"p",href:"https://ngrok.com/download"},"ngrok install")),(0,o.yg)("h1",{id:"tutorial"},"Tutorial"),(0,o.yg)("h3",{id:"deploy-tutorial-services-and-request-database-credentials"},"Deploy tutorial services and request database credentials"),(0,o.yg)("p",null,"This will set up the namespace we will use for our tutorial and deploy the client, server, and database."),(0,o.yg)("p",null,"Our server's Deployment spec will specify an annotation on the Pod, which requests that the credentials operator will provision a username and password for the server."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"  template:\n    metadata:\n      annotations:\n        credentials-operator.otterize.com/user-password-secret-name: server-creds\n")),(0,o.yg)("p",null,"This specifies that the secret ",(0,o.yg)("inlineCode",{parentName:"p"},"server-creds")," will have keys with the username and password to connect to the database.\nThe secret will only be created once the database is integrated with Otterize Cloud."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace otterize-tutorial-postgres\nkubectl apply -n otterize-tutorial-postgres -f ${ABSOLUTE_URL}/code-examples/postgres/client-server-database.yaml\n")),(0,o.yg)("h3",{id:"make-the-database-accessible-to-otterize-cloud"},"Make the database accessible to Otterize Cloud"),(0,o.yg)("p",null,"We need to allow Otterize Cloud to access the database server so Otterize Cloud can configure on-demand credentials for our server\u2019s access. This tutorial will expose our database port to our local environment and then proxy it to Otterize Cloud using ngrok. We will need both of these processes up and running during the rest of this tutorial."),(0,o.yg)("p",null,"In a new terminal window, run the following command to forward our database port from our cluster into your local environment:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward svc/database 5432:5432 -n otterize-tutorial-postgres\n")),(0,o.yg)("p",null,"Now that your database port is accessible to your local environment, we are using ngrok to make that available to Otterize Cloud. For production uses, this can be done through firewall configurations."),(0,o.yg)("p",null,"In a new terminal window, run:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"ngrok tcp 5432\n")),(0,o.yg)("p",null,"Once ngrok is running, make note of the ",(0,o.yg)("em",{parentName:"p"},"Forwarding")," host and port. Will need this for our next step."),(0,o.yg)("h3",{id:"integrate-the-database-to-otterize-cloud"},"Integrate the database to Otterize Cloud"),(0,o.yg)("p",null,"To add the database, we head over to the ",(0,o.yg)("a",{parentName:"p",href:"https://app.otterize.com/integrations"},"Integrations page")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Click ",(0,o.yg)("em",{parentName:"li"},"Add Integration")),(0,o.yg)("li",{parentName:"ol"},"Select Integration Type: ",(0,o.yg)("em",{parentName:"li"},"Database")),(0,o.yg)("li",{parentName:"ol"},"Provide a name for the integration: ",(0,o.yg)("em",{parentName:"li"},"otterize-tutorial-postgres")),(0,o.yg)("li",{parentName:"ol"},"Leave the database type set to ",(0,o.yg)("em",{parentName:"li"},"PostgreSQL")),(0,o.yg)("li",{parentName:"ol"},"Copy your ",(0,o.yg)("em",{parentName:"li"},"Forwarding")," host and port from ngrok in the ",(0,o.yg)("em",{parentName:"li"},"Address")," Field. This will look something like ",(0,o.yg)("inlineCode",{parentName:"li"},"0.tcp.us-cal-1.ngrok.io:14192"),". Be sure to remove the ",(0,o.yg)("inlineCode",{parentName:"li"},"tcp://")," portion of the URL."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("em",{parentName:"li"},"Username"),": otterize-tutorial, ",(0,o.yg)("em",{parentName:"li"},"Password"),": jeffdog523"),(0,o.yg)("li",{parentName:"ol"},"Note this is a superuser, which allows Otterize to create unique credentials for each service. For production, it is recommended to create a privileged user for Otterize\u2019s exclusive use. This user should have the necessary permissions to GRANT access to any databases and tables you want it to manage."),(0,o.yg)("li",{parentName:"ol"},"Hit ",(0,o.yg)("em",{parentName:"li"},"Test Connection"),", and you should see an \u201cOK\u201d status."),(0,o.yg)("li",{parentName:"ol"},"Hit the Add button to complete the integration")),(0,o.yg)("h3",{id:"integrate-the-cluster-to-otterize-cloud"},"Integrate the cluster to Otterize Cloud"),(0,o.yg)("p",null,"Create a Kubernetes integration on the ",(0,o.yg)("a",{parentName:"p",href:"https://app.otterize.com/integrations"},"Integrations page"),", and follow the instructions."),(0,o.yg)("p",null,"In the second step, after providing an integration name and environment, choose:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"mTLS and Kafka Support: None"),(0,o.yg)("li",{parentName:"ol"},"Enforcement mode: Enabled."),(0,o.yg)("li",{parentName:"ol"},"Copy and run the Helm upgrade command."),(0,o.yg)("li",{parentName:"ol"},"You should see the Connection status change.")),(0,o.yg)("h3",{id:"view-logs-for-the-server"},"View logs for the server"),(0,o.yg)("p",null,"After the client, server, and database are up and running, we can see that the server does not have the appropriate access to the database by inspecting the logs with the following command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl logs -f -n otterize-tutorial-postgres deploy/server\n")),(0,o.yg)("p",null,"Example log:"),(0,o.yg)(u,{mdxType:"Terminal"},'pq: password authentication failed for user "svc_9cigb2qemv_otterize_tutorial_postgres_server"'),(0,o.yg)("h3",{id:"define-your-clientintents"},"Define your ClientIntents"),(0,o.yg)("p",null,"ClientIntents are Otterize\u2019s way of defining access through unique relationships, which lead to perfectly scoped access. In this example, we provide our ",(0,o.yg)("inlineCode",{parentName:"p"},"server")," service the ability to insert select records to allow it to access the database."),(0,o.yg)("p",null,"Below is our ",(0,o.yg)("inlineCode",{parentName:"p"},"intents.yaml")," file. As you can see, it is scoped to our database named ",(0,o.yg)("inlineCode",{parentName:"p"},"otterize-tutorial")," and our ",(0,o.yg)("inlineCode",{parentName:"p"},"public.example")," table. We also have limited the access to just ",(0,o.yg)("inlineCode",{parentName:"p"},"SELECT")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"INSERT")," operations. We could add more databases, tables, or operations if our service required more access."),(0,o.yg)("p",null,"Specifying the table and operations is optional. If you don't specify the table, access will be granted to all tables in the specified database. If you don't specify the operations, all operations will be allowed."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: client-intents-for-server\n  namespace: otterize-tutorial-postgres\nspec:\n  service:\n    name: server\n  calls:\n    - name: otterize-tutorial-postgres # Same name as our integration\n      type: database\n      databaseResources:\n        - databaseName: otterize-tutorial\n          table: public.example\n          operations:\n            - SELECT\n            - INSERT\n")),(0,o.yg)("p",null,"We can now apply our intents. Behind the scenes, Otterize Cloud runs ",(0,o.yg)("inlineCode",{parentName:"p"},"CREATE USER")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"GRANT")," queries on the database, making our ",(0,o.yg)("inlineCode",{parentName:"p"},"SELECT")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"INSERT")," errors disappear."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f intents.yaml\n")),(0,o.yg)("p",null,"Example log:"),(0,o.yg)(u,{mdxType:"Terminal"},"Successfully INSERTED into our table Successfully SELECTED, most recent value:  2024-01-22T18:48:43Z"),(0,o.yg)("p",null,"That\u2019s it! If your service\u2019s functionality changes, adding or removing access is as simple as updating your ClientIntents definitions. For fun, try altering the ",(0,o.yg)("inlineCode",{parentName:"p"},"operations")," to just ",(0,o.yg)("inlineCode",{parentName:"p"},"SELECT")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"INSERT"),"."),(0,o.yg)("h1",{id:"teardown"},"Teardown"),(0,o.yg)("p",null,"To remove the deployed examples, run:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl delete namespace otterize-tutorial-postgres\n")),(0,o.yg)("p",null,"End the ngrok and port forwarding processes by closing the terminal windows or Ctrl-C the processes."))}m.isMDXComponent=!0}}]);