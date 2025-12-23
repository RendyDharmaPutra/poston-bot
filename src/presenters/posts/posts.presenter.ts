import { PostType } from "../../types/post.type";
import { MetaApiResponse } from "../../types/api/api-response.type";
import { postItemPresenter } from "./post-item.presenter";
import { emptyPostPresenter } from "./empty-post.presenter";
import { buildPagination } from "../pagination.presenter";

export function listPostsPresenter(
  posts: PostType[],
  meta: MetaApiResponse
): {
  message: string;
  pages: {
    inline_keyboard: {
      text: string;
      callback_data: string;
    }[][];
  };
} {
  if (posts.length === 0)
    return { message: emptyPostPresenter(), pages: { inline_keyboard: [] } };

  let message = `📚 <b>Post Tersimpan</b> (${meta.page}/${meta.lastPage})\n`;
  message += `───────────────────\n\n`;

  message += posts
    .map((post, i) =>
      postItemPresenter((meta.page - 1) * meta.limit + (i + 1), post)
    )
    .join("");

  const pages = buildPagination(meta.page, meta.lastPage);

  return { message, pages };
}
