'use strict'

let gulp = require('gulp');
let sass = require('gulp-sass');
let babel = require('gulp-babel');
let pug = require('gulp-pug');
let rename = require('gulp-rename');
let fs = require('mz').fs;

function loadc(path) {
    let challenges = [];

    let c1 = JSON.parse(fs.readFileSync('challenges/palindrome.json').toString());
    // c1.description.full = markdown(c1.description.full);
    challenges.push(c1);
    challenges.push(c1);

    return challenges;
}

gulp.task('default', ['html', 'challenges', 'css', 'js']);

gulp.task('html', function () {
    return gulp.src(['src/pug/challenges.pug', 'src/pug/index.pug', 'src/pug/guide.pug'])
        .pipe(pug({
            locals: {
                challenges: loadc('challenges/'),
            },
        }))
        .pipe(gulp.dest('public/'));
});

gulp.task('challenges', function () {
    loadc('challenges/').forEach(challenge => {
        return gulp.src('src/pug/challenge.pug')
            .pipe(pug({
                locals: {
                    challenge: challenge,
                },
            }))
            .pipe(rename(challenge.spec.func + '.html'))
            .pipe(gulp.dest('public/challenges'));
    });
});

gulp.task('css', function () {
    return gulp.src('src/scss/*.scss')
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

gulp.task('watch', ['html', 'challenges', 'css', 'js'], function () {
    gulp.watch('src/pug/*.pug', ['html']);
    gulp.watch('src/pug/partials/*.pug', ['html']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/scss/*.scss', ['css']);
    gulp.watch('src/scss/partials/*.scss', ['css']);

    gulp.watch('challenges/*', ['challenges']);
    gulp.watch('src/pug/challenge*.pug', ['challenges']);
});