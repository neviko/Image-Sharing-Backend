import { Request, Response } from "express";
import { app } from "./app";
import { StatusCodes } from "http-status-codes";
import { fileSHaringRouter } from "./api/file-sharing/file-sharing.router";

export const activateRoutes = () => {
  app.use("/v1", fileSHaringRouter);
  app.all("*", async (req: Request, res: Response) => {
    res.status(StatusCodes.NOT_FOUND);
  });
};
