import { Project } from "@/lib/redux/slices";

export interface ProjectFormProps {
    name_project : string,
    start_date: "",
    end_date: "",
    awards: string[],
}

export interface ProjectItemProps {
    index: number,
    newest: boolean,
    initialValues: Project,
}
