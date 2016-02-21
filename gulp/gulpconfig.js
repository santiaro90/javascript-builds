var path = require('path');
var client = path.resolve('./client');
var build = path.resolve('./public');

module.exports = {
    bundle: {
        dest: build + '/scripts',
        entries: client + '/app/main.jsx',
        name: 'bundle.js'
    },

    styles: {
        browsers: ['last 2 versions', '> 5%'],
        dest: build + '/styles',
        src: client + '/styles/**/*.scss'
    }
};
