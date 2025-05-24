import { ENDPOINTS } from "@/entities/constants/endpoints";
import { api } from "@/libs/axios";

export const getDashboard = async (params: unknown): Promise<unknown> => {
  const response = await api({
    method: "GET",
    url: ENDPOINTS.DASHBOARD,
    params,
  });
  return response.data;
};
