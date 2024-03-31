import express from "express";
import morgan from "morgan";
import router from "./router/auth.router";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());

app.use(express.json());

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use(router);

export default app;
