import express from "express";
import adminAuthMiddleware from "../middleware/admin-auth-middleware.js";
import upload from "../middleware/upload-middleware.js";
import preferencesController from "../controller/preferences-controller.js";
import recipeController from "../controller/recipe-controller.js";

const adminApi = express.Router();

adminApi.use(adminAuthMiddleware);
adminApi.post(
  "/api/preferences",
  upload.single("photo"),
  preferencesController.create,
);
adminApi.patch("/api/preferences/:id", preferencesController.update);
adminApi.delete("/api/preferences/:id", preferencesController.remove);
adminApi.get("/api/preferences/:id", preferencesController.getDetail);

adminApi.post("/api/recipes", upload.single("photo"), recipeController.create);

export default adminApi;
