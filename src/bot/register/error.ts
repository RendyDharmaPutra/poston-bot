import { Bot } from "grammy";
import { logger } from "../../libs/logger";
import { AppError } from "../../utils/errors";

export const registerGlobalErrorHandler = (bot: Bot) => {
  bot.catch(async (err) => {
    const ctx = err.ctx;
    const error = err.error;

    //   Expected error
    if (error instanceof AppError) {
      logger.error(`Expected Error: ${error}`);
      await ctx.reply(`❌ ${error.name}\n${error.message}`);

      return;
    }

    //   Unexpected error
    logger.error(`Unexpected Error: ${error}`);
    await ctx.reply(`⚠️ Terjadi kesalahan tidak diketahui`);
  });
};
