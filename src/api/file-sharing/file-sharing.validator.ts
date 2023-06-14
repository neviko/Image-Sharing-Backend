import { NextFunction, Request, Response } from "express";
import { validationResult, body, check } from "express-validator";
import { StatusCodes } from "http-status-codes";
import { ErrorMessages } from "../../common/constants/errorMessages";

/**
 * input validation middleware for the image input and headers
 */
export const addImageValidator = () => {
  return [
    (req: Request, res: Response, next: NextFunction) => {
      if (!req.file) {
        console.info(`upload image is failed - Image is required`);
        return res.status(400).json({ error: ErrorMessages.imageRequired });
      }
      next();
    },

    check("expiration_ts")
      .notEmpty()
      .withMessage("expiration_ts header is required"),

    body("myImage").custom((value, { req }) => {
      console.log("in validator");
      if (!req.file) {
        throw new Error("Image is required");
      }
      return true;
    }),

    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(StatusCodes.BAD_REQUEST).send({
          StatusCode: StatusCodes.BAD_REQUEST,
          errors: errors.array(),
        });
      }
      next();
    },
  ];
};
