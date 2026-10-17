#!/bin/bash

docker build -t nodeapp .

docker run -d -p 80:1998 nodeapp