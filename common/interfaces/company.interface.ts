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
    [key: string]: any;
  }