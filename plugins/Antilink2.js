let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*Detected, *${await this.getName(m.sender)}*, this is a group link! 👀. Leave before I kick 🥱`)
   if (isrowner) return m.reply('Oops, Sender of Link is *owner* 🧎. I CANNOT remove! 🤝')
   await this.groupRemove(m.chat, [m.sender])

  }
  return true
}

module.exports = handler
