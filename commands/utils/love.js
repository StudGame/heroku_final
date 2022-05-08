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
                    label: '💖・En couple',
                    description: ('Vous êtes en couple'),
                    value: '972456705671696417'
                },
                {
                    label: '💔・Célibataire',
                    description: ('Vous êtes célibataire'),
                    value: '972456705671696418'
                },
                {
                    label: '💞・En crush',
                    description: ('Vous êtes en crush'),
                    value: '972456705671696419'
                },
            ])
    )

module.exports = {
    name: "love",
    category: 'utils',
    permissions: ['ADMINISTRATOR'],
    usage: 'love',
    exemples: ['love'],
    description: 'love',
    async run(client, message, args) {
        await message.channel.send({ content: '__**Selectionne ta situation sentimental :**__', components: [selectMenu] });
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ content: 'Cliquer sur les boutons', components: [selectMenu] });
    },
};