import { PostType } from "../../types/post.type";
import { MetaApiResponse } from "../../types/api/api-response.type";
import { postItemPresenter } from "./post-item.presenter";
import { emptyPostPresenter } from "./empty-post.presenter";

export function listPostPresenter(
  posts: PostType[],
  meta: MetaApiResponse
): string {
  if (posts.length === 0) return emptyPostPresenter();

  let text = `📚 <b>Post Tersimpan</b> (${meta.page}/${meta.lastPage})\n`;
  text += `────────────────────\n\n`;

  text += posts
    .map((post, i) =>
      postItemPresenter((meta.page - 1) * meta.limit + (i + 1), post)
    )
    .join("");

  return text.trim();
}
