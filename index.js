const Discord = require('discord.js');
const bot = new Discord.Client();





bot.on('message', function(message){
    if (message.author.bot) return;
    if (message.startsWith = '!dit' + ' test')
    {
        message.channel.sendMessage('c un test ' + message.author + ', ok?');
    }
});



bot.login(process.env.toek);