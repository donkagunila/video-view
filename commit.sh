#!/bin/bash
echo $'\e[32;1mStatus of the files \e[0m'
git status
printf $'\e[32;1mAdd all files with git add . ? (y/n) \e[0m' 
read -r varans
if [[ $varans = 'y' || $varans = 'Y' || $varans = ''  ]]; then
	git add .
	printf $'\e[32;1mEnter commit message \e[0m'
	read -r varmessage
	git commit -m "$varmessage"
	echo $'\e[32;1mPushing changes to repo\e[0m'
	git push
else
	exit 0
fi