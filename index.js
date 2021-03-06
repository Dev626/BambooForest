// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);
