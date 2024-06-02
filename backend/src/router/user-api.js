import express from "express";
import userAuthMiddleware from "../middleware/user-auth-middleware.js";
import preferencesController from "../controller/preferences-controller.js";

const userApi = express.Router();

userApi.use(userAuthMiddleware);

export default userApi;
