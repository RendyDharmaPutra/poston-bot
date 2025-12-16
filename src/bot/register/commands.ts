import { Bot } from "grammy";
import { listPostHandler, savePostHandler } from "../handlers/post.handler";

export const registerCommands = (bot: Bot) => {
  bot.command("start", (ctx) => {
    ctx.reply("Hello!");
  });

  bot.command("list", listPostHandler);
  bot.command("save", savePostHandler);

  bot.command("help", async (ctx) => {
    await ctx.reply(
      "Kirim URL untuk disimpan.\nGunakan /list untuk melihat daftar post."
    );
  });

  bot.on("message", savePostHandler);
};
