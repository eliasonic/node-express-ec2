ARG NODE_VERSION=18.18.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node", "index.js" ]