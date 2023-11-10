FROM node:16.20.2-alpine3.18

WORKDIR /front

COPY ./package*.json ./

RUN npm ci

COPY . .

CMD [ "npm","run", "dev" ]