const piglatin = require('./sor.target');
const runner = require(`${process.env.SOR_MENTOR_PATH}/runner`);

const test = runner.test(piglatin);

// convert single words
test.trial('tower').produces('owertay');
test.trial('trombone').produces('rombonetay');
test.trial('I').produces('Iay');
test.trial('chomp').produces('hompcay');
test.trial('be').produces('ebay');

// convert sentences
test.trial('once before').produces('nceoay eforebay');
test.trial('coding time').produces('odingcay imetay');
test.trial('cows eat stacks of grass').produces('owscay ateay tackssay foay rassgay');
test.trial('xmen distribute justice').produces('menxay istributeday usticejay');

module.exports = test;