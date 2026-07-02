import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadResumeApi } from "../Api/apiUtils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useUploadResume = () => {
  const [openSnackBar, setOpenSnackbar] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: uploadResumeApi,
    onError: (err) => {
      setOpenSnackbar(true);
      console.error("Error", err);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["stats"],
      });
      navigate("/roast", { state: { roast: data.data.roast } });
    },
  });
  return {
    ...mutation,
    openSnackBar,
    closeSnackBar: () => setOpenSnackbar(false),
  };
};

export default useUploadResume;
