const Discord = require("discord.js-selfbot-v13") // npm i discord.js-selfbot-v13 (required)
const client = new Discord.Client({checkUpdate: false})
const sphinx = require("sphinx-self");
const keep_alive = require("./keep_alive.js");

new sphinx.Core(client).leveling({ channel: "1187808730440540294", randomLetters: true, type: 'ar', time: 60000 }) //hover for options

client.login(process.env.TOKEN) //Not saved.
