import { logger } from "../applications/logging.js";
import { db } from "../applications/Database.js";

export async function connectDb() {
  try {
    db.authenticate();
    logger.info("Database Conected");
  } catch (error) {
    logger.error("Database Error" + error);
  }
}
