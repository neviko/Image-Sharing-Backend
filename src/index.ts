import { app } from "./app";
import * as dotenv from "dotenv";
import { Worker } from "worker_threads";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

/**
 * generates worker thread for the image expiration mechanism
 */
export const expirationWorker = new Worker(
  "./src/services/expiration-worker.service.ts",
  {
    execArgv: ["--require", "ts-node/register"],
  }
);
