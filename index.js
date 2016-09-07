const request = require('request');

const getCommits = function(username, timeout, callback){
    if(callback === undefined){
        callback = timeout;
        timeout = 4000;
    }

    const url = "http://github.com/" + username;
    const opts = {
        url: url,
        timeout: timeout
    };

    request(opts, (err, response, body) => {
        if (err) {
            throw new Error(err);
        }

        // Get contribution count
        let split = body.split(" ");
        let index = split.indexOf('contributions') - 1;
        callback(split[index]);
    });
};

module.exports = function(username, timeout, callback){
    return getCommits(username, timeout, callback);
};
