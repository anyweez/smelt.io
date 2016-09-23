#!/usr/bin/env node
/**
 * This script verifies that all resources are available for each challenge. Validation of the content of 
 * each resource is done elsewhere (usually in the gulp build).
 * 
 * In particular, this script:
 *  - Gets the list of challenges that have difficulties defined.
 *  - Reads in all definitions and ensures they match the difficulty list.
 *  - Reads in all tests and ensures they match the difficulty list.
 *  - Reads in all solutions and ensures they match the difficulty list.
 */

const fs = require('mz/fs');
let challenges = new Set();

/* Load difficulties and add names to the set. */
let difficulties = JSON.parse(fs.readFileSync('difficulty.json')).scores;

for (let current in difficulties) {
    if (!challenges.has(current)) challenges.add(current);
    else throw new Error('Same challenge defined twice in difficulty.json.');
}

console.log(`Loaded ${challenges.size} challenges from difficulty.json`);

/**
 * Check to ensure the correct number of challenge definitions are available. Throw an
 * error if there are too many or too few.
 */
let definitions = fs.readdirSync('challenges/')
    .filter(x => x.endsWith('.json'));

if (challenges.size > definitions.length) throw new Error(`Missing ${challenges.size - definitions.length} challenge definition(s)`);
else if (definitions.length > challenges.size) throw new Error(`Too many challenge definition(s)`);

/**
 * Ensure all definitions are for expected challenges.
 */
for (let name of definitions.map(x => x.split('.')[0])) {
    if (!challenges.has(name)) throw new Error(`Definition for unknown challenge: ${name}`);
}

/**
 * Check to ensure the correct number of challenge tests are available. Error if not.
 */
let tests = fs.readdirSync('challenges/')
    .filter(x => x.endsWith('.js'));

if (challenges.size > tests.length) throw new Error(`Missing ${challenges.size - tests.length} challenge test(s)`);
else if (tests.length > challenges.size) throw new Error(`Too many challenge test(s)`);

/**
 * Ensure all definitions are for expected challenges.
 */
for (let name of tests.map(x => x.split('.')[0])) {
    if (!challenges.has(name)) throw new Error(`Tests for unknown challenge: ${name}`);
}

/**
 * Check that all problems have solutions.
 */
let solutions = fs.readdirSync('solutions/')
    .filter(x => x.endsWith('.js'));

if (challenges.size > solutions.length) throw new Error(`Missing ${challenges.size - solutions.length} challenge solutions(s)`);
else if (solutions.length > challenges.size) throw new Error(`Too many challenge definition(s)`);

/**
 * Ensure all definitions are for expected challenges.
 */
for (let name of solutions.map(x => x.split('.')[0])) {
    if (!challenges.has(name)) throw new Error(`Solution for unknown challenge: ${name}`);
}

console.log('Success!');
