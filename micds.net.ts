const Discord = require("discord.js");
const client = new Discord.Client();

/* Config import */
let config : any;

try {
	config = require(__dirname + '/../config.json');
}
catch (Exception) {
	throw new Error('Please create a config.json file!');
}

import { PingCommand } from './commands/ping';
import { Site } from './commands/site';

let site = new Site();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg : any) => {
	switch (msg.content) {
		case "!ping":
			let ping = new PingCommand();
			msg.reply(ping.ping());
			break;
		case "!checksite":
			site.testSite().then(((res : any) => { msg.reply(res.toString()) })).catch((err : any) => { msg.reply(err.toString()) });
			break;
		case "!quote":
			site.getQuote().then(((res : any) => { msg.reply(res.toString()) })).catch((err : any) => { msg.reply(err.toString()) });
			break;
		case "!lunch":
			site.getLunch().then(((res : any) => { msg.reply(res.toString()) })).catch((err : any) => { msg.reply(err.toString()) });
			break;
		case "!break":
			site.getDates().then(((res : any) => { msg.reply(res.toString()) })).catch((err : any) => { msg.reply(err.toString()) });
			break;
		case "!stats":
			site.getStats().then(((res : any) => { msg.reply(res.toString()) })).catch((err : any) => { msg.reply(err.toString()) });
			break;
		case "!snowday":
			site.getSnowdayChance().then(((res : any) => { msg.reply(res.toString()) })).catch((err : any) => { msg.reply(err.toString()) });
			break;
		case "!sports":
			site.getSportsStats().then(((res : any) => { msg.reply(res.toString()) })).catch((err : any) => { msg.reply(err.toString()) });
			break;
		case "!note":
			site.getNotification().then(((res : any) => { msg.reply(res.toString()) })).catch((err : any) => { msg.reply(err.toString()) });
			break;
		case "!weather":
			site.getWeather().then(((res : any) => { msg.reply(res.toString()) })).catch((err : any) => { msg.reply(err.toString()) });
			break;
		case "!help":
			const embed = new Discord.RichEmbed()
				.setTitle("Commands Help")
				.setAuthor("MyMICDS BOT", "https://mymicds.net/assets/logo/logo.svg")
				/*
				* Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
				*/
				.setColor(0x42F4C2)
				.setDescription("Hopefully this will help you navigate the bot")
				.setFooter("This bot was created by Alex Migala using the Discord.js library | Powered by MyMICDS.net backend", "https://camo.githubusercontent.com/40129aa4640399b5e65cc3c101361a6a0b5d6467/68747470733a2f2f646973636f72642e6a732e6f72672f7374617469632f6c6f676f2e737667")
				/*
				* Takes a Date object, defaults to current date.
				*/
				.setTimestamp()
				//.setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
				.addField("Help",
				"!help coming soon")
				
				.addField("!checksite", "Checks to see if the MyMICDS.net site is online")
				
				.addField("!quote", "Gets a random quote from our database")
				
				.addField("!lunch", "Gets the lunch for today")
				
				.addField("!break", "Gets the next long weekend")
				
				.addField("!stats", "Gets the amount of people registered with the site")
				
				.addField("!spots", "Gets the sports scores")
				
				.addField("!note", "Gets the curent notification")
				
				.addField("!weather", "Gets the current weather at MICDS")
				/*
				* Inline fields may not display as inline if the thumbnail and/or image is too big.
				*/
				//.addField("Inline Field", "They can also be inline.", true)
				/*
				* Blank field, useful to create some space.
				*/
				//.addBlankField(true)
				//.addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
			msg.channel.send({embed});
	}
});

client.login(config.clientToken);