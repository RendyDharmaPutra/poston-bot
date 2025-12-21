import { isFailed, isValidationFailed } from "../types/api/api-response.guard";
import { listPostsRepo, savePostRepo } from "../repositories/posts.repo";
import { AppError } from "../utils/errors";

export const listPostsService = async (
  telegramId: number | undefined,
  page: number
) => {
  if (!telegramId)
    throw new AppError("Gagal memuat postingan", "Telegram id tidak valid");

  const response = await listPostsRepo(telegramId, page);
  const result = response.data;

  if (isFailed(result)) {
    throw new AppError(result.message, result.error);
  }

  return result;
};

export const savePostService = async (
  telegramId: number | undefined,
  url: string
) => {
  if (!telegramId)
    throw new AppError("Gagal menyimpan postingan", "Telegram id tidak valid");

  const response = await savePostRepo(url, telegramId);
  const result = response.data;

  if (isValidationFailed(result)) {
    throw new AppError(
      result.message,
      "Silahkan kirimkan url postingan yang valid untuk disimpan.\nContoh: https://www.instagram.com/p/xxxxx/"
    );
  } else if (isFailed(result)) {
    throw new AppError(result.message, result.error);
  }

  return result;
};
