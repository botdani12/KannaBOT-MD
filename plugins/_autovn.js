let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command }) => {
let vn = fs.readFileSync(`./src/${command}.mp3`)
conn.sendFile(m.chat, vn, `${command}.mp3`, null, m, true, { type: 'audioMessage', ptt: true })

}

handler.customPrefix =/^(Dengan mu|Cuekin Terus|Hp iphone|To the bone|Hayoo|Bidadari|Biasalah|Beat boxx|Beat box|Baka|Bahagia aku|Bacot|Asu|Aku ngakak|Arigatou|Ara ara|Owner sange|Mastah|Ku coba|Karna lo wibu|Ih wibu|Gay|Gomenasai|I like you|Gitar|Gelay|Hampa|Gak lucu|Gaboleh gitu|Yowaimo|Woi|Wajib|Hai bot|Maju wibu|India|Tanya bapak lu|Summertime|Pasi pasi|Pale|Nuina|Ngadi ngadi|Ownerku|Waku|Pak sapardi|Siapa sih|Canda anjg|China|Makasih|Bansos|Buka Pintu|Yowai|Punten|Nikah|Yoyowaimo|Onichan|Daisuki|Anjay|Kontol|Daisuki dayo|Bot|Gamau|Denganmu|Wow|Assalamualaikum|Menu|Sayang|Sayonara|Beneran|Uwu|Panik|Nani|Pap|Madafaka|Ngelag|Info|Sticker|Bacot lu|Lah|Door|Muach|Gomena|Acacaca|Acaca|AHHH|Anjing banget lu|Gak nanya|Babi|Ugh|Gomenek|Coklat|Gomen gomen|Semoga harimu baik|Nandemonaiya|Sora|Apa|Pedo|Ogh|Pesan|Hontoni|Anata|Nyiang|Ara gomen|Damedayo|Loli Toxic|Muehehe|Wakata|Bwah|Shota|Omaee|Cotto|Onyang|Itaidesu|Yooh|Kakkoi|Ahh|Nande|Buat apa|Konichiwa|Nanti polisi datang|Gatau|Adaloh|Eksperimen|Ntar di gigit|Sakit|Nandee|Uwuuu|Turu|Bisa|Hihi|Sugoi|Luc Here|Itai|Luc|Uwuii|Night|Luc Luc|Hmmmm|Imut|Sampah|Ngent|Ngewe kuy|Yamete|Kurang|Tante|Ahhh ahhh|Onichan kon|Naruto)$/i
handler.command = new RegExp

module.exports = handler
