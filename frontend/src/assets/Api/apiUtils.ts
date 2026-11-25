import apiClient from "./Client";

export interface RoastResponse{
  id: string, 
  status: string,
  status_code: number,
  data : { roast : Roast}
}

export interface Roast {
  careerStatus: string,
  categories: RoastCategory[],
  jobTitle: string,
  name: string,
  roastScore: string,
  summary: string,
  survivalTip: string
}

export interface RoastCategory{
  skill: string,
  score: number,
  skillRoast: string
}

export interface GetCount{
  status: string,
  status_code: number,
  roastCount: number,
  recentRoast: RecentRoast
}

export interface RecentRoast{
  id: string,
  jobTitle: string,
  roastScore: string,
  careerStatus: string,
  experience: number
}

export const uploadResumeApi = async (formData: FormData): Promise<RoastResponse> => {
  const response = await apiClient.post<RoastResponse>("resume/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const getCountAndRecentRoastApi = async (): Promise<GetCount> => {
  const response = await apiClient.get<GetCount>("/getCountAndRecentRoast", {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export const getRoastById = async (roastId: string ): Promise<RoastResponse> => {
  const response = await apiClient.get<RoastResponse>(`/roast/${roastId}`, {
    headers: { "Content-Type": "application/json" },
  });

  return response.data;
};
