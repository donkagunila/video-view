#!/bin/bash
echo Status of the files
git status
echo addin
git add .
echo please enter message
read varmessage
echo git commit -m "$varmessage"
git commit -m "$varmessage"
echo git push
git push