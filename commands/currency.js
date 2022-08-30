const { SlashCommandBuilder } = require('discord.js');
const CC = require("currency-converter-lt");

const usdCurrencyConverter = new CC();
const eurCurrencyConverter = new CC();
const gbpCurrencyConverter = new CC();

let usd = 0;
let eur = 0;
let gbp = 0;

usdCurrencyConverter
    .from("USD")
    .to("TRY")
    .amount(1)
    .convert()
    .then((response) => {
        usd = response;
    });

eurCurrencyConverter
    .from("EUR")
    .to("TRY")
    .amount(1)
    .convert()
    .then((response) => {
        eur = response;
    });

gbpCurrencyConverter
    .from("GBP")
    .to("TRY")
    .amount(1)
    .convert()
    .then((response) => {
        gbp = response;
    });

module.exports = {
    data: new SlashCommandBuilder()
        .setName('currency')
        .setDescription('Replies with Exchange Rates!'),
    async execute(interaction) {
        await interaction.reply(`USD = ${usd} TRY \nEUR = ${eur} TRY \nGBP = ${gbp} TRY`);
    },
};