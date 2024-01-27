"use client";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Link from "next/link";
import { getCompanyInfo, revaluate } from "@/common/apis/posting-job";
import { useEffect, useState, useCallback } from "react";
import { ICompanyInfo, ICompanyInfoResponse, ValuateCV } from "@/common/interfaces";
import { Controller, useForm } from "react-hook-form";
import { ILanguageCertificates, IRevaluate } from "@/common/interfaces";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const initialCertificates: ILanguageCertificates = {
  certificate_language: "",
  certificate_name: "",
  certificate_point_level: "",
};
const initialForm: ICompanyInfoResponse = {
  company_name: "",
  industry: "",
  description: "",
  tax_code: "",
  phone: "",
  email: "",
  founded_year: 0,
  company_size: 0,
  address: "",
  city: "",
  country: "",
  logo: "/Logo.png",
  cover_image: null,
  company_images: null,
  company_video: null,
  linkedin: null,
  website: null,
  facebook: null,
  instagram: null,
};
function RevaluateForm({ data }: { data: ValuateCV }) {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }
  const [certificatesList, setCertificatesList] = useState<
    ILanguageCertificates[]
  >(data.certificates);
  // const [certificatesList, setCertificatesList] =  useState<string[]>([""]);
  const [degreeList, setDegreeList] = useState<string[]>(data.degrees);
  const [level, setLevel] = useState<string>(data.hard_item.level? data.hard_item.level:"");
  const [currentSalary, setCurrentSalary] = useState<number>(data.hard_item.salary? Number(data.hard_item.salary):0);
  const [disableSala, setDisableSala] = useState<boolean>(false);
  const [disableLevel, setDisableLevel] = useState<boolean>(false);

  const handleLevelChange = (event: any) => {
    setLevel(event.target.value);
    setValue("level", event.target.value);
    if (event.target.value === "" || event.target.value === null) {
      setDisableSala(false);
    } else {
      setDisableSala(true);
    }
  };
  const handleSalaryChange = (event: any) => {
    if (
      event.target.value === 0 ||
      event.target.value === null ||
      event.target.value === ""
    ) {
      setCurrentSalary(0);
      setValue("current_salary", 0);
      setDisableLevel(false);
    } else {
      setCurrentSalary(event.target.value);
      console.log("salary", event.target.value)
      setValue("current_salary", event.target.value);
      setDisableLevel(true);
    }
  };
  const handleAddCerti = () => {
    const newValue: ILanguageCertificates = {
      certificate_language: "",
      certificate_name: "",
      certificate_point_level: "",
    };
    setCertificatesList([...certificatesList, newValue]);
  };
  const handleAddDegree = () => {
    setDegreeList([...degreeList, ""]);
  };

  // Hàm xử lý khi thay đổi giá trị của ô nhập thông tin
  const handleDegreeChange = (index: number, event: any) => {
    const newList = [...degreeList];
    newList[index] = event.target.value;
    setDegreeList(newList);
    setValue("degrees", newList);
  };
  const handleCerLanChange = (index: number, event: any) => {
    const newList = [...certificatesList];
    newList[index].certificate_language = event.target.value;
    setCertificatesList(newList);
    setValue("language_certificates", newList);
  };
  const handleCerNameChange = (index: number, event: any) => {
    const newList = [...certificatesList];
    newList[index].certificate_name = event.target.value;
    setCertificatesList(newList);
    setValue("language_certificates", newList);
  };
  const handleCerPointChange = (index: number, event: any) => {
    const newList = [...certificatesList];
    newList[index].certificate_point_level = event.target.value;
    setCertificatesList(newList);
    setValue("language_certificates", newList);
  };
  const handleRemoveCerti = (index: number) => {
    const newList = [...certificatesList];
    newList.splice(index, 1);
    setCertificatesList(newList);
    setValue("language_certificates", newList);
  };
  const handleRemoveDegree = (index: number) => {
    const newList = [...degreeList];
    newList.splice(index, 1);
    setDegreeList(newList);
    setValue("degrees", newList);
  };
  const {
    control,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isDirty = false, isValid = true },
  } = useForm<IRevaluate>({
    // resolver,
    defaultValues:{
      cv_id: data.cv_id,
      level: data.hard_item.level?data.hard_item.level:undefined,
      current_salary: data.hard_item.salary?Number(data.hard_item.salary):undefined,
      degrees: data.degrees,
      language_certificates: data.certificates
    }
  });
  const onSubmit = handleSubmit(async (data) => {
    console.log("DATAAAAAA", data);
    const res = await revaluate(data);

    if (res.status !== 200) {
      console.log(res);
      setError("root", { message: "Đăng nhập thất bại" });
      return;
    }

    console.log(res);
    window.location.reload();
  });
  // useEffect(() => {
  //   try {
  //     getCompanyInfo().then((res) => {
  //       setData(res.data.data);
  //       console.log(res);
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, []);
  return (
    <form style={{ width: "100%" }} onSubmit={onSubmit}>
      <Box
        display="flex"
        width="100%"
        flexDirection={"column"}
        alignItems={"top"}
        justifyContent={"right"}
      >
        <Box
          display="flex"
          width="100%"
          height="900px"
          flexDirection={"column"}
          alignItems={"top"}
          justifyContent={"right"}
          className="grid grid-cols-10 gap-2 border-primary bg-white"
          sx={{
            color: "black",
            border: 1,
            borderRadius: "20px",
            p: 5,
            overflow: "auto",
          }}
        >
          <Box display="flex" justifyContent={"center"} className="col-span-10">
            <Typography
              sx={{ fontSize: 30 }}
              className="font-bold text-primary"
            >
              Điểm cứng
            </Typography>
          </Box>
          <Box className={"col-span-10"}>
            <Typography
              sx={{ fontSize: 23 }}
              className="font-bold text-primary"
            >
              Cấp bậc hiện tại
            </Typography>
          </Box>
          <Box
            width="100%"
            display="flex"
            flexDirection={"column"}
            className="gap-3 col-span-10"
            justifyContent={"space-between"}
            // sx={{ border: 1, borderRadius: "20px" }}
            // p={2}
          >
            <Box pr={3} display="flex" flexDirection="row" width="100%">
              <OutlinedInput
                disabled={disableLevel}
                value={level}
                color="primary"
                className="border-primary"
                onChange={handleLevelChange}
                sx={{ width: "60%" }}
              />
              <Box ml="20%" width="55px">
                <TextField value="0.5">0.5</TextField>
              </Box>
            </Box>
          </Box>
          <Box className={"col-span-10"}>
            <Typography
              sx={{ fontSize: 23 }}
              className="font-bold text-primary"
            >
              Lương hiện tại
            </Typography>
          </Box>
          <Box
            width="100%"
            display="flex"
            flexDirection={"column"}
            className="gap-3 col-span-10"
            justifyContent={"space-between"}
            // sx={{ border: 1, borderRadius: "20px" }}
            mb={2}
          >
            <Box pr={3} display="flex" flexDirection="row" width="100%">
              <OutlinedInput
                disabled={disableSala}
                value={currentSalary}
                color="primary"
                className="border-primary"
                onChange={handleSalaryChange}
                sx={{ width: "60%" }}
              />
              <Box ml="20%" width="55px">
                <TextField value="0.5">0.5</TextField>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent={"center"}
            sx={{ borderTop: 1 }}
            className="col-span-10 border-primary"
          >
            <Typography
              mt={1}
              sx={{ fontSize: 30 }}
              className="font-bold text-primary"
            >
              Điểm cứng
            </Typography>
          </Box>
          <Box className="col-span-4">
            <Typography
              sx={{ fontSize: 23 }}
              className="font-bold text-primary"
            >
              Bằng cấp
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent={"start"}
            width="100%"
            className="col-span-6"
            pr={2}
          >
            <IconButton className="group" onClick={handleAddDegree}>
              <AddBoxOutlinedIcon className="group-hover:bg-green-400 group-hover:text-white text-green-400" />
            </IconButton>
          </Box>
          <Box
            display="flex"
            className={"col-span-10 gap-2"}
            flexDirection={"column"}
          >
            {degreeList.map((input, index) => (
              <Box
                width="100%"
                display="flex"
                flexDirection={"row"}
                className="gap-3"
                justifyContent={"space-between"}
                // sx={{ border: 1, borderRadius: "20px" }}
                // p={2}
                key={index}
              >
                <Box
                  pr={3}
                  sx={{ borderRight: 1, borderColor: "lightgray" }}
                  width="60%"
                >
                  <Select
                    className="bg-white"
                    defaultValue={""}
                    value={degreeList[index]}
                    labelId="demo-simple-select-label"
                    onChange={(event) => handleDegreeChange(index, event)}
                    sx={{ width: "100%" }}
                  >
                    <MenuItem value={"Bachelor"}>Cử nhân</MenuItem>
                    <MenuItem value={"Master"}>Thạc sĩ</MenuItem>
                    <MenuItem value={"Ph.D"}>Tiến sĩ</MenuItem>
                  </Select>
                </Box>
                <Box width="55px">
                  <TextField value="0.5">0.5</TextField>
                </Box>
                <IconButton
                  className="col-span-2"
                  onClick={() => handleRemoveDegree(index)}
                >
                  <CancelPresentationIcon className="text-red-500" />
                </IconButton>
              </Box>
            ))}
          </Box>
          <Box
            className="col-span-4"
            display="flex"
            flexDirection={"row"}
            alignItems={"center"}
          >
            <Typography
              sx={{ fontSize: 23 }}
              className="font-bold text-primary"
            >
              Ngoại ngữ
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent={"start"}
            width="100%"
            className="col-span-6"
            pr={2}
          >
            <IconButton className="group" onClick={handleAddCerti}>
              <AddBoxOutlinedIcon className="group-hover:bg-green-400 group-hover:text-white text-green-400" />
            </IconButton>
          </Box>
          <Box
            display="flex"
            className={"col-span-10 gap-5"}
            justifyContent={"space-between"}
            flexDirection={"column"}
          >
            {certificatesList.map((input, index) => (
              <Box
                width="100%"
                display="flex"
                flexDirection={"row"}
                // p={2}
                className="gap-3"
                justifyContent={"space-between"}
                // sx={{ border: 1, borderRadius: "20px" }}
                key={index}
              >
                <Box
                  width="60%"
                  display="flex"
                  flexDirection={"column"}
                  className="gap-3 border-light-gray"
                  sx={{ borderRight: 1, borderColor: "lightgray" }}
                  pr={3}
                >
                  <Box width="100%">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Choose Language
                      </InputLabel>
                      <Select
                        label="Choose Language"
                        className="bg-white"
                        defaultValue=""
                        value={certificatesList[index].certificate_language}
                        labelId="demo-simple-select-label"
                        onChange={(event) => handleCerLanChange(index, event)}
                        sx={{ width: "100%" }}
                      >
                        <MenuItem value={"English"}>Tiếng Anh</MenuItem>
                        <MenuItem value={"Japanese"}>Tiếng Nhật</MenuItem>
                        <MenuItem value={"Chinese"}>Tiếng Trung</MenuItem>
                        <MenuItem value={"Korean"}>Tiếng Hàn</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box width="100%">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Choose Cert
                      </InputLabel>
                      {certificatesList[index].certificate_language ===
                      "English" ? (
                        <Select
                          defaultValue={""}
                          label="Choose Cert"
                          labelId="demo-simple-select-label"
                          value={certificatesList[index].certificate_name}
                          onChange={(event) =>
                            handleCerNameChange(index, event)
                          }
                          sx={{ width: "100%" }}
                        >
                          <MenuItem value={"TOEIC"}>TOEIC</MenuItem>
                          <MenuItem value={"IELTS"}>IELTS</MenuItem>
                        </Select>
                      ) : certificatesList[index].certificate_language ===
                        "Korean" ? (
                        <Select
                          defaultValue={""}
                          label="Choose Cert"
                          labelId="demo-simple-select-label"
                          value={certificatesList[index].certificate_name}
                          onChange={(event) =>
                            handleCerNameChange(index, event)
                          }
                          sx={{ width: "100%" }}
                        >
                          <MenuItem value={"Topik_I"}>Topik_I</MenuItem>
                          <MenuItem value={"Topik_II"}>Topik_II</MenuItem>
                        </Select>
                      ) : (
                        <Select
                          disabled
                          defaultValue={""}
                          label="Choose Cert"
                          labelId="demo-simple-select-label"
                          value={certificatesList[index].certificate_name}
                          onChange={(event) =>
                            handleCerNameChange(index, event)
                          }
                          sx={{ width: "100%",color:"white" }}
                        >
                          <MenuItem value={""}>Choose Language First</MenuItem>
                        </Select>
                      )}
                    </FormControl>
                  </Box>
                  <Box width="100%">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Enter your point
                      </InputLabel>
                      <OutlinedInput
                        label="Enter your point"
                        value={certificatesList[index].certificate_point_level}
                        onChange={(event) => handleCerPointChange(index, event)}
                        color="primary"
                        className="border-primary"
                        sx={{ width: "100%" }}
                      />
                    </FormControl>
                  </Box>
                </Box>
                <Box
                  width="55px"
                  height="100%"
                  display={"flex"}
                  alignItems={"center"}
                >
                  <TextField value="0.5" sx={{ height: "55px" }}></TextField>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <IconButton
                    className="col-span-2"
                    onClick={() => handleRemoveCerti(index)}
                  >
                    <CancelPresentationIcon className="text-red-500" />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box width="100%" display="flex" my={2} justifyContent={"end"}>
          <Button
            variant="outlined"
            sx={{ width: "200px", height: "50px", borderRadius: "20px", ml: 3 }}
            className="bg-primary border-primary font-bold text-white hover:border-primary hover:bg-white hover:text-primary"
            type="submit"
          >
            Định giá
          </Button>
        </Box>
      </Box>
    </form>
  );
}

export default RevaluateForm;
