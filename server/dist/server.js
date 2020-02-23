"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
require("app-module-path/register");
const utils_1 = require("utils");
const middleware_1 = __importDefault(require("middleware"));
const errorHandlers_1 = __importDefault(require("middleware/errorHandlers"));
const services_1 = __importDefault(require("services"));
const app_1 = __importDefault(require("app"));
const env_1 = __importDefault(require("config/env"));
const http_proxy_1 = __importDefault(require("http-proxy"));
process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});
process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});
const router = express_1.default();
utils_1.applyMiddleware(middleware_1.default, router);
utils_1.applyRoutes(services_1.default, router);
utils_1.applyMiddleware(errorHandlers_1.default, router);
http_proxy_1.default.createProxyServer({ target: 'http://localhost:3001' }).listen(3009);
const server = http_1.default.createServer(router);
server.listen(env_1.default.port, () => __awaiter(this, void 0, void 0, function* () {
    setTimeout(() => __awaiter(this, void 0, void 0, function* () { return yield app_1.default.init(); }), 30 * 1000);
    console.log(`Server is running http://localhost:${env_1.default.port}...`);
}));
//# sourceMappingURL=server.js.map