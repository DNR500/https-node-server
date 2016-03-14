'use strict;'
const httpServer = require('./http');
const httpsServer = require('./https');
const config = require('./config');

httpsServer.start(config.https.port);
httpServer.startHttpsRedirect(config.http.port);