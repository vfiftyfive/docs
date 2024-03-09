"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9514],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=o,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(8168),o=(n(6540),n(5680));const a={sidebar_position:13,title:"FAQ"},i=void 0,s={unversionedId:"faq/README",id:"faq/README",title:"FAQ",description:"What's the difference between authorization and authentication?",source:"@site/docs/faq/README.mdx",sourceDirName:"faq",slug:"/faq/",permalink:"/faq/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/faq/README.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"FAQ"},sidebar:"docSidebar",previous:{title:"Security",permalink:"/security/"}},c={},l=[],u={toc:l},h="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(h,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("details",null,(0,o.yg)("summary",null,"What's the difference between authorization and authentication?"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Authorization")," means to allow a client (in our case, another service) of a server to perform certain operations\non that server (specifically, through that server's API). Often, the server will want to allow one client to perform\ncertain operations that another client cannot perform. To know whether a client ca perform the operation the client requests,\nthe server must first know which client is making the request."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Authentication")," means verifying who a client is, i.e. determining its identity. Usually the client presents some\ncredentials at the time it makes the request; when the server verifies them, i.e. authenticates the client, it now\nknows the identity of the client, and can see whether that specific client is authorized to perform the requested operation."),(0,o.yg)("p",null,"In some cases, authorization is implied through authentication: any client the server definitively recognizes, i.e.\nauthenticates, is allowed to perform any requested operation."),(0,o.yg)("p",null,"There are many variations on authorization and authentication. For example, when Otterize is used with Kubernetes\nnetwork policies, the Otterize intents operator first establishes pod identity using\n",(0,o.yg)("a",{parentName:"p",href:"/reference/service-identities"},"a certain algorithm"),". To authorize pod-to-pod access, it then creates labels and configures\nnetwork policies in the Kubernetes cluster such that only client pods that are authorized to access the server pod\nare allowed network access to those servers. At runtime, the authorized client pods can simply send requests\nto the server pods, and unless other enforcement mechanisms are in place, no authentication is needed. (Effectively,\nthe labels which Otterize configured Kubernetes to put on the pod serve as a kind of authentication for the network policies.)")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"What is IBAC?"),(0,o.yg)("p",null,"IBAC is short for intent-based access control, which is ",(0,o.yg)("strong",{parentName:"p"},"a new paradigm")," for configuring service-to-service access\ncontrol based on the client service declaring what server calls (or operations) it intends to make."),(0,o.yg)("p",null,"For more information, see the ",(0,o.yg)("a",{parentName:"p",href:"/intent-based-access-control"},"IBAC documentation page"),".")),(0,o.yg)("details",null,(0,o.yg)("summary",null,'What\'s behind the name "Otterize"?'),(0,o.yg)("p",null,"That's easy: it's \"authorize\" in a Hebrew accent ","\ud83d\ude09")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Where does Otterize fit in my infrastructure?"),(0,o.yg)("p",null,"Otterize does not provide yet another layer in your infrastructure, at least not in your runtime infrastructure.\nInstead, Otterize primarily configures your existing infrastructure's access controls -- its enforcement points --\naccording to client intents that have been applied in a particular context -- say, a Kubernetes namespace, or\nan environment (when using Otterize Cloud). With Otterize Cloud, you can also set rules on how to process intents\nbefore they're used to configure access controls, or even to set access controls directly."),(0,o.yg)("p",null,"Otterize also provides an optional server SDK (coming soon) that you can embed in your code as an inline access control.\nIt provides a layer of authentication and authorization that can be standalone or can be used in addition to\nother access controls such as network policies, API gateways, or proxies.")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Is Otterize open source?"),(0,o.yg)("p",null,"Otterize provides a standalone, completely open-source solution called ",(0,o.yg)("strong",{parentName:"p"},"Otterize OSS")," for intent-based access control\nwithin a Kubernetes cluster. More information is available at ",(0,o.yg)("a",{parentName:"p",href:"https://otterize.com/open-source"},"otterize.com/open-source"),"\nand on ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/otterize"},"GitHub"),"."),(0,o.yg)("p",null,"Otterize also provides a cloud-based, SaaS offering called Otterize Cloud that is not open source, with both free and\npaid tiers. More information is available at ",(0,o.yg)("a",{parentName:"p",href:"https://otterize.com/product"},"otterize.com/product")),(0,o.yg)("p",null,"In general, ",(0,o.yg)("strong",{parentName:"p"},"all"),' Otterize components that run on the user side ("on prem") are open sourced. These include the Kubernetes operators\nand the network mapper that are part of Otterize OSS, as well as the Otterize CLI, the Otterize SDK (coming soon), and components\nto integrate with your infrastructure, e.g. for integrating with Kafka outside of Kubernetes.')),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Can I start with one use-case and expand to other use-cases as I grow?"),(0,o.yg)("p",null,"Sure, in fact we recommend that you roll out IBAC gradually, to grow your and your organization's confidence in this approach.\nChange, even when positive, is not always easy to manage. Tools such as the network mapper let you bootstrap intents files to make\nadoption by teams that own specific services much easier. Read the various tutorials for ",(0,o.yg)("a",{parentName:"p",href:"/quickstart/access-control/k8s-network-policies"},"network policies"),", ",(0,o.yg)("a",{parentName:"p",href:"/quickstart/access-control/k8s-kafka-mtls"},"Kafka"),", ",(0,o.yg)("a",{parentName:"p",href:"/quickstart/visualization/k8s-network-mapper"},"network mapping"),".\nto see how to roll out IBAC gradually for various use cases.")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"How is Otterize different from a service mesh?"),(0,o.yg)("p",null,"Otterize's approach is to configure and use your existing infrastructure as much as possible, rather than replacing existing components, and help you achieve zero-trust through effective use of authentication and authorization across heterogeneous infrastructures and tech stacks. The drivers for authentication and authorization are client intents: metadata that's used to configure enforcement points."),(0,o.yg)("p",null,"In contrast, service meshes aim to solve a whole slew of problems and tasks related to microservices, such as request routing and load balancing, circuit breaking, retries, rate limiting, blue/green deployment, service discovery, observability and metrics, as well as authentication and authorization. Otterize does not aim to do all of these things ","\u2014"," only authentication and authorization. And even there, it does not aim to replace enforcement points for authN/authZ ","\u2014"," it just configures them based on client intents and any overriding rules. So if a service mesh is used to enforce access, Otterize would configure it based on client intents (and any override rules) ","\u2014"," as we do with ",(0,o.yg)("a",{parentName:"p",href:"/quickstart/access-control/k8s-istio-authorization-policies"},"our support for Istio"),"."),(0,o.yg)("p",null,"Unlike Otterize, service meshes generally aim to be the a one-stop-shop for all your needs, replacing many of the technologies you currently use. For many, this actually turns out to be friction, especially if you just want to apply authorization, and don't wish to change various technologies that are already working for you."),(0,o.yg)("p",null,"In summary, Otterize is not a replacement for a service mesh: a service mesh does many things Otterize doesn't, and vice versa. If you use a service mesh in a Kubernetes cluster, but also have other services that live outside a service mesh, Otterize aims to help you achieve effective zero-trust between those services when they communicate, without demanding that you replace the tech stack for one or the other, instead helping them coexist peacefully.")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Can I control which intents are being approved and which are not?"),(0,o.yg)("p",null,"Usually, when client intents files go through code review along with the client code, they accurately reflect the calls\nthe client will be making, so it would make sense to enable access controls so those calls can go through. Depending on\nthe access control mechanisms, once Otterize configures secure access to a server based on a client's declared intent,\nall unintended calls are then blocked ","\u2014"," for example, configuring the first Kubernetes network policy on a service blocks\naccess from pods not having a network policy on that service, and configuring a Kafka ACL on a topic blocks access to that\ntopics from clients not having an ACL on it. In that case, intents not only enable client access, they also increase server security."),(0,o.yg)("p",null,"But there may well be cases in which access should still require some other approval before it's granted. For example,\nintents might automatically turn into access only in certain environments, or only for certain services, while others\nrequire approval or some other check. For such cases, Otterize Cloud (coming soon) provides automation rules that\nintermediate between application of intents and granting of access. Even within Otterize OSS, platform teams can\nmanage when access is granted by managing when ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl apply")," executes within a CI/CD pipeline."),(0,o.yg)("p",null,"For more information on IBAC and security, see the ",(0,o.yg)("a",{parentName:"p",href:"/security"},"security documentation"),".")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Will you keep supporting the open source in parallel with the Otterize Cloud product?"),(0,o.yg)("p",null,"Otterize OSS is as critical for us as Otterize Cloud. Our mission is to get IBAC ","\u2014"," intent-based access control ","\u2014"," adopted\nas broadly as possible. We can't do it alone, and that means we can't do it without being open-first: with a robust open-source\noffering, an openness to develop an open ecosystem around IBAC, and an open mind to learning from the community what works and\nwhen doesn't and therefore making changes and evolving. It's also the way we work within Otterize as a company, something we\nhope to publish soon as a blog post."),(0,o.yg)("p",null,"In short, our one metric as a company is adoption, and that will be driven by Otterize OSS as much as by Otterize Cloud."),(0,o.yg)("p",null,"Which means Otterize OSS will continue to be developed energetically along with Otterize Cloud. After all,\nOtterize OSS ",(0,o.yg)("strong",{parentName:"p"},"is")," the way Otterize implements IBAC within a Kubernetes cluster, and is also the way Otterize Cloud integrates with Kubernetes clusters.\nOtterize OSS will continue indefinitely to be a robust, productized, free and open source implementation of IBAC in a Kubernetes cluster, which\nnever requires any commercial software.")))}p.isMDXComponent=!0}}]);