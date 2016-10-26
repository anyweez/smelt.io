const slide = require('./sor.target');
const runner = require(`${process.env.SOR_MENTOR_PATH}/runner`);

const test = runner.test(slide);

// Ensure the function returns objects.
test.trial().examine(fn => runner.outcome(`function produces object`, `function produces ${typeof (fn())}`));

// Ensure the returned object has both an add and get property.
test.trial().examine(fn => {
    const item = fn();

    let has = item.hasOwnProperty('add') && item.hasOwnProperty('get');
    let msg = '';

    if (!item.hasOwnProperty('add') && !item.hasOwnProperty('get')) msg = 'missing both add() and get()';
    else if (!item.hasOwnProperty('add')) msg = 'missing add()';
    else if (!item.hasOwnProperty('get')) msg = 'missing get()';

    return runner.outcome(`has add() and get() properties`, has ? `has add() and get() properties` : msg);
});

// Make sure the object returned doesn't have shared state.
test.trial().examine(fn => {
    const first = fn();
    const second = fn();

    first.add(8);
    first.add(2);

    second.add(5);
    second.add(3);

    return runner.outcome(
        'function returns new objects',
        first.get() === 5 && second.get() === 4 ? 'function returns new objects' : 'function returns same object multiple tiems'
    );
});

// Make sure we average correctly, and that the sliding window works.
test.trial().examine(fn => {
    const FAIL_AVERAGE = runner.outcome('average slides', 'doesn\'t find average');
    const FAIL_SLIDE = runner.outcome('average slides', 'finds average but doesn\'t slide');

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

    return runner.outcome('average slides', 'average slides')
});

// Ensure that the average we're computing is accurate.
test.trial().examine(fn => {
    const s = fn();
    const FAIL = (exp, prod) => runner.outcome(`accurate average (${exp})`, `inaccurate average (${prod})`);

    s.add(2);
    if (s.get() !== 2) return FAIL(2, s.get());

    s.add(5);
    if (s.get() !== 3.5) return FAIL(3.5, s.get());

    return runner.outcome('accurate average', 'accurate average');
});

module.exports = test;