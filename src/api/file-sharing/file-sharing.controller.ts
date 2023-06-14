import express, { Request, Response } from "express";
import { multerMiddleware } from "./file-sharing.middleware";
import { BASE_URL } from "../../common/constants/http";
import { addExpiration, getImagePath } from "./file-sharing.service";
import { StatusCodes } from "http-status-codes";
import { addImageValidator } from "./file-sharing.validator";
import { ErrorMessages } from "../../common/constants/errorMessages";

const router = express.Router();
router.get("/sharing"),
  (req: Request, res: Response) => {
    res.send({ nevo: "nev" });
  };

router.get("/:file_url", (req: Request, res: Response) => {
  const imagePath = getImagePath(req.params.file_url);

  if (!imagePath) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: ErrorMessages.imageNotExist });
  }
  res.status(StatusCodes.OK).sendFile(imagePath!);
});
router.post(
  "/file",
  multerMiddleware.single("myImage"),
  addImageValidator(),

  (req: Request, res: Response) => {
    try {
      const expirationTs = req.headers.expiration_ts as string;
      const fileName: string = req.file?.filename as string;
      addExpiration(fileName, expirationTs);
      console.info(`file ${fileName} uploaded successfully`);

      res.status(StatusCodes.CREATED).json({ url: `${BASE_URL}/${fileName}` });
    } catch (e) {
      console.error(`${ErrorMessages.noFileUploaded}:\n${e}`);
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: ErrorMessages.noFileUploaded });
    }
  }
);

export { router as fileSHaringRouter }; // or ES6
