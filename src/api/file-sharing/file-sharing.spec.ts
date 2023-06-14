import request from "supertest";
import { app } from "../../app";
import { StatusCodes } from "http-status-codes";

describe("api suite", () => {
  it("should pass", async () => {
    const res = await request(app).get("/v1").expect(200);
    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    return Promise.resolve();
  });

  // it("should be failed - missing file", async () => {
  //   const futureDate = new Date().setMinutes(new Date().getMinutes() + 5);
  //   const res = await request(app).post("/file").set({
  //     expiration_ts: futureDate,
  //   });

  //   expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  // });

  //   it("should be failed - missing file", async () => {});

  //   it("should pass - and validate the image exist in the file system", async () => {});

  //   it("should pass - and validate the image exists and deletes from the file system", async () => {});
});
