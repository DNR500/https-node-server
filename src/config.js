'use strict;'
const fs = require('fs');

var config = {
    https: {
        port: 3000,
        serverOptions: {
            key  : fs.readFileSync('./cert/server.key'),
            cert : fs.readFileSync('./cert/server.crt')
        }
    },
    http: {
        port: 3001
    }
};

module.exports =  config;