import express from "express";
import adminController from "../controller/admin-controller.js";
import preferencesController from "../controller/preferences-controller.js";
import recipeController from "../controller/recipe-controller.js";
import materialController from "../controller/material-controller.js";
import allergyController from "../controller/allergy-controller.js";

// initiate publicRouter with Router function from express library
const publicRouter = express.Router();

publicRouter.post("/api/admin/login", adminController.login);
publicRouter.get("/api/preference", preferencesController.getAll);
publicRouter.get("/api/recipe", recipeController.getAll);
publicRouter.get("/api/material", materialController.getAll);
publicRouter.get("/api/allergy", allergyController.getAll);

export default publicRouter;
