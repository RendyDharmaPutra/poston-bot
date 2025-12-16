import { formatRelativeTime } from "../../utils/time-format";
import { truncate } from "../../utils/string";
import { PostType } from "../../types/post.type";

export const postItemPresenter = (index: number, post: PostType) => {
  return (
    `${index}. <b>${truncate(post.caption)}</b>\n` +
    `🔗 <a href="${post.url}">${post.url}</a>\n` +
    `🏷 ${post.platform} • ⏱ ${formatRelativeTime(post.createdAt)}\n\n`
  );
};
