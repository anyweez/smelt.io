const sieve = require('./sor.target');
const runner = require('./mentor/runner');

const test = runner.test(sieve);

// correctly identifies later versio
test.trial('HLHLLS').produces(0);
test.trial('LH').produces(0);

test.trial('SSHLHHHH').produces(1);
test.trial('HHLSLLHS').produces(2);
test.trial('HLSLHSLLHS').produces(3);
test.trial('HLHHSHLSH').produces(4);
test.trial('HHSHHSHH').produces(6);

module.exports = test;