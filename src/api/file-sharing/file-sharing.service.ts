import { expirationWorker } from "../../app";
import { IExpirationPair } from "../../common/interfaces/expiration-pair";

export const addExpiration = (imageId: string, expirationTs: string): void => {
  const expirationPair: IExpirationPair = {
    imageId,
    expirationDate: new Date(expirationTs),
  };
  expirationWorker.postMessage(expirationPair);
  //
};
