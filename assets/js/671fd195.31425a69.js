"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5864],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>f});var o=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9875:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(8168),n=(r(6540),r(5680));const a={sidebar_position:1,title:"Intro",hide_title:!0},i="Overview",s={unversionedId:"overview/index",id:"overview/index",title:"Intro",description:"Otterize is a declarative and zero-trust approach to access management that empowers you to streamline workload IAM while ensuring maximum security.",source:"@site/docs/overview/index.mdx",sourceDirName:"overview",slug:"/overview/",permalink:"/overview/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/overview/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Intro",hide_title:!0},sidebar:"docSidebar",previous:{title:"Getting Started",permalink:"/"},next:{title:"Installation",permalink:"/overview/installation/"}},l={},p=[{value:"How does Otterize work?",id:"how-does-otterize-work",level:2},{value:"Network mapper",id:"network-mapper",level:3},{value:"Credentials operator",id:"credentials-operator",level:3},{value:"Intents operator",id:"intents-operator",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,o.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"overview"},"Overview"),(0,n.yg)("p",null,"Otterize is a declarative and zero-trust approach to access management that empowers you to streamline workload IAM while ensuring maximum security."),(0,n.yg)("h2",{id:"how-does-otterize-work"},"How does Otterize work?"),(0,n.yg)("p",null,"Otterize is deployed to Kubernetes using a Helm chart that deploys the core open-source components: the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/otterize/network-mapper"},"network mapper"),", ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/otterize/intents-operator"},"intents-operator"),", and ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/otterize/credentials-operator"},"credentials-operator"),". These components each have a stand-alone function (mapping access, provisioning policies and provisioning credentials, respectively), but together they can automate workload IAM."),(0,n.yg)("h3",{id:"network-mapper"},"Network mapper"),(0,n.yg)("p",null,"The network mapper is a zero-config open-source tool that provides insights into your workload traffic without modifying your code or adding additional layers. Once Otterize is installed, the network monitor will automatically inspect pod traffic metadata to create a map of accesses, including:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Pod-to-pod traffic"),(0,n.yg)("li",{parentName:"ul"},"Internet egress traffic"),(0,n.yg)("li",{parentName:"ul"},"Pod-to-pod traffic including the URL and HTTP method, when an Istio sidecar is available"),(0,n.yg)("li",{parentName:"ul"},"Kafka topics"),(0,n.yg)("li",{parentName:"ul"},"PostgreSQL databases and tables"),(0,n.yg)("li",{parentName:"ul"},"AWS resources")),(0,n.yg)("p",null,"Out of the box, only pod-to-pod, Internet egress traffic and Istio traffic is collected. To enable the rest, see the tutorials."),(0,n.yg)("p",null,"This information can then be viewed as a graph, exported textually, or used to automatically generate ClientIntents, a resource used with the intents operator."),(0,n.yg)("p",null,"For more information, visit the ",(0,n.yg)("a",{parentName:"p",href:"/reference/configuration/network-mapper"},"network mapper reference page"),"."),(0,n.yg)("h3",{id:"credentials-operator"},"Credentials operator"),(0,n.yg)("p",null,"The credentials operator handles the provisioning just-in-time credentials for workloads to authenticate. It can issue mTLS credentials or database username + passwords as Kubernetes Secrets, or create AWS IAM roles. To learn about each of these, check the respective tutorials."),(0,n.yg)("p",null,"For more information, visit the ",(0,n.yg)("a",{parentName:"p",href:"/reference/configuration/credentials-operator"},"credential operator reference page")),(0,n.yg)("h3",{id:"intents-operator"},"Intents operator"),(0,n.yg)("p",null,"The intents operator handles the provisioning of just-in-time policies based on the declared ClientIntents of workloads within a cluster. It can manage network policies, Istio authorization policies, AWS IAM policies, PostgreSQL GRANTs, and Kafka ACLs. To learn about each of these, visit the respective tutorial.\nThe intents operator does not implement its own policies, but instead configures your existing infrastructure's policies to allow the access required by each workload. This means that it does not ever see your data."),(0,n.yg)("p",null,"For more information, visit the ",(0,n.yg)("a",{parentName:"p",href:"reference/configuration/intents-operator"},"intents operator reference page")))}d.isMDXComponent=!0}}]);