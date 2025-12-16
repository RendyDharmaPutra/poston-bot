import { apiClient } from "../libs/api/client";
import { endpoints } from "../libs/api/endpoints";
import { authHeaders } from "../libs/api/client";
import { AxiosResponse } from "axios";
import { logger } from "../libs/logger";
import { MutationApiResponse } from "../types/api/api-response.type";

export const savePostRepo = async (
  url: string,
  telegramId: number
): Promise<AxiosResponse<MutationApiResponse>> => {
  try {
    return await apiClient.post<MutationApiResponse>(
      endpoints.posts.root,
      { url },
      { headers: authHeaders(telegramId) }
    );
  } catch (error) {
    logger.error(error);

    throw new Error(String(error));
  }
};
