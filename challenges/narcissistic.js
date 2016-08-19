const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const narcissistic = require('./sor.target');

test('correctly finds narcissistic numbers', t => {
    t.deepEqual(narcissistic(1), 0);
    t.deepEqual(narcissistic(11), 153);
    t.deepEqual(narcissistic(12), 370);
    t.deepEqual(narcissistic(15), 1634);
    t.deepEqual(narcissistic(19), 92727);
    t.deepEqual(narcissistic(25), 9926315);
});