#!/bin/bash

# Deploy if this build is for the master branch. Otherwise no need to do
# any of this.
if [ "$TRAVIS_BRANCH" == "master" ]; then
    echo "Beginning deployment..."


    # Remove files that don't need to be deployed'
#    find public
#    rm *
#    rm -rf challenges/
#    rm -rf node_modules/

    git clone -b gh-pages https://anyweez:$GITHUB_ACCESS_TOKEN@github.com/anyweez/sorjs.com deploy

#    git remote rm origin
#    git remote add origin https://anyweez:$GITHUB_ACCESS_TOKEN@github.com/anyweez/sorjs.com
#    git pull origin gh-pages
#    git checkout gh-pages

    # Copy in new content
    cp -r public/* deploy/
#    rm -rf public/

#    find .
    cd deploy

    # Git configuration, commit, and push
    git config user.name "Travis CI"
    git config user.email "none@none.com"
    git add *
#    git push --set-upstream origin gh-pages
    git commit -a -m "Automated push from Travis"
    git push

else
    echo "Skipping deployment (non-master branch $TRAVIS_BRANCH)."
fi