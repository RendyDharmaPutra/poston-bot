import { Context } from "grammy";

export const savePostService = async (ctx: Context, url: string) => {
  const telegramId = ctx.from?.id;
  console.log(`Saving post: ${url} for user: ${telegramId}`);

  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 3000));
};
