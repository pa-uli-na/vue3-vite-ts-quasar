import { getDataAxios } from "./axios";
import { ProductDTO } from "./types";

const api = getDataAxios();

export const getProducts = async (): Promise<ProductDTO[]> => {
  const response = await api.get<ProductDTO[]>("/products");
  return response.data;
};
