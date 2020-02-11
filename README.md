# create a docker image
docker build -t tagname .

# list all images
docker images

# run a container
docker run -p 8000:3000 tagname