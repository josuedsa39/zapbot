FROM node:12

WORKDIR /index.js

COPY . /index.js

RUN npm install

CMD ["npm", "start"]
