import { Router } from "express";
import { userControllers } from "./users.controller";
import auth from "../../middleware/auth";
import logger from "../../middleware/logger";

const router = Router();

// app.use('/users', userRouter)
// router --> controller --> service

router.get("/", logger, auth("admin"), userControllers.getUser);
router.post("/", userControllers.createUser);
router.get("/:id", userControllers.getSingleUser);
router.put("/:id", userControllers.updateUser);
router.delete("/:id", userControllers.deleteUser);

export const userRouter = router;
