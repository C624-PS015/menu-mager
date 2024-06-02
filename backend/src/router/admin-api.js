import express from "express";
import adminAuthMiddleware from "../middleware/admin-auth-middleware.js";
import upload from "../middleware/upload-middleware.js";
import preferencesController from "../controller/preferences-controller.js";

const adminApi = express.Router();

adminApi.use(adminAuthMiddleware);
adminApi.post(
  "/api/preferences",
  upload.single("photo"),
  preferencesController.create,
);
adminApi.put("api/preferences/:id", preferencesController.update);
adminApi.delete("api/preferences/:id", preferencesController.remove);
adminApi.get("/api/preferences/:id", preferencesController.getDetail);

export default adminApi;
