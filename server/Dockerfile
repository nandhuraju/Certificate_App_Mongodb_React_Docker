FROM node:20.15.1
WORKDIR /usr/src/app
COPY package*.json ./
# RUN npm cache clean --force
RUN npm install
COPY . .
CMD [ "node","app.js" ]