import express from "express";
import { uploadMiddleware } from "./file-sharing.middleware";

const router = express.Router();

router.get("/:file");
router.post("/file", uploadMiddleware.single("myImage"), (req, res) => {
  if (req.file) {
    // File was uploaded successfully
    res.send("File uploaded!");
  } else {
    // No file was uploaded
    res.status(400).send("No file uploaded!");
  }
});

export { router as fileSHaringRouter }; // or ES6
