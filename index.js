const Discord = require("discord.js");
require("discord-reply"); // Initializing Discord-Reply
const bot = new Discord.Client();
const Tesseract = require("tesseract.js"); // Initializing Tesseract, this module is essential for OCR

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", (msg) => {
  
});

bot.login("token");