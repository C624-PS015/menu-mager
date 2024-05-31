import express from "express";
import publicRouter from "../router/public-api.js";
import api from "../router/api.js";
import multer from "multer";
import errorMiddleware from "../middleware/error-middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(publicRouter);
app.use(api);

app.use(errorMiddleware);

export default app;
