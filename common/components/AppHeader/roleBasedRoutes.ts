import { INavigation } from "@/common/interfaces/navigation.interface";

export const recruiterRoutes: INavigation[] = [
  {
    label: "Trang chủ",
    path: "/home",
  },
  {
    label: "Dịch vụ",
    path: "/parse-jd",
    // children: [
    //   {
    //     label: "Tìm kiếm",
    //     path: "/search-cv",
    //   },
    //   {
    //     label: "Tải lên CV",
    //     path: "/upload-cv",
    //   }
    // ]
  },
  {
    label: "Danh sách",
    path: "/uv-list-ntd",
  },
  {
    label: "Lịch phỏng vấn",
    path: "/interview-canlendar",
  },
  {
    label: "Mua điểm",
    path: "/make-a-payment",
  },
];

export const collaboratorRoutes: INavigation[] = [
  {
    label: "Trang chủ",
    path: "/home",
  },
  {
    label: "Danh sách",
    path: "/posting-job/job-list-ctv",
  },
  {
    label: "Lịch phỏng vấn",
    path: "/interview-canlendar",
  },
  {
    label: "Tải lên CV",
    path: "/upload-cv",
  },
];

export const adminRoutes: INavigation[] = [
  {
    label: "Trang chủ",
    path: "/home",
  },
  {
    label: "Danh sách công việc",
    path: "/job-list-admin",
  },
  {
    label: "Danh sách ứng viên",
    path: "/uv-list-admin",
  },
  {
    label: "Mua điểm",
    path: "/make-a-payment",
  },
];

export const defaultRoutes: INavigation[] = [
  {
    label: "Trang chủ",
    path: "/home",
  },
];