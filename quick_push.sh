#!/bin/bash
read -p "Commit description: " desc
git add . && \
git add -u && \
git commit -m "$desc" && \
git push origin develop && \
git checkout staging && \
git merge develop && \
git push origin staging && \
git push staging-heroku staging:master && \
git checkout master && \
git merge staging && \
git push origin master && \
git push production-heroku master:master && \
git checkout develop
