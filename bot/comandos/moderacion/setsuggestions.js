const db = require("megadb")
const suggest = new db.crearDB("suggestionchannel")
module.exports = {
  name: "setsuggestions",
  description: "Establece el canal de sugerencias",
  use: "",
  category: 'moderacion',
  alias: [],
  async run(client, message, args) {
    if(args || args.length >= 1) return message.reply("Este comando no necesita argumentos")
    const Discord = require("discord.js")
  suggest.establecer(message.guild.id, message.channel.id).then(()=> {
    message.channel.send("Canal de sugerencias estalecido, aca se mandaran todas las sugerencias").catch(e => {
      message.edit(e)
    })
  })
}
}