#!/bin/bash

# Define the branch to sync
BRANCH="main"

# Get the current date and time
CURRENT_DATE_TIME=$(date +"%Y-%m-%d %H:%M:%S")

# Change to the directory of your repository (optional)
# cd /path/to/your/repository

# Pull the latest changes from the remote repository
echo "Pulling the latest changes from the remote repository..."
git pull origin $BRANCH

# Check for any conflicts during the pull
if [ $? -ne 0 ]
then
  echo "Error: Failed to pull the latest changes."
  exit 1
fi

# Stage all changes
echo "Staging all changes..."
git add .

# Commit the changes with the current date and time as the message
echo "Committing changes..."
git commit -m "Automated commit on $CURRENT_DATE_TIME"

# Check if the commit was successful
if [ $? -ne 0 ]
then
  echo "Error: Failed to commit changes. Ensure you have staged files."
  exit 1
fi

# Pull the latest changes again to avoid conflicts
echo "Pulling the latest changes again to avoid conflicts..."
git pull origin $BRANCH

# Check for any conflicts during the pull
if [ $? -ne 0 ]
then
  echo "Error: Failed to pull the latest changes."
  exit 1
fi

# Push the changes to the remote repository
echo "Pushing changes to the remote repository..."
git push origin $BRANCH

# Check if the push was successful
if [ $? -ne 0 ]
then
  echo "Error: Failed to push changes."
  exit 1
fi

echo "Successfully synced the local repository with the remote repository."

