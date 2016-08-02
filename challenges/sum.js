const process = require('process');
process.cwd(process.env.SMELT_BASE_DIR);
const test = require(`${process.env.SMELT_BASE_DIR}/node_modules/ava`).test;
const target = require('./smelt.target');

test('sucessfully adds three numbers', t => t.is(5, target(1, 2, 2)));
