import { Bot } from "grammy";
import { env } from "../config/env";
import { registerCommands } from "./register/commands";
import { registerGlobalErrorHandler } from "./register/error";

const bot = new Bot(env.BOT_TOKEN);

registerCommands(bot);
registerGlobalErrorHandler(bot);

export default bot;
