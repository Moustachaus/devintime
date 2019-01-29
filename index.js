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
                        message.channel.send({embed: {
                            color: 3447003,
                            author: {
                              name: client.user.username,
                              icon_url: client.user.avatarURL
                            },
                            title: "This is an embed",
                            url: "http://google.com",
                            description: "This is a test embed to showcase what they look like and what they can do.",
                            fields: [{
                                name: "Fields",
                                value: "They can have different fields with small headlines."
                              },
                              {
                                name: "Masked links",
                                value: "You can put [masked links](http://google.com) inside of rich embeds."
                              },
                              {
                                name: "Markdown",
                                value: "You can put all the *usual* **__Markdown__** inside of them."
                              }
                            ],
                            timestamp: new Date(),
                            footer: {
                              icon_url: client.user.avatarURL,
                              text: "© Example"
                            }
                          }
                        });
                }



                if(message.member.roles.has("535828313705283594")) {
                    message.channel.send({embed: {
                        color: 3447003,
                        author: {
                          name: client.user.username,
                          icon_url: client.user.avatarURL
                        },
                        title: "This is an embed",
                        url: "http://google.com",
                        description: "This is a test embed to showcase what they look like and what they can do.",
                        fields: [{
                            name: "Fields",
                            value: "They can have different fields with small headlines."
                          },
                          {
                            name: "Masked links",
                            value: "You can put [masked links](http://google.com) inside of rich embeds."
                          },
                          {
                            name: "Markdown",
                            value: "You can put all the *usual* **__Markdown__** inside of them."
                          }
                        ],
                        timestamp: new Date(),
                        footer: {
                          icon_url: client.user.avatarURL,
                          text: "© Example"
                        }
                      }
                    });
            }




            if(message.member.roles.has("539133325730775081")) {
                message.channel.send({embed: {
                    color: 3447003,
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL
                    },
                    title: "This is an embed",
                    url: "http://google.com",
                    description: "This is a test embed to showcase what they look like and what they can do.",
                    fields: [{
                        name: "Fields",
                        value: "They can have different fields with small headlines."
                      },
                      {
                        name: "Masked links",
                        value: "You can put [masked links](http://google.com) inside of rich embeds."
                      },
                      {
                        name: "Markdown",
                        value: "You can put all the *usual* **__Markdown__** inside of them."
                      }
                    ],
                    timestamp: new Date(),
                    footer: {
                      icon_url: client.user.avatarURL,
                      text: "© Example"
                    }
                  }
                });
        }



        if(message.member.roles.has("539183295959793667")) {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL
                },
                title: "This is an embed",
                url: "http://google.com",
                description: "This is a test embed to showcase what they look like and what they can do.",
                fields: [{
                    name: "Fields",
                    value: "They can have different fields with small headlines."
                  },
                  {
                    name: "Masked links",
                    value: "You can put [masked links](http://google.com) inside of rich embeds."
                  },
                  {
                    name: "Markdown",
                    value: "You can put all the *usual* **__Markdown__** inside of them."
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "© Example"
                }
              }
            });
    }



        if(message.member.roles.has("535827954870124554")) {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL
                },
                title: "This is an embed",
                url: "http://google.com",
                description: "This is a test embed to showcase what they look like and what they can do.",
                fields: [{
                    name: "Fields",
                    value: "They can have different fields with small headlines."
                  },
                  {
                    name: "Masked links",
                    value: "You can put [masked links](http://google.com) inside of rich embeds."
                  },
                  {
                    name: "Markdown",
                    value: "You can put all the *usual* **__Markdown__** inside of them."
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "© Example"
                }
              }
            });





            
    }



                } else {
                    sendError(message, 'Erreur, mauvais format, veuillez inscrire la commande comma ça: "!devintime absent raison temps"');
            }
        }
                }
        }
    







});





bot.on('ready', () => {
    bot.user.setGame('!devintime aide')
  })


bot.login(process.env.toek);