import { apiClient } from "../libs/api/client";
import { endpoints } from "../libs/api/endpoints";
import { authHeaders } from "../libs/api/client";
import { AxiosResponse } from "axios";
import { logger } from "../libs/logger";

export const savePostRepo = async (
  url: string,
  telegramId: number
): Promise<AxiosResponse> => {
  try {
    return await apiClient.post(
      endpoints.posts.root,
      { url },
      { headers: authHeaders(telegramId) }
    );
  } catch (error) {
    logger.error(error);

    throw new Error(String(error));
  }
};
