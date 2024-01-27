export interface IAddress {
  id: number;
  user_id: number;
  first_name: string;
  last_name: string;
  company_nane: string;
  city: string;
  address: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export type IAddresses = IAddress[];
