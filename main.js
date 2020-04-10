/* eslint-disable comma-dangle */
const Discord = require("discord.js");
const client = new Discord.Client();
const { TOKEN, PREFIX } = require("./config");

client.on("ready", () => {
  console.log(`Hi, ${client.user.username} is now online!`);

  client.user.setPresence({
    status: "online",
    game: {
      name: "coder par Caribou",
      type: "STREAMING",
    },
  });
});

// eslint-disable-next-line arrow-parens
client.on("message", (message) => {
  if (message.content.startsWith(`${PREFIX}ping`)) {
    message.channel.send("Pong!");
  }
});

client.login(TOKEN);
