const Tweet = require('../models/Tweet');


module.exports = {

    async list(request , response) {

        // sinal de menor no codigo abaixo ('-createdAt') -> é para ele inverter a listagem pra pegar do mais recente para o mais antigo(de cima para baixo)
        const tweets = await Tweet.find({}).sort('-createdAt');

        return response.json(tweets);

    },

    async create(request , response) {

        const tweet = await Tweet.create(request.body);

        // informando usauários que um novo tweet foi criado
        request.io.emit('tweet' , tweet);

        return response.json(tweet);

    },
}