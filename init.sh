#!/bin/bash

docker built -t nodeApp .

docker run -d -p 80:1998 nodeApp