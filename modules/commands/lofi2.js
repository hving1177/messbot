const fs = require("fs");
module.exports.config = {
name: "Sad",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Duck",
	description: "nhạc sad=)",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat sad",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lofi2")==0 || (event.body.indexOf("lofi2")==0)) {
		var msg = {
				body: "Nhạc lofi2 của bạn đây! ",
				attachment: fs.createReadStream(__dirname + `/noprefix/lofi2.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}