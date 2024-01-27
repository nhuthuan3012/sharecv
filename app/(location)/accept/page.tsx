"use client";

import { axiosClient } from "@/utils/axios";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

function AcceptPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  axiosClient
    .get(`/postjob/collaborator/get-candidate-reply/accept`, {
      params: {
        cv_id: id,
      },
    })
    .then((res) => {
      router.push("/home");
    });

  return;
}

export default AcceptPage;
