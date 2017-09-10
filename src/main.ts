import { includes } from 'lodash';
import { DisabledEvents } from './disabled-events';
import { Channels, SightingsChannels } from './channels';
import { getCoordinatesFromMessage } from './message';
import { getDistanceFromMe } from './distance';
import { Env } from './env';
import { round } from 'lodash';
import { newLogger } from './logger';

// TBD: add winston logging
// TBD: add RxJS
// TBD: protect rate limits
// TBD: handle error cases
const log = newLogger('Main');
const Discord = require('discord.js');
const client = new Discord.Client({ disabledEvents: DisabledEvents });

client.login(Env.token)
    .then((response) => {
        log.info('authenticated');
    })
    .catch((error) => {
        log.error(`failed to authenticate: ${error.message}`);
    });

client.on('ready', () => {
  log.info('discord client enabled');
});

// TBD: grab team allegiances 
client.on('message', message => {
    console.log('peep');
    if(includes(Channels, +message.channel.id)) {
        let displayMessage = `${message.channel.name}\n${message.author.username}: ${message.content}\n`;
        log.info(displayMessage);
        // webSocketServer.broadcast(displayMessage);
    } 
    if(includes(SightingsChannels, +message.channel.id)) {
        let coords = getCoordinatesFromMessage(message.contents);
        let distance = getDistanceFromMe(coords);
        if(distance < 5) {
            let displayMessage = '\n\n\n* RED ALERT *\n\n';
            log.info(displayMessage);
            // webSocketServer.broadcast(displayMessage);
        }
        let displayMessage = `distance: ${distance > 10 ? round(distance) : round(distance, 2)} miles\n`;
        log.info(displayMessage);
        // webSocketServer.broadcast(displayMessage);
    } 
});

client.on('messageUpdate', (oldMessage, newMessage) => {
    // log.info('message updated');
});

client.on('error', () => {
    log.error('encountered unknown error');
});

client.on('debug', info => {
    log.debug(`debug info: ${info}`);
});

client.on('disconnect', () => {
    log.info('disconnected');
});

client.on('reconnecting', () => {
    log.info('reconnecting');
});

client.on('resume', () => {
    log.info('resume');
});

client.on('warn', warning => {
    log.info(`warning: ${warning}`);
});
