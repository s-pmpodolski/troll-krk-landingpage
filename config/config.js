var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        baseUrl : "http://localhost:3000/",
        root: rootPath,
        app: {
            name: 'troll-krk-landing'
        },
        port: process.env.PORT || 5000
    },

    test: {
        baseUrl : "http://localhost:3000/",
        root: rootPath,
        app: {
            name: 'troll-krk-landing'
        },
        port: process.env.PORT || 5000
    },

    production: {
        root: rootPath,
        app: {
            name: 'troll-krk-landing'
        },
        port: process.env.PORT || 5000
    }
};

module.exports = config[env];
