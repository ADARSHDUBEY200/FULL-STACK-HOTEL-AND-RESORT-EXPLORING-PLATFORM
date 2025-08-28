FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install --force

EXPOSE 8080

CMD [ "node" ,"app.js"]

