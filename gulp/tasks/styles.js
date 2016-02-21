var config = require('../gulpconfig').styles;

function styles(gulp, plugins) {
    return gulp.src(config.src)
        .pipe(plugins.plumber())
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer(config.browsers))
        .pipe(plugins.rev())
        .pipe(gulp.dest(config.dest));
}

module.exports = styles;
