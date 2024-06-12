import { logger } from "../applications/logging.js";
import { db } from "../applications/Database.js";
import { User } from "../models/Model.js";

export async function connectDb() {
  try {
    db.authenticate();
    User.sync();
    logger.info("Database Conected");
  } catch (error) {
    logger.error("Database Error" + error);
  }
}
