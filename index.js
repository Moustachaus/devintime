const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!devintime';




bot.on('message', message => {


    if (message.author.bot) return;

    mention = message.mentions.users.first();

    if (message.content[0] === prefix) {
        if(message.content === 'test') {
            if (mention == null) { return; }
            if (message.member.hasPermission("ADMINISTRATOR"))
            {
                mentionMessage = message.content.slice (15);
                mention.sendMessage (mentionMessage);
                message.channel.send ("Envoyé!");
            } else {
                message.channel.send ("Tu n'as pas la permission de faire ça !");
              }
        }
        
    }
    
});





bot.on('ready', () => {
    bot.user.setGame('!devintime aide')
  })


bot.login(process.env.toek);