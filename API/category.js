import { service } from "../utils/request";


export const getAll = (payload) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await service.get("/api/categories", payload);
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  };
  