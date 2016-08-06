const process = require('process');
process.cwd(process.env.SMELT_BASE_DIR);
const test = require(`${process.env.SMELT_BASE_DIR}/node_modules/ava`).test;
const palindrome = require('./smelt.target');

test('identifies palindromes with even character counts', t => {
    t.true(palindrome('Anna'));
    t.true(palindrome('Elle'));
    t.true(palindrome('Hannah'));
    t.true(palindrome('noon'));
    t.true(palindrome('redder'));
});

test('identifies palindromes with odd character counts', t => {
    t.true(palindrome('abcdcba'));
    t.true(palindrome('civic'));
    t.true(palindrome('eve'));
    t.true(palindrome('evitative'));
});

test('ignore spaces in palindromes', t => {
    t.true(palindrome('A Santa at Nasa'));
    t.true(palindrome('Avid diva'));
    t.true(palindrome('Mail Liam'));
    t.true(palindrome('Name not one man'));
});

test('rejects non-palindromes', t => {
    t.false(palindrome('hut'));
    t.false(palindrome('This is not a palindrome'));
    t.false(palindrome('another faker'));
});