const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';


function sendError(message, description) {
    message.channel.send({embed: {
        color: 15158332,
        description: ':x: ' +description
    }});
}


bot.on('message', message => {


    if (message.author.bot) return;

    mention = message.mentions.users.first();

    if (message.content[0] === prefix) {
        let splitMessage = message.content.split(" ");
        if(splitMessage[0] === '!devintime') {
            if(splitMessage[1] === ' send') {
                if(splitMessage.length === 3)
                message.channel.send('Paramètre: ' + splitMessage[1]);
            else 
                sendError(message, 'Erreur');
            }
        }
        
    }
    
});





bot.on('ready', () => {
    bot.user.setGame('!devintime aide')
  })


bot.login(process.env.toek);