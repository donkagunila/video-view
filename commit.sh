#!/bin/bash
echo $'\e[32;1mStatus of the files \e[0m'
git status
echo add all files with git add .? \(y/n\) read varans
git add .
echo please enter message
read varmessage
echo git commit -m "$varmessage"
git commit -m "$varmessage"
echo git push
git push