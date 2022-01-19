FROM node:16 AS builder

WORKDIR /app
COPY package.json .
COPY package-lock.json /app
RUN npm install --production
COPY . ./

RUN npm run build
CMD ["node", "index.js"]