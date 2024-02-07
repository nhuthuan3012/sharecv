import { SelectOption } from "@/common/components/control/select/types";

export const industries: readonly SelectOption[] = [
    { value: "Education", label: "Education" },
    { value: "Construction", label: "Construction" },
    { value: "Design", label: "Design" },
    { value: "Corporate Services", label: "Corporate Services" },
    { value: "Retail", label: "Retail" },
    { value: "Energy & Mining", label: "Energy & Mining" },
    { value: "Manufacturing", label: "Manufacturing" },
    { value: "Finance", label: "Finance" },
    { value: "Recreation & Travel", label: "Recreation & Travel" },
    { value: "Arts", label: "Arts" },
    { value: "Health Care", label: "Health Care" },
    { value: "Hardware & Networking", label: "Hardware & Networking" },
    { value: "Software & IT Services", label: "Software & IT Services" },
    { value: "Real Estate", label: "Real Estate" },
    { value: "Legal", label: "Legal" },
    { value: "Agriculture", label: "Agriculture" },
    { value: "Media & Communications", label: "Media & Communications" },
    { value: "Transportation & Logistics", label: "Transportation & Logistics" },
    { value: "Entertainment", label: "Entertainment" },
    { value: "Wellness & Fitness", label: "Wellness & Fitness" },
    { value: "Public Safety", label: "Public Safety" },
    { value: "Public Administration", label: "Public Administration" },
  ];

export const skills: readonly SelectOption[] = [
  { value: "Analyze Data", label: "Analyze Data" },
  { value: "Báo cáo", label: "Báo cáo" },
  { value: "Chính sách", label: "Chính sách" },
  { value: "Đàm phán", label: "Đàm phán" },
  { value: "Đào tạo/ Huấn luyện", label: "Đào tạo/ Huấn luyện" },
  { value: "Dự báo", label: "Dự báo" },
  { value: "Giải quyết vấn đề", label: "Giải quyết vấn đề" },
  { value: "Hỗ trợ nhân viên", label: "Hỗ trợ nhân viên" },
  { value: "Hoạch định chiến lược", label: "Hoạch định chiến lược" },
  { value: "Kiểm soát nội bộ", label: "Kiểm soát nội bộ" },
  { value: "Làm việc độc lập", label: "Làm việc độc lập" },
  { value: "Lãnh đạo", label: "Lãnh đạo" },
  { value: "Phân tích", label: "Phân tích" },
  { value: "Phát triển đội ngũ", label: "Phát triển đội ngũ" },
  { value: "Phỏng vấn", label: "Phỏng vấn" },
  { value: "Predict trends", label: "Predict trends" },
  { value: "Quản trị nhân sự", label: "Quản trị nhân sự" },
  { value: "Sáng tạo và linh hoạt", label: "Sáng tạo và linh hoạt" },
  { value: "Thiết kế", label: "Thiết kế" },
  { value: "Thiết lập mục tiêu", label: "Thiết lập mục tiêu" },
  { value: "Trình bày", label: "Trình bày" },
  { value: "Truyền cảm hứng", label: "Truyền cảm hứng" },
  { value: "Truyền thông", label: "Truyền thông" },
  { value: "Tư vấn khách hàng", label: "Tư vấn khách hàng" },
  { value: "Tuyển dụng", label: "Tuyển dụng" },
  { value: "Xây dựng đội ngũ", label: "Xây dựng đội ngũ" },
]

export const jobType: readonly SelectOption[] = [
    { value: "fulltime", label: "Toàn thời gian" },
    { value: "parttime", label: "Bán thời gian" }, 
]

export const skill: readonly SelectOption[] = [
    { value: "fulltime", label: "Toàn thời gian" },
    { value: "parttime", label: "Bán thời gian" }, 
]

export const gender: readonly SelectOption[] = [
    { value: "male", label: "Nam" },
    { value: "female", label: "Nữ" },
    { value: "both", label: "Cả hai" },
  ];

  export const daysOfWeek: readonly SelectOption[] = [
    { value: "Mon", label: "Thứ 2" },
    { value: "Tues", label: "Thứ 3" },
    { value: "Wed", label: "Thứ 4" },
    { value: "Thur", label: "Thứ 5" },
    { value: "Fri", label: "Thứ 6" },
    { value: "Sat", label: "Thứ 7" },
    { value: "Sun", label: "Chủ Nhật" },
  ];

  export const jobLevelOpt: readonly SelectOption[]  = [
    { value: "Internship", label: "Internship" },
    { value: "Fresher", label: "Fresher" },
    { value: "Junior", label: "Junior" },
    { value: "Senior", label: "Senior" },
    { value: "Team Leader", label: "Team Leader" },
    { value: "Manager", label: "Manager" },
    { value: "Director", label: "Director" },
    { value: "Other", label: "Other" },
  ];
  
  export const responsibilityOpt: readonly SelectOption[] = [
    { value: "Develop and maintain web applications", label: "Develop and maintain web applications" },
    { value: "Develop and maintain mobile applications", label: "Develop and maintain mobile applications" },
    { value: "Develop and maintain APIs", label: "Develop and maintain APIs" },
    { value: "Develop and maintain web services", label: "Develop and maintain web services" },
    { value: "Develop and maintain microservices", label: "Develop and maintain microservices" },
    { value: "Develop and maintain chatbots", label: "Develop and maintain chatbots" },
    { value: "Develop and maintain AI models", label: "Develop and maintain AI models" },
    { value: "Develop and maintain data pipelines", label: "Develop and maintain data pipelines" },
    { value: "Develop and maintain data visualization", label: "Develop and maintain data visualization" },
    { value: "Develop and maintain data warehouse", label: "Develop and maintain data warehouse" },
    { value: "Develop and maintain data mining", label: "Develop and maintain data mining" },
    { value: "Develop and maintain data analytics", label: "Develop and maintain data analytics" },
    { value: "Develop and maintain data science", label: "Develop and maintain data science" },
    { value: "Develop and maintain blockchain", label: "Develop and maintain blockchain" },
    { value: "Develop and maintain cyber security", label: "Develop and maintain cyber security" },
    { value: "Develop and maintain embedded systems", label: "Develop and maintain embedded systems" },
    { value: "Develop and maintain other systems", label: "Develop and maintain other systems" },
    { value: "Other", label: "Other" },
  ];