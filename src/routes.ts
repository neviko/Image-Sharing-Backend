import { Request, Response } from "express";
import { app } from "./app";
import { StatusCodes } from "http-status-codes";
import { fileSHaringRouter } from "./api/file-sharing/file-sharing.controller";

export const activateRoutes = () => {
  app.use("/v1", fileSHaringRouter);
  app.all("*", async (req: Request, res: Response) => {
    res.status(StatusCodes.NOT_FOUND).send("endpoint not exist");
  });
};
