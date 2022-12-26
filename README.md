Run a microservice with K8s and Docker on your system.

NOTE: You need to have Docker Desktop and enable K8s

STEPS:
    - Clone this repository
    - Switch to 'master'
    - npm i
    - Now run the following commands:
        ```

        docker build -t kubedoc-test .

        kubectl apply -f ./deployment/deployment.yaml 

        kubectl apply -f ./deployment/service.yaml      

        kubectl apply -f ./deployment/hello-cronjob.yaml

Connect with me : [Abhinav Parashar](https://www.linkedin.com/in/abhinavp06/)