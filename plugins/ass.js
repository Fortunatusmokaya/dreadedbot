let handler = async (m, { conn }) => {
 
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/ass?APIKEY=MahliKey', '', 'Better Than Your Girlfriend's', m)
  
}
handler.help = ['ass']
handler.tags = ['anime']
handler.command = /^(ass)$/i

handler.limit = true
handler.group = true

module.exports = handler
