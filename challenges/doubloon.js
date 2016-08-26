const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const doubloon = require('./sor.target');

test('works with no off events', t => {
    t.deepEqual(doubloon('1'), 1);
    t.deepEqual(doubloon('111'), 3);
    t.deepEqual(doubloon('1--'), 3);
    t.deepEqual(doubloon('1-1--'), 5);
});

test('works with no on events', t => {
    t.deepEqual(doubloon('0'), 0);
    t.deepEqual(doubloon('000'), 0);
    t.deepEqual(doubloon('0--'), 0);
    t.deepEqual(doubloon('0-0--'), 0);
});

test('works with a mix of on and off events', t => {
    t.deepEqual(doubloon('100'), 1);
    t.deepEqual(doubloon('101'), 2);
    t.deepEqual(doubloon('1---0'), 4);
    t.deepEqual(doubloon('1--0--'), 3);
    t.deepEqual(doubloon('1-001'), 3);

    t.deepEqual(doubloon('111----0-----1---'), 11);
});
