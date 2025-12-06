"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => {
    console.log(`Time:[${new Date(Date.now()).toLocaleString()}] - path:[${req.path}] - method:[${req.method}]`);
    next();
};
exports.default = logger;
