module.exports = async(client, message, args, Discord) => {
  const db = require("megadb")
  const confessiondb = new db.crearDB("confessiondb")
  const propu = args[0]
  const confesion = args.slice(1).join(" ")
  const canal = await confessiondb.get(message.guild.id)
  message.delete()

  if(propu === "a"){

    const embed = new Discord.RichEmbed()
    .setDescription(confesion)
    .setColor("RANDOM")
    .setFooter("Confesion de Anonimo")
    message.guild.channels.get(canal).send(embed).catch(() => {
      message.channel.send("Hubo un error y no se pudo enviar la confesión, asegurese de que ha establecido el canal de confesiones con el comando `s/setconfessions`")
    })
    return true
  }
  if(propu === "p"){

    const embed = new Discord.RichEmbed()
    .setDescription(confesion)
    .setColor("RANDOM")
    .setFooter(`Confesion de ${message.author.username}`)
    message.guild.channels.get(canal).send(embed).catch(() => {
      message.channel.send("Hubo un error y no se pudo enviar la confesión, asegurese de que ha establecido el canal de confesiones con el comando `s/setconfessions`")
    })
    return true
  }
  
  
}