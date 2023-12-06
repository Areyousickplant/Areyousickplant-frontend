import { customAxios } from "lib/customAxios";

export const userInfo = async () => {
  const { data } = await customAxios.get("/api/user/info");
  return data;
};

export const userPlantScore = async () => {
  const { data } = await customAxios.get("/api/user-plant/score");
  return data;
};

export const userPlantStatusInfo = async () => {
  const { data } = await customAxios.get("/api/user-plant/status/info");
  return data;
};

export const plantIdeal = async () => {
  const { data } = await customAxios.get("/api/plant/ideal");
  return data;
};
