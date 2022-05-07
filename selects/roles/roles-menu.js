module.exports = {
    name: "roles-menu",
    async runInteraction(client, interaction) {
        await interaction.member.roles.add(interaction.values[0]);
        await interaction.reply({ content: 'Votre genre a été définis', ephemeral: true});
    }
};