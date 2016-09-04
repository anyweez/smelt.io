# sorjs.com

[![Build Status](https://travis-ci.org/anyweez/sorjs.com.svg?branch=master)](https://travis-ci.org/anyweez/sorjs.com)

Sor is a community project and accepts challenge proposals from outside contributors. Approved challenges will be immediately available to all users of the [sor client](https://github.com/anyweez/sor).

## Submitting challenges

Challenges should be thought of as practice problems; there's no specific target difficulty. Sor maintainers reserve the right to reject any proposal, but use the following guidelines to ensure you're creating something great for the community.

1. The challenge should be in *solving the problem, not reading the question*. Be concise and clear. Avoid complex storylines. Include examples. Provide a variety of test cases that run using [ava](https://github.com/avajs/ava) that provide meaningful feedback to users.
2. Generally speaking, bias towards problem statements that will be understood by the majority of the Javascript community. This doesn't mean it needs to be *solveable* by the majority, but most developers who read the challenge description should be able to understand what it's asking them to do.
3. Do not submit challenges that are very similar to existing challenges.
4. All tests should be runnable in a browserless environment (i.e. Node 6+) and shouldn't lean heavily on third party libraries.
5. All tests should (currently) be in English. Depending on community interest we may internationalize later.

If you want to submit a challenge, you should [create an issue on this repository](https://github.com/anyweez/sorjs.com/issues/new?labels=challenge). You can also submit a pull request with both a JS and JSON file (see [examples](https://github.com/anyweez/sorjs.com/tree/master/challenges) and the [challenge schema](https://github.com/anyweez/sorjs.com/blob/master/schema/challenge.json)).

## Challenge schema

There is a strict schema for challenge definitions [available here](https://github.com/anyweez/sorjs.com/blob/master/schema/challenge.json). This schema will likely change some over time; contributors are not expected to update submitted challenges after the challenge has been accepted.

## Feedback

Feedback and feature suggestions are welcome - please [file issues](https://github.com/anyweez/sorjs.com/issues).