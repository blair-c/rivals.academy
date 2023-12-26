#!/bin/bash

# To be run when a new lecture is added, generates compressed videos
# Pass in 1 arg: name of directory in lectures

if [ $# -eq 0 ]; then
    echo "$0: Missing arguments"
    exit 1
elif [ $# -gt 1 ]; then
    echo "$0: Too many arguments: $@"
    exit 1
fi

dir="content/lectures/$1/vid"
if [ ! -d "$dir" ]; then
    echo "$0: $dir directory not found"
    exit 1
fi

mkdir "$dir"/compressed
echo "Created $dir/compressed"

ffmpeg=~/audio-orchestrator-ffmpeg/bin/ffmpeg
for i in "$dir"/*.mp4; do
    $ffmpeg -i "$i" -vcodec h264 -b:v 2000k -an $(dirname $i)/compressed/$(basename $i)
done
