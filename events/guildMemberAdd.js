/* eslint-disable arrow-parens */
module.exports = async (client, member) => {
  member.send("Salut à toi !");
  const channel = client.channels.find((r) => r.name === "general");
  channel.send(`${member} a rejoint le serveur !`);
};
