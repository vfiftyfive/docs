"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8146,7918],{5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const l={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l.tabItem,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),o=n(7294),l=n(6010),r=n(2466),i=n(6550),s=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,o.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[r,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,c]=h({queryString:n,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,o.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),k(e)}),[c,k,l]),tabValues:l}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==i&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},r,{className:(0,l.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":i===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function f(e){const t=k(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},o.createElement(y,(0,a.Z)({},e,t)),o.createElement(w,(0,a.Z)({},e,t)))}function v(e){const t=(0,b.Z)();return o.createElement(f,(0,a.Z)({key:String(t)},e))}},3155:(e,t,n)=>{n.d(t,{Z:()=>O});var a=n(7462),o=n(7294),l=n(2389),r=n(6010),i=n(6412),s=n(5281),c=n(7016);const u={codeBlockContainer:"codeBlockContainer_APcc"};function p(e){let{as:t,...n}=e;const l=(0,i.p)(),p=(0,c.QC)(l);return o.createElement(t,(0,a.Z)({},n,{style:p,className:(0,r.Z)(n.className,u.codeBlockContainer,s.k.common.codeBlock)}))}const d={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function m(e){let{children:t,className:n}=e;return o.createElement(p,{as:"pre",tabIndex:0,className:(0,r.Z)(d.codeBlockStandalone,"thin-scrollbar",n)},o.createElement("code",{className:d.codeBlockLines},t))}var h=n(6668),k=n(5448),b=n(3746);const g={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};var y=n(4996);function w(e){let{line:t,classNames:n,showLineNumbers:l,getLineProps:i,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=i({line:t,className:(0,r.Z)(n,l&&g.codeLine)}),u=t.map(((e,t)=>o.createElement("span",(0,a.Z)({key:t},s({token:e,key:t})))));return o.createElement("span",c,l?o.createElement(o.Fragment,null,o.createElement("span",{className:g.codeLineNumber}),o.createElement("span",{className:g.codeLineContent},u)):u,o.createElement("br",null))}var f=n(195),v=n(5999),N=n(345),z=n(7666);const C={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function S(e){let{code:t,className:n}=e;const[a,l]=(0,o.useState)(!1),i=(0,o.useRef)(void 0),s=(0,o.useCallback)((()=>{(0,f.Z)(t),l(!0),i.current=window.setTimeout((()=>{l(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(i.current)),[]),o.createElement("button",{type:"button","aria-label":a?(0,v.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,v.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,v.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,C.copyButton,a&&C.copyButtonCopied),onClick:s},o.createElement("span",{className:C.copyButtonIcons,"aria-hidden":"true"},o.createElement(N.Z,{className:C.copyButtonIcon}),o.createElement(z.Z,{className:C.copyButtonSuccessIcon})))}var I=n(670);const T={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function E(e){let{className:t,onClick:n,isEnabled:a}=e;const l=(0,v.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:n,className:(0,r.Z)("clean-btn",t,a&&T.wordWrapButtonEnabled),"aria-label":l,title:l},o.createElement(I.Z,{className:T.wordWrapButtonIcon,"aria-hidden":"true"}))}function _(e){let{children:t,className:n="",metastring:l,title:s,showLineNumbers:u,language:m}=e;const{prism:{defaultLanguage:g,magicComments:f}}=(0,h.L)(),v=m??(0,c.Vo)(n)??g,N=(0,i.p)(),z=(0,k.F)(),C=(0,c.bc)(l)||s,{lineClassNames:I,code:T}=(0,c.nZ)(t,{metastring:l,language:v,magicComments:f}),_=(0,y.Z)("/",{absolute:!0}).slice(0,-1),O=T.replaceAll("${ABSOLUTE_URL}",_),A=u??(0,c.nt)(l);return o.createElement(p,{as:"div",className:(0,r.Z)(n,v&&!n.includes(`language-${v}`)&&`language-${v}`)},C&&o.createElement("div",{className:d.codeBlockTitle},C),o.createElement("div",{className:d.codeBlockContent},o.createElement(b.ZP,(0,a.Z)({},b.lG,{theme:N,code:O,language:v??"text"}),(e=>{let{className:t,tokens:n,getLineProps:a,getTokenProps:l}=e;return o.createElement("pre",{tabIndex:0,ref:z.codeBlockRef,className:(0,r.Z)(t,d.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,r.Z)(d.codeBlockLines,A&&d.codeBlockLinesWithNumbering)},n.map(((e,t)=>o.createElement(w,{key:t,line:e,getLineProps:a,getTokenProps:l,classNames:I[t],showLineNumbers:A})))))})),o.createElement("div",{className:d.buttonGroup},(z.isEnabled||z.isCodeScrollable)&&o.createElement(E,{className:d.codeButton,onClick:()=>z.toggle(),isEnabled:z.isEnabled}),o.createElement(S,{className:d.codeButton,code:O}))))}function O(e){let{children:t,...n}=e;const r=(0,l.Z)(),i=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof i?_:m;return o.createElement(s,(0,a.Z)({key:String(r)},n),i)}},5147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),l=(n(3155),n(4866)),r=n(5162);const i={sidebar_position:2,title:"Network policies on AWS EKS with the VPC CNI"},s=void 0,c={unversionedId:"quickstart/access-control/aws-eks-cni-mini",id:"quickstart/access-control/aws-eks-cni-mini",title:"Network policies on AWS EKS with the VPC CNI",description:"This tutorial will walk you through deploying an AWS EKS cluster with the AWS VPC CNI add-on, while enabling the new network policy support on EKS with Otterize.",source:"@site/docs/quickstart/access-control/aws-eks-cni-mini.mdx",sourceDirName:"quickstart/access-control",slug:"/quickstart/access-control/aws-eks-cni-mini",permalink:"/quickstart/access-control/aws-eks-cni-mini",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/quickstart/access-control/aws-eks-cni-mini.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Network policies on AWS EKS with the VPC CNI"},sidebar:"docSidebar",previous:{title:"NetworkPolicy automation",permalink:"/quickstart/access-control/k8s-network-policies"},next:{title:"Automate AWS IAM for EKS",permalink:"/quickstart/access-control/aws-iam-eks"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step one: Create an AWS EKS cluster with the AWS VPC CNI plugin",id:"step-one-create-an-aws-eks-cluster-with-the-aws-vpc-cni-plugin",level:2},{value:"Step two: Install the Otterize agents",id:"step-two-install-the-otterize-agents",level:2},{value:"Install Otterize on your cluster",id:"install-otterize-on-your-cluster",level:3},{value:"Create an Otterize Cloud account",id:"create-an-otterize-cloud-account",level:4},{value:"Install Otterize OSS, connected to Otterize Cloud",id:"install-otterize-oss-connected-to-otterize-cloud",level:4},{value:"Deploy a server and two clients",id:"deploy-a-server-and-two-clients",level:3},{value:"Step three: Create an intent",id:"step-three-create-an-intent",level:2},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial will walk you through deploying an AWS EKS cluster with the AWS VPC CNI add-on, while enabling the new network policy support on EKS with Otterize."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An EKS cluster with the AWS VPC CNI add-on installed and with the new built-in network policy support enabled. See ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/pod-networking.html"},"Installing the AWS VPC CNI add-on")," for more information, or follow the instructions below."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://docs.otterize.com/installation#install-the-otterize-cli"},"Otterize CLI"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html"},"AWS CLI"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")," command-line tool.")),(0,o.kt)("h2",{id:"step-one-create-an-aws-eks-cluster-with-the-aws-vpc-cni-plugin"},"Step one: Create an AWS EKS cluster with the AWS VPC CNI plugin"),(0,o.kt)("p",null,"Before you start, you'll need an AWS Kubernetes cluster. Having a cluster with a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"},"CNI")," that supports ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"NetworkPolicies")," is required for this tutorial."),(0,o.kt)("p",null,"Save this ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-config.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: eksctl.io/v1alpha5\nkind: ClusterConfig\n\nmetadata:\n  name: np-ipv4-127\n  region: us-west-2\n  version: "1.27"\n\niam:\n  withOIDC: true\n\nvpc:\n  clusterEndpoints:\n    publicAccess: true\n    privateAccess: true\n\naddons:\n  - name: vpc-cni\n    version: 1.14.0\n    attachPolicyARNs: #optional\n    - arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy\n    configurationValues: |-\n       # highlight-next-line\n      enableNetworkPolicy: "true"\n  - name: coredns\n  - name: kube-proxy\n\nmanagedNodeGroups:\n  - name: small-on-demand\n    amiFamily: AmazonLinux2\n    instanceTypes: [ "t3.large" ]\n    minSize: 0\n    desiredCapacity: 2\n    maxSize: 6\n    privateNetworking: true\n    disableIMDSv1: true\n    volumeSize: 100\n    volumeType: gp3\n    volumeEncrypted: true\n    tags:\n      team: "eks"\n')),(0,o.kt)("p",null,"Then run the following command to create your AWS cluster. ",(0,o.kt)("a",{parentName:"p",href:"https://eksctl.io/installation/"},"Don't have eksctl? Install it now.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"eksctl create cluster -f cluster-config.yaml\n")),(0,o.kt)("p",null,"Once your AWS EKS has finished deploying the control pane and node group, the next step is deploying Otterize as well as a couple of clients and a server to see how they are affected by network policies."),(0,o.kt)("h2",{id:"step-two-install-the-otterize-agents"},"Step two: Install the Otterize agents"),(0,o.kt)("h3",{id:"install-otterize-on-your-cluster"},"Install Otterize on your cluster"),(0,o.kt)("p",null,'You can now install Otterize in your cluster, and optionally connect to Otterize Cloud. Connecting to Cloud lets you see what\'s happening visually in your browser, through the "access graph".'),(0,o.kt)("p",null,"So either forego browser visualization and:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Install Otterize in your cluster, ",(0,o.kt)("b",null,"without")," Otterize Cloud"),(0,o.kt)("p",null,"   You'll need ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm")," installed on your machine to install Otterize as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm install otterize otterize/otterize-kubernetes -n otterize-system --create-namespace\n")),(0,o.kt)("p",null,"This chart is a bundle of the Otterize intents operator, Otterize credentials operator, Otterize network mapper, and SPIRE.\nInitial deployment may take a couple of minutes.\nYou can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--wait")," flag for Helm to wait for deployment to complete and all pods to be Ready, or manually watch for all pods to be ",(0,o.kt)("inlineCode",{parentName:"p"},"Ready")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system -w"),"."),(0,o.kt)("p",null,"After all the pods are ready you should see the following (or similar) in your terminal when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                       READY  STATUS  RESTARTS AGE\ncredentials-operator-controller-manager-6c56fcfcfb-vg6m9   2/2    Running   0     9s\nintents-operator-controller-manager-65bb6d4b88-bp9pf       2/2    Running   0     9s\notterize-network-mapper-779fffd959-twjqd                   1/1    Running   0     9s\notterize-network-sniffer-65mjt                             1/1    Running   0     9s\notterize-spire-agent-lcbq2                                 1/1    Running   0     9s\notterize-spire-server-0                                    2/2    Running   0     9s\notterize-watcher-b9bf87bcd-276nt                           1/1    Running   0     9s\n"))),(0,o.kt)("p",null,"Or choose to include browser visualization and:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Install Otterize in your cluster, ",(0,o.kt)("b",null,"with")," Otterize Cloud"),(0,o.kt)("h4",{id:"create-an-otterize-cloud-account"},"Create an Otterize Cloud account"),(0,o.kt)("p",null,"If you don't already have an account, browse to ",(0,o.kt)("a",{parentName:"p",href:"https://app.otterize.com"},"https://app.otterize.com")," to set one up."),(0,o.kt)("p",null,"If someone in your team has already created an org in Otterize Cloud, and invited you (using your email address), you may see an invitation to accept."),(0,o.kt)("p",null,"Otherwise, you'll create a new org, which you can later rename, and invite your teammates to join you there."),(0,o.kt)("h4",{id:"install-otterize-oss-connected-to-otterize-cloud"},"Install Otterize OSS, connected to Otterize Cloud"),(0,o.kt)("p",null,'If no Kubernetes clusters are connected to your account, click the "Connect your cluster" button to:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a Cloud cluster object, specifying its name and the name of an environment to which all namespaces in that cluster will belong, by default."),(0,o.kt)("li",{parentName:"ol"},'Connect it with your actual Kubernetes cluster, by clicking on the "Connection guide ',"\u2192",'" link and running the Helm commands shown there.\nChoose ',(0,o.kt)("inlineCode",{parentName:"li"},"Enfocement mode: disabled")," to apply shadow mode on every server until you're ready to protect it.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"More details, if you're curious"),(0,o.kt)("p",null,"Connecting your cluster simply entails installing Otterize OSS via Helm, using credentials from your account so Otterize OSS can report information needed to visualize the cluster."),(0,o.kt)("p",null,"The credentials will already be inlined into the Helm command shown in the Cloud UI, so you just need to copy that line and run it from your shell.\nIf you don't give it the Cloud credentials, Otterize OSS will run fully standalone in your cluster ","\u2014"," you just won't have the visualization in Otterize Cloud."),(0,o.kt)("p",null,'The Helm command shown in the Cloud UI also includes flags to turn off enforcement: Otterize OSS will be running in "shadow mode," meaning that it will not create network policies to restrict pod-to-pod traffic, or create Kafka ACLs to control access to Kafka topics. Instead, it will report to Otterize Cloud what ',(0,o.kt)("strong",{parentName:"p"},"would")," happen if enforcement were to be enabled, guiding you to implement IBAC without blocking intended access."))),(0,o.kt)("p",null,"Finally, you'll need to install the Otterize CLI (if you haven't already) to interact with the network mapper:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Install the Otterize CLI"),(0,o.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"mac",label:"Mac",default:!0,mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Brew",label:"Brew",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install otterize/otterize/otterize-cli\n"))),(0,o.kt)(r.Z,{value:"Apple Silicon",label:"Apple Silicon",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LJO https://get.otterize.com/otterize-cli/v1.0.1/otterize_macOS_arm64_notarized.zip\ntar xf otterize_macOS_arm64_notarized.zip\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))),(0,o.kt)(r.Z,{value:"Intel 64-bit",label:"Intel 64-bit",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LJO https://get.otterize.com/otterize-cli/v1.0.1/otterize_macOS_x86_64_notarized.zip\ntar xf otterize_macOS_x86_64_notarized.zip\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))))),(0,o.kt)(r.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Scoop",label:"Scoop",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-PowerShell"},"scoop bucket add otterize-cli https://github.com/otterize/scoop-otterize-cli\nscoop update\nscoop install otterize-cli\n"))),(0,o.kt)(r.Z,{value:"64-bit",label:"64-bit",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-PowerShell"},"Invoke-WebRequest -Uri https://get.otterize.com/otterize-cli/v1.0.1/otterize_windows_x86_64.zip -OutFile otterize_Windows_x86_64.zip\nExpand-Archive otterize_Windows_x86_64.zip -DestinationPath .\n# optionally move to PATH\n"))))),(0,o.kt)(r.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"64-bit",label:"64-bit",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://get.otterize.com/otterize-cli/v1.0.1/otterize_linux_x86_64.tar.gz\ntar xf otterize_linux_x86_64.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n")))))),(0,o.kt)("p",null,"More variants are available at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/otterize/otterize-cli/releases"},"GitHub Releases page"),".")),(0,o.kt)("h3",{id:"deploy-a-server-and-two-clients"},"Deploy a server and two clients"),(0,o.kt)("p",null,"So that we have some pods to look at (and protect), you can install our simple clients and server demo app that will deploy a server and 2 clients."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ${ABSOLUTE_URL}/code-examples/automate-network-policies/all.yaml\n")),(0,o.kt)("p",null,"Once you have that installed and running your Otterize access graph should look something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Access Graph",src:n(1880).Z,width:"4272",height:"2666"})),(0,o.kt)("h2",{id:"step-three-create-an-intent"},"Step three: Create an intent"),(0,o.kt)("p",null,"Now that you have Otterize installed, the next step is to create an intent which will enable access to the server from the client. If you enable protection on the server without declaring an intent, the client will be blocked."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can click on the services or the lines connecting them to see which ClientIntents you need to apply to make the connection go green!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"otterize network-mapper export --server server.otterize-tutorial-eks | kubectl apply -f -\n")),(0,o.kt)("p",null,"Running this command will generate the following ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientIntents")," for each client connected to ",(0,o.kt)("inlineCode",{parentName:"p"},"server")," and apply it to your cluster. You could also place it in a Helm chart or apply it some other way, instead of piping it directly to kubectl."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: client\n  namespace: otterize-tutorial-eks\nspec:\n  service:\n    name: client\n  calls:\n    - name: server\n---\napiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: client-other\n  namespace: otterize-tutorial-eks\nspec:\n  service:\n    name: client-other\n  calls:\n    - name: server\n")),(0,o.kt)("p",null,"At which point you should see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"server")," service is ready to be protected:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"One intent applied",src:n(6823).Z,width:"4272",height:"2666"})),(0,o.kt)("p",null,"And you can then protect the ",(0,o.kt)("inlineCode",{parentName:"p"},"server")," service by applying the following ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha3\nkind: ProtectedService\nmetadata:\n  name: server\n  namespace: otterize-tutorial-eks\n\nspec:\n  name: server\n")),(0,o.kt)("p",null,"Protect the server by applying the resource:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ${ABSOLUTE_URL}/code-examples/aws-eks-mini/protect-server.yaml\n")),(0,o.kt)("p",null,"And you should see your access graph showing the service as protected:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Protected Service",src:n(2766).Z,width:"4272",height:"2666"})),(0,o.kt)("h2",{id:"whats-next"},"What's next"),(0,o.kt)("p",null,"Have a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.otterize.com/guides/protect-1-service-network-policies"},"guide on how to deploy protection to a larger, more complex application one step at a time"),"."),(0,o.kt)("h2",{id:"teardown"},"Teardown"),(0,o.kt)("p",null,"To remove the deployed examples run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -f protect-server.yaml\notterize network-mapper export --server server.otterize-tutorial-eks | kubectl delete -f -\nkubectl delete -f ${ABSOLUTE_URL}/code-examples/automate-network-policies/all.yaml\nhelm uninstall otterize -n otterize-system\neksctl delete cluster -f cluster-config.yaml\n")))}h.isMDXComponent=!0},1880:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/access-graph-fb7131a2b1aacade84865a7b330cf797.png"},6823:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/one-intent-5c4f754a0651dbfef4f1e012be2c767a.png"},2766:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/protected-4fda5263b360340ac9ee982cd234e4c2.png"}}]);