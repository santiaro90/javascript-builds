var args = require('yargs').argv;
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

var config = require('../gulpconfig').bundle;

function bundle(gulp, plugins) {
    // Calling `gulp bundle -d` (debug) adds sourcemaps to the bundle
    // Notice that uglify will get rid of sourcemaps
    config.debug = !!args.d;

    var bundler = browserify(config).transform(babelify);

    return bundler.bundle()
        .on('error', function onError(message) {
            plugins.util.log(plugins.util.colors.red(message));
        })
        .pipe(source(config.name))
        .pipe(buffer())
        // Calling `gulp bundle -p` (production) minifies the bundle
        .pipe(plugins.if(!!args.p, plugins.uglify()))
        .pipe(gulp.dest(config.dest));
}

module.exports = bundle;
