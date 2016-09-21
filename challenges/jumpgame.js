const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const jumpgame = require('./sor.target');

test('finds valid paths', t => {
    t.true(jumpgame([1]));
    t.true(jumpgame([5]));
    t.true(jumpgame([1, 1, 2]));
    t.true(jumpgame([2, 3, 1, 0, 2]));
    t.true(jumpgame([2, 3, 1, 0, 3, 0, 1, 1]));
    t.true(jumpgame([1, 2, 2, 3, 1, 0, 1]));
    t.true(jumpgame([2, 3, 1, 0, 3, 1, 8, 3, 4, 2, 3]));
});

test('rejects when no valid paths exist', t => {
    t.false(jumpgame([1, 1, 2, 0]));
    t.false(jumpgame([2, 3, 1, 0, 3, 1, 8, 2, 4, 2, 3]));
    t.false(jumpgame([1, 4, 2, 3, 1, 0, 1]));
});