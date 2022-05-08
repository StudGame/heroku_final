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
                    label: 'Partenariat',
                    description: ('Vous choissisez le rôle Partenariat'),
                    value: '972903280189517884'
                },
                {
                    label: 'Tik Tok',
                    description: ('Vous choissisez le rôle Tik Tok'),
                    value: '972456705671696415'
                },
                {
                    label: 'Sondage',
                    description: ('Vous choissisez le rôle Sondage'),
                    value: '972456705671696414'
                },
            ])
    )

module.exports = {
    name: "notif",
    category: 'utils',
    permissions: ['ADMINISTRATOR'],
    usage: 'notif',
    exemples: ['notif'],
    description: 'notif',
    async run(client, message, args) {
        await message.channel.send({ content: '__**Selectionne tes rôles notifications :**__', components: [selectMenu] });
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ content: 'Cliquer sur les boutons', components: [selectMenu] });
    },
};