const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const phonenum = require('./sor.target');

test('seven-digit numbers', t => {
    t.deepEqual(phonenum('111-2222'), '111-2222');
    t.deepEqual(phonenum('123 4567'), '123-4567');
    t.deepEqual(phonenum('1234567'), '123-4567');
    t.deepEqual(phonenum('1 2345 67'), '123-4567');

    t.deepEqual(phonenum('1 2 3 4 5 6 7'), '123-4567');
    t.deepEqual(phonenum('098 765 4'), '098-7654');
});

test('ten-digit numbers', t => {
    t.deepEqual(phonenum('111-222-3333'), '(111) 222-3333');
    t.deepEqual(phonenum('111 222 3333'), '(111) 222-3333');
    t.deepEqual(phonenum('111-222 3333'), '(111) 222-3333');
    t.deepEqual(phonenum('1112223333'), '(111) 222-3333');
    t.deepEqual(phonenum('1 11222 333 3'), '(111) 222-3333');

    t.deepEqual(phonenum('(123-456)-7890'), '(123) 456-7890');
    t.deepEqual(phonenum('(123-456-7890'), '(123) 456-7890');
    t.deepEqual(phonenum('123 456 - 7890'), '(123) 456-7890');
});

test('invalid numbers', t => {
    t.deepEqual(phonenum('1'), undefined);
    t.deepEqual(phonenum('123555'), undefined);
    t.deepEqual(phonenum('1321'), undefined);
    t.deepEqual(phonenum('1 0 1'), undefined);

    t.deepEqual(phonenum('99988877771111'), undefined);
    t.deepEqual(phonenum('12345678901'), undefined);
});