'use strict;'
const express = require('express');
const Server = require('http').Server;
const urlUtils = require('../utils/url-utils');
const config = require('../config');

const app = express();
const http = Server(app);

var server;

function startHttpsRedirect(port, callback) {
    app.get('*',function(req,res){
        res.redirect(urlUtils.createHttpsRedirectUrl(req, config.https.port));
    });
    start(port, callback);
}

function start(port, callback) {
    port = port || 80;

    server = http.listen(port, function(){
        if(callback){
            callback();
        }
        console.log('http server started on port:' + port); //eslint-disable-line no-console
    });
}

function stop(){
    if(server){
        server.close();
    }
}

module.exports = {
    start: start,
    startHttpsRedirect: startHttpsRedirect,
    stop: stop,
    app: app,
    http: http
};


//var http = express.createServer();
//
//// set up a route to redirect http to https
//http.get('*',function(req,res){
//    console.log(req.headers.host)
////    res.redirect('https://mydomain.com'+req.url)
//})