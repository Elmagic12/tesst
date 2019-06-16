const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("589926833731010705")
setInterval(function() {
channel.send(`Elmagic Elmagic Elmagic Elmagic Elmagic`);
}, 30)
})

client.login(process.env.BOT_TOKEN);