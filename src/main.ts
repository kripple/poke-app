console.log('hello world');

// Task #1: Connect with discord

// const request = require('request-promise');

// https://discordapp.com/api/v6/channels/249477403460632576/messages?limit=50

// https://discordapp.com/api/v6/channels/282403352199954432/messages?limit=50

const env = require('dotenv');
env.config();

const Discord = require('discord.js');
const client = new Discord.Client({
    disabledEvents: [
        'GUILD_SYNC',
        'GUILD_CREATE',
        'GUILD_DELETE',
        'GUILD_UPDATE',
        'GUILD_MEMBER_ADD',
        'GUILD_MEMBER_REMOVE',
        'GUILD_MEMBER_UPDATE',
        'GUILD_MEMBERS_CHUNK',
        'GUILD_ROLE_CREATE',
        'GUILD_ROLE_DELETE',
        'GUILD_ROLE_UPDATE',
        'GUILD_BAN_ADD',
        'GUILD_BAN_REMOVE',
        'CHANNEL_CREATE',
        'CHANNEL_DELETE',
        'CHANNEL_UPDATE',
        'CHANNEL_PINS_UPDATE',
        'MESSAGE_DELETE',
        'MESSAGE_DELETE_BULK',
        'MESSAGE_REACTION_ADD',
        'MESSAGE_REACTION_REMOVE',
        'MESSAGE_REACTION_REMOVE_ALL',
        'USER_UPDATE',
        'USER_NOTE_UPDATE',
        'USER_SETTINGS_UPDATE',
        'PRESENCE_UPDATE',
        'VOICE_STATE_UPDATE',
        'TYPING_START',
        'VOICE_SERVER_UPDATE',
        'RELATIONSHIP_ADD',
        'RELATIONSHIP_REMOVE'
    ]
});
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

// TBD: store channels in dynamo, make interface to add/remove channels
const myChannels = {
    'lvl-4-raids': 340247989169815552,
    'level-5-raikou-herndon': 352802959320416258,
    'level-5-raikou-reston': 352924882947801109,
    '100iv_rares': 263032521325936642
}

client.on('message', message => {
    console.log(`${message.channel.name} (${message.channel.id})
        ${message.author.username}: ${message.content}
    `);
    debugger
    console.log(message.channel.guild.channels);
    // console.log(message.author.username);
    // console.log(message.content);
    // console.log(message.channel.name);
    // console.log(message.channel.id);
    // console.log(`new message: ${message}`);
//  console.log(`channels: ${Object.keys(client.channels)}`);
//   if (message.content === 'ping') {
//     message.reply('pong');
//   }
});


let blisseyMessage = `blissey (336681882487881739)
        Blissey: <@&290895644917497856>

Despawns @ 08:30:15am __**(3m 7s)**__
Level: 20 - IV: 12/3/2
- **Zen Headbutt** (DPS: 10.91)
- **Psychic** (DPS: 35.71)

**PGAN Map**: https://co-frontrange.pogoalerts.net/?lat=40.3853566197&lon=-105.039349113&zoom=16
**Google Map**: http://maps.google.com/maps?q=40.3853566197,-105.0393491128`;

let highIvMessage = `100iv_rares (263032521325936642)
        Magikarp: <@&290895696851369984>

Despawns @ 10:45:47am __**(11m 17s)**__
Level: 9 - IV: 15/15/15
- **Splash** (DPS: 0.0)
- **Struggle** (DPS: 15.91)

**PGAN Map**: https://md-moco.pogoalerts.net/?lat=39.0766976227&lon=-77.1064013076&zoom=16
**Google Map**: http://maps.google.com/maps?q=39.0766976227,-77.1064013076`