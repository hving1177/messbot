module.exports.config = {
  name: "vdvip",
  version:"1.1.1",
  hasPremssion: 0,
  credits: "HieuSimpRin",
  description: "Video sex",
  commandCategory: "Giải trí",
  usages: "video sex",
cooldowns: 0
};
module.exports.run = async ({ api, event }) => {
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
const axios = require('axios');
const request = require('request');
const fs = require("fs");
if (thu == 'Sunday') thu = '𝗖𝗵𝘂̉ 𝗻𝗵𝗮̣̂𝘁'
if (thu == 'Monday') thu = '𝗧𝗵𝘂̛́ 𝗵𝗮𝗶'
if (thu == 'Tuesday') thu = '𝗧𝗵𝘂̛́ 𝗯𝗮'
if (thu == 'Wednesday') thu = '𝗧𝗵𝘂̛́ 𝘁𝘂̛'
if (thu == "Thursday") thu = '𝗧𝗵𝘂̛́ 𝗻𝗮̆𝗺'
if (thu == 'Friday') thu = '𝗧𝗵𝘂̛́ 𝗦𝗮́𝘂'
if (thu == 'Saturday') thu = '𝗧𝗵𝘂̛́ 𝗯𝗮̉𝘆'
const res = await
axios.get('https://lon-1.mhieu14012008.repl.co/thinh');
 var thinh = res.data.data;
 axios.get('https://vdvip.trickertnam.repl.co/vdvip/php').then(res => {
let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
let callback = function () {
        api.sendMessage({
           body: `===== 『 𝐕𝐈𝐃𝐄𝐎 』 =====\n◆━━━━━━━━━━━━━◆\n➢『🧸』 𝐒𝐨̂́ 𝐯𝐢𝐝𝐞𝐨 𝐡𝐢𝐞̣̂𝐧 𝐜𝐨́ 𝐥𝐚̀: 500\n➢『⏰️』𝐇𝐨̂𝐦 𝐧𝐚𝐲 𝐥𝐚̀ ${thu}\n➢『💓』𝐓𝐡𝐢́𝐧𝐡: ${thinh}\n➢『⏳』𝐁𝐚̂𝐲 𝐠𝐢𝐨̛̀ 𝐥𝐚̀:\n⏰= [ ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")} ] =⏰\n━━━━━━━━━━━━━━━━━\n`,
          attachment: fs.createReadStream(__dirname + `/cache/vdgai.${ext}`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vdgai.${ext}`), event.messageID);
      };
      request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/vdgai.${ext}`)).on("close", callback);
    })
}
