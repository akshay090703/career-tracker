import rateLimiter from "express-rate-limit";
import { Router } from "express";
const router = Router();

import { login, logout, register } from "../controllers/authController.js";
import {
  validateLoginUser,
  validateRegisterUser,
} from "../middleware/validationMiddleware.js";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: { msg: "IP rate limit exceeded, retry in 15 minutes" },
});

router.post("/register", apiLimiter, validateRegisterUser, register);
router.post("/login", apiLimiter, validateLoginUser, login);
router.get("/logout", logout);

export default router;
