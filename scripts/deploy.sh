#!/bin/bash

# Deploy if this build is for the master branch. Otherwise no need to do any of this.
if [ "$TRAVIS_BRANCH" == "master" ]; then
    echo "Beginning deployment..."
    aws s3 sync public s3://sorjs.com --acl public-read
else
    echo "Skipping deployment (non-master branch $TRAVIS_BRANCH)."
fi
