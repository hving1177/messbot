const fs = require("fs");
module.exports.config = {
name: "vd18",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Duck",
	description: "nhạc lofi=)",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat lofi dài",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("vd18")==0 || (event.body.indexOf("vd18")==0)) {
		var msg = {
				body: "sex của bạn đây! ",
				attachment: fs.createReadStream(__dirname + `noprefix/sex.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}