#!/bin/bash

# Deploy if this build is for the master branch. Otherwise no need to do any of this.
if [ "$TRAVIS_BRANCH" == "master" ]; then
    echo "Beginning deployment..."

    git clone -b gh-pages https://anyweez:$GITHUB_ACCESS_TOKEN@github.com/anyweez/sorjs.com deploy

    # Copy in new content
    cp -r public/* deploy/
    cd deploy

    # Git configuration, commit, and push
    git config user.name "Travis CI"
    git config user.email "none@none.com"
    git add *
    git commit -a -m "Automated push from Travis"
    git push

else
    echo "Skipping deployment (non-master branch $TRAVIS_BRANCH)."
fi