export interface ILanguageCertificates {
  certificate_language: string;
  certificate_name: string;
  certificate_point_level: string;
}

export interface IRevaluate {
  cv_id: number;
  level: string;
  current_salary: number;
  language_certificates: ILanguageCertificates[];
  degree: string[];
  [key: string]: any;
}

export interface IConfirm {
  hard_item: string,
  hard_point: 0,
  degrees: string[];
  degree_point: number;
  certificates: ILanguageCertificates[];
  certificates_point: number;
  total_point: number;
}

export interface ValuateCV {
  cv_id: number;
  cv_pdf: string;
  hard_item: { level: string | null; salary: string | null };
  hard_point: number;
  degrees: string[];
  degree_point: number;
  certificates: ILanguageCertificates[];
  certificates_point: number;
  total_point: number;
  [key: string]: any;
}
