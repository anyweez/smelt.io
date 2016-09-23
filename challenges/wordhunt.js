const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const wordhunt = require('./sor.target');

test('properly matches pattern', t => {
    t.deepEqual(wordhunt(['about', 'abler', 'creep', 'oboes'], '_b___'), 3);
    t.deepEqual(wordhunt(['arctic', 'apple', 'frankie'], 'a_c___'), 1);
    t.deepEqual(wordhunt(['heart', 'nope', 'plart'], '__art'), 2);

    t.deepEqual(wordhunt(['word', 'bird', 'nerd', 'third'], '__rd'), 3);
    t.deepEqual(wordhunt(['word', 'bird', 'nerd', 'third'], 'b_de'), 0);
    t.deepEqual(wordhunt(['word', 'bird', 'nerd', 'third'], 'b_d'), 0);

    t.deepEqual(wordhunt([], 0));
});