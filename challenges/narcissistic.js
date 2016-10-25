const narcissistic = require('./sor.target');
const runner = require('./mentor/runner');

const test = runner.test(narcissistic);

test.trial(1).produces(0);
test.trial(11).produces(153);
test.trial(12).produces(370);
test.trial(15).produces(1634);
test.trial(19).produces(92727);
test.trial(25).produces(9926315);

module.exports = test;