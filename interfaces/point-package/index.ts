export interface PointPackage {
  package_id: number;
  point: number;
  price: number;
  currency: string;
}

export interface IListPointRespone {
  point_package: PointPackage[];
  [key: string]: any;
}

export interface IPointBuyingHistory {
  transaction_id: number;
  company_logo: string;
  company_name: string;
  point_package_name: string;
  price: number;
  quantity: number;
  total_price: number;
  transaction_form: string;
  transaction_date: string;
}

export interface IPointHistoryListResponse {
  message: string;
  data: {
    total_pages: number;
    total_items: number;
    wallet_point?: number;
    item_lst: IPointBuyingHistory[];
  };
}
