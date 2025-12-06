"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const node_path_1 = __importDefault(require("node:path"));
dotenv_1.default.config({ path: node_path_1.default.join(process.cwd(), ".env") });
const config = {
    port: process.env.PORT,
    connection_str: process.env.CONNECTION_STRING,
    jwtPrivateKey: process.env.JWT_SECRET,
};
exports.default = config;
