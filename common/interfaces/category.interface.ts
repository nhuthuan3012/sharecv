export interface IProductCategory {
  id: number;
  parent_id: number | null;
  name: string;
  slug: string;
  image: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}
