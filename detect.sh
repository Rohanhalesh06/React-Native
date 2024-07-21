#!/bin/bash

DIRECTORY_TO_WATCH="/home/rohan/React-Native"

# Change to your Git repository directory if needed
cd "$DIRECTORY_TO_WATCH" || exit

# Function to stage all changes
stage_changes() {
    git add .
    echo "Staged all changes."
}

# Start monitoring directory and filter out events for index.lock
inotifywait -m -r -e modify,attrib,close_write,move,create,delete "$DIRECTORY_TO_WATCH" |
while read -r path action file; do
    # Skip if the file is index.lock
    if [[ "$file" == "index.lock" ]]; then
        continue
    fi
    
    echo "Detected change: $action on $file"
    stage_changes
done

