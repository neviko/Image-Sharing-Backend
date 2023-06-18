import { parentPort } from "worker_threads";
import { IExpirationPair } from "../common/interfaces/expiration-pair";
import fs from "fs";
import path from "path";

const expirationMap = new Map<string, Date>();

// creates an image folder if noe exists
fs.mkdir(path.join(__dirname, "../../image"), (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Directory created successfully!");
});

parentPort?.on("message", ({ imageId, expirationDate }: IExpirationPair) => {
  expirationMap.set(imageId, expirationDate);
  console.info(
    `ImageId - ${imageId} was added and will be expired at ${expirationDate}`
  );
});

const deleteExpiredImages = () => {
  const now = new Date();
  for (const [key, value] of expirationMap) {
    if (now > value) {
      fs.unlink(`./image/${key}`, (err) => {
        console.error(err);
      });
      console.info(`ImageId ${key} was deleted successfully`);
      expirationMap.delete(key);
    }
  }
};

setInterval(() => deleteExpiredImages(), 5000);
