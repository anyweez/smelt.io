const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const changemaker = require('./sor.target');

test('works for the general case', t => {
    t.deepEqual(changemaker(43), [2, 0, 0, 3]);
    t.deepEqual(changemaker(116), [5, 1, 1, 1]);
    t.deepEqual(changemaker(11), [0, 1, 0, 1]);
});

test('works for numbers that start in zero counts', t => {
    t.deepEqual(changemaker(15), [0, 1, 1, 0]);
    t.deepEqual(changemaker(3), [0, 0, 0, 3]);
    t.deepEqual(changemaker(11), [0, 1, 0, 1]);
});

test('works for numbers that end in zero counts', t => {
    t.deepEqual(changemaker(25), [1, 0, 1, 0]);
    t.deepEqual(changemaker(115), [5, 1, 1, 0]);
    t.deepEqual(changemaker(5), [0, 0, 1, 0]);
});

test('works for zero', t => {
    t.deepEqual(changemaker(0), [0, 0, 0, 0]);
});