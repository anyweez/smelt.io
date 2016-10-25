const muncher = require('./sor.target');
const runner = require('./mentor/runner');

const test = runner.test(muncher);

// Single run of x's
test.trial('<div><p class="price">$18.99</p></div>').produces(18.99);
test.trial('<h1>Lessons available for only $5!</h1>').produces(5);
test.trial('<p>I\'ve given you $15 2 times today!</p>').produces(15);

// Multiple runs of x's
test.trial('<div>Pizza and eggs for only $5.99999</div>').produces(null);
test.trial('<cite>"Sorry but $5.9 is not a valid price," she said.</cite>').produces(null);
test.trial('<cite>The unfinished graffiti read "$5."</cite>').produces(null);
test.trial('<section><p class=\'highlight\'>That\'ll be 5.</p></section>').produces(null);

module.exports = test;