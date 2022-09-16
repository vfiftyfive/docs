"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),l=n(7294),r=n(6010),i=n(2389),o=n(7392),s=n(7094),p=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n;const{lazy:i,block:d,defaultValue:m,values:k,groupId:h,className:y}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),w=(0,o.l)(b,((e,t)=>e.value===t.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(t=null!=m?m:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:f,setTabGroupChoices:N}=(0,s.U)(),[C,T]=(0,l.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:z}=(0,p.o5)();if(null!=h){const e=f[h];null!=e&&e!==C&&b.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==C&&(z(t),T(a),null!=h&&N(h,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=O.indexOf(e.currentTarget)+1;n=null!=(a=O[t])?a:O[0];break}case"ArrowLeft":{var l;const t=O.indexOf(e.currentTarget)-1;n=null!=(l=O[t])?l:O[O.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},y)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>O.push(e),onKeyDown:x,onFocus:E,onClick:E},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,i.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},7980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(7462),l=(n(7294),n(3905)),r=n(5488),i=n(5162);const o={sidebar_position:1,title:"Automate network policies"},s=void 0,p={unversionedId:"documentation/quick-tutorials/k8s-network-policies",id:"documentation/quick-tutorials/k8s-network-policies",title:"Automate network policies",description:"Otterize automates network policies within your cluster by abstracting away",source:"@site/docs/documentation/3-quick-tutorials/1-k8s-network-policies.mdx",sourceDirName:"documentation/3-quick-tutorials",slug:"/documentation/quick-tutorials/k8s-network-policies",permalink:"/documentation/quick-tutorials/k8s-network-policies",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/documentation/3-quick-tutorials/1-k8s-network-policies.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Automate network policies"},sidebar:"docSidebar",previous:{title:"Quick tutorials",permalink:"/documentation/quick-tutorials/"},next:{title:"Map your cluster",permalink:"/documentation/quick-tutorials/k8s-network-mapper"}},c={},u=[{value:"Install Otterize",id:"install-otterize",level:2},{value:"Make sure you have a CNI network plugin",id:"make-sure-you-have-a-cni-network-plugin",level:2},{value:"Deploy the server, client, and default network policy",id:"deploy-the-server-client-and-default-network-policy",level:2},{value:"Apply intents",id:"apply-intents",level:2},{value:"What happened behind the scenes",id:"what-happened-behind-the-scenes",level:2},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Otterize automates network policies within your cluster by abstracting away\nthe management of pod identities, the labeling of clients, servers and namespaces,\nand the manual authoring of individual network policies."),(0,l.kt)("p",null,"With intent-based access control, you just declare what client calls will be needed,\nand everything is automatically wired together so only intended calls are allowed."),(0,l.kt)("p",null,"In this tutorial, we will"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install Otterize in your Kubernetes cluster."),(0,l.kt)("li",{parentName:"ul"},"Make sure your Kubernetes cluster has a CNI network plugin"),(0,l.kt)("li",{parentName:"ul"},"Deploy a server pod, and a client pod that calls it"),(0,l.kt)("li",{parentName:"ul"},'Deploy a "default deny" network policy to block undeclared calls'),(0,l.kt)("li",{parentName:"ul"},"Declare that the client pod intends to call the server pod"),(0,l.kt)("li",{parentName:"ul"},"See that a network policy was autogenerated to allow just that")),(0,l.kt)("h2",{id:"install-otterize"},"Install Otterize"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"You can skip this section if Otterize is already installed in your cluster.")),(0,l.kt)("p",null,"Use Helm to install the latest version of Otterize:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm upgrade --install otterize otterize/otterize-kubernetes -n otterize --create-namespace\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Optional: check installation status"),(0,l.kt)("div",null,(0,l.kt)("p",null," It can take several minutes for the pods to be ",(0,l.kt)("inlineCode",{parentName:"p"},"Running")," and all containers to be ready.\nYou can monitor progress with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl get pods -n otterize -w\n")),(0,l.kt)("p",null,"   Once you see the following (there may be even more pods), you can stop monitoring with ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-C"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                             READY   STATUS    RESTARTS      AGE\nintents-operator-controller-manager-6b97596d54-5qxcw             2/2     Running   0             53s\notterize-spire-agent-9s8w7                                       1/1     Running   0             54s\notterize-spire-agent-np2wf                                       1/1     Running   1             54s\notterize-spire-server-0                                          1/1     Running   0             53s\notterize-watcher-77db87cfcd-xhsrk                                1/1     Running   0             53s\nspire-integration-operator-controller-manager-65b8bf57b5-mpltl   2/2     Running   0             53s\n")))),(0,l.kt)("h2",{id:"make-sure-you-have-a-cni-network-plugin"},"Make sure you have a CNI network plugin"),(0,l.kt)("p",null,"To enforce network policies, a Kubernetes cluster must be using a CNI network plugin\nthat supports network policies."),(0,l.kt)("p",null,"If you don't have a CNI installed, a popular choice is Calico by Tigera.\nTo install it, please follow the\n",(0,l.kt)("a",{parentName:"p",href:"https://projectcalico.docs.tigera.io/getting-started/kubernetes/helm"},"instructions"),"\nand return to this tutorial."),(0,l.kt)("p",null,"If you're not sure whether you have a CNI, you can just continue ","\u2014"," it'll soon become clear ;-)."),(0,l.kt)("h2",{id:"deploy-the-server-client-and-default-network-policy"},"Deploy the server, client, and default network policy"),(0,l.kt)("p",null,"Our simple example consists of two pods: an HTTP server and a client that calls it."),(0,l.kt)("p",null,"We also deploy a default-deny ingress network policy,\nblocking pods from accepting incoming calls unless another network policy explicitly allows them."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expand to see the details of this example..."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"namespace.yaml",label:"namespace.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\nname: otterize-tutorial-npol\n"))),(0,l.kt)(i.Z,{value:"server.yaml",label:"server.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\nname: server\nnamespace:  otterize-tutorial-npol\nspec:\nselector:\n matchLabels:\n   app: server\ntemplate:\n metadata:\n   labels:\n     app: server\n spec:\n   containers:\n     - name: server\n       image: hashicorp/http-echo\n       args: [ "-listen=:80", "-text=Hi, I am the server, you called, may I help you?"]\n---\napiVersion: v1\nkind: Service\nmetadata:\nname: server\nnamespace:  otterize-tutorial-npol\nspec:\nselector:\n app: server\nports:\n - protocol: TCP\n   port: 80\n   targetPort: 80\n'))),(0,l.kt)(i.Z,{value:"client.yaml",label:"client.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\nname: client\nnamespace:  otterize-tutorial-npol\nspec:\nselector:\n matchLabels:\n   app: client\ntemplate:\n metadata:\n   labels:\n     app: client\n spec:\n   containers:\n     - name: client\n       image: alpine/curl\n       command: [ "/bin/sh", "-c", "--" ]\n       args: [ "while true; do echo \\"Calling server...\\"; if ! timeout 2 curl -si server 2>/dev/null; then echo \\"curl timed out\\"; fi; sleep 2; done" ]\n'))),(0,l.kt)(i.Z,{value:"default-deny.yaml",label:"default-deny.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\nname: default-deny-ingress\nnamespace:  otterize-tutorial-npol\nspec:\npodSelector: {}\npolicyTypes:\n - Ingress\n"))))),(0,l.kt)("p",null,"Deploy the client, server, and the default deny network policy using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://docs.otterize.com/code-examples/network-policies/all.yaml\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Optional: check deployment status"),"Check that the client and server pods were deployed",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-npol\n")),(0,l.kt)("p",null,"You should see"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME                      READY   STATUS    RESTARTS   AGE\nclient-5689997b5c-grlnt   1/1     Running   0          35s\nserver-6698c58cbc-v9n9b   1/1     Running   0          34s\n")),(0,l.kt)("p",null,"Check that the default deny ingress network policy was deployed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get NetworkPolicies -n otterize-tutorial-npol\n")),(0,l.kt)("p",null,"You should see"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME                   POD-SELECTOR   AGE\ndefault-deny-ingress   none           17s\n"))),"Let's monitor the client's attempts to call the server with a second terminal window, so we can see the effects of our changes in real time.",(0,l.kt)("p",null,"   ",(0,l.kt)("strong",{parentName:"p"},"Open a second terminal window")," and tail the client log:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f --tail 1 -n otterize-tutorial-npol deploy/client\n")),(0,l.kt)("p",null,"   At this point the client should be timing out when trying to call the server:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Calling server...\ncurl timed out\nCalling server...\ncurl timed out\nCalling server...\ncurl timed out\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"   If the client isn't timing out, then you may not have a CNI installed, or your CNI may not support network policies.\nConsult the docs for your Kubernetes distribution.\nFor example, vanilla minikube does not start by default with a CNI that supports network policies\nbut you can ask it to start with one that does, such as Calico.")),(0,l.kt)("p",null,"   The client failing like that is the expected outcome since by default all pods' ingress are blocked by the default network policy.\nOnce the client declares its intents, Otterize will add a network policy to allow the intended calls.\nLet's see that now..."),(0,l.kt)("h2",{id:"apply-intents"},"Apply intents"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The client declares its intent to call the server with this ",(0,l.kt)("inlineCode",{parentName:"p"},"intents.yaml")," file:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\nname: client\nnamespace:  otterize-tutorial-npol\nspec:\nservice:\n name: client\ncalls:\n - name: server\n   type: HTTP\n")),(0,l.kt)("admonition",{parentName:"li",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Client intents are the cornerstone of ",(0,l.kt)("a",{parentName:"p",href:"otterize.com/ibac"},"intent-based access control"),".")),(0,l.kt)("p",{parentName:"li"},"   Keep an eye on the logs being tailed in the ",(0,l.kt)("strong",{parentName:"p"},"second terminal window"),"\nwhile you apply this ",(0,l.kt)("inlineCode",{parentName:"p"},"intents.yaml")," file in your ",(0,l.kt)("strong",{parentName:"p"},"main terminal window")," using:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://docs.otterize.com/code-examples/network-policies/intents.yaml\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You should quickly see in the ",(0,l.kt)("strong",{parentName:"p"},"second terminal")," that the client is now successfully calling the server:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Calling server...\ncurl timed out\nCalling server...\ncurl timed out                              <- before applying the intents file\n# highlight-start\nCalling server...                           <- after applying the intents file\nHTTP/1.1 200 OK\nX-App-Name: http-echo\nX-App-Version: 0.2.3\nDate: Wed, 07 Sep 2022 13:51:34 GMT\nContent-Length: 12\nContent-Type: text/plain; charset=utf-8\n\nHi, I am the server, you called, may I help you?\n# highlight-end\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If you check, you should see that a new network policy was created"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get NetworkPolicies -n otterize-tutorial-npol\n")),(0,l.kt)("p",{parentName:"li"},"You should see"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"NAME                                           POD-SELECTOR                                         AGE\naccess-to-server-from-otterize-tutorial-npol   otterize/server=server-otterize-tutorial-np-7e16db   6s\ndefault-deny-ingress                           <none>                                               28s\n")))),(0,l.kt)("admonition",{title:"Uri: write celebration",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"TODO")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To learn more about how Otterize + network policies work see\ndetails ",(0,l.kt)("a",{parentName:"p",href:"/documentation/intents-operator/network-policies/in-depth"},"here"))),(0,l.kt)("h2",{id:"what-happened-behind-the-scenes"},"What happened behind the scenes"),(0,l.kt)("admonition",{title:"requires re-write, labels aren't correct.",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"This is the ",(0,l.kt)("a",{parentName:"p",href:"/documentation/guides/k8s-ibac-via-network-policies#track-artifacts"},"updated")," version")),(0,l.kt)("p",null,"To generate network policies between two pods, for example called ",(0,l.kt)("inlineCode",{parentName:"p"},"client")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"server")," running in\nnamespace ",(0,l.kt)("inlineCode",{parentName:"p"},"otterize-tutorial-npol")," we needed to:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Label the ",(0,l.kt)("inlineCode",{parentName:"li"},"server")," pod ",(0,l.kt)("inlineCode",{parentName:"li"},"label-server")," - we will use this label in the network policy to apply it to all pods with\nthis label (as an ingress rule)."),(0,l.kt)("li",{parentName:"ol"},"Label the ",(0,l.kt)("inlineCode",{parentName:"li"},"client")," pod with ",(0,l.kt)("inlineCode",{parentName:"li"},"has-access-to-server"),", saying that this specific pod has access to ",(0,l.kt)("inlineCode",{parentName:"li"},"server")," - we will\nuse this label in the network policy as a filter ","\u2014"," every\npod that has the label saying ","[this pod can access the server]"," will be able to pass through the network policy."),(0,l.kt)("li",{parentName:"ol"},"Label the ",(0,l.kt)("inlineCode",{parentName:"li"},"client"),"'s namespace ",(0,l.kt)("inlineCode",{parentName:"li"},"label-otterize-tutorial-npol")," ","\u2014"," this is a requirement for the network policy as\nanother filtering mechanism for pods."),(0,l.kt)("li",{parentName:"ol"},"Generate a network policy saying that",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Only pod with the label ",(0,l.kt)("inlineCode",{parentName:"li"},"has-access-to-server")),(0,l.kt)("li",{parentName:"ol"},"From the namespaces with the label ",(0,l.kt)("inlineCode",{parentName:"li"},"label-otterize-tutorial-npol")),(0,l.kt)("li",{parentName:"ol"},"Can access pods with the label ",(0,l.kt)("inlineCode",{parentName:"li"},"label-server"))))),(0,l.kt)("p",null,"Otterize saved us from doing all this work by simply declaring the client's intents in ",(0,l.kt)("inlineCode",{parentName:"p"},"intents.yaml"),",\nwhile the appropriate network policies were managed automatically behind the scenes."),(0,l.kt)("h2",{id:"whats-next"},"What's next"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Configure ",(0,l.kt)("a",{parentName:"li",href:"/documentation/guides/k8s-ibac-via-network-policies/"},"network policies")," for your existing deployments."),(0,l.kt)("li",{parentName:"ul"},"Explore the ",(0,l.kt)("a",{parentName:"li",href:"/documentation/quick-tutorials/k8s-network-mapper"},"network mapper")," to help you bootstrap intents you can.\napply as network policies.")),(0,l.kt)("h2",{id:"teardown"},"Teardown"),(0,l.kt)("p",null,"To remove the deployed resources run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete namespace otterize-tutorial-npol\n")))}m.isMDXComponent=!0}}]);