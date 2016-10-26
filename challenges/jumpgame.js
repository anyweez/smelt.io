const jumpgame = require('./sor.target');
const runner = require(`${process.env.SOR_MENTOR_PATH}/runner`);

const test = runner.test(jumpgame);

// Finds valid paths
test.trial([1]).produces(true);
test.trial([5]).produces(true);
test.trial([1, 1, 2]).produces(true);
test.trial([2, 3, 1, 0, 2]).produces(true);
test.trial([2, 3, 1, 0, 3, 0, 1, 1]).produces(true);
test.trial([1, 2, 2, 3, 1, 0, 1]).produces(true);
test.trial([2, 3, 1, 0, 3, 1, 8, 3, 4, 2, 3]).produces(true);

// Rejects when no valid paths exist
test.trial([1, 1, 2, 0]).produces(false);
test.trial([2, 3, 1, 0, 3, 1, 8, 2, 4, 2, 3]).produces(false);
test.trial([1, 4, 2, 3, 1, 0, 1]).produces(false);

module.exports = test;