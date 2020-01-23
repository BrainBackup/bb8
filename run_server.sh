#!/bin/bash
# dir=$(pwd)  -v $dir:/app 
cd server
docker build -t code_snipper_server_api .
docker run -p 9200:9200 -t code_snipper_server_api 
