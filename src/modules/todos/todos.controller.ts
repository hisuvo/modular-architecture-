import { Request, Response } from "express";
import { todosServices } from "./todos.service";

const createTodos = async (req: Request, res: Response) => {
  try {
    const { user_id, title, description, completed, due_date } = req.body;

    const result = await todosServices.createTodos(
      user_id,
      title,
      description,
      completed,
      due_date
    );

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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

const getTodos = async (req: Request, res: Response) => {
  try {
    const result = await todosServices.getTodos();

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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

const getSingleTodos = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await todosServices.getSingleTodos(id!);

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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

const updateTodos = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const id = req.params.id;
    const result = await todosServices.updateTodos(title, description, id!);

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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

const deleteTodos = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await todosServices.deleteTodos(id!);

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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

export const todosController = {
  createTodos,
  getTodos,
  getSingleTodos,
  updateTodos,
  deleteTodos,
};
