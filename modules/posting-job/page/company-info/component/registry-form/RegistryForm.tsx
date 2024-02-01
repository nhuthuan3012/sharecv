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
import FileUpload from "../FileUpload";
import { ITitleImageItem } from "../../../../types";
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
  const handleLogoChange = (value: File[] | null) => {
    // setFile(imageList)
    console.log(value);
    if (value != null) {
      setValue("logo", value[0]);
      setLogo(value);
      console.log("logo",value[0])
    } else {
      setLogo(null);
    }
  };
  const handleCoverImageChange = (value: File[] | null) => {
    // setFile(imageList)
    console.log(value);
    if (value != null) {
      setValue("cover_image", value[0]);
      setCoverImage(value);
    } else {
      setCoverImage(null);
    }
  };
  const handleListImageChange = (value: File[] | null) => {
    // setFile(imageList)
    console.log(value);
    if (value != null) {
      setValue("company_images", value);
      setListImage(value);
    } else {
      setListImage(null);
    }
  };
  const handleVideoChange = (value: File[] | null) => {
    // setFile(imageList)
    console.log(value);
    if (value != null) {
      setValue("company_video", value[0]);
      setVideo(value);
    } else {
      setVideo(null);
    }
  };
  const {
    control,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isDirty = false, isValid = true },
  } = useForm<ICompanyInfo>({
    // resolver,
  });
  const onSubmit = handleSubmit(async (data) => {
    console.log("data",data)
    const res = await addCompany(data);

    if (res.status !== 200) {
      console.log(res);
      setError("root", { message: "Đăng nhập thất bại" });
      return;
    }

    console.log(res);
    window.location.reload();
  });
  return (
    <form style={{width:"100%"}} onSubmit={onSubmit}>
      <Box
        width="100%"
        px={5}
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
            Thông tin công ty*
          </Typography>
        </Box>
        <Box
          className="col-span-3"
          height="400px"
          display="flex"
          flexDirection="row"
          //   alignItems={"center"}
          justifyContent={"left"}
        >
          <FileUpload
            fileId="logo"
            type={"image"}
            file={logo}
            isMultiple={false}
            title="Logo công ty"
            decription="tối đa"
            onChange={handleLogoChange}
          />
        </Box>
        <Box
          className="col-span-7"
          height="400px"
          display="flex"
          flexDirection="row"
          //   alignItems={"center"}
          justifyContent={"left"}
        >
          <FileUpload
            fileId={"cover_image"}
            title="Ảnh bìa"
            file={coverImage}
            decription="tối đa"
            onChange={handleCoverImageChange}
            isMultiple={false}
            type={"image"}
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
            name="company_name"
            render={({ field }) => (
              <Box width="90%">
                <Typography className="font-bold text-primary">
                  Tên công ty
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="company_name"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          // height="100px"
          display="flex"
          flexDirection="row"
          justifyContent={"right"}
        >
          <Controller
            control={control}
            name="industry"
            render={({ field }) => (
              <Box width="90%">
                <Typography className="font-bold text-primary">
                  Ngành nghề
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="industry"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                  //   startAdornment={
                  //     <InputAdornment position="start">
                  //       <EmailOutlined />
                  //     </InputAdornment>
                  //   }
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-10"
          // height="300px"
          display="flex"
          flexDirection="row"
          //   alignItems={"center"}
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Mô tả công ty
                </Typography>
                <TextField
                  multiline
                  rows={6}
                  label="Outlined"
                  sx={{
                    backgroundColor: "white",
                    // height: "90%",
                    width: "100%",
                    mt: 2,
                  }}
                  id="description"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          height="100px"
          display="flex"
          flexDirection="row"
          //   alignItems={"center"}
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Box width="90%">
                <Typography className="font-bold text-primary">
                  Email
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="email"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                  // startAdornment={
                  //   <InputAdornment position="start">
                  //     <EmailOutlined />
                  //   </InputAdornment>
                  // }
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          height="100px"
          display="flex"
          flexDirection="row"
          //   alignItems={"center"}
          justifyContent={"right"}
        >
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <Box width="90%">
                <Typography className="font-bold text-primary">
                  Số điện thoại
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="phone"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          height="100px"
          display="flex"
          flexDirection="row"
          //   alignItems={"center"}
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="founded_year"
            render={({ field }) => (
              <Box width="90%">
                <Typography className="font-bold text-primary">
                  Năm thành lập
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="founded_year"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          height="100px"
          display="flex"
          flexDirection="row"
          justifyContent={"right"}
        >
          <Controller
            control={control}
            name="company_size"
            render={({ field }) => (
              <Box width="90%">
                <Typography className="font-bold text-primary">
                  Quy mô
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="company_size"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          height="100px"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="tax_code"
            render={({ field }) => (
              <Box width="90%">
                <Typography className="font-bold text-primary">
                  Mã số thuế
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="tax_code"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-10"
          height="100px"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <Box width="100%">
                <Typography className="font-bold text-primary">
                  Địa chỉ
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="address"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          height="100px"
          display="flex"
          flexDirection="row"
          justifyContent={"left"}
        >
          <Controller
            control={control}
            name="city"
            render={({ field }) => (
              <Box width="90%">
                <Typography className="font-bold text-primary">
                  Tỉnh/Thành phố
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="city"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-5"
          height="100px"
          display="flex"
          flexDirection="row"
          justifyContent={"right"}
        >
          <Controller
            control={control}
            name="country"
            render={({ field }) => (
              <Box width="90%">
                <Typography className="font-bold text-primary">
                  Quốc gia
                </Typography>
                <TextField
                  sx={{ backgroundColor: "white", width: "100%" }}
                  id="country"
                  {...field}
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.email?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
        <Box
          className="col-span-10"
          height="400px"
          display="flex"
          flexDirection="row"
          //   alignItems={"center"}
          justifyContent={"left"}
        >
          <FileUpload
            fileId={"list_image"}
            title="Hình ảnh giới thiệu công ty"
            file={listImage}
            decription="tối đa"
            onChange={handleListImageChange}
            isMultiple={true}
            type={"image"}
          />
        </Box>
        <Box
          className="col-span-10"
          height="400px"
          display="flex"
          flexDirection="row"
          //   alignItems={"center"}
          justifyContent={"left"}
        >
          <FileUpload
            fileId={"video"}
            file={video}
            title={"Video giới thiệu công ty"}
            decription={""}
            onChange={handleVideoChange}
            type={"video"}
            isMultiple={false}
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
              <Box width="90%">
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
                  {errors.email?.message}
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
              <Box width="90%">
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
                  {errors.email?.message}
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
              <Box width="90%">
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
                  {errors.email?.message}
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
              <Box width="90%">
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
                  {errors.email?.message}
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
