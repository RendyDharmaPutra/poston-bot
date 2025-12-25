import { Bot } from "grammy";
import { listPostsHandler, savePostHandler } from "../handlers/posts.handler";
import { helpHandler, startHandler } from "../handlers/common.handler";
import { COMMANDS } from "../../constants/commands";

export const registerCommands = (bot: Bot) => {
  bot.command(COMMANDS.start.command, startHandler);
  bot.command(COMMANDS.help.command, helpHandler);

  bot.command(COMMANDS.list.command, (ctx) => listPostsHandler(ctx));
  bot.command(COMMANDS.save.command, savePostHandler);

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
