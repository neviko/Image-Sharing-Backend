import express, { Request, Response } from "express";
import uploadMiddleware from "./file-sharing.middleware";

const router = express.Router();

export { router as fileSHaringRouter }; // or ES6
