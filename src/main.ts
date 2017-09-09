import { includes } from 'lodash';
import { DisabledEvents } from './disabled-events';
import { Channels } from './channels';
import { Env } from './env';

// TBD: add winston logging
// TBD: add RxJS
// TBD: protect rate limits
// TBD: handle error cases
const Discord = require('discord.js');
const client = new Discord.Client({ disabledEvents: DisabledEvents });

client.login(Env.token)
    .then((response) => {
        console.log('authenticated');
    })
    .catch((error) => {
        console.log(`failed to authenticate: ${error.message}`);
    });

client.on('ready', () => {
  console.log('discord client enabled');
});

client.on('error', () => {
    console.log('encountered unknown error');
});

client.on('debug', info => {
    console.log(`debug info: ${info}`);
});

client.on('disconnect', () => {
    console.log('disconnected');
});

client.on('reconnecting', () => {
    console.log('reconnecting');
});

client.on('resume', () => {
    console.log('resume');
});

client.on('warn', warning => {
    console.log(`warning: ${warning}`);
});

// TBD: grab team allegiances 
client.on('message', message => {
    if(includes(Channels, +message.channel.id)) {
        console.log(`${message.channel.name}\n${message.author.username}: ${message.content}\n`);
    } 
});

client.on('messageUpdate', (oldMessage, newMessage) => {
    console.log('message updated');
});


