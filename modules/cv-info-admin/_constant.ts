interface KeyValue {
  [key: string]: string;
}

export const RESUME_STATUS: KeyValue = {
  "pricing_approved": "Định điểm thành công",
  "pricing_rejected": "Định điểm thất bại",
  "ai_matching_approved": "AI duyệt thành công",
  "ai_matching_rejected": "AI duyệt thất bại",
  "waiting_candidate_accept": "Đợi ứng viên chấp nhận",
  "candidate_accepted": "Ứng viên chấp nhận",
  "candidate_declined": "Ứng viên từ chối",
  "admin_matching_approved": "Admin duyệt thành công",
  "admin_matching_rejected": "Admin duyệt thất bại",
  "waiting_accept_interview": "Đợi ứng viên phỏng vấn",
  "candidate_accepted_interview": "Ứng viên chấp nhận phỏng vấn",
  "candidate_rejected_interview": "Ứng viên từ chối phỏng vấn",
} as const;

export const GENDER: KeyValue = {
  "male": "Nam",
  "female": "Nữ",
} as const;