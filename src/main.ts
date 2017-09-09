console.log('hello world');

// Task #1: Connect with discord

let request = require('request-promise');

request('https://google.com').then((res) => {
    console.log('I think it worked');
    console.log(res);
});