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
                if(splitMessage.length === 4) {
                    if(message.member.roles.has("535827594432610336")) {
                        var embed1 = new Discord.RichEmbed()
                            .setTitle("Absence")
                            .setDescription("Est-ce correct ?")
                            .addField("Raison de votre absence", splitMessage[2], true)
                            .addField("Temps de votre absence", splitMessage[3], true)
                            .setColor("0xFACC2E")
                            .setFooter("Dev in Time")




                            message.channel.send({embed: embed1}).then(embedMessage => {
                                embedMessage.react('👍').then(() => embedMessage.react('👎'));
                            });
                
                
                
                            const filter = (reaction, user) => {
                                return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
                            };
                            
                            message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                                .then(collected => {
                                    const reaction = collected.first();
                            
                                    if (reaction.emoji.name === '👍') {
                                        message.reply('you reacted with a thumbs up.');
                                    }
                                    else {
                                        message.reply('you reacted with a thumbs down.');
                                    }
                                })
                                .catch(collected => {
                                    console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
                                    message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
                                });
                }






                if(message.member.roles.has("535828313705283594")) {
                    message.channel.send({embed: embed1}).then(embedMessage => {
                        embedMessage.react('👍').then(() => embedMessage.react('👎'));
                    });

                    const filter = (reaction, user) => {
                        return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
                    };
                    
                    message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                    .then(collected => {
                        const reaction = collected.first();
                
                        if (reaction.emoji.name === '👍') {
                            message.reply('you reacted with a thumbs up.');
                        }
                        else {
                            message.reply('you reacted with a thumbs down.');
                        }
                    })
                    .catch(collected => {
                        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
                        message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
                    });
            }







            if(message.member.roles.has("539133325730775081")) {
                message.channel.send({embed: embed1}).then(embedMessage => {
                    embedMessage.react('👍').then(() => embedMessage.react('👎'));
                });
    
                const filter = (reaction, user) => {
                    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
                };

                message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();
            
                    if (reaction.emoji.name === '👍') {
                        message.reply('you reacted with a thumbs up.');
                    }
                    else {
                        message.reply('you reacted with a thumbs down.');
                    }
                })
                .catch(collected => {
                    console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
                    message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
                });






            if(message.member.roles.has("539183295959793667")) {
                message.channel.send({embed: embed1}).then(embedMessage => {
                    embedMessage.react('👍').then(() => embedMessage.react('👎'));
            });

            const filter = (reaction, user) => {
                return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            
                            message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                                .then(collected => {
                                    const reaction = collected.first();
                            
                                    if (reaction.emoji.name === '👍') {
                                        message.reply('you reacted with a thumbs up.');
                                    }
                                    else {
                                        message.reply('you reacted with a thumbs down.');
                                    }
                                })
                                .catch(collected => {
                                    console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
                                    message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
                                });
    }



        if(message.member.roles.has("535827954870124554")) {
            message.channel.send({embed: embed1}).then(embedMessage => {
                embedMessage.react('👍').then(() => embedMessage.react('👎'));
        });


        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        
        embedMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();
    
            if (reaction.emoji.name === '👍') {
                client.users.get("215103685980717057").send("test");
            }
            else {
                client.users.get("215103685980717057").send("test2");
            }
        })
        .catch(collected => {
            console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
            message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
        });








        //message.channel.send('Raison de votre absence: ' + splitMessage[2] + ' Temps de votre absence: ' + splitMessage[3]);
    }



                }
        } else {
            sendError(message, 'Erreur, mauvais format, veuillez inscrire la commande comma ça: "!devintime absent raison temps"');
        }
                }
        }

            if(splitMessage[1] === 'admin') {
                if(splitMessage[2] === 'aide') {
                    if(splitMessage.length === 3) {
                        var adminhelp = new Discord.RichEmbed()
                            .setTitle("Aide Admin")
                            .setDescription("test")
                            .addField("Commandes", "!devintime absent (raison) (temps)", true)
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