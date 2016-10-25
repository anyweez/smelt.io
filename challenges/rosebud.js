const rosebud = require('./sor.target');
const runner = require('./mentor/runner');

const test = runner.test(rosebud);

// returns correct values for valid cheat codes
test.trial('rosebud!!!!1').produces(4000);
test.trial('rosebud!!1').produces(2000);
test.trial('rosebud!!!!!!1').produces(6000);
test.trial('rosebud!!!!!!!!!1').produces(9000);

// successfully rejects non-matching strings
test.trial('rose').produces(0);
test.trial('rosebud!!!!!!').produces(0);
test.trial('rosebu!!!!!!1').produces(0);
test.trial('rosebud!!x!!!!').produces(0).otherwise('The exclamation marks can\'t be interrupted.');

module.exports = test;