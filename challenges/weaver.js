const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const weaver = require('./sor.target');

test('standard cases', t => {
    t.deepEqual(weaver('temptation', 't', 1), 'tttttttttt');
    t.deepEqual(weaver('first attempt', 'x', 3), 'fixstxatxemxt');
    t.deepEqual(weaver('more great food', 'a', 2), 'mara araatafaoa');
    t.deepEqual(weaver('jeb kicks', 't', 6), 'jeb ktcks');
    t.deepEqual(weaver('pearl kingdom', 'x', 5), 'pearx kinxdom');
});

test('freq > word length', t => {
    t.deepEqual(weaver('house', 'x', 10), 'house');
    t.deepEqual(weaver('a', 'x', 2), 'a');
});