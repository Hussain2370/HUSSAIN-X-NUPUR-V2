const fs = require('fs');

module.exports = {
	config: {
		name: "😅",
		version: "1.0",
		author: "Nazrul",
		countDown: 3,
		role: 0,
		Description: { vi: "", en: "Nazrul Project Video" },
		category: "no prefix",
		guide: { en: "😞" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const nazrulMsg = "⊹⊱︵✰⚡[ 𝑷𝒓𝒆𝒇𝒊𝒙 𝑬𝒗𝒆𝒏𝒕 ]⚡✰︵⊰⊹                                     ⊰᯽⊱┈──╌❊💫❊╌──┈⊰᯽⊱\n                                                              \n                               \n _>“___জীবন নিয়ে কতো কাহিনী,, অথচ নিশ্বাস বন্ধ হলে জীবনের গল্প শেষ ..!🌸♡\n\n 💁😘🪽\n\⊰᯽⊱┈──╌❊[ 💕 ]❊╌──┈⊰᯽⊱\n︵❣💫[  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙃𝙐𝙎𝙎𝘼𝙄𝙉   ]💫❣︵\n[ 𝐏𝐫𝐞𝐟𝐢𝐱 ]  :  【 ? 】\n\n[ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 ]  𝐇𝐮𝐬𝐬𝐚𝐢𝐧💫𝐏𝐫𝐨𝐣𝐞𝐜𝐭⛱️";
		const imgur = ["https://i.imgur.com/CGhm3PB.mp4",
"https://i.imgur.com/gGIwdJn.mp4",
"https://i.imgur.com/BTO8QNM.mp4",
"https://i.imgur.com/Jo8TJKm.mp4",
"https://i.imgur.com/m4twxVT.mp4",
"https://i.imgur.com/0tSctp8.mp4",   
 "https://i.imgur.com/PqtAjdx.mp4",
"https://i.imgur.com/KOsddPj.mp4",
"https://i.imgur.com/DmAZc1u.mp4",
"https://i.imgur.com/O7HIh6l.mp4",
"https://i.imgur.com/4tsxCHo.mp4",
"https://i.imgur.com/M1rGOGi.mp4"]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
		
		message.reply({
			body: ` ${nazrulMsg}`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body.indexOf("😅")==0 || (event.body.indexOf("🙂")==0) || event.body.indexOf("🥺")==0 ||
event.body.indexOf("😔")==0 ||
event.body.indexOf("☹️")==0 ||
event.body.indexOf("😞")==0 ||
event.body.indexOf("😭")==0 ||
event.body.indexOf("😥")==0 ||
event.body.indexOf("😢")==0 ||
event.body.indexOf("😓")==0 ||
event.body.indexOf("🙁")==0) {
			this.onStart({ message });
		}
	}
};
