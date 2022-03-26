#!/bin/sh
cd /Users/hanjing/GitRepositories/nodejs-blog/blog1/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log