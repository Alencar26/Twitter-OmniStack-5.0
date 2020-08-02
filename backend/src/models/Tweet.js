const mongoose = require('mongoose');

// CRIANDO O SCHEMA NO BANCO DE DADOS << INFORMAÇÕES DA "TABELA"
const TweetSchema = new mongoose.Schema({
    author: String, // AUTOR DO TWEET   
    content: String, // CONTEUDO DO TWEET
    like: {             // LIKES DO TWEET < COM VALOR DEFAULT SENDO ZERO
        type: Number,
        default: 0,
    },
    createdAt: {        // DATA DE CRIAÇÃO DO TWEET NO BANCO DE DADOS
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Tweet' , TweetSchema);