"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const user_service_1 = require("./user.service");
const createUser = async (req, res) => {
    try {
        const result = await user_service_1.userServices.createUser(req.body);
        res.status(201).json({
            success: true,
            message: "Data inserted successfully",
            data: result.rows[0],
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const getUser = async (req, res) => {
    try {
        const result = await user_service_1.userServices.getUser();
        res.status(200).json({
            success: true,
            message: "data retrived successfully",
            data: result.rows,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const getSingleUser = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await user_service_1.userServices.getSingleUser(id);
        return res.status(200).json({
            success: false,
            message: "Single data retrived successfully",
            data: result.rows[0],
        });
        console.log(id);
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const updateUser = async (req, res) => {
    try {
        const id = req.params?.id;
        const result = await user_service_1.userServices.updateUser(req.body, id);
        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Data not found",
            });
        }
        res.status(201).json({
            success: true,
            message: "Data updated successfully",
            data: result.rows[0],
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
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await user_service_1.userServices.deleteUser(id);
        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Data not found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Data deleted successfully",
            data: result.rows[0],
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
exports.userControllers = {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser,
};
