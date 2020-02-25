FROM node:13.6
WORKDIR /usr/app
COPY . .
RUN npm cache clean --force
RUN npm install
CMD npm run start
