import express from "express";
import adminController from "../controller/admin-controller.js";
import subscriptionPlanController from "../controller/subscription-plan-controller.js";

// initiate publicRouter with Router function from express library
const publicApi = express.Router();

publicApi.post("/api/admin/login", adminController.login);
publicApi.get("/api/plan", subscriptionPlanController.get);

export default publicApi;
