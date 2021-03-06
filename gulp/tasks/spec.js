var config = require('../gulpconfig').specs;
var args = require('yargs').argv;

function spec(gulp, plugins) {
    config.require = ['babel-core/register'];

    return gulp.src(config.src)
        .pipe(plugins.mocha(config));
}

module.exports = spec;
