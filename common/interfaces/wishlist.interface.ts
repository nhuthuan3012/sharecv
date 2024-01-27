import { IStock } from "./stock.interface";

export interface IWishlistItem {
  product_id: number;

  image: number;

  name: string;

  price: number;

  price_sale: number;

  unit?: string;

  weight?: string;

  stock?: IStock;
}
