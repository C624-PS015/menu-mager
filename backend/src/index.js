import app from "./application/web.js";
import logger from "./application/logger.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Server running with port ${port}`);
});
