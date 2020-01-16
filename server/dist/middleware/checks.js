"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrors_1 = require("../utils/httpErrors");
exports.checkSearchParams = (req, res, next) => {
    if (!req.query.q) {
        throw new httpErrors_1.HTTP400Error("Missing q parameter");
    }
    else {
        next();
    }
};
exports.checkCreateSnippetsParams = (req, res, next) => {
    if (!req.body.menuItemId || !req.body.saveCodeSnippet || !req.body.pageUrl) {
        throw new httpErrors_1.HTTP400Error("Missing parameter");
    }
    else {
        next();
    }
};
//# sourceMappingURL=checks.js.map