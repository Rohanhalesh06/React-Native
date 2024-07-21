#!/bin/bash

# Path to your Git repository
REPO_PATH="/home/rohan/React-Native"

# Change to your Git repository directory
cd "$REPO_PATH" || exit

while true; do

# Stage all changes
	echo "Staging all changes..."
	git add .
	sleep 5

done

