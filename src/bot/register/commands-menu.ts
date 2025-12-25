import { Bot } from "grammy";
import { COMMANDS } from "../../constants/commands";

export const registerCommandsMenu = async (bot: Bot) => {
  await bot.api.setMyCommands([
    ...Object.values(COMMANDS).map((command) => ({
      command: command.command,
      description: command.description,
    })),
  ]);
};
