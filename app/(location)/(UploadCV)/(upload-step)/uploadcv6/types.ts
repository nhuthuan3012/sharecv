import { Certificate } from "@/lib/redux/slices";

export interface CertificateFormProps {
    language: string,
    certificate: string,
    level: string,
    start_date: string,
    end_date: string,
}

export interface CertificateItemProps {
    index: number,
    newest: boolean,
    initialValues: Certificate,
}

export const initialCertificateForm = {
    language: "",
    certificate: "",
    level: "",
    start_date: "",
    end_date: '2024-01-01 00:00:00',
}