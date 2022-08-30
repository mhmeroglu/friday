const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('friday')
		.setDescription('Replies with Selam!'),
	async execute(interaction) {
		await interaction.reply(`Hello ${interaction.user}, I'am Friday at your service.`);
	},
};