
set -e


npm run build


cd dist

git init
git add -A
git commit -m 'deploy'


git push -f https://github.com/chiehlin0117/my_cv.git master:gh-pages

cd -

