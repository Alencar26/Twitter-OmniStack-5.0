const Tweet = require('../models/Tweet');


module.exports = {

    async create(request , response) {

        const tweet = await Tweet.findById(request.params.id);

        tweet.set({ like: tweet.like + 1 });
        await tweet.save();

        request.io.emit('like' , tweet);

        return response.json(tweet);
    },

};