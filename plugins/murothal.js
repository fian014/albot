let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
QUR'AN BOT:
Via Copas {SEBARKAN}

*YouTube:*
_~Mochamad Allifian Ar'rasyid_
Di sana ada beberapa dalil yang menyebutkan pahala orang yang mendengarkan al-Quran dan pahala orang yang membaca al-Quran.

Diantaranya,

[1] Firman Allah,

وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ وَأَنْصِتُوا لَعَلَّكُمْ تُرْحَمُونَ

“Apabila dibacakan al-Quran, perhatikanlah dan diamlah, maka kalian akan mendapatkan rahmat.” (QS. al-A’raf: 204).

[2] Allah juga berfirman,

كِتَابٌ أَنْزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِيَدَّبَّرُوا آيَاتِهِ وَلِيَتَذَكَّرَ أُولُو الْأَلْبَابِ

Ini adalah sebuah kitab yang Kami turunkan kepadamu penuh dengan berkah supaya mereka melakukan tadabbur terhadap ayat-ayatnya dan supaya mendapat pelajaran orang-orang yang mempunyai fikiran. (QS. Shad: 29)

Juz 1 ⇨ http://j.mp/2b8SiNO
Juz 2 ⇨ http://j.mp/2b8RJmQ
Juz 3 ⇨ http://j.mp/2bFSrtF
Juz 4 ⇨ http://j.mp/2b8SXi3
Juz 5 ⇨ http://j.mp/2b8RZm3
Juz 6 ⇨ http://j.mp/28MBohs
Juz 7 ⇨ http://j.mp/2bFRIZC
Juz 8 ⇨ http://j.mp/2bufF7o
Juz 9 ⇨ http://j.mp/2byr1bu
Juz 10 ⇨ http://j.mp/2bHfyUH
Juz 11 ⇨ http://j.mp/2bHf80y
Juz 12 ⇨ http://j.mp/2bWnTby
Juz 13 ⇨ http://j.mp/2bFTiKQ
Juz 14 ⇨ http://j.mp/2b8SUTA
Juz 15 ⇨ http://j.mp/2bFRQIM
Juz 16 ⇨ http://j.mp/2b8SegG
Juz 17 ⇨ http://j.mp/2brHsFz
Juz 18 ⇨ http://j.mp/2b8SCfc
Juz 19 ⇨ http://j.mp/2bFSq95
Juz 20 ⇨ http://j.mp/2brI1zc
Juz 21 ⇨ http://j.mp/2b8VcBO
Juz 22 ⇨ http://j.mp/2bFRxNP
Juz 23 ⇨ http://j.mp/2brItxm
Juz 24 ⇨ http://j.mp/2brHKw5
Juz 25 ⇨ http://j.mp/2brImlf
Juz 26 ⇨ http://j.mp/2bFRHF2
Juz 27 ⇨ http://j.mp/2bFRXno
Juz 28 ⇨ http://j.mp/2brI3ai
Juz 29 ⇨ http://j.mp/2bFRyBF
Juz 30 ⇨ http://j.mp/2bFREcc
`.trim(), m)
}
handler.help = ['murothal']
handler.tags = ['quotes']
handler.command = /^(murothal)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

