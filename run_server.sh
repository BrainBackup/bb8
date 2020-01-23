#!/bin/bash
dir=$(pwd)
cd server
docker build -t code_snipper_server_api .
docker run -p 9200:9200 -v $dir:/app -t code_snipper_server_api 
