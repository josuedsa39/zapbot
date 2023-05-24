FROM node:18

WORKDIR /index.js

COPY . /package.json

RUN npm install

CMD ["npm", "start"]
