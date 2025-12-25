import { Context } from "grammy";
import { COMMANDS } from "../../constants/commands";

export const startHandler = async (ctx: Context) => {
  ctx.reply(
    `👋 <b>Selamat datang di Poston Bot!</b>\n\n` +
      `Poston membantu kamu menyimpan dan mengelola postingan ` +
      `dari berbagai platform dalam satu tempat.\n\n` +
      `✨ <b>Cara cepat:</b>\n` +
      `• Kirim <b>tautan postingan</b> → otomatis tersimpan\n` +
      `• Gunakan <b>/${COMMANDS.list}</b> untuk melihat daftar postingan\n\n` +
      `📌 <b>Command tersedia:</b>\n` +
      `/${COMMANDS.list} — lihat postingan tersimpan\n` +
      `/${COMMANDS.help} — bantuan lengkap\n\n` +
      `Mulai sekarang, kirim tautan postingan yang ingin kamu simpan 👇`,
    {
      parse_mode: "HTML",
    }
  );
};
