import { Context } from "grammy";

export const savePostHandler = async (ctx: Context) => {
  ctx.reply(`Input user: ${ctx.message?.text ?? "Tidak ada"}`);
};
