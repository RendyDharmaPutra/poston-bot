import { InlineKeyboard } from "grammy";

export const aboutPresenter = () => {
  return (
    `🤖 <b>Tentang Poston</b>\n\n` +
    `<b>Poston</b> adalah bot Telegram untuk menyimpan dan mengelola ` +
    `postingan dari berbagai platform dalam satu tempat.\n\n` +
    `Bot ini dibuat untuk membantu kamu:\n` +
    `• Menyimpan postingan dengan cepat\n` +
    `• Mengelola referensi tanpa ribet\n` +
    `• Menghindari kehilangan postingan penting\n\n` +
    `👨‍💻 <b>Dikembangkan oleh</b>\n` +
    `Rendy DharmaPutra\n` +
    `Software Developer & Tech Enthusiast\n\n` +
    `Jika Poston bermanfaat untukmu,\n` +
    `kamu bisa melihat portofolio developer atau\n` +
    `memberikan dukungan melalui donasi 🙏`
  );
};

export const aboutKeyboard = () => {
  return new InlineKeyboard()
    .url("🌐 Portofolio", "https://archilst.my.id")
    .url("☕ Donasi", "https://saweria.co/rendydharmaputra");
};
