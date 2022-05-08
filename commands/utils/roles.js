const { MessageActionRow, MessageSelectMenu } = require('discord.js');

const selectMenu = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('roles-menu')
            .setPlaceholder('Choisir un rôle dans la liste')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
                {
                    label: 'Homme',
                    description: ('Vous êtes un homme'),
                    value: '972456705671696422'
                },
                {
                    label: 'Femme',
                    description: ('Vous êtes une femme'),
                    value: '972456705671696421'
                },
                {
                    label: 'Transgenre',
                    description: ('Vous êtes transgenre'),
                    value: '972456705717846047'
                }
            ])
    )

module.exports = {
    name: "roles",
    category: 'utils',
    permissions: ['ADMINISTRATOR'],
    usage: 'roles',
    exemples: ['roles'],
    description: 'roles',
    async run(client, message, args) {
        await message.channel.send({ content: '__**Selectionne ton genre :**__', components: [selectMenu] });
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ content: 'Cliquer sur les boutons', components: [selectMenu] });
    },
};