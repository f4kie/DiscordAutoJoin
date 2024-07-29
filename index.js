const fs = require('fs');
const colors = require('colors');
const config = require('./config.json');
const gradient = require('gradient-string');
const axios = require('axios');
const Discord = require('discord.js-selfbot-v13');

const tokens = fs.readFileSync('tokens.txt', 'utf-8').split('\n').filter(token => token.trim() !== '');

const inviteCode = config.url.split('/').pop();

async function joinServer(token) {
    console.clear();
    console.log(gradient.fruit(`
        • ▌ ▄ ·.  ▄▄▄· .▄▄ · .▄▄ ·      ▐▄▄▄      ▪   ▐ ▄ 
        ·██ ▐███▪▐█ ▀█ ▐█ ▀. ▐█ ▀.       ·██▪     ██ •█▌▐█
        ▐█ ▌▐▌▐█·▄█▀▀█ ▄▀▀▀█▄▄▀▀▀█▄    ▪▄ ██ ▄█▀▄ ▐█·▐█▐▐▌
        ██ ██▌▐█▌▐█ ▪▐▌▐█▄▪▐█▐█▄▪▐█    ▐▌▐█▌▐█▌.▐▌▐█▌██▐█▌
        ▀▀  █▪▀▀▀ ▀  ▀  ▀▀▀▀  ▀▀▀▀      ▀▀▀• ▀█▄▀▪▀▀▀▀▀ █▪
    `));

    const client = new Discord.Client();

    client.on('ready', async () => {
        console.log('[!] '.yellow + 'A conta '.green + `${client.user.username}`.reset + ' foi logada com sucesso!'.green);
        
        try {
            console.log('[*] '.cyan + `Tentando entrar no servidor com o convite: ${inviteCode}`);
            const response = await axios.post(`https://discord.com/api/v9/invites/${inviteCode}`, {}, {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            });
            console.log('[*] '.cyan + `Resposta da API: ${JSON.stringify(response.data)}`);
            console.log('[!] '.yellow + `${client.user.tag} `.reset + 'entrou no servidor com sucesso!'.green);
        } catch (error) {
            console.error('[!] '.red + `Erro ao entrar no servidor com o token ${token}:`);
            if (error.response) {
                console.error(`[!] Status: ${error.response.status}`.red);
                console.error(`[!] Dados: ${JSON.stringify(error.response.data)}`.red);
            } else {
                console.error(`[!] Mensagem: ${error.message}`.red);
            }
        }

        client.destroy();
    });

    client.on('error', err => {
        console.error('[!] '.red + `Erro de cliente: ${err.message}`.reset);
    });

    console.log('[*] '.cyan + `Tentando logar com o token: ${token}`);
    client.login(token).catch(err => {
        console.error('[!] '.red + `Erro ao logar com o token: ${token} - ${err.message}`.reset);
    });
}

tokens.forEach(token => {
    joinServer(token);
});
