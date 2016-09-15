const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const __func_name__ = require('./sor.target');

test('positive tests', t => {
    t.true(__func_name__(1, 2, 3));
});

test('negative tests', t => {
    t.false(__func_name__(4, 5, 6));
});