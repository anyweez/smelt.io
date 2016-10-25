const investor = require('./sor.target');
const runner = require('sor/mentor/runner');

const test = runner.test(investor);

// Finds profitable paths
test.trial([5, 1, 6]).produces(5);
test.trial([1, 5, 4, 2]).produces(4);
test.trial([1, 3, 9, 4, 7, 40]).produces(44);
test.trial([5, 1, 6, 4, 5, 7]).produces(8);

// No profitable path available
test.trial([5, 1]).produces(0);
test.trial([11, 5, 4, 2, 1]).produces(0);

module.exports = test;