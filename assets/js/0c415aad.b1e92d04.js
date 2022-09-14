"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),c=n(2466);const m="tabList__CuJ",p="tabItem_LNqP";function u(e){var t,n;const{lazy:l,block:u,defaultValue:d,values:h,groupId:g,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===d?d:null!=(t=null!=d?d:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:T}=(0,s.U)(),[w,S]=(0,r.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:z}=(0,c.o5)();if(null!=g){const e=N[g];null!=e&&e!==w&&v.some((t=>t.value===e))&&S(e)}const x=e=>{const t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==w&&(z(t),S(a),null!=g&&T(g,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;n=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},k)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:E,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},7244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),l=n(5162);const o={sidebar_position:4,title:"Deploy mTLS between pods"},s="mTLS",c={unversionedId:"documentation/quick-tutorials/k8s-mtls",id:"documentation/quick-tutorials/k8s-mtls",title:"Deploy mTLS between pods",description:"This tutorial will walk you through deploying mTLS certificates on a sample client-server deployment.",source:"@site/docs/documentation/3-quick-tutorials/4-k8s-mtls.mdx",sourceDirName:"documentation/3-quick-tutorials",slug:"/documentation/quick-tutorials/k8s-mtls",permalink:"/documentation/quick-tutorials/k8s-mtls",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/documentation/3-quick-tutorials/4-k8s-mtls.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Deploy mTLS between pods"},sidebar:"docSidebar",previous:{title:"Deploy mTLS between pods and Kafka",permalink:"/documentation/quick-tutorials/kafka-mtls"},next:{title:"Guides",permalink:"/documentation/guides/"}},m={},p=[{value:"Install Otterize",id:"install-otterize",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Inspect credentials",id:"inspect-credentials",level:2},{value:"What happened behind the scenes",id:"what-happened-behind-the-scenes",level:2},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mtls"},"mTLS"),(0,r.kt)("p",null,"This tutorial will walk you through deploying mTLS certificates on a sample client-server deployment.\nWe will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install Otterize"),(0,r.kt)("li",{parentName:"ul"},"Learn how to annotate pods for automatic credentials generation"),(0,r.kt)("li",{parentName:"ul"},"Deploy client and server pods communicating over HTTPS and provision credentials to them"),(0,r.kt)("li",{parentName:"ul"},"Inspect the credentials")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can skip this section if Otterize is already installed in your cluster.")),(0,r.kt)("h2",{id:"install-otterize"},"Install Otterize"),(0,r.kt)("p",null,"Use Helm to install the latest version of Otterize:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://otterize.github.io/helm-charts\nhelm repo update\nhelm upgrade --install otterize otterize/otterize-kubernetes -n otterize --create-namespace\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Optional: check installation status"),(0,r.kt)("div",null,(0,r.kt)("p",null," It can take several minutes for the pods to be ",(0,r.kt)("inlineCode",{parentName:"p"},"Running")," and all containers to be ready.\nYou can monitor progress with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get pods -n otterize -w\n")),(0,r.kt)("p",null,"   Once you see the following (there may be even more pods), you can stop monitoring with ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl-C"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                             READY   STATUS    RESTARTS      AGE\nintents-operator-controller-manager-6b97596d54-5qxcw             2/2     Running   0             53s\notterize-spire-agent-9s8w7                                       1/1     Running   0             54s\notterize-spire-agent-np2wf                                       1/1     Running   1             54s\notterize-spire-server-0                                          1/1     Running   0             53s\notterize-watcher-77db87cfcd-xhsrk                                1/1     Running   0             53s\nspire-integration-operator-controller-manager-65b8bf57b5-mpltl   2/2     Running   0             53s\n")))),(0,r.kt)("h2",{id:"deploy"},"Deploy"),(0,r.kt)("p",null,"Our example consists of two pods: client and server communicating over HTTPS using credentials\nprovisioned by Otterize."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the details of this example..."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"namespace.yaml",label:"namespace.yaml",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\nname: otterize-tutorial-kafka-mtls\n"))),(0,r.kt)(l.Z,{value:"client-deployment.yaml",label:"client-deployment.yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\nname: client\nnamespace: otterize-tutorial-kafka-mtls\nspec:\nselector:\n matchLabels:\n   app: client\ntemplate:\n metadata:\n   labels:\n     app: client\n   annotations:\n     spire-integration.otterize.com/tls-secret-name: client-credentials-secret\n spec:\n   containers:\n     - name: client\n       image: golang\n       command: [ "/bin/sh", "-c", "--" ]\n       args: [ "while true; do cd /app; cp src/* .; go get main; go run .; sleep infinity; done" ]\n       volumeMounts:\n         - name: ephemeral\n           mountPath: /app\n         - mountPath: /app/src\n           name: client-go\n         - name: otterize-credentials\n           mountPath: /var/otterize/credentials\n           readOnly: true\n   volumes:\n     - name: client-go\n       configMap:\n         name: client-go\n     - name: otterize-credentials\n       secret:\n         secretName: client-credentials-secret\n     - name: ephemeral\n       emptyDir: { }\n'))),(0,r.kt)(l.Z,{value:"client-configmap.yaml",label:"client-configmap.yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\nname: client-go\nnamespace: otterize-tutorial-kafka-mtls\ndata:\nclient.go: |\n package main\n \n import (\n "crypto/tls"\n "crypto/x509"\n "fmt"\n "github.com/Shopify/sarama"\n "github.com/sirupsen/logrus"\n "io/ioutil"\n "time"\n )\n \n const (\n kafkaAddr     = "kafka.kafka:9092"\n testTopicName = "mytopic"\n certFile      = "/var/otterize/credentials/svid.pem"\n keyFile       = "/var/otterize/credentials/key.pem"\n rootCAFile    = "/var/otterize/credentials/bundle.pem"\n )\n \n func getTLSConfig() (*tls.Config, error) {\n cert, err := tls.LoadX509KeyPair(certFile, keyFile)\n if err != nil {\n return nil, fmt.Errorf("failed loading x509 key pair: %w", err)\n }\n \n pool := x509.NewCertPool()\n rootCAPEM, err := ioutil.ReadFile(rootCAFile)\n if err != nil {\n return nil, fmt.Errorf("failed loading root CA PEM file: %w ", err)\n }\n pool.AppendCertsFromPEM(rootCAPEM)\n \n return &tls.Config{\n Certificates: []tls.Certificate{cert},\n RootCAs:      pool,\n }, nil\n }\n \n func loop_kafka() error {\n addrs := []string{kafkaAddr}\n \n config := sarama.NewConfig()\n fmt.Println("Loading mTLS certificates")\n config.Net.TLS.Enable = true\n tlsConfig, err := getTLSConfig()\n if err != nil {\n return err\n }\n config.Net.TLS.Config = tlsConfig\n fmt.Println("Connecting to Kafka")\n config.Net.DialTimeout = 5 * time.Second\n config.Net.ReadTimeout = 5 * time.Second\n config.Net.WriteTimeout = 5 * time.Second\n client, err := sarama.NewClient(addrs, config)\n if err != nil {\n return err\n }\n fmt.Println("Creating a producer and a consumer")\n config.Producer.Return.Successes = true\n config.Producer.Timeout = 5 * time.Second\n config.Consumer.MaxWaitTime = 5 * time.Second\n config.Producer.Return.Errors = true\n config.Consumer.Return.Errors = true\n producer, err := sarama.NewSyncProducerFromClient(client)\n if err != nil {\n return err\n }\n \n consumer, err := sarama.NewConsumerFromClient(client)\n if err != nil {\n return err\n }\n fmt.Println("Sending messages")\n for i := 1; i <= 5; i++ {\n msg := fmt.Sprintf("Message %d", i)\n _, _, err = producer.SendMessage(&sarama.ProducerMessage{\n Topic:     testTopicName,\n Partition: -1,\n Value:     sarama.StringEncoder(msg),\n })\n if err != nil {\n return err\n }\n fmt.Printf("Sent message - %s\\n", msg)\n time.Sleep(1 * time.Second)\n }\n \n partConsumer, err := consumer.ConsumePartition(testTopicName, 0, 0)\n if err != nil {\n return err\n }\n \n for msg := range partConsumer.Messages() {\n fmt.Printf("Read message - %s\\n", msg.Value)\n }\n return nil\n }\n \n func main() {\n for {\n err := loop_kafka()\n logrus.WithError(err).Println()\n fmt.Println("Loop exited")\n time.Sleep(2 * time.Second)\n }\n }\n   \n\ngo.mod: |\n module main\n \n go 1.18\n \n require (\n github.com/Shopify/sarama v1.36.0\n github.com/sirupsen/logrus v1.9.0\n )\n \n require (\n github.com/davecgh/go-spew v1.1.1 // indirect\n github.com/eapache/go-resiliency v1.3.0 // indirect\n github.com/eapache/go-xerial-snappy v0.0.0-20180814174437-776d5712da21 // indirect\n github.com/eapache/queue v1.1.0 // indirect\n github.com/golang/snappy v0.0.4 // indirect\n github.com/hashicorp/errwrap v1.0.0 // indirect\n github.com/hashicorp/go-multierror v1.1.1 // indirect\n github.com/hashicorp/go-uuid v1.0.3 // indirect\n github.com/jcmturner/aescts/v2 v2.0.0 // indirect\n github.com/jcmturner/dnsutils/v2 v2.0.0 // indirect\n github.com/jcmturner/gofork v1.7.6 // indirect\n github.com/jcmturner/gokrb5/v8 v8.4.3 // indirect\n github.com/jcmturner/rpc/v2 v2.0.3 // indirect\n github.com/klauspost/compress v1.15.9 // indirect\n github.com/pierrec/lz4/v4 v4.1.15 // indirect\n github.com/rcrowley/go-metrics v0.0.0-20201227073835-cf1acfcdf475 // indirect\n golang.org/x/crypto v0.0.0-20220722155217-630584e8d5aa // indirect\n golang.org/x/net v0.0.0-20220809184613-07c6da5e1ced // indirect\n golang.org/x/sys v0.0.0-20220728004956-3c1f35247d10 // indirect\n )\n\n'))),(0,r.kt)(l.Z,{value:"client.js",label:"client.js",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\nconst https = require('https');\n\nconst options = {\n hostname: 'server.otterize-tutorial-mtls',\n port: 443,\n path: '/hello',\n method: 'GET',\n cert: fs.readFileSync('/var/otterize/credentials/svid.pem'),\n key: fs.readFileSync('/var/otterize/credentials/key.pem'),\n ca: fs.readFileSync('/var/otterize/credentials/bundle.pem')\n}\n\nconst req = https.request(\n options,\n res => {\n     res.on('data', function (data) {\n         console.log(data.toString())\n     });\n }\n);\n\nreq.end();\n"))),(0,r.kt)(l.Z,{value:"server.js",label:"server.js",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const https = require(`https`);\nconst fs = require(`fs`);\n\nconst options = {\n key: fs.readFileSync('/var/otterize/credentials/key.pem'),\n cert: fs.readFileSync('/var/otterize/credentials/svid.pem'),\n ca: fs.readFileSync('/var/otterize/credentials/bundle.pem'),\n requestCert: true\n};\n\nhttps.createServer(options, (req, res) => {\n console.log(req.method + \" \" + req.url);\n if (req.url === '/hello') {\n     res.writeHead(200);\n     res.end(`Hello world mTLS`);\n } else {\n     res.end();\n }\n}).listen(443);\n"))))),(0,r.kt)("p",null,"To generate credentials for the pod we simply need to update the deployment by annotating it.\nThe required steps are to"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Annotate the pod - Otterize automatically identifies the ",(0,r.kt)("inlineCode",{parentName:"li"},"otterize/credentials-secret-name")," annotation, generates\nmTLS credentials, and stores them as K8s secret named as the annotation value."),(0,r.kt)("li",{parentName:"ol"},"Mount the credentials stored as a K8s secret as a volume"),(0,r.kt)("li",{parentName:"ol"},"Mount the volume into the container")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see a detailed explanation for the annotations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  template:\n    metadata:\n      ...\n      annotations:\n        # highlight-next-line\n        otterize/credentials-secret-name: client-credentials-secret       # 1 Generate credentials\n    spec:\n      volumes:\n        # highlight-start\n        - name: otterize-credentials\n          secret:\n            secretName: client-credentials-secret                         # 2 Mount credentials as a volume\n            # highlight-end\n      containers:\n        - name: client\n        ...\n        volumeMounts:\n          # highlight-start\n          - name: otterize-credentials\n            mountPath: /var/otterize/credentials                          # 3 Mount volume into container\n            readOnly: true\n            # highlight-end\n"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy the ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://docs.otterize.com/code-examples/mtls/all.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check that the ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," and server ",(0,r.kt)("inlineCode",{parentName:"p"},"pods")," were deployed"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-mtls\n")),(0,r.kt)("p",{parentName:"li"},"You should see"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"NAME                      READY   STATUS    RESTARTS   AGE\nclient-5689997b5c-grlnt   1/1     Running   0          35s\nserver-6698c58cbc-v9n9b   1/1     Running   0          34s\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm that the client can successfully call the server using HTTP over mTLS. The server will reply to the client\nwith it's ",(0,r.kt)("inlineCode",{parentName:"p"},"own")," certificate's ",(0,r.kt)("inlineCode",{parentName:"p"},"common name")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"client"),"'s certificate ",(0,r.kt)("inlineCode",{parentName:"p"},"common name"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs --tail 3 -n otterize-tutorial-mtls deploy/client\n")),(0,r.kt)("p",{parentName:"li"},"You should see the following line"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mTLS hello world\nfrom: server.otterize-tutorial-mtls          # server's common name in the certificate\nto client: client.otterize-tutorial-mtls     # client's common name in the certificate\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can also follow the server's output log with"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs --tail 1 -n otterize-tutorial-mtls deploy/server\n")),(0,r.kt)("p",{parentName:"li"},"You should see the following line"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"client.otterize-tutorial-mtls:  GET /hello\n")))),(0,r.kt)("h2",{id:"inspect-credentials"},"Inspect credentials"),(0,r.kt)("p",null,"We can use openssl to inspect the generated certificates. The certificates are stored as ",(0,r.kt)("inlineCode",{parentName:"p"},"K8s secrets")," and are also\n",(0,r.kt)("inlineCode",{parentName:"p"},"mounted")," into containers."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We will first retrieve them from one of the two options"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"secret-direct",label:"K8s secret",default:!0,mdxType:"TabItem"},"To retrieve the credentials from the K8s secrets store use:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get secret -n otterize-tutorial-mtls client-credentials-secret -o jsonpath='{.data.svid\\.pem}' | base64 -d > svid.pem\n"))),(0,r.kt)(l.Z,{value:"secret-pod",label:"K8s pod mount",default:!0,mdxType:"TabItem"},"To retrieve the credentials from the container mount use:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -n otterize-tutorial-mtls -it deploy/client -- cat /var/otterize/credentials/svid.pem > svid.pem\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"And then inspect them with"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"openssl x509 -in svid.pem -text | head -n 15\n")),(0,r.kt)("p",{parentName:"li"},"You should see a similar output to"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-x509"},"Certificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number:\n            0b:eb:eb:4d:0e:02:7e:28:93:30:1c:55:26:22:8b:c7\n        Signature Algorithm: sha256WithRSAEncryption\n        Issuer: C = US, O = SPIRE\n        Validity\n            Not Before: Aug 24 12:19:57 2022 GMT\n            Not After : Sep 23 12:20:07 2022 GMT\n# highlight-next-line\n        Subject: C = US, O = SPIRE, CN = client.otterize-tutorial-mtls       # the client's name\n        Subject Public Key Info:\n            Public Key Algorithm: id-ecPublicKey\n                Public-Key: (256 bit)\n                pub:\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can see that Otterize generated an x509 certificate using the pod's name ","[",(0,r.kt)("em",{parentName:"p"},"client"),"]"," and namespace ","[",(0,r.kt)("em",{parentName:"p"},"\notterize-tutorial-mtls"),"]",".\nThe certificate belongs to a chain of trust starting at the SPIRE server."))),(0,r.kt)("h2",{id:"what-happened-behind-the-scenes"},"What happened behind the scenes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We annotated the pods to let Otterize know it should generate mTLS credentials."),(0,r.kt)("li",{parentName:"ol"},"The Otterize SPIRE integration operator",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Created an entries for the annotated pods with the SPIRE server."),(0,r.kt)("li",{parentName:"ol"},"Generated matching mTLS credentials using the SPIRE server."),(0,r.kt)("li",{parentName:"ol"},"Stored the mTLS credentials into a K8s secrets."))),(0,r.kt)("li",{parentName:"ol"},"The secrets were mounted (separately) into each pod's container."),(0,r.kt)("li",{parentName:"ol"},"The pods communicated with each other using HTTP of mutual TLS.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Otterize defaults to generating credentials with an expiry time of 1 day. The certificates are\nautomatically refreshed before expiring. For a custom expiry\ntime you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"spire-integration.otterize.com/cert-ttl")," annotation for your pods. Read more at ",(0,r.kt)("a",{parentName:"p",href:"/documentation/components/behavior"},"Behavior"))),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read about how to ",(0,r.kt)("a",{parentName:"li",href:"/documentation/sdk-integration/credential-sdk-integration"},"integrate")," mTLS into common SDKs and\nframeworks."),(0,r.kt)("li",{parentName:"ul"},"Enforce ",(0,r.kt)("a",{parentName:"li",href:"/documentation/quick-tutorials/kafka-mtls"},"secure Kafka access")," with mTLS.")),(0,r.kt)("h2",{id:"teardown"},"Teardown"),(0,r.kt)("p",null,"To remove the deployed resources run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -f https://docs.otterize.com/code-examples/mtls/all.yaml\n")))}d.isMDXComponent=!0}}]);