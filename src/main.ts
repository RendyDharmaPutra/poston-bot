import bot from "./bot";

async function bootstrap() {
  console.info("Starting Telegram bot...");

  try {
    await bot.start();
    console.info("Bot is running (polling mode)");
  } catch (err) {
    console.error("Failed to start bot:", err);
    process.exit(1);
  }
}

bootstrap();
