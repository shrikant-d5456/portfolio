import express from "express";
import { protectAdmin } from "../middleware/authMiddleware.js";

const buildCrudRouter = (controller) => {
  const router = express.Router();

  router.get("/", controller.getAll);
  router.post("/", protectAdmin, controller.createOne);
  router.put("/:id", protectAdmin, controller.updateOne);
  router.delete("/:id", protectAdmin, controller.deleteOne);

  return router;
};

export default buildCrudRouter;
