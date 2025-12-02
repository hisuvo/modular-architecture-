import express, { NextFunction, Request, Response } from "express";
import { initDB } from "./config/db";
import logger from "./middleware/logger";
import { userRouter } from "./modules/users/users.routes";
import { todosRouter } from "./modules/todos/todos.routes";
import { authRouter } from "./modules/auth/auth.routes";

const app = express();

// parser
app.use(express.json());

// DB
initDB();

// Root Route
app.get("/", logger, (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "This is my learing api with express and prostgresql",
  });
});

// Moduler Patter use here
//* USERS CRUD
app.use("/users", userRouter);

//* TODOS CRUD
app.use("/todos", todosRouter);

//* AUTH ROUTER
app.use("/auth", authRouter);

// Route: 404 Error
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
    path: req.path,
  });

  next();
});

export default app;
