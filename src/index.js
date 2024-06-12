import { connectDb } from "./config/connectDb.js";
import { web } from "./applications/web.js";
import { logger } from "./applications/logging.js";

(async () => {
  await connectDb();
})();

web.listen(300, () => {
  logger.info("App Start");
});
