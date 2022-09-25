"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[657],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7462),l=n(7294),o=n(6010),i=n(2389),r=n(7392),s=n(7094),p=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n;const{lazy:i,block:m,defaultValue:k,values:d,groupId:h,className:y}=e,w=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:w.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,r.l)(g,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===k?k:null!=(t=null!=k?k:null==(n=w.find((e=>e.props.default)))?void 0:n.props.value)?t:w[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:f,setTabGroupChoices:v}=(0,s.U)(),[C,T]=(0,l.useState)(b),z=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=h){const e=f[h];null!=e&&e!==C&&g.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,n=z.indexOf(t),a=g[n].value;a!==C&&(E(t),T(a),null!=h&&v(h,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=z.indexOf(e.currentTarget)+1;n=null!=(a=z[t])?a:z[0];break}case"ArrowLeft":{var l;const t=z.indexOf(e.currentTarget)-1;n=null!=(l=z[t])?l:z[z.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},y)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>z.push(e),onKeyDown:I,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(w.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},w.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function k(e){const t=(0,i.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},4041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=n(7462),l=(n(7294),n(3905)),o=(n(814),n(5488)),i=n(5162);const r={sidebar_position:1,title:"Automate network policies"},s=void 0,p={unversionedId:"quick-tutorials/k8s-network-policies",id:"quick-tutorials/k8s-network-policies",title:"Automate network policies",description:"Otterize automates network policies within your cluster by abstracting away",source:"@site/docs/2-quick-tutorials/1-k8s-network-policies.mdx",sourceDirName:"2-quick-tutorials",slug:"/quick-tutorials/k8s-network-policies",permalink:"/quick-tutorials/k8s-network-policies",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/2-quick-tutorials/1-k8s-network-policies.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Automate network policies"},sidebar:"docSidebar",previous:{title:"Quick tutorials",permalink:"/quick-tutorials/"},next:{title:"Map your cluster",permalink:"/quick-tutorials/k8s-network-mapper"}},c={},u=[{value:"Make sure you have a cluster that supports network policies",id:"make-sure-you-have-a-cluster-that-supports-network-policies",level:2},{value:"Install Otterize",id:"install-otterize",level:2},{value:"Deploy the server, client, and default network policy",id:"deploy-the-server-client-and-default-network-policy",level:2},{value:"Apply intents",id:"apply-intents",level:2},{value:"What did we accomplish?",id:"what-did-we-accomplish",level:2},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:2}],m={toc:u};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Otterize automates network policies within your cluster by abstracting away\nthe management of pod identities, the labeling of clients, servers and namespaces,\nand the manual authoring of individual network policies."),(0,l.kt)("p",null,"With intent-based access control, you just declare what client calls will be needed,\nand everything is automatically wired together so only intended calls are allowed."),(0,l.kt)("p",null,"In this tutorial, we will:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install Otterize in your Kubernetes cluster."),(0,l.kt)("li",{parentName:"ul"},"Make sure your Kubernetes cluster has a CNI network plugin that handles network policies"),(0,l.kt)("li",{parentName:"ul"},"Deploy a server pod, and a client pod that calls it"),(0,l.kt)("li",{parentName:"ul"},'Deploy a "default deny" network policy to block undeclared calls'),(0,l.kt)("li",{parentName:"ul"},"Declare that the client pod intends to call the server pod"),(0,l.kt)("li",{parentName:"ul"},"See that a network policy was autogenerated to allow just that")),(0,l.kt)("h2",{id:"make-sure-you-have-a-cluster-that-supports-network-policies"},"Make sure you have a cluster that supports network policies"),(0,l.kt)("p",null,"Before you start, you need to have a Kubernetes cluster with a ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"},"CNI")," that supports ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"NetworkPolicies"),"."),(0,l.kt)("p",null,"Below are instructions for setting up a cluster with Network Policies.\nIf you don't have a cluster already, we recommend starting out with a Minikube cluster."),(0,l.kt)(o.Z,{groupId:"cni",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"minikube",label:"minikube",mdxType:"TabItem"},"Start your minikube cluster. ",(0,l.kt)("a",{href:"https://minikube.sigs.k8s.io/docs/start/"},"Don't have the minikube CLI? Read the installation instructions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --network-plugin=cni\n")),(0,l.kt)("p",null,"Install Calico:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.24.1/manifests/calico.yaml\n"))),(0,l.kt)(i.Z,{value:"gke",label:"Google GKE",mdxType:"TabItem"},(0,l.kt)("a",{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy#gcloud"},"Visit the official documentation"),", or follow the instructions below:",(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"cli",label:"gcloud CLI",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster, run the following command:"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gcloud container clusters create CLUSTER_NAME --enable-network-policy"),"\nReplace CLUSTER_NAME with the name of the new cluster."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster, perform the following tasks:"))),(0,l.kt)("p",null,"Run the following command to enable the add-on:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gcloud container clusters update CLUSTER_NAME --update-addons=NetworkPolicy=ENABLED"),"\nReplace CLUSTER_NAME with the name of the cluster."),(0,l.kt)("p",null,"Run the following command to enable network policy enforcement on your cluster, which in turn re-creates your cluster's node pools with network policy enforcement enabled:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gcloud container clusters update CLUSTER_NAME --enable-network-policy"))),(0,l.kt)(i.Z,{value:"console",label:"Console",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console.\nThe remaining steps will appear automatically in the Google Cloud console.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the Google Kubernetes Engine page, click Create.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure your cluster as desired.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the navigation pane, under Cluster, click Networking.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the Enable network policy checkbox.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Create."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console. The remaining steps will appear automatically in the Google Cloud console.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In the cluster list, click the name of the cluster you want to modify.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Under Networking, in the Network policy field, click Edit network policy.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the Enable network policy for master checkbox and click Save Changes.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Wait for your changes to apply, and then click Edit network policy again.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the Enable network policy for nodes checkbox.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Save Changes.")))))),(0,l.kt)(i.Z,{value:"eks",label:"AWS EKS",mdxType:"TabItem"},(0,l.kt)("a",{href:"https://docs.aws.amazon.com/eks/latest/userguide/calico.html"},"Visit the official documentation"),", or follow the instructions below:",(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Spin up an ",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"},"EKS cluster")," using the console, AWS CLI or ",(0,l.kt)("inlineCode",{parentName:"li"},"eksctl"),"."),(0,l.kt)("li",{parentName:"ol"},"Install Calico for NetworkPolicy enforcement, without replacing the CNI:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/master/config/master/calico-operator.yaml\nkubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/master/config/master/calico-crs.yaml\n"))),(0,l.kt)(i.Z,{value:"aks",label:"Azure AKS",mdxType:"TabItem"},(0,l.kt)("p",null,"You can setup an AKS cluster using this ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-cli"},"guide"),"."),(0,l.kt)("p",null,"For network policy support, no setup is required: Azure AKS comes with a built-in network policy implementation called Azure Network Policy Manager. You choose whether you'd like to use this option or Calico when you create a cluster."),(0,l.kt)("a",{href:"https://learn.microsoft.com/en-us/azure/aks/use-network-policies"}," Read more at the official documentation site"),".")),(0,l.kt)("h2",{id:"install-otterize"},"Install Otterize"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"You can skip this section if Otterize is already installed in your cluster.")),(0,l.kt)("p",null,"Use Helm to install the latest version of Otterize:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm install otterize otterize/otterize-kubernetes -n otterize-system --create-namespace --wait\n")),(0,l.kt)("p",null,"This chart is a bundle of the Otterize intents operator, SPIRE integration operator, and SPIRE.\nInitial deployment may take a couple of minutes.\nYou can remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"--wait")," flag if you don't want Helm to wait for all pods to be ready, and instead manually watch for all pods to be ",(0,l.kt)("inlineCode",{parentName:"p"},"Ready")," using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system -w"),"."),(0,l.kt)("h2",{id:"deploy-the-server-client-and-default-network-policy"},"Deploy the server, client, and default network policy"),(0,l.kt)("p",null,"Our simple example consists of two pods: an HTTP server and a client that calls it."),(0,l.kt)("p",null,"We also deploy a default-deny ingress network policy,\nblocking pods from accepting incoming calls unless another network policy explicitly allows them."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expand to see the example YAML files"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"namespace.yaml",label:"namespace.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: otterize-tutorial-npol\n"))),(0,l.kt)(i.Z,{value:"server.yaml",label:"server.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: server\n  namespace:  otterize-tutorial-npol\nspec:\n  selector:\n    matchLabels:\n      app: server\n  template:\n    metadata:\n      labels:\n        app: server\n    spec:\n      containers:\n        - name: server\n          image: hashicorp/http-echo\n          args: [ "-listen=:80", "-text=Hi, I am the server, you called, may I help you?"]\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: server\n  namespace:  otterize-tutorial-npol\nspec:\n  selector:\n    app: server\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 80\n'))),(0,l.kt)(i.Z,{value:"client.yaml",label:"client.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: client\n  namespace:  otterize-tutorial-npol\nspec:\n  selector:\n    matchLabels:\n      app: client\n  template:\n    metadata:\n      labels:\n        app: client\n    spec:\n      containers:\n        - name: client\n          image: alpine/curl\n          command: [ "/bin/sh", "-c", "--" ]\n          args: [ "while true; do echo \\"Calling server...\\"; if ! timeout 2 curl -si server 2>/dev/null; then echo \\"curl timed out\\"; fi; sleep 2; done" ]\n'))),(0,l.kt)(i.Z,{value:"default-deny.yaml",label:"default-deny.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-deny-ingress\n  namespace:  otterize-tutorial-npol\nspec:\n  podSelector: {}\n  policyTypes:\n    - Ingress\n"))))),(0,l.kt)("p",null,"Deploy the client, server, and the default deny network policy using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://docs.otterize.com/code-examples/network-policies/all.yaml\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Optional: check deployment status"),"Check that the client and server pods were deployed",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-npol\n")),(0,l.kt)("p",null,"You should see"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME                      READY   STATUS    RESTARTS   AGE\nclient-5689997b5c-grlnt   1/1     Running   0          35s\nserver-6698c58cbc-v9n9b   1/1     Running   0          34s\n")),(0,l.kt)("p",null,"Check that the default deny ingress network policy was deployed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get NetworkPolicies -n otterize-tutorial-npol\n")),(0,l.kt)("p",null,"You should see"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME                   POD-SELECTOR   AGE\ndefault-deny-ingress   none           17s\n"))),(0,l.kt)("p",null,"Let's monitor the client's attempts to call the server with a second terminal window,\nso we can see the effects of our changes in real time."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Open a second terminal window")," and tail the client log:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f --tail 1 -n otterize-tutorial-npol deploy/client\n")),(0,l.kt)("p",null,"At this point the client should be timing out when trying to call the server:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Calling server...\ncurl timed out\nCalling server...\ncurl timed out\nCalling server...\ncurl timed out\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If the client isn't timing out, then the installed CNI plugin likely does not support network policies.\nConsult the docs for your Kubernetes distribution or head back to the ",(0,l.kt)("a",{parentName:"p",href:"#make-sure-you-have-a-cni-network-plugin"},"Calico installation section")," to install one.\nFor example, minikube does not start by default with a CNI that supports network policies\nbut you can ask it to start with one that does, such as Calico.")),(0,l.kt)("p",null,"The client failing like that is the expected outcome since by default the ingress to every pod is blocked by the default network policy:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-deny-ingress\n  namespace:  otterize-tutorial-npol\nspec:\n  podSelector: {} # selects all pods in the namespace\n  # the lack of a `from` field means no pod is allowed to access\n  policyTypes: # this policy applies to ingress and doesn't apply to egress\n    - Ingress\n")),(0,l.kt)("p",null,"   Once the client declares its intents, Otterize will add a network policy to allow the intended calls.\nLet's see that now."),(0,l.kt)("h2",{id:"apply-intents"},"Apply intents"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The client declares its intent to call the server with this ",(0,l.kt)("inlineCode",{parentName:"li"},"intents.yaml")," file:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\n  name: client\n  namespace:  otterize-tutorial-npol\nspec:\n  service:\n    name: client\n  calls:\n    - name: server\n      type: HTTP\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Client intents are the cornerstone of ",(0,l.kt)("a",{parentName:"p",href:"https://otterize.com/ibac"},"intent-based access control"),".")),(0,l.kt)("p",null,"   Keep an eye on the logs being tailed in the ",(0,l.kt)("strong",{parentName:"p"},"second terminal window"),"\nwhile you apply this ",(0,l.kt)("inlineCode",{parentName:"p"},"intents.yaml")," file in your ",(0,l.kt)("strong",{parentName:"p"},"main terminal window")," using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://docs.otterize.com/code-examples/network-policies/intents.yaml\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You should quickly see in the ",(0,l.kt)("strong",{parentName:"p"},"second terminal")," that the client is now successfully calling the server:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Calling server...\ncurl timed out\nCalling server...\ncurl timed out                              # <- before applying the intents file\n# highlight-start\nCalling server...                           # <- after applying the intents file\nHTTP/1.1 200 OK\nX-App-Name: http-echo\nX-App-Version: 0.2.3\nDate: Wed, 07 Sep 2022 13:51:34 GMT\nContent-Length: 12\nContent-Type: text/plain; charset=utf-8\n\nHi, I am the server, you called, may I help you?\n# highlight-end\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You should see that a new network policy was created:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get NetworkPolicies -n otterize-tutorial-npol\n")),(0,l.kt)("p",{parentName:"li"},"will output:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"NAME                                           POD-SELECTOR                                         AGE\naccess-to-server-from-otterize-tutorial-npol   otterize/server=server-otterize-tutorial-np-7e16db   6s\ndefault-deny-ingress                           <none>                                               28s\n")))),(0,l.kt)("h2",{id:"what-did-we-accomplish"},"What did we accomplish?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Controlling access through network policies no longer means touching network policies at all.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Clients simply declare what they need to access with their intents files.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The next ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl apply")," ensures that network policies automatically reflect the intended pod-to-pod access."))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expand to see what happened behind the scenes"),(0,l.kt)("p",null,"To generate network policies between two pods, for example called ",(0,l.kt)("inlineCode",{parentName:"p"},"client")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"server")," running in\nnamespace ",(0,l.kt)("inlineCode",{parentName:"p"},"otterize-tutorial-npol")," we needed to (in a simplified form):"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Label the ",(0,l.kt)("inlineCode",{parentName:"li"},"server")," pod with ",(0,l.kt)("inlineCode",{parentName:"li"},"otterize/server")," and a unique value that represents this server - we will use this label in the network policy to apply it to all pods with\nthis label (as an ingress rule)."),(0,l.kt)("li",{parentName:"ol"},"Label the ",(0,l.kt)("inlineCode",{parentName:"li"},"client")," pod with ",(0,l.kt)("inlineCode",{parentName:"li"},"otterize/access-to-server"),", saying that this specific pod has access to ",(0,l.kt)("inlineCode",{parentName:"li"},"server")," - we will\nuse this label in the network policy as a filter ","\u2014"," every\npod that has the label saying ","[this pod can access the server]"," will be able to pass through the network policy."),(0,l.kt)("li",{parentName:"ol"},"Label the ",(0,l.kt)("inlineCode",{parentName:"li"},"client"),"'s namespace ",(0,l.kt)("inlineCode",{parentName:"li"},"otterize/namespace-name")," with value ",(0,l.kt)("inlineCode",{parentName:"li"},"otterize-tutorial-npol")," ","\u2014"," this is used when intents refer to services in other namespaces."),(0,l.kt)("li",{parentName:"ol"},"Generate a network policy saying that",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Only pod with the label ",(0,l.kt)("inlineCode",{parentName:"li"},"otterize/access-to-server")),(0,l.kt)("li",{parentName:"ol"},"From the namespaces with the label ",(0,l.kt)("inlineCode",{parentName:"li"},"otterize/namespace-name")," and value ",(0,l.kt)("inlineCode",{parentName:"li"},"otterize-tutorial-npol")),(0,l.kt)("li",{parentName:"ol"},"Can access pods with the label ",(0,l.kt)("inlineCode",{parentName:"li"},"otterize/server")," and that matches this server")))),(0,l.kt)("p",null,"Otterize saved us from doing all this work by simply declaring the client's intents in ",(0,l.kt)("inlineCode",{parentName:"p"},"intents.yaml"),",\nwhile the appropriate network policies were managed automatically behind the scenes."),(0,l.kt)("p",null,"You can read the detailed explanation about how Otterize manages labels for network policies ",(0,l.kt)("a",{parentName:"p",href:"/guides/k8s-ibac-via-network-policies/deeper-dive#track-artifacts"},"here"),".")),(0,l.kt)("h2",{id:"whats-next"},"What's next"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Configure ",(0,l.kt)("a",{parentName:"li",href:"/guides/k8s-ibac-via-network-policies/"},"network policies")," for your existing deployments."),(0,l.kt)("li",{parentName:"ul"},"Explore the ",(0,l.kt)("a",{parentName:"li",href:"/quick-tutorials/k8s-network-mapper"},"network mapper")," to help you bootstrap intents files\nfor use in IBAC.")),(0,l.kt)("h2",{id:"teardown"},"Teardown"),(0,l.kt)("p",null,"To remove the deployed resources run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete namespace otterize-tutorial-npol\n")))}k.isMDXComponent=!0}}]);