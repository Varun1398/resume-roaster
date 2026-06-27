import React from "react";
import axios from "axios";
import apiClient from "./Client";

export const uploadResumeApi = async (formData) => {
  const response = await apiClient.post("resume/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const getCountAndRecentRoastApi = async () => {
  const response = await apiClient.get("/getCountAndRecentRoast", {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};
