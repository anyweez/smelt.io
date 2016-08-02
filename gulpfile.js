'use strict'

let gulp = require('gulp');
let sass = require('gulp-sass');
let babel = require('gulp-babel');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('public/'));
});

gulp.task('css', function () {
    return gulp.src('src/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'));
});

gulp.task('js', function () {
    return gulp.src('src/js/app.js')
        .pipe(babel({
            presets: ['es2015'],
        }))
        .pipe(gulp.dest('public/js'));
});

// TODO: add task for challenges.json generation
// TODO: add task for challenges/*.js generation

gulp.task('watch', ['html', 'css', 'js'], function () {
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/scss/*.scss', ['css']);
});