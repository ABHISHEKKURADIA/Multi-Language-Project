#!/bin/bash

docker build -t nodeApp .

docker run -d -p 80:1998 nodeApp