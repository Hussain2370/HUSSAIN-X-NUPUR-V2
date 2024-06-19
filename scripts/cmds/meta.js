const axios = require('axios');
const fs = require('fs-extra');
const baseApiUrl = async () => {
  const base = await axios.get(`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`);
  return base.data.api;
}; 

module.exports = {
config:{
  name: "meta",
    aliases: ["img5"],
    version: "6.9.0",
    author: "dipto",
    countDown: 15,
    role: 0,
    shortDescription: "photo genarate",
    longDescription: "Photo genarate from meta ai",
    category: "imagination",
    guide: {
      en: "{pn} [prompt]"
    }
},
onStart:async function ({ args, event, api }) {
  try {
    const prompt = args.join(" ");
    const wait = await api.sendMessage("𝐏𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐧𝐠 𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭 ⛱️", event.threadID);
    const response = await axios.get(`${await baseApiUrl()}/meta?prompt=${encodeURIComponent(prompt)}&key=dipto008`);
    const data = response.data.imgUrls;
     await api.unsendMessage(wait.messageID);
    await api.sendMessage({
      body: `𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐅𝐮𝐥𝐥 ⚡⛱`,
      attachment: await global.utils.getStreamFromURL(data)
    }, event.threadID ,event.messageID);
  } catch (e) {
    console.error(e);
    await api.sendMessage(`Failed to genarate photo!!!!\rror: ${e.message}`, event.threadID);
   }
 }
};
