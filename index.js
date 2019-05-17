require('dotenv').config();

const Discord = require('discord.js');
// const fs = require('fs');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!help') {
    msg.reply('!racist, !avatar, !yoshi, !join');
  }

  if (msg.content === '!racist') {
    msg.reply({
      files: [{
        attachment: './images/tenor.gif',
        name: 'tenor.gif'
      }]
    });
  }

  if (msg.content === '!avatar') {
    msg.reply(msg.author.displayAvatarURL);
  }

  if (msg.content === '!yoshi') {
    msg.member.voiceChannel.join().then(connection => {
      // You can play a file or a stream here:
      const dispatcher = connection.playFile('./sounds/yoshi.mp3');
      dispatcher.resume();
    });
  }

  if (msg.content === '!join') {
    msg.member.voiceChannel.join();
  }

  if (msg.content === '!leave') {
    msg.member.voiceChannel.leave();
  }
});

client.on('guildMemberAdd', member => {
  member.send('Welcome on the server! 😀');
});

client.login(process.env.BOT_TOKEN);
