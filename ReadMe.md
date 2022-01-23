# my-app
 The project Contains 3 Dockerfile one for building the serverside and the other for building the clientside and the last one in the root directory for containerizing the whole application in combination with docker-compose files to set up tyhe network connection between containers 
## Project setup
```
docker build . -t my-app
```

### Compiles and hot-reloads for development
```
docker-compose -f docker-compose-dev.yml up --build
```
