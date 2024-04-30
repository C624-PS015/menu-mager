import app from "./apps/web.js";
import logger from "./apps/logger.js";

app.listen(3000, () => {
  logger.info("Server running with port 3000");
});
