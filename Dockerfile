FROM node:16-alpine3.15

RUN mkdir /src

WORKDIR /src

RUN npm install -g create-react-app
