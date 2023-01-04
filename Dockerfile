FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
#RUN npm run dev:watch
COPY . .
RUN chmod +x /usr/src/app/entrypoint.sh
EXPOSE 8080
