const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const scatterpack = require('./sor.target');

Array.prototype.sort = () => console.error('sort() function disabled for this challenge.')

test('returns true when array contents match', t => {
    t.deepEqual(scatterpack([1, 2, 3], [1, 2, 3]), true);
    t.deepEqual(scatterpack([1, 2, 3], [3, 2, 1]), true);
    t.deepEqual(scatterpack([1, 2, 3, 8, 14], [3, 8, 2, 14, 1]), true);
    t.deepEqual(scatterpack([1, 1, 2], [1, 2, 1]), true);
});

test('returns false when array contents don\'t match', t => {
    t.deepEqual(scatterpack([1, 2], [1, 2, 3]), false);
    t.deepEqual(scatterpack([1, 2, 3], [1, 2, 13]), false);
    t.deepEqual(scatterpack([1, 2, 4, 19], [1, 4, 4, 19, 2]), false);
});