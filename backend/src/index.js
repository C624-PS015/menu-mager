import app from "./apps/web.js";
import logger from "./apps/logger.js";

app.listen(9000, () => {
  logger.info("Server running with port 9000");
});
