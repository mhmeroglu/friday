const { SlashCommandBuilder } = require('discord.js');
const date = new Date();

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return ([
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
    ].join('.') +
        '\n' +
        [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
            padTo2Digits(date.getSeconds()),
        ].join(':')
    );
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('date')
        .setDescription('Replies with Date!'),
    async execute(interaction) {
        await interaction.reply(`${formatDate(new Date())}`);
    },
};