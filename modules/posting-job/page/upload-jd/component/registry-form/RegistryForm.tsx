"use client";
import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ICompanyInfo } from "../../../../types";
import { addCompany } from "@/common/apis/posting-job";
import FileUpload from "../../../company-info/component/FileUpload";
import { ITitleImageItem } from "../../../../types";
import { HorizontalRule } from "@mui/icons-material";
import { IJobDetail } from "../../types";
function RegistryForm() {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }
  const [formImageList, setFormImageList] = useState<ITitleImageItem[]>([]);
  const [logo, setLogo] = useState<File[] | null>(null);
  const [coverImage, setCoverImage] = useState<File[] | null>(null);
  const [listImage, setListImage] = useState<File[] | null>(null);
  const [video, setVideo] = useState<File[] | null>(null);
  const [formData, setFormData] = useState(new FormData());
  
  const {
    control,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isDirty = false, isValid = true },
  } = useForm<IJobDetail>({
    // resolver,
  });
  const onSubmit = handleSubmit(async (data) => {
    // console.log("data",data)
    // const res = await addCompany(data);

    // if (res.status !== 200) {
    //   console.log(res);
    //   setError("root", { message: "Đăng nhập thất bại" });
    //   return;
    // }

    // console.log(res);
    window.location.reload();
  });
  return (
    <form style={{width:"100%"}} onSubmit={onSubmit}>
      <Box
        width="100%"
        px={5}
        py={5}
        className="grid grid-cols-12 gap-10"
        alignItems={"center"}
        justifyContent={"center"}
        sx={{borderRadius:"5px",backgroundColor: "rgba(217, 217, 217, 0.2)", }}
      >
        <Box
          className="col-span-12"
          height="100px"
          display="flex"
          flexDirection="row"
          alignItems={"center"}
          justifyContent={"left"}
        >
          <Typography variant="h4" className="text-primary font-bold">
            Thông tin công ty*
          </Typography>
        </Box>
        <Box
          className="col-span-6"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="job_title"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Tên công việc
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="job_title"
                  {...field}
                  fullWidth
                  error={errors.job_title ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.job_title?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-6"
          display="flex"
          flexDirection="row"
          justifyContent={"right"}
        >
          <Controller
            control={control}
            name="industry"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Ngành nghề
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="industry"
                  {...field}
                  fullWidth
                  error={errors.industry ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.industry?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-6"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="job_type"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Loại công việc
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="job_type"
                  {...field}
                  fullWidth
                  error={errors.job_type ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.job_type?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-6"
          display="flex"
          flexDirection="row"
          justifyContent={"right"}
        >
          <Controller
            control={control}
            name="skills"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Kỹ Năng
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="skills"
                  {...field}
                  fullWidth
                  error={errors.skills ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.skills?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-6"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="gender"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Giới tính
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="gender"
                  {...field}
                  fullWidth
                  error={errors.gender ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.gender?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-6"
          display="flex"
          flexDirection="row"
          justifyContent={"right"}
        >
          <Controller
            control={control}
            name="received_job_time"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Ngày bắt đầu nhận việc
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="received_job_time"
                  {...field}
                  fullWidth
                  error={errors.received_job_time ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.received_job_time?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-3"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="working_time"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Thời gian làm việc
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="working_time"
                  {...field}
                  fullWidth
                  error={errors.working_time ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.working_time?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-3"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="working_time"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Tên công ty
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="working_time"
                  {...field}
                  fullWidth
                  error={errors.working_time ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.working_time?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-3"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="working_time"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Tên công ty
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="working_time"
                  {...field}
                  fullWidth
                  error={errors.working_time ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.working_time?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-3"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="working_time"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Tên công ty
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="working_time"
                  {...field}
                  fullWidth
                  error={errors.working_time ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.working_time?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-12"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="descriptions"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Mô tả công việc
                </Typography>
                <TextField
                  multiline
                  rows={6}
                  label="Outlined"
                  sx={{
                    backgroundColor: "white",
                    width: "100%",
                    mt: 2,
                  }}
                  id="descriptions"
                  {...field}
                  fullWidth
                  error={errors.descriptions ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.descriptions?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-12"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="requirements"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Yêu cầu công việc
                </Typography>
                <TextField
                  multiline
                  rows={6}
                  label="Outlined"
                  sx={{
                    backgroundColor: "white",
                    width: "100%",
                    mt: 2,
                  }}
                  id="requirements"
                  {...field}
                  fullWidth
                  error={errors.requirement ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.requirements?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-12"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="benefits"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Quyền lợi
                </Typography>
                <TextField
                  multiline
                  rows={6}
                  label="Outlined"
                  sx={{
                    backgroundColor: "white",
                    width: "100%",
                    mt: 2,
                  }}
                  id="benefits"
                  {...field}
                  fullWidth
                  error={errors.benefits ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.benefits?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-6"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="levels"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Cấp bậc đảm nhiệm
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="levels"
                  {...field}
                  fullWidth
                  error={errors.levels ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.levels?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-6"
          display="flex"
          flexDirection="row"
          justifyContent={"right"}
        >
          <Controller
            control={control}
            name="roles"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Vai trò đảm nhiệm
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="roles"
                  {...field}
                  fullWidth
                  error={errors.roles ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.roles?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-3"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="yoe"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Số năm kinh nghiệm
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="yoe"
                  {...field}
                  fullWidth
                  error={errors.yoe ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.yoe?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        {/* <div className=" flex justify-center items-center">
              <HorizontalRule />
            </div> */}
        <Box
          className="col-span-3"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="yoe"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Tên công ty
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="yoe"
                  {...field}
                  fullWidth
                  error={errors.yoe ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.yoe?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-6"
          display="flex"
          flexDirection="row"
          justifyContent={"right"}
        >
          <Controller
            control={control}
            name="num_recruit"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Số lượng tuyển dụng
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="num_recruit"
                  {...field}
                  fullWidth
                  error={errors.num_recruit ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.num_recruit?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
      </Box>
      <Box
        mt={5}
        width="100%"
        px={5}
        py={5}
        className="grid grid-cols-10 gap-10"
        alignItems={"center"}
        justifyContent={"center"}
        sx={{borderRadius:"5px",backgroundColor: "rgba(217, 217, 217, 0.2)", }}
      >
        <Box
          className="col-span-10"
          height="100px"
          display="flex"
          flexDirection="row"
          alignItems={"center"}
          justifyContent={"left"}
        >
          <Typography variant="h4" className="text-primary font-bold">
            Các nền tảng truyền thông
          </Typography>
        </Box>
        <Box
          className="col-span-5"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="linkedin"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Linkedin
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="linkedin"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {/* {errors.email?.message} */}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          display="flex"
          flexDirection="row"
          justifyContent={"right"}
        >
          <Controller
            control={control}
            name="website"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Website
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="website"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {/* {errors.email?.message} */}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="facebook"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Facebook
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="facebook"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {/* {errors.email?.message} */}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          display="flex"
          flexDirection="row"
          justifyContent={"right"}
        >
          <Controller
            control={control}
            name="instagram"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Instagram
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="instagram"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {/* {errors.email?.message} */}
                </Typography>
              </Box>
            )}
          />
        </Box>
      </Box>
      <Box width="100%" display="flex" justifyContent={"end"} py={5}>
        <Button variant="outlined" sx={{width:"200px", height:"50px", borderRadius:"20px"}} className="bg-primary border-primary text-white hover:border-primary hover:bg-white hover:text-primary" type="submit"> Lưu </Button>
      </Box>
    </form>
  );
}

export default RegistryForm;
