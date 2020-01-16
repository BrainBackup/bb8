FROM node:13.6
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm install

CMD ["npm", "run dev"]
EXPOSE 3009