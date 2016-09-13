const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const junior = require('./sor.target');

test('works for the general case', t => {
    t.deepEqual(junior([15, 18, 11, 10]), 15);
    t.deepEqual(junior([1, 2, 3, 4, 5]), 4);
    t.deepEqual(junior([10, 14, 17, 9, 18]), 17);
    t.deepEqual(junior([11, 2, 3, 4, 5]), 5);
    t.deepEqual(junior([8, 1]), 1);
});

test('works for negative numbers', t => {
    t.deepEqual(junior([-1, -2, -3, -4, -5]), -2);
    t.deepEqual(junior([1, 2, 3, -4, -5]), 2);
});

test('works with duplicated largest numbers', t => {
    t.deepEqual(junior([1, 2, 3, 5, 5]), 5);
    t.deepEqual(junior([5, 8, 5, 8]), 8);
});