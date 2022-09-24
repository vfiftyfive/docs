"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[439],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),p=a(7094),s=a(2466);const c="tabList__CuJ",m="tabItem_LNqP";function u(e){var t,a;const{lazy:o,block:u,defaultValue:d,values:k,groupId:h,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,i.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===d?d:null!=(t=null!=d?d:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?t:v[0].props.value;if(null!==w&&!b.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:y}=(0,p.U)(),[z,T]=(0,r.useState)(w),x=[],{blockElementScrollPositionUntilNextRender:_}=(0,s.o5)();if(null!=h){const e=N[h];null!=e&&e!==z&&b.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,a=x.indexOf(t),n=b[a].value;n!==z&&(_(t),T(n),null!=h&&y(h,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=x.indexOf(e.currentTarget)+1;a=null!=(n=x[t])?n:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;a=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},g)},b.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:z===t?0:-1,"aria-selected":z===t,key:t,ref:e=>x.push(e),onKeyDown:O,onFocus:I,onClick:I},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":z===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(v.filter((e=>e.props.value===z))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==z})))))}function d(e){const t=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},3186:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const i={title:"Mapping pod-to-pod calls in Kubernetes"},p=void 0,s={unversionedId:"guides/k8s-mapping-pod-to-pod-calls/k8s-mapping-pod-to-pod-calls",id:"guides/k8s-mapping-pod-to-pod-calls/k8s-mapping-pod-to-pod-calls",title:"Mapping pod-to-pod calls in Kubernetes",description:"The network mapper allows you to map pod-to-pod traffic within your K8s cluster. This tutorial will guide you",source:"@site/docs/3-guides/4-k8s-mapping-pod-to-pod-calls/4-k8s-mapping-pod-to-pod-calls.mdx",sourceDirName:"3-guides/4-k8s-mapping-pod-to-pod-calls",slug:"/guides/k8s-mapping-pod-to-pod-calls/",permalink:"/guides/k8s-mapping-pod-to-pod-calls/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/3-guides/4-k8s-mapping-pod-to-pod-calls/4-k8s-mapping-pod-to-pod-calls.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Mapping pod-to-pod calls in Kubernetes"},sidebar:"docSidebar",previous:{title:"Credentials",permalink:"/guides/ibac-for-k8s-kafka/credentials"},next:{title:"Kubernetes mTLS with Otterize",permalink:"/guides/k8s-mtls/"}},c={},m=[{value:"Install the network mapper",id:"install-the-network-mapper",level:2},{value:"Install the Otterize CLI",id:"install-the-otterize-cli",level:2},{value:"Retrieving the network map",id:"retrieving-the-network-map",level:2},{value:"Filtering by namespace",id:"filtering-by-namespace",level:3},{value:"Resetting the current network map",id:"resetting-the-current-network-map",level:3},{value:"Track network map changes over time",id:"track-network-map-changes-over-time",level:2},{value:"Which calls are picked up",id:"which-calls-are-picked-up",level:2},{value:"Network mapping for bootstrapping access controls",id:"network-mapping-for-bootstrapping-access-controls",level:2},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Design note",id:"design-note",level:2}],u={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The network mapper allows you to map pod-to-pod traffic within your K8s cluster. This tutorial will guide you\nthrough installing Otterize, mapping traffic and tracking changes."),(0,r.kt)("h2",{id:"install-the-network-mapper"},"Install the network mapper"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm install network-mapper otterize/network-mapper -n otterize-system --create-namespace\n")),(0,r.kt)("h2",{id:"install-the-otterize-cli"},"Install the Otterize CLI"),(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"mac",label:"Mac",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Apple Silicon",label:"Apple Silicon",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/otterize/otterize-cli/releases/download/v0.1.0/otterize-cli_0.1.0_Darwin_arm64.tar.gz\ntar xf otterize-cli_0.1.0_Darwin_arm64.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))),(0,r.kt)(o.Z,{value:"Intel 64-bit",label:"Intel 64-bit",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/otterize/otterize-cli/releases/download/v0.1.0/otterize-cli_0.1.0_Darwin_x86_64.tar.gz\ntar xf otterize-cli_0.1.0_Darwin_x86_64.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))))),(0,r.kt)(o.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"64-bit",label:"64-bit",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/otterize/otterize-cli/releases/download/v0.1.0/otterize-cli_0.1.0_Windows_x86_64.tar.gz\ntar xf otterize-cli_0.1.0_Windows_x86_64.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))),(0,r.kt)(o.Z,{value:"32-bit",label:"32-bit",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/otterize/otterize-cli/releases/download/v0.1.0/otterize-cli_0.1.0_Windows_i386.tar.gz\ntar xf otterize-cli_0.1.0_Darwin_x86_64.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))))),(0,r.kt)(o.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"amd64",label:"amd64",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/otterize/otterize-cli/releases/download/v0.1.0/otterize-cli_0.1.0_Linux_x86_64.tar.gz\ntar xf otterize-cli_0.1.0_Linux_x86_64.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))),(0,r.kt)(o.Z,{value:"i386",label:"i386",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/otterize/otterize-cli/releases/download/v0.1.0/otterize-cli_0.1.0_Linux_i386.tar.gz\ntar xf otterize-cli_0.1.0_Linux_i386.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n")))))),(0,r.kt)("p",null,"More variants are available at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/otterize/otterize-cli/releases"},"GitHub Releases page"),"."),(0,r.kt)("h2",{id:"retrieving-the-network-map"},"Retrieving the network map"),(0,r.kt)("p",null,"You can view mapped traffic by calling the CLI ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," command. It supports multiple output formats such as ",(0,r.kt)("inlineCode",{parentName:"p"},"intents"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON"),".\nThe following example shows the CLI output filtered for a namespace (otterize-tutorial-mapper) running three pods: client, client2, server."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"plain",label:"Plain",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the list command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize mapper list -n otterize-tutorial-mapper\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should get a result based on your existing traffic looking like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"client in namespace otterize-tutorial-mapper calls:\n  - server\nclient2 in namespace otterize-tutorial-mapper calls:\n  - server\n"))))),(0,r.kt)(o.Z,{value:"intents",label:"Intents",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the export command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize mapper export -n otterize-tutorial-mapper\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should get a result based on your existing traffic looking like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apiVersion: k8s.k8s.otterize.com/v1\nkind: ClientIntents\nmetadata:\n  name: client\n  namespace: otterize-tutorial-mapper\nspec:\n  service:\n    name: client\n  calls:\n    - name: server\n---\napiVersion: k8s.k8s.otterize.com/v1\nkind: ClientIntents\nmetadata:\n  name: server\n  namespace: otterize-tutorial-mapper\nspec:\n  service:\n    name: client2\n  calls:\n    - name: server\n"))))),(0,r.kt)(o.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the export command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize mapper export -n otterize-tutorial-mapper --format json\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should get a result based on your existing traffic looking like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha1",\n    "metadata": {\n      "name": "client",\n      "namespace": "otterize-tutorial-mapper"\n    },\n    "spec": {\n      "service": {\n        "name": "client"\n      },\n      "calls": [\n        {\n          "name": "server"\n        }\n      ]\n    }\n  },\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha1",\n    "metadata": {\n      "name": "client",\n      "namespace": "otterize-tutorial-mapper"\n    },\n    "spec": {\n      "service": {\n        "name": "client"\n      },\n      "calls": [\n        {\n          "name": "server"\n        }\n      ]\n    }\n  }\n]\n')))))),(0,r.kt)("h3",{id:"filtering-by-namespace"},"Filtering by namespace"),(0,r.kt)("p",null,"You can query the mapper for calls originating only from a specific namespace with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"otterize mapper list -n <namespace>\n")),(0,r.kt)("h3",{id:"resetting-the-current-network-map"},"Resetting the current network map"),(0,r.kt)("p",null,"The Otterize network mapper keeps track of active connections as long as it's running. You can clear its state by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"otterize mapper reset\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For the complete list of the Otterize network mapper capabilities\nread the ",(0,r.kt)("a",{parentName:"p",href:"/cli/#network-mapper"},"CLI command reference"),".")),(0,r.kt)("h2",{id:"track-network-map-changes-over-time"},"Track network map changes over time"),(0,r.kt)("p",null,"Using a few simple command-line tricks, you can track changes to the network map over time."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's save the current state of traffic from the cluster into a file we will compare against later"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize mapper list > intents-original.txt\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"And now we can add traffic to the cluster and see how the network mapper tracks it. You can do that by deploying our\nexample\nwhich consists of two pods: client and server, communicating over HTTP. Deploy example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -n otterize-tutorial-mapper -f https://docs.otterize.com/code-examples/network-mapper/all.yaml\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Check that the client and server pods were deployed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-mapper\n")),(0,r.kt)("p",null,"You should see"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                      READY   STATUS    RESTARTS   AGE\nclient-756f7677f8-d6qdq   1/1     Running   0          45s\nserver-6698c58cbc-ssxvx   1/1     Running   0          45s\n"))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Export the updated observed intents."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize mapper list\n")),(0,r.kt)("p",{parentName:"li"},"You will now see the client and server pods communication in addition\nto the previously observed traffic."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# highlight-start\nclient calls:\n  - server\n# highlight-end\n\ncheckoutservice in namespace ecom-demo calls:\n  - orderservice\n\norderservice in namespace ecom-demo calls:\n  - kafka\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We can also compare both outputs to see the difference. We'll start by saving the updated state to a file with:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"otterize mapper list > intents-updated.txt\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"And compare the original file with the updated file using:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"diff --color=always -y intents-original.txt intents-updated.txt;echo\n")),(0,r.kt)("p",{parentName:"li"},"You should see similar output:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"                                                    > client calls:\n                                                    >   - server\n                                                    >\ncheckoutservice in namespace ecom-demo calls:       checkoutservice in namespace ecom-demo calls:\n  - orderservice                                      - orderservice\n\norderservice in namespace ecom-demo calls:          orderservice in namespace ecom-demo calls:\n  - kafka                                             - kafka\n")))),(0,r.kt)("h2",{id:"which-calls-are-picked-up"},"Which calls are picked up"),(0,r.kt)("p",null,"The Otterize network mapper creates a map of in-cluster traffic by (1) capturing DNS traffic and (2) inspecting active connections in the same manner ",(0,r.kt)("inlineCode",{parentName:"p"},"netstat")," does, then resolving the IP addresses participating in connections to the Pods, and crawling up the ownership of the Pod until it reaches the root object."),(0,r.kt)("p",null,"To learn more, read about the ",(0,r.kt)("a",{parentName:"p",href:"/components/network-mapper"},"network mapper"),"."),(0,r.kt)("h2",{id:"network-mapping-for-bootstrapping-access-controls"},"Network mapping for bootstrapping access controls"),(0,r.kt)("p",null,"To export intents from the Otterize network mapper, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"otterize mapper export\n")),(0,r.kt)("p",null,"The output is concatenated ClientIntents which can be piped to ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\n  name: frontend\n  namespace: otterize-ecom-demo\nspec:\n  service:\n    name: frontend\n  calls:\n    - name: checkoutservice\n      type: HTTP\n---\napiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\n  name: checkoutservice\n  namespace: otterize-ecom-demo\nspec:\n  service:\n    name: checkoutservice\n  calls:\n    - name: productcatalogservice\n      type: HTTP\n")),(0,r.kt)("p",null,"You can directly apply these ClientIntents to K8s and Otterize will enforce network policies according to them automatically."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To learn more about how to use ClientIntents to manage network policies read this ",(0,r.kt)("a",{parentName:"p",href:"/guides/k8s-ibac-via-network-policies/"},"guide"))),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use your mapped traffic as intents and implement ",(0,r.kt)("a",{parentName:"li",href:"/guides/k8s-ibac-via-network-policies/"},"IBAC via network policies"),".")),(0,r.kt)("h2",{id:"design-note"},"Design note"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The network mapper is designed for situations where pods use Kubernetes DNS for service discovery.")))}d.isMDXComponent=!0}}]);