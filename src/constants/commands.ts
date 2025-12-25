export const COMMANDS = {
  start: "start",
  list: "list",
  save: "save",
  help: "help",
  about: "about",
};
export type CommandKey = keyof typeof COMMANDS;
export type CommandValue = (typeof COMMANDS)[CommandKey];
