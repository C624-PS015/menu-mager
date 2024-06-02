import express from "express";
import publicRouter from "../router/public-api.js";
import adminApi from "../router/admin-api.js";
import errorMiddleware from "../middleware/error-middleware.js";
import userApi from "../router/user-api.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(publicRouter);
app.use(adminApi);
app.use(userApi);

app.use(errorMiddleware);

export default app;
