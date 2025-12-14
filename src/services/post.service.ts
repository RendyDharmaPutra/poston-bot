import { savePostRepo } from "../repositories/post.repo";
import { AppError } from "../utils/errors";

export const savePostService = async (
  telegramId: number | undefined,
  url: string
) => {
  if (!telegramId)
    throw new AppError("Gagal menyimpan postingan", "Telegram id tidak valid");

  const result = await savePostRepo(url, telegramId);

  console.log(result.data);
};
