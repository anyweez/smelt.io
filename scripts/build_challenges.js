'use strict'
const fs = require('mz/fs');

/**
 * This script reads in all raw challenges specified in the challenges directory. A challenge is
 * composed of a JSON declaration file and a JS file that specifies all tests to be used to evaluate
 * the challenge.
 */

// Read all JSON files in the challenges/ directory.
// Generate output public/challenges.json
// Copy all JS to public/challenges

function convertChallenge(raw) {
    return {
        title: raw.name,
        func: raw.func,
        description: raw.description,
    };
}

/**
 * Read all files in the challenge directory. JSON and JS files are processed separately.
 */
fs.readdir('challenges/').then(filenames => {
    /**
     * JSON files first. Read and validate all, then output `challenges.json` and copy content over.
     */
    let json = filenames.filter(name => name.endsWith('.json'));

    Promise.all(json.map(name => {
        return fs.readFile(`challenges/${name}`).then(content => JSON.parse(content));
    })).then(results => {
        return fs.writeFile('./public/challenges.json', JSON.stringify(results.map(convertChallenge)));
    });

    /**
     * Read in all JS files that were referenced in the JSON files, and copy them to the `challenges/` directory.
     */
    Promise.all(json.map(name => {
        return fs.readFile(`challenges/${name}`).then(results => JSON.parse(results));
    })).then(results => {
        // Create the directory if it doesn't exist.
        try { fs.mkdirSync('public/challenges'); } 
        catch (e) {}

        results.forEach(record => {
            fs.createReadStream(`challenges/${record.tests}`).pipe(fs.createWriteStream(`public/challenges/${record.tests}`));
        });
    });
});