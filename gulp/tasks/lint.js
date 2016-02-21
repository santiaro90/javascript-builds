var config = require('../gulpconfig');

function lint(gulp, plugins) {
    return gulp.src(config.scripts.src)
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.format());
}

module.exports = lint;