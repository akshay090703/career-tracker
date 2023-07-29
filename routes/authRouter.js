import { Router } from "express";
const router = Router();

import { login, logout, register } from "../controllers/authController.js";
import {
  validateLoginUser,
  validateRegisterUser,
} from "../middleware/validationMiddleware.js";

router.post("/register", validateRegisterUser, register);
router.post("/login", validateLoginUser, login);
router.get("/logout", logout);

export default router;
