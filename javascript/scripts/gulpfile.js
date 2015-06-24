'use strict';

var gulp = require('gulp');
var guppy = require('git-guppy')(gulp);
var gulpFilter = require('gulp-filter');
var eslint = require('gulp-eslint');
var jscs = require('gulp-jscs');

gulp.task('pre-commit', guppy.src('pre-commit', function(filesBeingCommitted) {
  return gulp.src(filesBeingCommitted)
    .pipe(gulpFilter(['*.js']))
    .pipe(jscs({
      configPath: '.jscsrc'
    }))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
}));
