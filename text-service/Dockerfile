FROM node:12.16
WORKDIR /usr/app
COPY . .
RUN yarn
RUN yarn build
CMD yarn start:prod