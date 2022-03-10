export interface ErrorResponse {
  key: number | null;
  message: string;
}

export interface UserModel {
  user: string;
}

export interface UserToken {
  token: string;
}

/** PRODUCT  */
export interface ProductDTO {
  id: number;
  title: string;
  price: number | null;
  category: string;
  description: string;
  image: string;
  rating: ProductRateDTO;
}

export interface ProductRateDTO {
  count: number;
  rate: number;
}

export interface CategoryDTO {
  name: string;
}

/** CART */
export interface CartDTO {
  id: number;
  userId: number;
  date: string | null;
  products: CartProductDTO[];
}

export interface CartProductDTO {
  productId: number;
  quantity: number;
}

/** USER */
export interface UserDTO {
  id: number;
  email: string;
  username: string;
  password: string;
  name: UserName;
  address: UserAddress;
}

export interface UserName {
  firstname: string;
  lastname: string;
}

export interface UserAddress {
  city: string;
  streets: string;
  number: number;
  zipcode: string;
  geolocation: UserAddressGeolocation;
  phone: string;
}

export interface UserAddressGeolocation {
  lat: string;
  long: string;
}

export interface LoginToken {
  token: string;
}
