const process = require('process');
process.cwd(process.env.SMELT_BASE_DIR);
const test = require(`${process.env.SMELT_BASE_DIR}/node_modules/ava`).test;
const changemaker = require('./smelt.target');

test('works for the general case', t => {
    t.is(changemaker(43), [2, 0, 0, 3]);
    t.is(changemaker(116), [5, 1, 1, 1]);
    t.is(changemaker(11), [0, 1, 0, 1]);
});

test('works for numbers that start in zero counts', t => {
    t.is(changemaker(15), [0, 1, 1, 0]);
    t.is(changemaker(3), [0, 0, 0, 3]);
    t.is(changemaker(11), [0, 1, 0, 1]);
});

test('works for numbers that end in zero counts', t => {
    t.is(changemaker(25), [2, 0, 1, 0]);
    t.is(changemaker(115), [5, 1, 1, 0]);
    t.is(changemaker(5), [0, 0, 1, 0]);
});

test('works for zero', t => {
    t.is(changemaker(0), [0, 0, 0, 0]);
});