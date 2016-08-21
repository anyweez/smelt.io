const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const nemo = require('./sor.target');

test('correctly computes probability', t => {
    t.deepEqual(nemo(0.2, 15), 0.16);
    t.deepEqual(nemo(0.2, 20), 0);

    t.deepEqual(nemo(0.3, 15), 0.48);
    t.deepEqual(nemo(0.3, 20), 0.05);

    t.deepEqual(nemo(0.5, 20), 0.59);
    t.deepEqual(nemo(0.5, 30), 0.05);
    t.deepEqual(nemo(0.8, 30), 0.97);
});