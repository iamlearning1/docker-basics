# list all running containers

docker ps

# stop a running container

docker stop [imageId]

# delete a container

docker rm [imageId]

# create a docker image

docker build -t [name of image] .

# list all images

docker images

# run a container

docker run -p 8000:3000 [name of image]

# name your container

docker run -d -p 8000:3000 --name [container name][name of image]

# create a volume

docker volume create [name of volume]

# list all volumes

docker volume ls

# remove unused volumes

docker volume prune

# remove a single volume

docker volume rm [name of volume]

# details about volume

docker inspect [name of volume]

# run a container on volume

docker run -d -p 8000:3000 --name [container name] --volume [volume name]:/[directory name][name of image]

## windows

> docker run -d -p 8000:3000 --name [container name] --volume %c%d:/[directory name][name of image]

## linux

> docker run -d -p 8000:3000 --name [container name] --volume \$(pwd):/[directory name][name of image]

or

> docker run -d -p 8000:3000 --name [container name] --volume "\$(pwd)":/[directory name][name of image]

# open container in debug mode

docker exec -it [container name] bash
