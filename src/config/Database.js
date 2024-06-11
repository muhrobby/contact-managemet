import { Sequelize } from "sequelize";

export const db = new Sequelize("contact_management", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
