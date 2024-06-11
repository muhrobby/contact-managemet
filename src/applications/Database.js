import { Sequelize } from "sequelize";
import { logger } from "./logging.js";

export const db = new Sequelize("contact_management", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: (msg) => logger.info(msg),
});
