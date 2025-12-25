import { Context } from "grammy";

export const startHandler = async (ctx: Context) => {
  ctx.reply(
    `👋 <b>Selamat datang di Poston Bot!</b>\n\n` +
      `Poston membantu kamu menyimpan dan mengelola postingan ` +
      `dari berbagai platform dalam satu tempat.\n\n` +
      `✨ <b>Cara cepat:</b>\n` +
      `• Kirim <b>tautan postingan</b> → otomatis tersimpan\n` +
      `• Gunakan <b>/list</b> untuk melihat daftar postingan\n\n` +
      `📌 <b>Command tersedia:</b>\n` +
      `/list — lihat postingan tersimpan\n` +
      `/help — bantuan lengkap\n\n` +
      `Mulai sekarang, kirim tautan postingan yang ingin kamu simpan 👇`,
    {
      parse_mode: "HTML",
    }
  );
};
