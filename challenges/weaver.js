const weaver = require('./sor.target');
const runner = require('sor/mentor/runner');

const test = runner.test(weaver);

// standard cases
test.trial('temptation', 't', 1).produces('tttttttttt');
test.trial('first attempt', 'x', 3).produces('fixstxatxemxt');

test.trial('more great food', 'a', 2).produces('mara araaa aoad');
test.trial('jeb kicks', 't', 6).produces('jeb ktcks');
test.trial('pearl kingdom', 'x', 5).produces('pearx kinxdom');

// freq > word length
test.trial('house', 'x', 10).produces('house');
test.trial('a', 'x', 2).produces('a');

module.exports = test;