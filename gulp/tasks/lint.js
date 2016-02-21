var config = require('../gulpconfig');

function lint(gulp, plugins) {
    return gulp.src([config.scripts.src, config.specs.src])
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.result(onFileLinted.bind(null, plugins)))
        .pipe(plugins.eslint.format())
        .pipe(plugins.eslint.failOnError());
}

function onFileLinted(plugins, result) {
    if (!result.warningCount && !result.errorCount) {
        var message = plugins.util.colors.bold.yellow('Linting: ');
        message += plugins.util.colors.bold.magenta(result.filePath);
        message += plugins.util.colors.bold.green(' OK');

        plugins.util.log(message);
    }
}

module.exports = lint;
