import express from "express";
import adminController from "../controller/admin-controller.js";
import preferencesController from "../controller/preferences-controller.js";

// initiate publicRouter with Router function from express library
const publicRouter = express.Router();

publicRouter.post("/api/admin/login", adminController.login);
publicRouter.get("/api/preferences", preferencesController.getAll);

export default publicRouter;
