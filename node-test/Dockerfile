# FROM node:lts
FROM ubuntu:20.04

RUN  apt-get update && apt-get install -y curl
# curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
RUN curl -fsSL https://deb.nodesource.com/setup_current.x |  bash -
RUN apt-get update
RUN apt-get install -y nodejs
RUN node -v

WORKDIR /app

COPY . .

RUN npm i

CMD ["npm", "test"]