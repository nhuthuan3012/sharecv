import { Award } from "@/lib/redux/slices";

export interface AwardFormProps {
    name_award: string,
    start_date: string,
    description: string,
}

export interface AwardItemProps {
    index: number,
    newest: boolean,
    initialValues: Award,
}

export const initialAwardForm = {
    name_award: "",
    start_date: "",
    description: "",
}