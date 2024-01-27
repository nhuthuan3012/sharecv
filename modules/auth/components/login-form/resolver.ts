import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

export const resolver = yupResolver(
  object().shape({
    username: string().email("Email không đúng định dạng").required("Email không được để trống"),
    password: string()
      .required("Mật khẩu phải có tối thiểu 6 ký tự")
      .min(6, "Mật khẩu phải có tối thiểu 6 ký tự"),
  })
);
