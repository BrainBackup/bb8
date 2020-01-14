"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./search/routes"));
const routes_2 = __importDefault(require("./snippets/routes"));
exports.default = [...routes_1.default, ...routes_2.default];
//# sourceMappingURL=index.js.map