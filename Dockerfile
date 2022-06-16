FROM node:16-alpine3.15

WORKDIR /src

COPY ./src .

RUN npm install

RUN npm install -g create-react-app
