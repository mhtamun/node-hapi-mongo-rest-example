'use strict';

exports.plugin = {
    name: 'routes-books',
    version: '1.0.0',
    register: function (server, options) {
        server.route(require('./routes'));
    }
};