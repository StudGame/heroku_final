const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('accept-button')
            .setLabel('Accepter')
            .setStyle('SUCCESS'),

        new MessageButton()
            .setCustomId('refuse-button')
            .setLabel('Refuser')
            .setStyle('DANGER'),
    )

    const reglementembed = new MessageEmbed()
        .setTitle('Règlement du Serveur')
        .setDescription('**__Règlement Général applicable sur l’ensemble des salons :__**\n\n❀ ➳ La politesse et la courtoisie envers les membres ainsi que la modération sont de mise. Tous propos diffamatoires, provocations et insultes seront immédiatement sanctionnées.\n❀ ➳ En cas de conflit, les membres sont priés de s’adresser directement à la modération et ne pas réagir aux provocations.❀ ➳ Un effort sur l’orthographe sera fortement apprécié, ne pas écrire EN MAJUSCULES.\n❀ ➳ Ce discord est un endroit neutre : les propos racistes, homophobes, sexistes et/ou religieux sont interdits.\n❀ ➳ Les liens renvoyant vers de sites frauduleux, à caractères pornographiques, illégaux ou de piratage sont interdits.\n❀ ➳ Il est interdit de spam/flood, que ce soit en terme(s) d’image(s) et/ou de texte(s).\n❀ ➳ Tout contournement d’un mute ou d’un bannissement (par la réinscription sous un autre compte par exemple) sera sanctionné sans délais.\n❀ ➳ Toute forme de publicité est interdite.\n❀ ➳ La demande d’informations personnelles de quelque nature que ce soit (ceci inclus notamment les informations de compte) sont interdites.\n❀ ➳ Tout contenu inapproprié, c’est-à-dire tout contenu dérangeant, déplacé ou simplement inadéquat, sera supprimé par la modération. Ceci inclus entre-autre et de manière non exhaustive du contenu faisant référence à de la nudité, des violences réelles ou simulées ou à caractères sexuels.\n\n**__Les avatars/pseudos :__**\n\n❀ ➳ Les avatars et pseudos doivent être différent de celui des autres membres.\n❀ ➳ Les pseudos ne doivent pas être insultant et avoir une quelconque appartenance politique /religieuse /sexuel/terrorisme/personnalité.\n❀ ➳ Les codes de parrainages dans les pseudos/avatars sont interdits.\n\n__**Règlement relatif aux salons spécifiques :**__\n\n❀ ➳ Les membres sont priés de respecter les thématiques de chaque salon, tout post hors sujet pourra être supprimé par la modération du serveur.\n❀ ➳ Seules les publications qui contiennent un lien, une photo ou une vidéo en relation avec le thème du salon y sont autorisées. Toutes les discussions relatives aux contenus postés sur ces salons sont à faire dans le salon #taverne et pourront faire l’objet d’une suppression par la modération.\n\n**__Règlement relatif aux salons vocaux :__**\n\nL’ensemble des règles de bonne conduite s’appliquent également aux salons vocaux ceci inclus notamment et de manière non exhaustive :\n\n❀ ➳ La politesse et la courtoisie envers les autres membres présents dans le salon vocal. Tous propos diffamatoires, trolls, provocations et insultes seront sanctionnés.\n❀ ➳ Les membres s’astreignent à ne pas tenir des propos racistes, homophobes, sexistes, à caractères sexuels et religieux dans ces salons.\n❀ ➳ Tout harcèlement, sous quelques formes que ce soit, sera immédiatement sanctionné\n❀ ➳ Les membres présents dans un salon vocal s’obligent à ne pas intervenir de manière non pertinente et ne pas perturber le bon fonctionnement de la communication des membres présents et du stream en cours le cas échéant.\n\n**__Règlement relatif aux invitations :__**\n\n❀ ➳ Il est interdit d’envoyer une invitation à un membre d’un autre discord sans avoir discuté au préalable avec lde parler à répéui, et s’être assuré qu’il veuille bien de cette invitation.\n❀ ➳ Il est interdit répétition (spam) du serveur sur un autre serveur qui n’autorise pas la publicité.\n\__**Manquement(s) au règlement :**__❀ ➳ Tout manquement au règlement fera l’objet de sanctions de la part des modérateurs et/ou des administrateurs du serveur.\n❀ ➳ La sanction pourra être prise à postériori (se basant sur la faute commise) ,(Ceci inclus également les salons vocaux).\n❀ ➳ La modération se fait par l’intermédiaire des membres disposant du @「」Pôle Modération .\n\n**__TOS Discord :__**\n\nhttps://discord.com/terms\n\n**Le staff se donne le droit de modifier le règlement à tous moment ! ^^**')
        .setFooter({ text: 'Bienvenue sur le serveur'})
        .setTimestamp()

module.exports = {
    name: "reglement",
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    usage: 'reglement',
    exemples: ['reglement'],
    description: 'La commande reglement permet d\'envoyer l\'embed des règles',
    async run(client, message, args) {
        await message.channel.send({ embeds: [reglementembed], components: [buttons] });
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ embeds: [reglementembed], components: [buttons] });
    },
};