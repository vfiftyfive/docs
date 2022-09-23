"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(7294),i=n(6010),a=n(3438),o=n(9960),l=n(3919),s=n(5999);const c="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",c)},n)}function m(e){let{href:t,icon:n,title:a,description:o}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",p),title:o},o))}function f(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t;let{item:n}=e;const i=(0,l.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(m,{href:n.href,icon:i,title:n.label,description:null==o?void 0:o.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function h(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const o=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},9119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7462),i=(n(7294),n(3905)),a=n(2991),o=n(3438);const l={title:"Guides"},s=void 0,c={unversionedId:"guides/README",id:"guides/README",title:"Guides",description:"These guides take you through installing and using Otterize.",source:"@site/docs/3-guides/README.mdx",sourceDirName:"3-guides",slug:"/guides/",permalink:"/guides/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/3-guides/README.mdx",tags:[],version:"current",frontMatter:{title:"Guides"},sidebar:"docSidebar",previous:{title:"Deploy mTLS between pods",permalink:"/quick-tutorials/k8s-mtls"},next:{title:"Installing Otterize in Kubernetes",permalink:"/guides/k8s-installation"}},u={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"These guides take you through ",(0,i.kt)("a",{parentName:"p",href:"/guides/k8s-installation"},"installing")," and using Otterize."),(0,i.kt)("p",null,"They are oriented to solving specific use cases,\nsuch as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/guides/k8s-ibac-via-network-policies/"},"automatically controlling K8s pod-to-pod access via network policies"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/guides/ibac-for-k8s-kafka/"},"easily and securely accessing Kafka with mTLS and ACLs"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/guides/k8s-mapping-pod-to-pod-calls/"},"mapping service-to-service calls in your K8s cluster, and bootstrapping intents files"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/guides/k8s-mtls/"},"rolling out mTLS for pod-to-pod authentication"),", and")),(0,i.kt)("p",null,"By following these guides, you will learn not only how to take an intent-based approach to streamlining access control,\nbut also how to ",(0,i.kt)("strong",{parentName:"p"},"bootstrap")," intents files to get your team started,\nand ",(0,i.kt)("strong",{parentName:"p"},"gradually roll it out")," service-by-service or team-by-team."),(0,i.kt)(a.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);