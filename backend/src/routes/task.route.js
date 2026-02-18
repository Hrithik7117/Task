import express from "express";
import {
  createTask,
  getTasks,
  deleteTask
} from "../controllers/task.controller.js"
import { protect } from "../middlewares/auth.middleware.js"
import { authorize } from "../middlewares/role.middleware.js"
const router = express.Router();

router.use(protect);

router.post("/", createTask);
router.get("/", getTasks);


router.delete("/:id", authorize("admin"), deleteTask);

export default router;
