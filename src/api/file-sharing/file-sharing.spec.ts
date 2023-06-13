import request from "supertest";
import { app } from "../../app";
import { StatusCodes } from "http-status-codes";
import { describe, it } from "node:test";
// jest.setTimeout(20000);

describe("api suite", () => {
  it("should work - ", async () => {
    console.log("nevo");

    return request(app).get("/v1/file").expect(200);
  });

  it("should be failed - missing header", async () => {
    const futureDate = new Date().setMinutes(new Date().getMinutes() + 5);

    return request(app).post("/file").expect(StatusCodes.BAD_REQUEST);
  });

  //   it("should be failed - missing file", async () => {});

  //   it("should pass - and validate the image exist in the file system", async () => {});

  //   it("should pass - and validate the image exists and deletes from the file system", async () => {});
});
