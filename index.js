const Discord = require('discord.js');
const bot = new Discord.Client();





bot.on('message', function(message){
    mention = message.mentions.users.first();
    if (message.author.bot) return;
    if (message.startsWith = '!dit' + ' test')
    {
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (8);
        mention.sendMessage (mentionMessage);
        message.channel.send ("done!");
    }
});















var Discord = require("discord.js");
var prefix = "!dit";
var client = new Discord.Client();

var bannedwords = "fuck,shit,slut,whore".split(",");

client.on("message", message => {
  if (message.guild === null) return;

  for (i=0;i<bannedwords.length;i++) {
    if (message.content.toLowerCase().includes(bannedwords[i])) {
        message.delete();
        message.reply("Please don't swear!");
      return;
    }
  }

  if (message.author.bot) return;
  if (!message.member.hasPermission("ADMINISTRATOR")) return;

  if (!message.content.toLowerCase().startsWith(prefix)) return;
  message.delete();
  if (message.content.toLowerCase().startsWith(prefix + "kick ")) {
    var mem = message.mentions.members.first();
    mem.kick().then(() => {
        message.channel.send(mem.displayName + " has successfully been kicked by " + message.author.username + "!");
    }).catch(e => {
        message.channel.send("An error occured!");
    });
  }
  if (message.content.toLowerCase().startsWith(prefix + "ban ")) {
    var mem = message.mentions.members.first();
    var mc = message.content.split(" ")[2];
    mem.ban(mc).then(() => {
        message.channel.send(mem.displayName + " has successfully been banned by " + message.author.username + " for " + mc + " days!");
    }).catch(e => {
        message.channel.send("An error occured!");
    });
  }
  if (message.content.toLowerCase().startsWith(prefix + "mute")) {
    var mem = message.mentions.members.first();
    if (message.guild.roles.find("name", "Muted")) {
      mem.addRole(message.guild.roles.find("name", "Muted")).then(() => {
        message.channel.send(mem.displayName + " has successfully been muted!");
      }).catch(e => {
        message.channel.send("An error occured!");
        console.log(e);
      });

    }
  }
  if (message.content.toLowerCase().startsWith(prefix + "unmute")) {
    var mem = message.mentions.members.first();
    if (message.guild.roles.find("name", "Muted")) {
      mem.removeRole(message.guild.roles.find("name", "Muted")).then(() => {
        message.channel.send(mem.displayName + " has successfully been unmuted!");
      }).catch(e => {
        message.channel.send("An error occured!");
        console.log(e);
      });

    }
  }
  if (message.content.toLowerCase().startsWith(prefix + "purge")) {
    var mc = message.content.split(" ")[1];
    message.channel.bulkDelete(mc);
  }
  if (message.content.toLowerCase().startsWith(prefix + "eval")) {
    var sc = message.content.substring(message.content.indexOf(" "));
    eval(sc);
  }
  if (message.content.toLowerCase().startsWith(prefix + "calc")) {
    var ca = message.content.substring(message.content.indexOf(" "));
    message.reply(ca + " is " + eval(ca).toFixed(2));
  }
});



bot.login(process.env.toek);