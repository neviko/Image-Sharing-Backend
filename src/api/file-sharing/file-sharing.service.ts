import path from "path";
import { expirationWorker } from "../../index";
import { IExpirationPair } from "../../common/interfaces/expiration-pair";

export const addExpiration = (imageId: string, expirationTs: string): void => {
  const expirationPair: IExpirationPair = {
    imageId,
    expirationDate: new Date(expirationTs),
  };
  expirationWorker.postMessage(expirationPair);
};

export const getImagePath = (fileName: string): string | undefined => {
  if (!fileName) {
    return undefined;
  }
  return path.join(__dirname, `../../../image/${fileName}`);
};
