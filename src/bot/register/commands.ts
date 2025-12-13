import { Bot } from "grammy";
import { savePostHandler } from "../handlers/post.handler";

export const registerCommands = (bot: Bot) => {
  bot.command("start", (ctx) => {
    ctx.reply("Hello!");
  });

  bot.on("message", savePostHandler);

  bot.command("help", async (ctx) => {
    await ctx.reply(
      "Kirim URL untuk disimpan.\nGunakan /posts untuk melihat daftar post."
    );
  });
};
