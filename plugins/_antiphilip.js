let handler = m => m

let linkRegex = /π.PHILIP_RASHANβ β β β β β β β β β β β β β β β β β β β β β β β β β β β β β βπ.PHILIP_RASHAN/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE.data.chats[m.chat]
  let name = this.getName(m.sender)
  let isGroupPhilip = linkRegex.exec(m.text)

  if (chat.antiPhilip && isGroupPhilip && !isAdmin && !m.isBaileys && m.isGroup && !m.fromMe) {
 m.reply(`*γ DREADED ANTI PHILIP RASHANγ*\n\nHey *${name}* You have sent philip Rashan troll bug in this group!\n\nSorry,you are no longer one of us!`)
   this.groupRemove(m.chat, [m.sender])
  }
}
handler.group = true

module.exports = handler
