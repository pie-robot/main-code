const Discord = require("discord.js");
const client = new Discord.Client();
/*var hd = require("humanize-duration"); 
  var moment = require("moment");
  var uptime = hd(client.uptime, {round: true});
  var timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');*/


client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', function(message) {
if(message.channel.isPrivate) {
	console.log(`(DM) \n ${message.author.username} | ${message.author.id}: ${message.content} \n ------------`);
}
});

const prefix = "p."
const color = [2012323, 4918289, 3482998, 0830827, 1273867, 7217478, 1276488];
const version = '3';
 client.on('message', msg => {
if (msg.content === prefix + 'ping') {
    msg.reply('Pong!');
  }

if (msg.content.startsWith(prefix + 'umm')) {
var reason = msg.content.split(' ').slice(2).join(' ');
if (!reason)
return msg.channel.sendMessage(`ummmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm \n *10 hours later* \n mmmmmmmmmmmmmmmmmm. \n *6 days, 6 hours and 6 minutes later* \n <@${msg.author.id}> what are we talking about again?`);
var reason = msg.content.split(' ').slice(2).join(' ');
      if (!reason)
        return msg.channel.sendMessage(`ummmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm \n *10 hours later* \n mmmmmmmmmmmmmmmmmm. \n *6 days, 6 hours and 6 minutes later* \n <@${msg.author.id}> what are we talking about again?`);
msg.channel.sendMessage(`Hey <@${msg.author.id}>! How do we fix ${reason}?`)
}

if (msg.content.startsWith(prefix + 'slist')) {
  	msg.channel.send('', {embed: {
      color: 3447003,
          description: `${client.guilds.map(guild =>  guild.name + "\n")}`
          }});
  }
if (msg.content.startsWith(prefix + 'dev')) {
		if(msg.author.bot) return;
		msg.channel.createInvite();
		msg.author.sendMessage(`Dear <@${msg.author.id}>, \nYour request to join the pie bot code team has been requested and shall be accepted soon. While you wait, Please use me. \nThanks :)`);
		client.users.get('265071448182358018').send(`**Dev Team Request** \n Person: **<@${msg.author.id}>**.`);
	}

  if (msg.content === prefix + 'catchmeoutside') {
    msg.reply('I cant be bothered rn xD');
  }

  if (msg.content === prefix + 'xd') {
 	msg.react('🇽');

 	var delayMillis = 500;

 	setTimeout(function() {
 		msg.react('🇩');
 	}, delayMillis);
   }

   if (msg.content === prefix + 'lol') {
  	msg.react('🇱');

  	var delayMillis = 500;

  	setTimeout(function() {
  		msg.react('🇴');
  	}, delayMillis);

    var delayMillis = 1000;

    setTimeout(function() {
      msg.react('🇮');
    }, delayMillis);
    }

  if (msg.content === prefix + 'yetenszisecret') {
    if (msg.author.id !== "245101046924312578")
    return msg.reply("This can only be used by <@245101046924312578>.")
	msg.channel.sendMessage('Yetenszi is better than all of you xdd.');
  }

  if (msg.content === 'info') {
    if (msg.author.id !== "265071448182358018") return;
client.channels.get('314729082933870602').send("@everyone \n Hello, I am **Pie**Bot and this is <@265071448182358018>'s Server! \n All the members in the server know about **Pie**Bot, so ask any of them if you need help! \n Also please check out: http:piebot.weebly.com for the invite link and more! \n **Pie**Bot is on 50+ servers as of today! \n To use me, do **p.helpme** or for interesting stats and info about piebot do **p.info**.")
}

  if (msg.content === prefix + 'summon pie') {
    msg.reply('I have been summoned. Also Hi! :) ');
  }

  if (msg.content === prefix + 'lemon') {
    msg.reply('hmmm. There was this guy, called **Lemonade**. He always was the cool kid at school; but then things changed. He found out about YouTube. So he started his meme career and made this channel. https://www.youtube.com/channel/UCVlbmFsBIxW3tgeLZk73OPA');
  }


if (msg.content === prefix + 'sinfo') {
	msg.channel.send('', {embed: {
    color: 3447003,
    author: {
      name: msg.guild.name,
      icon_url: msg.guild.iconURL
    },
    fields: [{
        name: 'Member Count.',
        value: msg.guild.memberCount
      },
      {
        name: 'Total channels',
        value: "ha"
      },
      {
        name: 'Date created',
        value: "ha"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: msg.author.avatarURL,
      text: `requested by ${msg.author.username}`
    }
        }});
}

if (msg.content === prefix + 'helpme') {
	msg.channel.sendMessage(`<@${msg.author.id}> **Check your DM's!**`);
	msg.author.send('', {embed: {
    color: 3447003,
    author: {
      name: "Help",
      icon_url: "https://image.freepik.com/free-icon/faq-circular-button-with-question-mark-inside_318-30267.jpg"
    },
    fields: [{
		  name: 'New command of the day',
		  value: "The new command of the day is **p.info** and the letter of the day is **p** for **pie!**"
	  },
	  {
        name: 'New',
        value: "**p.report** | *reports nasty bugs and suggestions* \n**p.eat** | *eat me or another member* \n**p.bot** | *info about the bot* \n**p.warn** | *warns members* \n**p.statuspage** | *links you to the status page of pie bot* \n**p.sinvite** | *gives you server invite to pie bot server.* \n**p.ban** | *example: p.ban @jeff my name is* \n**p.kick** | *example: p.kick @trump making that wall* \n**p.roastme** | *dms you a roast* \n**p.easteregg** | *displays clues to easter egg commands*"
      },
      {
        name: 'Original',
        value: "**p.help** *the command you are using rn* \n**.help** | *other help* \n**p.lemon** | *a story* \n**p.luckayy** | *another story* \n**p.aspect** | *attack helicopter* \n**p.bubzyz** | *A command for my bro bubzyz* \n**p.ping** | *pong* \n**p.catchmeoutside** | *the first command which was made* \n**p.pie** | *comes up with a pic of a pie cause why not* \n**p.summon pie** | *I dunno why* \n**p.nazi** | *jew* \n**p.jew** | *nazi* \n**p.money** | *rich af* \n**p.invite** | *a link*  \n**p.idk** | *idk* \n**p.collab** | *wow* \n**p.pingpie** | *why did i add this again?*"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: "https://cdn.discordapp.com/avatars/265071448182358018/df649f5f548ee9e8205785feaa010aa9.png",
      text: "Made by: Pie#9196. Last Updated: 15/05/17"
    }
        }});
}

if (msg.content === prefix + 'heroku') {
  msg.reply('Heroku is running well at an outstanding ' + client.ping + 'ms ping!')
}

if (msg.content === prefix + 'info') {
    msg.channel.sendMessage(" ", {embed: {
            color: 0xFFB200,
            author: {
                 name: "Bot Stuff",
                icon_url: "https://yt3.ggpht.com/-VpU5gxnVCN8/AAAAAAAAAAI/AAAAAAAAAAA/K9fKj4NzB54/s100-c-k-no-mo-rj-c0xffffff/photo.jpg"
            },
            description: "**Pie**Bot: A bot which can do more than just say hi!",
            fields: [
                {
                  name: "Description About **Pie**Bot",
                  value: "To start using me, do **p.helpme**. \n**Pie**Bot is a bot made for those who likes memes, cat pics and like to warn people for a joke. \n[Click here](http://www.piebot.weebly.com) for the website & [click here](https://discordapp.com/oauth2/authorize?client_id=288221668290068480&scope=bot&permissions=2146827519) to invite **Pie**Bot."
                },
                {
                    name: "General Info",
                    value: "**Prefix: **" + prefix + "\n" + "**Version: **" + version + "\n" + "**Pie**Bot Server: [discord.gg/jBchByk](https://discord.gg/jBchByk)"
                },
                {
                    name: "Some stats for you nerds",
                    value:"**Uptime: **" + `<undefined for now>` + "\n" + "**Server Count: **" + client.guilds.size + "\n" + "**Ping: **" + Math.round(msg.client.ping) + "ms" + "\n" + "**Total Users: **" + client.users.size + " users" +
                    "\n" + "**Total Channels: **" + client.channels.size + " channels"
                }
            ]
        }});
}
if (msg.content === prefix + 'bake') {
msg.channel.sendMessage("**When you going to bake a pie but you find a random gif on google...**", {
    file: "C:/Users/PHILSi7/Desktop/botstuff/baking.gif"
});
}

if (msg.content === prefix + 'test') {
  msg.channel.sendMessage(`${msg.guild.memberCount}`)
}
  if (msg.content === prefix + 'cake') {
    msg.reply('a cake! https://www.bbcgoodfood.com/sites/default/files/styles/category_retina/public/recipe-collections/collection-image/2013/05/rosewater-raspberry-sponge-cake.jpg?itok=OVpUSQm9');
  }

if (msg.content === prefix + 'statuspage') {
	msg.author.sendMessage('https://piebot.statuskit.com/');
}

  if (msg.content === prefix + 'good for you') {
    msg.reply('good for you too boi');
  }



  if (msg.content === prefix + 'nigger') {
    msg.reply('im black xD');
  }

  if (msg.content === prefix + 'nibba') {
    msg.reply('im black xD');
  }



  if (msg.content === prefix + 'nigga') {
    msg.reply('im black xD');
  }



  if (msg.content === prefix + 'nazi') {
    msg.reply('You are a Jew.');
  }



  if (msg.content === prefix + 'jew') {
    msg.reply('You are a Nazi.');
  }

  if (msg.content === prefix + 'money') {
    msg.reply(':moneybag: **YOU HAVE $66666.6 IN YOUR BANK ACCOUNT!**');
  }



  if (msg.content === prefix + 'invite') {
    msg.reply('Invite me xD http://bit.ly/piebot666');
  }

  if (msg.content === prefix + 'what about mate') {
    msg.reply('**WHAT ABOUT IT MATE**');
  }



  if (msg.content === prefix + 'luckayy') {
    msg.reply('There was a normal shibe called **Luckayy Lucario**. He was the best dog anyone could find. But then things turned around... The townsfolk started to get too attached to Luckayy. So Luckayy decided to run into the forest. Then the Australian NBN arrived nearby. So he paid money for it. Now he is an Discord Sensation! Because he had internet, he could make memes. So he made a YouTube Channel https://goo.gl/sARjFo. And this is all...');
  }


  if (msg.content === prefix + 'idk') {
    msg.reply('think man, you dont know? Well fuck you..');
  }

  if (msg.content === prefix + 'Wow, really boi?') {
    msg.reply('you wanna fight?');
  }

if (msg.content.startsWith(prefix + 'eat')) {
	if (msg.author.bot) return;
var user = msg.mentions.users.first();
var member = msg.guild.member(user);
if (!user)
	return msg.channel.sendMessage(`**<@${msg.author.id}>** just took a bite from me. Sad :(`);
msg.channel.sendMessage(`**<@${msg.author.id}>** just took a bite from **<@${user.id}>**. Lucky it wasn't me tho.`);
}

  if (msg.content === prefix + 'Its on bro.') {
    msg.reply('meet me after school.');
  }

	if (msg.content.startsWith(prefix + 'report')) {
		if(msg.author.bot) return;
		var reason = msg.content.split(' ').slice(2).join(' ');
		msg.channel.sendMessage(`Thanks <@${msg.author.id}> for reporting this bug. <@265071448182358018> will fix this!`);
		client.channels.get('313136278462005251').send(`<@265071448182358018> \n **Bug Report** \n Name: **${msg.author.username}** \n Id: **<@${msg.author.id}>** \n Message: \n **${msg.content}**`);
}

  if (msg.content === prefix + 'collab') {
    msg.reply('You a YouTuber, hey? Request your collaboration with Pie here: https://goo.gl/forms/AgVOngBpiUS37BF32');
  }

  if (msg.content === prefix + 'avatar') {
    if (msg.author.bot) return;
  var user = msg.mentions.users.first();
  var member = msg.guild.member(user);
  if (!user)
  	return msg.channel.sendMessage(msg.author.avatarURL);
    then(() => {
  msg.reply(msg.user.avatarURL);
})
}

if (msg.content === '.9/11') {
	msg.author.sendMessage('shhh, you got it right, you can now do **9/11** without the **.**');
}

if (msg.content.startsWith === prefix + 'del') {
  var reason = msg.content.split(' ').slice(2).join(' ');
  return msg.reply('Please add how many messages you wanna delete. k thx.');
  then(() => {
  guild.bulkDelete()
msg.channel.sendMessage(`<@${msg.author.id}> has deleted ${number} messages!`)
})
}

if (msg.content === prefix + '9/11') {
	msg.channel.sendMessage('9/11 memories... https://www.youtube.com/watch?v=jRB6GkFPt18');
}

if (msg.content === '.beemovie') {
	msg.author.sendMessage('shhh, you got it right, you can now do **beemovie** without the **.**');
}

if (msg.content === prefix + 'sinvite') {
	msg.author.sendMessage('https://discord.io/piebot420');
}

if (msg.content === prefix + 'beemovie') {
	msg.channel.sendMessage('https://www.youtube.com/watch?v=dSDBr0WjrwQ');
}

if (msg.content === '.pacifistduck') {
	msg.author.sendMessage('shhh, you got it right, you can now do **pacifistduck** without the **.**');
}

if (msg.content === prefix + 'pacifistduck') {
	msg.channel.sendMessage('ADD STORY HERE XD \n Go visit his discord server, its dying :( https://discord.gg/eSxRFna');
}

if (msg.content === '.twatical') {
	msg.author.sendMessage('shh, you got it right, you can now do **twatical** without the **.**');
}

  if(msg.content.startsWith(prefix + "eval")) {
      if(msg.author.bot) return;
  if (msg.author.id !== "265071448182358018")
  return msg.reply("This can only be used by the bot owner.") +
  console.log('Owner only command attemped by: ' + msg.author.username + '(' + msg.author.id + ')' + ' on ' + msg.guild.name + '(' + msg.guild.id + ')');
  var evalcode = msg.content.split(" ").splice(1).join(" ");
  		try {
  			var evaled = eval(evalcode);
  			if (typeof evaled !== "string")
  				evaled = require("util").inspect(evaled);
  			msg.channel.sendMessage("Output:\n```x1\n" + clean(evaled) + "```");
  		}
  		catch (err) {
  			msg.channel.sendMessage("Error: " + clean(err));
  		}

  		function clean(text) {
  			if (typeof(text) === "string") {
  				return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  			}
  			else {
  				return text;
  			}
  		}
      }

if (msg.content === prefix + 'twatical') {
	msg.channel.sendMessage('ADD ANOTHER STORY HERE XD \n Go check out his channel, he is not famous but make him! https://www.youtube.com/channel/UCKEzqCvqYXv7ea548x07KPQ');
}

if (msg.content === '.keemstar') {
	msg.author.sendMessage('shh, you got it right, you can now do **keemstar** without the **.**');
}

  if (msg.content === prefix + 'colorswitcher' + msg.content) {
    let games = [0xFF000, 0xff5400, 0xff9d00, 0xfffa00, 0x94ff00, 0x26ff00, 0x00ff50, 0x00ffd4, 0x00bbff, 0x0033ff, 0x2e00ff, 0x7f00ff, 0xe900ff, 0xff0000]
      setInterval(() => {
        msg.guild.roles.find('name', msg.content).setColor(games[Math.floor(Math.random() * games.length)])
}, 1000)
}

if (msg.content === prefix + 'keemstar') {
	msg.channel.sendMessage('lets get roight into the neeeeeeeeeeeeeeeeeeeeeeeews...');
}

if (msg.content === '.adolfhitler') {
	msg.channel.sendMessage('shh, you got it right, you can now do **adolfhitler** without the **.**');
}

if (msg.content === prefix + 'adolfhitler') {
	msg.channel.sendMessage('the one and only, **Adolf Hitler**. https://www.youtube.com/watch?v=PoQcx89ACV8');
}

 if (msg.content === prefix + 'easteregg') {
   msg.channel.sendMessage('Hey, you want secret commands hey? Try guessing them. **Please add** ``.`` **to the answer or then this idea wont work** \n 1. A plane crash which was terrorism and caused 2 towers in NYC to be demolished \n 2. A meme which was big back last year which started the we are number one and let it grow memes. \n 3. A duck which lives in the Pacifist and who has 20k+ subs. \n 4. A pizza which is good friends with the Duck \n 5. The main person behind the nazi war and who made the Nazi Group. \n 6. A YouTuber which hosts dramaalert and tells you the drama which is going on between YouTubers \n To make it easier, just DM The Falling Pie™#9196. More easter eggs coming very soon.');
}

 if (msg.content === prefix + 'spam') {
   msg.channel.sendMessage('spppppppppppppppppppppppppppppppppppppppppppaaaam');
}

  if (msg.content === prefix + 'hello') {
   msg.channel.sendMessage('Hello Darkness');
}

if (msg.content === prefix + 'ha') {
msg.channel.sendMessage('ah');
}

if (msg.content === prefix + 'ah') {
	msg.channel.sendMessage('ha');
}

  if (msg.content === prefix + 'donate') {
   msg.channel.sendMessage('WWWWWWWWxxxxxaaaaaaaeeeeeeaaaaaaa', {
   tts: true,

})
}

  if (msg.content === prefix + 'My old friend.') {
   msg.channel.sendMessage('What old friend?', {
   tts: true,

})
}

if (msg.content.startsWith( prefix + "pingpie")) {
          if(msg.author.bot) return;
      if (!msg.guild || !msg.member) return;
      var response = ['<@265071448182358018> kys m8', '<@265071448182358018> somebody wants you downstairs', '<@265071448182358018> keemstar is gay', '<@265071448182358018> Hitler is good', '<@265071448182358018> **NO SWEARING OR BAN**', '<@265071448182358018> **IM GOING TO BAN YOU**', '<@265071448182358018> Hitler did not do anything good', '<@265071448182358018> why?', '<@265071448182358018> @ting people is fun m8', '<@265071448182358018> xd', '<@265071448182358018> lol', '<@265071448182358018> put some of that dank music on m8'];
      msg.channel.sendMessage(response[~~(Math.random() * response.length)])
      }

if (msg.content.startsWith( prefix + "roastme")) {
          if(msg.author.bot) return;
      if (!msg.guild || !msg.member) return;
      var response = ['You will always be lonely', 'Just die m8', 'You will never have a life', 'You suck air for breakfast.', 'You got exposed by keemstar 100 times and still no one cares because you do not have a life.', 'you gay.', 'keemstar is fat like you.', 'donald trump is gay with you.', 'you name means death.', 'you will never be a youtuber.'];
      msg.author.sendMessage(response[~~(Math.random() * response.length)])
}

if (msg.content.startsWith(prefix + "pie")) {
          if(msg.author.bot) return;
      if (!msg.guild || !msg.member) return;
      var response = ['A pie! https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Chicken_Pie.JPG/438px-Chicken_Pie.JPG', 'A pie! https://s-media-cache-ak0.pinimg.com/736x/26/d9/7a/26d97aee4ae99df48bad5398739ae74f.jpg', 'A pie! https://s3.amazonaws.com/user-media.venngage.com/310490-a93088016c118ea4088e4cd841962dd2.jpg', 'A pie! http://www.villagepiemaker.com/images/pie-icon.png', 'A pie! https://cdn.discordapp.com/attachments/280976585719545856/303097619583074304/6655-3-large.png', 'A pie! https://cdn.discordapp.com/attachments/280976585719545856/303097635726819330/Z.png', 'A pie! https://cdn.discordapp.com/attachments/280976585719545856/303097814093660160/images.png', 'A pie! https://cdn.discordapp.com/attachments/280976585719545856/303097831579713536/2Q.png', 'A pie! https://cdn.discordapp.com/attachments/280976585719545856/303097844376666112/images.png', 'A pie! https://cdn.discordapp.com/attachments/280976585719545856/303097856414187521/images.png', 'A pie! https://cdn.discordapp.com/attachments/280976585719545856/303097879961141251/images.png', 'A pie! https://cdn.discordapp.com/attachments/280976585719545856/303097918506926080/images.png', 'A pie! https://cdn.discordapp.com/attachments/280976585719545856/303097954364030976/images.png', 'A pie! https://cdn.discordapp.com/attachments/280976585719545856/303097988715249664/images.png', 'A pie! https://cdn.discordapp.com/attachments/280976585719545856/303098019644178433/images.png', 'A pie! https://cdn.discordapp.com/attachments/280976585719545856/303098044658876428/images.png', 'A pie! https://cdn.discordapp.com/attachments/280976585719545856/303098064082829314/images.png', 'A pie! https://cdn.discordapp.com/attachments/292205020403728384/309281358583169025/2017-05-03-12-53-20-397298139.jpg'];
      msg.channel.sendMessage(response[~~(Math.random() * response.length)])
}


  if (msg.content === prefix + 'bubzyz') {
   msg.channel.sendMessage('**BubzYz is really one of the cool dogs. I think you should check him out.** \n https://www.youtube.com/channel/UCm3m8-6I5FLnO2FS0-U0nBw **- His YouTube** \n https://twitter.com/BuBzYzLOLxD **- His Twitter**');
}

if (msg.content === prefix + 'grandayy') {
  msg.channel.sendMessage("Grandayy is more than just a person, he's the biggest memer alive on YouTube with over 240,000 Subs! He is the dankest one and really started the wano stuff become a thing like it is now. btw pie bot is on grandayy's server lol. So yep. Grandayy will be remembered in history as one of main memers.");
}

  if (msg.content === prefix + 'aspect') {
   msg.channel.sendMessage('I sexually Identify as an Attack Helicopter. Ever since I was a boy I dreamed of soaring over the oilfields dropping hot sticky loads on disgusting foreigners. People say to me that a person being a helicopter is Impossible and Im fucking retarded but I dont care, Im beautiful. Im having a plastic surgeon install rotary blades, 30 mm cannons and AMG-114 Hellfire missiles on my body. From now on I want you guys to call me "Apache" and respect my right to kill from above and kill needlessly. If you cant accept me youre a heliphobe and need to check your vehicle privilege. Thank you for being so understanding.', {
  })}
});


client.on('ready', () => {
client.user.setGame(`p.helpme | On ${client.guilds.size} Servers!`)
console.log('Just test me already!');
});

client.login('');
