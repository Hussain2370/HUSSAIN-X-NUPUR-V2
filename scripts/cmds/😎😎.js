const fs = require('fs');

module.exports = {
	config: {
		name: "😎",
		version: "1.0",
		author: "Nazrul",
		countDown: 3,
		role: 0,
		Description: { vi: "", en: "Nazrul Project Video" },
		category: "no prefix",
		guide: { en: "😎" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const nazrulMsg = "⊹⊱︵✰⚡[ 𝑷𝒓𝒆𝒇𝒊𝒙 𝑬𝒗𝒆𝒏𝒕 ]⚡✰︵⊰⊹                                     ⊰᯽⊱┈──╌❊💫❊╌──┈⊰᯽⊱\n                                                              \n                               \n _>“___ 𝗜 𝗿𝗲𝘀𝗽𝗲𝗰𝘁 𝗘𝘃𝗲𝗿𝘆𝗼𝗻𝗲...!!🙅‍♂️                                     \nকিন্তু আমাকে কেউ অন্যের সাথে তুলনা করলে...!!🥀✨ আমি তাকে পছন্দ করি না  ..!🌸♡\n\n 💁😘😘🪽\n\⊰᯽⊱┈──╌❊[ 💕 ]❊╌──┈⊰᯽⊱\n︵❣💫[  𝐂𝐫𝐞𝐚𝐭𝐨𝐫: 𝙃𝙐𝙎𝙎𝘼𝙄𝙉   ]💫❣︵\n[ 𝐏𝐫𝐞𝐟𝐢𝐱 ]  :  【 ? 】\n\n[ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 ]  𝐇𝐮𝐬𝐬𝐚𝐢𝐧💫𝐏𝐫𝐨𝐣𝐞𝐜𝐭⛱️";
		const imgur = ["https://i.imgur.com/0oyBCeU.mp4",
"https://i.imgur.com/uZON8mm.mp4",
"https://i.imgur.com/0o95Tqo.mp4",
"https://i.imgur.com/HvmUcpb.mp4",
"https://i.imgur.com/Q3hquSO.mp4",
"https://i.imgur.com/14hvDO7.mp4",     "https://i.imgur.com/bYxhJqm.mp4",
"https://i.imgur.com/N336ho5.mp4",
"https://i.imgur.com/RmhEaKt.mp4",
"https://i.imgur.com/wDz6tNm.mp4",
"https://i.imgur.com/XUaxuiq.mp4",
"https://i.imgur.com/BAku6wN.mp4"]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
		
		message.reply({
			body: ` ${nazrulMsg}`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body.indexOf("😎")==0 || (event.body.indexOf("🤑")==0) || event.body.indexOf("🥱")==0 ||
event.body.indexOf("😈")==0 ||
event.body.indexOf("👿")==0 ||
event.body.indexOf("😼")==0 ||
event.body.indexOf("😎")==0 ||
event.body.indexOf("🤟")==0 ||
event.body.indexOf("🤘")==0 ||
event.body.indexOf("😒")==0) {
			this.onStart({ message });
		}
	}
};
