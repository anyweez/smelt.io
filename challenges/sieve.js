const sieve = require('./sor.target');
const runner = require('sor/mentor/runner');

const test = runner.test(sieve);

// correctly identifies later versio
test.trial(1).produces(0);
test.trial(2).produces(0);
test.trial(10).produces(4);
test.trial(72).produces(20);
test.trial(200).produces(46);
test.trial(5000).produces(669);

module.exports = test;