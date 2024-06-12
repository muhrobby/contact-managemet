import userService from "../service/user-service.js";
import { logger } from "../applications/logging.js";

const register = async (req, res, next) => {
  try {
    const result = await userService.register(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await userService.login(req.body);
    res.cookie("auth", result.token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  register,
  login,
};
