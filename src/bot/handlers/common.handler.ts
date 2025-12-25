import { Context } from "grammy";
import { COMMANDS } from "../../constants/commands";

export const startHandler = async (ctx: Context) => {
  ctx.reply(
    `👋 <b>Selamat datang di Poston Bot!</b>\n\n` +
      `Poston membantu kamu menyimpan dan mengelola postingan ` +
      `dari berbagai platform dalam satu tempat.\n\n` +
      `✨ <b>Cara cepat:</b>\n` +
      `• Kirim <b>tautan postingan</b> → otomatis tersimpan\n` +
      `• Gunakan <b>/${COMMANDS.list.command}</b> untuk melihat daftar postingan tersimpan\n\n` +
      `📌 <b>Command tersedia:</b>\n` +
      `/${COMMANDS.list.command} — ${COMMANDS.list.description}\n` +
      `/${COMMANDS.save.command} — ${COMMANDS.save.description}\n` +
      `/${COMMANDS.help.command} — ${COMMANDS.help.description}\n` +
      `/${COMMANDS.about.command} — ${COMMANDS.about.description}\n\n` +
      `Mulai sekarang, kirim tautan postingan yang ingin kamu simpan 👇`,
    {
      parse_mode: "HTML",
    }
  );
};

export const helpHandler = async (ctx: Context) => {
  ctx.reply(
    `ℹ️ <b>Bantuan Poston Bot</b>\n\n` +
      `Poston membantu kamu menyimpan dan mengelola postingan ` +
      `dari berbagai platform dalam satu tempat.\n\n` +
      `📌 <b>Cara menggunakan:</b>\n` +
      `• Kirim <b>tautan postingan</b> ke bot → otomatis tersimpan\n` +
      `• Gunakan <b>/${COMMANDS.list.command}</b> untuk melihat daftar postingan tersimpan\n` +
      `• Gunakan tombol ◀ ▶ untuk berpindah halaman\n\n` +
      `📖 <b>Command tersedia:</b>\n` +
      `/${COMMANDS.list.command} — ${COMMANDS.list.description}\n` +
      `/${COMMANDS.save.command} — ${COMMANDS.save.description}\n` +
      `/${COMMANDS.help.command} — ${COMMANDS.help.description}\n` +
      `/${COMMANDS.about.command} — ${COMMANDS.about.description}\n\n` +
      `Jika mengalami kendala, pastikan tautan yang dikirim valid ` +
      `dan coba lagi beberapa saat kemudian.`,
    {
      parse_mode: "HTML",
    }
  );
};
