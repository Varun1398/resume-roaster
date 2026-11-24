import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadResumeApi, type RoastResponse } from "../Api/apiUtils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { AxiosError } from "axios";

const useUploadResume = () => {
  const [openSnackBar, setOpenSnackbar] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation<RoastResponse, AxiosError<{detail: string}>, FormData>({
    mutationFn: uploadResumeApi,
    onError: (err) => {
      setOpenSnackbar(true);
      console.error("Error", err);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["stats"],
      });
      navigate(`/roast/${data.id}`)
    },
  });
  return {
    ...mutation,
    openSnackBar,
    closeSnackBar: () => setOpenSnackbar(false),
  };
};

export default useUploadResume;
