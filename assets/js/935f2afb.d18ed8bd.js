"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docSidebar":[{"type":"link","label":"Getting started","href":"/","docId":"getting-started/README"},{"type":"category","label":"Quick tutorials","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Automate network policies","href":"/quick-tutorials/k8s-network-policies","docId":"quick-tutorials/k8s-network-policies"},{"type":"link","label":"Map your cluster","href":"/quick-tutorials/k8s-network-mapper","docId":"quick-tutorials/k8s-network-mapper"},{"type":"link","label":"Automate secure Kafka access","href":"/quick-tutorials/kafka-mtls","docId":"quick-tutorials/kafka-mtls"},{"type":"link","label":"Deploy mTLS between pods","href":"/quick-tutorials/k8s-mtls","docId":"quick-tutorials/k8s-mtls"}],"href":"/quick-tutorials/"},{"type":"link","label":"Installing Otterize in Kubernetes","href":"/k8s-installation/","docId":"k8s-installation/README"},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"IBAC in Kubernetes via network policies","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Deeper dive into network policies","href":"/guides/k8s-ibac-via-network-policies/deeper-dive","docId":"guides/k8s-ibac-via-network-policies/deeper-dive"}],"href":"/guides/k8s-ibac-via-network-policies/"},{"type":"category","label":"IBAC for Kafka in Kubernetes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Credentials","href":"/guides/ibac-for-k8s-kafka/credentials","docId":"guides/ibac-for-k8s-kafka/credentials"}],"href":"/guides/ibac-for-k8s-kafka/"},{"type":"link","label":"Mapping pod-to-pod calls in Kubernetes","href":"/guides/k8s-mapping-pod-to-pod-calls/","docId":"guides/k8s-mapping-pod-to-pod-calls/k8s-mapping-pod-to-pod-calls"},{"type":"link","label":"Kubernetes mTLS with Otterize","href":"/guides/k8s-mtls/","docId":"guides/k8s-mtls/README"}],"href":"/guides/"},{"type":"link","label":"Terminology","href":"/terminology/","docId":"terminology/README"},{"type":"link","label":"IBAC: Intent-based access control","href":"/intent-based-access-control/","docId":"intent-based-access-control/README"},{"type":"link","label":"Intents and intents files","href":"/intents-and-intents-files/","docId":"intents-and-intents-files/README"},{"type":"category","label":"Service identities","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Using credentials","href":"/service-identities/using-credentials/","docId":"service-identities/using-credentials/README"}],"href":"/service-identities/"},{"type":"link","label":"CLI command reference","href":"/cli/","docId":"cli/README"},{"type":"category","label":"components","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Otterize OSS Helm chart","href":"/components/otterize-chart/","docId":"components/otterize-chart/README"},{"type":"category","label":"Intents operator","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Helm chart","href":"/components/intents-operator/helm-chart","docId":"components/intents-operator/helm-chart"},{"type":"link","label":"Configuring Kafka brokers","href":"/components/intents-operator/configuration","docId":"components/intents-operator/configuration"}],"href":"/components/intents-operator/"},{"type":"category","label":"SPIRE integration operator","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Helm chart","href":"/components/spire-integration-operator/helm-chart","docId":"components/spire-integration-operator/helm-chart"}],"href":"/components/spire-integration-operator/"},{"type":"category","label":"Network mapper","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Helm chart","href":"/components/network-mapper/helm-chart","docId":"components/network-mapper/helm-chart"}],"href":"/components/network-mapper/"}]},{"type":"link","label":"FAQ","href":"/faq/","docId":"faq/README"},{"type":"link","label":"Troubleshooting","href":"/troubleshooting/","docId":"troubleshooting/README"}]},"docs":{"cli/README":{"id":"cli/README","title":"CLI command reference","description":"The following are the commands offered by the Otterize command line interface (CLI).","sidebar":"docSidebar"},"components/intents-operator/configuration":{"id":"components/intents-operator/configuration","title":"Configuring Kafka brokers","description":"The intents operator is able to create network policies with zero configuration. But in order to apply Kafka ACLs to a Kafka broker, the operator must know how to connect.","sidebar":"docSidebar"},"components/intents-operator/helm-chart":{"id":"components/intents-operator/helm-chart","title":"Helm chart","description":"You can use the operator\'s Helm chart to deploy the intents Ooerator on its own, and configure it to work with a SPIRE integration operator to acquire mTLS credentials.","sidebar":"docSidebar"},"components/intents-operator/README":{"id":"components/intents-operator/README","title":"Intents operator","description":"The Otterize intents operator is an open source Kubernetes operator for easily managing service-to-service authorization","sidebar":"docSidebar"},"components/network-mapper/helm-chart":{"id":"components/network-mapper/helm-chart","title":"Helm chart","description":"To deploy the network mapper, do the following:","sidebar":"docSidebar"},"components/network-mapper/README":{"id":"components/network-mapper/README","title":"Network mapper","description":"The Otterize network mapper creates a map of in-cluster traffic by (1) capturing DNS traffic and (2) inspecting active connections in the same manner netstat does, then resolving the IP addresses participating in connections to the Pods, and crawling up the ownership of the Pod until it reaches the root object. See Service identities to learn more on how service name resolving happens.","sidebar":"docSidebar"},"components/otterize-chart/README":{"id":"components/otterize-chart/README","title":"Otterize OSS Helm chart","description":"The Otterize OSS helm chart is a chart that installs all Otterize components and supporting components together, and configures them to work with each other.","sidebar":"docSidebar"},"components/spire-integration-operator/helm-chart":{"id":"components/spire-integration-operator/helm-chart","title":"Helm chart","description":"You can use the operator\'s Helm chart to deploy the SPIRE integration operator on its own, and configure a SPIRE server for it to work with according to the parameters value.","sidebar":"docSidebar"},"components/spire-integration-operator/README":{"id":"components/spire-integration-operator/README","title":"SPIRE integration operator","description":"The Otterize SPIRE Integration Operator automatically resolves pods to dev-friendly service names, registers them with a SPIRE server, and optionally provisions credentials as a Kubernetes Secrets.","sidebar":"docSidebar"},"faq/README":{"id":"faq/README","title":"FAQ","description":"This section will be filled out soon, once we have a better grasp of what questions","sidebar":"docSidebar"},"getting-started/README":{"id":"getting-started/README","title":"Getting started","description":"Otterize OSS","sidebar":"docSidebar"},"guides/ibac-for-k8s-kafka/credentials":{"id":"guides/ibac-for-k8s-kafka/credentials","title":"Credentials","description":"The following examples reference the Kafka and client deployed in the tutorial.","sidebar":"docSidebar"},"guides/ibac-for-k8s-kafka/README":{"id":"guides/ibac-for-k8s-kafka/README","title":"Intent-based access control for Kafka in Kubernetes","description":"We can realize intent-based access control in Kubernetes by leveraging the built-in capabilities","sidebar":"docSidebar"},"guides/k8s-ibac-via-network-policies/deeper-dive":{"id":"guides/k8s-ibac-via-network-policies/deeper-dive","title":"Deeper dive into network policies","description":"Network policies are one of the tools we","sidebar":"docSidebar"},"guides/k8s-ibac-via-network-policies/README":{"id":"guides/k8s-ibac-via-network-policies/README","title":"IBAC in Kubernetes via network policies","description":"One of the easiest ways to realize intent-based access control in Kubernetes is by leveraging network policies.","sidebar":"docSidebar"},"guides/k8s-mapping-pod-to-pod-calls/k8s-mapping-pod-to-pod-calls":{"id":"guides/k8s-mapping-pod-to-pod-calls/k8s-mapping-pod-to-pod-calls","title":"Mapping pod-to-pod calls in Kubernetes","description":"The network mapper allows you to map pod-to-pod traffic within your K8s cluster. This tutorial will guide you","sidebar":"docSidebar"},"guides/k8s-mtls/README":{"id":"guides/k8s-mtls/README","title":"Kubernetes mTLS with Otterize","description":"Otterize can automatically provision mTLS credentials by baking exiting K8s workload identities into certificates.","sidebar":"docSidebar"},"guides/README":{"id":"guides/README","title":"Guides","description":"These guides take you through installing and using Otterize.","sidebar":"docSidebar"},"intent-based-access-control/README":{"id":"intent-based-access-control/README","title":"IBAC: Intent-based access control","description":"At Otterize, we believe service-to-service access control should become not only easy but actually transparent to service developers. We believe that access should not only be self-serve \u2014 that it should happen without needing to go through any extra steps beyond what developers are already doing. And we believe that access control enforcement should be completely decoupled from the functional development of the software: that as the organization improves its security and compliance posture, developers should not need to revisit their working code.","sidebar":"docSidebar"},"intents-and-intents-files/README":{"id":"intents-and-intents-files/README","title":"Intents and intents files","description":"Intent-based access control is, not surprisingly, centered around declaring intents &mdash; specifically, declaring client intents","sidebar":"docSidebar"},"k8s-installation/README":{"id":"k8s-installation/README","title":"Installing Otterize in Kubernetes","description":"Make sure you have a cluster that supports network policies","sidebar":"docSidebar"},"quick-tutorials/k8s-mtls":{"id":"quick-tutorials/k8s-mtls","title":"Deploy mTLS between pods","description":"This tutorial will walk you through deploying mTLS certificates on a sample client-server deployment.","sidebar":"docSidebar"},"quick-tutorials/k8s-network-mapper":{"id":"quick-tutorials/k8s-network-mapper","title":"Map your cluster","description":"The network mapper allows you to map pod-to-pod traffic within your K8s cluster. This tutorial will guide you","sidebar":"docSidebar"},"quick-tutorials/k8s-network-policies":{"id":"quick-tutorials/k8s-network-policies","title":"Automate network policies","description":"Otterize automates network policies within your cluster by abstracting away","sidebar":"docSidebar"},"quick-tutorials/kafka-mtls":{"id":"quick-tutorials/kafka-mtls","title":"Automate secure Kafka access","description":"This tutorial will walk you through declaring and applying intents to easily secure access to Kafka,","sidebar":"docSidebar"},"quick-tutorials/README":{"id":"quick-tutorials/README","title":"Quick tutorials","description":"Get to know Otterize in 5 minutes with these quick tutorials.","sidebar":"docSidebar"},"service-identities/README":{"id":"service-identities/README","title":"Service identities","description":"All about service names, identities, labels, and credentials","sidebar":"docSidebar"},"service-identities/using-credentials/README":{"id":"service-identities/using-credentials/README","title":"Using credentials","description":"Using mTLS credentials","sidebar":"docSidebar"},"terminology/README":{"id":"terminology/README","title":"Terminology","description":"An overview of the terminology used in Otterize OSS documentation.","sidebar":"docSidebar"},"troubleshooting/README":{"id":"troubleshooting/README","title":"Troubleshooting","description":"This section will be filled out soon, once we have a better notion of what issues people are likely to encounter.","sidebar":"docSidebar"}}}')}}]);