import authController from "../controllers/auth.controller.js";
import { Router } from "express";
import validate from "../utilities/customValidator.js";
import { loginValidator, registerValidator } from '../utilities/validators/auth.validator.js';

const router = Router();

router.route('/register').post(validate(registerValidator), authController.register);
router.route('/login').post(validate(loginValidator), authController.login);

export default router;