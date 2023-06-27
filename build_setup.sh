#!/bin/bash

yarn build

mkdir ./dist/public

mv ./dist/* ./dist/public/

cp -rf ./server.js ./db.json ./dist/

cd ./dist/

sudo node server.js
