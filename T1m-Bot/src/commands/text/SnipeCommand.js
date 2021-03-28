const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class SnipeCommand extends BaseCommand {
  constructor() {
    super('snipe', 'text', []);
  }

  async run(client, message, args) {
   const msg = client.snipes.get(message.channel.id);
   if (!msg) return message.channel.send('**There is no message to snipe.**');

    const snipeEmbed = new Discord.MessageEmbed()
     .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
     .setDescription(msg.content)
    message.channel.send(snipeEmbed);
  }
}