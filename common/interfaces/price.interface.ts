export interface IPrice {
  price: number;
  price_sale?: number;
  unit?: string | null;
  weight?: number | null;
}

export type IPrices = IPrice[];
