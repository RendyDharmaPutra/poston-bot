import { config } from "dotenv";
config();

const getEnv = (key: string) => {
  const value = process.env[key];
  if (!value) throw new Error(`Environment variable ${key} is not set`);

  return value;
};

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  BOT_TOKEN: getEnv("BOT_TOKEN"),
  API_BASE_URL: getEnv("API_BASE_URL"),
};
