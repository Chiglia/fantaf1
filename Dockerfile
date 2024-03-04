FROM node:latest

WORKDIR /fantaf1-16

COPY package.json .

RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE ${ENV_PORT}

CMD ["npm", "start"]