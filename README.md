## Description

Run a microservice with K8s and Docker on your system.

## Installation

```bash
# checkout to 'master'
$ npm install
```

## Running the app

   NOTE : You need to have Docker Desktop (and enable K8s) 

```bash
$ docker build -t kubedoc-test .

$ kubectl apply -f ./deployment/deployment.yaml 

$ kubectl apply -f ./deployment/service.yaml      

$ kubectl apply -f ./deployment/hello-cronjob.yaml
```

## Stay in touch

**LinkedIn:**  [Abhinav Parashar](https://www.linkedin.com/in/abhinavp06/)
