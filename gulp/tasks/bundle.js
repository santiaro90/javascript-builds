var args = require('yargs').argv;
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

var config = require('../gulpconfig').bundle;

function bundle(gulp, plugins) {
    config.debug = true; // !!args.d;

    var bundler = browserify(config).transform(babelify);

    return bundler.bundle()
        .on('error', function onError(message) {
            plugins.util.log(plugins.util.colors.red(message));
        })
        .pipe(source(config.name))
        .pipe(buffer())
        // Passing -p (production) to command line uglifies the bundle
        // Notice that if enabled, uglify will get rid of sourcemaps
        .pipe(plugins.if(!!args.p, plugins.uglify()))
        .pipe(plugins.rev())
        .pipe(gulp.dest(config.dest));
}

module.exports = bundle;
