"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),l=n(7294),r=n(6010),o=n(2389),i=n(7392),s=n(7094),c=n(2466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:h,groupId:k,className:b}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[T,O]=(0,l.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=k){const e=w[k];null!=e&&e!==T&&g.some((t=>t.value===e))&&O(e)}const z=e=>{const t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==T&&(C(t),O(a),null!=k&&N(k,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var l;const t=x.indexOf(e.currentTarget)-1;n=null!=(l=x[t])?l:x[x.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},b)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:E,onFocus:z,onClick:z},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,o.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},3685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(7462),l=(n(7294),n(3905)),r=n(5488),o=n(5162);const i={sidebar_position:1,title:"IBAC in Kubernetes via network policies"},s=void 0,c={unversionedId:"guides/k8s-ibac-via-network-policies/README",id:"guides/k8s-ibac-via-network-policies/README",title:"IBAC in Kubernetes via network policies",description:"One of the easiest ways to realize intent-based access control in Kubernetes is by leveraging network policies.",source:"@site/docs/3-guides/2-k8s-ibac-via-network-policies/README.mdx",sourceDirName:"3-guides/2-k8s-ibac-via-network-policies",slug:"/guides/k8s-ibac-via-network-policies/",permalink:"/guides/k8s-ibac-via-network-policies/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/3-guides/2-k8s-ibac-via-network-policies/README.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"IBAC in Kubernetes via network policies"},sidebar:"docSidebar",previous:{title:"Installing Otterize in Kubernetes",permalink:"/guides/k8s-installation"},next:{title:"Deeper dive into network policies",permalink:"/guides/k8s-ibac-via-network-policies/deeper-dive"}},p={},u=[{value:"Choose a Kubernetes cluster and services",id:"choose-a-kubernetes-cluster-and-services",level:2},{value:"Reference lab example",id:"reference-lab-example",level:3},{value:"Deploying the reference lab",id:"deploying-the-reference-lab",level:3},{value:"Let&#39;s go shop in the lab!",id:"lets-go-shop-in-the-lab",level:3},{value:"Install Otterize into your Kubernetes",id:"install-otterize-into-your-kubernetes",level:2},{value:"Declare some intents",id:"declare-some-intents",level:2},{value:"Start with one client&#39;s intents",id:"start-with-one-clients-intents",level:3},{value:"Add a second client&#39;s intents",id:"add-a-second-clients-intents",level:3},{value:"Lather, rinse, repeat",id:"lather-rinse-repeat",level:2},{value:"Teardown",id:"teardown",level:2}],d={toc:u};function m(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"One of the easiest ways to realize ",(0,l.kt)("a",{parentName:"p",href:"/intent-based-access-control"},"intent-based access control")," in Kubernetes is by leveraging network policies."),(0,l.kt)("p",null,"Network policies are built into Kubernetes itself, and while their enforcement is not, all that's required\nis a Kubernetes CNI network plugin; most Kubernetes clusters either have a CNI installed or can add one easily."),(0,l.kt)("p",null,"Enforcement through network policies is limited to pod-to-pod access control, not finer-grained access control:\nyou cannot limit access to certain paths and methods in HTTP, or to certain topics and operations in Kafka, for example.\nOn the other hand, implementing network policy access control requires no code changes so it might be a great\nfirst step, and it might entirely satisfy some use cases."),(0,l.kt)("p",null,"Authoring network policies manually can be complicated and tedious, especially because you need to think at a network\nlevel vs functionally, and because you need to carefully coordinate labels across separate pod (e.g. deployment) resources\nand network policy resources to achieve any specific outcome."),(0,l.kt)("p",null,"Of course, Otterize eliminates all of that. Let's see how."),(0,l.kt)("h2",{id:"choose-a-kubernetes-cluster-and-services"},"Choose a Kubernetes cluster and services"),(0,l.kt)("p",null,"You can use this guide with your own set of services, e.g. first in a Kubernetes cluster running dev or lab services,\nand eventually in a staging or production cluster. You'll need admin access."),(0,l.kt)("p",null,"Alternatively, you can start with services from our reference lab,\nwhich is based on the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/microservices-demo"},"Google microservices demo"),"\nsimulating an e-commerce application. You'll deploy these into any Kubernetes cluster to which you have admin access."),(0,l.kt)("p",null,"For the sake of illustration, we'll refer to the reference lab example in this guide. But if you're using\nyour own services, just apply the same steps and adjust the particulars to your needs."),(0,l.kt)("h3",{id:"reference-lab-example"},"Reference lab example"),(0,l.kt)("p",null,"The reference e-commerce application architecture is as follows\n",(0,l.kt)("img",{parentName:"p",src:"https://github.com/GoogleCloudPlatform/microservices-demo/raw/main/docs/img/architecture-diagram.png",alt:"Demo e-commerce"})),(0,l.kt)("p",null,"By default, any service is allowed to call any other service, though their code only makes the calls marked with arrows\n","\u2014"," i.e. ",(0,l.kt)("em",{parentName:"p"},"the arrows indicate the intended traffic"),"."),(0,l.kt)("p",null,"The purpose of IBAC is to ",(0,l.kt)("em",{parentName:"p"},"automatically turn those design-time intents\ninto runtime constraints"),": all calls declared to be intended will be allowed,\nwhile all other calls ","\u2014"," e.g. ones made by mistake, or ones due to\nsecurity breaches ","\u2014"," will be blocked."),(0,l.kt)("h3",{id:"deploying-the-reference-lab"},"Deploying the reference lab"),(0,l.kt)("p",null,"Create a namespace to hold the services, and deploy them:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace otterize-ecom-demo\nkubectl apply -n otterize-ecom-demo -f https://docs.otterize.com/code-examples/microservices-demo/kubernetes-manifests.yml\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Optional: check that the lab was deployed..."),(0,l.kt)("div",null,(0,l.kt)("p",null,"To see all the pods in the lab:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-ecom-demo\n")),(0,l.kt)("p",null,"The pods should all be ready and running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                     READY   STATUS    RESTARTS   AGE\nadservice-694f4ff98-cz4nn                1/1     Running   0          23m\ncartservice-85f8bc44fd-45cbk             1/1     Running   0          23m\ncheckoutservice-8fc47bbbd-9lhfv          1/1     Running   0          23m\ncurrencyservice-597bdf576b-8hftc         1/1     Running   0          23m\nemailservice-d5c6f74dd-qlwc4             1/1     Running   0          23m\nfrontend-7ffbf49884-j9rhz                1/1     Running   0          23m\nloadgenerator-65779994db-tgdxk           1/1     Running   0          23m\npaymentservice-76b9c8b87d-ktfcd          1/1     Running   0          23m\nproductcatalogservice-6969d4f5fd-xdw99   1/1     Running   0          23m\nrecommendationservice-58798d5c8-2f4rz    1/1     Running   0          23m\nredis-cart-6f65887b5d-xwpz5              1/1     Running   0          23m\nshippingservice-ff5f4d7d-qcjw8           1/1     Running   0          23m\n")))),(0,l.kt)("h3",{id:"lets-go-shop-in-the-lab"},"Let's go shop in the lab!"),(0,l.kt)(r.Z,{groupId:"frontend-addr",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"k8s",label:"K8s",mdxType:"TabItem"},(0,l.kt)("p",null,"To get the externally-accessible URL where your demo front end is available, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get service -n otterize-ecom-demo frontend-external | awk '{print $4}'\n")),(0,l.kt)("p",null,"The result should be similar to (if running on AWS EKS):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"a11843075fd254f8099a986467098647-1889474685.us-east-1.elb.amazonaws.com\n")),(0,l.kt)("p",null,'Go ahead and browse to the URL above to "shop" and get a feel for the reference lab\'s behavior.\n(The URL might take some time to populate across DNS servers. Note that we are accessing an HTTP and not an HTTPS website.)')),(0,l.kt)(o.Z,{value:"minikube",label:"Minikube",mdxType:"TabItem"},(0,l.kt)("p",null,"To get the externally-accessible URL where your demo front end is available, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl port-forward -n otterize-ecom-demo service/frontend-external 8080:80\n")),(0,l.kt)("p",null,"The demo is now accessible at:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://localhost:8080\n")),(0,l.kt)("p",null,'Go ahead and browse to the URL above to "shop" and get a feel for the reference lab\'s behavior.'))),(0,l.kt)("img",{src:"https://github.com/GoogleCloudPlatform/microservices-demo/raw/main/docs/img/online-boutique-frontend-1.png",width:"300"}),(0,l.kt)("h2",{id:"install-otterize-into-your-kubernetes"},"Install Otterize into your Kubernetes"),(0,l.kt)("p",null,"To apply intents on an existing cluster you will need to install Otterize with the network policies\noption enabled. Follow the ",(0,l.kt)("a",{parentName:"p",href:"/guides/k8s-installation"},"instructions")," to install Otterize or\ninstall only the ",(0,l.kt)("a",{parentName:"p",href:"/guides/k8s-installation#network-policies-only"},"network policy components")," for Otterize."),(0,l.kt)("h2",{id:"declare-some-intents"},"Declare some intents"),(0,l.kt)("p",null,"Recall the simple premise of IBAC: ",(0,l.kt)("em",{parentName:"p"},"clients")," need to declare the calls they need to make, and that's it.\n(After all, that's all the service developer should know: the calls their code makes.)\n",(0,l.kt)("em",{parentName:"p"},"Server")," access control happens automatically."),(0,l.kt)("p",null,"In this guide, we'll roll out intent-based access control ",(0,l.kt)("strong",{parentName:"p"},"gradually"),". In most cases this will be better than\nimposing that absolutely every service-to-service call must be declared or it will be blocked, because it takes\ntime for teams to adopt and gain confidence in any new approach or automation."),(0,l.kt)("p",null,"Network policies are great for gradual rollout:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Because they require no code changes (e.g. no new credentials to access secured services),\nthere's less friction and risk."),(0,l.kt)("li",{parentName:"ol"},"Second, by default, if a pod has no ingress-type\nnetwork policy applied, then it allows all incoming calls; as soon as it has ",(0,l.kt)("em",{parentName:"li"},"any")," ingress-type network policy,\nthen all incoming calls ",(0,l.kt)("em",{parentName:"li"},"require")," a network policy. So as soon as a client declares its intent to call a server,\nand Otterize automatically adds a network policy from that client to that server, the server is now protected\nfrom ",(0,l.kt)("em",{parentName:"li"},"any")," undeclared calls.")),(0,l.kt)("h3",{id:"start-with-one-clients-intents"},"Start with one client's intents"),(0,l.kt)("p",null,"So, let's pick a service that accepts calls (i.e. a server), and a client that intends to call it, and declare\nthat client's intent. When we ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl apply")," that intent, we'll expect that the client can still call that server,\nbut all other callers of that server will be blocked. All other ",(0,l.kt)("em",{parentName:"p"},"servers")," will be untouched ","\u2014"," it's a ",(0,l.kt)("em",{parentName:"p"},"gradual")," rollout\nrather than trying to protect all servers at once."),(0,l.kt)("p",null,"Here's what it looks like for the reference lab. If you're using your own services, adjust accordingly."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"productcatalogservice")," ",(0,l.kt)("em",{parentName:"li"},"serves")," product information;",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"checkoutservice")," needs to ",(0,l.kt)("em",{parentName:"li"},"call it")," when checking out;"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"recommendationservice")," needs to call it to generate recommendations.")))),(0,l.kt)("p",null,"Here's the intents file of the ",(0,l.kt)("inlineCode",{parentName:"p"},"recommendationservice")," (remember to adjust if you have a different service):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\n  name: recommendationservice\n  namespace:  otterize-ecom-demo\nspec:\n  service:\n    name: recommendationservice\n  calls:\n    - name: productcatalogservice\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Let's apply this intents file, as a developer or a CI/CD process would do:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://docs.otterize.com/code-examples/lab/recommendationservice-productcatalogservice.yaml\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Now see how the lab is doing, by adding an item to your cart and placing an order:"),(0,l.kt)("img",{title:"Place order",src:"/resources/lab/place-order.png",width:"200"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You will notice that the site hangs as the ",(0,l.kt)("inlineCode",{parentName:"p"},"checkoutservice")," tries to call the ",(0,l.kt)("inlineCode",{parentName:"p"},"productcatalogservice")," but is being blocked\nby the network policies set in the previous stage. When the ",(0,l.kt)("inlineCode",{parentName:"p"},"checkoutservice")," times out you should see:"),(0,l.kt)("p",{parentName:"li"}," ",(0,l.kt)("img",{alt:"Checkout service timed out",src:n(9244).Z,width:"1093",height:"655"})))),(0,l.kt)("h3",{id:"add-a-second-clients-intents"},"Add a second client's intents"),(0,l.kt)("p",null,"Now let's add the intents file of the ",(0,l.kt)("inlineCode",{parentName:"p"},"checkoutservice")," (remember to adjust if you have a different service):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\n  name: checkoutservice\n  namespace:  otterize-ecom-demo\nspec:\n  service:\n    name: checkoutservice\n  calls:\n    - name: productcatalogservice\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Again, apply it to see what happens when it declares its intents:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://docs.otterize.com/code-examples/lab/checkoutservice-productcatalogservice.yaml\n"))),(0,l.kt)("li",{parentName:"ol"},"Go ahead and place an order on the side, you will see all functions correctly.\n",(0,l.kt)("img",{alt:"Order complete",src:n(9280).Z,width:"562",height:"414"}))),(0,l.kt)("h2",{id:"lather-rinse-repeat"},"Lather, rinse, repeat"),(0,l.kt)("p",null,"That's pretty much all there is to it!"),(0,l.kt)("p",null,"You can pick another service, and ask its clients to declare their intents. Once these are applied (in fact, once\nany of them is applied), that service is protected from undeclared access from any other pod."),(0,l.kt)("p",null,"To help onboard services to this approach, you can bootstrap client intents files:\nsimply install the Otterize network mapper into some cluster where all the calls that should be happening are\nactually happening, and watch as it detects them and generates a complete set of client intents files that\nreflect all those calls."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Optional bootstrapping exercise: "),(0,l.kt)("div",null,(0,l.kt)("p",null,"To see the potential of the network mapper in bootstrapping IBAC, try this:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Run the network mapper while generating enough traffic in your cluster to capture all calls, and\nexport them as intents files.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"otterize mapper export -n otterize-ecom-demo -o intents.yaml\n")),(0,l.kt)("p",null,"Or, if you're using the reference lab we've already done that for you:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://docs.otterize.com/code-examples/lab/intents.yaml\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},'Create and apply a "default-deny-ingress" network policy in your cluster for the selected namespace;\nall pods will now have at least one ingress policy so ',(0,l.kt)("em",{parentName:"li"},"all")," undeclared calls will be blocked.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-deny-ingress\n  namespace:  otterize-ecom-demo\nspec:\n  podSelector: {}\n  policyTypes:\n    - Ingress\n")),(0,l.kt)("p",null,"if you're using the reference lab we've already done that for you:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://docs.otterize.com/code-examples/lab/default-deny-network-policy.yaml\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"See that most services are now blocked. For example, the reference lab will stop working."),(0,l.kt)("li",{parentName:"ol"},"Now apply all the intents you captured in the first step.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f intents.yaml\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Your cluster should now roar back to life, fully functioning ",(0,l.kt)("em",{parentName:"li"},"and now secured"),"!")))),(0,l.kt)("h2",{id:"teardown"},"Teardown"),(0,l.kt)("p",null,"To remove the deployed resources run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete namespace otterize-ecom-demo\n")))}m.isMDXComponent=!0},9244:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/checkoutservice-timeout-77f70464c0597d3bd33098576009e50f.png"},9280:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/order-complete-e1405d014a60968fba5bbcc1f2d5ec2b.png"}}]);