let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • *Gopay* [085704617188]
│ • *Telkomsel* [081331954019]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
