import { Bot, Context } from "grammy";
import { env } from "../config/env";
import { registerCommands } from "./register/commands";
import { registerGlobalErrorHandler } from "./register/error";
import { limit } from "@grammyjs/ratelimiter";

const bot = new Bot(env.BOT_TOKEN);

bot.use(
  limit({
    timeFrame: 5000, // 5 detik
    limit: 3,
    keyGenerator: (ctx: Context) => ctx.from?.id.toString(),
    onLimitExceeded: async (ctx: Context) => {
      await ctx.reply("⚠️ Terlalu banyak permintaan, tunggu 5 detik.");
    },
  })
);

registerCommands(bot);
registerGlobalErrorHandler(bot);

export default bot;
