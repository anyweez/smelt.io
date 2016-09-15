const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const wordhunt = require('./sor.target');

test('positive tests', t => {
    t.true(wordhunt(1, 2, 3));
});

test('negative tests', t => {
    t.false(wordhunt(4, 5, 6));
});