let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    pepe = 'https://i.ibb.co/BzR1jRq/08a088fe953b.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "◈ Made by RezaOfc",
        "description": `
┌「 *Sewa bot* 」
│     
├ 1 Grup / 30 Hari
├ Rp. 10,000 Gopay
├ Rp. 15,000 Pulsa Three
│
├ 1 Premium / 30 Hari
├ Rp. 5,000 Gopay
├ Rp. 10,000 Pulsa Three
│
├ tertarik? hubungi: 
├ @6289606790112 (RezaOfc)
└────
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "4730029423700586"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "4730029423700586",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "6289606790112@s.whatsapp.net"
        },
        "footerText": "https://wa.me/c/6289606790112\n\nowner number : wa.me/6289606790112"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['sewabot', 'premium']
handler.tags = ['main']
handler.command = /^(sewabot|premium)$/i

module.exports = handler
