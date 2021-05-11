//console.log("hello npm");
// Name: Brett Wolfangel

const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const Prefix = "?"
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  else{
  let args = msg.content.substring(Prefix.length).split(" ");
  console.log(args);

  switch(args[0])
  {
      case "website":
          msg.channel.send("http://www.youtube.com/user/kir10s");
          break;

        case "avatar":
            msg.reply(msg.author.displayAvatarURL());
            break;

        case "clear":
            if (!args[1]){
                return msg.reply("Error please define a second paramater")
            } else{
                msg.channel.bulkDelete(args[1]);
                break;
            }
  }
  }
});




client.login('ODM5OTE0NDc0ODU2MzgyNTE0.YJQlTw.r-4Aj2D0ZI60ryK7iQLcdAqq-vs');