"use client";
import { candidateInfoApi } from "@/common/apis/candidate-info";
import { IResume } from "@/modules/cv-info-ntd/resume.interface";
import CvInfoPage from "@/modules/cv-info-ntd/pages/CvInfoPage";
import { set } from "lodash";
import { useEffect, useState } from "react";
import { getRole } from "@/common/helpers/setCookies";

function CandidateInfoPage({ params }: { params: { id: string } }) {
  const initialData: IResume = {
    cv_id: 0,
    status: "",
    job_service: "",
    avatar: "",
    candidate_name: "",
    current_job: "",
    industry: "",
    birthday: new Date(),
    gender: "",
    objectives: [],
    email: "",
    phone: "",
    identification_code: "",
    address: "",
    city: "",
    country: "",
    linkedin: null,
    website: null,
    facebook: null,
    instagram: null,
    skills: [],
    total_point: 0,
    experience: [],
    educations: [],
    projects: [],
    awards: [],
    certificates: {
      language_certificates: [],
      other_certificate: [],
    },
  };

  const [candidateData, setCandidateData] = useState<IResume>(initialData);

  useEffect(() => {
    if (!params.id) return;
    (async () => {
      try {
        const res = await candidateInfoApi.getById(parseInt(params.id),getRole());
        setCandidateData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params]);

  return (
    <div className="w-full flex justify-center">
      <CvInfoPage {...candidateData} />
    </div>
  );
}

export default CandidateInfoPage;
