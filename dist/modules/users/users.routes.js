"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const users_controller_1 = require("./users.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const logger_1 = __importDefault(require("../../middleware/logger"));
const router = (0, express_1.Router)();
// app.use('/users', userRouter)
// router --> controller --> service
router.get("/", logger_1.default, (0, auth_1.default)("admin"), users_controller_1.userControllers.getUser);
router.post("/", users_controller_1.userControllers.createUser);
router.get("/:id", users_controller_1.userControllers.getSingleUser);
router.put("/:id", users_controller_1.userControllers.updateUser);
router.delete("/:id", users_controller_1.userControllers.deleteUser);
exports.userRouter = router;
