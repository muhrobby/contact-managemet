import { logger } from "../applications/logging.js";
import { responseError } from "../error/response-error.js";
import { User } from "../models/Model.js";
import {
  loginUserValidation,
  registerUserValidation,
} from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (request) => {
  const user = validate(registerUserValidation, request);

  const countUser = await User.count({
    where: {
      username: user.username,
    },
  });

  if (countUser === 1) {
    throw new responseError(400, "user is already registered");
  }
  if (user.password !== user.password2) {
    throw new responseError(400, "Passwords do not match");
  }

  user.password = await bcrypt.hash(user.password, 10);

  return await User.create({
    username: user.username,
    name: user.name,
    password: user.password,
  });

  // const data = {
  //   username: user.username,
  //   name: user.name,
  // };

  // return data;
};

const login = async (request) => {
  const user = validate(loginUserValidation, request);

  const findUser = await User.findOne({ where: { username: user.username } });

  if (!findUser) {
    throw new responseError(400, "User not Found");
  }

  const valid = await bcrypt.compare(user.password, findUser.password);
  if (!valid) {
    throw new responseError(400, "Invalid password");
  }
  const data = {
    id: findUser.id,
    username: findUser.username,
  };

  const token = jwt.sign(data, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });

  await User.update(
    { token: token },
    {
      where: {
        username: user.username,
      },
    }
  );

  return {
    token: token,
  };
};

export default {
  register,
  login,
};
