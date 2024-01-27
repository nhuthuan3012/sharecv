export interface IOrder {
  id: number;
  code: string;
  created_at: Date;
  status: number;
  total: number;
}

export type IOrders = IOrder[];

export interface IOrderRequest {
  items: {
    product_id: number;
    variant_id: number;
    quantity: number;
  }[];
  first_name: string;
  last_name: string;
  company: string;
  email_address: string;
  phone: string;
  city: string;
  address: string;
  coupon: string;
  note: string;
  method_payment: string;
  total_money: number;
  total_money_sale: number;
}
