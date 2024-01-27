import { IPrice } from "./price.interface";

export interface IProduct {
  id: number;
  name: string;
  image: string;

  slug: string;
  status: number;
  is_active: boolean;
  stock: number;
  price: IPrice;

  code?: string;
  category_id?: number;
  sale_count?: number;
  description?: string | null;
  ingredient?: string | null;
  note?: string | null;
  brand?: string | null;
  guide?: string | null;
  preserve?: string | null;
  made_by?: string | null;
  made_in?: string | null;
  image_list?: string[];
  vote_average_score?: number;

  price_min?: number;
  price_sale_min?: number;
  summary?: string;
}

export type IProducts = IProduct[];

export interface GetListProductParams {
  page: number;

  limit: number;
}

export interface GetListProductByCategoryIdParams {
  page: number;

  limit: number;

  category_id: string;

  brand?: string;

  newest?: boolean;

  orderBy?: string;
}

export interface GetSuggestProductParams {
  product_id: number;

  category_id: number;
}

export interface GetVoteProductParams {
  product_id: string;
}

export interface GetTagProductParams {
  product_id: string;
}
