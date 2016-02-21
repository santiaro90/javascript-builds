var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: true});

var bundleTask = require('./gulp/tasks/bundle').bind(null, gulp, plugins);

gulp.task('bundle', bundleTask);
