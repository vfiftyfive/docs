"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const l={sidebar_position:1,title:"Installing Otterize in Kubernetes"},a=void 0,i={unversionedId:"guides/k8s-installation",id:"guides/k8s-installation",title:"Installing Otterize in Kubernetes",description:"Install Otterize on a Kubernetes cluster using helm.",source:"@site/docs/3-guides/1-k8s-installation.mdx",sourceDirName:"3-guides",slug:"/guides/k8s-installation",permalink:"/guides/k8s-installation",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/3-guides/1-k8s-installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Installing Otterize in Kubernetes"},sidebar:"docSidebar",previous:{title:"Guides",permalink:"/guides/"},next:{title:"IBAC in Kubernetes via network policies",permalink:"/guides/k8s-ibac-via-network-policies/"}},s={},p=[{value:"Install Otterize",id:"install-otterize",level:2},{value:"Verify network policies are enforceable",id:"verify-network-policies-are-enforceable",level:2},{value:"Install Otterize components separately",id:"install-otterize-components-separately",level:2},{value:"Network policies",id:"network-policies",level:3},{value:"Verify network policies are enforceable",id:"verify-network-policies-are-enforceable-1",level:4},{value:"Kafka/mTLS",id:"kafkamtls",level:3},{value:"Uninstall Otterize",id:"uninstall-otterize",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Install Otterize on a Kubernetes cluster using helm."),(0,o.kt)("h2",{id:"install-otterize"},"Install Otterize"),(0,o.kt)("p",null,"Use Helm to install the latest version of Otterize:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm upgrade --install otterize otterize/otterize-kubernetes -n otterize --create-namespace\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Optional: check installation status"),(0,o.kt)("div",null,(0,o.kt)("p",null," It can take several minutes for the pods to be ",(0,o.kt)("inlineCode",{parentName:"p"},"Running")," and all containers to be ready.\nYou can monitor progress with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get pods -n otterize -w\n")),(0,o.kt)("p",null,"   Once you see the following (there may be even more pods), you can stop monitoring with ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl-C"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                             READY   STATUS    RESTARTS      AGE\nintents-operator-controller-manager-6b97596d54-5qxcw             2/2     Running   0             53s\notterize-spire-agent-9s8w7                                       1/1     Running   0             54s\notterize-spire-agent-np2wf                                       1/1     Running   1             54s\notterize-spire-server-0                                          1/1     Running   0             53s\notterize-watcher-77db87cfcd-xhsrk                                1/1     Running   0             53s\nspire-integration-operator-controller-manager-65b8bf57b5-mpltl   2/2     Running   0             53s\n")))),(0,o.kt)("h2",{id:"verify-network-policies-are-enforceable"},"Verify network policies are enforceable"),(0,o.kt)("p",null,"To enforce network policies, a Kubernetes cluster must be using a CNI network plugin\nthat supports network policies."),(0,o.kt)("p",null,"If you don't have a CNI installed, a popular choice is Calico by Tigera.\nTo install it, please follow the\n",(0,o.kt)("a",{parentName:"p",href:"https://projectcalico.docs.tigera.io/getting-started/kubernetes/helm"},"instructions"),"\nand return to this tutorial."),(0,o.kt)("h2",{id:"install-otterize-components-separately"},"Install Otterize components separately"),(0,o.kt)("p",null,"You can install Otterize components using one of the following commands.\nFor a complete list of the helm chart flags look ",(0,o.kt)("a",{parentName:"p",href:"/components/otterize/helm-chart"},"here")),(0,o.kt)("h3",{id:"network-policies"},"Network policies"),(0,o.kt)("p",null,"Use Helm to install the latest version of Otterize:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm upgrade --install otterize otterize/otterize-kubernetes -n otterize --create-namespace \\\n--set deployment.spire=false --set deployment.spireIntegrationOperator=false --set intentsOperator.operator.autoGenerateTLSUsingSpireIntegration=false\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Optional: check installation status"),(0,o.kt)("div",null,(0,o.kt)("p",null,"It can take several minutes for the pods to be ",(0,o.kt)("inlineCode",{parentName:"p"},"Running")," and all containers to be ready.\nYou can monitor progress with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get pods -n otterize -w\n")),(0,o.kt)("p",null,"Once you see the following (there may be even more pods), you can stop monitoring with ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl-C"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                             READY   STATUS    RESTARTS      AGE\nintents-operator-controller-manager-6b97596d54-5qxcw             2/2     Running   0             53s\notterize-watcher-77db87cfcd-xhsrk                                1/1     Running   0             53s\n")))),(0,o.kt)("h4",{id:"verify-network-policies-are-enforceable-1"},"Verify network policies are enforceable"),(0,o.kt)("p",null,"To enforce network policies, a Kubernetes cluster must be using a CNI network plugin\nthat supports network policies."),(0,o.kt)("p",null,"If you don't have a CNI installed, a popular choice is Calico by Tigera.\nTo install it, please follow the\n",(0,o.kt)("a",{parentName:"p",href:"https://projectcalico.docs.tigera.io/getting-started/kubernetes/helm"},"instructions"),"\nand return to this tutorial."),(0,o.kt)("h3",{id:"kafkamtls"},"Kafka/mTLS"),(0,o.kt)("p",null,"Use Helm to install the latest version of Otterize:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm upgrade --install otterize otterize/otterize-kubernetes -n otterize --create-namespace \\\n--set intentsOperator.operator.enableNetworkPolicyCreation=false\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Optional: check deployment status"),(0,o.kt)("div",null,(0,o.kt)("p",null,"It can take several minutes for the pods to be ",(0,o.kt)("inlineCode",{parentName:"p"},"Running")," and all containers to be ready.\nYou can monitor progress with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get pods -n otterize -w\n")),(0,o.kt)("p",null,"Once you see the following (there may be even more pods), you can stop monitoring with ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl-C"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                             READY   STATUS    RESTARTS      AGE\nintents-operator-controller-manager-6b97596d54-5qxcw             2/2     Running   0             53s\notterize-spire-agent-9s8w7                                       1/1     Running   0             54s\notterize-spire-agent-np2wf                                       1/1     Running   1             54s\notterize-spire-server-0                                          1/1     Running   0             53s\notterize-watcher-77db87cfcd-xhsrk                                1/1     Running   0             53s\nspire-integration-operator-controller-manager-65b8bf57b5-mpltl   2/2     Running   0             53s\n")))),(0,o.kt)("h2",{id:"uninstall-otterize"},"Uninstall Otterize"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall -n otterize otterize\n")))}u.isMDXComponent=!0}}]);