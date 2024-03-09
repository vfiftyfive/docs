"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8397],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6411:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(6540);function a(e){let{items:t,colSize:r}=e,a="lg:tw-grid-cols-2 tw-gap-4 xs:tw-grid-cols-1 ";return"lg"===r?a="lg:tw-grid-cols-4 tw-gap-2 xs:tw-grid-cols-2":"md"===r&&(a="lg:tw-grid-cols-3 tw-gap-2 xs:tw-grid-cols-1 md:tw-grid-cols-2"),n.createElement("div",{className:`tw-grid ${a}`},t.map((e=>n.createElement("div",{key:e.title,className:"tw-relative tw-flex tw-items-center tw-space-x-3 tw-rounded-lg tw-border tw-border-solid tw-border-primary-500 tw-bg-white tw-px-6 tw-py-5 tw-shadow-sm focus-within:tw-ring-2 focus-within:tw-ring-indigo-500 focus-within:tw-ring-offset-2 hover:tw-border-primary-600 hover:tw-shadow-md"},e.icon&&n.createElement("div",{className:"tw-flex-shrink-0"},n.createElement("img",{width:"40px",className:"tw-max-h-10 tw-max-w-10",src:e.icon,alt:""})),n.createElement("div",{className:"tw-min-w-0 tw-flex-1"},n.createElement("a",{href:e.url,className:"focus:tw-outline-none hover:tw-no-underline"},n.createElement("span",{className:"tw-absolute tw-inset-0","aria-hidden":"true"}),n.createElement("div",{className:"tw-text-md tw-font-medium tw-text-gray-900 tw-break-keep"},e.title),e.description&&n.createElement("div",{className:"tw-text-sm tw-text-gray-500"},e.description)))))))}},528:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,postgres_tutorials:()=>d,toc:()=>p});var n=r(8168),a=(r(6540),r(5680)),s=r(6411);const o={sidebar_position:1,title:"PostgreSQL | Overview",hide_title:!0},i=void 0,l={unversionedId:"features/postgresql/index",id:"features/postgresql/index",title:"PostgreSQL | Overview",description:"Otterize is able to create just-in-time username-and-password pairs for your service, providing them as a Kubernetes Secret that can be mounted to file or mapped to environment variables, as well as GRANTing access to databases and tables, based on ClientIntents (Intents-Based Access Control) declarations.",source:"@site/docs/features/postgresql/index.mdx",sourceDirName:"features/postgresql",slug:"/features/postgresql/",permalink:"/features/postgresql/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/features/postgresql/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PostgreSQL | Overview",hide_title:!0},sidebar:"docSidebar",previous:{title:"Reference",permalink:"/features/istio/reference"},next:{title:"Just-in-time PostgreSQL access",permalink:"/features/postgresql/tutorials/postgres"}},c={},p=[{value:"Tutorials",id:"tutorials",level:3},{value:"How does Otterize work with PostgreSQL?",id:"how-does-otterize-work-with-postgresql",level:3}],d=[{title:"Just-in-time PostgreSQL Access",description:"Learn how to manage just-in-time users and SQL GRANTs",url:"/features/postgresql/tutorials/postgres"},{title:"Map PostgreSQL access",description:"Learn how to use PostgreSQL audit logs to map access to your database",url:"/features/postgresql/tutorials/postgres-mapping"}],u={toc:p,postgres_tutorials:d},m="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"postgresql"},"PostgreSQL"),(0,a.yg)("p",null,"Otterize is able to create just-in-time username-and-password pairs for your service, providing them as a Kubernetes Secret that can be mounted to file or mapped to environment variables, as well as ",(0,a.yg)("inlineCode",{parentName:"p"},"GRANT"),"ing access to databases and tables, based on ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientIntents")," (",(0,a.yg)("a",{parentName:"p",href:"/overview/intent-based-access-control"},"Intents-Based Access Control"),") declarations.\nIn addition, Otterize can map the access to your PostgreSQL database, showing you which service is accessing which database, table and which operation it's performing. This can be used to automatically generate the ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientIntents")," declarations."),(0,a.yg)("p",null,"Unlike other access controls in Otterize, PostgreSQL support is exclusively available when using Otterize Cloud."),(0,a.yg)("h3",{id:"tutorials"},"Tutorials"),(0,a.yg)("p",null,"To learn how to use the Intents Operator and Credentials Operator to enforce access using PostgreSQL GRANTs, or map access to your PostgreSQL database, try one of these quickstart tutorials."),(0,a.yg)(s.A,{items:d,colSize:"sm",mdxType:"DocsLinkCard"}),(0,a.yg)("h3",{id:"how-does-otterize-work-with-postgresql"},"How does Otterize work with PostgreSQL?"),(0,a.yg)("p",null,"Otterize Cloud will create a unique PostgreSQL username-password combination for each service's use, exposed via a Kubernetes Secret. The service will use these credentials to connect to the database. ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientIntents")," will define the access required by that service. As the intents are applied, Otterize Cloud will keep the database's list of users and GRANTs up to date so that the service is able to access it."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"To get started, your cluster must have Otterize Cloud installed."),(0,a.yg)("li",{parentName:"ol"},"You\u2019ll need to ",(0,a.yg)("a",{parentName:"li",href:"https://app.otterize.com/integrations"},"integrate")," your database by providing a connection URL and admin-level credentials to manage permissions in your database."),(0,a.yg)("li",{parentName:"ol"},"Each service can request a username-password Secret to be created, by annotating the Pod with ",(0,a.yg)("inlineCode",{parentName:"li"},"credentials-operator.otterize.com/user-password-secret-name"),". Below is an example of that annotation and passing the generated credentials into a container with environmental variables.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: server\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: server\n  template:\n    metadata:\n      annotations:\n        # highlight-next-line\n        credentials-operator.otterize.com/user-password-secret-name: server-creds\n      labels:\n        app: server\n    spec:\n      serviceAccountName: server\n      containers:\n        - name: server\n          imagePullPolicy: Always\n          image: 'supercool/my-example-container'\n          ports:\n            - containerPort: 80\n          env:\n            - name: DB_SERVER_USER\n              valueFrom:\n                secretKeyRef:\n                  name: server-creds\n                  key: username\n            - name: DB_SERVER_PASSWORD\n              valueFrom:\n                secretKeyRef:\n                  name: server-creds\n                  key: password\n")),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"Apply ",(0,a.yg)("inlineCode",{parentName:"li"},"ClientIntents")," and the specified access will be ",(0,a.yg)("inlineCode",{parentName:"li"},"GRANT"),"ed to the service in the ",(0,a.yg)("inlineCode",{parentName:"li"},"ClientIntents"),".")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: client-intents-for-server\n  namespace: otterize-tutorial-postgres\nspec:\n  service:\n    name: server\n  calls:\n    - name: otterize-tutorial-postgres # Same name as our integration\n      type: database\n      databaseResources:\n        - databaseName: otterize-tutorial\n          table: public.example\n          operations:\n            - SELECT\n            - INSERT\n")),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},"Done!")))}g.isMDXComponent=!0}}]);