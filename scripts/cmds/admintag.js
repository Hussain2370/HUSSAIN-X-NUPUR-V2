const fs = require("fs-extra");
module.exports = {
config: {
    name: "admintag",
    version: "1.0",
    author: "Nazrul",
    countDown: 5,
    role: 0,
    shortDescription: "no-prefix",
    longDescription: "Bot Will Reply You In Engish/Bangla Language",
    category: "no prefix",
    guide: {
      en: "{p}{n}",
    }
  },

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {

  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var Messages = ["আ্ঁমা্ঁর্ঁ ব্ঁস্ঁ কে্ঁ ট্যাঁগ্ঁ না্ঁ ক্ঁরে্ঁ এ্কঁটা্ঁ gf  দে্ঁও্ঁ ..!!","_এতো ডাকছো কেনো গো 😒","_𝙆𝙞 𝘽𝙤𝙡𝙗𝙞 𝘽𝙤𝙡 😾","_𝙄 𝙇𝙊𝙑𝙀 𝙔𝙊𝙐 💫"];

    var rand = Messages[Math.floor(Math.random() * Messages.length)]

  if (event.body.indexOf("100071009500533") == 0 || (event.body.toLowerCase() == "Hussain") || (event.body.indexOf("100071009500533") == 0)) {
    var msg = {
      body: `  ${rand} `
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};
