const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const chemistry = require('./sor.target');

test('passes the common cases', t => {
    t.deepEqual(chemistry('Argon', 'An'), true);
    t.deepEqual(chemistry('Argon', 'Ro'), true);

    t.deepEqual(chemistry('Nickel', 'Nk'), true);
    t.deepEqual(chemistry('Nickel', 'Ck'), true);

    t.deepEqual(chemistry('Hydrogen', 'Hd'), false);
    t.deepEqual(chemistry('Hydrogen', 'Dn'), false);
    t.deepEqual(chemistry('Hydrogen', 'Rg'), false);
});

test('rejects symbols that arent two letters', t => {
    t.deepEqual(chemistry('Iron', 'I'), false);
    t.deepEqual(chemistry('Iron', 'Irn'), false);
    t.deepEqual(chemistry('Gold', 'G'), false);
    t.deepEqual(chemistry('Gold', 'Gol'), false);
    t.deepEqual(chemistry('Hydrogen', 'H'), false);
    t.deepEqual(chemistry('Hydrogen', 'Hydro'), false);
});

test('rejects symbols that dont contain letters from element name', t => {
    t.deepEqual(chemistry('Hydrogen', 'Xr'), false);
    t.deepEqual(chemistry('Nickel', 'Hr'), false);
    t.deepEqual(chemistry('Nickel', 'Kt'), false);
    t.deepEqual(chemistry('Gold', 'Dp'), false);
    t.deepEqual(chemistry('Gold', 'Ra'), false);
    t.deepEqual(chemistry('Gold', 'Iv'), false);
});

test('reject symbols that dont match element letter ordering', t => {
    t.deepEqual(chemistry('Hydrogen', 'Ng'), false);
    t.deepEqual(chemistry('Hydrogen', 'Dy'), false);
    t.deepEqual(chemistry('Nickel', 'Li'), false);
    t.deepEqual(chemistry('Nickel', 'Ek'), false);
});