import messageController from "../controllers/message.controller.js";
import { Router } from 'express';

const router = Router();

router.route('/').post(messageController.create);
router.route('/:id').patch(messageController.update).delete(messageController.destroy);

export default router;