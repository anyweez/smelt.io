const palindrome = require('./sor.target');
const runner = require('sor/mentor/runner');

const test = runner.test(palindrome);

// identifies palindromes with even character counts
test.trial('Anna').produces(true).otherwise('Are you ignoring capitalization?');
test.trial('Elle').produces(true);
test.trial('Hannah').produces(true);
test.trial('noon').produces(true);
test.trial('redder').produces(true);

// identifies palindromes with odd character counts
test.trial('abcdcba').produces(true);
test.trial('civic').produces(true);
test.trial('eve').produces(true);
test.trial('evitative').produces(true);

// ignore spaces in palindromes
test.trial('A Santa at Nasa').produces(true);
test.trial('Avid diva').produces(true);
test.trial('Mail Liam').produces(true);
test.trial('Name not one man').produces(true);

// rejects non-palindromes
test.trial('hut').produces(false);
test.trial('This is not a palindrome').produces(false);
test.trial('another faker').produces(false);

module.exports = test;