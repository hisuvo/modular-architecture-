"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authControllers = void 0;
const auth_service_1 = require("./auth.service");
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await auth_service_1.authServices.loginUser(email, password);
        if (!result) {
            return res.status(401).json({
                success: false,
                message: "Unothorize error",
            });
        }
        res.status(200).json({
            success: true,
            message: "Login success",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            details: error,
        });
    }
};
exports.authControllers = {
    loginUser,
};
