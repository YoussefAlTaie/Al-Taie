
const Discord = require("discord.js-selfbot-v13");
const { userAccount } = require("sphinx-run");

const tokens = process.env["token"].split("**");

for (const token of tokens) {
  const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS]
  });

  client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
  });

  new userAccount(client, Discord).leveling({
    channel: '1187808730440540294',
    randomLetters: true,
    time: 600000,
    type: 'ar'
  });

  client.login(token);
}  
