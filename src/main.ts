import bot from "./bot";
import { logger } from "./libs/logger";

async function bootstrap() {
  logger.info("Starting Telegram bot...");

  try {
    await bot.start();
    logger.info("Bot is running (polling mode)");
  } catch (err) {
    logger.error(`Failed to start bot: ${err}`);
    process.exit(1);
  }
}

bootstrap();
