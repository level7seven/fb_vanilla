'use strict';

// creating interface
const Readline = require('readline');
const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const matcher = require('./matcher');

// readline interface rendering prompt sign
rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {
    matcher(reply, data => {
        switch (data.intent) {
            case 'Hello':
                console.log(`${data.entities.greeting} to you to!`);
                rl.prompt();
                break;
            case 'Exit':
                console.log("Have a great day!");
                process.exit(0);
            case 'CurrentWeather':
                console.log(`Checking the weather for ${data.entities.city}...`)
                rl.prompt();
                break;
                // get WEATHER API
            default:
                {
                    console.log("I don't know what you mean");
                    rl.prompt
                }

        }
    })
});

// RegExp