const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const blackjack = require('./sor.target');

test('returns false for <= 21 cases, sans aces', t => {
    t.deepEqual(blackjack([2, 5]), false);
    t.deepEqual(blackjack(['Q', 5]), false);
    t.deepEqual(blackjack(['Q', 'K']), false);

    t.deepEqual(blackjack([2, 5, 7]), false);
    t.deepEqual(blackjack(['J', 2, 4]), false);
    t.deepEqual(blackjack([9, 5, 3]), false);

    t.deepEqual(blackjack([2, 5, 4, 4]), false);
    t.deepEqual(blackjack([9, 2, 3, 3]), false);
});

test('returns true for > 21 cases, sans aces', t => {
    t.deepEqual(blackjack([2, 'Q', 'Q']), true);
    t.deepEqual(blackjack([7, 5, 2, 'Q']), true);
    t.deepEqual(blackjack([3, 5, 'K', 'J']), true);
});

test('works with aces', t => {
    t.deepEqual(blackjack(['Q', 'Q', 'A']), false);
    t.deepEqual(blackjack(['Q', 'A', 'A']), false);
    t.deepEqual(blackjack([4, 'Q', 'A']), false);

    t.deepEqual(blackjack(['Q', 'Q', 2, 'A']), true);
});