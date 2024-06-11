import { db } from "./config/Database.js";
import { Address, Contact, User } from "./models/Model.js";

try {
  await db.authenticate();
  User.sync();
  Contact.sync();
  Address.sync();
  console.log("database connected successfully");
} catch (error) {
  console.log("database error: " + error);
}
