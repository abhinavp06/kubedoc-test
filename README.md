## Description

Run a microservice with K8s and Docker on your system.

## Installation

```bash
# checkout to 'master'
$ npm install
```

## Running the app

   NOTE : You need to have Docker Desktop (enable K8s) and helm

```bash
$ docker build -t kubedoc-test .

$ helm install  kubedoc-test ./deployment/helm-chart 
```

## Stay in touch

**LinkedIn:**  [Abhinav Parashar](https://www.linkedin.com/in/abhinavp06/)
