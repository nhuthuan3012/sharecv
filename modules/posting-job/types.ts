// import { ITitleImageItem } from "./component/ImageUpload/types";

export interface ICompanyInfo {
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
  logo: File|null;
  cover_image: File|null;
  company_images: File[]|null;
  company_video: File|null;
  linkedin: string | null;
  website: string | null;
  facebook: string | null;
  instagram: string | null;
}

export interface ILanguageCertificates {
  certificate_language: string;
  certificate_name: string;
  certificate_point_level: string;
}

export interface IRevaluate {
  language_certificates: ILanguageCertificates[];
  degree: string[];
}

export interface ITitleImageItem {
  url: string;
  file: File | null;
}
