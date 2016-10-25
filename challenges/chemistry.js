const chemistry = require('./sor.target');
const runner = require('sor/mentor/runner');

const test = runner.test(chemistry);

// Passes the common case
test.trial('Argon', 'An').produces(true);
test.trial('Argon', 'Ro').produces(true);
test.trial('Nickel', 'Nk').produces(true);
test.trial('Nickel', 'Ck').produces(true);
test.trial('Hydrogen', 'Hd').produces(true);
test.trial('Hydrogen', 'Dn').produces(true);
test.trial('Hydrogen', 'Rg').produces(true);

// Reject symbols that aren't two letters
test.trial('Iron', 'I').produces(false);
test.trial('Iron', 'Irn').produces(false);
test.trial('Gold', 'G').produces(false);
test.trial('Gold', 'Gol').produces(false);
test.trial('Hydrogen', 'H').produces(false);
test.trial('Hydrogen', 'Hydro').produces(false);

// Rejects symbols that dont contain letters from element name
test.trial('Hydrogen', 'Xr').produces(false);
test.trial('Nickel', 'Hr').produces(false);
test.trial('Nickel', 'Kt').produces(false);
test.trial('Gold', 'Dp').produces(false);
test.trial('Gold', 'Ra').produces(false);
test.trial('Gold', 'Iv').produces(false);

// Reject symbols that dont match element letter ordering
test.trial('Hydrogen', 'Ng').produces(false);
test.trial('Hydrogen', 'Dy').produces(false);
test.trial('Nickel', 'Li').produces(false);
test.trial('Nickel', 'Ek').produces(false);

module.exports = test;