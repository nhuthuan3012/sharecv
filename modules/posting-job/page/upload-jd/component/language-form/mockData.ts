import { SelectOption } from "@/common/components/control/select/types";

export const languageOpt: readonly SelectOption[] = [
  { value: "English", label: "EngLish" },
  { value: "Japan", label: "Japan" },
  { value: "Korean", label: "Korean" },
  { value: "Chinese", label: "Chinese" },
];

type CertificationOptions = {
    [key: string]: readonly SelectOption[];
  };

export const certiNameOpt: CertificationOptions = {
  English: [
    { value: "IELTS", label: "IELTS" },
    { value: "TOEIC", label: "TOEIC" },
  ],
  Japan: [
    { value: "N1", label: "N1" },
    { value: "N2", label: "N2" },
    { value: "N3", label: "N3" },
    { value: "N4", label: "N4" },
    { value: "N5", label: "N5" },
  ],
  Korean: [
    { value: "Topik_I", label: "Topik_I" },
    { value: "Topik_II", label: "Topik_II" },
  ],
  Chinese: [
    { value: "HSK-1", label: " HSK-1" },
    { value: "HSK-2", label: " HSK-2" },
    { value: "HSK-3", label: " HSK-3" },
    { value: "HSK-4", label: " HSK-4" },
    { value: "HSK-5", label: " HSK-5" },
  ],
};
