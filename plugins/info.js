let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: 𝑭𝒊𝒂𝒏014
╠➥ Script: @Nurotomo
║
╠➥ Github: https://github.com/fian014/albot
╠➥ Instagram: @fian_014
╠➥ YouTube: Mochamad Allifian Ar'rasyid
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Saweria: https://saweria.co/fian014
╠➥ Tsel: 0813-3195-4019
╠➥ Indosat: 0857-0461-7188
║
║>Request? Wa.me/6285704617188
║
╠═〘 𝑷𝑨𝑻𝑹𝑰𝑪𝑲 𝑩𝑶𝑻 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

