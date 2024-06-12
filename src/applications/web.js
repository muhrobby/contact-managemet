import express from "express";
import { publicRouter } from "../route/public-api.js";
import { errorMiddleware } from "../middleware/error.middleware.js";
import dontenv from "dotenv";
import cookieParser from "cookie-parser";

export const web = express();

dontenv.config();
web.use(cookieParser());
web.use(express.json());
web.use(publicRouter);
web.use(errorMiddleware);
