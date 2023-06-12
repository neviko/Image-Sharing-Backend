import multer from "multer";
import path from "path";
import { fileNameRequest } from "../../common/interfaces/filename-request";
import { NextFunction, Request, Response } from "express";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../../image"));
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + path.extname(file.originalname);
    // req.fileName = fileName;
    cb(null, fileName);
  },
});

const upload = multer({ storage });
export { upload as uploadMiddleware };
