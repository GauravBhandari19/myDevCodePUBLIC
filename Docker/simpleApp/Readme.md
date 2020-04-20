# Create Docker container and Deploy it using kubernetes


### Create Docker Container

Create index.js


**Refer:** [index.js](https://github.com/GauravBhandari19/mydevcode/blob/master/Docker/simpleApp/index.js) 


Create a package.json file (You can use "npm init" command too else copy below content)

**Refer:** [package.json](https://github.com/GauravBhandari19/mydevcode/blob/master/Docker/simpleApp/package.json)


Create a Docker file (name: Dockerfile)

**Refer:** [Dockerfile](https://github.com/GauravBhandari19/mydevcode/blob/master/Docker/simpleApp/Dockerfile) 


Build an Image (you have to be where Dockerfile is)

sudo docker build -t hello-world .

Create a container and run it

sudo docker run -t -i -p 3000:3000 --name test hello-world

[Note: -t and -i  will allow you to use CTRL+C and exit. For detached mode use -d as well]

Add your docker container to Registry Server


```
sudo docker tag hello-world localhost:5000/hello-world
```

Push image to local registry

```	
sudo docker push localhost:5000/hello-world

```


Create a YAML file for deployment and service (Port 8080 is pointing to 30000. Note: using nodePort in production is NOT RECOMMENDED)
```	
Refer: myexpress.yaml
```

Apply Yaml file

```	
kubectl apply -f myexpress.yaml
```
	
Verify Application

```
curl localhost:30002
```
	
Once verification is done, delete it

```
kubectl delete -f myexpress.yaml
```	



