var path = require('path');
var client = path.resolve('./client');
var build = path.resolve('./public');

module.exports = {
    bundle: {
        entries: client + '/app/main.jsx',
        dest: build + '/scripts',
        name: 'bundle.js'
    }
};
