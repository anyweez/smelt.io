# sorjs.com

[![Build Status](https://travis-ci.org/anyweez/sorjs.com.svg?branch=master)](https://travis-ci.org/anyweez/sorjs.com)
[![chat on gitter](https://img.shields.io/gitter/room/gitterHQ/gitter.svg)](https://gitter.im/sorjs/Lobby#)

Sor is a community project and accepts challenge proposals from outside contributors. Approved challenges will be immediately available to all users of the [sor client](https://github.com/anyweez/sor).

## Challenge guidelines

Challenges should be thought of as practice problems; they shouldn't require complex frameworks or thousands of lines of code to solve. Sor maintainers reserve the right to reject any proposal, but use the following guidelines to ensure you're creating something great for the community.

1. The challenge should be in *solving the problem, not reading the question*. Be concise and clear. Avoid complex storylines. Include examples. Provide a variety of test cases that run using [ava](https://github.com/avajs/ava) that provide meaningful feedback to users.
2. Generally speaking, bias towards problem statements that will be understood by the majority of the Javascript community. This doesn't mean it needs to be *solveable* by the majority, but most developers who read the challenge description should be able to understand what it's asking them to do.
3. Do not submit challenges that are very similar to existing challenges.
4. All tests should be runnable in a browserless environment (i.e. Node 6+) and shouldn't lean heavily on third party libraries. Use of system calls or resources outside of the process should be avoided whenever possible.
5. All tests and challenge text should (currently) be in English. Depending on community interest we may internationalize later.

## Submitting challenges

If you want to submit a challenge, you've got two options:

1. [Create an issue on this repository](https://github.com/anyweez/sorjs.com/issues/new?labels=challenge) describing the problem you're proposing, and ideally an example solution.
2. Submit a pull request that creates a new challenge, including `challenges/<your-problem>.js` (tests), `solutions/<your-problem>.js` (example solution; must pass all tests!), and a `challenges/<your-problem>.json` (challenge definition). Here are some [examples](https://github.com/anyweez/sorjs.com/tree/master/challenges) as well as the [challenge schema](https://github.com/anyweez/sorjs.com/blob/master/schema/challenge.json).

Challenges are composed of three files, each of which must share the same filename (sans extension):

1. The *challenge definition* describes all metadata related to the challenge. There is a well-defined schema for challenge definitions [available here](https://github.com/anyweez/sorjs.com/blob/master/schema/challenge.json). Challenge definitions are JSON files kept in the `challenges/` directory. Here are some [examples](https://github.com/anyweez/sorjs.com/tree/master/challenges).
2. The *challenge tests* are [ava](https://github.com/avajs/ava) tests and validate the correctness of a particular solution. Challenge tests are Javascript files kept in the `challenges/` directory. [Examples](https://github.com/anyweez/sorjs.com/tree/master/challenges).
3. The *sample solution*, which must pass all of the challenge tests. Solutions are Javascript files kept in the `solutions/` directory. [Examples](https://github.com/anyweez/sorjs.com/tree/master/solutions).

## Feedback

Feedback and feature suggestions are welcome - please [file issues](https://github.com/anyweez/sorjs.com/issues).
