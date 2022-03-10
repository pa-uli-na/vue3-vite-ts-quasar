import { getDataAxios } from "./axios";
// import { UserModel } from "./types";

const api = getDataAxios();

export const login = async (authorization: string): Promise<void> => {
  await api.get<void>("/account/login", {
    headers: {
      Authorization: `Basic ${authorization}`,
    },
  });
};

export const logout = async (): Promise<void> => {
  await api.get<void>("/account/logout");
};

// export const getUserData = async (): Promise<UserModel> => {
//   const request = await api.get<UserModel>("/account/user");
//   return request.data;
// };
