const fs = require("fs");
module.exports.config = {
name: "lofi",
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
	if (event.body.indexOf("lofi")==0 || (event.body.indexOf("lofi")==0)) {
		var msg = {
				body: "Nhạc lofii của bạn đây! ",
				attachment: fs.createReadStream(__dirname + `/noprefix/lofi.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}