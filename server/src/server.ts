import http from "http";
import express from "express";
import "app-module-path/register";
import { applyMiddleware, applyRoutes } from "utils";
import middleware from "middleware";
import errorHandlers from "middleware/errorHandlers";
import routes from "services";
import app from 'app';
import env from 'config/env';
import httpProxy from 'http-proxy';

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

httpProxy.createProxyServer({target:'http://localhost:3001'}).listen(3009);


const server = http.createServer(router);

server.listen(env.port, async () => {
  setTimeout(async () => await app.init(), 30 * 1000);
  console.log(`Server is running http://localhost:${env.port}...`)
});
