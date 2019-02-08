const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';
const embedColor = 0xE52B50;

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

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

bot.on('message', message => {

    mention = message.mentions.users.first();

    if (message.author.bot) return;
    if (message.content[0] === prefix) {
        let splitMessage = message.content.split(" ");
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











            else if(splitMessage[1] === 'absent') {
                if(message.member.roles.has("535827594432610336")) {

                    tMessage = message.content.slice (17);

                    var embed1 = new Discord.RichEmbed()
                        .setTitle("Envoyé!")
                        .setDescription("Absence envoyé")
                        .addField("Raison de votre absence:", tMessage, true)
                        .setColor("0xFACC2E")
                        .setFooter("• Dev in Time •")

                    var embed2 = new Discord.RichEmbed()
                        .setTitle("Absence reçus!")
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
                    message.author.send(embed1); 
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
                    message.author.send(embed1);
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
                    message.author.send(embed1);
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
                    message.author.send(embed1);
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
                    message.author.send(embed1);
            }







        //message.channel.send('Raison de votre absence: ' + splitMessage[2] + ' Temps de votre absence: ' + splitMessage[3]);
    }





            else if(splitMessage[1] === 'admin') {
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


            else if(splitMessage[1] === 'aide') {
                if(splitMessage.length === 2) {
                    var aide = new Discord.RichEmbed()
                        .setTitle("Aide")
                        .setDescription("Voici les commandes disponibles avec le bot")
                        .addField("Commande", "!devintime candidature (votre candidature) dans le salon #📩-recrutement", true)
                        .addField("Commande", "!devintime commande (votre commande) dans le salon #📦-commande-personnalisée", true)
                        .setColor("0x4087D4")
                        .setFooter("• Notre site : https://dev-in-time.com •")
                    message.channel.sendEmbed(aide);
        }
    }
    
            else if(splitMessage[1] === 'sendcommande') {

                message.delete();

                var commandesende = new Discord.RichEmbed()
                    .setTitle("Envoyer une Commande personnalisée")
                    .setDescription("**Vous pouvez faire votre propre commande avec cette commande !**")
                    .addField("•Vous n'avez qu'a écrire !devintime commande (votre commande)•", "•", true)
                    .setColor("0x2169D3")
                    .setFooter("• Dev in Time •")



                message.channel.sendEmbed(commandesende);

            }

            else if(splitMessage[1] === 'commande') {
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
                        .setDescription("Vous devez envoyer votre commande dans le salon 📦-commande-personnalisée !")
                        .addField("Votre commande", commande2, true)
                        .setColor("0x754A7E")
                        .setFooter("• Dev in Time •")

                    message.author.send(aideslon);
                    message.delete();
                }
            }
            else if(splitMessage[1] === 'candidature') {
                if (message.channel.id === '536540504188518400') {
            //var commande = new Discord.RichEmbed()
            //    .setTitle("Commande personnalisée envoyé !")
            //    .setDescription("**Votre commande personnalisée à été envoyé !**")
            //    .addField("Regardez dans vos messages privé pour plus d'infos !", "•", true)
            //    .setColor("0x42D321")
            //    .setFooter("• Dev in Time •")
            //message.channel.sendEmbed(commande);
                    candid = message.content.slice (22);
                    var candidatureenvoye = new Discord.RichEmbed()
                        .setTitle("Candidature envoyé !")
                        .setDescription("•")
                        .addField("**Voici votre candidature:**", candid, true)
                        .addField("Votre candidature est en attente", "Vous receverez un message sous peu!", true)
                        .setColor("0x42D321")
                        .setFooter("• Dev in Time •")

                    var candidaturerecus = new Discord.RichEmbed()
                        .setTitle("Candidature reçus !")
                        .setDescription("**Une candidature a été reçus !**")
                        .addField("Candidature:", candid, true)
                        .addField("De:", message.member.user.tag, true)
                        .setColor("0x42D321")
                        .setFooter("• Dev in Time •")


                    message.author.send(candidatureenvoye);


                    message.delete();

                    bot.fetchUser('215103685980717057').then((user) => {
                        user.sendEmbed(candidaturerecus)
                    });


                }  else {

                    candid1 = message.content.slice (22);

                    var aideslon = new Discord.RichEmbed()
                        .setTitle("Il y a eu un problème..")
                        .setDescription("Vous devez envoyer votre candidature dans le salon #📩-recrutement !")
                        .addField("Votre candidature", candid1, true)
                        .setColor("0x754A7E")
                        .setFooter("• Dev in Time •")

                    
                    message.author.send(aideslon);
                    message.delete();
                }
            }

            else if(message.content == "!devintime clear") {
                if (message.member.hasPermission("MANAGE_MESSAGES")) {
                    message.channel.fetchMessages()
                       .then(function(list){
                            message.channel.bulkDelete(list);
                        }, function(err){message.channel.send("ERREUR: ERROR CLEARING CHANNEL.")})                        
                }
            }


            else if(splitMessage[1] === '!sendcandid') {
                if(message.member.roles.has("535829349174345728")) {
                    if (message.channel.id === '536540504188518400') {
                        var sendcandid = new Discord.RichEmbed()
                        .setTitle("Envoyer une candidature")
                        .setDescription("Nous sommes actuellement en période de recrutements. Voici les postes à combler:")
                        .addField("**-Tout type de développeur**", "•", true)
                        .addField("**-Modérateur**", "•", true)
                        .addField("**Vous n'avez qu'a écrire !devintime candidature (votre candidature)**", "Une question sur un poste ? #🛈-infos-role", true)
                        .setColor("0x060732")
                        .setFooter("• Dev in Time •")

                        message.delete();
                        message.channel.sendEmbed(sendcandid);
                    }
            }
        }

            else if (message.content.toLowerCase().startsWith("!devintime new")) {
                const reason = message.content.split(" ").slice(1).join(" ");
                if (!message.guild.roles.exists("name", "Support")) {
                    const embed0 = new Discord.RichEmbed()
                    .setColor(embedColor)
                    .addField(`Skoali`, `Vous devez crée un rôle nommé Support.`)
                    message.channel.send({ embed: embed0 });
                    return
                }
                if (message.guild.channels.exists("name", "ticket-" + message.author.username)) {
                    const embed1 = new Discord.RichEmbed()
                    .setColor(embedColor)
                    .addField(`Skoali`, `Vous avez déjà un ticket ouvert.`)
                    message.channel.send({ embed: embed1 });
                    return
                }
                message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
                    let role = message.guild.roles.find("name", "Support");
                    let role2 = message.guild.roles.find("name", "@everyone");
                    c.overwritePermissions(role, {
                        SEND_MESSAGES: true,
                        READ_MESSAGES: true
                    });
                    c.overwritePermissions(role2, {
                        SEND_MESSAGES: false,
                        READ_MESSAGES: false
                    });
                    c.overwritePermissions(message.author, {
                        SEND_MESSAGES: true,
                        READ_MESSAGES: true
                    });
                    const embed2 = new Discord.RichEmbed()
                    .setColor(embedColor)
                    .addField(`Dev in Time`, `Ton ticket a été créé : ` + c.toString())
                    .setTimestamp();
                    message.channel.send({ embed: embed2 });

                    const embed3 = new Discord.RichEmbed()
                    .setColor(embedColor)
                    .addField(`Bonjour ${message.author.username}!`, `Votre ticket a bien été ouvert un de nos staff va vous répondre le plus rapidement possible.`)
                    .setTimestamp();
                    c.send({ embed: embed3 });
                }).catch(console.error);
            }
            else if (message.content.toLowerCase().startsWith("!devintime close")) {
                if (!message.channel.name.startsWith(`ticket-`)) {
                    const embed8 = new Discord.RichEmbed()
                    .setColor(embedColor)
                    .addField(`Skaoli`, `Vous devez être dans un salon de ticket.`)
                    message.channel.send({ embed: embed8 });
                    return
                }  

                const embed9 = new Discord.RichEmbed()
                .setColor(embedColor)
                .addField(`Dev in Time`, 'Tapez \`!devintime confirmer\` pour confirmer.')
                message.channel.send({ embed: embed9 })
                .then((m) => {
                message.channel.awaitMessages(response => response.content === '!devintime confirmer', {
                    max: 1,
                    time: 15000,
                    errors: ['time'],
                })
                .then((collected) => {
                    message.channel.delete();
                    })
                    .catch(() => {
                    m.edit('').then(m2 => {
                        m2.delete();
                    }, 3000);
                    });
                });
            }


            else if (message.content.toLowerCase().startsWith("!devintime add")) {
                if (!message.channel.name.startsWith(`ticket-`)) {
                    const embed4 = new Discord.RichEmbed()
                    .setColor(embedColor)
                    .addField(`Dev in Time`, `Vous devez être dans un salon de ticket.`)
                    message.channel.send({ embed: embed4 });
                    return
                }
                addedmember = message.mentions.members.first();
                message.channel.overwritePermissions(addedmember, { SEND_MESSAGES : true, VIEW_CHANNEL : true});
                const embed5 = new Discord.RichEmbed()
                .setColor(embedColor)
                .addField(`Dev in Time`, '**' + addedmember + `** a été ajouté au ticket, utilisez la commande [!devintime remove]() pour l\'enlever`)
                message.channel.send({ embed: embed5 });

            }


            else if (message.content.toLowerCase().startsWith("!devintime remove")) {
                if (!message.channel.name.startsWith(`ticket-`)) {
                    const embed6 = new Discord.RichEmbed()
                    .setColor(embedColor)
                    .addField(`Dev in Time`, `Vous devez être dans un salon de ticket.`)
                    message.channel.send({ embed: embed6 });
                    return
                }
                removedmember = message.mentions.members.first();
                message.channel.overwritePermissions(removedmember, { SEND_MESSAGES : false, VIEW_CHANNEL : false});
                const embed7 = new Discord.RichEmbed()
                .setColor(embedColor)
                .addField(`Dev in Time`, '**' + removedmember + '** a été retiré du ticket.')
                message.channel.send({ embed: embed7 });
            }

                //var commande = new Discord.RichEmbed()
        //    .setTitle("Commande personnalisée envoyé !")
        //    .setDescription("**Votre commande personnalisée à été envoyé !**")
        //    .addField("Regardez dans vos messages privé pour plus d'infos !", "•", true)
        //    .setColor("0x42D321")
        //    .setFooter("• Dev in Time •")
        //message.channel.sendEmbed(commande);

        //else {
                //if (message.channel.id === '539120346624819210') {
                    //var chatt = new Discord.RichEmbed()
                        //.setTitle("Il y a eu un problème..")
                        //.setDescription("Vous devez envoyer une commande-personnalisée avec !devintime commande (votre commande) !")
                        //.addField("Dans le salon #commande-personnalisée", "•", true)
                        //.setColor("0xF01013")
                        //.setFooter("• Dev in Time •")


                    //message.author.send(chatt);
                    //message.delete
            //}
        //}
            //}




        //else if(splitMessage[0] === '!devintime') {
        //    if(splitMessage[1] === 'commande') {
            
        //var commande = new Discord.RichEmbed()
        //    .setTitle("Commande personnalisée envoyé !")
        //    .setDescription("**Votre commande personnalisée à été envoyé !**")
        //    .addField("Regardez dans vos messages privé pour plus d'infos !", "•", true)
        //    .setColor("0x42D321")
        //    .setFooter("• Dev in Time •")
        //message.channel.sendEmbed(commande);

        //if (message.channel.id === '539120346624819210') {
        //    if(splitMessage[1] === 'commande') {
        //        
        //    } else {
        //        var chatt = new Discord.RichEmbed()
        //            .setTitle("Il y a eu un problème..")
        //           .setDescription("Vous devez envoyer une commande-personnalisée avec !devintime commande (votre commande) !")
        //            .addField("•", "•", true)
        //            .setColor("0xF01013")
        //            .setFooter("• Dev in Time •")
//
//
        //        message.author.send(chatt);
        //        message.delete();ç
        //    }
        //}

            



    }


}

if (message.channel.id === '536540504188518400') {
    if(!message.content.toLowerCase().startsWith("!devintime candidature")) {
        var chatt1 = new Discord.RichEmbed()
            .setTitle("Il y a eu un problème..")
            .setDescription("Vous devez envoyer une commande-personnalisée avec !devintime commande (votre commande) !")
            .addField("Dans le salon #commande-personnalisée", "•", true)
            .setColor("0xF01013")
            .setFooter("• Dev in Time •")


        message.author.send(chatt1);
        message.delete();
    }
}

});

//bot.on('messageReactionAdd', (reaction, user) => {
//    if(reaction.emoji.name === "🎉")
//        if (message.channel.id === '539120346624819210') {
//
//
//
//        }
//
//})


bot.on('guildMemberAdd', member => {

    var msgbvnembed = new Discord.RichEmbed()
        .setTitle("Bienvenue sur Dev in Time !")
        .setDescription("•")
        .addField("Si tu as un problème passe dans le salon #support", "•", true)
        .addField("N'oublie pas de lire les règlements !", "•", true)
        .addField("Voici le site https://dev-in-time.com)", "•", true)
        .setColor("0x53DD73")
        .setFooter("• Dev in Time •")



    var bvnembed = new Discord.RichEmbed()
        .setTitle("**Un nouveau !**")
        .setDescription("***Nom: ***" + member.user.username)
        .addField("**Membre: **", member.guild.memberCount, false)
        .setColor("0x53DD73")
        .setFooter("• Bienvenue sur Dev in Time •")

    member.sendEmbed(msgbvnembed);
    member.guild.channels.get('535822252717899806').sendEmbed(bvnembed);
    member.send("Bienvenue sur Dev in Time **"+ member.user.username + "**, merci d'avoir rejoint le serveur ! Si tu as un problème passe dans le salon #support. **N'oublie pas de lire les règlements !**");

    const memberCountChannel = member.guild.channels.find(channel => channel.name.startsWith("Membres :"))
    memberCountChannel.setName(`Membres : ${ member.guild.memberCount } 👥`)
 });



bot.on('guildMemberRemove', member => {
    var byembed = new Discord.RichEmbed()
        .setTitle("Aurevoir !")
        .setDescription("***Nom: ***" + member.user.username)
        .addField("**Membre: **", member.guild.memberCount, false)
        .setColor("0xE61919")
        .setFooter("• À la prochaine ! •")

    member.guild.channels.get('535822252717899806').sendEmbed(byembed);

    const memberCountChannel = member.guild.channels.find(channel => channel.name.startsWith("Membres :"))
    memberCountChannel.setName(`Membres : ${ member.guild.memberCount } 👥`)




    




});























bot.on('ready', () => { bot.user.setGame('!devintime aide') })


bot.login(process.env.toek);