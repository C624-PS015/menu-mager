import express from "express";
import upload from "../middleware/upload-middleware.js";
import preferencesController from "../controller/preferences-controller.js";

const api = express.Router();

api.post(
  "/api/preferences",
  upload.single("photo"),
  preferencesController.create,
);

export default api;
