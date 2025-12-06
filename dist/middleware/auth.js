"use strict";
/**
 * ? Higer Order Function , CallBack function and Closure function
 * * -> I a function get as a argument a function and return a function. this function call Higher Order function
 * * -> Higher order function's argument function is call-back function
 * * -> Higher order function's return function is clusor function that remember other function variable
 *
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const auth = (...roles) => {
    return async (req, res, next) => {
        try {
            const token = req.headers.authorization;
            if (!token) {
                return res.status(500).json({ message: "You are not allowed" });
            }
            const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwtPrivateKey);
            req.user = decoded;
            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(401).json({
                    messaage: "You are unauthorized",
                });
            }
            next();
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    };
};
exports.default = auth;
