const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const piglatin = require('./sor.target');

test('Convert single words', t => {
    t.deepEqual(piglatin('tower'), 'owertay');
    t.deepEqual(piglatin('trombone'), 'rombonetay');
    t.deepEqual(piglatin('I'), 'Iay');
    t.deepEqual(piglatin('chomp'), 'hompcay');
    t.deepEqual(piglatin('be'), 'ebay');
});

test('Convert sentences', t => {
    t.deepEqual(piglatin('once before'), 'nceoay eforebay');
    t.deepEqual(piglatin('coding time'), 'odingcay imetay');
    t.deepEqual(piglatin('cows eat stacks of grass'), 'owscay ateay tackssay foay rassgay');
    t.deepEqual(piglatin('xmen distribute justice'), 'menxay istributeday usticejay');
});