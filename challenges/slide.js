const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const slide = require('./sor.target');

test('returns an object', t => {
    t.deepEqual(typeof (slide()), 'object');
});

test('has add() and get() function properties', t => {
    let target = slide();

    t.true(target.hasOwnProperty('add'));
    t.true(target.hasOwnProperty('get'));

    t.deepEqual(typeof (target.add), 'function');
    t.deepEqual(typeof (target.get), 'function');
});

test('returns a new object each time', t => {
    let first = slide();
    first.add(8);
    first.add(2);
    t.deepEqual(first.get(), 5);

    let second = slide();
    second.add(5);
    second.add(3);

    t.deepEqual(second.get(), 4);
    t.deepEqual(first.get(), 5);
});

test('finds average of 4+ numbers', t => {
    let a = slide();
    a.add(2);
    t.deepEqual(a.get(), 2);
    a.add(5);
    t.deepEqual(a.get(), 3.5);
    a.add(5);
    t.deepEqual(a.get(), 4);
    a.add(0);
    t.deepEqual(a.get(), 3);
    // Drop the first two and replace it with a six.
    a.add(6);
    t.deepEqual(a.get(), 4);
});

test('returns the average of what it\'s got for < 4 numbers', t => {
    let a = slide();
    a.add(2);
    t.deepEqual(a.get(), 2);
    a.add(5);
    t.deepEqual(a.get(), 3.5);
});