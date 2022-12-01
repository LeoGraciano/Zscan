FROM node:18

WORKDIR /zscan-app
COPY package.json .
RUN npm install
COPY . .
CMD npm start