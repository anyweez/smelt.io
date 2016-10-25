const longx = require('./sor.target');
const runner = require('sor/mentor/runner');

const test = runner.test(longx);

// Single run of x's
test.trial('xooo').produces(1);
test.trial('ooxx').produces(2);
test.trial('ooxxxx').produces(4);
test.trial('oxxxxoo').produces(4);

// Multiple runs of x's
test.trial('xoxoxox').produces(1);
test.trial('ooxoxox').produces(1);
test.trial('xoxxxoooxx').produces(3);
test.trial('xxxxxoxoxxooo').produces(5);
test.trial('xtraxtraxrxxxxx').produces(5).otherwise('Make sure you\'re accounting for characters other than x and o!');

module.exports = test;