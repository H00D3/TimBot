const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'text', []);
  }

 async run(client, message, args) {
   //Permissions
   if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You aren\'t allowed to use this command homie.**')
   //Shortcuts
   const messagetosay = args.join(" ");
   //executing
   message.channel.send(messagetosay);
   message.delete();
  } catch (err) {
    console.log();
    message.channel.send('**I was not able to say that message.**')
  }
}