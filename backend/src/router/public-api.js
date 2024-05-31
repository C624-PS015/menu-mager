import express from "express";
import adminController from "../controller/admin-controller.js";

// initiate publicRouter with Router function from express library
const publicRouter = express.Router();

publicRouter.post("/api/admin", adminController.login);

export default publicRouter;
