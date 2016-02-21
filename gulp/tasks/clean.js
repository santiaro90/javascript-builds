var config = require('../gulpconfig').build;
var del = require('del');

function clean() {
    return del(config.dest + '/*');
}

module.exports = clean;
