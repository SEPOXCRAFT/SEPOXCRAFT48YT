module.exports = {
  name: "random",
  description: "Genera un número random",
  use: "",
  category: 'diversion',
  alias: [],
  async run(client, message, args) {
    const Discord = require("discord.js")
  var numero = args.join(" ");
      if (!numero)
        return message.channel.send("**Porfavor escriba un numero**");
      if (isNaN(numero))
        return message.channel.send("**Porfavor escriba un numero valido**");
        var random = Math.round(Math.random() * numero);
      message.channel.send("El numero aleatorio es: " + random);
}
}