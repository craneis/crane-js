var duration = require('gulp-duration');
var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var uglify = require("gulp-uglify");

// Compiling SCSS using SASS/Compass
gulp.task('sass', function() { 
    return gulp.src(['demo/assets/scss/*.scss', '!demo/assets/scss/_*.scss'])
    .pipe(compass({
        config_file: 'config.rb',
        css: 'demo/assets/css',
        sass: 'demo/assets/scss',
        image: 'demo/assets/images',
        sourcemap: true
    }))
    .pipe(duration('compiling css'))
    .pipe(gulp.dest('demo/assets/css'));
});

gulp.task('all', function() {
  return gulp.src([
        'src/crane.js',
        'src/temlate.js',
        'src/modal.js'
    ])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('web/js/'));
});

// Watch
gulp.task('watch', function () {
    gulp.watch('demo/assets/scss/**/*.scss', ['sass']);
});

// Default
gulp.task('default', ['sass', 'watch']);
