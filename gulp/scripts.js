// Include gulp
var gulp = require('gulp');

 // Define base folders
var path = require('path');
var conf = require('./conf');

 // Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();
 // Concatenate & Minify JS
gulp.task('scripts', function() {

    return gulp.src( 'src/app/js/**/*.js')
      	.pipe(concat('app.js'))
      	.pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('src'))
        .pipe(browserSync.reload({ stream: true }));
});










 // Default Task
//gulp.task('default', ['scripts']);
// 'use strict';

// var path = require('path');
// var gulp = require('gulp');
// var conf = require('./conf');

// var browserSync = require('browser-sync');

// var $ = require('gulp-load-plugins')();

// gulp.task('scripts', function () {
//   return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
//     .pipe(browserSync.reload({ stream: true }))
//     .pipe($.size())
// });
