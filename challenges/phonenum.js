const phonenum = require('./sor.target');
const runner = require('./mentor/runner');

const test = runner.test(phonenum);

// seven-digit numbers
test.trial('111-2222').produces('111-2222');
test.trial('123 4567').produces('123-4567');
test.trial('1234567').produces('123-4567');
test.trial('1 2345 67').produces('123-4567');
test.trial('1 2 3 4 5 6 7').produces('123-4567');
test.trial('098 765 4').produces('098-7654');

// ten-digit numbers
test.trial('111-222-3333').produces('(111) 222-3333');
test.trial('111 222 3333').produces('(111) 222-3333');
test.trial('111-222 3333').produces('(111) 222-3333');
test.trial('1112223333').produces('(111) 222-3333');
test.trial('1 11222 333 3').produces('(111) 222-3333');

test.trial('(123-456)-7890').produces('(123) 456-7890');
test.trial('(123-456-7890').produces('(123) 456-7890');
test.trial('123 456 - 7890').produces('(123) 456-7890');

// invalid numbers
test.trial('1').produces(undefined);
test.trial('123555').produces(undefined);
test.trial('1321').produces(undefined);
test.trial('1 0 1').produces(undefined);

test.trial('99988877771111').produces(undefined);
test.trial('12345678901').produces(undefined);

module.exports = test;