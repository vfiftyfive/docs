---
sidebar_position: 4
title: Credentials
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The following examples reference the Kafka and client deployed in the [tutorial](/documentation/quick-tutorials/kafka-mtls)

## Kafka credentials
### Inspecting Keystore

1. Retrieve the Keystore with
    ```bash
    kubectl get secret -n kafka kafka-tls-secret -o jsonpath='{.data.kafka-keystore\.jks}' | base64 -d > kafka-keystore.jks
    ```
2. Extract the certificate from the store
    ```bash
    keytool -storepass password -keystore kafka-keystore.jks -alias pkey -exportcert -rfc > server.pem
    ```
3. Inspect it with
    ```bash
    openssl x509 -in server.pem -text
    ```
   You should see
    ```
    Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            98:e3:4b:76:8d:de:4c:c6:7d:73:41:6a:33:ee:c3:44
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: C = US, O = SPIRE
        Validity
            Not Before: Sep 10 14:43:16 2022 GMT
            Not After : Sep 10 14:43:26 2023 GMT
        Subject: C = US, O = SPIRE, CN = kafka.kafka
        ... truncated
            X509v3 Subject Alternative Name:
                DNS:kafka.kafka, DNS:kafka-0.kafka-headless.kafka.svc.cluster.local, DNS:kafka.kafka.svc.cluster.local, URI:spiffe://example.org/otterize/namespace/kafka/service/kafka 
   ... truncated
   ```

### Inspecting Truststore

1. Retrieve the Truststore with
    ```bash
    kubectl get secret -n kafka kafka-tls-secret -o jsonpath='{.data.kafka\.truststore\.jks}' | base64 -d > kafka.truststore.jks
    ```
2. Extract the certificate from the store
    ```bash
    keytool -storepass password -keystore kafka.truststore.jks -alias ca-0 -exportcert -rfc > bundle.pem
    ```
3. Inspect it with
    ```bash
    openssl x509 -in bundle.pem -text
    ```
   You should see
    ```
   Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number: 0 (0x0)
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: C = US, O = SPIRE
        Validity
            Not Before: Sep  6 09:59:21 2022 GMT
            Not After : Sep  5 09:59:31 2025 GMT
        Subject: C = US, O = SPIRE
   ... truncated
   ```

## Client credentials
### Inspecting

1. Retrieve the client credentials with
    ```bash
    kubectl get secret -n otterize-tutorial-kafka-mtls client-credentials-secret -o jsonpath='{.data.svid\.pem}' | base64 -d > svid.pem
    ```
2. Inspect with
    ```bash
    openssl x509 -in svid.pem -text
    ```
   You should see
    ```
    Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            e3:81:42:74:5e:c4:d8:d9:cd:97:16:72:23:2e:90:62
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: C = US, O = SPIRE
        Validity
            Not Before: Sep  9 21:06:52 2022 GMT
            Not After : Sep 10 21:07:02 2022 GMT
        Subject: C = US, O = SPIRE, CN = client.otterize-tutorial-kafka-mtls
        ... truncated
            X509v3 Subject Alternative Name:
                DNS:client.otterize-tutorial-kafka-mtls, URI:spiffe://example.org/otterize/namespace/otterize-tutorial-kafka-mtls/service/client 
   ... truncated
   ```

### Validating

1. Retrieve the client credentials with
   ```bash
   kubectl get secret -n otterize-tutorial-kafka-mtls client-credentials-secret -o jsonpath='{.data.svid\.pem}' | base64 -d > svid.pem
   kubectl get secret -n otterize-tutorial-kafka-mtls client-credentials-secret -o jsonpath='{.data.key\.pem}' | base64 -d > key.pem
   kubectl get secret -n otterize-tutorial-kafka-mtls client-credentials-secret -o jsonpath='{.data.bundle\.pem}' | base64 -d > bundle.pem
   ```
2. Validate that the key belongs to the certificate be comparing their public keys
   ```bash
   openssl pkey -pubout -in key.pem  | openssl md5
   ```
   ```bash
   openssl x509 -noout -pubkey -in svid.pem | openssl md5
   ```
   If their public keys match you should see the same results for both executions, in the following format
   ```bash
   (stdin)= e01e28be4e3e11a70cdebe327e1aabc9
   ```
3. Verify that the certificates belong to the bundle with
   ```bash
   openssl verify -CAfile bundle.pem svid.pem
   ```
   You should see
   ```bash
   svid.pem: OK
   ```