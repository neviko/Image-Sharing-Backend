import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../../image"));
  },
  filename: (req, file, cb) => {
    const fileName = (
      "_D" +
      Date.now() +
      path.basename(file.originalname)
    ).replace(/\s+/g, "_");

    file.filename = fileName;
    cb(null, fileName);
  },
});

export const multerMiddleware = multer({ storage });
