const binary = require('./sor.target');
const runner = require('./mentor/runner');

const test = runner.test(binary);

// Valid anagrams
test.trial(15).produces('1111').otherwise('Make sure you\'re returning a string!');
test.trial(1000).produces('1111101000');
test.trial(189).produces('10111101');

test.trial(1181).produces('10010011101');
test.trial(218).produces('11011010');
test.trial(8).produces('1000');

module.exports = test;