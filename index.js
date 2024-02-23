const Discord = require("discord.js-selfbot-v13") // npm i discord.js-selfbot-v13 (required)
const client = new Discord.Client({checkUpdate: false})
const sphinx = require("sphinx-self");
const keep_alive = require("./keep_alive.js");

new sphinx.Core(client).leveling({ channel: "1187966719583596606", randomLetters: true, type: 'en', time: 30000 }) //hover for options

client.login(process.env.TOKEN) //Not saved.
