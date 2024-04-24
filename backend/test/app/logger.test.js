import logger from "../../src/apps/logger";

test("create new logger with console transport", () => {
  logger.info("Logger Info");
  logger.error("Logger Error");
});
