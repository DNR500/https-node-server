'use strict;'
const express = require('express');
const path = require('path');
const https = require('https');
const config = require('../config');
const app = express();

var server;

app.use(express.static(path.resolve(__dirname, '../public/')));

function start(port, callback) {
    port = port || 443;

    server = https.createServer(config.https.serverOptions, app).listen(port, function(){
        if(callback) {
            callback();
        }
        console.log('https server started on port:' + port); //eslint-disable-line no-console
    });
}

function stop(){
    if(server){
        server.close();
    }
}

module.exports = {
    start: start,
    stop: stop,
    app: app,
    https: https
};