#!/usr/bin/env sh

# abort on errors
set -e

# build
cd flexienok/
echo "##############################"
echo
echo "installing..."
echo
echo "##############################"
npm i
echo "##############################"
echo
echo "Building..."
echo
echo "##############################"
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

  
echo '<meta http-equiv="Refresh" content="0; url=https://flexienok.github.io/" />' > 404.html

git init
git add -A
git commit -m 'deploy'

echo "##############################"
echo
echo "Commiting..."
echo
echo "##############################"

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:flexienok/flexienok.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:flexienok/flexienok.github.io.git master:master

cd -