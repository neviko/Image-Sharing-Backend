import { NextFunction, Request, Response } from "express";
import { validationResult, header } from "express-validator";
import { StatusCodes } from "http-status-codes";

export const addImageValidator = () => {
  return [
    header("expiration_ts")
      .notEmpty()
      .withMessage("expiration_ts header should not be empty")
      .isDate()
      .withMessage("expiration_ts must be a valid header"),

    // check("fileInputFieldName")
    //   .custom((value, { req }) => {
    //     !!req.file;
    //   })
    //   .withMessage("Please only submit pdf documents."), // custom error message that will be send back if the file in not a pdf.

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
