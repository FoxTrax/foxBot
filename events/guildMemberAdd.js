const { Events } = require("discord.js");

module.exports = {
    name: Events.GuildMemberAdd,
    async execute(member) {
        try {
            // Get the default channel or a specific channel by ID
            const welcomeChannel = member.guild.channels.cache.find(
                channel => channel.name === 'welcome' // Change this to your welcome channel name
            ) || member.guild.systemChannel;

            if (!welcomeChannel) return;

            await welcomeChannel.send({
                content: `Welcome to the server, ${member}! 🎉\nWe're now ${member.guild.memberCount} members!`
            });
        } catch (error) {
            console.error('Error in welcome message:', error);
        }
    },
}; 