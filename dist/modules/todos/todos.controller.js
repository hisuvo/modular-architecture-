"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosController = void 0;
const todos_service_1 = require("./todos.service");
const createTodos = async (req, res) => {
    try {
        const { user_id, title, description, completed, due_date } = req.body;
        const result = await todos_service_1.todosServices.createTodos(user_id, title, description, completed, due_date);
        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Not post data",
            });
        }
        return res.status(201).json({
            success: true,
            message: "Data post successfully",
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
const getTodos = async (req, res) => {
    try {
        const result = await todos_service_1.todosServices.getTodos();
        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Data not found",
            });
        }
        return res.status(200).json({
            success: false,
            message: "Data retrive successfully",
            data: result.rows,
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
const getSingleTodos = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await todos_service_1.todosServices.getSingleTodos(id);
        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Data not found",
            });
        }
        return res.status(200).json({
            success: false,
            message: "Data retrive successfully",
            data: result.rows,
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
const updateTodos = async (req, res) => {
    try {
        const { title, description } = req.body;
        const id = req.params.id;
        const result = await todos_service_1.todosServices.updateTodos(title, description, id);
        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Data not found",
            });
        }
        return res.status(200).json({
            success: false,
            message: "Data update successfully",
            data: result.rows,
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
const deleteTodos = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await todos_service_1.todosServices.deleteTodos(id);
        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Data not found",
            });
        }
        return res.status(200).json({
            success: false,
            message: "Data deleted successfully",
            data: result.rows,
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
exports.todosController = {
    createTodos,
    getTodos,
    getSingleTodos,
    updateTodos,
    deleteTodos,
};
