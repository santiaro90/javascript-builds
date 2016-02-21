var config = require('../gulpconfig');
var del = require('del');

function clean() {
    return del([config.bundle.dest, config.styles.dest]);
}

module.exports = clean;
