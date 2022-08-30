const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Replies with Commands!'),
    async execute(interaction) {
        await interaction.reply("/friday" + "\n" + "/random" + "\n"+ "/date" + "\n" + "/currency");
    },
};