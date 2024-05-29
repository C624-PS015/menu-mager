import app from "./apps/web.js";
import logger from "./apps/logger.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    logger.info("Server running with port 9000");
});
