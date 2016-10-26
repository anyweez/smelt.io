const heatmap = require('./sor.target');
const runner = require(`${process.env.SOR_MENTOR_PATH}/runner`);

const test = runner.test(heatmap);

// Works with no off events
test.trial(0).produces({ red: 0, green: 0, blue: 255 });
test.trial(10).produces({ red: 25.5, green: 0, blue: 229.5 });
test.trial(25).produces({ red: 63.75, green: 0, blue: 191.25 });
test.trial(60).produces({ red: 153, green: 0, blue: 102 });
test.trial(75).produces({ red: 191.25, green: 0, blue: 63.75 });
test.trial(90).produces({ red: 229.5, green: 0, blue: 25.5 });
test.trial(100).produces({ red: 255, green: 0, blue: 0 });

module.exports = test;