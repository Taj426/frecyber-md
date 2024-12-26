//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Dar Es Salam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Frecyber/Frecyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "255620814108,255764182801,255776663848,255752593977";
global.sudo = process.env.SUDO || "255620814108,255764182801,255776663848,255752593977";
global.owner = process.env.OWNER_NUMBER || "255674402466";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUpndTlOb014WEc4blg4T3V3RnZVWm95R0llWDRuVlp0SURMc1hnWnRVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaC9jZTEvNENDUEljekxMNEkyaTMyOU5iQ1YyNU8vMU1UU2dTM0JpcWZnND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRkZ0c3p6cG1qQUJWR1N2SzN0S0hWK3dvRDFPbnVZUTFlNk1OMmJtV0hZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Z0QwQnBGUjFqZ2pwSVRubmwxR1c4Q0JtL0Q1NlorMEd5ODdSdGZ2L2lnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFJV0wxUnNyV0ZITEduUHlQQXBXc0F1Y2l3YmlEcER0ajczZ2ptODZrSGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpmeGpha1FoSmV3OFpvYlRMVDdiVk92cWZTaytaT09oOU5vN2hEcEFXMW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0FoUk5GbmJ1U3Z4UThZWTFDU1VoNXZPTjFwbzJnM3c4bzdjTW9LQ0psND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0ZVTDA1REdrUFoxdzRJZTEyNmR6clBkTWEzQkhXYTQycXB6eFdEb3NGYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Img3S3dueERCTnp5UDBLTzhvanVxeFJ4bWlqV0IzRnJCWE9wVUVORXQwVUlqUCtYVGQyMEQvemZYcXc1eHoreXVzT1drQmtGNHpwSkcwd1R2Y0RBV0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MCwiYWR2U2VjcmV0S2V5IjoibkxaeW1iSFFiZ3BHNjBxcXpNSXdFMExlcGFXZmJvSWl1NjNTRjBrRFRpUT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU2NzQ0MDI0NjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjYzQjEwQTRFNUYzRjVCMzFBQ0ZCODVCNzdBQkIxQjMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNTIwODgyMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1Njc0NDAyNDY2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjkxOUZDNDI5QjhGRDg5MEUzNzFCRkE5OTc3MkREMjQ4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzUyMDg4MjJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkNEdEtBV0NrUlE2cjFfOUNUWUtPMGciLCJwaG9uZUlkIjoiYWE0MTY3YjEtMmM0My00MDMyLWJmYzUtNzMyZGJjMjZjMDE1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhVUEpmWDFsbzNGMnV6ZHdEUlJ0L0lyL3I0MD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSXQ5MSt5YldsTXJVcHFjb3BpVWxleXBpdkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTU1XS05IMVEiLCJtZSI6eyJpZCI6IjI1NTY3NDQwMjQ2NjozMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLgvJLwnZCDLvCdkIngvJIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ovSnNad0hFT1RldExzR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJYYmRrUGsxUzVsUXAydGFqRmZIdmV3YWd2cXBqVkdPT1hzZmJ3cTJjU009IiwiYWNjb3VudFNpZ25hdHVyZSI6ImU4TnRmQ3JKaXdoWWp0SUpQTmZNcVBrTGQva0NoRmdrcklYYy9lSFdUbUo5UFFaYmxEWldnc0w5YzNBeXNpbXFYWWdOVUJQTHpURi9HVjFVU3NaMEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyRkhwMXhHSDlWMzkxR3JwaWI1eGZJMThWRWhrb21EUGZXbWRaNUhOQVl4OHpaaERlQkgyTllnUXpxZWF6bGxtdDhwWCswVG1wVUZ4SWoyRWwzOW9Cdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTY3NDQwMjQ2NjozMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkbDIzWkQ1TlV1WlVLZHJXb3hYeDczc0dvTDZxWTFSampsN0gyOEt0bkVqIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1MjA4ODE3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURSdSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐅𝚪𝚵𝐂𝐘𝚩𝚵𝚪 𝚳𝐃",
  author: process.env.PACK_AUTHER || "༒𝐃.𝐉༒",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "༒𝐃.𝐉༒-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "༒𝐃.𝐉༒",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
