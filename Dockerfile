FROM node:18

WORKDIR /index.js

RUN npm install

CMD ["npm", "start"]
