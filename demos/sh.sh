# Record iOS simulator
#   $1: file name, e.g. `recording`, defaults to current timestamp
#
# To stop recording interrupt with `ctrl-c`
#
# Usage: `recordIos ~/Desktop/file`
function recordIos() {
  filename=$1
  if [ -z "$filename" ]; then
    filename=$(date +"%Y-%m-%d-%H-%M-%S")
  fi
  xcrun simctl io booted recordVideo $filename.mov
}

# Record Android device (requires https://github.com/Genymobile/scrcpy)
#   $1: file name, e.g. `recording`, defaults to current timestamp
#
# To stop recording interrupt with `ctrl-c`
#
# Usage: `recordAndroid ~/Desktop/file`
function recordAndroid() {
  filename=$1
  if [ -z "$1" ]; then
    filename=$(date +"%Y-%m-%d-%H-%M-%S")
  fi
  scrcpy -m 720 --record $filename.mp4
}
