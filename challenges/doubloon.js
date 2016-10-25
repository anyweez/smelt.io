const doubloon = require('./sor.target');
const runner = require('./mentor/runner');

const test = runner.test(doubloon);

// Works with no off events
test.trial('1').produces(1);
test.trial('111').produces(3);
test.trial('1--').produces(3);
test.trial('1-1--').produces(5);

// Works with no on events 
test.trial('0').produces(0);
test.trial('000').produces(0);
test.trial('0--').produces(0);
test.trial('0-0--').produces(0);

// Works with a mix of on and off events
test.trial('100').produces(1);
test.trial('101').produces(2);
test.trial('1---0').produces(4);
test.trial('1--0--').produces(3);
test.trial('1-001').produces(3);
test.trial('111----0-----1---').produces(11);

module.exports = test;