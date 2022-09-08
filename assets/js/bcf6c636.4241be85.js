"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),p=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n;const{lazy:l,block:m,defaultValue:d,values:k,groupId:f,className:h}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===d?d:null!=(t=null!=d?d:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:y}=(0,s.U)(),[T,x]=(0,r.useState)(N),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=f){const e=w[f];null!=e&&e!==T&&g.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==T&&(C(t),x(a),null!=f&&y(f,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=O.indexOf(e.currentTarget)+1;n=null!=(a=O[t])?a:O[0];break}case"ArrowLeft":{var r;const t=O.indexOf(e.currentTarget)-1;n=null!=(r=O[t])?r:O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},h)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:I,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},4877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={sidebar_position:2,title:"Map your cluster"},s=void 0,p={unversionedId:"documentation/quick-tutorials/network-mapper",id:"documentation/quick-tutorials/network-mapper",title:"Map your cluster",description:"The Network Mapper allows you to map pod-to-pod traffic within your K8s cluster. This tutorial will guide you",source:"@site/docs/documentation/2-quick-tutorials/2-network-mapper.md",sourceDirName:"documentation/2-quick-tutorials",slug:"/documentation/quick-tutorials/network-mapper",permalink:"/documentation/quick-tutorials/network-mapper",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/documentation/2-quick-tutorials/2-network-mapper.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Map your cluster"},sidebar:"docSidebar",previous:{title:"index",permalink:"/documentation/quick-tutorials/"},next:{title:"Automate network policies",permalink:"/documentation/quick-tutorials/network-policies"}},c={},u=[{value:"Install Network Mapper",id:"install-network-mapper",level:2},{value:"How to",id:"how-to",level:2},{value:"Show mapped traffic",id:"show-mapped-traffic",level:3},{value:"Change traffic -&gt; Sniff&amp;Diff",id:"change-traffic---sniffdiff",level:3},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:3}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Network Mapper allows you to map pod-to-pod traffic within your K8s cluster. This tutorial will guide you\nthrough installing Otterize, mapping traffic and tracking changes."),(0,r.kt)("h2",{id:"install-network-mapper"},"Install Network Mapper"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:otterize/network-mapper.git\ncd network-mapper\nhelm upgrade --install --create-namespace -n otterize mapper helm/ -f helm/values.yaml\ncd src/cli/cmd/\ngo build -o otterize .\nsudo cp ./otterize /usr/local/bin/\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Decide if we show mapped traffic by namespace or not. If not, then the explanation about pod identities will confuse\nusers as the output ignores namespace.")),(0,r.kt)("h2",{id:"how-to"},"How to"),(0,r.kt)("h3",{id:"show-mapped-traffic"},"Show mapped traffic"),(0,r.kt)("p",null,"You can view mapped traffic by calling the CLI ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," command. It supports multiple output formats such as ",(0,r.kt)("inlineCode",{parentName:"p"},"intents"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON"),".\nThe following example shows the CLI output for a cluster running three pods: checkout, kafka, zookeeper."),(0,r.kt)("p",null,"You should see similar structured results on your cluster."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"plain",label:"Plain",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the list command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize intents list\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should get a result based on your existing traffic looking like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"checkoutservice calls:\n  - orderservice\n\norderservice calls:\n  - kafka\n"))))),(0,r.kt)(l.Z,{value:"intents",label:"Intents",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the export command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize intents export\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should get a result based on your existing traffic looking like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apiVersion: k8s.k8s.otterize.com/v1\nkind: ClientIntents\nmetadata:\n  name: checkoutservice\nspec:\n  service:\n    name: checkoutservice\n  calls:\n    - name: orderservice\n---\napiVersion: k8s.k8s.otterize.com/v1\nkind: ClientIntents\nmetadata:\n  name: orderservice\nspec:\n  service:\n    name: orderservice\n  calls:\n    - name: kafka\n"))))),(0,r.kt)(l.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the export command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize intents export --format json\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should get a result based on your existing traffic looking like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha1",\n    "metadata": {\n      "name": "checkoutservice"\n    },\n    "spec": {\n      "service": {\n        "name": "checkoutservice"\n      },\n      "calls": [\n        {\n          "name": "orderservice"\n        }\n      ]\n    }\n  },\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha1",\n    "metadata": {\n      "name": "orderservice"\n    },\n    "spec": {\n      "service": {\n        "name": "orderservice"\n      },\n      "calls": [\n        {\n          "name": "kafka"\n        }\n      ]\n    }\n  }\n]\n')))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"/documentation/network-mapper/intro"},"Network Mapper documentation")," for more details about the CLI.")),(0,r.kt)("h3",{id:"change-traffic---sniffdiff"},"Change traffic -> Sniff&Diff"),(0,r.kt)("p",null,"One of the benefits for using the network mapper is the ability to track changes over time for communication within your\ncluster.\nLet's add traffic to the cluster and see how the Network Mapper tracks it. You can do that by deploying our example\nwhich consists of two pods: client and server, communicating over HTTP."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -n otterize-tutorial-mapper -f https://docs.otterize.com/code-examples/network-mapper/all.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check that the ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," and server ",(0,r.kt)("inlineCode",{parentName:"p"},"pods")," were deployed"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-mapper\n")),(0,r.kt)("p",{parentName:"li"},"You should see"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"NAME                      READY   STATUS    RESTARTS   AGE\nclient-756f7677f8-d6qdq   1/1     Running   0          45s\nserver-6698c58cbc-ssxvx   1/1     Running   0          45s\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Export the updated observed intents."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize intents list\n")),(0,r.kt)("p",{parentName:"li"},"You will now see the client and server pods communication in addition\nto the previously observed traffic."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# highlight-start\nclient calls:\n  - server\n# highlight-end\n\ncheckoutservice calls:\n  - orderservice\n\norderservice calls:\n  - kafka\n")))),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("p",null,"Now that we observed cluster intents we can use them with the Intents Operator."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure ",(0,r.kt)("a",{parentName:"li",href:"/documentation/getting-started/network-policies"},"network policies")),(0,r.kt)("li",{parentName:"ul"},"Configure secure access for Kafka")),(0,r.kt)("h3",{id:"teardown"},"Teardown"),(0,r.kt)("p",null,"To remove the deployed resources run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete namespace otterize-tutorial-mapper\nhelm uninstall -n otterize mapper\n")))}d.isMDXComponent=!0}}]);