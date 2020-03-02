#!/bin/bash
# dir=$(pwd)  -v $dir:/app 
cd auth-service
docker build -t auth_service .
docker run -p 3010:3010 -t auth_service 
