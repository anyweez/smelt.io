const changemaker = require('./sor.target');
const runner = require(`${process.env.SOR_MENTOR_PATH}/runner`);

const test = runner.test(changemaker);

// General case
test.trial(43).produces([2, 0, 0, 3]).otherwise('Is it better to start with larger or smaller bills?');
test.trial(116).produces([5, 1, 1, 1]);

// Numbers that start with zero counts @ 20's
test.trial(11).produces([0, 1, 0, 1]).otherwise('What should happen if you don\'t have any 20\'s?');
test.trial(15).produces([0, 1, 1, 0]);
test.trial(3).produces([0, 0, 0, 3]);
test.trial(11).produces([0, 1, 0, 1]);

// Numbers that end in zero counts
test.trial(25).produces([1, 0, 1, 0]);
test.trial(115).produces([5, 1, 1, 0]);
test.trial(5).produces([0, 0, 1, 0]);

// Works with zero
test.trial(0).produces([0, 0, 0, 0]);

module.exports = test;