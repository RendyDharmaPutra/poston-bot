import { Context } from "grammy";
import { isValidUrl } from "../../utils/validate";
import { listPostHService, savePostService } from "../../services/post.service";
import { listPostPresenter } from "../../presenters/posts/posts.presenter";

export const savePostHandler = async (ctx: Context) => {
  // Fetch the command argument if present, otherwise use the text directly.
  const text = ctx.match ?? ctx.message?.text;

  if (!text || !isValidUrl(text.toString()))
    return ctx.reply(
      "Silahkan kirimkan url postingan yang valid untuk disimpan.\nContoh: https://www.instagram.com/p/xxxxx/"
    );

  const msg = await ctx.reply("Sedang menyimpan postingan...");

  const result = await savePostService(ctx.from?.id, text.toString());

  await ctx.api.editMessageText(msg.chat.id, msg.message_id, result.message);
};

export const listPostHandler = async (ctx: Context) => {
  const msg = await ctx.reply("Sedang memuat postingan...");

  const result = await listPostHService(ctx.from?.id);

  const message = listPostPresenter(result.data, result.meta);

  await ctx.api.editMessageText(msg.chat.id, msg.message_id, message, {
    parse_mode: "HTML",
  });
};
