const Discord = require('discord.js');
const bot = new Discord.Client();





bot.on('message', function(message){
    if (message.startsWith == 'dit' + ' test')
    {
        message.reply('test');
    }
});



    bot.login(process.env.toek);