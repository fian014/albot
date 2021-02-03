let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 𝐌𝐚𝐮 𝐌𝐚𝐛𝐚𝐫 𝐁𝐫𝐨? 𝐁𝐨𝐥𝐞𝐡 〙 ═
╠➥ 𝑴𝒐𝒃𝒊𝒍𝒆 𝑳𝒆𝒈𝒆𝒏𝒅𝒔: 197837997
╠➥ 𝑷𝑼𝑩𝑮𝑴           : Lupa :v
╠➥ 𝑭𝒓𝒆𝒆 𝑭𝒊𝒓𝒆          : 662582644
╠═〘 𝐍𝐚𝐦𝐚 𝐏𝐚𝐧𝐠𝐠𝐢𝐥𝐚𝐧 〙 ═
╠➥ 𝐅𝐢𝐚𝐧
╠➥ 𝐀𝐥𝐥𝐢𝐟
╠➥ 𝐀𝐥
╠═〘 𝑷𝑨𝑻𝑹𝑰𝑪𝑲 𝑩𝑶𝑻 〙 ═
`.trim(), m)
}
handler.help = ['mabar']
handler.tags = ['info']
handler.command = /^(mabar)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
