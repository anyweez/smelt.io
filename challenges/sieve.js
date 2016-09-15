const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const sieve = require('./sor.target');

test('properly counts primes', t => {
    t.deepEqual(sieve(1), 0);
    t.deepEqual(sieve(2), 0);
    t.deepEqual(sieve(10), 4);
    t.deepEqual(sieve(72), 20);
    t.deepEqual(sieve(200), 46);
    t.deepEqual(sieve(5000), 669);
});