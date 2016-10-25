const anagram = require('./sor.target');
const runner = require('./mentor/runner');

const test = runner.test(anagram);

// Valid anagrams
test.trial('nights', 'things').produces(true);
test.trial('Friend', 'finder').produces(true).otherwise('Are you accounting for capitalization?');
test.trial('oceans', 'canoes').produces(true);
test.trial('wisdom', 'mid sow').produces(true).otherwise('Don\'t forget to ignore spaces.');
test.trial('the eyes', 'they see').produces(true);
test.trial('Clint Eastwood', 'Old West Action').produces(true);
test.trial('Anagram', 'aaagmnr').produces(true);

// Invalid anagrams
test.trial('parliament', 'false man').produces(false);
test.trial('Astronomers', 'Moon starer').produces(false);
test.trial('Not one', 'At ALL').produces(false);

// Fails for rearranged words
test.trial('Hello there', 'There hello').produces(false);
test.trial('Hello there', 'there Hello').produces(false);
test.trial('This shall not pass', 'Pass this shall not').produces(false);

module.exports = test;