import { run } from "@grammyjs/runner";
import { bootstrapBot } from "./bot";
import { logger } from "./libs/logger";

async function bootstrap() {
  logger.info("Starting Telegram bot...");

  try {
    const bot = await bootstrapBot();
    run(bot);
    logger.info("Bot is running (polling mode)");
  } catch (err) {
    logger.error(`Failed to start bot: ${err}`);
    process.exit(1);
  }
}

bootstrap();
