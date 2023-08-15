FROM node:16.20-slim

MAINTAINER Jorge Melgarejo <melgarejo.colarte@gmail.com>

RUN mkdir -p /taskhub-application

WORKDIR /taskhub-application

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /taskhub-application/package.json

COPY . /taskhub-application

EXPOSE 8000

RUN npm install -g @vue/cli@latest

RUN npm install

CMD ["npm", "run", "serve"]
