import { includes } from 'lodash';
import { DisabledEvents } from './disabled-events';
import { Channels, SightingsChannels } from './channels';
import { getCoordinatesFromMessage } from './message';
import { getDistanceFromMe } from './distance';
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

// TBD: grab team allegiances 
client.on('message', message => {
    if(includes(Channels, +message.channel.id)) {
        console.log(`${message.channel.name}\n${message.author.username}: ${message.content}\n`);
    } 
    if(includes(SightingsChannels, +message.channel.id)) {
        let coords = getCoordinatesFromMessage(message.contents);
        let distance = getDistanceFromMe(coords);
        if(distance < 5) {
            console.log('\n\n\n* RED ALERT *\n\n');
        }
    } 
});

client.on('messageUpdate', (oldMessage, newMessage) => {
    console.log('message updated');
});

client.on('error', () => {
    console.log('encountered unknown error');
});

client.on('debug', info => {
    // console.log(`debug info: ${info}`);
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
