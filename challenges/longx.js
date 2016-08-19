const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const longx = require('./sor.target');

test('single run of x\'s', t => {
    t.deepEqual(longx('xooo'), 1);
    t.deepEqual(longx('ooxx'), 2);
    t.deepEqual(longx('ooxxxx'), 4);
    t.deepEqual(longx('oxxxxoo'), 4);
});

test('multiple runs of x\'s', t => {
    t.deepEqual(longx('xoxoxox'), 1);
    t.deepEqual(longx('ooxoxox'), 1);
    t.deepEqual(longx('xoxxxoooxx'), 3);
    t.deepEqual(longx('xxxxxoxoxxooo'), 5);
    t.deepEqual(longx('xtraxtraxrxxxxx'), 5);
});
