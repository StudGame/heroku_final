const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "poll",
    category: 'utils',
    permissions: ['ADMINISTRATOR'],
    description: 'Poster votre propore sondage',
    run(client, message, args) {
    
    },
    options: [
        {
            name: 'title',
            description: 'Taper le titre de votre sondage',
            type: 'STRING',
            required: true,
        },
        {
            name: 'content',
            description: 'Taper la question de votre sondage',
            type: 'STRING',
            required: true,
        },
    ],
    async runInteraction(client, interaction) {
        const pollTitle = interaction.options.getString('title');
        const pollContent = interaction.options.getString('content');

        const embed = new MessageEmbed()
            .setTitle(pollTitle)
            .setColor('#00a3b5')
            .setDescription(pollContent)
            .setTimestamp()
            .setFooter({ text: `Nouveau sondage généré par ${interaction.user.tag} !`});
        
            const poll = await interaction.reply({ embeds: [embed], fetchReply: true });
            poll.react('<a:829316992112525313:971037647092973638>');
            poll.react('<a:482704348011298816:971037517266710568>');
    },
};