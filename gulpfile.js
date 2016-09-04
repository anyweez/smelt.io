'use strict'

let gulp = require('gulp');
let sass = require('gulp-sass');
let babel = require('gulp-babel');
let marked = require('marked');
let pug = require('gulp-pug');
let rename = require('gulp-rename');
let jsonlint = require('gulp-jsonlint');
let schema = require('gulp-json-schema');
let fs = require('mz').fs;

/**
 * Load all of the challenges from `challenges/` and return them as an array of objects.
 * Translate all properties as expected by the spec (convert markdown to html, etc).
 */
function loadc(path) {
    // Convert difficulty scores to a value that can be rendered, currently an integer [0, 3]
    // Perhaps weird default: if no difficulty is specified, assign a random difficulty.
    function displayDifficulty(raw) {
        if (raw === undefined) return Math.random() * 4;
        else return Math.floor(raw * 4);
    }

    function renderParam(param) {
        if (typeof (param) === 'string') return param;
        if (typeof (param) === 'number') return param.toString();
        if (Array.isArray(param)) return `[${param.join(', ')}]`;

        console.warn(`Unknown input type: ${typeof (param)} for ${param}`)
        return param;
    }

    let difficulties = JSON.parse(fs.readFileSync('difficulty.json')).scores;

    let challenges = fs.readdirSync('challenges/')
        .filter(x => x.endsWith('.json'))
        .map(name => {
            let def = JSON.parse(fs.readFileSync(`challenges/${name}`).toString());
            // Render markdown in the challenge description
            def.description.full = marked(def.description.full);
            // Convert raw difficulties to renderable scores
            def.difficulty = displayDifficulty(difficulties[def.spec.func]);
            // Inputs should be converted into strings.
            if (def.spec.examples) {
                def.spec.examples = def.spec.examples.map(example => {
                    example.inputs = example.inputs.map(renderParam);
                    return example;
                });
            }

            return def;
        });

    // Sort by difficulty
    challenges.sort((first, second) => {
        if (first.difficulty < second.difficulty) return -1;
        else return 1;
    });

    return challenges;
}

gulp.task('default', ['html', 'challenges', 'css', 'js']);

/**
 * Convert Jade to HTML. Renders non-challenge pages; challenges pages are generated from JSON 
 * data in the `challenges` task.
 */
gulp.task('html', function () {
    let pages = [];
    let challenges = loadc('challenges/');

    pages.push(
        gulp.src('src/pug/challenges.pug')
            .pipe(pug({
                locals: { challenges: challenges },
            }))
            .pipe(rename('index.html'))
            .pipe(gulp.dest('public/challenges/'))
    );

    pages.push(
        gulp.src('src/pug/index.pug')
            .pipe(pug({
                locals: { challenges: challenges },
            }))
            .pipe(gulp.dest('public/'))
    );

    pages.push(
        gulp.src('src/pug/guide.pug')
            .pipe(pug({
                locals: { challenges: challenges },
            }))
            .pipe(rename('index.html'))
            .pipe(gulp.dest('public/guide'))
    );

    return pages;
});

gulp.task('challenges-validator', function () {
    return gulp.src('challenges/*.json')
        .pipe(jsonlint())
        .pipe(jsonlint.failOnError())
        .pipe(jsonlint.reporter())
        .pipe(schema('schema/challenge.json'));
});

gulp.task('challenges', ['challenges-validator'], function () {
    loadc('challenges/').forEach(challenge => {
        return gulp.src('src/pug/challenge.pug')
            .pipe(pug({
                locals: {
                    challenge: challenge,
                },
            }))
            .pipe(rename('index.html'))
            .pipe(gulp.dest(`public/challenges/${challenge.spec.func}`));
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
