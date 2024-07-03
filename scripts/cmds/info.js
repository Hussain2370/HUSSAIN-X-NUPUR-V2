const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "Nazrul",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const botName = " 𝐇𝐮𝐬𝐬𝐚𝐢𝐧💫𝐏𝐫𝐨𝐣𝐞𝐜𝐭⛱️";
		const botPrefix = "〚 / 〛";
		const authorName = " ♡ 𝑯𝒖𝒔𝒔𝒂𝒊𝒏 ♡ ";
		const ownAge = "『 16+ 』";
		const messenger = "😒";
		const authorFB = "https://www.facebook.com/profile.php?id=100071009500533";
		const authorNumber = "_𝟎𝟏𝟕********";
		const Status = "_Relationship with sumu🦋⛱️";
		const urls = JSON.parse(fs.readFileSync('nazrul.json'));
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `💫《  𝐁𝐨𝐭 𝐀𝐧𝐝 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧  》💫
\𝐵𝑜𝑡 𝑁𝑎𝑚𝑒 : ${botName}
\𝐵𝑜𝑡 𝑆𝑦𝑠𝑡𝑒𝑚 𝑃𝑟𝑒𝑓𝑖𝑥 : ${botPrefix}
\𝑂𝑤𝑛𝑒𝑟 𝑁𝑎𝑚𝑒 : ${authorName}
\𝐴𝑔𝑒  : ${ownAge}
\𝑅𝑒𝑙𝑎𝑡𝑖𝑜𝑛𝑆ℎ𝑖𝑝: ${Status}
\𝑊𝑝 : ${authorNumber}
\𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘 𝐿𝑖𝑛𝑘 : ${authorFB}
\𝐷𝑎𝑡𝑒 : ${date}
\𝑁𝑜𝑤 𝑇𝑖𝑚𝑒 : ${time}
\𝐴𝑛𝑦 𝐻𝑒𝑙𝑝 𝐶𝑜𝑛𝑡𝑎𝑐𝑡 : ${messenger}
\𝐵𝑜𝑡 𝐼𝑠 𝑅𝑢𝑛𝑛𝑖𝑛𝑔 𝐹𝑜𝑟 : ${uptimeString}
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
}; 
