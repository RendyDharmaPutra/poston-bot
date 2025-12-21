import { Context } from "grammy";
import { isValidUrl } from "../../utils/validate";
import {
  listPostsService,
  savePostService,
} from "../../services/posts.service";
import { listPostsPresenter } from "../../presenters/posts/posts.presenter";
import { buildPagination } from "../../presenters/pagination.presenter";

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

export const listPostsHandler = async (ctx: Context, page = 1) => {
  const msg = await ctx.reply("Sedang memuat postingan...");

  const result = await listPostsService(ctx.from?.id, page);

  const pages = buildPagination(result.meta.page, result.meta.lastPage);
  const message = listPostsPresenter(result.data, result.meta);

  await ctx.api.editMessageText(msg.chat.id, msg.message_id, message, {
    parse_mode: "HTML",
    reply_markup: {
      ...pages,
    },
  });
};
