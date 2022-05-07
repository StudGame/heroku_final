const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    id: String,
    prefix: { 'type': String, 'default': '$' },
    logChannel: { 'type': String, 'default': '9972456708423155779'}
});

module.exports = mongoose.model('Guild', guildSchema);