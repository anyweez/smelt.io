const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const rosebud = require('./sor.target');

test('returns correct values for valid cheat codes', t => {
    t.deepEqual(rosebud('rosebud!!!!1'), 4000);
    t.deepEqual(rosebud('rosebud!!1'), 2000);
    t.deepEqual(rosebud('rosebud!!!!!!1'), 6000);
    t.deepEqual(rosebud('rosebud!!!!!!!!!1'), 9000);
});

test('successfully rejects non-matching strings', t => {
    t.deepEqual(rosebud('rose'), 0);
    t.deepEqual(rosebud('rosebud!!!!!!'), 0);
    t.deepEqual(rosebud('rosebu!!!!!!1'), 0);
    t.deepEqual(rosebud('rosebud!!x!!!!'), 0);
});