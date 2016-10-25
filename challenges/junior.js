const junior = require('./sor.target');
const runner = require('./mentor/runner');

const test = runner.test(junior);

// Works for the general case
test.trial([15, 18, 11, 10]).produces(15);
test.trial([1, 2, 3, 4, 5]).produces(4);
test.trial([10, 14, 17, 9, 18]).produces(17);
test.trial([11, 2, 3, 4, 5]).produces(5);
test.trial([8, 1]).produces(1);

// Works for negative numbers
test.trial([-1, -2, -3, -4, -5]).produces(-2);
test.trial([1, 2, 3, -4, -5]).produces(2);

// Works with duplicated largest numbers
test.trial([1, 2, 3, 5, 5]).produces(5);
test.trial([5, 8, 5, 8]).produces(8);

module.exports = test;