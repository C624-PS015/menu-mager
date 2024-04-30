import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const logger = winston.createLogger({
  level: "info",
  transports: [
    new DailyRotateFile({
      dirname: "./log",
      filename: `app-%DATE%.log`,
      zippedArchive: true,
      maxSize: "1m",
      maxFiles: "14d",
    }),
  ],
  format: winston.format.simple(),
});

export default logger;
