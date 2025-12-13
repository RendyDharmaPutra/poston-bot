import { Bot } from "grammy";
import { env } from "../config/env";
import { registerCommands } from "./handlers/commands-handler";

const bot = new Bot(env.BOT_TOKEN);

registerCommands(bot);

export default bot;
