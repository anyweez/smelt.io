const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const versions = require('./sor.target');

test('correctly identifies later version', t => {
    t.deepEqual(versions('1.2.0', '1.12.0'), '1.12.0');
    t.deepEqual(versions('1.2.0', '1.2.1'), '1.2.1');
    t.deepEqual(versions('11.2.1', '2.1.10'), '11.2.1');
    t.deepEqual(versions('2.11.1', '21.1.5'), '21.1.5');
    t.deepEqual(versions('2.11.0', '2.1.1'), '2.11.0');
    t.deepEqual(versions('3.5.1', '3.4.5'), '3.5.1');
});