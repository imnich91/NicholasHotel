FROM node:6.3.0

COPY package.json /src/
WORKDIR /src/
RUN npm install

COPY . /src/

EXPOSE 8080
ENTRYPOINT [ "npm", "start" ]
