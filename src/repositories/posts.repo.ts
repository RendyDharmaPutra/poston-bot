import { apiClient } from "../libs/api/client";
import { endpoints } from "../libs/api/endpoints";
import { authHeaders } from "../libs/api/client";
import { AxiosResponse } from "axios";
import { logger } from "../libs/logger";
import {
  MutationApiResponse,
  RetrieveApiResponse,
} from "../types/api/api-response.type";
import { PostType } from "../types/post.type";

export const listPostsRepo = async (
  telegramId: number
): Promise<AxiosResponse<RetrieveApiResponse<PostType[]>>> => {
  try {
    return await apiClient.get<RetrieveApiResponse<PostType[]>>(
      endpoints.posts.root,
      {
        headers: authHeaders(telegramId),
      }
    );
  } catch (error) {
    logger.error(error);

    throw new Error(String(error));
  }
};

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
