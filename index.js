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

                    tMessage = message.content.slice (17);

                    var embed1 = new Discord.RichEmbed()
                        .setTitle("Envoyé!")
                        .setDescription("Absence envoyé")
                        .addField("Raison de votre absence", tMessage, true)
                        .setColor("0xFACC2E")
                        .setFooter("Dev in Time")





                    bot.fetchUser('215103685980717057').then((user) => {
                        user.send(tMessage);
                    });
                    bot.fetchUser('244832256902823947').then((user) => {
                        user.send(tMessage);
                    });
                    message.delete();
                    message.channel.sendEmbed(embed1);    
                }






                if(message.member.roles.has("535828313705283594")) {

                    tMessage = message.content.slice (17);
                    bot.fetchUser('215103685980717057').then((user) => {
                        user.send(tMessage);
                    });
                    bot.fetchUser('244832256902823947').then((user) => {
                        user.send(tMessage);
                    });
                    message.delete();
                    message.channel.sendEmbed(embed1);
            }







                if(message.member.roles.has("539133325730775081")) {
                    tMessage = message.content.slice (17);
                    bot.fetchUser('215103685980717057').then((user) => {
                        user.send(tMessage);
                    });
                    bot.fetchUser('244832256902823947').then((user) => {
                        user.send(tMessage);
                    });
                    message.delete();
                    message.channel.sendEmbed(embed1);
            }





                if(message.member.roles.has("539183295959793667")) {
                    tMessage = message.content.slice (17);
                    bot.fetchUser('215103685980717057').then((user) => {
                        user.send(tMessage);
                    });
                    bot.fetchUser('244832256902823947').then((user) => {
                        user.send(tMessage);
                    });
                    message.delete();
                    message.channel.sendEmbed(embed1);
            }


                if(message.member.roles.has("535827954870124554")) {
                    tMessage = message.content.slice (17);
                    bot.fetchUser('215103685980717057').then((user) => {
                        user.send(tMessage);
                    });
                    bot.fetchUser('244832256902823947').then((user) => {
                        user.send(tMessage);
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
                        .setColor("0x4087D4")
                        .setFooter("Notre site : https://dev-in-time.com")
                    message.channel.sendEmbed(aide);
        }
    }


}
});


bot.on('guildMemberAdd', member => {

    var msgbvnembed = new Discord.RichEmbed()
    .setTitle("Bienvenue sur Dev in Time !")
    .setDescription("t")
    .addField("Si tu as un problème passe dans le salon #support", ".", true)
    .addField("N'oublie pas de lire les règlements !", ".", true)
    .addField("Voici le site https://dev-in-time.com)", ".", true)
    .setColor("0x53DD73")
    .setFooter("• Dev in Time •")



    var bvnembed = new Discord.RichEmbed()
    .setTitle("**Un nouveau !**")
    .setDescription("***Nom: ***" + member.user.username)
    .addField("**Membre: **", message.guild.memberCount, true)
    .setColor("0x53DD73")
    .setFooter("• Bienvenue sur Dev in Time •", message.member.joinedAt)

    member.sendEmbed(msgbvnembed);
    member.guild.channels.get('535822252717899806').sendEmbed(bvnembed);
    member.send("Bienvenue sur Dev in Time **"+ member.user.username + "**, merci d'avoir rejoint le serveur ! Si tu as un problème passe dans le salon #support. **N'oublie pas de lire les règlements !**");
 });



bot.on('guildMemberRemove', member => {
    var byembed = new Discord.RichEmbed()
    .setTitle("Aurevoir !")
    .setDescription("***Nom: ***" + member.user.username)
    .addField("**Membre: **", message.guild.memberCount, true)
    .setColor("0xE61919")
    .setFooter("• À la prochaine ! •", message.member.joinedAt)

    member.guild.channels.get('535822252717899806').sendEmbed(byembed);
    //
});



bot.on('ready', () => { bot.user.setGame('!devintime aide') })


bot.login(process.env.toek);