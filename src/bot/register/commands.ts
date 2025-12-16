import { Bot } from "grammy";
import { listPostsHandler, savePostHandler } from "../handlers/posts.handler";

export const registerCommands = (bot: Bot) => {
  bot.command("start", (ctx) => {
    ctx.reply("Hello!");
  });

  bot.command("list", listPostsHandler);
  bot.command("save", savePostHandler);

  bot.command("help", async (ctx) => {
    await ctx.reply(
      "Kirim URL untuk disimpan.\nGunakan /list untuk melihat daftar post."
    );
  });

  bot.on("message", savePostHandler);
};
