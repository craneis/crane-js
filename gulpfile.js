var duration = require('gulp-duration');
var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var uglify = require("gulp-uglify");

// Sass
gulp.task('sass', function () {
  return gulp.src(['web/sass/**/*.scss', '!web/sass/**/_*.scss'])
    .pipe(compass({
        config_file: path.join(process.cwd(), 'config.rb'),
        project: path.join(process.cwd(), '/web'),
        css: 'css',
        sass: 'sass'
    }))
    .pipe(duration('compiling css'))
});

gulp.task('all', function() {
  return gulp.src([
        'js/crane.js',
        'js/temlate.js',
        'js/modal.js'
    ])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('web/js/'));
});

// Watch
gulp.task('watch', function () {
    gulp.watch('web/**/*.scss', ['sass']);
});

// Default
gulp.task('default', ['sass', 'watch']);
