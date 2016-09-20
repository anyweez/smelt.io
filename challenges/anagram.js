const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const anagram = require('./sor.target');

test('Detects valid anagrams', t => {
    t.true(anagram('nights', 'things'));
    t.true(anagram('Friend', 'finder'));
    t.true(anagram('oceans', 'canoes'));
    t.true(anagram('wisdom', 'mid sow'));
    t.true(anagram('the eyes', 'they see'));
    t.true(anagram('Clint Eastwood', 'Old West Action'))
    t.true(anagram('Anagram', 'aaagmnr'));
});

test('Rejects invalid anagrams', t => {
    t.false(anagram('parliament', 'false man'));
    t.false(anagram('Astronomers', 'Moon starer'));
    t.false(anagram('Not one', 'At ALL'));
});

test('fails for rearranged words', t => {
    t.false(anagram('Hello there', 'There hello'));
    t.false(anagram('This shall not pass', 'Pass this shall not'));
});