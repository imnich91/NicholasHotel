FROM node:argon

RUN mkdir -p /src/app
WORKDIR /src/app

COPY package.json /src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
