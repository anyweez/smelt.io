const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const muncher = require('./sor.target');

test('single price is present', t => {
    t.deepEqual(muncher('<div><p class="price">$18.99</p></div>'), 18.99);
    t.deepEqual(muncher('<h1>Lessons available for only $5!</h1>'), 5);
    t.deepEqual(muncher("<p>I've given you $15 2 times today!</p>"), 15);
});

test('no prices present', t => {
    t.deepEqual(muncher('<div>Pizza and eggs for only $5.99999</div>'), null);
    t.deepEqual(muncher('<cite>"Sorry but $5.9 is not a valid price," she said.</cite>'), null);
    t.deepEqual(muncher('<cite>The unfinished graffiti read "$5."</cite>'), null);
    t.deepEqual(muncher("<section><p class='highlight'>That'll be 5.</p></section>"), null);
});