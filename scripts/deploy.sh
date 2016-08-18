#!/bin/bash

# Deploy if this build is for the master branch. Otherwise no need to do
# any of this.
if [ "$TRAVIS_BRANCH" == "master" ]; then
    echo "Beginning deployment..."

    git config user.name "Travis CI"
    git config user.email "none@none.com"
    
    git remote rm origin
    git remote add origin https://anyweez:$GITHUB_ACCESS_TOKEN@github.com/anyweez/sorjs.com
    git pull origin gh-pages
    git checkout gh-pages

    find public
    rm -rf challenges/
    rm -rf node_modules/
    cp -r public/* .
    rm -rf public/

    find .
    git add *
    git push --set-upstream origin gh-pages
    git commit -a -m "Automated push from Travis"
    git push

else
    echo "Skipping deployment (non-master branch $TRAVIS_BRANCH)."
fi