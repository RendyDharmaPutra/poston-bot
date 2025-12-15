import { isFailed, isValidationFailed } from "../types/api/api-response.guard";
import { savePostRepo } from "../repositories/post.repo";
import { AppError } from "../utils/errors";

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
