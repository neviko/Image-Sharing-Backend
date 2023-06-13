import express, { Request, Response } from "express";
import { uploadMiddleware } from "./file-sharing.middleware";
import path from "path";
import { BASE_URL } from "../../common/constants/http";
import { addExpiration } from "./file-sharing.service";
import { StatusCodes } from "http-status-codes";
import { addImageValidator } from "./file-sharing.validator";

const router = express.Router();

router.get("/:file_url", (req: Request, res: Response) => {
  const imagePath = path.join(
    __dirname,
    `../../../image/${req.params.file_url}`
  );
  console.log(`path - ${path}`);

  res.status(200).sendFile(imagePath);
});
router.post(
  "/file",
  addImageValidator(),
  uploadMiddleware.single("myImage"),
  (req: Request, res: Response) => {
    try {
      const expirationTs = req.headers.expiration_ts as string;
      const fileName: string = req.file?.filename as string;
      addExpiration(fileName, expirationTs);

      res.status(StatusCodes.CREATED).json({ url: `${BASE_URL}/${fileName}` });
    } catch {
      console.error("No file uploaded!");

      res.status(StatusCodes.BAD_REQUEST).send("No file uploaded!");
    }
  }
);

export { router as fileSHaringRouter }; // or ES6
