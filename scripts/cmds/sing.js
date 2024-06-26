module.exports = {
 config: {
 name: "sing",
 version: "1.0",
 role: 0,
 author: "kshitiz",
 cooldowns: 5,
 shortdescription: "download music from YouTube",
 longdescription: "",
 category: "music",
 usages: "{pn} music name",
 dependencies: {
 "fs-extra": "",
 "request": "",
 "axios": "",
 "ytdl-core": "",
 "yt-search": ""
 }
 },

 onStart: async ({ api, event }) => {
 const axios = require("axios");
 const fs = require("fs-extra");
 const ytdl = require("ytdl-core");
 const request = require("request");
 const yts = require("yt-search");

 const input = event.body;
 const text = input.substring(12);
 const data = input.split(" ");

 if (data.length < 2) {
 return api.sendMessage("Please specify a music name.", event.threadID);
 }

 data.shift();
 const musicName = data.join(" ");

 try {
 api.sendMessage(`✔ | 𝙎𝙚𝙖𝙧𝙘𝙝𝙞𝙣𝙜 𝙈𝙪𝙨𝙞𝙘 𝙁𝙤𝙧 "${musicName}".\ 𝙋𝙡𝙚𝙖𝙨𝙚 𝙒𝙖𝙞𝙩 💫...`, event.threadID);

 const searchResults = await yts(musicName);
 if (!searchResults.videos.length) {
 return api.sendMessage("𝐤𝐮𝐧𝐚𝐢 𝐦𝐮𝐬𝐢𝐜 𝐯𝐞𝐭𝐢𝐲𝐞𝐧𝐚.", event.threadID, event.messageID);
 }

 const music = searchResults.videos[0];
 const musicUrl = music.url;

 const stream = ytdl(musicUrl, { filter: "audioonly" });

 const fileName = `${event.senderID}.mp3`;
 const filePath = __dirname + `/cache/${fileName}`;

 stream.pipe(fs.createWriteStream(filePath));

 stream.on('response', () => {
 console.info('[DOWNLOADER]', 'Starting download now!');
 });

 stream.on('info', (info) => {
 console.info('[DOWNLOADER]', `Downloading music: ${info.videoDetails.title}`);
 });

 stream.on('end', () => {
 console.info('[DOWNLOADER] Downloaded');

 if (fs.statSync(filePath).size > 26214400) {
 fs.unlinkSync(filePath);
 return api.sendMessage('❌ | 𝐓𝐡𝐞 𝐟𝐢𝐥𝐞 𝐜𝐨𝐮𝐥𝐝 𝐧𝐨𝐭 𝐛𝐞 𝐬𝐞𝐧𝐭 𝐛𝐞𝐜𝐚𝐮𝐬𝐞 𝐢𝐭 𝐢𝐬 𝐥𝐚𝐫𝐠𝐞𝐫 𝐭𝐡𝐚𝐧 25𝐌𝐁.', event.threadID);
 }

 const message = {
 body: `💫 𝙏𝙝𝙞𝙨 𝙄𝙨 𝙮𝙤𝙪𝙧 𝙨𝙤𝙣𝙜 \ ❀ 𝐓𝐢𝐭𝐥𝐞: ${music.title}\ 𝘿𝙪𝙧𝙖𝙩𝙞𝙤𝙣: ${music.duration.timestamp}`,
 attachment: fs.createReadStream(filePath)
 };

 api.sendMessage(message, event.threadID, () => {
 fs.unlinkSync(filePath);
 });
 });
 } catch (error) {
 console.error('[ERROR]', error);
 api.sendMessage('🥱 ❀ 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐫𝐞𝐝 𝐰𝐡𝐢𝐥𝐞 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐧𝐠 𝐭𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝.', event.threadID);
 }
 }
};
