const { SlashCommandBuilder } = require('discord.js');

function randomNumber() {
    return Math.floor((Math.random() * 100) + 1);
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('random')
        .setDescription('Replies with Random number!'),
    async execute(interaction) {
        await interaction.reply(`Random (0-100):  ${randomNumber()}`);
    },
};