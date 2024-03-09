"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6326],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,y=u["".concat(s,".").concat(m)]||u[m]||g[m]||o;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9365:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(6540),r=n(53);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:n},t)}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(8168),r=n(6540),o=n(53),l=n(3104),i=n(6347),s=n(7485),c=n(1682),p=n(9466);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function g(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=g(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=y({queryString:n,groupId:a}),[u,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),d(e)}),[c,d,o]),tabValues:o}}var f=n(2303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),g=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==i&&(u(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:g},l,{className:(0,o.A)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=d(e);return r.createElement("div",{className:(0,o.A)("tabs-container",h.tabList)},r.createElement(w,(0,a.A)({},e,t)),r.createElement(b,(0,a.A)({},e,t)))}function k(e){const t=(0,f.A)();return r.createElement(v,(0,a.A)({key:String(t)},e))}},3306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(8168),r=(n(6540),n(5680)),o=n(1470),l=n(9365);const i={sidebar_position:1,title:"Network Policies Deep Dive"},s=void 0,c={unversionedId:"features/network-mapping-network-policies/reference/Network-Policies-Deep-Dive",id:"features/network-mapping-network-policies/reference/Network-Policies-Deep-Dive",title:"Network Policies Deep Dive",description:"Network policies are one of the tools we",source:"@site/docs/features/network-mapping-network-policies/reference/Network-Policies-Deep-Dive.mdx",sourceDirName:"features/network-mapping-network-policies/reference",slug:"/features/network-mapping-network-policies/reference/Network-Policies-Deep-Dive",permalink:"/features/network-mapping-network-policies/reference/Network-Policies-Deep-Dive",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/features/network-mapping-network-policies/reference/Network-Policies-Deep-Dive.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Network Policies Deep Dive"},sidebar:"docSidebar",previous:{title:"Reference",permalink:"/features/network-mapping-network-policies/reference/"},next:{title:"AWS IAM | Overview",permalink:"/features/aws-iam/"}},p={},u=[{value:"Closer look at a network policy",id:"closer-look-at-a-network-policy",level:2},{value:"Setting security scope via default network policies",id:"setting-security-scope-via-default-network-policies",level:2},{value:"Default deny network policy",id:"default-deny-network-policy",level:2},{value:"Global ingress default deny policy with Calico",id:"global-ingress-default-deny-policy-with-calico",level:2},{value:"Tip: Using a global <em>egress</em> default deny policy with Calico",id:"tip-using-a-global-egress-default-deny-policy-with-calico",level:2},{value:"Working with third-party Helm charts and a default deny policy",id:"working-with-third-party-helm-charts-and-a-default-deny-policy",level:2},{value:"Auto-generating network policies for external traffic",id:"auto-generating-network-policies-for-external-traffic",level:2},{value:"How intents translate to network policies",id:"how-intents-translate-to-network-policies",level:2},{value:"Deploy example",id:"deploy-example",level:3},{value:"Track artifacts",id:"track-artifacts",level:3}],g={toc:u},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"Network policies")," are one of the tools we\ncan use for traffic shaping within K8s clusters. They allow us to shape traffic using selectors, policies, and L3\nand L4 identifiers. To enforce network policies, a Kubernetes cluster requires a CNI supporting network policies to be\ninstalled. Some popular options are Calico and Cilium."),(0,r.yg)("h2",{id:"closer-look-at-a-network-policy"},"Closer look at a network policy"),(0,r.yg)("p",null,"Let's take a look at an example showing a network policy allowing traffic:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"From pods labeled ",(0,r.yg)("strong",{parentName:"li"},"app:backend")," in namespaces labeled ",(0,r.yg)("strong",{parentName:"li"},"env:production"),"."),(0,r.yg)("li",{parentName:"ul"},"To pods labeled ",(0,r.yg)("strong",{parentName:"li"},"app:db")," in the namespace  ",(0,r.yg)("strong",{parentName:"li"},"production-db"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-production-backend\n  # highlight-next-line\n  namespace: production-db            # [Target filter] applies to pods in this namespace\nspec:\n  podSelector:\n    matchLabels:\n      # highlight-next-line\n      app: db                         # [Target filter] applies to pods with this label\n  policyTypes:\n    # highlight-next-line\n    - Ingress                         # [Direction] implemented as a filter on incoming connections\n  ingress:\n    - from:\n        - namespaceSelector:\n            matchLabels:\n              # highlight-next-line\n              env: production         # [Source filter] applies to namespaces with this label\n        - podSelector:\n            matchLabels:\n              # highlight-next-line\n              app: backend            # [Source filter] applies to pods with this label\n")),(0,r.yg)("h2",{id:"setting-security-scope-via-default-network-policies"},"Setting security scope via default network policies"),(0,r.yg)("p",null,"Two common approaches for working with network policies are:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Allow all traffic between pods, protect some pods by applying ingress network policies to them."),(0,r.yg)("li",{parentName:"ul"},"Block all traffic between pods except allowed traffic by network policies.")),(0,r.yg)("p",null,"You can apply both approaches (allow/block all) within your cluster (e.g. by applying network policies based on\nnamespaces)."),(0,r.yg)("h2",{id:"default-deny-network-policy"},"Default deny network policy"),(0,r.yg)("p",null,"To block all traffic within a namespace, you can apply a default deny network policy to that namespace. After applying this policy, only traffic allowed by network policies, such as those generated automatically from ClientIntents, will be allowed within that namespace."),(0,r.yg)("p",null,"Such a policy only blocks ingress traffic, so it does not prevent pods from connecting to the Internet. Enforcement is performed at the ingress to pods. This is appropriate for achieving in-cluster service-to-service zero trust and network segmentation within a namespace."),(0,r.yg)("p",null,"Here is such a policy that you can apply to any namespace:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-deny-ingress\nspec:\n  podSelector: { }\n  policyTypes:\n    - Ingress\n")),(0,r.yg)("h2",{id:"global-ingress-default-deny-policy-with-calico"},"Global ingress default deny policy with Calico"),(0,r.yg)("p",null,"If using Calico as your CNI for network policies, you can deploy a global (cluster-wide, across multiple namespaces), ingress-type default deny network policy. After applying this policy, only traffic allowed by network policies, such as those generated automatically from ClientIntents, will be allowed throughout the cluster."),(0,r.yg)("p",null,"It's important to exempt Otterize and Calico and the Kubernetes infrastructure itself from this policy, so they can function correctly by receiving calls from the Kubernetes API server."),(0,r.yg)("p",null,"Such a policy only blocks ingress traffic, so it does not prevent pods from connecting to the Internet. Enforcement is performed at the ingress to pods. This is appropriate for achieving in-cluster service-to-service zero trust and network segmentation across an entire cluster."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: projectcalico.org/v3\nkind: GlobalNetworkPolicy\nmetadata:\n  name: global-deny-ingress\nspec:\n  # highlight-next-line\n  # Exclude kube-system, calico-system, calico-apiserver and otterize-system\n  namespaceSelector: has(projectcalico.org/name) && projectcalico.org/name not in {"kube-system", "calico-system", "calico-apiserver", "otterize-system"}\n  types:\n  # highlight-next-line\n  - Ingress # Ingress-only\n')),(0,r.yg)("h2",{id:"tip-using-a-global-egress-default-deny-policy-with-calico"},"Tip: Using a global ",(0,r.yg)("em",{parentName:"h2"},"egress")," default deny policy with Calico"),(0,r.yg)("p",null,"If using Calico for network policies, you might choose to deploy a global (cluster-wide, across multiple namespaces) default ",(0,r.yg)("strong",{parentName:"p"},"egress")," deny network policy, in order to restrict egress traffic going out of the cluster. If so, it is important to exempt Otterize and Calico from this policy so that they are able to function correctly.\nAlso, note that Otterize-managed network policies only apply to traffic within the cluster."),(0,r.yg)("p",null,"To work well with an ingress default deny policy, an egress policy should not prevent traffic within the cluster ","\u2014"," the global default deny ingress policy will already block all in-cluster traffic by default, and ClientIntents will then allow intended traffic."),(0,r.yg)("p",null,"Here is an example of how you can achieve this by explicitly allowlisting certain pod IPs. You will need to substitute the appropriate IPs for your pods. This is usually part of your CNI or cluster configuration."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: projectcalico.org/v3\nkind: GlobalNetworkPolicy\nmetadata:\n  name: default-deny-egress\nspec:\n  namespaceSelector: has(projectcalico.org/name) && projectcalico.org/name not in {"kube-system", "calico-system", "calico-apiserver"}\n  types:\n  - Egress\n  egress:\n   # Allow all namespaces to communicate to DNS pods\n  - action: Allow\n    protocol: UDP\n    destination:\n      selector: \'k8s-app == "kube-dns"\'\n      ports: ["53"]\n    # Allow all namespaces to talk to the internet on port 443\n  - action: Allow\n    protocol: TCP\n    destination:\n      nets: ["0.0.0.0/0"]\n      ports: ["443"]\n    # Allow all namespaces to talk on egress to any port inside the cluster or in the VPC.\n    # Effectively, ingress default deny would still block any intra-cluster traffic\n    # not explicitly allowed by a dedicated network policy.\n  - action: Allow\n    protocol: TCP\n    destination:\n    # highlight-start\n    # update these IP addresses to match your pods\n      nets: ["10.0.0.0/16","172.20.0.0/16"]\n    # highlight-end\n')),(0,r.yg)("h2",{id:"working-with-third-party-helm-charts-and-a-default-deny-policy"},"Working with third-party Helm charts and a default deny policy"),(0,r.yg)("p",null,"After applying a default deny policy, you will need network policies for intended traffic to go through.\nThe Otterize network mapper generates ClientIntents for your cluster, but we recommend you use ClientIntents for services that are functional clients, rather than purely operational infrastructure (e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"checkoutservice")," is a client, while Prometheus is purely operational infrastructure). So you will need to enable traffic to/from such infrastructure outside of Otterize."),(0,r.yg)("p",null,"Many third-party Helm charts come with a ready-made network policy to use when deployed into a cluster that uses a default deny policy. Simply enable them using the values found in the chart."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"We recommend using these explicit network policies rather than ClientIntents, as this relieves the infrastructure or platform team in your organization from maintaining ClientIntents for infrastructure services: instead, the Helm chart will always have the most accurate infrastructural network policies.")),(0,r.yg)("h2",{id:"auto-generating-network-policies-for-external-traffic"},"Auto-generating network policies for external traffic"),(0,r.yg)("p",null,"The intents operator defaults to automatically generate network policies for Kubernetes ",(0,r.yg)("strong",{parentName:"p"},"Services")," (type ",(0,r.yg)("strong",{parentName:"p"},"LoadBalancer")," and ",(0,r.yg)("strong",{parentName:"p"},"NodePort"),"), and Ingress traffic\nwhen an intent will generate a network policy that can block external traffic. To disable this feature, consult the ",(0,r.yg)("a",{parentName:"p",href:"/reference/configuration/intents-operator"},"documentation for the intents operator"),"."),(0,r.yg)("p",null,"Let's look at an example from our demo. We have a ",(0,r.yg)("strong",{parentName:"p"},"frontend")," service being accessed from multiple sources:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"loadgenerator")," calls it from within the cluster to generate traffic, by accessing the ",(0,r.yg)("strong",{parentName:"li"},"frontend")," ",(0,r.yg)("strong",{parentName:"li"},"ClusterIP Service"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"frontend-external")," is a ",(0,r.yg)("strong",{parentName:"li"},"Service")," with type ",(0,r.yg)("strong",{parentName:"li"},"LoadBalancer")," directing traffic from outside the cluster to the frontend pods. The ",(0,r.yg)("strong",{parentName:"li"},"LoadBalancer")," type means that a cloud provider load balancer will be created and point traffic from the Internet to these pods.")),(0,r.yg)("p",null,"By applying the following intents file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: loadgenerator\nspec:\n  service:\n    name: loadgenerator\n  calls:\n    - name: frontend\n")),(0,r.yg)("p",null,"Otterize will generate a network policy allowing access from the ",(0,r.yg)("strong",{parentName:"p"},"loadgenerator")," service to the ",(0,r.yg)("strong",{parentName:"p"},"frontend")," service.\nOnce a single network policy matches a pod, other traffic not allowed by existing network policies to the ",(0,r.yg)("strong",{parentName:"p"},"frontend")," will get blocked. In our\ncase that means that the ",(0,r.yg)("strong",{parentName:"p"},"frontend-external")," ",(0,r.yg)("strong",{parentName:"p"},"LoadBalancer")," won't be able to communicate with ",(0,r.yg)("strong",{parentName:"p"},"frontend"),"."),(0,r.yg)("p",null,"To overcome this, Otterize will automatically generate a network policy to allow traffic from ",(0,r.yg)("strong",{parentName:"p"},"frontend-external"),"\nto ",(0,r.yg)("strong",{parentName:"p"},"frontend")," by relying on the existence of the ",(0,r.yg)("strong",{parentName:"p"},"LoadBalancer Service")," as an indicator of intent between the two."),(0,r.yg)("p",null,"Why doesn't Otterize always generate network policies for ingress types?\nBecause if no network policies exist, automatically generating a network policy to allow ",(0,r.yg)("strong",{parentName:"p"},"frontend-external")," -> ",(0,r.yg)("strong",{parentName:"p"},"frontend"),"\nwould block existing traffic like ",(0,r.yg)("strong",{parentName:"p"},"loadgenerator")," -> ",(0,r.yg)("strong",{parentName:"p"},"frontend"),"."),(0,r.yg)("h2",{id:"how-intents-translate-to-network-policies"},"How intents translate to network policies"),(0,r.yg)("p",null,"Let's follow an example scenario and track how Otterize configures network policies when we apply intents."),(0,r.yg)("h3",{id:"deploy-example"},"Deploy example"),(0,r.yg)("p",null,"Our example consists of two pods: an HTTP server and a client that calls it."),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Expand to see the example YAML files"),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"namespace.yaml",label:"namespace.yaml",default:!0,mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: otterize-tutorial-npol\n"))),(0,r.yg)(l.A,{value:"server.yaml",label:"server.yaml",default:!0,mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: server\n  namespace:  otterize-tutorial-npol\nspec:\n  selector:\n    matchLabels:\n      app: server\n  template:\n    metadata:\n      labels:\n        app: server\n    spec:\n      containers:\n        - name: server\n          image: node:19\n          command: [ "/bin/sh","-c" ]\n          args: [ "echo \\"Hi, I am the server, you called, may I help you?\\" > index.html; npx --yes http-server -p 80 " ]\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: server\n  namespace:  otterize-tutorial-npol\nspec:\n  selector:\n    app: server\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 80\n'))),(0,r.yg)(l.A,{value:"client.yaml",label:"client.yaml",default:!0,mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: client\n  namespace:  otterize-tutorial-npol\nspec:\n  selector:\n    matchLabels:\n      app: client\n  template:\n    metadata:\n      labels:\n        app: client\n    spec:\n      containers:\n        - name: client\n          image: alpine/curl\n          command: [ "/bin/sh", "-c", "--" ]\n          args: [ "while true; do echo \\"Calling server...\\"; if ! timeout 2 curl -si server 2>/dev/null; then echo \\"curl timed out\\"; fi; sleep 2; done" ]\n'))))),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Deploy the ",(0,r.yg)("strong",{parentName:"p"},"client")," and ",(0,r.yg)("strong",{parentName:"p"},"server")," using ",(0,r.yg)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ${ABSOLUTE_URL}/code-examples/automate-network-policies/all.yaml\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Check that the ",(0,r.yg)("strong",{parentName:"p"},"client")," and ",(0,r.yg)("strong",{parentName:"p"},"server")," pods were deployed:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-npol\n")),(0,r.yg)("p",{parentName:"li"},"You should see:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"NAME                      READY   STATUS    RESTARTS   AGE\nclient-5689997b5c-grlnt   1/1     Running   0          35s\nserver-6698c58cbc-v9n9b   1/1     Running   0          34s\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("strong",{parentName:"p"},"client")," intents to call the server are declared with this ",(0,r.yg)("inlineCode",{parentName:"p"},"intents.yaml")," file:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: client\n  namespace:  otterize-tutorial-npol\nspec:\n  service:\n    name: client\n  calls:\n    - name: server\n")),(0,r.yg)("p",null,"   Let's apply it:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ${ABSOLUTE_URL}/code-examples/automate-network-policies/intents.yaml\n")),(0,r.yg)("h3",{id:"track-artifacts"},"Track artifacts"),(0,r.yg)("p",null,"After applying the intents file Otterize performed multiple actions to allow access from the client to the server using network policies:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Create a network policy allowing traffic from the ","[client, namespace -labeled]"," pods to ","[server-labeled]"," pods"),(0,r.yg)("li",{parentName:"ul"},"Label the client pods"),(0,r.yg)("li",{parentName:"ul"},"Label the client pod namespaces"),(0,r.yg)("li",{parentName:"ul"},"Label the server pods")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Let's look at the generated network policy:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl describe networkpolicies -n otterize-tutorial-npol access-to-server-from-otterize-tutorial-npol\n")),(0,r.yg)("p",{parentName:"li"},"You should see (without the comments):"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"Name:         access-to-server-from-otterize-tutorial-npol\n# [Target filter] namespace\n# highlight-next-line\nNamespace:    otterize-tutorial-npol\nCreated on:   2022-09-08 19:12:24 +0300 IDT\nLabels:       intents.otterize.com/network-policy=true\nAnnotations:  <none>\nSpec:\n  # [Target filter] pods with this label\n  # highlight-next-line\n  PodSelector:     intents.otterize.com/server=server-otterize-tutorial-np-7e16db\n  Allowing ingress traffic:\n    To Port: <any> (traffic allowed to all ports)\n    From:\n      # [Source filter] namespaces with this label\n      # highlight-next-line\n      NamespaceSelector: intents.otterize.com/namespace-name=otterize-tutorial-npol\n      # [Source filter] pods with this label\n      # highlight-next-line\n      PodSelector: intents.otterize.com/access-server-otterize-tutorial-np-7e16db=true\n  Not affecting egress traffic\n  # [Direction]\n  # highlight-next-line\n  Policy Types: Ingress\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"And we can also see that the client and server pods are now labeled:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-npol --show-labels\n")),(0,r.yg)("p",{parentName:"li"},"You should see:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"NAME                      READY   STATUS    RESTARTS   AGE     LABELS\nclient-5cb67b748-l25vg    1/1     Running   0          7m57s   intents.otterize.com/access-server-otterize-tutorial-np-7e16db=true,intents.otterize.com/client=true,intents.otterize.com/server=client-otterize-tutorial-np-699302,pod-template-hash=5cb67b748,credentials-operator.otterize.com/service-name=client\nserver-564b56f596-54str   1/1     Running   0          7m56s   intents.otterize.com/server=server-otterize-tutorial-np-7e16db,pod-template-hash=564b56f596,credentials-operator.otterize.com/service-name=server\n")),(0,r.yg)("p",{parentName:"li"},"When we break down the label structure we can see:"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"For the server - ",(0,r.yg)("span",{style:{color:"gray"}},"intents.otterize.com/server"),"=",(0,r.yg)("span",{style:{color:"magenta"}},"server"),"-",(0,r.yg)("span",{style:{color:"red"}},"otterize-tutorial-np"),"-",(0,r.yg)("span",{style:{color:"green"}},"7e16db"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("span",{style:{color:"gray"}},"intents.otterize.com/server")," - Label prefix for servers"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("span",{style:{color:"magenta"}},"server")," - Server pod name"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("span",{style:{color:"red"}},"otterize-tutorial-np")," - Server pod namespace (might be truncated)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("span",{style:{color:"green"}},"7e16db")," - Hash for server pod name and and namespace"))),(0,r.yg)("li",{parentName:"ul"},"For the client - ",(0,r.yg)("span",{style:{color:"gray"}},"intents.otterize.com/access"),"-",(0,r.yg)("span",{style:{color:"magenta"}},"server"),"-",(0,r.yg)("span",{style:{color:"red"}},"otterize-tutorial-np"),"-",(0,r.yg)("span",{style:{color:"green"}},"7e16db"),"=true",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("span",{style:{color:"gray"}},"intents.otterize.com/access")," - Label prefix for clients"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("span",{style:{color:"magenta"}},"server")," - Server pod name"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("span",{style:{color:"red"}},"otterize-tutorial-np")," - Server pod namespace (might be truncated)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("span",{style:{color:"green"}},"7e16db")," - Hash for server pod name and and namespace")))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Finally, let's look at the namespace label with:",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get namespace otterize-tutorial-npol --show-labels\n")),"  You should see:",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"NAME                     STATUS   AGE   LABELS\notterize-tutorial-npol   Active   36s   intents.otterize.com/namespace-name=otterize-tutorial-npol,kubernetes.io/metadata.name=otterize-tutorial-npol\n")),"  With the new label added by Otterize - ",(0,r.yg)("strong",{parentName:"li"},"intents.otterize.com/namespace-name=otterize-tutorial-npol"))))}y.isMDXComponent=!0}}]);