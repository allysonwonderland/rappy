const Discord = require('discord.js');
// const Role = new Discord.Role(clientdataguild);
const client = new Discord.Client();
const config = require('./config.json');
const craft = require('./craft.js');
const { prefix, token } = config;
const { unit, photon, tech, timed } = craft;


const sm = `Sailor Moon is best anime`.toLowerCase();
const ccs = `Cardcaptor Sakura is best anime`.toLowerCase();   

client.once('ready', () => {
    console.log('Ready!');
});

// ping pong beep boop test
client.on('message', message => {
    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send('Pong.');
    } else if (message.content.startsWith(`${prefix}beep`)) {
        message.channel.send('Boop.');
    }
    else if (message.content === `${prefix}server`) {
        message.channel.send(`This server's name is: ${message.guild.name}`);
    }
});

// craft list
client.on('message', message => {
    if (message.content.startsWith(`${prefix}craftlist`)) {
        message.channel.send({ embed: unit });
        message.channel.send({ embed: photon });
        message.channel.send({ embed: tech });
        message.channel.send({ embed: timed });
    }
    else if (message.content.startsWith(`${prefix}crafttech`)) {
        message.channel.send({ embed: tech });
    }
    else if (message.content.startsWith(`${prefix}craftphoton`)) {
        message.channel.send({ embed: photon });
    }
    else if (message.content.startsWith(`${prefix}crafttimed`)) {
        message.channel.send({ embed: timed });
    }
    else if (message.content.startsWith(`${prefix}craftunit`)) {
        message.channel.send({ embed: unit });
    }
});

// ree is bad
client.on('message', message => {
 
    let member = message.member;
    
    if ((message.content.toLowerCase().indexOf(`ree`)) !== -1) {
        if (message.author.bot) {
            return;
        }
        else {
            if(!(message.member.roles.cache.some(role => role.name === 'Degenerate'))) {
                let role = message.guild.roles.cache.find(r => r.name === "Degenerate");
                member.roles.add(role).catch(console.error);
                message.channel.send(`${member} now has the role Degenerate`);             
            }
            else {
                message.channel.send(`Please don't reeeeee! It hurts me!`);
            }
        }
    }
    else if (message.content.toLowerCase() === `re`) {
        if (message.author.bot) {
            return;
        }
        else {
            if(!(message.member.roles.cache.some(role => role.name === 'Degenerate'))) {
                let role = message.guild.roles.cache.find(r => r.name === "Degenerate");
                member.roles.add(role).catch(console.error);
                message.channel.send(`${member} now has the role Degenerate`);
            }
            else {
                message.channel.send(`Please don't reeeeee! It hurts me!`);
            }
        }
    }
    if ( (message.content.toLowerCase().indexOf(`${sm}`) !== -1) || (message.content.toLowerCase().indexOf(`${ccs}`) !== -1) ) {
        if (message.author.bot) {
            return;
        }
        else {
            if(message.member.roles.cache.some(role => role.name === 'Degenerate')) {
                let role = message.guild.roles.cache.find(r => r.name === "Degenerate");
                member.roles.remove(role).catch(console.error);
                message.channel.send(`${member} no longer has the role Degenerate`);
            }
            else {
                message.channel.send(`I agree~`);
            }
        }
    }
});

client.login(process.env.BOT_TOKEN)