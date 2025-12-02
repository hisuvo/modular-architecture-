import { Request, Response } from "express";
import { authServices } from "./auth.service";

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const result = await authServices.loginUser(email, password);

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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

export const authControllers = {
  loginUser,
};
