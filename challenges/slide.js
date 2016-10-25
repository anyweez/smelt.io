const slide = require('./sor.target');
const runner = require('./mentor/runner');

const test = runner.test(slide);

// Ensure the function returns objects.
test.trial().examine(fn => {
    return {
        expected: `function produces object`,
        produced: `function produces ${typeof (fn())}`,
    };
});

// Ensure the returned object has both an add and get property.
test.trial().examine(fn => {
    const item = fn();

    let has = item.hasOwnProperty('add') && item.hasOwnProperty('get');
    let msg = '';

    if (!item.hasOwnProperty('add') && !item.hasOwnProperty('get')) msg = 'missing both add() and get()';
    else if (!item.hasOwnProperty('add')) msg = 'missing add()';
    else if (!item.hasOwnProperty('get')) msg = 'missing get()';

    return {
        expected: `has add() and get() properties`,
        produced: has ? `has add() and get() properties` : msg,
    };
});

// Make sure the object returned doesn't have shared state.
test.trial().examine(fn => {
    const first = fn();
    const second = fn();

    first.add(8);
    first.add(2);

    second.add(5);
    second.add(3);

    return {
        expected: 'function returns new objects',
        produced: first.get() === 5 && second.get() === 4 ? 'function returns new objects' : 'function returns same object multiple tiems',
    };
});

// Make sure we average correctly, and that the sliding window works.
test.trial().examine(fn => {
    const FAIL_AVERAGE = { expected: 'average slides', produced: 'doesn\'t find average' };
    const FAIL_SLIDE = { expected: 'average slides', produced: 'finds average but doesn\'t slide' };

    const s = fn();

    s.add(2);
    if (s.get() !== 2) return FAIL_AVERAGE;

    s.add(5);
    if (s.get() !== 3.5) return FAIL_AVERAGE;

    s.add(5);
    if (s.get() !== 4) return FAIL_AVERAGE;

    s.add(0);
    if (s.get() !== 3) return FAIL_AVERAGE;

    s.add(6);
    if (s.get() !== 4) return FAIL_SLIDE;

    return {
        expected: 'average slides',
        produced: 'average slides',
    };
});

// Ensure that the average we're computing is accurate.
test.trial().examine(fn => {
    const s = fn();
    const FAIL = (exp, prod) => { 
        return { expected: `accurate average (${exp})`, produced: `inaccurate average (${prod})` };
    };

    s.add(2);
    if (s.get() !== 2) return FAIL(2, s.get());

    s.add(5);
    if (s.get() !== 3.5) return FAIL(3.5, s.get());

    return { expected: 'accurate average', produced: 'accurate average' };
});

module.exports = test;