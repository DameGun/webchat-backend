import authController from "../controllers/auth.controller.js";
import userController from "../controllers/auth.controller.js";
import { Router } from "express";

const router = Router();

router.route('/register').post(userController.register);
router.route('/login').post(authController.login);

export default router;