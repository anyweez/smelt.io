const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const binary = require('./sor.target');

// Disable these functions
parseInt = function () {}
Number.prototype.toString = function () {}

test('successfully converts numbers', t => {
    t.deepEqual(binary(15), 1111);
    t.deepEqual(binary(1000), 1111101000);
    t.deepEqual(binary(189), 10111101);

    t.deepEqual(binary(1181), 10010011101);
    t.deepEqual(binary(218), 11011010);
    t.deepEqual(binary(8), 1000);
});