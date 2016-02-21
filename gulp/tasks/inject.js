var config = require('../gulpconfig').build;

function inject(gulp, plugins) {
    var index = gulp.src(config.index);
    var sources = gulp.src(config.assets, {read: false});

    return index.pipe(plugins.inject(sources, {
        ignorePath: config.ignorePath
    })).pipe(gulp.dest(config.dest));
}

module.exports = inject;
