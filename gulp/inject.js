'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var _ = require('lodash');

gulp.task('inject', ['scripts', 'styles'], function () {
  var injectStyles = gulp.src([
    path.join(conf.paths.tmp, '/app/**/*.css'),
    path.join('!' + conf.paths.tmp, '/app/vendor.css'),
    path.join(conf.paths.tmp, '/app/**/*.js'),
    path.join('!' + conf.paths.tmp, '/app/app.js')
  ], { read: false });

  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '')],
    addRootSlash: false
  };

  return gulp.src(path.join(conf.paths.src, '/*.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '')));
});
