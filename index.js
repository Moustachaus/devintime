const Discord = require('discord.js');
const bot = new Discord.Client();





bot.on('message', function(message){
    mention = message.mentions.users.first();
    if (message.author.bot) return;
    if (message.startsWith = '!dit msg')
    {
        if (mention == null) { return; }
        mentionMessage = message.content.slice (8);
        mention.sendMessage (mentionMessage);
        message.channel.send ("done!");
    }
});


bot.user.setActivity('Test / /dit aide');
bot.login(process.env.toek);