const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const investor = require('./sor.target');

test('finds profitable paths', t => {
    t.deepEqual(investor([5, 1, 6]), 5);
    t.deepEqual(investor([1, 5, 4, 2]), 4);
    t.deepEqual(investor([1, 3, 9, 4, 7, 40]), 44);
    t.deepEqual(investor([5, 1, 6, 4, 5, 7]), 8);
});

test('no profitable paths available', t => {
    t.deepEqual(investor([5, 1]), 0);
    t.deepEqual(investor([11, 5, 4, 2, 1]), 0);
});