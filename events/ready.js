const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
        console.log(`Bot is in ${client.guilds.cache.size} servers:`);
        client.guilds.cache.forEach(guild => {
            console.log(` - ${guild.name} (${guild.id})`);
        });
    }
}; 