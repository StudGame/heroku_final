const Logger = require('../../utils/Logger');

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        Logger.client("Je suis prêt!");

        const devGuild = await client.guilds.cache.get('972456705642344459');
        devGuild.commands.set(client.commands.map(cmd => cmd));
    },
};