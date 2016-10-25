const wordhunt = require('./sor.target');
const runner = require('./mentor/runner');

const test = runner.test(wordhunt);

// properly matches pattern
test.trial(['about', 'abler', 'creep', 'oboes'], '_b___').produces(3);
test.trial(['arctic', 'apple', 'frankie'], 'a_c___').produces(1);
test.trial(['arctic', 'apple', 'frankie'], '__art').produces(0);

test.trial(['word', 'bird', 'nerd', 'third'], '__rd').produces(3);
test.trial(['word', 'bird', 'nerd', 'third'], 'b_de').produces(0);
test.trial(['word', 'bird', 'nerd', 'third'], 'b_d').produces(0);

test.trial([], '_b_b_').produces(0);

module.exports = test;