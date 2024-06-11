import { connectDb } from "./config/connectDb.js";

(async () => {
  await connectDb();
})();
