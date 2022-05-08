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
                    label: 'Mineur',
                    description: ('Vous êtes mineur'),
                    value: '972456705696866334'
                },
                {
                    label: 'Majeur',
                    description: ('Vous êtes majeur'),
                    value: '972456705671696423'
                },
            ])
    )

module.exports = {
    name: "age",
    category: 'utils',
    permissions: ['ADMINISTRATOR'],
    usage: 'age',
    exemples: ['age'],
    description: 'age',
    async run(client, message, args) {
        await message.channel.send({ content: '__**Selectionne ton âge :**__', components: [selectMenu] });
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ content: 'Cliquer sur les boutons', components: [selectMenu] });
    },
};