import express from "express";
import adminAuthMiddleware from "../middleware/admin-auth-middleware.js";
import upload from "../middleware/upload-middleware.js";
import preferencesController from "../controller/preferences-controller.js";
import recipeController from "../controller/recipe-controller.js";
import materialController from "../controller/material-controller.js";
import allergyController from "../controller/allergy-controller.js";
import subscriptionPlanController from "../controller/subscription-plan-controller.js";
import availableFoodController from "../controller/available-food-controller.js";

const adminApi = express.Router();

// using middleware admin auth middleware
adminApi.use(adminAuthMiddleware);

// preferences
adminApi.post(
  "/api/preference",
  upload.single("photo"),
  preferencesController.create,
);
adminApi.put(
  "/api/preference/:id",
  upload.single("photo"),
  preferencesController.update,
);
adminApi.delete("/api/preference/:id", preferencesController.remove);

// recipe
adminApi.post("/api/recipe", upload.single("photo"), recipeController.create);
adminApi.put(
  "/api/recipe/:id",
  upload.single("photo"),
  recipeController.update,
);
adminApi.delete("/api/recipe/:id", recipeController.remove);

// allergy
adminApi.post("/api/allergy", allergyController.create);
adminApi.put("/api/allergy/:id", allergyController.update);
adminApi.delete("/api/allergy/:id", allergyController.remove);

//material
adminApi.post(
  "/api/material",
  upload.single("photo"),
  materialController.create,
);
adminApi.put(
  "/api/material/:id",
  upload.single("photo"),
  materialController.update,
);
adminApi.delete("/api/material/:id", materialController.remove);

// subscriberPlan
adminApi.post("/api/plan", subscriptionPlanController.create);
adminApi.put("/api/plan", subscriptionPlanController.update);

// available food
adminApi.post("/api/availablefood", availableFoodController.create);
adminApi.put("/api/availablefood/:id", availableFoodController.update);
adminApi.delete("/api/availablefood/:id", availableFoodController.remove);

export default adminApi;
