import { Bot } from "grammy";

export const registerCommands = (bot: Bot) => {
  bot.command("start", (ctx) => {
    ctx.reply("Hello!");
  });

  bot.command("help", async (ctx) => {
    await ctx.reply(
      "Kirim URL untuk disimpan.\nGunakan /posts untuk melihat daftar post."
    );
  });
};
