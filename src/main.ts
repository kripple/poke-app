console.log('hello world');

// Task #1: Connect with discord

// const request = require('request-promise');

// https://discordapp.com/api/v6/channels/249477403460632576/messages?limit=50

// https://discordapp.com/api/v6/channels/282403352199954432/messages?limit=50

const env = require('dotenv');
env.config();

const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.login(token)
    .then((response) => {
        console.log('logged in?');
    })
    .catch((error) => {
        console.log(error.message);
    });

client.on('ready', () => {
  console.log('I am ready!');
});

// client.on('message', message => {
//   if (message.content === 'ping') {
//     message.reply('pong');
//   }
// });
