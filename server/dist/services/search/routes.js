"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const SearchController_1 = require("./SearchController");
const checks_1 = require("../../middleware/checks");
exports.default = [
    {
        path: "/api/v1/search",
        method: "get",
        handler: [
            checks_1.checkSearchParams,
            ({ query }, res) => __awaiter(this, void 0, void 0, function* () {
                const result = yield SearchController_1.getPlacesByName(query.q);
                res.status(200).send(result);
            })
        ]
    }
];
//# sourceMappingURL=routes.js.map