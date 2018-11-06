#!/bin/bash
git add .

read varmessage
git commit -m "$varmessage"
git push