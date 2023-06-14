import express from "express";
import cors from "cors";
import { json } from "body-parser";
import { activateRoutes } from "./routes";
import rateLimit from "express-rate-limit";

//TODO:helmet

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10000, // Limit each IP to 10000 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(json());
app.use(limiter);
app.use(express.urlencoded({ extended: false }));
app.use("image", express.static("image"));
activateRoutes();

export { app };
