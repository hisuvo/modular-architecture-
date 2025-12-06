"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const logger_1 = __importDefault(require("./middleware/logger"));
const users_routes_1 = require("./modules/users/users.routes");
const todos_routes_1 = require("./modules/todos/todos.routes");
const auth_routes_1 = require("./modules/auth/auth.routes");
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
// DB
(0, db_1.initDB)();
// Root Route
app.get("/", logger_1.default, (req, res) => {
    res.status(200).json({
        success: true,
        message: "This is my learing api with express and prostgresql",
    });
});
// Moduler Patter use here
//* USERS CRUD
app.use("/users", users_routes_1.userRouter);
//* TODOS CRUD
app.use("/todos", todos_routes_1.todosRouter);
//* AUTH ROUTER
app.use("/auth", auth_routes_1.authRouter);
// Route: 404 Error
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found",
        path: req.path,
    });
    next();
});
exports.default = app;
