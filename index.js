const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';


function sendError(message, description) {
    message.channel.send({embed: {
        color: 15158332,
        description: ':x: ' +description
    }});
}

function sendError1(message, description) {
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
        if(splitMessage[0] === '!commande') {
            if(splitMessage[1] === 'send') {
                if(splitMessage.length === 3)
                message.channel.send('Paramètre: ' + splitMessage[2]);
            else 
                sendError(message, 'Erreur');
            }
        }

        else if(splitMessage[0] === '!ban') {
            if(splitMessage.length === 2)
                message.guild.ban(message.mentions.users.first());
                else 
                    sendError(message, 'Erreur');
        }

        else if(splitMessage[0] === '!devintime') {
            if(splitMessage[1] === 'msg') {
                if(splitMessage.length === 4)
                if (mention == null) { return sendError(message, 'Erreur avec la mention') }
                if (message.member.hasPermission("ADMINISTRATOR"))  {
                    mentionMessage = message.content.slice (15);
                    mention.sendMessage (mentionMessage);
                    message.channel.send ("Envoyé!");
                } else {
                    message.channel.send ("Tu n'as pas la permission de faire ça !");
                }
                  }











            if(splitMessage[1] === 'absent') {
                if(message.member.roles.has("535827594432610336")) {
                    var embed1 = new Discord.RichEmbed()
                        .setTitle("Absence")
                        .setDescription("Envoyé")
                        .addField("Raison de votre absence", true)
                        .addField("Temps de votre absence", true)
                        .setColor("0xFACC2E")
                        .setFooter("Dev in Time")





                    mentionMessage = message.content.slice (17);
                    bot.fetchUser('215103685980717057').then((user) => {
                        user.send(mentionMessage);
                    });
                    bot.fetchUser('244832256902823947').then((user) => {
                        user.send(mentionMessage);
                    });
                    message.delete();
                    message.channel.sendEmbed(embed1);             
                }






                if(message.member.roles.has("535828313705283594")) {

                    mentionMessage = message.content.slice (17);
                    bot.fetchUser('215103685980717057').then((user) => {
                        user.send(mentionMessage);
                    });
                    bot.fetchUser('244832256902823947').then((user) => {
                        user.send(mentionMessage);
                    });
                    message.delete();
                    message.channel.sendEmbed(embed1);
            }







                if(message.member.roles.has("539133325730775081")) {
                    mentionMessage = message.content.slice (17);
                    bot.fetchUser('215103685980717057').then((user) => {
                        user.send(mentionMessage);
                    });
                    bot.fetchUser('244832256902823947').then((user) => {
                        user.send(mentionMessage);
                    });
                    message.delete();
                    message.channel.sendEmbed(embed1);
            }





                if(message.member.roles.has("539183295959793667")) {
                    mentionMessage = message.content.slice (17);
                    bot.fetchUser('215103685980717057').then((user) => {
                        user.send(mentionMessage);
                    });
                    bot.fetchUser('244832256902823947').then((user) => {
                        user.send(mentionMessage);
                    });
                    message.delete();
                    message.channel.sendEmbed(embed1);
            }


                if(message.member.roles.has("535827954870124554")) {
                    mentionMessage = message.content.slice (17);
                    bot.fetchUser('215103685980717057').then((user) => {
                        user.send(mentionMessage);
                    });
                    bot.fetchUser('244832256902823947').then((user) => {
                        user.send(mentionMessage);
                    });
                    message.delete();
                    message.channel.sendEmbed(embed1);
            }







        //message.channel.send('Raison de votre absence: ' + splitMessage[2] + ' Temps de votre absence: ' + splitMessage[3]);
    }



        } else {
            sendError(message, 'Erreur, mauvais format, veuillez inscrire la commande comma ça: "!devintime absent raison temps"');
        }

            if(splitMessage[1] === 'admin') {
                if(splitMessage[2] === 'aide') {
                    if(splitMessage.length === 3) {
                        var adminhelp = new Discord.RichEmbed()
                            .setTitle("Aide Admin")
                            .setDescription("test")
                            .addField("Commandes", "!devintime absent (raison avec le temps)", true)
                            .setColor("0xFAAC58")
                            .setFooter("Dev in Time")
                        message.channel.sendEmbed(adminhelp);
            }
        }
    }


            if(splitMessage[1] === 'aide') {
                if(splitMessage.length === 2) {
                    var aide = new Discord.RichEmbed()
                        .setTitle("Aide")
                        .setDescription("aide")
                        .addField("Commandes", "!devintime", true)
                        .setColor("0xFAAC58")
                        .setFooter("Dev in Time")
                    message.channel.sendEmbed(aide);
        }
    }



}
});





bot.on('ready', () => { bot.user.setGame('!devintime aide') })


bot.login(process.env.toek);