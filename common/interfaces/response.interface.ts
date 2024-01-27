import { ILanguageCertificates } from "./revaluate.interface";
import { ICart, ICartItems } from "./cart.interface";

export interface IMetadata {
  prev_page: number | null;
  current_page: number | null;
  next_page: number | null;
  total_page: number | null;
  total_products: number | null;
  limit: number | null;
  next?: number;
}

export interface IResponse<TEntity> {
  status: number;
  detail?: string | null;
  data?: TEntity | null;
  metadata?: IMetadata | null;
  status_code?: number;
}

export interface IPaginationResponse<TEntity>
  extends Omit<IResponse<TEntity>, "data"> {
  data: TEntity[] | null;
}

export interface IAuthResponse {
  status: number;

  access_token: string;

  token_type: "bearer" | "grant";

  role: "admin" | "recruiter" | "collaborator";

  detail?: string;
}

export interface ICompanyInfoResponse {
  company_name: string;
  industry: string;
  description: string;
  tax_code: string;
  phone: string;
  email: string;
  founded_year: number;
  company_size: number;
  address: string;
  city: string;
  country: string;
  logo: string;
  cover_image: string | null;
  company_images: string[] | null;
  company_video: string | null;
  linkedin: string | null;
  website: string | null;
  facebook: string | null;
  instagram: string | null;
  [key: string]: any;
}
export interface IJobDetailResponse {
  company_logo: string;
  company_name: string;
  company_cover_image: string;
  status: string;
  job_title: string ;
  industry: string ;
  gender: string ;
  job_type: string | null;
  skills: string[] | null;
  received_job_time: string | null;
  working_time: string | null;
  descriptions: string[] | null;
  requirements: string[] | null;
  benefits: string[]|null ;
  levels: string | null;
  roles: string | null;
  yoe: string | null;
  num_recruit: string | null;
  education: string[] | null;
  language_certificate: ILanguageCertificates[] | null;
  other_certificate: [
    {
      certificate_name: string;
      certificate_level: string;
    }
  ]|null;
  min_salary: number;
  max_salary: number;
  address: string;
  city: string;
  country: string;
  admin_decline_reason: string;
  [key: string]: any;
}

export interface IRegisterResponse {
  detail: string;
  data?: { id: string; email: string };
  status: number;
}

export interface ICartResponse {
  Cart: ICart;

  CartItem: ICartItems;
}

export interface IProductsResponse<TEntity> {
  products: TEntity[];

  metadata: {
    prev_page: number | null;

    current_page: number;

    next_page: number | null;

    total_page: number;

    limit: number;

    total_products: number;
  };
}
