export const savePostService = async (
  telegramId: number | undefined,
  url: string
) => {
  console.log(`Saving post: ${url} for user: ${telegramId}`);

  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 3000));
};
