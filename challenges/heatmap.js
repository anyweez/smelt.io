const process = require('process');
const test = require(process.env.SOR_RUNNER_DIR).test;
const heatmap = require('./sor.target');

test('standard cases', t => {
    t.deepEqual(heatmap(0), { red: 0, green: 0, blue: 255 });

    t.deepEqual(heatmap(10), { red: 229.5, green: 0, blue: 25.5 });
    t.deepEqual(heatmap(25), { red: 63.75, green: 0, blue: 191.25 });
    t.deepEqual(heatmap(60), { red: 102, green: 0, blue: 153 });
    t.deepEqual(heatmap(75), { red: 63.75, green: 0, blue: 191.25 });
    t.deepEqual(heatmap(90), { red: 229.5, green: 0, blue: 25.5 });
    
    t.deepEqual(heatmap(100), { red: 255, green: 0, blue: 0 });
});