const fs = require('fs-extra');
const axios = require('axios');

module.exports.config = {
  name: "tik",
  aliases: ["tiktok", "tikdl", "tiktokvd" ], 
  version: "1.0.",
  role: 0,
  author: "nazrul",
  description: "TikTok Video Downloader",
  category: "video downloader",
  usages: "[tiktok video link]",
  countDowns: 2
};

module.exports.onStart = async function ({ api, event, args }) {
  let link = args.join(" ");

  if (!link) {
    api.sendMessage("Please put a valid TikTok video link", event.threadID, event.messageID);
    return;
  }

  api.sendMessage("𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑇𝑖𝑘𝑡𝑜𝑘 𝑉𝑖𝑑𝑒𝑜 ⛱️", event.threadID, event.messageID);

  try {
   let path = __dirname + `/cache/`;
    const res = await axios.get(`https://s2hjpf-8888.csb.app/tiktok?link=${encodeURI(link)}`);
    await fs.ensureDir(path);
   path += 'N4ZR9L.mp4';
    const data = res.data;
    const vid = (await axios.get(data.play, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(vid, 'stream'));
    api.sendMessage({
      body: `𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑 𝑆𝑢𝑐𝑐𝑠𝑒𝑠𝑠𝐹𝑢𝑙𝑙 🫦⛱️`, attachment: fs.createReadStream(path)
    }, event.threadID, () => fs.unlinkSync(path), event.messageID);

  } catch (e) {
    api.sendMessage(`${e}`, event.threadID, event.messageID);
  };
}; 
