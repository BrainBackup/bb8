import http from "http";
import express from "express";
import "app-module-path/register";
import { applyMiddleware, applyRoutes } from "utils";
import middleware from "middleware";
import errorHandlers from "middleware/errorHandlers";
import routes from "services";
import app from 'app';

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT = 3009 } = process.env;
const server = http.createServer(router);


server.listen(PORT, async () => {
  await app.init();
  console.log(`Server is running http://localhost:${PORT}...`)
});
