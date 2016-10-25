const scatterpack = require('./sor.target');
const runner = require('./mentor/runner');

const test = runner.test(scatterpack);

// returns correct values for valid cheat codes
test.trial([1, 2, 3], [1, 2, 3]).produces(true);
test.trial([1, 2, 3], [3, 2, 1]).produces(true);
test.trial([1, 2, 3, 8, 14], [3, 8, 2, 14, 1]).produces(true);
test.trial([1, 1, 2], [1, 2, 1]).produces(true);

// successfully rejects non-matching strings
test.trial([1, 2], [1, 2, 3]).produces(false);
test.trial([1, 2, 3], [1, 2, 13]).produces(false);
test.trial([1, 2, 4, 19], [1, 4, 4, 19, 2]).produces(false);

module.exports = test;