import { getDataAxios } from "./axios";
import { UserModel, UserToken } from "./types";

const api = getDataAxios();

export const login = async (
  username: string,
  password: string
): Promise<UserToken> => {
  const response = await api.post<UserToken>("/auth/login", {
    params: { username, password },
  });
  return response.data;
};

export const logout = async (): Promise<void> => {
  await api.get<void>("/account/logout");
};

// export const getUserData = async (): Promise<UserModel> => {
//   const request = await api.get<UserModel>("/account/user");
//   return request.data;
// };
