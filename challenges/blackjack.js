const blackjack = require('./sor.target');
const runner = require('sor/mentor/runner');

const test = runner.test(blackjack);

// False for <= 21 cases, sans aces
test.trial([2, 5]).produces(false);
test.trial(['Q', 5]).produces(false);
test.trial(['Q', 'K']).produces(false);
test.trial([2, 5, 7]).produces(false);
test.trial(['J', 2, 4]).produces(false);
test.trial([9, 5, 3]).produces(false);
test.trial([2, 5, 4, 4]).produces(false);
test.trial([9, 2, 3, 3]).produces(false);

// True for > 21 cases, sans aces 
test.trial([2, 'Q', 'Q']).produces(true);
test.trial([7, 5, 2, 'Q']).produces(true);
test.trial([3, 5, 'K', 'J']).produces(true);

// Works with aces
test.trial(['Q', 'Q', 'A']).produces(false);
test.trial([['Q', 'A', 'A']]).produces(false);
test.trial([4, 'Q', 'A']).produces(false);
test.trial(['Q', 'Q', 2, 'A']).produces(true);

module.exports = test;