#!/bin/bash

DIRECTORY_TO_WATCH="/home/rohan/React-Native"

# Change to your Git repository directory if needed
cd "$DIRECTORY_TO_WATCH" || exit

# Function to stage changes if there are any
stage_changes() {
    # Get a list of all modified files
    local modified_files
    modified_files=$(git status --porcelain | awk '{print $2}' | grep -v 'index.lock')

    # Check if there are any modified files
    if [ -n "$modified_files" ]; then
        git add $modified_files
        echo "Staged changes in files: $modified_files"
    else
        echo "No files to stage."
    fi
}

# Start monitoring directory
inotifywait -m -r -e modify,attrib,close_write,move,create,delete "$DIRECTORY_TO_WATCH" |
while read -r path action file; do
    echo "Detected change: $action on $file"
    stage_changes
done

