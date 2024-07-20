#!/bin/bash

# Enable exit on error
set -e

# Define default branch
DEFAULT_BRANCH="main"
BRANCH=${1:-$DEFAULT_BRANCH}

# Get the current date and time
CURRENT_DATE_TIME=$(date +"%Y-%m-%d %H:%M:%S")

# Change to the directory of your repository (optional)
# cd /path/to/your/repository

# Pull the latest changes from the remote repository
echo "Pulling the latest changes from the remote repository..."
if ! git pull origin $BRANCH; then
  echo "Error: Failed to pull the latest changes. Resolve any conflicts and try again."
  exit 1
fi

# Check for untracked files
if git status --porcelain | grep -q '^??'; then
  echo "Error: There are untracked files. Please add or ignore them before proceeding."
  exit 1
fi

# Stage all changes
echo "Staging all changes..."
git add .

# Check if there are changes to commit
if ! git diff --cached --quiet; then
  # Commit the changes with the current date and time as the message
  echo "Committing changes..."
  if ! git commit -m "Automated commit on $CURRENT_DATE_TIME"; then
    echo "Error: Failed to commit changes. Ensure you have staged files."
    exit 1
  fi
else
  echo "No changes to commit."
fi

# Pull the latest changes again to avoid conflicts
echo "Pulling the latest changes again to avoid conflicts..."
if ! git pull origin $BRANCH; then
  echo "Error: Failed to pull the latest changes. Resolve any conflicts and try again."
  exit 1
fi

# Push the changes to the remote repository
echo "Pushing changes to the remote repository..."
if ! git push origin $BRANCH; then
  echo "Error: Failed to push changes."
  exit 1
fi

echo "Successfully synced the local repository with the remote repository."

