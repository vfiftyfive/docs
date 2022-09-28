"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(h,l(l({ref:t},m),{},{components:n})):r.createElement(h,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),c=n(2466);const m="tabList__CuJ",u="tabItem_LNqP";function p(e){var t,n;const{lazy:l,block:p,defaultValue:d,values:h,groupId:f,className:g}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,o.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===d?d:null!=(t=null!=d?d:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:T}=(0,s.U)(),[C,w]=(0,a.useState)(b),S=[],{blockElementScrollPositionUntilNextRender:z}=(0,c.o5)();if(null!=f){const e=N[f];null!=e&&e!==C&&v.some((t=>t.value===e))&&w(e)}const P=e=>{const t=e.currentTarget,n=S.indexOf(t),r=v[n].value;r!==C&&(z(t),w(r),null!=f&&T(f,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=S.indexOf(e.currentTarget)+1;n=null!=(r=S[t])?r:S[0];break}case"ArrowLeft":{var a;const t=S.indexOf(e.currentTarget)-1;n=null!=(a=S[t])?a:S[S.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},g)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>S.push(e),onKeyDown:E,onFocus:P,onClick:P},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(k.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function d(e){const t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},5958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),i=n(5488),l=n(5162);const o={sidebar_position:5,title:"Kubernetes mTLS with Otterize"},s=void 0,c={unversionedId:"guides/k8s-mtls/README",id:"guides/k8s-mtls/README",title:"Kubernetes mTLS with Otterize",description:"Otterize can automatically provision mTLS credentials by baking exiting K8s workload identities into certificates.",source:"@site/docs/3-guides/5-k8s-mtls/README.mdx",sourceDirName:"3-guides/5-k8s-mtls",slug:"/guides/k8s-mtls/",permalink:"/guides/k8s-mtls/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/3-guides/5-k8s-mtls/README.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Kubernetes mTLS with Otterize"},sidebar:"docSidebar",previous:{title:"Mapping pod-to-pod calls in Kubernetes",permalink:"/guides/k8s-mapping-pod-to-pod-calls/"},next:{title:"Terminology",permalink:"/terminology/"}},m={},u=[{value:"Install Otterize",id:"install-otterize",level:2},{value:"Choose a Kubernetes cluster and services",id:"choose-a-kubernetes-cluster-and-services",level:2},{value:"Deploy demo",id:"deploy-demo",level:3},{value:"Annotate deployment",id:"annotate-deployment",level:2},{value:"Annotation parameters",id:"annotation-parameters",level:3},{value:"Global parameters",id:"global-parameters",level:4},{value:"Parameters for pem-type certs",id:"parameters-for-pem-type-certs",level:4},{value:"Parameters for jks-type certs",id:"parameters-for-jks-type-certs",level:4},{value:"Verify generated credentials",id:"verify-generated-credentials",level:2},{value:"Inspect credentials",id:"inspect-credentials",level:3},{value:"Optional - verify demo setup",id:"optional---verify-demo-setup",level:3},{value:"What happened behind the scenes",id:"what-happened-behind-the-scenes",level:4},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Otterize can automatically provision mTLS credentials by baking exiting K8s workload identities into certificates."),(0,a.kt)("h2",{id:"install-otterize"},"Install Otterize"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can skip this section if Otterize is already installed in your cluster.")),(0,a.kt)("p",null,"Use Helm to install the latest version of Otterize:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm install otterize otterize/otterize-kubernetes -n otterize-system --create-namespace --wait\n")),(0,a.kt)("p",null,"This chart is a bundle of the Otterize intents operator, SPIRE integration operator, and SPIRE.\nInitial deployment may take a couple of minutes.\nYou can remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"--wait")," flag if you don't want Helm to wait for all pods to be ready, and instead manually watch for all pods to be ",(0,a.kt)("inlineCode",{parentName:"p"},"Ready")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system -w"),"."),(0,a.kt)("h2",{id:"choose-a-kubernetes-cluster-and-services"},"Choose a Kubernetes cluster and services"),(0,a.kt)("p",null,"You can use this guide with your own set of services, e.g. first in a Kubernetes cluster running dev or lab services,\nand eventually in a staging or production cluster. You'll need admin access."),(0,a.kt)("p",null,"Alternatively, you can deploy our demo setup as follows. You'll deploy these into any Kubernetes cluster to which you have admin access."),(0,a.kt)("h3",{id:"deploy-demo"},"Deploy demo"),(0,a.kt)("p",null,"Our example consists of two pods: client and server communicating over HTTPS using credentials\nprovisioned by Otterize."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see the example YAML files"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"namespace.yaml",label:"namespace.yaml",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: otterize-tutorial-kafka-mtls\n"))),(0,a.kt)(l.Z,{value:"client-deployment.yaml",label:"client-deployment.yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: myclient\n  namespace: otterize-tutorial-kafka-mtls\nspec:\n  selector:\n    matchLabels:\n      app: myclient\n  template:\n    metadata:\n      labels:\n        app: myclient\n      annotations:\n        spire-integration.otterize.com/tls-secret-name: myclient-credentials-secret\n    spec:\n      containers:\n        - name: myclient\n          image: golang\n          command: [ "/bin/sh", "-c", "--" ]\n          args: [ "while true; do cd /app; cp src/* .; go get main; go run .; sleep infinity; done" ]\n          volumeMounts:\n            - name: ephemeral\n              mountPath: /app\n            - mountPath: /app/src\n              name: myclient-go\n            - name: otterize-credentials\n              mountPath: /var/otterize/credentials\n              readOnly: true\n      volumes:\n        - name: myclient-go\n          configMap:\n            name: myclient-go\n        - name: otterize-credentials\n          secret:\n            secretName: myclient-credentials-secret\n        - name: ephemeral\n          emptyDir: { }\n'))),(0,a.kt)(l.Z,{value:"client-configmap.yaml",label:"client-configmap.yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: myclient-go\n  namespace: otterize-tutorial-kafka-mtls\ndata:\n  myclient.go: |\n    package main\n    \n    import (\n    "crypto/tls"\n    "crypto/x509"\n    "fmt"\n    "github.com/Shopify/sarama"\n    "github.com/sirupsen/logrus"\n    "io/ioutil"\n    "time"\n    )\n    \n    const (\n    kafkaAddr     = "kafka.kafka:9092"\n    testTopicName = "mytopic"\n    certFile      = "/var/otterize/credentials/svid.pem"\n    keyFile       = "/var/otterize/credentials/key.pem"\n    rootCAFile    = "/var/otterize/credentials/bundle.pem"\n    )\n    \n    func getTLSConfig() (*tls.Config, error) {\n    cert, err := tls.LoadX509KeyPair(certFile, keyFile)\n    if err != nil {\n    return nil, fmt.Errorf("failed loading x509 key pair: %w", err)\n    }\n    \n    pool := x509.NewCertPool()\n    rootCAPEM, err := ioutil.ReadFile(rootCAFile)\n    if err != nil {\n    return nil, fmt.Errorf("failed loading root CA PEM file: %w ", err)\n    }\n    pool.AppendCertsFromPEM(rootCAPEM)\n    \n    return &tls.Config{\n    Certificates: []tls.Certificate{cert},\n    RootCAs:      pool,\n    }, nil\n    }\n    \n    func loop_kafka() error {\n    addrs := []string{kafkaAddr}\n    \n    config := sarama.NewConfig()\n    fmt.Println("Loading mTLS certificates")\n    config.Net.TLS.Enable = true\n    tlsConfig, err := getTLSConfig()\n    if err != nil {\n    return err\n    }\n    config.Net.TLS.Config = tlsConfig\n    fmt.Println("Connecting to Kafka")\n    config.Net.DialTimeout = 5 * time.Second\n    config.Net.ReadTimeout = 5 * time.Second\n    config.Net.WriteTimeout = 5 * time.Second\n    client, err := sarama.NewClient(addrs, config)\n    if err != nil {\n    return err\n    }\n    fmt.Println("Creating a producer and a consumer for -", testTopicName)\n    config.Producer.Return.Successes = true\n    config.Producer.Timeout = 5 * time.Second\n    config.Consumer.MaxWaitTime = 5 * time.Second\n    config.Producer.Return.Errors = true\n    config.Consumer.Return.Errors = true\n    producer, err := sarama.NewSyncProducerFromClient(client)\n    if err != nil {\n    return err\n    }\n    \n    consumer, err := sarama.NewConsumerFromClient(client)\n    if err != nil {\n    return err\n    }\n    fmt.Println("Sending messages")\n    for i := 1; i <= 5; i++ {\n    msg := fmt.Sprintf("Message %d", i)\n    _, _, err = producer.SendMessage(&sarama.ProducerMessage{\n    Topic:     testTopicName,\n    Partition: -1,\n    Value:     sarama.StringEncoder(msg),\n    })\n    if err != nil {\n    return err\n    }\n    fmt.Printf("Sent message - %s\\n", msg)\n    time.Sleep(1 * time.Second)\n    }\n    \n    partConsumer, err := consumer.ConsumePartition(testTopicName, 0, 0)\n    if err != nil {\n    return err\n    }\n    \n    for msg := range partConsumer.Messages() {\n    fmt.Printf("Read message - %s\\n", msg.Value)\n    }\n    return nil\n    }\n    \n    func main() {\n    for {\n    err := loop_kafka()\n    logrus.WithError(err).Println()\n    fmt.Println("Loop exited")\n    time.Sleep(2 * time.Second)\n    }\n    }\n      \n\n  go.mod: |\n    module main\n    \n    go 1.18\n    \n    require (\n    github.com/Shopify/sarama v1.36.0\n    github.com/sirupsen/logrus v1.9.0\n    )\n    \n    require (\n    github.com/davecgh/go-spew v1.1.1 // indirect\n    github.com/eapache/go-resiliency v1.3.0 // indirect\n    github.com/eapache/go-xerial-snappy v0.0.0-20180814174437-776d5712da21 // indirect\n    github.com/eapache/queue v1.1.0 // indirect\n    github.com/golang/snappy v0.0.4 // indirect\n    github.com/hashicorp/errwrap v1.0.0 // indirect\n    github.com/hashicorp/go-multierror v1.1.1 // indirect\n    github.com/hashicorp/go-uuid v1.0.3 // indirect\n    github.com/jcmturner/aescts/v2 v2.0.0 // indirect\n    github.com/jcmturner/dnsutils/v2 v2.0.0 // indirect\n    github.com/jcmturner/gofork v1.7.6 // indirect\n    github.com/jcmturner/gokrb5/v8 v8.4.3 // indirect\n    github.com/jcmturner/rpc/v2 v2.0.3 // indirect\n    github.com/klauspost/compress v1.15.9 // indirect\n    github.com/pierrec/lz4/v4 v4.1.15 // indirect\n    github.com/rcrowley/go-metrics v0.0.0-20201227073835-cf1acfcdf475 // indirect\n    golang.org/x/crypto v0.0.0-20220722155217-630584e8d5aa // indirect\n    golang.org/x/net v0.0.0-20220809184613-07c6da5e1ced // indirect\n    golang.org/x/sys v0.0.0-20220728004956-3c1f35247d10 // indirect\n    )\n\n'))),(0,a.kt)(l.Z,{value:"client.js",label:"client.js",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\nconst https = require('https');\n\nconst options = {\n    hostname: 'server.otterize-tutorial-mtls',\n    port: 443,\n    path: '/hello',\n    method: 'GET',\n    cert: fs.readFileSync('/var/otterize/credentials/svid.pem'),\n    key: fs.readFileSync('/var/otterize/credentials/key.pem'),\n    ca: fs.readFileSync('/var/otterize/credentials/bundle.pem')\n}\n\nconst req = https.request(\n    options,\n    res => {\n        res.on('data', function (data) {\n            console.log(data.toString())\n        });\n    }\n);\n\nreq.end();\n"))),(0,a.kt)(l.Z,{value:"server.js",label:"server.js",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const https = require(`https`);\nconst fs = require(`fs`);\n\nconst options = {\n  key: fs.readFileSync('/var/otterize/credentials/key.pem'),\n  cert: fs.readFileSync('/var/otterize/credentials/svid.pem'),\n  ca: fs.readFileSync('/var/otterize/credentials/bundle.pem'),\n  requestCert: true\n};\n\nhttps.createServer(\n    options,\n    (req, res) => {\n        const peerCert = req.connection.getPeerCertificate();\n        const ownCert = req.connection.getCertificate();\n        console.log(\"Received request:\");\n        console.log(peerCert.subject.CN + \":\\t\" + req.method + \" \" + req.url);\n        if (req.url === '/hello') {\n            res.writeHead(200);\n            res.end('mTLS hello world\\nfrom: ' + ownCert.subject.CN + '\\nto client: ' + peerCert.subject.CN);\n        } else {\n            res.end();\n        }\n    }).listen(443);\n"))))),(0,a.kt)("p",null,"Deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://docs.otterize.com/code-examples/mtls/all.yaml\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Optional: check deployment status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-mtls\n")),(0,a.kt)("p",null,"You should see"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                      READY   STATUS    RESTARTS   AGE\nclient-5689997b5c-grlnt   1/1     Running   0          35s\nserver-6698c58cbc-v9n9b   1/1     Running   0          34s\n"))),(0,a.kt)("h2",{id:"annotate-deployment"},"Annotate deployment"),(0,a.kt)("p",null,"To generate credentials for the pod we simply need to update the deployment by annotating it.\nThe required steps are to"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Annotate the pod - Otterize automatically identifies the ",(0,a.kt)("inlineCode",{parentName:"li"},"otterize/credentials-secret-name")," annotation, generates\nmTLS credentials, and stores them as K8s secret named as the annotation value."),(0,a.kt)("li",{parentName:"ol"},"Mount the credentials stored as a K8s secret as a volume"),(0,a.kt)("li",{parentName:"ol"},"Mount the volume into the container")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see a detailed explanation for the annotations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  template:\n    metadata:\n      ...\n      annotations:\n        # highlight-next-line\n        otterize/credentials-secret-name: client-credentials-secret       # 1 Generate credentials\n    spec:\n      volumes:\n        # highlight-start\n        - name: otterize-credentials\n          secret:\n            secretName: client-credentials-secret                         # 2 Mount credentials as a volume\n            # highlight-end\n      containers:\n        - name: client\n        ...\n        volumeMounts:\n          # highlight-start\n          - name: otterize-credentials\n            mountPath: /var/otterize/credentials                          # 3 Mount volume into container\n            readOnly: true\n            # highlight-end\n"))),(0,a.kt)("p",null,"The provided demo pods were already configured and annotated as required."),(0,a.kt)("h3",{id:"annotation-parameters"},"Annotation parameters"),(0,a.kt)("p",null,"The following annotations control different aspects of the credential generation:"),(0,a.kt)("h4",{id:"global-parameters"},"Global parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spire-integration.otterize.com/tls-secret-name"),"  - The name of the k8s secret in which the certificate data is stored"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spire-integration.otterize.com/dns-names")," - A comma-separated list of additional dns names to be registered as part of the"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spire-integration.otterize.com/cert-ttl")," - The certificate TTL. Defaults to SPIRE-server's configured default TTL",(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Otterize defaults to generating credentials with an expiry time of 1 day. The certificates are\nautomatically refreshed before expiring, and you must take care to always read the credentials from file, rather than caching them for this reason.")))),(0,a.kt)("p",null,"To set a longer expiration time, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"spire-integration.otterize.com/cert-ttl")," annotation for your pods. For more information, see the documentation for the ",(0,a.kt)("a",{parentName:"p",href:"/components/spire-integration-operator"},"SPIRE Integration Operator"),"\n:::"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spire-integration.otterize.com/cert-type")," - The requested certificate type - pem (default) or jks")),(0,a.kt)("h4",{id:"parameters-for-pem-type-certs"},"Parameters for pem-type certs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spire-integration.otterize.com/svid-file-name")," - The name of the file in the secret data, that stores the certificate's SVID file. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"svid.pem")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spire-integration.otterize.com/bundle-file-name")," - The name of the file in the secret data, that stores the certificate's bundle file. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"bundle.pem"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spire-integration.otterize.com/key-file-name")," - The name of the file in the secret data, that stores the certificate's key file. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"key.pem"),".")),(0,a.kt)("h4",{id:"parameters-for-jks-type-certs"},"Parameters for jks-type certs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spire-integration.otterize.com/keystore-file-name")," - The name of the file in the secret data, that stores the certificate's key store file. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"keystore.jks"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spire-integration.otterize.com/truststore-file-name")," - The name of the file in the secret data, that stores the certificate's trust store file. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"truststore.jks"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spire-integration.otterize.com/jks-password")," - The jks certificate password. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"password"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Certificates are automatically refreshed before expiring. We recommend loading certificates each time before using them where possible.")),(0,a.kt)("h2",{id:"verify-generated-credentials"},"Verify generated credentials"),(0,a.kt)("h3",{id:"inspect-credentials"},"Inspect credentials"),(0,a.kt)("p",null,"We can use openssl to inspect the generated certificates. The certificates are stored as ",(0,a.kt)("inlineCode",{parentName:"p"},"K8s secrets")," and are also\n",(0,a.kt)("inlineCode",{parentName:"p"},"mounted")," into containers."),(0,a.kt)("p",null,"We will first retrieve them with one of the following options"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"secret-direct",label:"K8s secret",default:!0,mdxType:"TabItem"},"To retrieve the credentials from the K8s secrets store use:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get secret -n otterize-tutorial-mtls client-credentials-secret -o jsonpath='{.data.svid\\.pem}' | base64 -d > svid.pem\n"))),(0,a.kt)(l.Z,{value:"secret-pod",label:"K8s pod mount",default:!0,mdxType:"TabItem"},"To retrieve the credentials from the container mount use:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -n otterize-tutorial-mtls -it deploy/client -- cat /var/otterize/credentials/svid.pem > svid.pem\n")))),(0,a.kt)("p",null,"And then inspect them with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"openssl x509 -in svid.pem -text | head -n 15\n")),(0,a.kt)("p",null,"   You should see a similar output to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-x509"},"Certificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number:\n            0b:eb:eb:4d:0e:02:7e:28:93:30:1c:55:26:22:8b:c7\n        Signature Algorithm: sha256WithRSAEncryption\n        Issuer: C = US, O = SPIRE\n        Validity\n            Not Before: Aug 24 12:19:57 2022 GMT\n            Not After : Sep 23 12:20:07 2022 GMT\n# highlight-next-line\n        Subject: C = US, O = SPIRE, CN = client.otterize-tutorial-mtls       # the client's name\n        Subject Public Key Info:\n            Public Key Algorithm: id-ecPublicKey\n                Public-Key: (256 bit)\n                pub:\n")),(0,a.kt)("p",null,"You can see that Otterize generated an X.509 keypair using the pod's name ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," and namespace ",(0,a.kt)("inlineCode",{parentName:"p"},"otterize-tutorial-mtls"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"client.otterize-tutorial-mtls"),".\nThe certificate belongs to a chain of trust starting at the SPIRE server."),(0,a.kt)("h3",{id:"optional---verify-demo-setup"},"Optional - verify demo setup"),(0,a.kt)("p",null,"Confirm that the client can successfully call the server using HTTP over mTLS. The client makes requests, and the server replies\nwith the server's certificate's ",(0,a.kt)("inlineCode",{parentName:"p"},"common name")," as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"client"),"'s certificate ",(0,a.kt)("inlineCode",{parentName:"p"},"common name"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs --tail 3 -n otterize-tutorial-mtls deploy/client\n")),(0,a.kt)("p",null,"   You should see the following line"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mTLS hello world\nfrom: server.otterize-tutorial-mtls          # server's common name in the certificate\nto client: client.otterize-tutorial-mtls     # client's common name in the certificate\n")),(0,a.kt)("p",null,"You can also follow the server's output log with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs --tail 1 -n otterize-tutorial-mtls deploy/server\n")),(0,a.kt)("p",null,"   You should see the following line"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"client.otterize-tutorial-mtls:  GET /hello\n")),(0,a.kt)("h4",{id:"what-happened-behind-the-scenes"},"What happened behind the scenes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We annotated the pods to let Otterize know it should generate mTLS credentials."),(0,a.kt)("li",{parentName:"ol"},"The Otterize SPIRE integration operator",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Created an entries for the annotated pods with the SPIRE server."),(0,a.kt)("li",{parentName:"ol"},"Generated matching mTLS credentials using the SPIRE server."),(0,a.kt)("li",{parentName:"ol"},"Stored the mTLS credentials into a K8s secrets."))),(0,a.kt)("li",{parentName:"ol"},"The secrets were mounted (separately) into each pod's container."),(0,a.kt)("li",{parentName:"ol"},"The pods communicated with each other over HTTP using mutual TLS.")),(0,a.kt)("h2",{id:"whats-next"},"What's next"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Learn how to configure your existing code to use mTLS for ",(0,a.kt)("a",{parentName:"li",href:"/service-identities/using-credentials/#http"},"HTTPS"),"\n(clients and servers) and for ",(0,a.kt)("a",{parentName:"li",href:"/service-identities/using-credentials/#kafka"},"Kafka clients"),"."),(0,a.kt)("li",{parentName:"ul"},"Configure secure access between pods and Kafka with this ",(0,a.kt)("a",{parentName:"li",href:"/guides/ibac-for-k8s-kafka/"},"guide"),".")),(0,a.kt)("h2",{id:"teardown"},"Teardown"),(0,a.kt)("p",null,"To remove the deployed resources run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete namespace otterize-tutorial-mtls\n")))}d.isMDXComponent=!0}}]);