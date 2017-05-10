const request = require('request');
const maxCont = 6;

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
            return callback(err);
        }

        const numStart = body.search(/[0-9]+ contributions/);
        const num = body.substr(numStart, maxCont).split(" ")[0];

        callback(undefined, num);
    });
};

module.exports = function(username, timeout, callback){
    return getCommits(username, timeout, callback);
};
