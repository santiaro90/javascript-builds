var config = require('../gulpconfig').styles;
var args = require('yargs').argv;

function styles(gulp, plugins) {
    return gulp.src(config.src)
        .pipe(plugins.plumber())
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer(config.browsers))
        // Passing -p (production) to command line minifies the resulting CSS
        .pipe(plugins.if(!!args.p, plugins.cssnano()))
        .pipe(plugins.rev())
        .pipe(gulp.dest(config.dest));
}

module.exports = styles;
