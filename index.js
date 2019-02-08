const Discord = require("discord.js");
const client = new Discord.Client();

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
const embedColor = 0xE52B50;
const PREFIX = "+"
var prefix = "+";
var token = "***";


client.on('ready', function() {
	client.user.setActivity("https://bots.skoali.fr " + client.guilds.size + " serveurs | " + client.users.size + " utilisateurs | +help")
	console.log('Bot Ready!')  
})
client.on("message", (message) => {



  if (message.content.toLowerCase().startsWith(prefix + `new`)) {
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
        .addField(`Skoali`, `Ton ticket a été crée : ` + c.toString())
        .setTimestamp();
        message.channel.send({ embed: embed2 });

        const embed3 = new Discord.RichEmbed()
        .setColor(embedColor)
        .addField(`Bonjour ${message.author.username}!`, `Votre ticket a bien été ouvert un de nos staff va vous répondre le plus rapidement possible.`)
        .setTimestamp();
        c.send({ embed: embed3 });
    }).catch(console.error);
  }
  if (message.content.toLowerCase().startsWith(prefix + `close`)) {
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed8 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`Skaoli`, `Vous devez être dans un salon de ticket.`)
    message.channel.send({ embed: embed8 });
    return
    }   

    const embed9 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`Skoali`, 'Tapez \`+confirmer\` pour confirmer.')
    message.channel.send({ embed: embed9 })
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '+confirmer', {
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

  if (message.content.toLowerCase().startsWith(prefix + `add`)) {
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed4 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`Skoali`, `Vous devez être dans un salon de ticket.`)
    message.channel.send({ embed: embed4 });
    return
    }
    addedmember = message.mentions.members.first();
    message.channel.overwritePermissions(addedmember, { SEND_MESSAGES : true, VIEW_CHANNEL : true});
    const embed5 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`Skoali`, '**' + addedmember + `** a été ajouter au ticket, utilisez la commande [${prefix}remove]() pour l\'enlever`)
    message.channel.send({ embed: embed5 });

  }

  if (message.content.toLowerCase().startsWith(prefix + `remove`)) {
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed6 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`Skoali`, `Vous devez être dans un salon de ticket.`)
    message.channel.send({ embed: embed6 });
    return
    }
    removedmember = message.mentions.members.first();
    message.channel.overwritePermissions(removedmember, { SEND_MESSAGES : false, VIEW_CHANNEL : false});
    const embed7 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`Skoali`, '**' + removedmember + '** a été retirer du ticket.')
    message.channel.send({ embed: embed7 });
  }
});

client.login(process.env.toek);