# sorjs.com

[![Build Status](https://travis-ci.org/anyweez/sorjs.com.svg?branch=master)](https://travis-ci.org/anyweez/sorjs.com)

Web site and serverside content for [sor](https://github.com/anyweez/sor) client. 

Sor is a community project and accepts challenge proposals from outside contributors. Approved challenges will be immediately available to all `sor` users.

## Submitting challenges

Challenges should be thought of as practice problems; there's no specific target difficulty. Sor maintainers reserve the right to reject any proposal, but use the following guidelines to ensure you're creating something great for the community.

1. Provide a concise title, description, and sample. Provide a variety of test cases that run using [Ava](https://github.com/avajs/ava).
2. Be concise.
3. Generally speaking, bias towards problem statements that will be understood by the majority of the Javascript community. This doesn't mean it needs to be *solveable* by the majority, but most developers who read the challenge description should be able to understand what it's asking them to do.
4. Do not submit challenges that are very similar to existing challenges.
5. All tests should be runnable in a browserless environment (i.e. Node). We officially support Node 6+.

If you want to submit a challenge, you should submit a pull request (or issue if you have an idea but no code). Challenges consist of a JSON definition file and a JS test file. Every challenge must have both of these files.