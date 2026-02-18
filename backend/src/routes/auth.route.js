import express from "express";
import { body } from "express-validator";
import { register, login } from '../controllers/auth.controller.js'
import { validate } from "../utils/validate.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 })
  ],
  validate,
  register
);

router.post("/login", login);

export default router;
