const nemo = require('./sor.target');
const runner = require('sor/mentor/runner');

const test = runner.test(nemo);

test.trial(0.2, 15).produces(0.16);
test.trial(0.2, 20).produces(0);
test.trial(0.3, 15).produces(0.48);
test.trial(0.3, 20).produces(0.05);
test.trial(0.5, 20).produces(0.59);
test.trial(0.5, 30).produces(0.05);
test.trial(0.8, 30).produces(0.97);

module.exports = test;