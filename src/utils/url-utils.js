'use strict;'

function removePortFromHost(host) {
    return host.split(':')[0];
}

function createHttpsRedirectUrl(req, port) {
    return 'https://' + removePortFromHost(req.headers.host) + ':' + port + req.url;
}

module.exports = {
    createHttpsRedirectUrl:createHttpsRedirectUrl
};