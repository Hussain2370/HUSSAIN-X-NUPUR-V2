const fs = require('fs');

module.exports = {
	config: {
		name: "🤍",
		version: "1.0",
		author: "Nazrul",
		countDown: 3,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "no prefix",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const nazrulMsg = "⊹⊱︵✰⚡[ 𝑷𝒓𝒆𝒇𝒊𝒙 𝑬𝒗𝒆𝒏𝒕 ]⚡✰︵⊰⊹                                     ⊰᯽⊱┈──╌❊💫❊╌──┈⊰᯽⊱\n                                                              \n                               \n _>“___ ভালোবাসা সুন্দর 🥰 যদি আপনি ভালোবাসতে জানেন ..!🌸♡\n\n 💁😘🪽\n\⊰᯽⊱┈──╌❊[ 💕 ]❊╌──┈⊰᯽⊱\n︵❣💫[  𝐂𝐫𝐞𝐚𝐭𝐨𝐫: ♡ 𝙃𝙐𝙎𝙎𝘼𝙄𝙉 ♡   ]💫❣︵\n[ 𝐏𝐫𝐞𝐟𝐢𝐱 ]  :  【 ? 】\n\n[ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 ] 𝐇𝐮𝐬𝐬𝐚𝐢𝐧💫𝐏𝐫𝐨𝐣𝐞𝐜𝐭⛱️ ";
		const imgur = ["https://i.imgur.com/XRwMcPb.mp4",
"https://i.imgur.com/FfTd3I7.mp4",
"https://i.imgur.com/6cGcPQR.mp4",
"https://i.imgur.com/SKU9FI9.mp4",
"https://i.imgur.com/I8nJPl1.mp4",
"https://i.imgur.com/uL3wsTZ.mp4",     "https://i.imgur.com/KDaIcmB.mp4",
"https://i.imgur.com/upNhNUb.mp4",
"https://i.imgur.com/NimjyJ1.mp4",
"https://i.imgur.com/CbuuGy6.mp4",
"https://i.imgur.com/P2WXFm2.mp4",
"https://i.imgur.com/68fqLKA.mp4"]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
		
		message.reply({
			body: ` ${nazrulMsg}`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "🤍") {
			this.onStart({ message });
		}
	}
};
