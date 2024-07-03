const fs = require('fs');

module.exports = {
	config: {
		name: "💙",
		version: "1.0",
		author: "Nazrul",
		countDown: 3,
		role: 0,
		Description: { vi: "", en: "Nazrul Project Video" },
		category: "no prefix",
		guide: { en: "💙" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const nazrulMsg = "⊹⊱︵✰⚡[ 𝑷𝒓𝒆𝒇𝒊𝒙 𝑬𝒗𝒆𝒏𝒕 ]⚡✰︵⊰⊹                                     ⊰᯽⊱┈──╌❊💫❊╌──┈⊰᯽⊱\n                                                              \n                               \n _>“___ তুমি'টা হতে হবে নব্বই দশকের মতো হাজার মানুষের ভিড়ে যার নজর থাকবে শুধু আমার  দিকে ..!🌸♡\n\n 💁😘🪽\n\⊰᯽⊱┈──╌❊[ 💕 ]❊╌──┈⊰᯽⊱\n︵❣💫[  𝐂𝐫𝐞𝐚𝐭𝐨𝐫: 𝐇𝐮𝐬𝐬𝐚𝐢𝐧   ]💫❣︵\n[ 𝐏𝐫𝐞𝐟𝐢𝐱 ]  :  【 ? 】\n\n[ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 ]  𝐇𝐮𝐬𝐬𝐚𝐢𝐧💫𝐏𝐫𝐨𝐣𝐞𝐜𝐭⛱️";
		const imgur = ["https://i.imgur.com/Ye4sOTO.mp4",
"https://i.imgur.com/3LBzIT6.mp4",
"https://i.imgur.com/p7pIZys.mp4",
"https://i.imgur.com/aH0xfeQ.mp4",
"https://i.imgur.com/drOv5RJ.mp4",
"https://i.imgur.com/IbxtRDW.mp4",
"https://i.imgur.com/5Vc9LXW.mp4"]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
		
		message.reply({
			body: ` ${nazrulMsg}`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body.indexOf("🖤")==0 || (event.body.indexOf("💙")==0) || event.body.indexOf("💛")==0 ||
event.body.indexOf("🧡")==0 ||
event.body.indexOf("💚")==0 ||
event.body.indexOf("💜")==0 ||
event.body.indexOf("🤎")==0 ||
event.body.indexOf("❤️‍🩹")==0 ||
event.body.indexOf("❤️")==0 ||
event.body.indexOf("💙")==0) {
			this.onStart({ message });
		}
	}
};
