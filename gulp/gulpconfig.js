var path = require('path');
var client = path.resolve('./client');
var build = path.resolve('./public');

module.exports = {
    bundle: {
        dest: build + '/scripts',
        entries: client + '/app/main.jsx',
        name: 'bundle.js'
    },

    build: {
        dest: build,
        ignorePath: '/public',
        index: client + '/index.html',
        assets: [build + '/scripts/**/*.js', build + '/styles/**/*.css']
    },

    scripts: {
        src: client + '/app/**/*.jsx'
    },

    styles: {
        browsers: ['last 2 versions', '> 5%'],
        dest: build + '/styles',
        src: client + '/styles/**/*.scss'
    },

    tests: {
        src: client + '/app/**/*.spec.js'
    }
};
