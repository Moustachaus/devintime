const Discord = require('discord.js');
const bot = new Discord.Client();





bot.on('message', function(message){
    mention = message.mentions.users.first();
    if (!msg.member.hasPermission("ADMINISTRATOR"))
    if (message.author.bot) return;
    if (message.startsWith = '!devintime msg')
    {
        if (mention == null) { return; }
        mentionMessage = message.content.slice (15);
        mention.sendMessage (mentionMessage);
        message.channel.send ("Envoyé!");
    }
});

bot.on('ready', () => {
    bot.user.setGame('/devintime aide')
  })


bot.login(process.env.toek);