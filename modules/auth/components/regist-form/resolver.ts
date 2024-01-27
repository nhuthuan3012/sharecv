import { yupResolver } from "@hookform/resolvers/yup";
import { object, ref, string } from "yup";

export const resolver = yupResolver(
  object().shape({
    fullname: string()
      .required("Họ và tên không được để trống")
      .min(2, "Họ và tên phải có độ dài từ 2 đến 50 kí tự")
      .max(50, "Họ và tên phải có độ dài từ 2 đến 50 kí tự"),
    email: string()
      .email("Email không đúng định dạng")
      .required("Email không được để trống"),
    phone: string().required("Bạn phải nhập số điện thoại"),
    password: string()
      .required("Mật khẩu phải có tối thiểu 6 ký tự")
      .min(6, "Mật khẩu phải có tối thiểu 6 ký tự"),
    password_again: string()
      .oneOf([ref("password")], "Mật khẩu xác nhận chưa đúng")
      .required("Bạn cần phải xác nhận lại mật khẩu"),
    role: string().required("Bạn cần phải nhận mã số thuế của công ty")
  })
);
