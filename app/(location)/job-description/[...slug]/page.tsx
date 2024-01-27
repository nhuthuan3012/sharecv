"use client";
import { getCookie } from "@/common/helpers/getCokkies";
import { getRole, removeAccessCookies } from "@/common/helpers/setCookies";
import { Box, Button, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import JobDescription from "@/modules/posting-job/page/job-description/JobDescription";
import { getAdminJobDetail, getCollaboratorJobDetail, getRecruiterJobDetail } from "@/common/apis/job-description";
import { IJobDetailResponse } from "@/common/interfaces/response.interface";
import { useEffect, useState } from "react";

const initialForm: IJobDetailResponse = {
  company_logo: "",
  company_name: "",
  company_cover_image: "",
  status: "",
  job_title: "",
  industry: "",
  gender: "",
  job_type: "",
  skills: [""],
  received_job_time: null,
  working_time: null,
  description: null,
  requirement: null,
  benefits: [],
  levels: null,
  roles: null,
  yoe: null,
  num_recruit: null,
  education: null,
  language_certificate: null,
  other_certificate: [
    {
      certificate_name: "",
      certificate_level: "",
    },
  ],
  min_salary: 0,
  max_salary: 0,
  address: "",
  city: "",
  country: "",
  admin_decline_reason: "",
  descriptions: null,
  requirements: null,
};

function JobDescriptionPage({ params }: { params: { slug: string } }) {
  const user_role = params.slug[0];
  const cv_id = params.slug[1];
  // if (!getCookie("token")) {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }
  const [data, setData] = useState<IJobDetailResponse>(initialForm);
  useEffect(() => {
    try {
      if (getRole() === "collaborator") {
        getCollaboratorJobDetail(cv_id).then((res) => {
          setData(res.data.data);
          console.log(res);
        });
      }
      else if (getRole() === "recruiter") {
        getRecruiterJobDetail(cv_id).then((res) => {
          setData(res.data.data);
          console.log(res);
        });
      }
      else if (getRole() === "admin") {
        getAdminJobDetail(cv_id).then((res) => {
          setData(res.data.data);
          console.log(res);
        });
      }
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ overflow: "auto" }}
    >
      <JobDescription data={data} role={user_role} />
    </Box>
  );
}

export default JobDescriptionPage;
