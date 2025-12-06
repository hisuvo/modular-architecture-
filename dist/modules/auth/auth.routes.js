"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const router = (0, express_1.Router)();
// http://localhost:5000/auth/login
router.post("/login", auth_controller_1.authControllers.loginUser);
exports.authRouter = router;
