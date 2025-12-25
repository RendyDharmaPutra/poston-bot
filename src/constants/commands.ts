export const COMMANDS = {
  start: { command: "start", description: "Informasi awal bot" },
  list: { command: "list", description: "Lihat daftar postingan tersimpan" },
  save: { command: "save", description: "Simpan postingan" },
  help: { command: "help", description: "Bantuan penggunaan bot" },
  about: {
    command: "about",
    description: "Informasi mengenai Poston dan developer",
  },
} as const;
