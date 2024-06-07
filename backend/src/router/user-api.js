import express from "express";
import userAuthMiddleware from "../middleware/user-auth-middleware.js";
import availableFoodController from "../controller/available-food-controller.js";
import preferencesController from "../controller/preferences-controller.js";
import recipeController from "../controller/recipe-controller.js";
import materialController from "../controller/material-controller.js";
import allergyController from "../controller/allergy-controller.js";

const userApi = express.Router();

userApi.use(userAuthMiddleware);

// preferences
userApi.get("/api/preference/:id", preferencesController.getDetail);
userApi.get("/api/preference", preferencesController.getAll);

// recipe
userApi.get("/api/recipe/:id", recipeController.getDetail);
userApi.get("/api/recipe", recipeController.getAll);

// material
userApi.get("/api/material/:id", materialController.getDetail);
userApi.get("/api/material", materialController.getAll);

// allergy
userApi.get("/api/allergy/:id", allergyController.getDetail);
userApi.get("/api/allergy", allergyController.getAll);

// available food
userApi.get("api/availablefood/:id", availableFoodController.getDetail);
userApi.get("api/availablefood", availableFoodController.getAll);

export default userApi;
