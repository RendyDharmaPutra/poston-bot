import { Bot } from "grammy";
import { listPostsHandler, savePostHandler } from "../handlers/posts.handler";
import { startHandler } from "../handlers/common.handler";
import { COMMANDS } from "../../constants/commands";

export const registerCommands = (bot: Bot) => {
  bot.command(COMMANDS.start, startHandler);
  bot.command(COMMANDS.help, async (ctx) => {
    await ctx.reply(
      "Kirim URL untuk disimpan.\nGunakan /list untuk melihat daftar post."
    );
  });

  bot.command(COMMANDS.list, (ctx) => listPostsHandler(ctx));
  bot.command(COMMANDS.save, savePostHandler);

  bot.on("message", savePostHandler);

  bot.on("callback_query", async (ctx) => {
    const data = ctx.callbackQuery.data;
    await ctx.answerCallbackQuery();

    const [domain, value] = data?.split(":") ?? [];

    if (domain === "page") {
      listPostsHandler(ctx, Number(value), true);
    }
  });
};
