"use client";

import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { IUserLogin } from "../../types";
import { resolver } from "./resolver";

// cookies
import { getRole } from "@/common/helpers/setCookies";

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import {
  Email,
  EmailOutlined,
  Lock,
  LockOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useState } from "react";
import { login } from "@/common/apis/auth";
import { setAccessCookies } from "@/common/helpers/setCookies";

export const LoginForm = ({
  redirect,
  onSuccess,
}: {
  redirect?: string;
  onSuccess?: () => void;
}) => {
  const navigate = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isDirty = false, isValid = true },
  } = useForm<IUserLogin>({
    resolver,
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit = handleSubmit(async (data) => {
    const res = await login(data);

    if (res.status !== 200) {
      console.log(res)
      setError("root", { message: "Đăng nhập thất bại" });
      return;
    }

    setAccessCookies(res.data);

    console.log(res)

    // if (redirect) {
    //   return navigate.replace(redirect);
    // }

    if (onSuccess) {
      return onSuccess();
    }

    // window.location.reload();

    console.log(getRole());

    if (getRole() === "collaborator") {
      navigate.replace("/posting-job/job-list-ctv");
    } else if (getRole() === "recruiter") {
      navigate.replace("/posting-job/uv-list-ntd");
    } else if (getRole() === "admin") {
      navigate.replace("/posting-job/uv-list-admin");
    }

  });

  return (
    <form onSubmit={onSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        className="grid grid-cols-1 gap-9"
      >
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <Box>
              <Typography className="font-bold">Email</Typography>
              <OutlinedInput
                id="email"
                {...field}
                fullWidth
                error={errors.username ? true : false}
                startAdornment={
                  <InputAdornment position="start">
                    <EmailOutlined />
                  </InputAdornment>
                }
              />
              <Typography variant="inherit" color={"error"}>
                {errors.username?.message}
              </Typography>
            </Box>
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Box>
              <Typography className="font-bold">Mật khẩu</Typography>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                {...field}
                fullWidth
                error={errors.password ? true : false}
                startAdornment={
                  <InputAdornment position="start">
                    <LockOutlined />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <Typography variant="inherit" color={"error"}>
                {errors.password?.message}
              </Typography>
            </Box>
          )}
        />
        <Box display="flex" justifyContent="end">
          <Typography
            className="text-primary hover:underline hover:text-blue-500 hover:cursor-pointer"
            sx={{}}
          >
            Quên mật khẩu
          </Typography>
        </Box>

        <Button
          type="submit"
          className="hover:text-primary"
          disabled={isDirty && !isValid}
          variant="contained"
          sx={{ textTransform: "none", py: 1 }}
        >
          <Typography className="font-bold">Đăng nhập</Typography>
        </Button>
      </Box>
    </form>
  );
};
