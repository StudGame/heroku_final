module.exports = {
    name: "accept-button",
    async runInteraction(client, interaction) {
        await interaction.member.roles.add('972456705696866338')
        await interaction.reply({ content: 'Vous avez accepté le règlement !', ephemeral: true
        });
    }
};