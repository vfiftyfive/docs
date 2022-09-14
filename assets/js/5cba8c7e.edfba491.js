"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[268],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),s=a(7094),p=a(2466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,a;const{lazy:o,block:m,defaultValue:d,values:k,groupId:f,className:h}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),N=(0,i.l)(g,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===d?d:null!=(t=null!=d?d:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?t:v[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:y}=(0,s.U)(),[x,T]=(0,r.useState)(b),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=f){const e=w[f];null!=e&&e!==x&&g.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,a=O.indexOf(t),n=g[a].value;n!==x&&(C(t),T(n),null!=f&&y(f,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=O.indexOf(e.currentTarget)+1;a=null!=(n=O[t])?n:O[0];break}case"ArrowLeft":{var r;const t=O.indexOf(e.currentTarget)-1;a=null!=(r=O[t])?r:O[O.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},h)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>O.push(e),onKeyDown:I,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},5800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const i={sidebar_position:2,title:"Map your cluster"},s=void 0,p={unversionedId:"documentation/quick-tutorials/k8s-network-mapper",id:"documentation/quick-tutorials/k8s-network-mapper",title:"Map your cluster",description:"The Network Mapper allows you to map pod-to-pod traffic within your K8s cluster. This tutorial will guide you",source:"@site/docs/documentation/3-quick-tutorials/2-k8s-network-mapper.mdx",sourceDirName:"documentation/3-quick-tutorials",slug:"/documentation/quick-tutorials/k8s-network-mapper",permalink:"/documentation/quick-tutorials/k8s-network-mapper",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/documentation/3-quick-tutorials/2-k8s-network-mapper.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Map your cluster"},sidebar:"docSidebar",previous:{title:"Automate network policies",permalink:"/documentation/quick-tutorials/k8s-network-policies"},next:{title:"Deploy mTLS between pods and Kafka",permalink:"/documentation/quick-tutorials/kafka-mtls"}},c={},u=[{value:"Install Network Mapper",id:"install-network-mapper",level:2},{value:"How to",id:"how-to",level:2},{value:"Show mapped traffic",id:"show-mapped-traffic",level:3},{value:"Change traffic -&gt; Sniff&amp;Diff",id:"change-traffic---sniffdiff",level:3},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:3}],m={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Network Mapper allows you to map pod-to-pod traffic within your K8s cluster. This tutorial will guide you\nthrough installing Otterize, mapping traffic and tracking changes."),(0,r.kt)("h2",{id:"install-network-mapper"},"Install Network Mapper"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:otterize/network-mapper.git\ncd network-mapper\nhelm upgrade --install --create-namespace -n otterize mapper helm/ -f helm/values.yaml\ncd src/cli/cmd/\ngo build -o otterize .\nsudo cp ./otterize /usr/local/bin/\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Decide if we show mapped traffic by namespace or not. If not, then the explanation about pod identities will confuse\nusers as the output ignores namespace.")),(0,r.kt)("h2",{id:"how-to"},"How to"),(0,r.kt)("h3",{id:"show-mapped-traffic"},"Show mapped traffic"),(0,r.kt)("p",null,"You can view mapped traffic by calling the CLI ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," command. It supports multiple output formats such as ",(0,r.kt)("inlineCode",{parentName:"p"},"intents"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON"),".\nThe following example shows the CLI output for a cluster running three pods: checkout, kafka, zookeeper."),(0,r.kt)("p",null,"You should see similar structured results on your cluster."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"plain",label:"Plain",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the list command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize intents list\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should get a result based on your existing traffic looking like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"checkoutservice calls:\n  - orderservice\n\norderservice calls:\n  - kafka\n"))))),(0,r.kt)(o.Z,{value:"intents",label:"Intents",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the export command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize intents export\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should get a result based on your existing traffic looking like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apiVersion: k8s.k8s.otterize.com/v1\nkind: ClientIntents\nmetadata:\n  name: checkoutservice\nspec:\n  service:\n    name: checkoutservice\n  calls:\n    - name: orderservice\n---\napiVersion: k8s.k8s.otterize.com/v1\nkind: ClientIntents\nmetadata:\n  name: orderservice\nspec:\n  service:\n    name: orderservice\n  calls:\n    - name: kafka\n"))))),(0,r.kt)(o.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the export command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize intents export --format json\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should get a result based on your existing traffic looking like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha1",\n    "metadata": {\n      "name": "checkoutservice"\n    },\n    "spec": {\n      "service": {\n        "name": "checkoutservice"\n      },\n      "calls": [\n        {\n          "name": "orderservice"\n        }\n      ]\n    }\n  },\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha1",\n    "metadata": {\n      "name": "orderservice"\n    },\n    "spec": {\n      "service": {\n        "name": "orderservice"\n      },\n      "calls": [\n        {\n          "name": "kafka"\n        }\n      ]\n    }\n  }\n]\n')))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"/documentation/network-mapper/intro"},"Network Mapper documentation")," for more details about the CLI.")),(0,r.kt)("h3",{id:"change-traffic---sniffdiff"},"Change traffic -> Sniff&Diff"),(0,r.kt)("p",null,"One of the benefits for using the network mapper is the ability to track changes over time for communication within your\ncluster."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Let's save the current state of traffic from the cluster into a file we will compare against later",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize intents list > intents-original.txt\n")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"And now we can add traffic to the cluster and see how the Network Mapper tracks it. You can do that by deploying our\nexample\nwhich consists of two pods: client and server, communicating over HTTP. Deploy example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -n otterize-tutorial-mapper -f https://docs.otterize.com/code-examples/network-mapper/all.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check that the ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," and server ",(0,r.kt)("inlineCode",{parentName:"p"},"pods")," were deployed"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-mapper\n")),(0,r.kt)("p",{parentName:"li"},"You should see"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"NAME                      READY   STATUS    RESTARTS   AGE\nclient-756f7677f8-d6qdq   1/1     Running   0          45s\nserver-6698c58cbc-ssxvx   1/1     Running   0          45s\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Export the updated observed intents."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize intents list\n")),(0,r.kt)("p",{parentName:"li"},"You will now see the client and server pods communication in addition\nto the previously observed traffic."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# highlight-start\nclient calls:\n  - server\n# highlight-end\n\ncheckoutservice calls:\n  - orderservice\n\norderservice calls:\n  - kafka\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We can also compare both output to see the difference. We'll start by saving the updated state to a file with"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"otterize intents list > intents-updated.txt\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"And compare the original file with the updated file using"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"diff --color=always -y intents-original.txt intents-updated.txt;echo\n")),(0,r.kt)("p",{parentName:"li"},"You should see a result looking like"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"                                      > client calls:\n                                      >   - server\n                                      >\ncheckoutservice calls:                  checkoutservice calls:\n  - orderservice                          - orderservice\n\norderservice calls:                     orderservice calls:\n  - kafka                                 - kafka\n")))),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("p",null,"Now that we observed cluster intents we can use them with the Intents Operator."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure ",(0,r.kt)("a",{parentName:"li",href:"/documentation/quick-tutorials/k8s-network-policies"},"network policies"),"."),(0,r.kt)("li",{parentName:"ul"},"Configure ",(0,r.kt)("a",{parentName:"li",href:"/documentation/quick-tutorials/kafka-mtls"},"secure access for Kafka"),".")),(0,r.kt)("h3",{id:"teardown"},"Teardown"),(0,r.kt)("p",null,"To remove the deployed resources run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete namespace otterize-tutorial-mapper\nhelm uninstall -n otterize mapper\n")))}d.isMDXComponent=!0}}]);