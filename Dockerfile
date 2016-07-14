FROM node:4.4.7

COPY package.json /src/
WORKDIR /src/
RUN npm install npm -g
RUN npm install

COPY . /src/

EXPOSE 8080
ENTRYPOINT [ "npm", "start" ]
