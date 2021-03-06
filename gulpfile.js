var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: true});

var bundle = require('./gulp/tasks/bundle').bind(null, gulp, plugins);
var clean = require('./gulp/tasks/clean');
var inject = require('./gulp/tasks/inject').bind(null, gulp, plugins);
var lint = require('./gulp/tasks/lint').bind(null, gulp, plugins);
var spec = require('./gulp/tasks/spec').bind(null, gulp, plugins);
var styles = require('./gulp/tasks/styles').bind(null, gulp, plugins);
var watch = require('./gulp/tasks/watch').bind(null, gulp);

gulp.task('bundle', ['clean', 'spec'], bundle);
gulp.task('clean', clean);
gulp.task('inject', ['bundle', 'styles'], inject);
gulp.task('lint', lint);
gulp.task('spec', ['lint'], spec);
gulp.task('styles', ['clean'], styles);
gulp.task('watch', ['build'], watch);

gulp.task('build', ['inject'])
