var del = require('del');
var config = require('../gulpconfig');

function clean() {
    return del([config.bundle.dest, config.styles.dest]);
}

module.exports = clean;
