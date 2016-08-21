const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const statues = require('./sor.target');

test('correctly counts houses', t => {
    t.deepEqual(statues('HLHLLS'), 0);
    t.deepEqual(statues('LH'), 0);

    t.deepEqual(statues('SSHLHHHH'), 1);
    t.deepEqual(statues('HHLSLLHS'), 2);
    t.deepEqual(statues('HLSLHSLLHS'), 3);
    t.deepEqual(statues('HLHHSHLSH'), 4);

    t.deepEqual(statues('HHSHHSHH'), 6);
});
