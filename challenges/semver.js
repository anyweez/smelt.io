const semver = require('./sor.target');
const runner = require(`${process.env.SOR_MENTOR_PATH}/runner`);

const test = runner.test(semver);

// correctly identifies later versio
test.trial('1.2.0', '1.12.0').produces('1.12.0');
test.trial('1.2.0', '1.2.1').produces('1.2.1');
test.trial('11.2.1', '2.1.10').produces('11.2.1');
test.trial('2.11.1', '21.1.5').produces('21.1.5');
test.trial('2.11.0', '2.1.1').produces('2.11.0');
test.trial('3.5.1', '3.4.5').produces('3.5.1');

module.exports = test;