const Discord = require('discord.js');
const bot = new Discord.Client();





bot.on('message', function(message){
    mention = message.mentions.users.first();
    if (message.author.bot) return;
    if (message.startsWith = '!devintime msg')
    {
        if (mention == null) { return; }
        if (message.member.hasPermission("ADMINISTRATOR"))
        {
            mentionMessage = message.content.slice (15);
            mention.sendMessage (mentionMessage);
            message.channel.send ("Envoyé!");
        } else {
            message.channel.send ("Tu n'as pas la permission de faire ça !");
          }
        
    }   else {
        message.channel.send ("e");
    }
});





bot.on('ready', () => {
    bot.user.setGame('!devintime aide')
  })


bot.login(process.env.toek);