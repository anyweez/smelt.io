const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const chemistry = require('./sor.target');

test('passes the common cases', t => {
    t.true(chemistry('Argon', 'An'));
    t.true(chemistry('Argon', 'Ro'));

    t.true(chemistry('Nickel', 'Nk'));
    t.true(chemistry('Nickel', 'Ck'));

    t.true(chemistry('Hydrogen', 'Hd'));
    t.true(chemistry('Hydrogen', 'Dn'));
    t.true(chemistry('Hydrogen', 'Rg'));
});

test('rejects symbols that arent two letters', t => {
    t.false(chemistry('Iron', 'I'));
    t.false(chemistry('Iron', 'Irn'));
    t.false(chemistry('Gold', 'G'));
    t.false(chemistry('Gold', 'Gol'));
    t.false(chemistry('Hydrogen', 'H'));
    t.false(chemistry('Hydrogen', 'Hydro'));
});

test('rejects symbols that dont contain letters from element name', t => {
    t.false(chemistry('Hydrogen', 'Xr'));
    t.false(chemistry('Nickel', 'Hr'));
    t.false(chemistry('Nickel', 'Kt'));
    t.false(chemistry('Gold', 'Dp'));
    t.false(chemistry('Gold', 'Ra'));
    t.false(chemistry('Gold', 'Iv'));
});

test('reject symbols that dont match element letter ordering', t => {
    t.false(chemistry('Hydrogen', 'Ng'));
    t.false(chemistry('Hydrogen', 'Dy'));
    t.false(chemistry('Nickel', 'Li'));
    t.false(chemistry('Nickel', 'Ek'));
});