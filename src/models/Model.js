import { DataTypes } from "sequelize";
import { db } from "../applications/Database.js";

export const User = db.define("users", {
  username: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
});

export const Contact = db.define("contacts", {
  firt_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

User.hasMany(Contact);
Contact.belongsTo(User);

export const Address = db.define("addresses", {
  street: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  provincy: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  postal_code: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
});

Contact.hasMany(Address);
Address.belongsTo(Contact);
