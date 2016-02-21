var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: true});

var bundleTask = require('./gulp/tasks/bundle').bind(null, gulp, plugins);
var lintTask = require('./gulp/tasks/lint').bind(null, gulp, plugins);
var stylesTask = require('./gulp/tasks/styles').bind(null, gulp, plugins);

gulp.task('bundle', bundleTask);
gulp.task('lint', lintTask);
gulp.task('styles', stylesTask);
