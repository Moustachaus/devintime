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

    mention = message.mentions.users.first();

    if (message.author.bot) return;
    if (message.content[0] === prefix) {
        //let splitMessage = message.content.split(" ");
        //if(splitMessage[0] === '!commande') {
        //    if(splitMessage[1] === 'send') {
        //        if(splitMessage.length === 3)
        //        message.channel.send('Paramètre: ' + splitMessage[2]);
        //    else 
        //        sendError(message, 'Erreur');
        //    }
        //}

        //if(splitMessage[0] === '!ban') {
        //    if(splitMessage.length === 2)
        //        message.guild.ban(message.mentions.users.first());
        //        else 
        //            sendError(message, 'Erreur');
        //}

        if(splitMessage[0] === '!devintime') {
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
                  }// else {
                    //sendError(message, 'Erreur, mauvais format, veuillez inscrire la commande comme ça: "!devintime msg (message)"');
                //}
                //else {
                //    sendError(message, 'Erreur, mauvais format, veuillez inscrire la commande comme ça: "!devintime absent (raison + temps)"');
                //}











            if(splitMessage[1] === 'absent') {
                if(message.member.roles.has("535827594432610336")) {

                    tMessage = message.content.slice (17);

                    var embed1 = new Discord.RichEmbed()
                        .setTitle("Envoyé!")
                        .setDescription("Absence envoyé")
                        .addField("Raison de votre absence:", tMessage, true)
                        .setColor("0xFACC2E")
                        .setFooter("• Dev in Time •")

                    var embed2 = new Discord.RichEmbed()
                        .setTitle("Envoyé!")
                        .setDescription("Absence reçus")
                        .addField("Raison de l'absence:", tMessage, true)
                        .addField("De:", message.member.user.tag, true)
                        .setColor("0xFACC2E")
                        .setFooter("• Dev in Time •")



                    bot.fetchUser('215103685980717057').then((user) => {
                        user.send(embed2);
                    });
                    bot.fetchUser('244832256902823947').then((user) => {
                        user.send(embed2);
                    });
                    message.delete();
                    message.channel.sendEmbed(embed1);    
                }






                if(message.member.roles.has("535828313705283594")) {

                    tMessage = message.content.slice (17);
                    bot.fetchUser('215103685980717057').then((user) => {
                        user.send(embed2);
                    });
                    bot.fetchUser('244832256902823947').then((user) => {
                        user.send(embed2);
                    });
                    message.delete();
                    message.channel.sendEmbed(embed1);
            }







                if(message.member.roles.has("539133325730775081")) {
                    tMessage = message.content.slice (17);
                    bot.fetchUser('215103685980717057').then((user) => {
                        user.send(embed2);
                    });
                    bot.fetchUser('244832256902823947').then((user) => {
                        user.send(embed2);
                    });
                    message.delete();
                    message.channel.sendEmbed(embed1);
            }





                if(message.member.roles.has("539183295959793667")) {
                    tMessage = message.content.slice (17);
                    bot.fetchUser('215103685980717057').then((user) => {
                        user.send(embed2);
                    });
                    bot.fetchUser('244832256902823947').then((user) => {
                        user.send(embed2);
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



        }

            if(splitMessage[1] === 'admin') {
                if(splitMessage[2] === 'aide') {
                    if(splitMessage.length === 3) {
                        var adminhelp = new Discord.RichEmbed()
                            .setTitle("Aide Admin")
                            .setDescription("test")
                            .addField("Commandes", "!devintime absent (raison avec le temps)", true)
                            .setColor("0xFAAC58")
                            .setFooter("• Dev in Time •")
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
                        .setFooter("• Notre site : https://dev-in-time.com •")
                    message.channel.sendEmbed(aide);
        }
    }
    
            if(splitMessage[1] === 'sendcommande') {

                message.delete();

                var commandesende = new Discord.RichEmbed()
                    .setTitle("Envoyer une Commande personnalisée")
                    .setDescription("**Vous pouvez faire votre propre commande avec cette commande !**")
                    .addField("•Vous n'avez qu'a écrire !devintime commande (votre commande)•", "•", true)
                    .setColor("0x2169D3")
                    .setFooter("• Dev in Time •")



                message.channel.sendEmbed(commandesende);

            }

            if(splitMessage[1] === 'commande') {
                if (message.channel.id === '539120346624819210') {
            //var commande = new Discord.RichEmbed()
            //    .setTitle("Commande personnalisée envoyé !")
            //    .setDescription("**Votre commande personnalisée à été envoyé !**")
            //    .addField("Regardez dans vos messages privé pour plus d'infos !", "•", true)
            //    .setColor("0x42D321")
            //    .setFooter("• Dev in Time •")
            //message.channel.sendEmbed(commande);
                    message.delete();
                    commande1 = message.content.slice (19);
                    var commandepv = new Discord.RichEmbed()
                        .setTitle("Commande personnalisée envoyé !")
                        .setDescription("•")
                        .addField("**Voici votre commande:**", commande1, true)
                        .addField("Votre commande est en attente", "Vous receverez un message sous peu!", true)
                        .setColor("0x42D321")
                        .setFooter("• Dev in Time •")

                    var commanderec = new Discord.RichEmbed()
                        .setTitle("Commande personnalisée reçus !")
                        .setDescription("**Une commande personnalisée a été reçus !**")
                        .addField("Commande:", commande1, true)
                        .addField("De:", message.member.user.tag, true)
                        .setColor("0x42D321")
                        .setFooter("• Dev in Time •")


                    message.author.send(commandepv);

                

                    bot.fetchUser('215103685980717057').then((user) => {
                        user.sendEmbed(commanderec)
                    });

                } else {

                    commande2 = message.content.slice (19);

                    var aideslon = new Discord.RichEmbed()
                        .setTitle("Il y a eu un problème..")
                        .setDescription("Vous devez envoyer votre commande dans le salon #commande-personnalisée !")
                        .addField("Votre commande", commande2, true)
                        .setColor("0x754A7E")
                        .setFooter("• Dev in Time •")

                    message.delete
                    message.author.send(aideslon);
                }
            }

        //else if(splitMessage[0] === '!devintime') {
        //    if(splitMessage[1] === 'commande') {
            
        //var commande = new Discord.RichEmbed()
        //    .setTitle("Commande personnalisée envoyé !")
        //    .setDescription("**Votre commande personnalisée à été envoyé !**")
        //    .addField("Regardez dans vos messages privé pour plus d'infos !", "•", true)
        //    .setColor("0x42D321")
        //    .setFooter("• Dev in Time •")
        //message.channel.sendEmbed(commande);



}
});






bot.on('ready', () => { bot.user.setGame('!devintime aide') })


bot.login(process.env.toek);