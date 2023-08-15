#!/bin/bash

docker build . -t taskhub-application

docker run -p 8000:8000 taskhub-application
