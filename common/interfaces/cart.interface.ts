import { IPrice } from ".";

export interface ICartItem {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: IPrice;
  quantity: number;
  total: number;
}

export interface ICart {
  cart: ICartItem[];
  total_money: number;
}

export interface ICartCreate {
  variant_id: number;
}

export interface ICartUpdate {
  cart_item_id: number;
  quantity: number;
}

export type ICartItems = ICartItem[];
