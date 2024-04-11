import messageController from "../controllers/message.controller.js";
import { Router } from "express";
import validate from '../utilities/customValidator.js';
import { createValidator, updateValidator, deleteValidator } from "../utilities/validators/message.validator.js";

const wrapper = (wsHandler) => {
  const router = Router();
  router.route("/").post(validate(createValidator), messageController.create(wsHandler));
  router
    .route("/:id")
    .patch(validate(updateValidator), messageController.update(wsHandler))
    .delete(validate(deleteValidator), messageController.destroy(wsHandler));

  return router;
};

export default wrapper;