const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.toek);


client.msgs = require ("./msgs.json");



const prefix = "!dit";
client.on ("message", (message) => {

    msg = message.content.toLowerCase();

    if (message.author.bot) return;

    mention = message.mentions.users.first();

    if (msg.startsWith (prefix + "send")) {
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (8);
        metnion.sendMessage (mentionMessage);
        message.channel.send ("done!"); 
    }
