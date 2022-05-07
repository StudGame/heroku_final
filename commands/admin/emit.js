
module.exports = {
    name: "emit",
    category: 'admin',
    //permissions: ['ADMINISTRATOR'],
    description: 'Emettre un evenement au choix !',
    run: (client, message, args) => {
    
    },
    options: [
        {
            name: 'event',
            description: 'Choisir un evenement a emettre',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'guildMemberAdd',
                    value: 'guildMemberAdd'
                },
                {
                    name: 'guildMemberRemove',
                    value: 'guildMemberRemove'
                },
                {
                    name: 'guildCreate',
                    value: 'guildCreate'
                }
            ]
        }
    ],
    runInteraction: (client, interaction) => {
        const evtChoices = interaction.options.getString('event');

        if (evtChoices == 'guildMemberAdd') {
            client.emit('guildMemberAdd', interaction.member);
            interaction.reply({ content: 'Event guildMemberAdd émit!', ephemeral: true });
        } else if (evtChoices == 'guildCreate') {
            client.emit('guildCreate', interaction.guild);
            interaction.reply({ content: 'Event guildCreate émit!', ephemeral: true });
        } else {
            client.emit('guildMemberRemove', interaction.member);
            interaction.reply({ content: 'Event guildMemberRemove émit!', ephemeral: true });
        }
    }
};