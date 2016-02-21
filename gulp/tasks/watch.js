var config = require('../gulpconfig.js');

function watch(gulp) {
    gulp.watch([
        config.build.index,
        config.scripts.src,
        config.specs.src,
        config.styles.src
    ], ['build']);
}

module.exports = watch;
