import { customAxios } from "lib/customAxios";

export const signup = async (id: string, name: string, password: string) => {
  const { data } = await customAxios.post("/api/user/signup", {
    id,
    name,
    password,
  });
  return data;
};

export const login = async (id: string, password: string) => {
  const { data } = await customAxios.post("/api/user/login", {
    id,
    password,
  });
  return data;
};
