import { Experience } from "@/lib/redux/slices";

export interface ExperienceItemProps {
  index: number;
  newest: boolean;
  initialValues: Experience;
}
