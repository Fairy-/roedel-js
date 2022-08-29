const { Client, GatewayIntentBits, Collection } = require('discord.js');
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;
const authorId = process.env.AUTHOR_ID;
const emojiId = process.env.EMOJI_ID
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessageReactions] });

const emojis = emojiId.split(',')

client.once('ready', () => {
	console.log('Ready!');
});

client.on("messageCreate", (message)=>{
        if(message.author.id == authorId) {
            message.react(emojis[Math.floor(Math.random() * emojis.length)])
        }
});

client.login(token);
