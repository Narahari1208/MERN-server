FROM node:20
WORKDIR /app
COPY package.json ./
RUN npm install --force
COPY . .
EXPOSE 3001
CMD [ "npm","start" ]